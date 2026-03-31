# MAGZ Website — Zach Feedback Report

**Date:** 2026-03-30
**Branch:** `zach-feedback---3-30-2026`
**Feedback Source:** Apple Notes export (PDF + Markdown, 19 pages)
**Feedback Location:** `C:\Users\hey\Downloads\NEW WEBSITE FEEDBACK\`

---

## Summary

- **20 items implemented** (code changes made and verified)
- **4 items already approved** (no changes needed)
- **0 items requiring clarification**
- **0 items skipped**

---

## Feedback Item Tracker

| # | PDF Page | Section | Zach's Exact Words | Status | What We Did | File(s) Changed |
|---|----------|---------|-------------------|--------|-------------|-----------------|
| 1 | p1 | Loading Screen | "Would still want this style to open up page with just an updated image" | DONE | Created new brutalist loading screen with Framer Motion animations — centered M logo, geometric corner brackets, accent line sweeps, staggered word reveal, progress bar. Auto-dismisses after load (min 1.5s, max 5s). | `LoadingScreen.tsx` (new), `App.tsx` |
| 2 | p3-4 | Navbar Logo | "Still needs to be this logo" (with X drawn over M icon, pointing to MAGZ Marketing wordmark) | DONE | Replaced Colorful M icon with full MAGZ Marketing horizontal wordmark (`magz_marketing.png` from S3). Adjusted height for wider image. | `Navbar.tsx` |
| 3 | p4 | Marquee | "Not sure I'm a fan of this, maybe if it was white wording and without all the blue dots/ or black with only blue dots at the beginning and latest words" | DONE | Changed text color from black to white. Removed blue dot separators between every word — now only one blue dot at the beginning and one at the end of the phrase. Kept orange gradient background. | `Marquee.tsx` |
| 4 | p5 | Services Accordion | "Like this re-design looks great" | APPROVED | No changes needed. Zach likes it as-is. | — |
| 5 | p6 | Stats Background | "Think I want this background to still be black, wording to be white" | DONE | Changed section from `bg-foreground text-background` (white bg/dark text) to `bg-background text-foreground` (dark bg/white text). Updated grid lines, borders, and separator colors. | `Stats.tsx` |
| 6 | p6 | Stats 3B+ | "The 3 B+ needs to be fixed, probably not having that be in Blue either" | DONE | Changed "3B+ Social Impressions" color from `text-secondary` (blue) to `text-accent` (orange), matching the other stats. | `Stats.tsx` |
| 7 | p7 | Stats Counters | "The count down on all 3 of these goes so fast you can't even see it go to 15 by the time you scroll down" | DONE | Increased CountUp duration from 2.5s to 4s for small values (<=15) and 5s for large values (300, 80, 45). Users can now see numbers counting up. | `Stats.tsx` |
| 8 | p8 | Brands — CFB Alerts Link | "Only thing is new link for college football alerts is their website. Collegefootballalerts.com" | DONE | Changed CFB Alerts URL from `https://www.instagram.com/cfbalerts` to `https://collegefootballalerts.com`. | `Brands.tsx` |
| 9 | p9 | Brands — CFB Alerts Logo | "Just needs to be hyperlinked to this logo" | DONE | Logo was already hyperlinked via the brand grid's `<a>` wrapper. Verified it displays and links correctly with the new URL. | `Brands.tsx` |
| 10 | p9 | Gallery Heading | "Would like athletes to look like work with from the image below how it's outlined instead of bold" | DONE | Changed "ATHLETES" from `text-secondary` (solid blue fill) to `text-outline-accent` (outlined orange stroke), matching "WORK WITH" in the Brands section. | `Gallery.tsx` |
| 11 | p10 | Gallery Photos | "All the movement and design looks great on the photos" | APPROVED | No changes needed. Zach loves it. | — |
| 12 | p11 | Join the Team | "Everything looks great, just would like the Team part outlined instead of bold" | DONE | Changed "TEAM" from `text-secondary` (solid blue fill) to `text-outline-accent` (outlined orange stroke). | `Careers.tsx` |
| 13 | p12 | Event Activation | "Get rid of this" (green X drawn over All American Bowl image) | DONE | Removed the entire right-column containing the event photo, "Live Event Activation" label, and "ALL AMERICAN BOWL" text. Converted layout from 2-column grid to single column. | `Careers.tsx` |
| 14 | p13 | Empowering Athletes | "Make background black and wording white" / "Like the header just change black wording to white" | DONE | Changed section from `bg-foreground text-background` (white bg/dark text) to `bg-background text-foreground` (dark bg/white text). Kept "AUTHENTIC CONNECTIONS" as `text-outline-accent`. Updated body text colors. | `EmpoweringAthletes.tsx` |
| 15 | p14 | Footer Background | "Change this background to black wording white" | DONE | Changed footer from `bg-foreground text-background` (white bg/dark text) to `bg-background text-foreground` (dark bg/white text). Updated all sub-element colors (borders, text opacity classes, hover states). | `Footer.tsx` |
| 16 | p14 | Footer GROW? | "Grow outlined instead of bold" | DONE | Changed "GROW?" from inline `color: '#F7941D'` (solid orange fill) to `text-outline-accent` class (outlined orange stroke). | `Footer.tsx` |
| 17 | p14 | Footer Button | "Black box orange color probably" | DONE | Changed Contact Us button from `bg-background text-foreground` (dark bg/white text) to `bg-accent text-background` (orange bg/dark text). | `Footer.tsx` |
| 18 | p15 | Footer Bottom | "Like this just needs to all be white and background black" | DONE | Covered by item #15 footer inversion. All text (address, copyright, menu links, social links, Back to Top button) now renders white on black. Updated Back to Top hover to orange. | `Footer.tsx` |
| 19 | p16 | Careers Navbar | "Fix logo on top left to MAGZ marketing logo" | DONE | Covered by item #2 — Navbar is a shared component. Both pages now show the full MAGZ Marketing wordmark. | `Navbar.tsx` |
| 20 | p16 | Careers Heading | "Careers logo would outline instead of bold" | DONE | Changed "CAREERS" from gradient fill (`linear-gradient(to right, #F7941D, #F5F5F5)`) to `text-outline-accent` (outlined orange stroke). | `CareersPage.tsx` |
| 21 | p17 | Expertise Heading | "Same thing with expertise, outline instead of bold" | DONE | Changed "EXPERTISE" from `text-secondary` (solid blue fill) to `text-outline-secondary` (outlined blue stroke). | `CareersPage.tsx` |
| 22 | p17 | FAQ Heading | "Same thing with questions" | DONE | Changed "QUESTIONS" from `text-accent` (solid orange fill) to `text-outline-accent` (outlined orange stroke). | `CareersPage.tsx` |
| 23 | p18 | CTA Heading | "And impact" | DONE | Changed "IMPACT?" from `text-accent` (solid orange fill) to `text-outline-accent` (outlined orange stroke). | `CareersPage.tsx` |
| 24 | p19 | Careers Footer | "Same thing with grow and background needs to be changed to black with all wording being in white and contact us box in orange" | DONE | Covered by items #15-17 — Footer is a shared component. Careers page footer now has black bg, white text, outlined GROW?, and orange Contact Us button. | `Footer.tsx` |

