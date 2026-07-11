// Cloudflare Worker — Proxy de stream para Esmeralda Web Radio
// Faz fetch HTTP do stream e serve via HTTPS (sem mixed content)

const STREAM_URL = 'http://usa3.fastcast4u.com:1080/stream';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === '/health') {
      return new Response('OK', { status: 200 });
    }

    // Proxy o stream de audio
    if (url.pathname === '/stream') {
      try {
        const response = await fetch(STREAM_URL, {
          headers: { 'Icy-MetaData': '1' },
        });

        const headers = new Headers(response.headers);
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        headers.set('Access-Control-Allow-Headers', '*');

        return new Response(response.body, {
          status: response.status,
          headers,
        });
      } catch (err) {
        return new Response('Stream error', { status: 502 });
      }
    }

    return new Response('Proxy Esmeralda', { status: 200 });
  },
};
