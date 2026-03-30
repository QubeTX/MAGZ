# Changelog

## [1.4.2] - 2026-03-30

### Fixed
- Scroll lag/freeze when scrolling through the "Join the Team" section caused by accumulated main-thread overhead from competing animation systems

### Changed
- Gallery: replaced `transition-all` with `transition-[filter,opacity,transform]` on 16 images (browser was tracking ~50 properties per image instead of 3)
- Gallery: converted `motion.img` to plain `<img>` with CSS-only `group-hover:scale-[1.08]` (eliminates 16 Framer Motion subscriptions)
- Gallery: converted 48 `motion.div` overlay/label/bar elements to plain `<div>` (only used CSS `group-hover` transitions, not Framer Motion features)
- Gallery: added `content-visibility: auto` on grid container so browser skips rendering when scrolled off-screen
- Gallery: added `will-change-transform` on images for GPU compositor layer promotion
- Marquee: converted infinite Framer Motion `animate={{ x }}` to CSS `@keyframes marquee-scroll` (moves from JS rAF loop to compositor thread)
- Hero: converted 4 infinite Framer Motion animations (rotate, scale, bounce) to CSS `@keyframes` (eliminates 4 permanent JS rAF loops)
- Careers: added `loading="lazy"` to hero image

## [1.4.1] - 2026-03-30

### Added
- `vercel.json` with SPA catch-all rewrite (`/(.*) → /`) so Vercel serves `index.html` for all non-static routes, allowing the client-side Wouter router to render the custom 404 page instead of Vercel's default error page

## [1.4.0] - 2026-03-30

### Added
- Fully branded 404 page with animated hero ("404" gradient text with glitch effect, "OUT OF BOUNDS" text-outline subtitle), error marquee banner, and 3-card navigation section (Home, Careers, Find Us)
- Comprehensive `DESIGN.md` design system reference documenting brand identity, colors, typography, spacing, borders, custom CSS utilities, Framer Motion animation patterns, Lenis smooth scroll, Pretext heading measurement, accordion pattern, background layers, component inventory, page compositions, section IDs, external assets, icon usage, responsive breakpoints, routing, and dependencies

### Fixed
- Pre-existing TypeScript errors in Brands.tsx, Services.tsx, and CareersPage.tsx where Framer Motion `ease` arrays were typed as `number[]` instead of `[number, number, number, number]` tuples
- Removed unreachable `fullColorOnHover` code branch in Brands.tsx

## [1.3.1] - 2026-03-30

### Fixed
- Accordion scroll-to behavior on Careers page (expertise + FAQ) and index Services section. The 100ms setTimeout fired before the 500ms expand/collapse animations completed, causing Lenis to calculate scroll targets from intermediate layout positions. Increased timeout to 500ms so layout settles before scrolling.

## [1.3.0] - 2026-03-30

### Added
- "Empowering Athletes" section on home page (between Join the Team and Footer) with company mission copy from original MAGZ site
- Social media icons (black, native color) in Empowering Athletes section using SVG assets from S3 (`social_icons/`)
- Physical address ("5 Cowboys Way Ste 300, Frisco, TX") in Footer and Careers page CTA section
- Linktree (`linktr.ee/magzsports`) to Footer social links
- Missing sentence to AI-Powered Growth service description: "Built to support talent and agencies at every stage—from emerging athletes and transfer portal entrants to established professionals."

### Changed
- Statistics restored to original values: 300+ Athletes, 80+ Brands, 45+ Universities, 3B+ Social Impressions, 15+ Sports Agencies
- "FIND US" navbar button now opens Linktree (`linktr.ee/magzsports`) in new tab instead of scrolling to footer
- Footer LinkedIn URL corrected to `linkedin.com/company/magzsports/` (was `magzmarketing`)
- Footer Twitter/X URL updated to `x.com/magzmarketing` (was `twitter.com`)

### Removed
- TikTok social link (not present in original MAGZ site)

## [1.2.1] - 2026-03-30

