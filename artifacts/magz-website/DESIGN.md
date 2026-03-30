# MAGZ Design System Reference

Canonical reference for all UI, UX, brand, animation, and interaction patterns used across the MAGZ website. Use this document to ensure visual and behavioral consistency when adding new pages, sections, or components.

---

## 1. Brand Identity

- **Company:** MAGZ Marketing — sports marketing at the intersection of AI, athlete influence, and social distribution
- **Founded:** 2021, Dallas TX
- **Address:** 5 Cowboys Way Ste 300, Frisco, TX
- **Aesthetic:** Brutalist — zero border-radius (globally forced via `border-radius: 0 !important`), heavy borders, uppercase typography, high contrast black/white with orange + blue accents, sharp geometric decorative elements

---

## 2. Color System

All colors are defined as Tailwind CSS 4 theme tokens in `src/index.css` under `@theme inline`.

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| `--color-background` | `#0A0A0A` | `bg-background` / `text-background` | Page backgrounds, dark sections |
| `--color-foreground` | `#F5F5F5` | `bg-foreground` / `text-foreground` | Primary text, inverted section backgrounds |
| `--color-accent` | `#F7941D` | `bg-accent` / `text-accent` / `border-accent` | Primary accent (orange) — CTAs, highlights, active states |
| `--color-accent-hover` | `#E5850A` | `bg-accent-hover` | Darker orange for hover states |
| `--color-secondary` | `#2D6BC6` | `bg-secondary` / `text-secondary` / `border-secondary` | Secondary accent (blue) — alternating highlights, FAQ active |
| `--color-secondary-hover` | `#1E5AB0` | `bg-secondary-hover` | Darker blue for hover states |
| `--color-border` | `#2A2A2A` | `border-border` | Default border color (dark gray) |

### Color Usage Patterns

- **Text selection:** `selection:bg-accent selection:text-black`
- **Scrollbar:** Accent-colored thumb, secondary on hover, background-colored track
- **Inverted sections** (Stats, EmpoweringAthletes, Footer): Swap to `bg-foreground text-background`
- **Opacity modifiers:** Common values are `/70` (body text), `/60` (descriptions), `/40` (metadata), `/20` (borders), `/10` (subtle backgrounds), `/5` (hover backgrounds), `/3` (grid pattern lines)
- **Gradient accents:** `from-accent to-secondary` or `from-accent via-secondary to-accent` for gradient bars and lines

---

## 3. Typography

### Font Families

| Family | CSS Variable | Tailwind Class | Source | Weights | Usage |
|--------|-------------|----------------|--------|---------|-------|
| **Guton** | `--font-sans`, `--font-display` | `font-sans`, `font-display` | Self-hosted WOFF2/WOFF at `/fonts/Guton/` | 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black) | Display headings and body text |
| **Space Mono** | `--font-mono` | `font-mono` | Google Fonts import | 400, 700 (+ italics) | Navigation links, buttons, labels, metadata, technical/monospace text |

### Global Heading Rules

All `h1`–`h6` elements receive: `font-display font-extrabold tracking-wide uppercase`

### Type Scale

| Context | Classes | Example |
|---------|---------|---------|
| Hero "MAGZ" title | `text-[22vw] md:text-[20vw] font-black leading-[0.8]` | Massive viewport-width hero text |
| Page titles | `text-7xl md:text-[10rem] leading-[0.85]` | CareersPage hero heading |
| Section headings | `text-5xl md:text-7xl leading-none` | "HIGHLIGHTING ATHLETES", "BRANDS WE WORK WITH" |
| Large section headings | `text-6xl md:text-8xl leading-none` | "WHAT WE DO", "JOIN THE TEAM", "READY TO GROW?" |
| Card/accordion titles | `text-3xl md:text-5xl tracking-wide` | Services accordion items |
| Card titles (smaller) | `text-2xl md:text-4xl tracking-wide` | CareersPage expertise items |
| Subtitles (mono) | `text-xl md:text-2xl font-mono text-accent glow-accent` | Hero "WE ARE" |
| Body text | `text-lg md:text-xl font-sans leading-relaxed` | Section descriptions |
| Body text (alt) | `text-base md:text-lg font-sans` | Accordion bullet points, card descriptions |
| Nav links | `text-sm font-mono font-bold tracking-widest uppercase` | Desktop navigation |
| Button text | `font-mono font-bold uppercase tracking-widest` | `.brutalist-button` |
| Labels/metadata | `text-xs font-mono tracking-widest` | Corner labels, timestamps |
| Tiny labels | `text-[10px] font-mono tracking-[0.3em] uppercase` | Scroll indicator, brand hover names |
| Stat numbers | `text-7xl md:text-8xl lg:text-[7rem] font-display font-extrabold` | Stats counters |
| Stat labels | `text-sm md:text-base font-mono font-bold tracking-widest uppercase` | Stats labels |
| Mobile menu | `text-5xl font-display` | Mobile nav links |
| Section subtitles | `text-xl md:text-2xl font-mono font-bold tracking-widest uppercase` | Stats intro |

