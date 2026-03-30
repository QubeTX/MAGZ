# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies (requires pnpm: npm install -g pnpm)
pnpm run dev          # Dev server at http://localhost:5173
pnpm run build        # Production build → artifacts/magz-website/dist/
pnpm run serve        # Preview production build
pnpm run typecheck    # TypeScript checking
```

Root scripts proxy into the single workspace package via `pnpm --filter @workspace/magz-website`.

## Architecture

**Monorepo with one package:** pnpm workspace containing `artifacts/magz-website` (React 19 + Vite 7 + Tailwind CSS 4). The workspace catalog in `pnpm-workspace.yaml` pins all shared dependency versions.

**Routing:** Wouter (lightweight client-side router). Routes: `/` (Home), `/careers` (CareersPage), catch-all (404). Router base is `import.meta.env.BASE_URL`. ScrollToTop component resets scroll on navigation.

**Smooth scroll:** Lenis initialized in App.tsx, exposed globally as `window.__lenis`. Components use it for programmatic scrolling (Navbar anchor links, accordion scroll-to).

**Text measurement:** @chenglou/pretext for responsive heading layout. Ships raw `.ts` source — requires `optimizeDeps.include` in Vite config and `allowImportingTsExtensions: true` in tsconfig. Used in `PretextHeading.tsx` via dynamic import. Never use ResizeObserver with pretext shrinkwrap (causes oscillation) — use sync `clientWidth` reads + `window.resize` with RAF gate instead.

**Animations:** Framer Motion across all components. Common pattern: `motion.div` with `whileInView`, `useScroll`/`useTransform` for parallax, `AnimatePresence` for accordion expand/collapse. Custom easing: `[0.76, 0, 0.24, 1]`.

**External assets:** Images and video load from AWS S3 (`magz.s3.us-east-1.amazonaws.com`). Brand partner logos are bundled locally in `public/brandLogos/`.

## Styling

Tailwind CSS 4 with `@theme inline` in `src/index.css` (no separate tailwind config). Brutalist design system:

- Colors: Black `#0A0A0A`, White `#F5F5F5`, Orange `#F7941D`, Blue `#2D6BC6`
- Fonts: Makira (display at Black/ExtraBold weight + body, self-hosted from `public/fonts/Makira/`), Space Mono (monospace labels, Google Fonts)
- All `border-radius: 0 !important` forced globally
- Custom utilities: `.brutalist-button`, `.brutalist-border`, `.text-outline`, `.gradient-text`, `.glow-accent`

Use `cn()` from `@/lib/utils` for conditional className merging (clsx + tailwind-merge).

## Import Alias

`@/*` maps to `src/*` (configured in both tsconfig.json and vite.config.ts).

## Testing

**Always use Playwright for visual/functional testing** — external images from S3 load correctly in Playwright but may fail in Chrome MCP due to extension/cache interference. Only use Chrome MCP if explicitly requested.

Playwright test pattern (global install, CommonJS):
```bash
NODE_PATH="C:/Users/hey/AppData/Roaming/npm/node_modules" node test-file.cjs
```

## Deployment

Vercel auto-detects the Vite build. The repo is at `github.com/QubeTX/MAGZ`, branch `main`.
