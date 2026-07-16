async function handleRequest(event) {
  const url = new URL(event.request.url);
  const path = url.pathname;

  if (path === '/health') {
    return new Response('OK', { status: 200 });
  }

  if (path.includes('icecast')) {
    try {
      const r = await fetch('http://137.131.169.167:8000/status-json.xsl');
      const t = await r.text();
      return new Response(`icecast ${r.status}: ${t.substring(0, 200)}`);
    } catch (e) {
      return new Response(`icecast error: ${e.message}`);
    }
  }

  if (path.includes('azuracast')) {
    try {
      const r = await fetch('http://137.131.169.167/api/nowplaying/esmeralda');
      const t = await r.text();
      return new Response(`azuracast ${r.status}: ${t.substring(0, 200)}`);
    } catch (e) {
      return new Response(`azuracast error: ${e.message}`);
    }
  }

  return new Response(`path: ${path}`, { status: 200 });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});