---

## 4. Spacing & Layout

### Container
- **Max width:** `max-w-[1600px] mx-auto` (standard for all content sections)
- **Extended:** `max-w-[1920px]` (Brands grid only, allows wider logo display)
- **Horizontal padding:** `px-6 md:px-12` (consistent across all sections)

### Section Vertical Padding
- **Standard sections:** `py-24 md:py-32`
- **Compact sections:** `py-16 md:py-24` (e.g., subsections)
- **Hero top padding:** `pt-20` (accounts for fixed navbar ~75px)
- **CareersPage hero:** `pt-32 pb-20` (more breathing room)

### Grid Patterns

| Section | Grid | Gap |
|---------|------|-----|
| Services | `grid-cols-1 lg:grid-cols-12` (4+8 split) | `gap-12 lg:gap-8` |
| Stats | `grid-cols-1 md:grid-cols-2 lg:grid-cols-5` | `gap-y-16 gap-x-8` |
| Brands | `grid-cols-2 md:grid-cols-4` | Borders instead of gap |
| Gallery | `grid-cols-2 md:grid-cols-4` | `gap-[2px]` (tight) |
| Careers CTA | `grid-cols-1 lg:grid-cols-2` | `gap-12 lg:gap-24` |
| CareersPage team | `grid-cols-1 md:grid-cols-3` | Divide borders |
| EmpoweringAthletes | `grid-cols-1 md:grid-cols-2` | `gap-8 md:gap-12` |
| Footer | `grid-cols-1 md:grid-cols-12` | `gap-12` |

### Accordion Spacing
- Items: `flex flex-col gap-6` (Services, expertise) or `gap-4` (FAQ)
- Item padding: `p-6 md:p-8` (button area), `p-6 md:p-8 pt-0` (expanded content)
- Content separator: `border-t-2 border-accent/30 mt-4`

---

## 5. Border & Shadow Patterns

### Global Rule
```css
* { border-radius: 0 !important; }
```
No rounded corners anywhere — this is core to the brutalist identity.

### Section Borders
| Pattern | Usage |
|---------|-------|
| `border-y-4 border-accent` | Stats section, Marquee banner |
| `border-t-4 border-accent` | Footer, EmpoweringAthletes |
| `border-t-4 border-secondary/30` | Careers section, FAQ section |
| `border-t-4 border-accent/20` | CareersPage CTA section |
| `border-y-4 border-accent/30` | CareersPage team section |
| `border-b-4 border-accent pb-6` | Gallery section header |
| `border-b-4 border-background/20` | Footer content divider |

### Card/Item Borders
| State | Pattern |
|-------|---------|
| Default (large cards) | `border-4 border-foreground/20` |
| Active (large cards) | `border-4 border-accent bg-accent/5 shadow-[0_0_30px_rgba(247,148,29,0.1)]` |
| Hover (large cards) | `hover:border-accent/50` |
| Default (FAQ) | `border-2 border-foreground/15` |
| Active (FAQ) | `border-2 border-secondary bg-secondary/5` |

### Shadow Patterns
| Pattern | Usage |
|---------|-------|
| `shadow-[4px_4px_0px_0px_#F7941D]` | Brutalist button default |
| `shadow-[0px_0px_0px_0px_#F7941D]` | Brutalist button hover |
| `shadow-[0_0_30px_rgba(247,148,29,0.1)]` | Active accordion card glow |

