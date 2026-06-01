# Changelog

Gimbo's Universe — release notes.

Format: based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioned semver-ish (0.x while UI/IA took shape; **1.0 reached 2026-06-01** — live on its own domain with a coherent, honest IA. Content keeps growing past 1.0 as a living site.).

---

## [1.0.0] — 2026-06-01 · 🎉 The site goes 1.0

> **Gimbo's Universe is live for real.** The same day the domain landed ([0.12.0]), the homepage and IA got the pass that earns a 1.0: every nav section is a real page, every homepage claim matches what's actually shipped, and the old "Work" section is reframed as it should always have been — **AI Builder**. The site is now coherent, honest, and live on its own address. 1.0 marks the platform being *real and truthful* — not the end of writing; chapters and pieces keep landing, as a living site should.

**Live & verified**: https://gimbo.co.nz — homepage 200, canonical/OG on the real domain, every `/ai-builder/*` route 200, old `/work*` routes 404, zero stale placeholders on the homepage.

### The 1.0 bar — and where it stands

- ✅ **Domain wired** ([0.12.0]) — apex `gimbo.co.nz`, HTTPS, canonical + sitemap all on the real domain.
- ✅ **Every nav section is a real, navigable page** — Home · AI Builder · Fitness · Life · Ideas · About.
- ✅ **The homepage tells the truth** — nothing live is still marked "Coming soon"; LIVE / WIP / SOON badges now match each section's actual state.
- ✅ **Coherent naming** — the career/build surface is AI Builder end-to-end (URL, nav, page title, feed tag); no leftover "Work".
- 🔄 **Content keeps growing — by design.** The book is 1 of 9 chapters live (ch03 in flight); Ideas has 6 pieces and counting. A living site, not a finished document.

### Homepage made honest (this session)

- **Ideas card**: dropped "Coming soon" → `LIVE`; subtitle is now "six pieces live and counting"; the "Up next" placeholder list was replaced with the three latest *published* pieces.
- **Dispatch strap**: repinned from the latest Ideas piece to the **Tennis** homepage; pill relabelled `NEW` → `FEATURED` (it now pins a chosen page rather than announcing the newest dispatch).
- **Stale `SOON` → `LIVE`**: Tennis (a full 561-line page), Reading (a 5-book shelf), and Social (4 active interest groups) were all built and populated but still flagged SOON on their homecards.
- **AI Builder card**: surfaced all three live builds — NZ Funds, BTC Dashboard, Tennis Buddy — grouped live-first so the card leads with finished work.

### Renamed: Work → AI Builder

- Route `/work` → `/ai-builder` (sub-pages follow). **No redirect — old `/work` 404s, by choice.** There is no "Work" section anymore; it is AI Builder.
- Files moved (git-tracked renames): `work.astro` → `ai-builder.astro`, `work/` → `ai-builder/`, `public/work/` → `public/ai-builder/`, `data/work.ts` → `ai-builder.ts`.
- Repointed every internal link (nav, footer, 404, homepage card, feed, BTC back-link, in-page anchors), fixed the data import, aligned the page `<title>` + hero alt (a stray "AI X" → "AI Builder"), relabelled the 404 pill, updated the homepage module-list copy, and renamed the feed module tag `WORK` → `AI BUILDER`.

### Known follow-up (cosmetic, deferred on purpose)

- General-prose "work" still appears in the homepage life-OS manifesto ("…work, investing, the body…") — that's a life-domain word, not the section name, so it stays.
- Internal asset filenames still carry the old name: `og-work.jpg`, the `work-hero.*` hero images (+ `name="work-hero"`), and the `SceneWork.astro` landing scene. Purely cosmetic — never surfaced as a section label.

---

## [0.12.0] — 2026-06-01

> **The site gets a real domain.** Registered a custom domain and wired it to the Vercel project, so Gimbo's Universe will live at its own address instead of the `*.vercel.app` preview URL. This is the "domain is wired" milestone flagged in the changelog intro — last box before 1.0 territory.

**Live**: https://gimbo.co.nz — apex, no-www canonical (HTTPS verified live same day, after the .nz delegation propagated)
**Also live**: https://personal-website-zeta-nine-61.vercel.app (Vercel preview URL, still works)

### Story of the day

`gimbo.com` was already taken, so after checking a few options on Cloudflare Registrar (at-cost, no renewal markup) we landed on **`gimbo.co.nz`** — clean, on-brand, and fitting for an NZ-based site. Registered it there.