### Fixed
- Mobile hamburger menu not covering full viewport when page is scrolled down. The overlay was a child of `<motion.nav>` which applies `backdrop-filter: blur()` when scrolled — this CSS property creates a new containing block that breaks `position: fixed` on descendants. Moved the overlay to a sibling element via React Fragment.

## [1.2.0] - 2026-03-30

### Changed
- Primary font from Makira to Guton Sans Serif (same 6 weights, self-hosted from `public/fonts/Guton/`)
- Stats/metrics numbers weight to ExtraBold (800) for better readability
- "Join the Team" image: capped height to 500px with center-cropping to stay proportional with left-side content
- Brand logo grid: per-logo sizing for visual consistency across different aspect ratios
  - Scaled down oversized logos (Buffalo Wild Wings, Charlie Hustle, Fore All)
  - Scaled up undersized logos (No Rivals, Q30, Undrafted, Socialpruf)
  - Normalized square logos (PGA, Raising Cane's, CFB Alerts) to consistent dimensions

### Removed
- Makira font files (replaced by Guton)

## [1.1.0] - 2026-03-30

### Added
- Makira Sans Serif font (6 weights: Regular, Medium, SemiBold, Bold, ExtraBold, Black) — self-hosted from `public/fonts/Makira/`
- 15 brand partner logos as local assets in `public/brandLogos/` (previously loaded from external domain)

### Changed
- Display font from Anton (Google Fonts) to Makira (self-hosted)
- Body font from Inter (Google Fonts) to Makira (self-hosted)
- Brand logo URLs from `magzmarketing.com` to local `/brandLogos/` paths
- Hero "MAGZ" heading weight to Black (900) for maximum impact
- Section headings (h1-h6) and marquee weight to ExtraBold (800)
- Hero "WE ARE" to "MAGZ" spacing increased slightly for breathing room
- Favicon from SVG to ICO (sourced from S3)
- Hero.tsx pretext measurement strings updated to reference Makira font

### Removed
- Google Fonts dependency for Anton and Inter (Space Mono retained via Google Fonts)
- Duplicate Inter Google Fonts `<link>` import from `index.html`
- External dependency on `magzmarketing.com` for brand logo assets

## [1.0.0] - 2026-03-30

### Added
- Migrated Replit Brutalist MAGZ website into standalone repo
- React 19 + Vite 7 + Tailwind CSS 4 frontend
- Framer Motion animations across all components (Hero, Navbar, Services, Stats, Brands, Gallery, Footer, Careers)
- Lenis smooth scroll integration
- @chenglou/pretext text measurement for responsive heading layout (with Vite `optimizeDeps` config)
- Wouter client-side routing (`/`, `/careers`, 404)
- react-countup animated statistics
- Brand partner logo grid with external image loading
- Athlete photo gallery with S3-hosted images
- Hero section with background video from S3
- Careers page with team info, expertise accordion, FAQs, and LinkedIn CTA
- Responsive navbar with mobile hamburger menu
- Footer with CTA, site menu, and social links
- Production build output to `artifacts/magz-website/dist/`

### Removed
- Replit-specific files (`.replit`, `replit.md`, `.replit-artifact/`, `requirements.yaml`, `.agents/`, `attached_assets/`)
- Replit Vite plugins (`@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`, `@replit/vite-plugin-runtime-error-modal`)
- Unused backend (`artifacts/api-server/` — Express 5, only had health endpoint)
- Unused mockup sandbox (`artifacts/mockup-sandbox/`)
- Unused shared libraries (`lib/api-spec`, `lib/api-zod`, `lib/api-client-react`, `lib/db`)
- Unused scripts package

### Changed
- Vite config: removed mandatory PORT/BASE_PATH env vars (defaults to 5173 and `/`)
- Vite config: added `optimizeDeps.include` for @chenglou/pretext raw TS source
- Build output directory simplified from `dist/public/` to `dist/`
- pnpm workspace simplified to only `artifacts/*`
- Root package.json: added convenience scripts (`dev`, `build`, `serve`, `typecheck`)
- Cleaned .gitignore for standard Node.js project
- Fresh pnpm lockfile without Replit dependencies