---

## 6. Custom CSS Utilities

All defined in `src/index.css` under `@layer utilities`.

### `.brutalist-button`
Primary CTA button style. Combines monospace uppercase text with an offset shadow that collapses on hover:
```
font-mono font-bold uppercase tracking-widest px-6 py-3
border-2 border-accent text-accent
shadow-[4px_4px_0px_0px_#F7941D]
transition-all duration-150
hover: bg-accent text-black -translate-y-1 translate-x-1 shadow-[0px_0px_0px_0px_#F7941D]
active: translate-y-0 translate-x-0
```

### `.brutalist-border`
Simple structural border: `border-2 border-foreground`

### Text Outline Utilities
Hollow text effect using `-webkit-text-stroke` with transparent fill:
- `.text-outline` — 2px foreground (#F5F5F5) stroke
- `.text-outline-accent` — 2px accent (#F7941D) stroke
- `.text-outline-secondary` — 2px secondary (#2D6BC6) stroke

### `.gradient-text`
Orange-to-blue text gradient:
```
background: linear-gradient(135deg, var(--color-accent), var(--color-secondary))
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

### Glow Effects
Ambient text-shadow glow:
- `.glow-accent` — `text-shadow: 0 0 30px rgba(247,148,29,0.3), 0 0 60px rgba(247,148,29,0.1)`
- `.glow-secondary` — `text-shadow: 0 0 30px rgba(45,107,198,0.3), 0 0 60px rgba(45,107,198,0.1)`

### Custom Scrollbar
- Width: 8px
- Track: background color with 1px left border
- Thumb: accent color (default), secondary color (hover)

---

## 7. Animation System (Framer Motion)

### Standard Easing
```ts
const EASE = [0.76, 0, 0.24, 1]; // cubic-bezier — used across ALL components
```
This produces a smooth, slightly aggressive curve — fast start, gentle deceleration.

### Reusable Animation Variants

```ts
// Stagger container — wraps a group of items that animate sequentially
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } } // 0.05 for Brands, 0.1 for CareersPage, 0.15 for Services
};

// Fade up — universal entrance animation for sections and items
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
};

// Slide up — variant with more Y offset
const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
};

// Scale reveal — items that pop in (Brands grid)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
};
```

### Entrance Patterns

| Element | Animation | Duration | Delay |
|---------|-----------|----------|-------|
| Navbar slide-in | `initial={{ y: -100 }} animate={{ y: 0 }}` | 0.8s | — |
| Hero title | `initial={{ y: 80, opacity: 0, scale: 0.9 }}` | 1s | — |
| Letter-spacing reveal | `initial={{ letterSpacing: "0.8em", opacity: 0 }} animate={{ letterSpacing: "0.3em" }}` | 1.2s | 0.3s |
| Hero subtitle | `initial={{ y: 40, opacity: 0 }}` | 0.8s | 0.6s |
| Section headings | `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}` | 0.6s | — |
| Side reveal (left) | `initial={{ opacity: 0, x: -50 }}` | 0.7s | — |
| Side reveal (right) | `initial={{ opacity: 0, x: 50 }}` | 0.7s | 0.2s |
| Staggered nav items | `initial={{ opacity: 0, y: -20 }}` | 0.5s | `0.3 + i * 0.1` |
| Gallery grid items | `whileInView` fade-up | 0.5s | `(i % 4) * 0.08` |
| Stats counters | Scale + Y entrance | 0.6s | `i * 0.12` |
| Decorative elements | `initial={{ opacity: 0 }}` | 0.8s | 1.2s+ |
| Mobile menu | `clipPath: circle(0% at calc(100% - 40px) 40px)` → `circle(150%...)` | 0.6s | — |

### Scroll-Based Animations

```ts
// Parallax (Hero)
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);    // background parallax
const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);   // text parallax (faster)
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);      // fade on scroll

// Gradient line scale-in
initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} style={{ transformOrigin: "left" }}