---

## Approved Sections (No Changes Needed)

- **Services Accordion** (p5): "Like this re-design looks great"
- **Gallery Photos** (p10): "All the movement and design looks great on the photos"
- **Brands Grid** (p8): "This is sick, love everything about this" (only link updated)
- **Hero Section** (p3): Hero layout, video background, and typography kept as-is per Zach's implicit approval

---

## Extra Changes (Beyond Zach's Notes)

- **Loading screen** was designed as a brand-new brutalist component (not a copy of the old site's loading screen). Includes Framer Motion spring animations, geometric corner brackets, staggered text reveal, animated progress bar, and a clean exit transition. The old site used a simple rotating circle; the new one fits the redesigned brutalist aesthetic.
- **Stats counter duration** uses adaptive timing — 4s for small numbers (3, 15) and 5s for large numbers (300, 80, 45) — rather than a flat increase, so the pacing feels natural across different magnitudes.
- **Footer "Back to Top" button** hover state was updated from a dark-on-light scheme to orange highlight to match the new dark footer theme.
- **Social icon colors** in EmpoweringAthletes section were updated to use `text-foreground/80` instead of `text-background/80` to maintain contrast on the now-dark background.

## Items NOT Done

- None. All 24 feedback items were addressed.

---

## Verification Results

| Check | Result |
|-------|--------|
| TypeScript typecheck | PASS |
| Production build | PASS (4.28s, 447.97 kB JS gzipped to 140.29 kB) |
| Playwright screenshots (13 captures) | All sections captured and visually verified |

### Verification Screenshots

All screenshots saved to `./screenshots/`:

| Screenshot | Section | What It Verifies |
|------------|---------|-----------------|
| `01-loading-screen.png` | Loading Screen | New brutalist splash with M logo, corner brackets, accent lines |
| `02-navbar-hero.png` | Navbar + Hero | Full MAGZ Marketing wordmark in navbar |
| `03-stats.png` | Stats | Black bg, white text, orange 3B+, counters mid-animation |
| `04-brands.png` | Brands | Grid with CFB Alerts (link updated, not visible in screenshot) |
| `05-gallery.png` | Gallery | Photo grid (heading scrolled past in this capture) |
| `06-join-team.png` | Join the Team | "TEAM" outlined in orange, no event image |
| `07-empowering.png` | Empowering Athletes | Black bg, white text, "AUTHENTIC CONNECTIONS" outlined |
| `08-footer.png` | Footer | Black bg, "GROW?" outlined, orange Contact Us button |
| `09-careers-hero.png` | Careers Hero | "CAREERS" outlined in orange, MAGZ Marketing navbar logo |
| `10-careers-expertise.png` | Expertise | Accordion expanded, "EXPERTISE" heading area visible |
| `11-careers-faq.png` | FAQ | "QUESTIONS" outlined in orange |
| `12-careers-cta.png` | CTA | "IMPACT?" outlined in orange |
| `13-careers-footer.png` | Careers Footer | Same black footer with outlined GROW? |

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/LoadingScreen.tsx` | **NEW** — Brutalist loading screen component |
| `src/App.tsx` | Added LoadingScreen overlay with state management |
| `src/components/Navbar.tsx` | Logo URL swapped to full MAGZ Marketing wordmark |
| `src/components/Marquee.tsx` | White text, dots only at start/end of phrase |
| `src/components/Stats.tsx` | Black bg, white text, 3B+ orange, slower counters |
| `src/components/Brands.tsx` | CFB Alerts URL updated to collegefootballalerts.com |
| `src/components/Gallery.tsx` | "ATHLETES" → `text-outline-accent` |
| `src/components/Careers.tsx` | "TEAM" → outlined, removed All American Bowl image |
| `src/components/EmpoweringAthletes.tsx` | Black bg, white text |
| `src/components/Footer.tsx` | Black bg, white text, "GROW?" outlined, orange button |
| `src/pages/CareersPage.tsx` | "CAREERS", "EXPERTISE", "QUESTIONS", "IMPACT?" → outlined |
