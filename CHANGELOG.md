# Changelog

Gimbo's Universe — release notes.

Format: based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioned semver-ish (0.x while UI/IA shapes, 1.0 once content is filled out and the domain is wired).

---

## [0.5.0] — 2026-05-07

> **First public deployment.** From "I have an idea about a personal website" to "live on the internet" in one day.

**Live**: https://personal-website-zeta-nine-61.vercel.app
**Source**: https://github.com/GimboPan/personal-website
**Stack**: Astro 5 · Tailwind 3.4 · Wise-Dark design tokens · Vercel hosting · git auto-deploy from `main`

### Story of the day

The site started as a sketch on a Tuesday evening: a "virtual life" hub with a landing page showing three outer-space scenes — work, sport, life. Inspiration was TradingView's editorial landing.

We iterated through three landing-page approaches before settling on the final form:

1. **Pure SVG pixel-art scenes** — three hand-coded dioramas (workstation with Claude/OpenAI logos, Roland Garros tennis court, dining table with books). Built first, kept as `src/components/landing/Scene*.astro` for possible future use as a CRT alt-mode.
2. **Three pixel scenes side-by-side on a procedural galaxy backdrop** — same dioramas tiled, with mouse-tracked twinkle and comet animations. Got close but lacked the cinematic punch of the reference.
3. **Plan B: ChatGPT-generated photo-real hero image** — the user provided a 1536×1024 PNG of three floating-island scenes in deep space. We made this the full-bleed landing hero and overlaid invisible click hot spots (over the painted nav, ENTER MY UNIVERSE button, the three islands, and SCROLL TO EXPLORE). Added depth animations on top — mouse parallax (background drifts opposite cursor, islands drift with cursor by depth), 4-comet meteor shower with varied paths, staggered opacity entry fade-in. **This is what shipped.**

Then we hardened the rest of the site for production:

- Switched the hero PNG (2.0 MB) through `sharp` to AVIF (65 KB — **31× compression**) + WebP (114 KB) + 768/1280w responsive variants, served via progressive `<picture>` element.
- Fixed `object-position: center top` after noticing the painted nav got cropped on 16:10/16:9 desktops.
- Made the SectionHero `display-mega` heading **uppercase + 句号** for a manifesto rhythm — "WORK RUNS ITSELF. I SUPERVISE." / "ON THE COURT I AM PRESENT." (borrowed from rewired.mx).
- Added 5-item nav on `/work`, `/fitness`, `/life`, `/ideas`, `/about` (each a fully independent page), `/404`, plus a static-HTML enclave at `/work/nz-funds.html` (the NZ Managed Funds 华人投资者 guide) with a "← Gimbo's Universe" back link.
- Generated favicon (G-letter pixel SVG), apple-touch-icon, and a 1200×630 OG share card.
- Added Open Graph / Twitter Card / canonical URL / JSON-LD Person schema; auto-generated sitemap via `@astrojs/sitemap`; `/robots.txt`.
- Mobile-tested at iPhone (390×844), iPad (768×1024), Pixel 7 (412×915), Desktop (1440×900). Fixed nav overflow on narrow viewports (compact CTA "ENTER", brand text hidden < sm), fixed display-heading wrapping (`break-words`, `overflow-wrap: anywhere`).
- Lighthouse mobile (simulated 4G): **Performance 90 / Accessibility 100 / Best Practices 100 / SEO 100**.
- Initialized git repo; pushed to GitHub (`GimboPan/personal-website`); deployed via Vercel CLI; verified git auto-deploy works (push → ~10s build → live).

Final pass before calling it v0.5 was a content rewrite per the user's brief:

- **Work** → 4 modules: Supply Chain Agent (intro) / Investing (links to NZ Funds) / AI Applications / AI × Data Analysis.
- **Fitness** → 3 modules: Tennis Buddy (featured) / Nutrition · 营养 / Strength · 力量训练.
- **Life** → 3 modules: Writing the Book (featured) / Reading / Social.
- **Ideas** → all 6 set to PLANNED ("coming soon").
- **About** → rewritten as five-roles-plus-creed: *Supply Chain Professional / AI Super User / Investor / Tennis Player / Writer / Ten years in New Zealand* + a lime-green hero card with the user's life creed **「心怀敬畏，凡事感恩，自律精进」** + Contact (WeChat / 小红书 / Email).
- **Landing** explore section → 5 cards (dropped the meta "The Stack" card).
- **Footer** → dropped the Stack column, added a Contact column (WeChat / 小红书 / Email).

A privacy rule was codified mid-day: the user's day-job employer name was scrubbed from the site (`Footer.astro`, `BaseLayout.astro` JSON-LD) and the rule was written to `CLAUDE.md` (project-level) **and** to the global memory (`feedback_no_company_name.md`) so future Claude sessions never reintroduce it.

### Added