// Gradient bar width grow
initial={{ width: 0 }} whileInView={{ width: 96 }}  // or width: 120, width: "100%"
```

### Interactive Animations

| Interaction | Pattern | Usage |
|-------------|---------|-------|
| Hover scale (subtle) | `whileHover={{ scale: 1.02 }}` | Buttons, brand cards |
| Hover scale (medium) | `whileHover={{ scale: 1.05 }}` | Logo, stats |
| Hover scale (strong) | `whileHover={{ scale: 1.1, rotate: ±2 }}` | Hero interactive text |
| Tap scale | `whileTap={{ scale: 0.95-0.98 }}` | All interactive elements |
| Hover translate | `whileHover={{ x: 4-8 }}` | Menu items, accordion cards |
| Hover color (orange) | `whileHover={{ color: "#F7941D" }}` | Footer menu links |
| Hover color (blue) | `whileHover={{ color: "#2D6BC6" }}` | Footer social links |
| Spring physics | `type: "spring", stiffness: 300-400` | Interactive text spans, stats hover |
| Brand card squeeze | `whileHover={{ scale: 0.96 }} whileTap={{ scale: 0.94 }}` | Brand logo grid |
| Menu icon tap | `whileTap={{ scale: 0.9, rotate: 90 }}` | Mobile hamburger toggle |

### Accordion Expand/Collapse

```ts
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="overflow-hidden"
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```
- Duration: 0.5s for Services/expertise, 0.4s for FAQ
- Icon rotation: `animate={{ rotate: isOpen ? 180 : 0 }}` duration 0.3
- Active number pulse: `animate={isOpen ? { scale: [1, 1.1, 1] } : {}}` duration 0.3

### Infinite/Looping Animations

| Element | Animation | Duration | Notes |
|---------|-----------|----------|-------|
| Rotating orange square | `animate={{ rotate: [0, 90, 0] }}` | 4s | easeInOut, Infinity |
| Rotating blue square | `animate={{ rotate: [0, -90, 0] }}` | 4s | delay 0.5 |
| Pulsing border square | `animate={{ scale: [1, 1.3, 1] }}` | 2s | easeInOut |
| Scroll indicator bounce | `animate={{ y: [0, 6, 0] }}` | 1.5s | easeInOut |
| Marquee scroll | `animate={{ x: ["0%", "-50%"] }}` | 15-20s | linear |
| CountUp numbers | `end={value} duration={2.5}` | 2.5s | triggered by `useInView` |

---

## 8. Smooth Scroll (Lenis)

### Initialization (App.tsx)
```ts
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // exponential ease-out
  smoothWheel: true,
});
```
Lenis is exposed globally as `window.__lenis` and cleaned up on unmount.

### Programmatic Scrolling

```ts
const lenis = (window as any).__lenis;

// Navbar anchor links — offset clears the fixed navbar (~75px)
lenis.scrollTo(element, { offset: -80 });

// Accordion scroll-to after expand — offset leaves gap below navbar
lenis.scrollTo(element, { offset: -100, duration: 1 });

// Scroll to top
lenis.scrollTo(0);
```

### Critical: Accordion Scroll Timing
When expanding an accordion item, the Lenis `scrollTo` call **must** be wrapped in `setTimeout(fn, 500)`. The 500ms delay must be >= the Framer Motion expand animation duration (also 500ms) so Lenis calculates scroll positions **after** layout has settled. Shorter delays cause scroll overshoot because the element height hasn't finished animating.

```ts
const handleToggle = useCallback((idx: number) => {
  const isOpen = openIndex === idx;
  setOpenIndex(isOpen ? null : idx);
  if (!isOpen) {
    setTimeout(() => {
      const el = itemRefs.current[idx];
      const lenis = (window as any).__lenis;
      if (el && lenis) {
        lenis.scrollTo(el, { offset: -100, duration: 1 });
      }
    }, 500);  // MUST be >= animation duration
  }
}, [openIndex]);
```

---

## 9. Pretext Heading Measurement

The `@chenglou/pretext` library provides precise text measurement for responsive heading layout. It's used to determine when text will wrap and adjust layout accordingly.

### Setup Requirements
- **Vite config:** Must include `@chenglou/pretext` in `optimizeDeps.include` (ships raw `.ts` source)
- **TypeScript config:** Requires `allowImportingTsExtensions: true`
- **Import:** Always dynamic `await import("@chenglou/pretext")` to avoid SSR issues

### Usage Pattern

```ts
const pretext = await import("@chenglou/pretext");
const containerWidth = containerRef.current.offsetWidth;
const fontSize = parseFloat(getComputedStyle(element).fontSize);
const fontStr = `bold ${fontSize}px Guton`;

