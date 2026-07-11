# Esmeralda Web Rádio — PRODUCT.md

## Product Purpose

**Esmeralda Web Rádio** is a Brazilian web radio station focused on **live streaming for commuters and drivers** who need a reliable, instant-tune-in experience on mobile and desktop browsers. The player is the product — everything else (schedule, social, contact) supports the listening session.

## Target Users

**Primary:** Commuters/drivers in Brazil (especially Bahia region based on WhatsApp DDD 74) who want to tap once and hear the stream. They're on mobile data, in traffic, needing low-latency playback, HTTPS fallback via CORS proxy, and a UI that doesn't distract.

**Secondary:** Home/office listeners browsing the schedule, discovering hosts, following on socials.

## Platform

**Web** — Astro 7 static site deployed to GitHub Pages (`https://marlonsantiago60-wq.github.io/esmeralda-web-radio/`). Desktop and mobile browsers. No native app wrapper currently (App Store/Play Store links exist but point to placeholder URLs).

## Register

| Field | Value |
|-------|-------|
| **Brand** | Esmeralda Web Rádio |
| **Tagline** | A rádio web moderna que conecta você com música e entretenimento de qualidade |
| **Primary Color** | TBD — brand seed needed (current "Mergulhado" gradient suggests teal/cyan/blue palette) |
| **Typefaces** | TBD — system UI stack or modern sans (Inter, Plus Jakarta, etc.) |
| **Tone** | Modern & polished: clean, app-like, premium streaming quality. Minimal chrome, confident typography, purposeful motion. Not chatty or nostalgic. |
| **Primary CTA** | Play live stream (one tap, immediate audio) |
| **Secondary CTAs** | View schedule, WhatsApp contact, follow socials, app store links |
| **Anti-patterns** | Cluttered hero, auto-play on load (mobile blocks it anyway), gradient text, glassmorphism cards, hero-metric dashboard layout, tiny uppercase section eyebrows on every section |

## Strategic Design Principles

1. **Player first** — The stream button is the hero. Everything else is one tap/click away, never competing.
2. **Mobile-first, driver-safe** — Large tap targets, high contrast, no scroll-jacking, works one-handed.
3. **Reliability over flair** — HTTPS proxy fallback, visual buffering state, graceful degradation. The stream must start.
4. **Modern polish** — OKLCH color system, fluid type scale, meaningful micro-interactions (play/pulse, buffer spinner), respects `prefers-reduced-motion`.
5. **Brazilian context** — Portuguese copy, local time format (24h), WhatsApp as primary contact, DDD 74 awareness.

## Current Features (from config)

- **Live stream:** `http://usa3.fastcast4u.com:1080/stream` with CORS HTTPS fallback
- **Schedule:** 6 daily blocks (06:00–18:00) with hosts, genres, descriptions
- **Contact:** WhatsApp `5574999999999`, email `contato@esmeraldawebradio.com.br`
- **Social:** Instagram, Facebook, YouTube (links in README)
- **Apps:** Placeholder App Store / Google Play links

## Open Questions for DESIGN.md

- Brand seed color (OKLCH) — current "Mergulhado" gradient implies teal/cyan/blue family
- Typography: system stack vs. imported modern sans
- Motion language: subtle pulse on play, buffer skeleton, reduced-motion fallbacks
- Light/dark theme strategy — driver context suggests dark default, but brand may want light