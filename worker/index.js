const STREAM_URL = 'http://usa3.fastcast4u.com:1080/stream';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '/health') {
    event.respondWith(new Response('OK', { status: 200 }));
    return;
  }
  if (url.pathname === '/stream') {
    event.respondWith(fetch(STREAM_URL, {
      headers: { 'Icy-MetaData': '1' },
    }).then(response => {
      const headers = new Headers(response.headers);
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      headers.set('Access-Control-Allow-Headers', '*');
      return new Response(response.body, { status: response.status, headers });
    }).catch(() => new Response('Stream error', { status: 502 })));
    return;
  }
  event.respondWith(new Response('Proxy Esmeralda', { status: 200 }));
});
