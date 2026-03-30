# MAGZ Marketing Website

Brutalist-designed marketing website for MAGZ Marketing, a sports marketing agency based in Dallas, TX.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Text Measurement:** @chenglou/pretext
- **Routing:** Wouter (lightweight client-side router)
- **Counter Animations:** react-countup
- **Package Manager:** pnpm (workspace monorepo)

## Pages

- `/` — Home page: hero video, scrolling marquee, services accordion, animated stats, brand partner grid, athlete photo gallery, careers teaser, footer CTA
- `/careers` — Careers page: intro, team info columns, partnership expertise accordion, FAQs, LinkedIn CTA

## Design System

- **Colors:** Black (#0A0A0A), White (#F5F5F5), Orange (#F7941D), Blue (#2D6BC6)
- **Typography:** Makira (display headings at Black/ExtraBold weight + body text, self-hosted), Space Mono (monospace labels/numbers)
- **Aesthetic:** Brutalist — no rounded corners, thick borders, extreme typography scale, high contrast

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)

### Install & Run

```bash
pnpm install
pnpm run dev
```

The dev server starts at `http://localhost:5173`.

### Build for Production

```bash
pnpm run build
```

Output goes to `artifacts/magz-website/dist/`.

### Preview Production Build

```bash
pnpm run serve
```

## Project Structure

```
MAGZ/
├── artifacts/
│   └── magz-website/          # React + Vite frontend
│       ├── public/            # Static assets (favicon, opengraph, brand logos, fonts)
│       ├── src/
│       │   ├── components/    # UI components (Hero, Navbar, Services, etc.)
│       │   ├── pages/         # Route pages (Home, CareersPage, not-found)
│       │   ├── lib/           # Utilities
│       │   ├── App.tsx        # Router setup + Lenis smooth scroll
│       │   ├── main.tsx       # Entry point
│       │   └── index.css      # Global styles + Tailwind
│       ├── vite.config.ts
│       └── package.json
├── package.json               # Root workspace
├── pnpm-workspace.yaml        # pnpm workspace config + dependency catalog
├── tsconfig.base.json         # Shared TypeScript config
└── tsconfig.json              # Root project references
```

## External Assets

Images and video are served from AWS S3 (`magz.s3.us-east-1.amazonaws.com`). Brand partner logos and Makira font files are bundled locally in `public/`.

## Deployment

Deployed via Vercel. Connect the repo and Vercel auto-detects the Vite build.
