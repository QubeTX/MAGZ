# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies (requires pnpm: npm install -g pnpm)
pnpm run dev          # Dev server at http://localhost:5173 (exposed on 0.0.0.0 for network access)
pnpm run build        # Production build → artifacts/magz-website/dist/
pnpm run serve        # Preview production build
pnpm run typecheck    # TypeScript checking
```

Root scripts proxy into the single workspace package via `pnpm --filter @workspace/magz-website`.

## Architecture

**Monorepo with one package:** pnpm workspace containing `artifacts/magz-website` (React 19 + Vite 7 + Tailwind CSS 4). The workspace catalog in `pnpm-workspace.yaml` pins all shared dependency versions.

**Routing:** Wouter (lightweight client-side router). Routes: `/` (Home), `/careers` (CareersPage), catch-all (404). Router base is `import.meta.env.BASE_URL`. ScrollToTop component resets scroll on navigation.

**Smooth scroll:** Lenis initialized in App.tsx, exposed globally as `window.__lenis`. Components use it for programmatic scrolling (Navbar anchor links, accordion scroll-to).

**Section IDs** used for anchor navigation: `hero`, `about` (Services), `stats`, `brands`, `athletes` (Gallery), `careers`, `footer`. EmpoweringAthletes has no ID (not linked from nav). CareersPage has its own: `careers-hero`, `team`, `expertise`, `faq`, `cta`.

**Accordion pattern:** Reused in Services, CareersPage expertise, and CareersPage FAQ. All follow the same structure: `useState` for `openIndex`, `AnimatePresence` for expand/collapse, and a `setTimeout(() => lenis.scrollTo(el, { offset: -100, duration: 1 }), 500)` after opening. The 500ms delay must be >= the Framer Motion expand/collapse animation duration (also 500ms) so Lenis calculates scroll positions after layout settles.

**Text measurement:** @chenglou/pretext for responsive heading layout. Ships raw `.ts` source — requires `optimizeDeps.include` in Vite config and `allowImportingTsExtensions: true` in tsconfig. Used in `PretextHeading.tsx` and `Hero.tsx` subtitle via dynamic `import("@chenglou/pretext")`.

**Animations:** Framer Motion across all components. Common pattern: `motion.div` with `whileInView`, `useScroll`/`useTransform` for parallax, `AnimatePresence` for accordion expand/collapse. Custom easing: `[0.76, 0, 0.24, 1]`. Stats section uses react-countup for animated number counters.

**Icons:** lucide-react (primary) and react-icons are both available. Prefer lucide-react for consistency with existing usage (Navbar, CareersPage).

**Navbar structure:** The Navbar component returns a React Fragment (`<>`) with two siblings: the `<motion.nav>` element and the mobile menu `<AnimatePresence>` overlay. The overlay must NOT be nested inside `<motion.nav>` because the nav's `backdrop-filter: blur()` (applied when scrolled) creates a CSS containing block that breaks `position: fixed` on descendants.

**Page composition:** Home assembles sections in order: Navbar → Hero → Marquee → Services → Stats → Brands → Gallery → Careers → EmpoweringAthletes → Footer. CareersPage is standalone with its own Navbar and Footer wrapping hero, team cards, expertise accordion, FAQ accordion, and LinkedIn CTA.

**External assets:** Images and video load from AWS S3 (`magz.s3.us-east-1.amazonaws.com`). Brand partner logos are bundled locally in `public/brandLogos/` with per-logo size classes (`logoClass`). Social media icons load from S3 (`social_icons/` prefix).

## Styling

Tailwind CSS 4 with `@theme inline` in `src/index.css` (no separate tailwind config). Brutalist design system:

- Colors: Black `#0A0A0A`, White `#F5F5F5`, Orange `#F7941D`, Blue `#2D6BC6`
- Fonts: Guton (display at Black/ExtraBold weight + body, self-hosted from `public/fonts/Guton/`), Space Mono (monospace labels, Google Fonts)
- All `border-radius: 0 !important` forced globally
- Custom utilities: `.brutalist-button`, `.brutalist-border`, `.text-outline` (+ `-accent`, `-secondary` variants), `.gradient-text`, `.glow-accent`, `.glow-secondary`

Use `cn()` from `@/lib/utils` for conditional className merging (clsx + tailwind-merge). shadcn/ui configured (components.json, new-york style) but no UI primitives installed yet — `cn()` is the only piece in use.

## Import Alias

`@/*` maps to `src/*` (configured in both tsconfig.json and vite.config.ts).

## Testing

**Always use Playwright for visual/functional testing** — external images from S3 load correctly in Playwright but may fail in Chrome MCP due to extension/cache interference. Only use Chrome MCP if explicitly requested.

Playwright test pattern (global install, CommonJS):
```bash
NODE_PATH="C:/Users/hey/AppData/Roaming/npm/node_modules" node test-file.cjs
```

## Deployment

**Live site: [magzmarketing.com](https://magzmarketing.com)**

Vercel is connected to the GitHub repo (`github.com/QubeTX/MAGZ`, branch `main`). Every push to `main` auto-deploys to production — no manual deployment commands needed.
