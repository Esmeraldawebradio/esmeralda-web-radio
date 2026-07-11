# Esmeralda Web Rádio — DESIGN.md

## Visual Theme

**Modern & polished web radio** — clean, app-like, driver-safe. Player-first hierarchy. Subtle functional motion. System theme (prefers-color-scheme). Teal/cyan/blue brand identity from current "Mergulhado" gradient.

## Color Palette (OKLCH)

### Light Mode

```css
:root {
  /* Brand anchor — teal/cyan family (~198°) */
  --color-primary: oklch(0.55 0.15 198);      /* Main brand - play button, active states */
  --color-primary-hover: oklch(0.50 0.16 198);
  --color-primary-active: oklch(0.45 0.17 198);

  /* Accent — distinct hue & lightness from primary */
  --color-accent: oklch(0.72 0.12 330);       /* Coral/pink for badges, live indicator, CTAs */
  --color-accent-hover: oklch(0.68 0.13 330);

  /* Surfaces — pure white base, brand-tinted neutrals */
  --color-bg: oklch(1.000 0.000 0);           /* Pure white */
  --color-surface: oklch(0.985 0.003 198);    /* Barely tinted toward brand hue */
  --color-surface-elevated: oklch(1.000 0.000 0); /* Cards, modals */

  /* Text — high contrast, brand-tinted ink */
  --color-ink: oklch(0.18 0.008 198);         /* Near-black, slight brand warmth */
  --color-ink-muted: oklch(0.45 0.006 198);   /* Secondary text, ≥4.5:1 on bg */
  --color-ink-subtle: oklch(0.60 0.004 198);  /* Placeholders, timestamps */

  /* Borders & dividers */
  --color-border: oklch(0.90 0.004 198);
  --color-border-strong: oklch(0.82 0.006 198);

  /* Semantic states */
  --color-success: oklch(0.52 0.12 145);      /* Green - connected, playing */
  --color-warning: oklch(0.68 0.14 85);       /* Amber - buffering */
  --color-error: oklch(0.55 0.18 25);         /* Red - connection error */

  /* Focus ring */
  --color-focus: oklch(0.55 0.15 198 / 0.4);
}
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: oklch(0.65 0.16 198);       /* Brighter for dark bg */
    --color-primary-hover: oklch(0.70 0.15 198);
    --color-primary-active: oklch(0.60 0.17 198);

    --color-accent: oklch(0.75 0.13 330);
    --color-accent-hover: oklch(0.78 0.12 330);

    --color-bg: oklch(0.06 0.000 0);             /* Near-black, pure */
    --color-surface: oklch(0.09 0.003 198);      /* Slightly elevated, brand-tinted */
    --color-surface-elevated: oklch(0.11 0.004 198);

    --color-ink: oklch(0.96 0.004 198);          /* Near-white, slight brand coolness */
    --color-ink-muted: oklch(0.70 0.005 198);
    --color-ink-subtle: oklch(0.55 0.004 198);

    --color-border: oklch(0.18 0.004 198);
    --color-border-strong: oklch(0.24 0.006 198);

    --color-success: oklch(0.60 0.13 145);
    --color-warning: oklch(0.72 0.14 85);
    --color-error: oklch(0.62 0.18 25);

    --color-focus: oklch(0.65 0.16 198 / 0.5);
  }
}
```

### Forced Light/Dark (override system)

```css
[data-theme="light"] { /* light vars */ }
[data-theme="dark"] { /* dark vars */ }
```

## Color Strategy

**Committed** — primary teal/cyan carries 30-40% of surface (player bar, primary buttons, live badge, focus states). Accent coral/pink for "LIVE" pulse, notification badges. Pure white/black surfaces let brand colors do the work.

## Typography

```css
:root {
  /* Fluid type scale — clamp(min, preferred, max) */
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;

  /* Display */
  --text-display: clamp(2.5rem, 5vw + 1rem, 4.5rem);     /* Hero station name */
  --text-display-ls: -0.02em;

  /* Headings */
  --text-h1: clamp(2rem, 3vw + 1rem, 3rem);
  --text-h2: clamp(1.5rem, 2vw + 0.8rem, 2.25rem);
  --text-h3: clamp(1.25rem, 1.5vw + 0.6rem, 1.75rem);

  /* Body */
  --text-lg: 1.125rem;    /* 18px - lead paragraph */
  --text-base: 1rem;      /* 16px - body */
  --text-sm: 0.875rem;    /* 14px - meta, captions */
  --text-xs: 0.75rem;     /* 12px - timestamps, badges */

  /* Line heights */
  --leading-tight: 1.15;
  --leading-snug: 1.35;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  /* Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}

/* Text wrapping */
h1, h2, h3 { text-wrap: balance; }
p, li, article { text-wrap: pretty; max-width: 70ch; }
```

