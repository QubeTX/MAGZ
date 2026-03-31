# MAGZ Marketing Website

Brutalist-designed marketing website for **MAGZ Marketing**, a sports marketing agency specializing in athlete brand activation, NIL strategy, transfer portal operations, and media distribution. Based in Frisco, TX.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Text Measurement | @chenglou/pretext |
| Routing | Wouter |
| Counter Animations | react-countup |
| Package Manager | pnpm (workspace monorepo) |
| Deployment | Vercel |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero video, scrolling marquee, services accordion, animated stats, brand partner grid, athlete photo gallery, careers teaser, footer CTA |
| `/careers` | Careers — team overview, partnership expertise accordion, FAQs, LinkedIn CTA |
| `*` | Custom 404 page |

## Design System

- **Colors:** Black `#0A0A0A` / White `#F5F5F5` / Orange `#F7941D` / Blue `#2D6BC6`
- **Typography:** Guton Sans Serif (display + body, self-hosted) / Space Mono (monospace labels)
- **Aesthetic:** Brutalist — zero border-radius, thick borders, extreme type scale, high contrast

## Getting Started

**Prerequisites:** Node.js 20+ and pnpm (`npm install -g pnpm`)

```bash
pnpm install       # Install dependencies
pnpm run dev       # Dev server → http://localhost:5173
pnpm run build     # Production build → artifacts/magz-website/dist/
pnpm run serve     # Preview production build
pnpm run typecheck # TypeScript checking
```

## Project Structure

```
MAGZ/
├── artifacts/
│   └── magz-website/
│       ├── public/            # Static assets (favicon, brand logos, fonts)
│       ├── src/
│       │   ├── components/    # UI components (Hero, Navbar, Services, Stats, Brands, Gallery, etc.)
│       │   ├── pages/         # Route pages (Home, CareersPage, not-found)
│       │   ├── lib/           # Utilities (cn)
│       │   ├── App.tsx        # Router + Lenis smooth scroll + ScrollToTop
│       │   ├── main.tsx       # Entry point
│       │   └── index.css      # Tailwind theme + global styles
│       ├── vite.config.ts
│       └── package.json
├── vercel.json                # SPA rewrite rules
├── pnpm-workspace.yaml        # Workspace config + dependency catalog
└── CHANGELOG.md
```

## External Assets

Images and video are served from AWS S3 (`magz.s3.us-east-1.amazonaws.com`). Brand partner logos and Guton font files are bundled locally in `public/`.

## Deployment

Deployed via **Vercel** with auto-detection of the Vite build. The `vercel.json` SPA rewrite ensures client-side routing works for all paths.

## Links

- [MAGZ Marketing](https://magzmarketing.com)
- [Linktree](https://linktr.ee/magzsports)
- [Instagram](https://www.instagram.com/magzmarketing/)
- [LinkedIn](https://www.linkedin.com/company/magzsports/)
- [X](https://x.com/magzmarketing)

## License

All work is the sole property of MAGZ Sports L.L.C. Any use without permission is strictly prohibited.

---

<p align="center">
  <a href="https://qubetx.com">
    <img src="https://shaughv.s3.us-east-1.amazonaws.com/brandmark/QUBETX/QubeTX-Logo.svg" alt="Built by QubeTX" width="64" />
  </a>
  <br />
  <sub>Built by <a href="https://qubetx.com"><strong>QubeTX</strong></a> — a department of ES Development LLC</sub>
</p>
