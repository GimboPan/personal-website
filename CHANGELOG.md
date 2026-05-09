# Changelog

Gimbo's Universe — release notes.

Format: based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioned semver-ish (0.x while UI/IA shapes, 1.0 once content is filled out and the domain is wired).

---

## [0.7.0] — 2026-05-09

> **Inner-page rebuilds.** /work and /life both got real structures. The book's first chapter went live.

**Live**: https://personal-website-zeta-nine-61.vercel.app
**New routes**: `/life/book`, `/life/book/ch02-food-health`

### Story of the day

Two inner pages got the same treatment /work got mid-week: typed data model + a layout that reflects what the section is actually about, not just a generic 3-card grid.

**`/work` was rebuilt** around a featured "Latest builds" gallery (top-3 by date across all streams) plus three category sections — **Supply Chain · Investing · AI Experiments** — each showing the three most-recent items as `.project-row` rows (index · title · summary · date · status) with a `view all (+N) →` overflow link anchored to the section id (placeholder destination until per-category pages exist). Nine seed projects were added, one of which (NZ Funds) is a real LIVE link to the existing `/work/nz-funds.html` enclave. Featured cards use category-tinted gradient + giant monogram letter (S/I/A) as image placeholder — the data model includes an `imageUrl?` field so real images drop in later without a layout change. Third category color is **Linear Purple** `#5e6ad2` (added inline, no Tailwind config change needed). Every project row carries a slug-based id so the homepage AI Builder bullet hrefs deep-link correctly (`/work#supply-chain` → `/work#supply-chain-agent`, etc.). Added `scroll-margin-top: 80px` to project rows so deep-link landings clear the sticky nav.

**`/work` hero manifesto split into 2 lines** — "THE END OF WORK." / "THE START OF BUILDING." — via a small `SectionHero` upgrade: the `title` prop now accepts `string | string[]`, with array elements joined by `<br>`. Adjusted the size ladder (md: 7xl→6xl, lg: 8xl→7xl, xl new: 8xl) so the longer second line ("THE START OF BUILDING." = 22 chars) fits on one line at lg viewports without needing `max-w-4xl`. Other inner pages re-verified visually — all titles still read big.

**`/life` was rebuilt** around three thematic modules with their own visual rhythm (no uniform card grid this time):

- **Module 1 · Writing the Book** — wide featured card with stacked book-cover placeholder ("LIFE / ESSENTIAL / IN NZ" typography on tinted gradient) on the left, synopsis + status + "Open table of contents →" CTA on the right. Whole card links to `/life/book`.
- **Module 2 · Reading** — 4-up grid of book cards. Each card has a 3:4-aspect cover placeholder (title-as-art tinted by per-book hue) + tags + brief intro + "thoughts" pull-quote with lime border. Seeded with 4 placeholder books across tech/philosophy/psychology/history.
- **Module 3 · Social** — 2-up grid of group cards with emoji icon, name, interest · frequency line, active/dormant pill, and a 2-line brief. Seeded with 4 placeholder interest groups (tennis / NZ 投资圈 / AI builders / reading circle).

**`/life/book` (new TOC sub-page)** — 2-column layout per the user's spec: left column is sticky synopsis (why I'm writing it + FORMAT/STATUS/LANGUAGE meta + ← back to Life link), right column is the chapter table of contents using `.project-row`. Mobile stacks both columns. Chapter outline matches the **real book project** (9 chapters, not 10):

1. Sports & Outdoors · 运动与户外生活
2. Food & Health · 饮食与健康 — **LIVE**
3. Finance & Investing · 金融投资 — WIP
4. Language & Communication · 语言与沟通
5. Work & Career · 工作与职场 — WIP (drafted but not published — see decision below)
6. Belonging, Social & Community · 归属感、社交与社区
7. Cultural Differences & Adaptation · 文化差异与适应
8. Mental Health & Inner Growth · 精神健康与内在成长
9. TBD · 待定

