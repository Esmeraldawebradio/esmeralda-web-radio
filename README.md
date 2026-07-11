# Esmeralda Web Rádio

A rádio web moderna que conecta você com música e entretenimento de qualidade.

**Stream ao vivo** · **PWA** · **Design responsivo**

## Funcionalidades

- Stream ao vivo com fallback CORS (HTTPS/HTTP)
- Player fixo na barra inferior com controles play/pause e volume
- Grade de programação diária (06:00–18:00)
- Modo escuro automático (prefers-color-scheme)
- PWA instalável com service worker e cache offline
- Design system próprio com tokens OKLCH
- SEO com Open Graph, Twitter Cards e JSON-LD
- Performance: zero JS por página, hidratação seletiva do player
- Acessibilidade: ARIA labels, skip-to-content, focus-visible, reduced-motion

## Stack

- [Astro](https://astro.build) — gerador de sites estáticos
- TypeScript · CSS custom properties (OKLCH)

## Desenvolvimento

```bash
npm install
npm run dev      # Servidor local (http://localhost:4321)
npm run build    # Build para produção → dist/
npm run preview  # Preview do build local
```

## Deploy

O deploy automático para GitHub Pages acontece via GitHub Actions (push na branch `master`).

URL: https://Esmeraldawebradio.github.io/esmeralda-web-radio/

## Estrutura

```
src/
  config.ts          — Configurações (stream, contato, programação)
  pages/index.astro  — Página principal
  pages/404.astro    — Página 404
  layouts/           — Layout base (header, footer, SEO)
  components/        — PlayerBar (player de áudio)
  styles/tokens.css  — Design tokens (cores, tipografia, spacing)
public/              — Assets estáticos (ícones, SW, manifest)
```

## Contato

- WhatsApp: wa.me/5574999999999
- Email: contato@esmeraldawebradio.com.br
