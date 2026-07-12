const STREAM_URL = 'http://usa3.fastcast4u.com:1080/stream';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.pathname === '/health') {
    return event.respondWith(new Response('OK', { status: 200 }));
  }

  if (url.pathname === '/stream') {
    const upstream = fetch(STREAM_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    event.respondWith(
      upstream
        .then(response => {
          const headers = new Headers(response.headers);
          headers.set('Access-Control-Allow-Origin', '*');
          headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
          headers.set('Access-Control-Allow-Headers', '*');
          headers.set('Content-Type', 'audio/mpeg');
          headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers,
          });
        })
        .catch(() => new Response('Stream error', { status: 502 })),
    );
    return;
  }

  event.respondWith(new Response('Proxy Esmeralda', { status: 200 }));
});