## Spacing & Layout

```css
:root {
  /* Base unit: 4px */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */

  /* Layout */
  --container-max: 72rem;      /* 1152px */
  --container-narrow: 48rem;   /* 768px */
  --header-height: 4rem;       /* 64px */
  --player-height: 4.5rem;     /* 72px - fixed bottom bar */
  --player-height-mobile: 5rem; /* 80px */

  /* Border radius */
  --radius-sm: 0.375rem;   /* 6px - buttons, badges */
  --radius-md: 0.5rem;     /* 8px - cards, inputs */
  --radius-lg: 0.75rem;    /* 12px - modals, sheets */
  --radius-full: 9999px;   /* Pills, avatar */
}
```

## Motion & Animation

```css
:root {
  /* Durations */
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;

  /* Easings — exponential out */
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Play button press */

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    :root {
      --duration-fast: 0ms;
      --duration-base: 0ms;
      --duration-slow: 0ms;
    }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* Key animations */
@keyframes pulse-live {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes spin-buffer {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes slide-up-fade {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Components

### Player Bar (Fixed Bottom)

```css
.player-bar {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: var(--player-height);
  background: var(--color-surface-elevated);
  border-top: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: 0 var(--space-4);
  z-index: 100; /* Above content, below modals */
}

@media (max-width: 480px) {
  .player-bar { height: var(--player-height-mobile); }
}
```

### Play Button

```css
.btn-play {
  width: 48px; height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  color: white;
  border: none;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background-color var(--duration-base) var(--ease-out-quart),
              transform var(--duration-fast) var(--ease-spring);
}

.btn-play:hover { background: var(--color-primary-hover); }
.btn-play:active { transform: scale(0.92); }
.btn-play:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.btn-play.playing { background: var(--color-success); }
.btn-play.buffering::after {
  content: ""; width: 20px; height: 20px;
  border: 2px solid transparent; border-top-color: currentColor;
  border-radius: 50%; animation: spin-buffer 0.8s linear infinite;
}
```

### Live Badge

```css
.badge-live {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 2px 8px; border-radius: var(--radius-full);
  background: var(--color-accent); color: white;
  font-size: var(--text-xs); font-weight: var(--weight-semibold);
}

.badge-live::before {
  content: ""; width: 6px; height: 6px;
  background: currentColor; border-radius: 50%;
  animation: pulse-live 1.5s ease-in-out infinite;
}
```

### Schedule Card

```css
.schedule-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  transition: border-color var(--duration-base) var(--ease-out-quart),
              box-shadow var(--duration-base) var(--ease-out-quart);
}

.schedule-card:hover {
  border-color: var(--color-border-strong);
  box-shadow: 0 4px 12px oklch(0 0 0 / 0.08);
}

.schedule-card.current {
  border-color: var(--color-primary);
  background: oklch(from var(--color-primary) l c h / 0.06);
}
```

### Z-Index Scale

```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-player: 300;       /* Fixed player bar */
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-toast: 600;
  --z-tooltip: 700;
}
```

## Accessibility

- **WCAG 2.1 AA** minimum — all text ≥4.5:1 (body), ≥3:1 (large)
- **Focus visible** — 2px solid focus ring with offset on all interactive
- **Reduced motion** — all animations disable via prefers-reduced-motion
- **Touch targets** — minimum 44×44px (48×48px for primary actions)
- **Color independence** — status never conveyed by color alone (icons + text)
- **ARIA** — live region for now-playing, proper button states (aria-pressed, aria-live)

## Implementation Notes

- Astro 7 static site → zero-JS by default, hydrate only player components
- CSS custom properties for theming, no runtime theme switching needed (system)
- Player uses native `<audio>` with `preload="metadata"` + CORS proxy fallback
- Service Worker for offline schedule caching (future enhancement)

## Open for Refinement

- Exact Plus Jakarta Sans weight subset (400, 500, 600, 700)
- Player bar height on tablet (between mobile/desktop)
- Schedule card density on wide screens (2-col grid > 768px)
- Now-playing metadata parsing from Shoutcast/Icecast headers