const prepared = pretext.prepare(text, fontStr);
const result = pretext.layout(prepared, containerWidth, fontSize * lineHeight);
// result.height tells you the measured text height
```

### Current Usage
1. **`PretextHeading.tsx`** — Wraps the Hero "MAGZ" text. Measures and sets `minHeight` on the container to prevent layout shift.
2. **`Hero.tsx` subtitle** — Measures the second line of the subtitle to decide whether to insert a `<br />` for better line breaks. If the text fits on one line (`result.height <= fontSize * 1.8`), it splits; otherwise it wraps naturally.

Both use `ResizeObserver` to re-measure when the container changes width.

---

## 10. Reusable Patterns

### Accordion Pattern
Used in: Services, CareersPage expertise, CareersPage FAQ

**State:** `useState<number | null>(initialValue)` — `0` to default-open first item, `null` for all closed
**Refs:** `useRef<(HTMLDivElement | null)[]>([])` for scroll targets
**Toggle:** `useCallback` wrapping state update + delayed Lenis scroll
**Expand/Collapse:** `AnimatePresence` + `motion.div` with height animation
**Icons:** `Plus`/`Minus` from `lucide-react` in bordered square, rotation animation
**Active styling:** Accent border + bg-accent/5 + glow shadow (Services/expertise) or secondary border + bg-secondary/5 (FAQ)
**Bullet lists:** `■` prefix, staggered `initial={{ opacity: 0, x: -20 }}` with `delay: 0.1 + i * 0.08`

### Section Heading Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-12-16"
>
  <h2 className="font-display text-5xl md:text-7xl leading-none">
    FIRST LINE <br/>
    <span className="text-accent">ACCENT LINE</span>  {/* or text-secondary, text-outline-accent */}
  </h2>
</motion.div>
```

### Gradient Accent Bar
Animated width-growing bar used as visual separator after headings:
```tsx
<motion.div
  className="h-1 bg-gradient-to-r from-accent to-secondary mt-8"
  initial={{ width: 0 }}
  whileInView={{ width: 96 }}  // or 120, or "100%"
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
/>
```
Thicker variant (`h-4`) used in Services and Careers sections.

### Background Layers

**Noise texture overlay:**
```tsx
<div
  className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
/>
```

**Subtle grid pattern:**
```tsx
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,148,29,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,107,198,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
```

**Gradient overlays (on images/video):**
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
<div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10" />
```

**Watermark text (Footer):**
```tsx
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
  <span className="font-display text-[30vw] whitespace-nowrap leading-none select-none">MAGZ</span>