**`/life/book/ch02-food-health` (first published chapter)** — a 16 KB Chinese-language essay drafted by the user (April 2026). Renders via a new `ChapterLayout.astro` + a fresh `.prose` component class in `globals.css` (tuned for bilingual EN+中文 reading at 17px / 1.85 line-height; styled headings, blockquotes, tables, lists, code, em/strong, internal anchors). Markdown-based architecture — chapters drop in as `.md` files with a layout pointer in frontmatter, no per-chapter Astro file needed. Header shows chapter number + draft version + draft date; footer has previous/next navigation back to TOC and `/life`.

**`/about` got a leftover v0.6 fix** — "AI Super User · AI 重度用户" became "AI Builder · AI 构建者" (matching the rest of the rebrand). Was missed on the original v0.6 sweep.

### Considered, then deferred

- **ch05 (Work & Career)** is fully drafted (340 lines, ~19 KB) but **not published**. It contains specific employer names, recruiter names, and individual colleague names throughout — publishing as-is would violate the project's "never name the day-job employer" rule (see [CLAUDE.md](./CLAUDE.md)). Future revisions need either a redaction pass (ParagonCare → "the new role", JDE → "FMCG", named individuals → roles) or a different framing. Marked WIP on the TOC.
- **Per-category pages** for `/work` (`/work/supply-chain`, `/work/investing`, `/work/ai-experiments`) — `view all →` currently anchors to the section header as a no-op placeholder, per the user's choice for v0.7.
- **Individual chapter pages** for the other 8 chapters — `ChapterLayout` is in place; new chapters drop in as `.md` files when the user is ready.

### Added

- `src/pages/work.astro` — full rewrite around typed `Project[]` data model, featured-3 gallery, 3 category sections with overflow indicator.
- `src/pages/life.astro` — full rewrite around 3 thematic modules (Writing Book / Reading / Social) with per-module layout.
- `src/pages/life/book.astro` — new TOC sub-page, 2-column synopsis + 9-chapter list.
- `src/pages/life/book/ch02-food-health.md` — first published chapter content.
- `src/layouts/ChapterLayout.astro` — wrapper layout for chapter `.md` files (header + prose + nav footer).
- `.project-row` (and modifiers) in `globals.css` — typed status-list rows for `/work` categories and `/life/book` chapters; responsive (drops date column at lg, stacks layout on mobile).
- `.prose` styles in `globals.css` — long-form bilingual prose for chapter pages.
- `id` props on `/work` modules for deep-link anchoring.

### Changed

- `src/components/SectionHero.astro` — `title` prop now accepts `string | string[]`; size ladder tightened so longer multi-line manifestos fit on one line at lg.
- `src/components/Nav.astro` — second nav item label `WORK` → `AI BUILDER`. _(landed in v0.6, recorded here for completeness as the ladder of inner-page changes lands.)_
- `src/components/Footer.astro` — Pillars link / self-description / removed `$` decorations. _(v0.6.)_
- `src/components/ModuleCard.astro` — gained `class`, `large`, `wide`, `disableWrapperLink`, `id` props + default slot. _(v0.6.)_
- `src/pages/index.astro` — homepage AI Builder bullet hrefs updated to slug-based anchors (`/work#supply-chain-agent`, `/work#ai-applications`, `/work#ai-data-analysis`).
- `src/pages/about.astro` — "AI Super User · AI 重度用户" → "AI Builder · AI 构建者".

### Decisions logged

