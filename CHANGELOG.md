# Changelog

## [1.0.0] - 2026-03-30

### Added
- Migrated Replit Brutalist MAGZ website into standalone repo
- React 19 + Vite 7 + Tailwind CSS 4 frontend
- Framer Motion animations across all components (Hero, Navbar, Services, Stats, Brands, Gallery, Footer, Careers)
- Lenis smooth scroll integration
- @chenglou/pretext text measurement for responsive heading layout (with Vite `optimizeDeps` config)
- Wouter client-side routing (`/`, `/careers`, 404)
- react-countup animated statistics (250+ Athletes, 50+ Brands, 75+ Universities, 500M+ Impressions, 30+ Agencies)
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