</div>
```

### Rotating Geometric Decorations
Animated squares used in Hero corner:
```tsx
<motion.div className="w-4 h-4 bg-accent" animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
<motion.div className="w-4 h-4 bg-secondary" animate={{ rotate: [0, -90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }} />
<motion.div className="w-4 h-4 border-2 border-foreground" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
```

### Gradient Underline Bar (on hover)
Used in Gallery images and navigation link cards:
```tsx
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
```

### Navigation Hover Underline
```tsx
<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-accent to-secondary transition-all duration-300 group-hover:w-full" />
```

---

## 11. Component Inventory

| Component | File | Purpose | Key Props |
|-----------|------|---------|-----------|
| `Navbar` | `src/components/Navbar.tsx` | Fixed navigation with scroll-aware state, mobile circular clip-path menu, Wouter routing | — |
| `Hero` | `src/components/Hero.tsx` | Full-viewport hero with parallax video background, PretextHeading, animated subtitle | — |
| `PretextHeading` | `src/components/PretextHeading.tsx` | Dynamic text measurement wrapper | `text`, `font`, `className?`, `lineHeight?` |
| `Marquee` | `src/components/Marquee.tsx` | Infinite horizontal text scroll on orange gradient background | — |
| `Services` | `src/components/Services.tsx` | 3-item accordion with numbered cards, bullet lists | — |
| `Stats` | `src/components/Stats.tsx` | 5-column counter grid with react-countup, inverted color scheme | — |
| `Brands` | `src/components/Brands.tsx` | 4-column brand logo grid with hover effects, brightness/invert filters | — |
| `Gallery` | `src/components/Gallery.tsx` | 4-column athlete image grid, grayscale-to-color hover, FILE_### labels | — |
| `Careers` | `src/components/Careers.tsx` | 2-column CTA + event image, links to /careers route | — |
| `EmpoweringAthletes` | `src/components/EmpoweringAthletes.tsx` | 2-column copy section with social media icons, inverted colors | — |
| `Footer` | `src/components/Footer.tsx` | 3-column footer with inverted colors, menu/social links, back-to-top button | — |
| `ScrollToTop` | `src/App.tsx` (inline) | Scrolls to top on Wouter route change | — |

### Utility
| Name | File | Purpose |
|------|------|---------|
| `cn()` | `src/lib/utils.ts` | Conditional className merging (clsx + tailwind-merge) |

---

## 12. Page Compositions

### Home Page (`/`)
```
<main>
  <Navbar />
  <Hero />           ← id="hero"
  <Marquee />
  <Services />       ← id="about"
  <Stats />          ← id="stats"
  <Brands />         ← id="brands"
  <Gallery />        ← id="athletes"
  <Careers />        ← id="careers"
  <EmpoweringAthletes />
  <Footer />         ← id="footer"
</main>
```

### Careers Page (`/careers`)
```
<main>
  <Navbar />
  Hero section       ← id="careers-hero" (office background image)
  Team cards          ← id="team" (3-column divided grid)
  Expertise accordion ← id="expertise" (background image overlay)
  FAQ accordion       ← id="faq"
  LinkedIn CTA        ← id="cta"
  <Footer />
</main>
```

### 404 Page (catch-all route)
```
<main>
  <Navbar />
  Hero section        (full-viewport, animated 404 + "OUT OF BOUNDS")
  Marquee banner      (scrolling error text)
  Navigation section  (3-card grid: Home, Careers, Find Us)
  <Footer />
</main>
```

### Page Wrapper Pattern
All pages use: `<main className="bg-background text-foreground min-h-screen">`

---

## 13. Section IDs (Anchor Navigation)

| ID | Page | Target |
|----|------|--------|
| `hero` | Home | Hero section |
| `about` | Home | Services section |
| `stats` | Home | Stats section |
| `brands` | Home | Brands section |
| `athletes` | Home | Gallery section |
| `careers` | Home | Careers CTA section |
| `footer` | Home | Footer |
| `careers-hero` | Careers | Hero section |
| `team` | Careers | Team cards |
| `expertise` | Careers | Expertise accordion |
| `faq` | Careers | FAQ accordion |
| `cta` | Careers | LinkedIn CTA |

The Navbar handles cross-page scrolling: if on a non-home page and a Home anchor is clicked, it navigates to `/` then scrolls after a 400ms delay.

---

## 14. External Assets

### S3 Bucket: `magz.s3.us-east-1.amazonaws.com`

| Asset | Path | Usage |
|-------|------|-------|
| MAGZ Logo (Colorful M) | `MAGZ+Logos/Colorful+M.png` | Navbar logo |
| Hero video | `assets/magz_VIDEO_optimized.webm` | Hero background (40% opacity) |
| Gallery images (9) | `assets/gross_assets/webp/*.webp` | Gallery grid |
| Gallery images (4) | `assets/*.jpeg` | Gallery grid |
| Office photo | `assets/office.webp` | CareersPage hero background |
| All American Bowl | `assets/Deck+Albert's+Media/ALL+AMERICAN+BOWL-23.webp` | Careers section image |
| Team photo | `assets/gross_assets/webp/FullSizeRender.webp` | CareersPage expertise background |
| LinkedIn icon | `social_icons/LinkedIn+Icon.svg` | EmpoweringAthletes socials |
| X icon | `social_icons/Social+Media+Icons.svg` | EmpoweringAthletes socials |
| Instagram icon | `social_icons/Instagram+Icon.svg` | EmpoweringAthletes socials |
| Linktree icon | `social_icons/Linktree+Icons.svg` | EmpoweringAthletes socials |

### Local Assets: `public/brandLogos/`
15 brand partner logos (PNG, SVG, WebP). Each has per-logo size classes (`logoClass`) configured in the `brands` array in `Brands.tsx`.

### Local Fonts: `public/fonts/Guton/`
12 files — WOFF2 + WOFF for each of 6 weights (Regular, Medium, SemiBold, Bold, ExtraBold, Black).

---

## 15. Icon Usage

**Primary library:** `lucide-react`

| Icon | Component(s) |
|------|-------------|
| `Menu` | Navbar (mobile hamburger) |
| `X` | Navbar (mobile close) |
| `Plus` | Services, CareersPage (accordion closed) |
| `Minus` | Services, CareersPage (accordion open) |
| `ArrowUpRight` | Footer (contact CTA), Careers (explore button), CareersPage (LinkedIn CTA), Footer (back to top, rotated -45deg) |

**Secondary:** `react-icons` — installed as dependency but not currently in use. Prefer `lucide-react` for consistency.

---

## 16. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| (default) | < 768px | Mobile-first base styles |
| `md:` | >= 768px | Primary layout shifts (grid columns, font size increases, padding changes) |
| `lg:` | >= 1024px | Wider grid layouts (12-column Services, 5-column Stats) |

**Viewport-relative units:**
- Hero text: `text-[22vw] md:text-[20vw]`
- Watermark: `text-[30vw]`
- CareersPage title: `text-7xl md:text-[10rem]`

**Desktop-only elements** (hidden on mobile):
- Rotating geometric squares: `hidden md:flex` or `hidden md:block`
- Corner metadata labels: `hidden md:block`

---

## 17. Routing (Wouter)

```ts
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";

// Base path from Vite env
<WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>

// Routes in Switch — catch-all is pathless Route
<Switch>
  <Route path="/" component={Home} />
  <Route path="/careers" component={CareersPage} />
  <Route component={NotFound} />  {/* catch-all */}