- **Markdown chapters via ChapterLayout** — chosen over hand-rolled per-chapter Astro pages so the user can drop in `.md` files with frontmatter and have them render correctly without writing layout code each time. Future chapters just need a `.md` file.
- **9 chapters, not 10** — the placeholder TOC built earlier in the day was wrong; the actual book outline (in the user's writing folder) has 9, with chapter 9 deliberately TBD until late in the writing process.
- **Bento mosaic > uniform grid (`/work`)** — variable card sizes give the section a magazine-front-page feel rather than an iOS app drawer. Confirmed live for two days; staying.
- **Per-module layout (`/life`)** — Reading and Social have very different content types (book covers vs. group cards), so they get different layouts on the same page. Refused the temptation to standardize for the sake of standardization.
- **Tinted-monogram cover placeholders** — until real images arrive, the typographic placeholders are honest about being placeholders while still feeling editorial. Added `imageUrl?` field so swap-in is one prop change.
- **Project rule held**: ch05 not published despite being draft-ready, because of the employer-name privacy rule. This is exactly the kind of judgment-call the rule was written to short-circuit.

### Known gaps (acceptable for v0.7)

- 8 of 9 book chapters are still outline-only; ch05 is drafted but not yet redacted/published.
- `view all →` on category sections is currently a no-op anchor (no per-category pages yet).
- Reading list and Social groups on `/life` are placeholder content.
- The `Reading` module on `/life` doesn't yet show real book covers — using monogram-on-gradient.
- No real images on `/work` featured cards either — same monogram pattern.

---

## [0.6.0] — 2026-05-08

> **Explore-section overhaul + the Work → AI Builder rebrand.** A pure iteration release on the homepage's lower half — no new routes, no new assets — but the explore section now has a personality of its own.

**Live**: https://personal-website-zeta-nine-61.vercel.app

### Story of the day

The session opened on a single complaint: the lime-green featured Work card on the homepage felt loud against the deep-space hero. From there we kept pulling at the thread.

First, we dropped `featured={true}` on the Work card — five uniform dark cards, no neon slab. Then we removed the About card entirely (the user judged that it didn't earn an explore slot — About lives one click away in the nav and footer), so the section went from 5 cards to 4.

With 4 cards we restructured into a **bento mosaic** instead of a uniform grid:

- **Work (now AI Builder)** — primary card, `lg:col-span-2 lg:row-span-2`
- **Fitness / Life** — secondary cards, single cells in row 1
- **Ideas** — wide footer card, `lg:col-span-2` in row 2

To make the bento earn its varying sizes, we added a default `<slot />` to `ModuleCard` and per-card sub-content:

- **AI Builder card** — 4 clickable sub-bullets (Supply Chain Agent · Investing/NZ Funds · AI Applications · AI × Data Analysis), each with status dot and hover-revealed `→` arrow, deep-linking to `/work#<anchor>` on the inner page (added `id` props on the four `/work` modules).
- **Fitness / Life cards** — 3 static sub-bullets each, mirroring the inner page's modules with status dots and tags.
- **Ideas card** — horizontal layout (huge "04" left, content right) with an editorial **"Up next"** TOC listing the three nearest essay streams (Essays · Conviction Theses · Reading Notes), each tagged `SOON`.

Even after that, the AI Builder card had a ~280px gap above the Tools section because row-span-2 forced it to match the right column's combined height. The user reframed the gap as opportunity — "I'll have lots of AI build projects coming, use it as a coming-soon placeholder" — so we added a **pipeline ghost** below the four real bullets:

- `IN THE PIPELINE` tool-label kicker + `// more loading` terminal note on the right
- 4 placeholder rows with em-dash labels and decreasing opacity (50% → 40% → 30% → 20%) — visually a "future fading into the haze"
- Tags: SOON × 2 / TBD × 2

### The Work → AI Builder rebrand

Mid-session the user articulated a thesis: **"In the post-AI era, there's no Work — everyone's a builder."** That triggered a rebrand of the first pillar.

Code-side rename (everywhere we could):

| Surface | Before | After |
|---|---|---|
| Homepage card title | Work | **AI Builder** |
| Footer Pillars link | Work | **AI Builder** |
| Inner-page top nav | WORK | **AI BUILDER** |
| `/work` page hero manifesto | "Work runs itself. I supervise." | **"The end of work. The start of building."** |
| `/work` browser tab | "Work — Gimbo's Universe" | **"AI Builder — Gimbo's Universe"** |
| Homepage browser tab | "...Work. Invest. Move. Live." | **"...Build. Invest. Move. Live."** |
| Meta description | "Work · Invest · Move · Live..." | **"Build · Invest · Move · Live..."** |
| Footer self-description | "AI super user" | **"AI builder"** |

Intentionally **not** renamed:

- **Painted hero image** — "WORK" is baked into the AI-generated nav and the work-island label. Re-rendering the image isn't worth it for v0.6, and the contrast (painted "WORK" vs. coded "AI Builder") becomes a quiet thesis statement: *the old word is still on the surface; the new word is what's underneath.*
- **URL `/work`** — the painted hero links here, so the route name is locked.
- **`/work` page kicker** ("Scene I — Empty workstation, two screens still glowing") and module subtitle wording — kept their poetic / scenic register.

### Copy polish

- Removed three Unix-prompt `$` symbols (homepage `$ ls -la /universe`, footer `$ whoami`, footer trailing cursor-blink). The user reported them as reading like dollar signs to non-CLI eyes — kept the terminal kickers as bare `ls -la /universe` and `whoami`.
- Trimmed the redundant explore intro paragraph: *"Each section below is a working surface — projects in flight, notes in progress..."* → *"Projects in flight, notes in progress, things I'm thinking about right now."*
- Reworked the AI Builder card subtitle to vary phrasing from the heading: *"Four working surfaces — agents, investing..."* → *"Four streams I run from one notebook — agents, investing, applications, analysis."*

### Considered, then dropped

A late-session detour considered adding two animated pixel-art lobsters (the Claude Code CLI mascot) wandering on the planet horizon at the bottom of the hero — built and verified working (CSS-driven walk + idle animations, with a "meeting" greeting animation), then removed at the user's call as off-tone for the editorial / manifesto register the rest of the page cultivates. The work is gone but the impulse — *"give the universe a small living thing"* — gets logged here for v1.x consideration.

### Added

- `class`, `large`, `wide`, `disableWrapperLink`, `id` props on `ModuleCard.astro`, plus a default `<slot />` for inserting per-card sub-content (sub-bullet lists, pipeline ghost, "Up next" TOC).
- `.bullet-row` / `.bullet-label` / `.bullet-arrow` / `.bullet-tag` / `.dot` component classes in `globals.css` for typed status-list rows (both link and static variants).
- `id="supply-chain"` / `"investing"` / `"ai-apps"` / `"ai-data"` anchor ids on the four `/work` modules so the homepage AI Builder bullets can deep-link.

### Changed

- `src/pages/index.astro` — bento mosaic grid (`lg:grid-cols-4`), 4 cards (Work/Fitness/Life/Ideas, no About), per-card slot content.
- `src/components/ModuleCard.astro` — split layout into `wide` and `stacked` paths; `h-full flex flex-col` so cards fill bento cells; tools section pinned to bottom via `mt-auto`.
- `src/components/Nav.astro` — second nav item label `WORK` → `AI BUILDER`.
- `src/components/Footer.astro` — Pillars link / self-description / removed `$` decorations.
- `src/pages/work.astro` — manifesto + browser tab title rebranded, anchor ids added.
- `src/layouts/BaseLayout.astro` — meta description rebranded.

### Decisions logged

- **Drop About from explore section** — About is one click away (nav + footer); five overview cards is one too many for visual rhythm.
- **Bento over uniform grid** — variable card sizes give the section a "front page of a magazine" feel rather than an iOS app drawer.
- **Keep the painted-hero "WORK" / coded "AI Builder" mismatch as a feature** — the contrast is the thesis. A future v1.x re-roll of the hero image with painted "BUILDER" is on the table but not urgent.
- **No mascot on this site** — the bottom-of-hero pixel-lobster experiment shipped as a working prototype and was rolled back; the editorial/manifesto register won.

### Deferred (intentionally) — picked up in v0.7+

- Re-render the hero image with "BUILDER" replacing "WORK" in the painted nav and island label.
- Real content on `/ideas`. Right now the homepage Ideas card teases three streams (Essays / Conviction Theses / Reading Notes) but they all link to `/ideas` which is still a stub.
- WeChat / 小红书 real handles in About + Footer.
- Custom domain.

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