Wiring decision: kept the **apex `gimbo.co.nz` as the canonical URL** (declined Vercel's default "redirect apex → www") — shorter and cleaner for a personal site. Added the domain to the `gimbo-universe` Vercel project (Production), and created the single DNS record Vercel asked for on the Cloudflare side.

One important config detail: the Cloudflare DNS record is set to **DNS only (grey cloud), not Proxied (orange cloud)**. Vercel needs to see the origin directly to issue its own SSL cert and route traffic; leaving Cloudflare's proxy on would fight Vercel's edge and can cause SSL-issuance failures or redirect loops. Cloudflare nags to turn proxying on — ignored on purpose here.

### Added

- **Domain** `gimbo.co.nz` registered via Cloudflare Registrar.
- **Vercel**: `gimbo.co.nz` added to the `gimbo-universe` project, Production environment, apex as canonical (no www redirect).
- **Cloudflare DNS**: one `A` record — name `@` → `216.198.79.1` (Vercel's current anycast IP; the older `76.76.21.21` also still works), **Proxy status: DNS only**, TTL Auto.

### Resolved same day

- The `.nz` delegation propagated within the hour; a manual **Refresh** on the Vercel Domains page flipped `gimbo.co.nz` to "Valid Configuration", Vercel auto-issued the HTTPS cert, and `https://gimbo.co.nz` now loads. (Public recursive resolvers briefly still returned a cached NXDOMAIN due to negative caching, but the site resolved and served fine.)
- **Canonical domain wired into the build.** Replaced the `gimbosuniverse.com` placeholder with `https://gimbo.co.nz` in `astro.config.mjs` (`SITE`), `src/layouts/BaseLayout.astro` (pre-deploy fallback), and `public/robots.txt` (sitemap URL). This drives every page's `<link rel="canonical">`, OG `og:url` / `og:image`, and the sitemap URLs, so SEO/social-share previews now reference the real domain. Build verified locally (`npm run build` → `dist/` clean of the old domain), then committed and pushed.

### Considered, then deferred

- **`www` as canonical** (Vercel's recommended default). Deferred — apex is cleaner for a personal site. Could still add a `www` CNAME + redirect-to-apex later if desired.
- **`gimbo.nz`** (the bare second-level, no `co`). Noted as a possible defensive registration so the shorter variant isn't sniped, but not bought.

---

## [0.11.0] — 2026-05-29

> **A BTC live dashboard joins the Investing stream.** A short session: embed a third-party real-time Bitcoin board inside `/work` rather than just linking out, so the cycle metrics live under Gimbo's Universe chrome.

**Live**: https://personal-website-zeta-nine-61.vercel.app
**New route**: `/work/btc-dashboard`

### Story of the day

Wanted a real-time BTC board (`btc.x.fish` — 关机币价 / 200 周均线 / 均衡价格 / MVRV / 减半倒计时 / 恐惧贪婪指数) to sit inside the site instead of being an external bookmark. Since it's a third-party tool, not an in-house build, the honest move was **iframe embed, not a copied HTML enclave** — the data and UI stay hosted at the source (always live, no broken API proxy), and the page is explicit that it's embedded and not built here. Confirmed the source sets no `X-Frame-Options`/CSP frame-ancestors, so it frames cleanly.

Then the follow-up question — "what is this thing actually telling you, and can it call a buy?" We read the dashboard's own source to recover the exact thresholds it bakes in (ahr999 `<0.45` 抄底, MVRV `>3.5` 过热, `price/200WMA <1.5` 底部区, F&G `≤20` 极度恐惧…) and crystallized that into a **durable on-page "how to read it" guide** below the iframe. Key decision: the guide explains the *zones and caveats*, but **hardcodes no live numbers** — those would go stale, and they already live in the iframe above. It's framed as a cycle-position / valuation lens (定投 视角), with an explicit "what it can / can't answer" split and a not-financial-advice line.

### Added

- `src/pages/work/btc-dashboard.astro` — new page serving at `/work/btc-dashboard`. Site chrome (Nav/Footer/CRT) + a header (back-link to `/work#investing`, title 比特币实时看板 / BTC Live Dashboard, "在新标签全屏打开 ↗" pill, `source: btc.x.fish · 第三方实时看板,非本站构建`), then a full-width `.card`-wrapped `<iframe src="https://btc.x.fish">` at `h-[82vh] min-h-[560px]`, with a fallback note.
- A "how to read it" guide below the iframe (same page): five indicator-group cards (估值锚 / 成本底 / 情绪 / 周期时点 / 资金泡沫), a zone-reference table (ahr999 / MVRV / 200WMA / 恐惧贪婪 / 关机价 / 均衡价 — 便宜区 vs 过热区), a "能 / 不能回答什么" two-column split, and a not-advice disclaimer. Styled with the existing `.card` / `.terminal` / wise-dark tokens.
- A `btc-dashboard` entry in `src/data/work.ts` under `investing` (status `live`, date `2026-05-29`, `href: '/work/btc-dashboard'`) — newest item, so it also surfaces in the featured top-3 on `/work`.

### Considered, then deferred

- **Self-hosting a copy.** Rejected — the board pulls live data via JS; a copied static file could break if data routes through the source's own backend, and copying a third-party page wholesale isn't right. Iframe keeps it live and clearly attributed.
- **Hardcoding a snapshot of today's readings into the guide.** Rejected — the live values (price, ahr999, MVRV…) change daily and would rot. The guide stays at the durable "how to interpret the zones" level; the live numbers stay in the iframe.
- **iframe height on mobile.** Fixed at `82vh` with a `560px` floor and internal scroll; worth a glance on a real device since cross-origin auto-resize isn't possible.

---

## [0.10.0] — 2026-05-27

> **`/fitness/tennis` becomes a real page. AI Builder absorbs the Tennis Buddy build. The Library renders MasterClass-style.** Two weeks of letting v0.9 settle, then one long session that started with "the homepage gap is too big" and ended with a curated film-room sitting next to an editorial Roland-Garros live card.

**Live**: https://personal-website-zeta-nine-61.vercel.app
**New route**: `/fitness/tennis` (now a static page with three modules — replaces the `[module].astro` dynamic render for this slug)

### Story of the day

Three connected shifts, each pulling the next.

**Homepage breathing room.** The fix that started the session: on the homepage, the bottom of the explore grid had ~210–240 px of dead space before the two pixel mascots, then another ~240 px before the footer. The mascots were swimming in white. We tightened the mascot-row top margin (`mt-24 md:mt-28` → `mt-10 md:mt-12`), shortened the row height (`h-24 md:h-28` → `h-20 md:h-24`), reduced the explore section's bottom padding (`py-20 md:py-28` → `pt-20 md:pt-28 pb-0`), and removed Footer's global `mt-32` so any section ending now sits flush with the footer's top hairline. Net: the homepage's lower third feels collected instead of stretched.

**Tennis Buddy moves out of Fitness, into AI Builder.** The user reframed the build retrospective: "Tennis Buddy is an AI-build experiment, not a fitness module — the on-court work is separate from the app." So we lifted `public/fitness/tennis-buddy.html` to `public/work/tennis-buddy.html` (back-link inside the HTML fixed: `/fitness` → `/work`, breadcrumb "Fitness · Tennis Buddy" → "AI Builder · Tennis Buddy"); added a Tennis Buddy entry to `src/data/work.ts` under `ai-experiments` (status `live`, date `2026-05-08` — bumps it into the featured top-3); cleaned three Tennis-Buddy-specific articles out of `src/data/fitness.ts`'s tennis module; updated the Feed (`Tennis Buddy — FITNESS WIP /fitness/tennis` → `Tennis Buddy — WORK Shipped /work/tennis-buddy.html`); and updated the homepage AI Builder + Fitness sub-bullets.

**`/fitness/tennis` rebuilt from one-article-stub to a real page.** With the app gone, the slug needed a reason to exist. Three modules now share the page:

- **Module 1 · Tour · 巡回赛事** — editorial Roland-Garros card. RG-orange left border bar, pulsing LIVE pill, big `ROLAND-GARROS` Wise Sans 900 title, dates + city + day-label inline, blurb, four quick-link chips (Draws / Schedule / Order of Play / Scores) linking to rolandgarros.com, and a clay-orange primary CTA "Open Roland-Garros.com →". Footer line teases "Next slam · Wimbledon · 29 Jun – 12 Jul". Two-column on lg+ (text 7/12 left, image 5/12 right); mobile stacks. Hero image is a real Roland-Garros 2026 press photo (Balles, by Guillaume Amat) with a `mix-blend-difference` photographer credit at bottom-right that stays legible on both bright and dark areas.
- **Module 2 · Training · 我的训练** — left card (lime border): "Now working on" with `BACKHAND` + `SLICE` in big lime display type, each with a one-line note, then an NTRP self-rating callout (3.5 — steady). Right card: home court badge (Koru Tennis Club · Auckland) + a 5-row session log using the existing `.project-row` style. Reads like a personal coach's clipboard.
- **Module 3 · Library · 影片库** — MasterClass-style portrait cards in two stacked sub-sections (Documentaries / Tutorials), each 4-up on lg. Every card has 8 real curated entries, no placeholders left.

**Library: MasterClass-style portrait cards.** The first version of Module 3 used the same landscape monogram-on-gradient cards as the `/work` featured row. User pulled up a MasterClass screenshot and asked to borrow that layout. We rebuilt: `aspect-[3/4]` portrait photo on top, big stylized name overlaid on the lower portion with a dark `from-canvas via-canvas/85` gradient for readability, then on the card body a 6 px em-dash divider, centered subtitle, and a full-width outlined pill button (`▶ WATCH ON NETFLIX` / `▶ WATCH ON MASTERCLASS` / `▶ WATCH ON YOUTUBE` / `▶ OPEN ON WTA`).

Two flags emerged from real photos arriving:

- **`posterMode: boolean`** — when `true`, the card skips its own gradient + name overlay because the image is an official poster with title typography already baked in (THE NETFLIX SLAM, BREAK POINT, NAOMI OSAKA, RAFA). Without this, the card-level name would duplicate the poster's own headline; with it, the poster speaks for itself.
- **`imagePosition?: string`** — passed through as `style="object-position: ..."` on the `<img>`. Needed when a landscape-source photo (e.g. the WTA Wang Xinyu studio shot, face on the right) is cropped to portrait — default center crop would lose the subject.

**Eight real images replaced eight placeholders in one session.** Tour hero (Guillaume Amat, RG 2026), four Netflix docs (The Netflix Slam · Nadal vs Alcaraz, Break Point Sabalenka key visual, Naomi Osaka docuseries, Rafa series), and four tutorial portraits (Serena Williams MasterClass, Tennis with Dylan YouTube channel, Wang Xinyu × 2 — grass action + studio portrait, framed bilingually as `Wang Xinyu` and `王欣瑜`). The Library went from "honest about being placeholder" to "actually curated".

**Fitness page Tennis card rewritten for the new reality.** Status `planned` → `live`. Subtitle dropped the "separate from the app I built for it" line (no longer needed — that move is in the past) and now hints at the three concrete modules: `"Three surfaces — the slam I'm watching right now (currently Roland-Garros), my own training log off-tour (backhand + slice at Koru Club, NTRP 3.5), and a film room of docs and tutorials worth re-watching."` Tools tags `Match Log · Drills · NTRP` → `Slams · Training · Film Room` (mirrors the three module names).

**Homepage feed gained a "Counting down · Rafa" row.** Today is 2026-05-27; Rafa drops 2026-05-29. Added at the top of `feed.ts` as `kind: 'ongoing'`, module `FITNESS`, linking to `/fitness/tennis` (the in-house curation, not Netflix). New action verb `Counting down` — fits the calendar-anticipation register without overlapping the existing `Shipped / Building / Reading`.

### Considered, then deferred

- **Custom domain.** Still pending. OG image URLs in the meta tags resolve to `gimbosuniverse.com`, which isn't bought yet. No change from v0.9.
- **Per-image art direction for the mobile square crop.** Some heroes still center-crop fragments of in-image text (about-hero's "I AM GIMBO." for example). Untouched this session.
- **Netflix title IDs.** Three of the four Netflix links use guessed title IDs (`81735337` for The Netflix Slam, `81097131` for Naomi Osaka, `81569920` for Break Point). The fourth (Rafa) deliberately uses a Netflix search URL since the title ID for the not-yet-released series is unknown. If any of the guessed IDs are wrong, swap to search URLs.
- **WTA player ID for Wang Xinyu.** `wtatennis.com/players/322864/wang-xinyu` is a best guess; not verified. Easy to swap to a search URL if it 404s.

### Added

- `src/pages/fitness/tennis.astro` — new static page with three modules (Tour · 巡回赛事 / Training · 我的训练 / Library · 影片库). Replaces the dynamic `[module].astro` render for the `tennis` slug (Astro prefers the static match).
- `public/work/tennis-buddy.html` — moved from `public/fitness/tennis-buddy.html`; in-file back-link patched.
- `public/fitness/tennis/` — new directory holding 8 images: `rg-2026.avif` (Tour hero), `netflix-slam.jpg`, `break-point.webp`, `naomi-osaka.jpg`, `rafa.jpg` (Documentaries), `serena-williams.jpg`, `tennis-with-dylan.jpg`, `wang-xinyu-grass.png`, `wang-xinyu-studio.jpg` (Tutorials).
- New `Video` type fields in `tennis.astro`: `posterMode?: boolean`, `imagePosition?: string`. Used to control whether the card renders its own name overlay (false / undefined for headshots, true for posters with baked-in title) and how the portrait crop is anchored.
- A Tennis Buddy entry in `src/data/work.ts` under `ai-experiments` (status `live`, date `2026-05-08`, `href: '/work/tennis-buddy.html'`) — bumps it into the featured top-3 on `/work`.
- A "Counting down · Rafa" row at the top of `src/data/feed.ts` (kind `ongoing`, module `FITNESS`).

### Changed

- `src/pages/index.astro` — mascot-row top margin tightened, row height shortened, explore section's bottom padding zeroed; homepage Fitness sub-bullet `Tennis Buddy · WIP` → `Tennis · SOON`.
- `src/components/Footer.astro` — removed global `mt-32` so the footer sits flush with whatever section ends above it (used by the new homepage flow, doesn't visually harm other pages whose last sections already have their own `py`).
- `src/pages/fitness.astro` — Tennis card: title `Tennis Buddy` → `Tennis · 网球`, status `wip` → `live`, subtitle rewritten to point at the three new modules, tools tags `Match Log · Drills · NTRP` → `Slams · Training · Film Room`, `featured={true}` removed (Fitness has no lime hero card for now — Social Health stays the wide LIVE anchor at the bottom).
- `src/data/fitness.ts` — `tennis` module entry removed (the static page handles `/fitness/tennis` now; nutrition / strength / core still render through `[module].astro`).
- `src/data/feed.ts` — Tennis Buddy row re-tagged: `module FITNESS → WORK`, `action Building → Shipped`, `kind wip → done`, `href /fitness/tennis → /work/tennis-buddy.html`.

### Decisions logged

- **Tennis-Buddy belongs in AI Builder, not Fitness.** The retrospective documents a one-person AI-augmented build — the framing is "what I shipped with AI", not "what I do for fitness". Fitness keeps the on-court work; AI Builder owns the build.
- **Static `/fitness/tennis` over dynamic `[module].astro` for this slug.** The other three Fitness sub-pages (Nutrition / Strength / Core) are still article lists and fit the generic dynamic template fine. Tennis needs a richer three-module shape; pushing that into the dynamic schema would over-generalize. Static page wins where the layout earns the override.
- **MasterClass-style portrait cards for the Library.** The original landscape monogram-on-gradient cards were honest about being placeholders, but the moment we had real curated content (Netflix posters, MasterClass headshots, YouTube creators), the layout needed to flatter the imagery, not paper over its absence. Portrait crops + name overlay + outlined pill CTA reads "curated film room", not "card grid".
- **`posterMode` instead of one universal layout.** Some images come with their own title typography baked in (movie/series posters); others are clean headshots. Hard-coding either would fight the source material. The flag lets each entry's source artwork drive the layout.
- **RG colours as a section accent, not a system swap.** `/fitness/tennis` is the first page that bring RG orange, RG green, and RG-orangeBright in as primary chrome. We resisted swapping the design system — the canvas, type, and rest of the chrome stay Wise Dark. RG accents are scoped: Tour module's left border + LIVE pill + CTA, Library section headings + hover edges. The site as a whole remains visually coherent.
- **Footer `mt-32 → mt-0` globally.** Considered scoping this with a negative-margin hack only on the homepage. Decided to take the wider change because the other pages already pad their last sections; removing the footer's external top-margin reads as a tightening, not a regression.

### Known gaps (acceptable for v0.10)

- Custom domain still pending; OG previews still won't render until DNS lands on `gimbosuniverse.com`.
- The three Netflix title IDs and the WTA player ID for Wang Xinyu are unverified guesses; swap to search URLs if any fail.
- Tour module's content (tournament name, day label, blurb, dates, next slam) is hand-edited — needs a manual touch each time the slam calendar moves. By design for v0.10; structured data + a calendar-aware default could come later.
- Fitness page has no `featured={true}` lime card anymore (Tennis lost it when it stopped being placeholder; Social Health didn't gain it). Section visually reads slightly flatter — acceptable but worth revisiting.
- Tour image's photographer credit (`© Guillaume Amat / Roland-Garros`) is fine for an editorial site; verify usage rights if anything formal ever changes.

---

## [0.9.0] — 2026-05-10

> **Perf overhaul + persistent nav + mobile art direction + per-page OG.** A v1-readiness pass that took the section pages from "looks good on a 2k monitor at full bleed" to "actually shippable everywhere."

**Live**: https://personal-website-zeta-nine-61.vercel.app

### Story of the day

A senior-designer review flagged five gaps blocking v1: only the homepage hero was actually optimized (every inner page was loading a raw 2 MB PNG); the painted nav-strip baked into each AI artwork was the *only* navigation (every inner page was setting `hideNav={true}`); 30 in-image hot-spot anchors duplicated across 6 files; mobile heroes collapsed to ~260 px-tall slivers; OGs were a single shared image regardless of which page got shared. We worked them in priority order.

**Hero perf overhaul.** All 6 in-use heroes now run through `optimize-images.mjs`: AVIF/WebP at full res + 768/1280 responsive variants. PNG masters moved out of `public/` into a sibling `landing-source/` so they stay tracked (for re-running the optimizer) but no longer ship in the deploy bundle (~14 MB saved per build). Section pages went from ~2 MB hero PNG to ~30 KB AVIF on first paint, roughly 50× smaller.

**Painted-nav strip cropped from every variant.** The AI artworks all had a navigation menu painted into their top ~6%. With the real HTML `<Nav />` taking over routing, that strip became visual duplication, so the optimizer now does an `extract({ top: 80, ... })` before format conversion. Sources in `landing-source/` keep the full original art untouched for whenever the user wants to re-render them.

**Persistent HTML nav on every page.** Removed `hideNav={true}` from 6 pages and deleted 30 in-image hot-spot anchors. The real `<Nav />` already had a sticky `bg-canvas/85 backdrop-blur-sm` mode that nobody was using; turning it on solved the off-hero "where's the nav" problem in one line. CTA href fixed from `#explore` (only worked on home) to `/#explore` (works from anywhere).

**Mobile art direction via `<picture>` media queries.** Section sizing switched from height-driven rules to `aspect-ratio` so the hero always matches its image exactly (no `object-cover` guesswork). At <768 px viewport, `<HeroPicture>` swaps to a 944×944 centered square crop generated by the optimizer; at ≥768 px, the wide 1536×944 scene. Tradeoff: at the 768 boundary the aspect "jumps" if you slowly drag a desktop window across it — normal art-direction behavior, not a regression. Per-image crop offsets stay center-default for now; tweakable per-hero in `loadMobileSquare` if a particular image's central subject needs the window biased.

**Per-page OG images.** `/work`, `/fitness`, `/life` (+ TOC + chapter pages share `og-life.jpg`), `/ideas`, `/about` each ship a unique 1200×630 social preview generated from their own hero source. `og:image:alt` was hard-coded to "three floating islands" (legacy from the original landing concept) — now interpolates the page title.

**Tone softened: PLAN → SOON.** "PLAN" / "PLANNED" status labels read as project-management TODO across the empty-state-heavy pages (`/fitness`, `/ideas`, life book TOC, homepage sub-bullets). Replaced with "SOON" sitewide — same width, softer voice. Also removed `tools={["soon"]}` placeholder tags on `/ideas` cards, since "soon" is not a tool.

**Footer cleanup.** WeChat / 小红书 `@TBD` rows removed, leaving just the email row. Real handles can be re-added when they're real.

**`<HeroSection>` + `<HeroPicture>` components.** Extracted from the 6 copy-pasted hero blocks. The `<section>` wrapper with responsive `.hero-fullbleed` aspect-ratio lives in `<HeroSection>`; the art-directed `<picture>` element with mobile/desktop sources lives in `<HeroPicture>`.

### Considered, then deferred

- **Custom domain.** OG image URLs in the meta tags resolve to `gimbosuniverse.com`, which isn't bought yet, so social previews won't render until DNS lands. User has explicitly deprioritized this; OG infra is in place and starts working the moment the domain is wired.
- **About page real content.** Still hero-image-only. User decision: "About 以后再说" — leave as-is for v0.9, plan content for v1.0.
- **/ideas removal from nav.** Initially removed (placeholder pages shouldn't advertise themselves), reversed within the same session ("idea 还要有啊"). Decision saved as a project preference: nav communicates the *intended* shape of the universe, not just the shipped surface — placeholders stay visible.
- **Now-line on homepage.** Highest-leverage v1.1 polish identified in the review; not built yet.

### Added

- `src/components/HeroSection.astro` — full-bleed AI hero `<section>` with responsive `.hero-fullbleed` aspect-ratio sizing.
- `src/components/HeroPicture.astro` — art-directed `<picture>` element with mobile (1:1 square) + desktop (1.6:1 wide) sources, AVIF/WebP fallback ladder.
- `landing-source/` — repo-root directory for hero PNG masters, moved out of `public/` so they stay tracked but don't deploy.
- `public/og-{work,fitness,life,ideas,about}.jpg` — per-page 1200×630 social previews.
- `public/landing/<name>-mobile.{avif,webp}` — 944×944 centered-square mobile variants for every hero.
- `.hero-fullbleed` rule in `globals.css` — aspect-ratio-driven (1:1 mobile, 1536:944 desktop).

### Changed

- `scripts/optimize-images.mjs` — generalized to process a whitelist of heroes (was hardcoded to one); reads from `landing-source/` (was `public/landing/`); applies a top-80 px crop to strip the painted nav; emits `<name>-mobile.{avif,webp}` square crops; emits per-hero OG JPGs.
- `src/components/Nav.astro` — CTA href `#explore` → `/#explore` (was a dead anchor off-home).
- `src/components/ModuleCard.astro` — `'PLANNED'` label → `'SOON'`.
- `src/pages/work.astro` — inline `statusMeta.planned.label` `'PLAN'` → `'SOON'`.
- `src/pages/life/book.astro` — same `'PLAN'` → `'SOON'`.
- `src/pages/index.astro` — 4 hardcoded `>PLAN<` tags in Fitness/Life sub-bullet rows changed to `>SOON<`.
- `src/pages/ideas.astro` — `tools={["soon"]}` → `tools={[]}` on all 6 placeholder cards.
- `src/pages/{index,work,fitness,life,ideas,about}.astro` — hero blocks replaced with `<HeroSection>`; `hideNav={true}` removed; 30 in-image hot-spot anchors deleted.
- `src/pages/{work,fitness,life,ideas,about,life/book}.astro` + `src/layouts/ChapterLayout.astro` — `ogImage` prop added to each `<BaseLayout>` call.
- `src/layouts/BaseLayout.astro` — `og:image:alt` switched from hardcoded string to `${title} — an AI-painted scene from Gimbo's Universe`.
- `src/components/Footer.astro` — WeChat / 小红书 `@TBD` rows removed.
- `README.md` — image-optimization instructions point at `landing-source/`.

### Decisions logged

- **Persistent HTML nav over painted-nav-only.** The painted nav was clever and visually distinctive but architecturally fragile: hot-spot percentages drift across aspect ratios, fail when image fails to load, and require regenerating images to change menu structure. Real `<Nav />` is sticky, accessible, route-resilient.
- **Don't hide nav for placeholder pages.** After reversing the in-session decision to remove `/ideas`, captured as a durable preference: nav communicates intent, not shipped surface area.
- **Mobile art direction via square crop, not pure aspect-ratio fit.** Pure aspect-ratio gives the full image but mobile collapses to ~240 px tall. Square crop gives mobile presence while keeping every viewport rendering the full intended frame for that breakpoint.
- **PNG masters tracked but out of `public/`.** Source-of-truth lives in git for reproducibility (re-running the optimizer needs the master); they just don't need to be in the deploy bundle.

### Known gaps (acceptable for v0.9)

- About page is still hero-image-only — no body content yet.
- `/ideas` is all placeholder cards (now labeled SOON instead of PLANNED, but still placeholder).
- OG image URLs point to `gimbosuniverse.com` which isn't wired up yet; social previews won't render until DNS lands.
- Mobile square crop uses a single center-crop position across all heroes; some images (e.g. `about-hero` with the "I AM GIMBO." text bottom-left) have headline text fragmented in the crop. Per-image offsets are wired in the script if any hero needs to be re-biased.

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