</Switch>
```

**Navigation:** Use `useLocation()` hook → `const [location, setLocation] = useLocation()`
**Route links:** `setLocation("/careers")` then `window.scrollTo({ top: 0 })`
**External links:** `window.open(url, '_blank', 'noopener,noreferrer')`

---

## 18. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` / `react-dom` | 19 | UI framework |
| `vite` | 7 | Build tool and dev server |
| `tailwindcss` | 4 | Utility-first CSS |
| `framer-motion` | (catalog) | Animation library |
| `wouter` | 3.3.5 | Lightweight client-side router |
| `lenis` | 1.3.21 | Smooth scroll library |
| `@chenglou/pretext` | 0.0.2 | Text measurement for responsive headings |
| `react-countup` | 6.5.3 | Animated number counters (Stats) |
| `lucide-react` | (catalog) | Icon library |
| `react-icons` | 5.4.0 | Additional icon library (unused) |
| `clsx` | (catalog) | Conditional classNames |
| `tailwind-merge` | (catalog) | Tailwind class deduplication |
| `class-variance-authority` | (catalog) | Component variant API (configured, unused) |
| `tw-animate-css` | 1.4.0 | Animation CSS utilities |
| `zod` | (catalog) | Schema validation (configured, unused) |

---

## 19. Accessibility Notes

- **Semantic HTML:** Sections use `<section>`, `<nav>`, `<footer>`, `<main>` tags
- **Alt text:** All images have descriptive `alt` attributes
- **Link labels:** Social icons have `aria-label` attributes (EmpoweringAthletes)
- **External links:** All use `rel="noopener noreferrer"` with `target="_blank"`
- **Focus styles:** Accordion buttons use `focus:outline-none` (relies on visible state change via border color)
- **Lazy loading:** Gallery images use `loading="lazy"`
- **Video:** Hero video is `autoPlay muted loop playsInline` (no audio track, decorative)
- **Selection styling:** Custom `selection:bg-accent selection:text-black` for brand-consistent text selection