- `src/layouts/BaseLayout.astro` — global shell with nav/footer/CRT overlay, full SEO meta, JSON-LD Person schema.
- `src/components/`:
  - `Nav.astro` — sticky top nav, 6-item, responsive (compact CTA on mobile, hidden brand on xs).
  - `Footer.astro` — 4-column (Brand / Pillars / Meta / Contact).
  - `SectionHero.astro` — uppercase manifesto heading + kicker + subtitle.
  - `ModuleCard.astro` — module cards with status pill (LIVE / WIP / PLANNED / ARCHIVE), tools tags, optional `href` to make clickable, `featured` for one lime-green hero card per section.
  - `landing/Galaxy.astro`, `landing/SceneWork.astro`, `landing/SceneSports.astro`, `landing/SceneLife.astro` — alt pixel-art landing (kept for v1.x CRT toggle).
- `src/pages/`:
  - `index.astro` — full-bleed hero image + click hot spots + 5 explore cards.
  - `work.astro` — 4 modules.
  - `fitness.astro` — 3 modules.
  - `life.astro` — 3 modules.
  - `ideas.astro` — 6 coming-soon modules.
  - `about.astro` — five-roles + creed + contact.
  - `404.astro` — terminal-style "universe not found".
- `src/styles/globals.css` — Wise-Dark design tokens, animations (twinkle / scanline / cursor blink), `.display-mega` uppercase manifesto class, prose helpers.
- `tailwind.config.mjs` — color tokens (canvas / surface / lime / ink / hairline / rg).
- `astro.config.mjs` — `site` constant + `@astrojs/sitemap` integration.
- `public/landing/` — hero image in 7 variants (PNG fallback + AVIF/WebP at 768w/1280w/native).
- `public/og-image.{jpg,png}` — 1200×630 social share card.
- `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`.
- `public/robots.txt`.
- `public/work/nz-funds.html` — standalone NZ funds guide (Plan C enclave) with built-in "← Gimbo's Universe" back link.
- `scripts/`:
  - `optimize-images.mjs` — sharp-based PNG → AVIF/WebP pipeline.
  - `mobile-screenshot.mjs` — CDP-driven device emulation across viewports.
  - `inspect-overflow.mjs` — finds elements causing horizontal overflow at a given viewport.
- `README.md` / `SHIP.md` / `CLAUDE.md` — repo docs + deploy checklist + project rules.

### Decisions logged

- **Astro over Next.js** — static-first, easy MDX/content-collections later, lighter to maintain.
- **wise-dark design system** — Near Black canvas + Wise Green neon as primary; roland-garros visuals available as a secondary accent for sport-related surfaces.
- **Plan B (AI image hero) over Three.js** — 30 minutes of work, 100% of the visual impact, can be upgraded to a real 3D scene in v1.x if the static image gets stale.
- **Each section is an independent route** — no nested IA, future per-module sub-pages live at `/work/<slug>.astro` or static HTML in `/public/<section>/`.
- **No ENV var in repo** — `SITE_URL` defaults to `https://gimbosuniverse.com` (placeholder); will be overridden via Vercel env var or `astro.config.mjs` once a domain is bought.
- **Manifesto-style uppercase headings** — borrowed from rewired.mx; gives the page rhythm and matches Wise Sans 900 weight.

### Deferred (intentionally) — picked up in v1.0

- Custom domain — user will buy when the name feels settled (`gimbosuniverse.com` was leading); currently on Vercel-issued URL.
- Real `@WeChat` and `@小红书` handles — currently `@TBD` placeholders in About + Footer.
- Real content for `/ideas` — all 6 modules are stubs.
- Web Analytics (Cloudflare Web Analytics or Plausible) — not yet wired up.
- MDX content collections — Astro supports it, will be wired up when entries pile up in `/ideas`.
- Three.js 3D upgrade for the hero — wishlist.
- Bilingual zh/en variants — wishlist.
- RSS for `/ideas`, comments via Giscus — wishlist.

### Known gaps (acceptable for v0.5)

- `/ideas` is empty (status: planned across all 6 cards).
- Module cards on `/work`, `/fitness`, `/life` mostly link to nothing (NZ Funds is the one live destination).
- Lighthouse Performance is **90**, not 95+ — render-blocking Google Fonts CSS request is the main remaining cost. Acceptable for v0.5; might self-host fonts in a later release.
- Stable Vercel alias (`personal-website-zeta-nine-61.vercel.app`) is fine for sharing privately but not the long-term public URL.

---

## [Unreleased]

Everything below the line is what's incoming, no fixed timeline.

- Custom domain wired up (likely `gimbosuniverse.com`).
- Real Wechat / 小红书 handles in About + Footer.
- First essay or two on `/ideas`.
- Cloudflare Web Analytics drop-in.
- Open Graph preview tested on LinkedIn / WeChat / X.
