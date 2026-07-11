/* Esmeralda Web Radio — Service Worker
 * Estrategia:
 *  - App shell em cache no install (offline fallback)
 *  - Navegacao: network-first com fallback para cache/offline
 *  - Assets estaticos (mesma origem): stale-while-revalidate
 *  - /proxy-stream: proxy do stream HTTP (contorna mixed content em HTTPS)
 */

const CACHE = 'esmeralda-v1';
const OFFLINE_URL = './404.html';
const PRECACHE = ['./', './404.html', './manifest.webmanifest', './favicon.svg'];
const STREAM_ORIGIN = 'http://usa3.fastcast4u.com:1080';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Proxy do stream de audio (para HTTPS, pois o stream e HTTP)
  if (url.pathname.endsWith('/proxy-stream')) {
    event.respondWith(proxyStream(event));
    return;
  }

  // Nao interceptar cross-origin
  if (url.origin !== self.location.origin) return;

  // Navegacoes (HTML): network-first
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Assets estaticos: stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

async function proxyStream() {
  try {
    const response = await fetch(STREAM_ORIGIN + '/stream', {
      mode: 'cors',
    });

    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Content-Type', 'audio/mpeg');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (err) {
    console.error('[SW] Proxy stream error:', err);
    return new Response('Stream unavailable', { status: 502 });
  }
}
