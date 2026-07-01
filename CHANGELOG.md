# Changelog

Gimbo's Universe — release notes.

Format: based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioned semver-ish (0.x while UI/IA took shape; **1.0 reached 2026-06-01** — live on its own domain with a coherent, honest IA. Content keeps growing past 1.0 as a living site.).

---

## [1.14.3] — 2026-07-01 · Ideas — AI 学习记录 #04: the first machine I built caught my own mistakes

> Capstone of the Anthropic-primitives trilogy. The first three pieces were "read + self-grade"; this one is the payoff — I actually welded skills + workflows + loops into a real recurring task (my fleet's investment-briefing agent): added a delivery gate (from #01), a red-team self-audit (from #02), and made it a weekly local loop (from #03). On its very first run, the machine caught three of my own self-deceptions (reusing last week's stale judgment / almost railroading me into an irreversible action / concluding on incomplete data). Fully desensitized — no holdings, amounts, or returns, per the financial red line.

### Added — Ideas

- **`public/ideas/first-machine.html`** — new Wise-Dark deep-read (实操 register, green `#9fe870` capstone accent). Sections: from reading to welding (3 parts mapped to #01/#02/#03) → the 3 things the red-team caught (coral "caught" cards, each with the fix) → the delivery gate (5-item checklist, 4 pass + 1 honest "待核" flag) → outro ("I built myself an honest opponent"; calls back to《两次模拟》's "自己出题自己阅卷" confession; read → weld → run closes the loop). **Red-line-clean**: investment kept category-level, zero positions/numbers/tickers/salary/employer.
- **`src/data/ideas.ts`** — new article **#22** (`topicSlug: tech`, `seriesSlug: ai-log`, `date: 2026.07`, `art: core/#9fe870`). AI 学习记录 count now 9.

### Notes

- This piece documents actual work done this session: the `chief-investment-officer` skill (local, outside this repo) gained a 交付闸 (stop condition), a 红队自审 step, and a 周循环 section; a test run surfaced the three catches described. The website piece abstracts all of it — the machinery and the lesson travel, the portfolio does not.
- Trilogy is now a closed set of 4: #19 skills (add Gotchas) → #20 workflows (add red-team) → #21 loops (climb the ladder) → #22 the build (read → weld → run). Accent hues green/sky/amber/green.
- Patch bump: content drop into the existing 专辑.

## [1.14.2] — 2026-07-01 · Ideas — AI 学习记录 #03: loops → a 4-rung ladder I preach but don't climb

> Third piece in the series, completing a trilogy on Anthropic's three Claude Code primitives (skills → workflows → loops). "Getting started with loops" reframed as a ladder where each rung hands off one more thing (verification → stop condition → trigger → the prompt itself) — literally the "把人安全地移出信任链" arc I keep writing. Honest self-grade: I wrote "循环 > 派活" into my own operating system but live on rung 1; my only rung-4 loop is the daily Chief of Staff briefing.

### Added — Ideas

- **`public/ideas/getting-started-with-loops.html`** — new Wise-Dark deep-read (learning-note register, amber `#ffd11a` accent). Sections: what a loop is ("start with the simplest solution") → the **4-rung ladder** re-sorted by "what you hand off" (turn-based/verification → /goal/stop-condition → /loop·/schedule/trigger → proactive/the-prompt, top rung lit) → a **scorecard** placing me (Lv1 ✓ all my fleet but not even the Lv1 verification upgrade, /goal ✗, /loop half, proactive = one) → a 4-step hands-on climb (take the CIO investment briefing from Lv1 → Lv3: add a verification skill, hand off the stop condition via /goal, then /schedule it weekly + graft last piece's adversarial red-team). Back-link at top.
- **`src/data/ideas.ts`** — new article **#21** (`topicSlug: tech`, `seriesSlug: ai-log`, `date: 2026.07`, `art: loop/#ffd11a`). AI 学习记录 count now 8.

### Notes

- Trilogy throughline is now explicit in the copy: skills (add a Gotchas section), workflows (add a red-team agent), loops (climb from manual to automated) are "three parts of one machine" — every gap is the same shape: not handing enough off / not falsifying. The three accent hues (green #19 → sky #20 → amber #21) visually distinguish the set within the series.
- Red lines: fleet + supply-chain + investment content is generic/philosophy-level — no company names, colleague names, or financial positions/holdings.
- Patch bump: plain content drop into the existing 专辑.

## [1.14.1] — 2026-07-01 · Ideas — AI 学习记录 #02: dynamic workflows → a checkup on my own AI fleet

> Second piece in the「AI 学习记录」series. Anthropic's "A harness for every task: dynamic workflows" article, but turned inward: I already hand-built a harness (my AI fleet — a Chief of Staff fanning out to CIO/CMO/CHO/EVO). Graded the fleet + my supply-chain sandbox against the article's 7 orchestration patterns. Finding matches piece #19 exactly: I'm good at *generating*, bad at *falsifying* — the biggest gap is adversarial verification, the very "self-preferential bias / 自己出题自己阅卷" I confessed to in the earlier《两次模拟》piece.

### Added — Ideas

- **`public/ideas/dynamic-workflows.html`** — new Wise-Dark deep-read (learning-note register, sky `#38c8ff` accent to differ from #19's green). Sections: what a harness / dynamic workflow is (static vs dynamic, "does it really need more compute?") + the 3 failure modes it fights (laziness / self-preferential bias / goal drift) → the 7 patterns as cards (adversarial verification lit as the star) → a 6-row **scorecard** grading the fleet (fan-out-and-synthesize ✓ via Chief of Staff, classify-and-act ✓ via EVO, model routing / loop-until-done half, generate-filter/tournament ✗, adversarial verification ✗ = the hole) → a 4-step hands-on fix (add a red-team role, let something else write dirty/edge scenarios for the sandbox, `/goal`+`/loop`+token-budget guardrails, the quarantine pattern for untrusted email). Back-link at top per pattern.
- **`src/data/ideas.ts`** — new article **#20** (`topicSlug: tech`, `seriesSlug: ai-log`, `date: 2026.07`, `art: team/#38c8ff`). AI 学习记录 count now 7.

### Notes

- Continuity is deliberate: this piece explicitly calls back to #19 (skills → add a Gotchas section) and to《两次模拟》(the self-grading blind spot) — the series is accreting one throughline: cognition is free, so the scarce/valuable thing is *falsification* (a Gotchas section, a red-team agent), which the machine can't hand you.
- Red lines: fleet + supply-chain content is generic/role-level — no company names, colleague names, or financial positions.
- Patch bump (not minor): a plain content drop into an existing Ideas 专辑 (no new mechanism/IA), per the versioning rule.

## [1.14.0] — 2026-07-01 · Ideas — new 专辑「AI 学习记录」+ first piece (grading Replen against Anthropic's skills guide)

> Opened a new ongoing series (专辑) on `/ideas`: **AI 学习记录 / Learning the Latest AI** — a running log where each new AI thing I read gets turned into a hands-on change to something of my own, not just a summary. Kicked it off with piece #19: instead of a read-through of Anthropic's "how we use skills" article, I put my own `replen` skill on the operating table and graded it against the article's criteria — the highest-signal part (a Gotchas section) was completely missing, so I wrote one from real supply-chain work.

### Added — Ideas

- **`public/ideas/skill-scorecard.html`** — new Wise-Dark deep-read (learning-note register). Sections: what a skill actually is (folder + `SKILL.md` "door-sign" analogy) + the article's 9 skill categories → the 8 criteria that matter → an 8-row **scorecard** grading `replen` (door-sign/trigger words ✓, progressive disclosure via `references/cpim/` ✓, guidance-not-railroad ✓; but Gotchas ✗, memory ✗, scripts ✗) → a hands-on **Gotchas section** with five real (desensitized) supply-chain gotchas (lead-time variance > demand variance, MRP lot-sizing before quantity, the fill-rate vs. cycle-service-level pun, FEFO vs. WMS-default FIFO, the true drivers of bullwhip) + a `safety_stock.py` / append-only param-log note. Back-link to `/` at top per the standalone-HTML pattern.
- **`src/data/ideas.ts`** — new `seriesDef` **`ai-log`「AI 学习记录」**; new article **#19** (`topicSlug: tech`, `seriesSlug: ai-log`, `date: 2026.07`, `art: bars/#9fe870`).

### Changed — Ideas

- **`src/data/ideas.ts`** — so the new 专辑 doesn't launch as a lonely single, folded the clearly-AI-learning pieces into it: #16 (AI 职场跃迁) and #15 (Code with Claude 伦敦) gain `seriesSlug: ai-log`; #14 (李飞飞)、#09 (Claude Code 一周年)、#08 (write loops) move from `seriesSlug: 'ai-voices'` to `seriesSlugs: ['ai-voices', 'ai-log']` (dual-series membership). New series count = 6.
- **`src/data/ideas.ts`** — prepended `2026.07` to `archiveMonths` so the new piece's month is a live archive filter.

### Notes

- Series (专辑) mechanism itself is unchanged — this adds a new instance + retro-tags, which the owner endorsed when choosing "new 专辑, existing AI pieces auto-join" over a standalone page. Piece register is "两种混着来": this first one is a full deep-read; lighter notes will land in the same series later.
- Red lines: all supply-chain content is role/industry-level (NZ healthcare distribution planner) + generic CPIM — no company names, colleague names, or financial positions.
- Minor bump (not patch): a new 专辑 + collection re-organization is more than a plain Ideas content drop.

## [1.13.0] — 2026-06-30 · Life — four north-star tags ("why all this input")

> Reframed `/life` from "what I consume" to "what it's for". A minimal band under the cinematic hero names the four things the input serves — no manifesto, just four tags.

### Added — Life

- **`src/data/life.ts`** — new `NorthStar` interface + `northStars` array (single source of truth): Inner Peace (心安), Joy (喜悦), Love (爱), Creativity (创造), each with an accent hue drawn from the existing shelf palette.
- **`src/pages/life.astro`** — new `#why` band between the hero and "Writing the Book": a single eyebrow `// why all this input · 向内生长` over four hue-tinted pill tags (glowing accent dot + display word + CJK pairing), with a per-tag hover lift/ring + reduced-motion guard.

### Notes

- Deliberately wordless — the four pursuits frame the input modules (Reading, Reel & Radio) as means, not ends. Lime stays an accent only; the tags use the muted shelf hues. (`gloss` field retained on `NorthStar` for possible future expansion.)

## [1.12.5] — 2026-06-30 · Life shelf — Sally Rooney trilogy

> Added Sally Rooney's three millennial-relationship novels to the virtual bookshelf on `/life`, spine-out alongside the rest.

### Added — Life

- **`src/data/life.ts`** — three new `shelf` entries: *Conversations with Friends* (`#c77b8b` rose), *Normal People* (`#3f7fae` teal-blue), *Beautiful World, Where Are You* (`#cf9d5e` ochre) — spine hues echoing each book's cover. They slot onto the existing two-tier wall shelf with no layout changes.

## [1.12.4] — 2026-06-24 · NZ Managed Funds Guide — holdings + passive-vs-active explainer

> Added a collapsed `<details>` explainer under the "10%+ club" answering the natural follow-up: what do the top funds actually hold, and why does passive sit above active?

### Changed — AI Builder

- **`public/ai-builder/nz-funds.html`** — new foldable explainer in the `#top` section: (1) look-through holdings of the top 5 (VUG / VOO / ASX200 Resources / MSCI World quant / T. Rowe stock-picking) showing ①③④⑤ are the same 7 US mega-caps at different concentrations, ② is a BHP-⅓ commodity bet; (2) honest passive-vs-active explanation — fee drag + the US-mega-cap decade + SPIVA, plus the apples-to-oranges caveat (same-category, Mercer/Harbour actually beat the passive global index; resources is a cycle illusion; past≠future). Education only, not a recommendation. META → v3.5.

### Notes

- Holdings are a static ~2026-03–05 snapshot (sourced from Sorted disclosures / factsheets / underlying ETFs), not data-driven — refresh manually if the top-5 membership changes materially.

## [1.12.3] — 2026-06-24 · NZ Managed Funds Guide — strip fund/platform recommendations

> Made the guide recommendation-free (data + education only) for cleaner FMA positioning. Removed the sample-portfolios section and all named-fund / platform endorsements; kept every factual data table.

### Changed — AI Builder

- **`public/ai-builder/nz-funds.html`** — deleted the "三套配置示例" portfolios section (HTML + `PORTFOLIOS` data + `renderPortfolio` JS + nav/TOC/CTA links; mobile menu renumbered). Platforms table kept but stripped of the "适合" column + "本指南推荐主力平台" + steering lede. Fee-tier "代表：&lt;fund&gt;" examples genericised; 2-min-read and FAQ fund/allocation recommendations neutralised ("see the data + talk to a licensed FA"). publishedDate → 2026-06-24 (页面更新 now shows today). META → v3.4.

### Notes

- Kept as factual data (not recommendations): the 91-fund table, 10Y leaderboard, 10%+ club, benchmark comparison, provider-origin, tax/risk/fee/currency/methodology, #next-steps (查持牌 FA), disclaimer. Data + basis unchanged (still 2026-05-31).

## [1.12.2] — 2026-06-24 · NZ Managed Funds Guide — retitled around the "10%+ club"

> Repositioned the guide from "which fund should I buy" to the reader's real goal — **finding NZ funds that have beaten 10% over the long run**. New data-driven "10%+ 俱乐部" module + reframed hero / SEO title.

### Changed — AI Builder

- **`public/ai-builder/nz-funds.html`** — hero H1 → 「在新西兰，哪些基金长期跑过 10%？」; `<title>` / og:title reframed; subhead now states only ~1/5 of funds cleared 10% long-term (almost all global/US equity). The `#top` leaderboard became a **"10%+ 俱乐部"**: a data-driven table auto-filtering `FUNDS_DATA` for funds ≥10% on BOTH 5Y and 10Y (currently 13), sorted by 10Y, with an amber risk / past≠future caveat for FMA safety. META → v3.3.

### Notes

- Auto-updates on every future data refresh (no hardcoded list). Data + basis unchanged (still 2026-05-31).

## [1.12.1] — 2026-06-24 · NZ Managed Funds Guide — 数据刷新至 2026-05-31

> Quarterly data refresh of the NZ Managed Funds Guide (`/ai-builder/nz-funds.html`). All 91 PIE-fund returns rolled forward from 2026-04-30 to **2026-05-31** (after fees, before tax, NZD — same basis). Sourced this round from the 15 fund managers' own monthly factsheets with per-fund cross-verification (Mindful Money / Sorted Smart Investor / Morningstar as second source), run via a 28-agent research workflow.

### Changed — AI Builder

- **`public/ai-builder/nz-funds.html`** — `FUNDS_DATA` returns + fund sizes refreshed for **74 of 91** funds (33 two-source-confirmed, 41 manager-official single-source); **17 held** at the prior 2026-04-30 value (manager not yet reporting May, after-tax-only second source, or delisted). `META` → v3.2 / dataDate 2026-05-31. In-page "数据时效 / 报告日" notes, the `BENCHMARKS` array, and two prose figures (Milford 5Y, Smart US 500 5Y) updated to match.
- **`src/data/ai-builder.ts`** — nz-funds card `date` → 2026-06-24.

### Notes

- Fees / risk (1–7) / active-passive / equity-bond split unchanged — this refresh covered returns + size only.
- Working source + full changelog live in `个人理财/投资nz/` (guide v3.2).

## [1.12.0] — 2026-06-24 · Life — "Reel & Radio" 影音区 + 塔勒布 collapsed beside the shelf (live: b00198c)

> Two changes to `/life` in one batch. **(1)** New section **Reel & Radio** — a second input line alongside reading; one module, two voices: 看 · ON SCREEN (films & documentaries) and 听 · ON AIR (podcasts). Built to mirror Reading's two-tier shape so the page reads as one design language. **(2)** The standalone **塔勒布专区** is collapsed from its own full-width module into a compact **专题阅读** list panel sitting to the right of the read-books shelf — the Reading block becomes a two-column "shelf + 专题" row, tightening the page and pairing the deep-read series with the books it grew out of.

### Changed — Life

- **`src/pages/life.astro`** — the read-books shelf and the 塔勒布 series now share a two-column row (`lg:grid-cols-[minmax(0,440px)_1fr]`, stacks on mobile): the spine-out 书架 on the left, a new **专题阅读 · 塔勒布 Incerto** panel on the right. The old Module 2.5 section (featured overview card + 3-col five-book grid) is removed; its content is re-expressed compactly as an Incerto overview band (`打开总览 →`) over a 5-row list (number + 中文/EN·year + `打开 →` for live / `进行中` chip for wip). The `id="taleb"` anchor + `scroll-mt-20` move onto the panel so existing `/life#taleb` links still land.
- **`src/data/life.ts`** — `shelf` (读过的) grew from 2 to 7: removed 活出你的本来面目; added The Inner Game of Tennis, 我看见的世界 (李飞飞), 猫鱼 (陈冲), A Different Kind of Power (Jacinda Ardern), Open to Work, Team Intelligence — each a distinct spine hue. The shelf now auto-splits into two tiers.

### Added — Life

- **`src/pages/life.astro`** — new `<section id="reel-radio">` (anchor + `scroll-mt-20`) between the Taleb zone and Social. Two sub-voices under one header:
  - **看 · ON SCREEN** — featured 2:3 poster cards (reuse the `reading-card` cover-card pattern: hue placeholder, hover lift, DOC/FILM tag, tags, one-line verdict) + a horizontally-scrolling **filmstrip** of "看过的" — a roll of celluloid frames with top/bottom sprocket-hole perforations, the cinematic analog to Reading's spine-out 书架.
  - **听 · ON AIR** — square (1:1) podcast cover tiles in a 2/3/4-col grid, each tinted by its 主线, with a colour-coded taste-line legend and a small animated lime **equalizer** accent beside the header. Header stat: `N films · N shows · 326h`.
- **`src/data/life.ts`** — new `Screen`, `PodcastLine`, `Podcast` interfaces + arrays (`screen`, `podcastLines`, `podcasts`). `podcastLines` encodes the 5 taste lines from 小宇宙 326h (科技 / 加密 / 健康 / **NZ 本地** / 人文闲聊), each with a hue that flows line → tile.
  - **Podcasts are real, with cover art**: 7 shows the owner actually listens to — What's Next 科技早知道, 自习室 STUDYROOM (读书分享), CRYPTO 101, The Health Hub & Smart Money (both NewstalkZB), 一波一会 (evolve), 宁浪别野 — square covers dropped in `public/life/podcasts/` and wired via `artUrl`. (The `nz` line was relabelled from the earlier "NZ 求职" to **NZ 本地** to fit the two NewstalkZB local shows.)
  - **Films are still seed**: the ON SCREEN list (`screen`) ships as clearly-marked placeholder examples (`SEED / 占位`) drawn as hue cards — real posters / final watch-list drop in later via `posterUrl`.
- **`public/life/podcasts/`** — 7 podcast cover images added (`public/life/screen/` created for film posters, still empty).

### Notes

- **Versioning** — minor (second digit): a new section / mechanism on an existing module, per the rule set 2026-06-20 (not a plain Ideas content drop).
- **Design** — no new dependencies; reuses existing Wise-Dark tokens (`card`, `ink-*`, `lime-tint`, `tracking-tool`) and the `cover-sheen` / `reading-card` patterns. New CSS: `.filmstrip` / `.frame` (sprocket-hole roll), `.pod-card` hue ring, `.eq` equalizer — all with `prefers-reduced-motion` fallbacks.
- **Red lines** — clean: films, documentaries and podcasts are public works; hosts/directors/podcast shows referenced are public. No company, friend/colleague, or financial specifics.

---

## [1.11.7] — 2026-06-24 · Ideas #18 — Hyperliquid 深度长文(app-specific L1)

> New Ideas piece (深度长文), the deepest single-protocol study yet: a standalone long-form on **Hyperliquid** — the strongest existence-proof of cycle 4's "应用拥有整条栈" thesis. An on-chain perps exchange that turned itself into an L1, then uses ~97% of real trading fees to buy back HYPE daily. Picks up the "Hyperliquid" thread the owner chose from the previous chapter's "worth-studying" list.

### Added — Ideas

- **`public/ideas/hyperliquid.html`** — new standalone Wise-Dark deep-read (8 sections): what/why → architecture (HyperBFT ~0.07s finality + HyperCore L1-native CLOB + 3-layer liquidation HLP→insurance→ADL) → HyperEVM + the trustless glue (read precompiles + CoreWriter) → product primitives (HLP / HIP-1 dutch auction / HIP-3 builder-deployed perps / Builder Codes) → the **value flywheel** (6-step chain visual) → app-specific-L1 thesis with a dYdX v4 controlled-experiment **compare table** → risks with a **JELLY-event callout** + 5 risk cards → a **bull/bear arena** + honest verdict. New CSS components: `.arch` layer stack, `.flywheel` step chain, `.compare` table, `.arena` bull/bear grid, `.metrics` hero stats.
- **`src/data/ideas.ts`** — new article entry index `18`, topics tech/economy, `art` motif `core`, `status: 'live'`, `isNew: true`. Catalog count → 18.

### Notes

- **Versioning** — patch (third digit): a new Ideas piece (new ID), per the rule set 2026-06-20.
- **Method** — 5 dimension-research + 5 adversarial-verify + 3 synthesis agents (workflow paused mid-run when the owner ran low on tokens, then resumed from cache). Corrections applied: liquidation is **3 layers** (HLP→insurance→**ADL**), not 2; JELLY (2025-03-26) key fact is the **validator-vote delist + oracle override** (HLP ended ~+$700k); CoreWriter mainnet ~2025-07-05; share is a **volatile time series** (~70–80% mid-2025 → <20% Dec-2025 → ~32% mid-2026), not a fixed range; cumulative buyback >$2B; competitors Lighter (a16z) / Aster (CZ·YZi Labs). All market/financial figures flagged as time-sensitive snapshots.
- **Red lines** — clean: protocol mechanism + industry-thesis analysis only; explicit in-page disclaimer; no holdings, positions, employer, or colleague specifics.

---

## [1.11.6] — 2026-06-23 · Ideas #17 扩写 — 内嵌「其他值得研究的 L1」章(分层 + 七种押注 + Sui×Aptos)(live: 5fd2073)

> Second extension to the four-cycle piece (Ideas #17), per the owner's "做成第二个 idea 但内嵌进去" + "等研究都完了再统一 push" calls. Answers "ETH/Solana 之外过去两轮还有哪些 L1 值得研究,比如 Sui?" with an opinionated 4-tier ranking, a 7-bet design-space framework, and a Sui×Aptos head-to-head. Same multi-agent + adversarial-fact-check method (7 cluster-research + 7 verify + 3 synthesis agents).

### Changed — Ideas

- **`public/ideas/crypto-four-cycles.html`** — inserted a second extension chapter (after the tech-sediment chapter, before cross-cycle patterns): a **4-tier "worth-studying" ranking** (🥇 must-study: Sui/Hyperliquid/Cosmos/Celestia/Monad/BNB/Tron/Avalanche · 🥈 worth-a-look: Aptos/Sei v2/MegaETH/Injective/NEAR/Sonic/TON/Stacks · 🥉 cautionary 鬼链: Berachain/Cardano/Polkadot/Osmosis · ⚰️ faded: Algorand/Kava), a **7 new-architecture-bets** card grid (data-model-as-scaling / app-specific L1 / parallel-EVM / sovereign app-chains / distribution-first / value-capture econ / Bitcoin programmability), and a **Sui × Aptos** head-to-head table (object vs account model, deterministic vs Block-STM parallelism, zkLogin UX, traction). Two new CSS components: `.tiers` list + `.duel` table.
- **`src/data/ideas.ts`** — extended index `17` lede again to cover the other-L1s chapter. No new catalog entry (count stays 17).

### Notes

- **Versioning** — patch: a second content drop into the existing Ideas #17 (not a new ID). Both 1.11.5 and 1.11.6 ship in one push, per the owner's request to hold until the research was done.
- **Method** — facts adversarially checked + refreshed to 2026: CME **SUI** futures live 2026/05 and SUI spot/staking ETFs listed 2025/12–2026/02 (no longer "discussion"); Monad mainnet 2025/11; Berachain collapsed to ~8% of peak TVL ("鬼链"); Justin Sun / SEC settled 2026/03; Osmosis→Hub merge proposal rejected 2026/04. Verdicts (must-study / cautionary / faded) are opinionated calls, flagged as such.
- **Red lines** — clean: protocol/architecture analysis only; no holdings, positions, employer, or colleague specifics.

---

## [1.11.5] — 2026-06-23 · Ideas #17 扩写 — 内嵌「技术沉淀」章(ETH vs Solana + Base 专题)(live: 5fd2073)

> Extended the existing four-cycle piece (Ideas #17) rather than spinning up a new entry, per the owner's call ("做成第二个 idea,但内嵌到四周期里面"). Added a full **技术沉淀 (tech sediment)** chapter that zooms from "which L1 dominated" into "what durable tech each ecosystem precipitated": the modular-vs-monolithic fork, a 7-layer stack comparison (Ethereum vs Solana), each stack's surviving primitives, a focused **Base** case study (the L2 the owner named), and the convergence / where-each-wins close. Same multi-agent + adversarial-fact-check method as the base piece.

### Changed — Ideas

- **`public/ideas/crypto-four-cycles.html`** — inserted a new chapter between the L1-dominance section and the cross-cycle patterns. New sections: ecosystem fork (模块化/scale-out vs 单体/scale-up), a **stack-by-layer comparison table** (执行/DA/共识·质押/MEV/账户抽象/应用基建/分发·消费 × ETH vs SOL), Ethereum's sedimented stack (Rollup/OP Stack, EIP-4844 blobs, EigenLayer restaking, ERC-4337, DeFi legos + RWA), a **Base case study** (OP Stack lineage, no token, Coinbase distribution; corrected: leads on **activity**, not absolute TVL — Arbitrum One still #1), Solana's sedimented stack (PoH/Sealevel + Firedancer, de-FTX'd DeFi via Jupiter/Jito, State Compression, pump.fun, DePIN), and a convergence + moats close. Two new CSS components: `.fork` cards and the `.stack` table (both responsive, ETH=sky / SOL=green accents).
- **`src/data/ideas.ts`** — extended the index `17` lede to describe the embedded tech-sediment chapter + Base deep-dive. No new catalog entry (count stays 17).

### Notes

- **Versioning** — patch (third digit): a content drop into an existing Ideas piece, per the rule set 2026-06-20 (not a new ID, not an IA change).
- **Method** — sediment content from a second multi-agent workflow (8 per-layer research agents + 8 adversarial fact-check agents + 3 synthesis agents). Corrections applied: Base leads **activity/daily-tx**, not absolute TVL (Arbitrum One ~$14–17B still #1); full Firedancer first produced blocks **2025/10** (not 2024); Orca Whirlpools / Raydium CLMM are **2022** (C3), not C4; Token-2022 confidential transfer temporarily disabled 2025/06.
- **Red lines** — clean: protocol/engineering history only; no holdings, positions, employer, or colleague specifics.

---

## [1.11.4] — 2026-06-23 · Ideas #17 — 四轮加密周期复盘(主导 Layer 1 主线)(live: 7391812)

> New Ideas piece (图解深读): a four-cycle retrospective of crypto (2013→now) organized around one spine — **which Layer 1 dominated each cycle**. The arc: sole rule (Bitcoin, before "L1" was even a concept) → one superpower (Ethereum, via EVM/ERC-20 + ICO, dragging BTC.D from ~87% to ~31%) → the L1 wars (ETH still dominant in DeFi/NFT but the gas-fee crisis spawns BSC/Solana/Terra/Avalanche) → twin poles + anchor return (Bitcoin re-anchors via spot ETF to ~65% dominance; Ethereum gets vampired by its own L2s; Solana revives from the FTX rubble on memecoins and overtakes ETH mainnet on several on-chain metrics). Every cycle also carries its narrative, revolutionary primitive, and signature blow-up; the piece closes on seven cross-cycle patterns + a disciplined-investor framing.

### Added — Ideas

- **`public/ideas/crypto-four-cycles.html`** — Wise-Dark deep-read built off the `two-simulations.html` template. Sections: the 7-beat cycle rhythm (减半→流动性→新原语→叙事→狂热→暴雷→地基) + the "narrative climbs the stack" thesis; a **four-cycle overview grid** with each card's **dominant L1 highlighted** (BTC peak + BTC.D swing + 主导/挑战/原语/叙事/暴雷); four per-cycle deep sections each with a dedicated 主导 Layer 1 callout; an **L1-dominance timeline table** (cycle → dominant L1 → challenger field → BTC.D) + 6 key-shift moments; seven cross-cycle patterns; five investor lessons + a disclaimer.
- **`src/data/ideas.ts`** — new article entry index `17`, topics economy/tech, `art` motif `orbit` (accent `#ffd11a`), `status: 'live'`, `isNew: true`. Catalog counts/timeline derive automatically.

### Notes

- **Versioning** — patch (third digit): a plain new Ideas piece, per the rule set 2026-06-20.
- **Method** — researched + fact-checked via a multi-agent workflow (4 per-cycle research agents + 4 adversarial fact-check agents + 2 synthesis agents). Corrections applied to the draft (e.g. 2013 BTC.D is ~85–95% not "常年 95%+"; 2017 early dominance ~87% not ~95%; PBoC notice dated 2013/12/03; GENIUS Act is already signed law as of 2025/7/18, not a prediction; IBIT no longer the largest single BTC holder after Strategy overtook in 2026/4). 2025+ prices flagged as report-口径, verify against exchange data.
- **Red lines** — clean: general market history + category-level investment philosophy only. **No personal holdings, positions, or financial figures** (explicit disclaimer in-page); no employer or colleague names.

---

## [1.11.3] — 2026-06-22 · Ideas #15 — Code with Claude 伦敦 2026 现场笔记(总览 + 6 章系列)(live: cffc4af)

> New Ideas piece (现场笔记), shipped as a **multi-page series**: I pulled the full transcript of every talk in Anthropic's *Code with Claude · London 2026* playlist (24 sessions), read them all, and distilled them. The hub page is the overview (9 cross-talk threads + key numbers); 6 chapter sub-pages go a layer deeper (per-talk thesis / points / numbers / quotes / so-what). The spine is the keynote line — *capability is already here; the gap is how fast we put it to work.*

### Added — Ideas

- **`public/ideas/code-with-claude-london-2026.html`** — the **hub / 总览** (Wise-Dark video-deep-read template). Hero + 17× stat banner + embedded full playlist + **9 cross-talk threads** + 8 key numbers (SWE-bench 60→87%, Spotify 2.5M auto-merged PRs, Hurigen ~173 PR/day @85% council, Legora $1M→$100M ARR, Lovable 200k apps/day…) + a **6-chapter nav** + 3 takeaways + CTA.
- **6 chapter sub-pages** — `public/ideas/ccl-london-2026-{vision,craft,claude-code,agents-infra,clouds,in-the-wild}.html`. Each is a deeper deep-read of its group with prev/next/hub navigation. Grouping: ① 愿景与组织 ② 工艺(prompt·模型·思考)③ Claude Code 进阶 ④ Managed Agents 与基础设施 ⑤ 云平台 ⑥ 行业落地. Kept **off** the flat `/ideas` list by design (navigated from the hub) so the catalog stays clean — only the hub is registered.
- **`src/data/ideas.ts`** — new article entry index `15` (the hub), topics tech/economy, `art` motif `constellation`, `status: 'live'`, `isNew: true`.

### Notes

- **Versioning** — patch (third digit): a new Ideas piece, per the rule set 2026-06-20. (A multi-page series, but one catalog entry + a content drop → still patch.)
- **Transcripts** — 12 talks via NotebookLM; the other 12 (which NotebookLM hard-rejected at the video-ID level) via local faster-whisper. Auto-transcription, so minor errors exist; summaries grounded in what was actually said.
- **Red lines** — clean: public conference talks by Anthropic + partner/customer companies (public figures and companies presenting publicly); no employer, colleague, or financial specifics of the owner.

---

## [1.11.2] — 2026-06-22 · Ideas #16 — 把两本书熔成一个职场跃迁 skill (live: cffc4af)

> New Ideas piece (Artifact / 操作手册): I read both reading-club books on working in the age of AI — *Open to Work* (LinkedIn CEO Ryan Roslansky) and *Agents, Robots, and Us* (McKinsey) — and fused them into a runnable coach (Navi) that walks an AI-anxious professional up a 6-rung literacy ladder. Shipped two ways: a **Claude Skill** (open-sourced at github.com/GimboPan/ai-native-professional) and a **ChatGPT Custom GPT** for people who don't use Claude. This page is its operating manual.

### Added — Ideas

- **`public/ideas/ai-native-professional.html`** — Wise-Dark deep-read built off the `agency-is-the-key.html` template. Sections: the AI-anxiety reframe (automation comes for tasks not titles; radiologist employment still grew ~3%/yr as AI arrived; the real risk is "someone using AI"), what each book contributes (McKinsey = why/what: 72% partnership zone, AI fluency +6.8x, orchestrator-not-executor; *Open to Work* = how/who: the 5Cs, three-bucket task sort, climbing-wall careers, anxiety→agency→aspiration), the 6-rung ladder (L0 Anxious Avoider → L5 AI-Native Professional) as the spine, the three-bucket + 5C tools, and a builder's note. CTA + skill section now offer **both entry points**: a ChatGPT Custom GPT (zero-install, for non-Claude users) and the open-source GitHub skill.
- **`src/data/ideas.ts`** — new article entry index `16`, topics tech/economy/society, `art` motif `ascent`, `status: 'live'`, `isNew: true`. Catalog counts/timeline derive automatically.

### Notes

- **Versioning** — patch (third digit): a plain new Ideas piece, per the rule set 2026-06-20.
- **Red lines** — clean: content is about two published books + an open-source skill; no employer, colleague, or financial specifics. *Open to Work* itself already lives on the site as Ideas #04 (visual guide) — this piece is the distinct skill/artifact angle, not a duplicate summary.

---

## [1.11.1] — 2026-06-20 · Homepage FEATURED strap → Metis (live: d7d1d54)

> Repointed the homepage dispatch strap (the FEATURED top-line) from Tennis to **Metis**, the supply-pilot build.

### Changed — Homepage

- **`src/pages/index.astro`** — dispatch strap now links `/ai-builder/metis.html`; meta `// AI BUILDER · METIS · SUPPLY PILOT`, title "Metis flies the routine. I keep command.", subtitle frames it as a synthetic-data supply pilot with ~85% touchless rate (mirrors the privacy-hardened `ai-builder.ts` copy).

### Notes

- **Versioning** — patch (third digit): an editorial repoint of one strap, not a module/feature change.
- **Red lines** — clean: synthetic-data framing kept; no employer, vendor, or financials.

---

## [1.11.0] — 2026-06-20 · Homepage refresh — feed + Ideas card caught up (live: de194d9)

> **Brought the homepage back in sync with the content that's actually shipped.** The activity feed had drifted to May and the Ideas module card still claimed "six pieces". Both now reflect reality (14 Ideas pieces, the latest being Agency is the Key).

### Changed — Homepage

- **`src/data/feed.ts`** — added three June `IDEAS` rows at the top (Agency is the Key + the new 「AI 前沿人物」专辑, 认知四象限, 极简创业操作手册); bumped `feedUpdated` `2026.05` → `2026.06`. "Recent across the universe" now leads with what just landed (11 updates).
- **`src/pages/index.astro`** — Ideas `ModuleCard` subtitle `Six pieces live` → `Fourteen pieces live`; **Latest** list refreshed from the stale `06/05/04` to the current top three `14 Agency 是钥匙 · 李飞飞 × MasterClass / 13 认知四象限 / 12 极简创业操作手册`.

### Notes

- **Versioning** — minor bump (second digit) because this touches the **homepage module**, per the rule refined 2026-06-20 (a plain new `/ideas` piece would be a patch; a module change is a minor).
- The dispatch strap (FEATURED pin) is left pointing at Tennis by deliberate editorial choice — repoint on request.
- **Red lines** — clean: no company/person/financials added.

---

## [1.10.0] — 2026-06-20 · Ideas #14 — Agency is the Key + new 「AI 前沿人物」series (live: 7894fab)

> **A new `/ideas` video deep-read** built from the full transcript of a Fei-Fei Li × David Rogier conversation (thesis Gimbo anchored on: what decides whether you're sidelined or amplified by a cognitively powerful technology is **agency**, not your degree or title — "entrepreneurial is a synonym to agency"), **plus a new 专辑 that buckets the site's top-AI-figure talks into one filterable thread.**

### Added — Ideas

- **`public/ideas/agency-is-the-key.html`** — Wise-Dark video-deep-read (same template as `write-loops-not-code.html`): backbar → hero (`Agency, 就是那把钥匙`) → `$80k → $100` education stat banner → embedded YouTube (`subu-xHrp1w`) → hook pull-quote → polarization compare (utopia/doom vs the missing nuanced middle) → four big ideas (CEO's tool stack is self-built apps · don't vibe-code your dashboard · the barbell of specialists + high-agency generalists · "intelligence cost → zero" is reductive) → key-numbers strip → **spatial intelligence** 4-up (understand · reason · generate · interact, World Labs on 3D) → how-to-train-agency (reject praise-seeking) → 3 takeaways → CTA. Includes one first-person builder annotation tying David's self-built tool stack back to Gimbo's AI fleet.
- **`src/data/ideas.ts`** — registered as index `14`, `status: 'live'`, `isNew: true`, filed **Tech + Economy + Society** (`topicSlug: 'tech'`, `topics: ['tech','economy','society']`), `art: { motif: 'ascent', accent: '#9fe870', seed: 14 }`.
- **New 专辑 `ai-voices` — 「AI 前沿人物 · Voices in AI」**: a curated series bucketing the site's top-AI-figure conversation deep-reads — scholar / creator / entrepreneur each a lens: Fei-Fei Li (#14), Boris Cherny (#08 write-loops, #09 claude-code-one-year), Sahil Lavingia (#07 few-person-company). Renders as a clickable filter card in the **Series · 专辑** rail; count derives from membership (**4**).

### Changed — Ideas IA

- **Multi-series membership** — extended the `/ideas` data model so a piece can belong to more than one 专辑. Added optional `seriesSlugs: string[]` to `IdeaArticle` (when present it supersedes `seriesSlug`, mirroring how `topics` supersedes `topicSlug`); `ideas.astro` now derives series membership via a `seriesOf()` helper, emits a space-joined `data-series`, and the client filter matches on `.includes()`. `#07 few-person-company` now sits in **both** 「公司的形态」and 「AI 前沿人物」(`seriesSlugs: ['company-form','ai-voices']`) — 公司的形态 count unchanged at 3.

### Notes

- **Pipeline** — transcript was supplied directly (no NotebookLM step needed this time); page built to the established `/ideas` video-deep-read spec.
- **Red lines** — clean: speakers are public figures (Fei-Fei Li, David Rogier, Boris Cherny, Sahil Lavingia); companies named are public (World Labs, MasterClass, Anthropic, Gumroad), none Gimbo's employer/client; no financials.

---

## [1.9.1] — 2026-06-20 · Metis: privacy-hardening copy pass (live: 3497f76)

> **A light hardening pass on the live Metis page** to remove any phrasing that could invite an employer-inference, before any outbound push. No structural or design change — copy only.

### Changed — AI Builder

- **`public/ai-builder/metis.html`** + **`ai-builder.ts`** — "a real distributor's scale" → "the scale of a typical mid-size distributor (all synthetic)" in the hero lead, meta description, and catalog summary; honest-footer line "how I think about **the day job**" → "how I think about **supply-chain planning**". The synthetic-data framing is now the dominant read; nothing points at a specific employer.

### Notes

- **Why** — the page stays live as a generic, synthetic-data personal learning project, but the LinkedIn post + DM outreach are **held** (off-site broadcast into the professional network carried two risks the owner flagged: employer-data-leak *appearance*, and a clone-perception risk vs. an external product the build's lineage is deliberately not named). Passive page discovery is low-risk; active broadcast is paused until further notice.
- **Red lines** — unchanged and clean: no company, vendor, or person named; no financials.

## [1.9.0] — 2026-06-19 · AI Builder: Metis — your supply pilot in the AI era (v1.0) (live: 7bd6355)

> **A new Supply Chain piece goes live in AI Builder.** **Metis — *your supply pilot in the AI era*** — a v1.0 framework, built solo and run locally, at a real distributor's scale (10 vendors, 2,000 SKUs, ~200 PO lines a week). A 2-minute scrollable walk-through. Each PO **line** opens with an **MRP qty** — derived as the gap between the line's *target* level (its stock policy: Min-Max ceiling, forecast coverage, or build order) and *on-hand*, net of on-order — then walks three yes/no checkpoints: **ordered? → vendor confirmed? → warehouse received?** (with reschedule + chase self-loops). Metis auto-clears the zero-judgement lines via an **L2 autonomy tier** and escalates only the exceptions to a planner queue — framed with an autopilot metaphor: *Metis flies the routine legs; you stay pilot-in-command*. It runs against a deterministic **world simulator** (fast-forward +1 day / +1 week, seeded and reproducible) so the one number that matters can be measured: **how high the touchless rate climbs (~85%)**. Framed honestly as v1.0 — the skeleton (state machine, autonomy split, loop, simulator) is in place; the fine grain (richer per-vendor behaviour, more exception classes, real-mail ingestion) is not, yet. Standalone Wise-Dark-Dashboard HTML with custom SVG diagrams (closed loop, the four-checkpoint PO-line lifecycle) and a touchless climb-to-plateau chart. Bilingual EN/中文.

### Added — AI Builder

- **`public/ai-builder/metis.html`** — the standalone demo page: hero (lime **Metis.** wordmark + *Your supply pilot in the AI era* tagline, eyebrow tagged `v1.0 framework`) + 4-stat band (one lime hero tile), the closed-loop SVG, the four-stage PO-line lifecycle SVG (**MRP qty (target − on-hand) → ordered → confirmed → received** with Y/N gates), the auto-vs-human autonomy split (autopilot framing), a touchless-rate trend chart + KPI rail, a six-views "what's inside" grid, and an honest "what this is / isn't (it's v1.0)" footer. Includes the required `← Gimbo's Universe` back link and the site-standard bilingual toggle.
- **`ai-builder.ts`** — new `supply-chain` catalog entry `metis`, title `Metis — Your Supply Pilot (v1.0)`, `status: live`, dated 2026-06-19. Becomes the newest Supply Chain item (ahead of `org-evolution`).

### Notes

- **Naming** — the system is named **Metis** (Greek goddess of wise counsel / planning), tagline *your supply pilot in the AI era*; the earlier working names (Supply Chain Action Center → Auto Supply Agent) and the source build's external-product lineage are deliberately not surfaced. "Buyer" language removed throughout — the human is a "planner / pilot-in-command".
- **v1.0 review pass** — reconciled one logic clash: a proactive **standard reorder** (auto) vs a vendor change that **pushes net availability below the reorder point** (escalate) are now worded distinctly; tied the two diagrams together (Replenish node now reads *gap → MRP qty*).
- **Red lines clean** — a **research simulation on fully synthetic data**: ten fictional vendors, two thousand generated SKUs, a deterministic simulator. No real company, vendor, or person named; no financial positions. "A real distributor's scale" stays role/scale-level; the reorder threshold is described as "the routine reorder threshold," not a figure.
- **Outbound intent** — this is the publishable, abstracted one of the supply-chain sims, framed as a door-opener artifact for AU/NZ supply-chain × AI conversations.

## [1.8.0] — 2026-06-18 · Fitness: Nutrition card goes live — 《如何健康地吃》27 页幻灯片散文 (live: fc07eb4)

> **The Nutrition module flips from `planned` placeholder to `live`.** A book-club talk I gave in NZ — *Mastering the art of healthy eating* — turned into a standalone 27-slide visual essay. Three lenses on food, each a colour-coded chapter: **营养科学** (dietary guidelines, carbs/protein/fat, and a personal CGM self-experiment where sushi spiked my blood sugar harder than pizza), **审美与愉悦** (breakfast rituals, plating, food docs, 江振诚's "料理不是创造，是转译"), and **归属感** (new-homeland cooking, the family banquet, food-as-identity). Built in the deck's own warm-magazine style (Georgia serif, parchment + terracotta/sage/brown chapter colours) rather than site-default Wise-Dark — kept unified with the original slides. Each slide carries a one-line 导读; sticky chapter nav up top.

### Added — Fitness

- **`public/fitness/how-to-eat.html`** — the standalone deep-read: hero mirroring the deck cover, three-pillar intro, all 27 slide renders grouped into 5 sections (开场 / Ch.1–3 / 收尾), each content slide with a serif title + one-sentence intro, closing 金句. Includes the required `← Gimbo's Universe` back link.
- **`public/fitness/how-to-eat/slides/p-01…p-27.jpg`** — the 27 v3 slide renders (referenced via absolute `/fitness/how-to-eat/slides/` paths).

### Changed — Fitness

- **`src/pages/fitness.astro`** — Nutrition card (02) `status` `planned` → `live`, `href` → `/fitness/how-to-eat.html`, refreshed subtitle/tools to describe the talk. (The `/fitness/nutrition` dynamic module with its three planned articles stays in `fitness.ts` as future scaffolding, just no longer the card's destination.)

### Notes

- **Red lines clean** — no company names, no friend/colleague names, no financial positions. "Supply planner in NZ" stays role-level; "Gimbo" is the user's own handle. Chefs/authors named (江振诚, 蔡澜, Michael Pollan, 迈克·罗朗) are public figures.
- **Design divergence is intentional** — warm-editorial to stay unified with the source deck, like the cognition-four-quadrants piece; not a candidate for Wise-Dark restyle unless asked.

## [1.7.0] — 2026-06-16 · Ideas: 认知四象限 · 自我觉察方法论的图解深读 (live: dcbb16e)

> **A new Ideas deep-read.** A standalone visual essay on the four-quadrant cognition model (known knowns → unknown unknowns), reframed as an actionable self-awareness method rather than a Rumsfeld punchline. Two axes (am-I-aware? × do-I-have-it?), a "flashlight in a dark room" intro analogy, the real lineage (1955 Johari Window → 2002 Rumsfeld's three quadrants → Žižek completing the fourth), then three applications each with its own framework diagram: job-hunting (the résumé-as-mirror, why Chinese job-seekers should seek a *different-refraction* Kiwi/local Career Coach — your Q4 is their Q1), investing (the trap of mistaking Q3 "I think I understand" for Q1 "I really do"; black swans you survive structurally, not predict), and interpersonal (most misunderstandings = "I don't know that the other person doesn't know"). Deepened per the user's "讲给别人听" bar: the two faces of Q3 (buried talent vs. willful self-deception), a "learning to drive" four-stage ladder showing quadrants *flow* (④→②→①→③), and a closing note of recursive humility (the map itself has blind spots). **Built in Claude warm-editorial (Georgia/宋体 serif, parchment + terracotta), not the site-default Wise-Dark — a deliberate per-piece choice the user iterated on.**

### Added — Ideas

- **`public/ideas/cognition-four-quadrants.html`** — the standalone deep-read. Claude warm-editorial design system; a centerpiece 2×2 matrix (lightness darkening toward Q4), an origin timeline, a left/right "self-reflection vs. needs-a-mirror" split, two-faces-of-Q3 cards, three per-application mini-matrices + misalignment/flow diagrams, a "象限会流动" driving ladder, and a one-tool-per-quadrant cheat-sheet. Includes the required `← Gimbo's Universe` back link.
- **`ideas.ts` index-13 catalog entry** — topic 文化/社会 (`culture` + `society`), `rings` thumbnail in terracotta `#c96442`, `isNew`.

### Notes

- **Red lines clean** — no company names, no friend/colleague names, no specific financial positions. "Kiwi" = New Zealand local (clarified by the user), not a person or company. The investing section stays category-level (risk types, black-swan structure), no holdings.
- **Design divergence is intentional** — most recent Ideas pieces are Wise-Dark; this one is Claude warm-editorial because the user explicitly asked for and iterated on that look. Not a candidate for a later Wise-Dark restyle unless the user asks.

---

## [1.6.0] — 2026-06-15 · Ideas: 作者简介 + 《DOGE 的日子》折叠进极简创业手册

> **An author-intro + folded translation, merged into an existing page (not a new article).** Added a visible **「附录 · 关于作者 Sahil Lavingia」** section to the minimalist playbook, and folded the full Chinese translation of his first-person essay *DOGE Days* (his 55 days as a $0-salary engineer at DOGE inside the VA, Mar–May 2025) into a collapsible `<details>` index right below it. Per the user's call: don't spin it off as its own piece — keep it inside the 极简创业 page, as a collapsed index entry. Restyled from the original Claude-editorial draft to Wise-Dark to match the playbook.

### Added — Ideas (in `minimalist-entrepreneur-playbook.html`)

- **「附录 · 关于作者」** — a visible prose intro to Sahil (Gumroad at 19 → near-failure 2015 → 《小而美》 → 10 open-sourced skills → MIT-open-sourced company/Antiwork → DOGE), with author-fact chips.
- **Folded full translation of《DOGE Days》** — a `<details>` collapsible (默认折叠, "点击展开全文") containing the faithful day-by-day translation (Day 0→55: blank employee/contractor box → $0 "Senior Advisor" → LLM script over 90k contracts → 1944 Veterans' Preference Act RIF rules → DOGE as agency 'fall guy' → asking Elon to open-source his code → abrupt access revocation → "也许，下次吧"), with EO block-quotes, a "我到底做成了什么" panel, the @DOGE tweet, and a 译者按 flagging the politics as the author's own.

### Removed

- **`public/ideas/sahil-doge-days.html`** — the briefly-shipped standalone Claude-editorial page (and its `ideas.ts` index-13 catalog entry) was removed; the content now lives folded inside the playbook instead.

### Notes

- **Red lines clean** — Sahil and the named officials (Collins, Engelbaum, Syrek, Worthington, Musk, Davis) are public figures in public roles in a translated public essay; no user-personal names, employers, or financial figures involved.

---

## [1.5.1] — 2026-06-15 · Ideas: 极简创业手册加「这套方法从哪来」边栏

> **Small content add.** Sahil Lavingia open-sourced Gumroad's full production source under MIT (`github.com/antiwork/gumroad`). Added an amber sidebar to the minimalist playbook closing the origin loop: a near-failed e-commerce startup → forced the "small & beautiful" way of living → encoded into 10 skills → now the whole company open-sourced. Shows he lives his own "Dare to Be Open" value.

### Added — Ideas

- **「边栏 · 这套方法从哪来」** in `minimalist-entrepreneur-playbook.html` — a 4-node loop diagram (Gumroad 差点失败 → 《小而美》→ 10 个 skill → antiwork/gumroad 开源) with a dashed loop-back arrow "同一个人 · 把『少做·盈利·透明』活出来", plus a note that Gumroad's full source is now MIT-licensed and Antiwork holds public shareholder meetings. Ties the article's Gumroad value #4 (*Dare to Be Open*) to the real-world act. Hero title overlap from earlier also fixed in this window (line-height 0.98 + controlled CJK line breaks).

---

## [1.5.0] — 2026-06-14 · Ideas: 极简创业操作手册 (把一本书拆成 10 个 skill)

> **A content session.** Synthesizes my 10 minimalist-entrepreneur advisor skills (an encoding of Sahil Lavingia's *The Minimalist Entrepreneur* into invokable Claude Code skills) into one operational deep-read. The hook is the meta-layer: I didn't just take notes on a book — I turned it into a 10-skill advisory fleet, and this piece chains those skills into a single 0→profit journey. Wise-Dark (site default; matches the same-author `few-person-company`). Joins the **公司的形态** series as its "how-to / practice" anchor.

### Added — Ideas

- **极简创业操作手册** (`/ideas/minimalist-entrepreneur-playbook.html`, index 12) — walks the full arc in 5 acts + 5 inline-SVG diagrams: ① 找方向 (find-community + validate-idea, green/red-flag panels) · ② 做出来 (processize→mvp→pricing; the 三阶段「魔法纸」diagram, 4 build-question grid, the financial-independence equation $10×200=$2k/mo) · ③ 卖出去 (first-customers concentric-circles diagram, marketing funnel + 3 content levels) · ④ 活下去 (grow-sustainably: profit/default-alive, 先用机器人再用人; company-values: Gumroad's 4) · ⑤ 持续校准 (minimalist-review 8-question decision table). Opens with a `/skill` chip row exposing the 10 real skills; ends with a 三点「我的批注」box tying it to the website itself as a minimalist-business practice. Filed Economy + Tech.

### Changed — Ideas

- **Series 公司的形态 now holds 3 pieces** — added `seriesSlug: 'company-form'` to index 12. Mutual cross-links: the new piece links to both `few-person-company` (same author, "how many people") and `company-300-year-experiment` ("the 800-year frame"); reads as the practice/how-to anchor of the trio.
- **Source attribution corrected** — the 10 skills are Sahil Lavingia's *own* official open-source release, not my own splitting of the book. Fleet callout + footer + list lede now credit **github.com/slavingia/skills** with a link, and phrasing changed from "我把这本书拆成了…" to "作者亲手开源…我装进 fleet". (Provenance confirmed: downloaded 2026-04-04; repo identified by skill-name fingerprint since the machine recorded no source URL.)

---

## [1.4.0] — 2026-06-14 · Ideas: 「公司是 300 年的临时实验」图解深读 (Claude-editorial)

> **A content session.** Turns a 小红书 essay by independent developer 花叔 — *「公司」作为人类默认组织形态到底存在多久?* (his answer: ~300 years) — into an original 图解深读 reframed in my own voice. First Ideas piece deliberately rendered in the **Claude (Anthropic) editorial** design system (warm parchment, Noto Serif SC headlines, terracotta accent, ring shadows, light/dark chapter alternation) rather than the site-default Wise-Dark — the content (economic history + Coase + AI) suits the literary treatment.

### Added — Ideas

- **公司可能是一个 300 年的临时实验** (`/ideas/company-300-year-experiment.html`, index 11) — a retelling + 8 hand-built inline-SVG logic diagrams walking the argument: 三段史时间轴 (行会 500y → 公司 300y → 新常态) · 匠师嵌在行会·教会·家族的密网里 · 工业化抬高交易成本的三关 (规模·资本·信任) → 公司作为重造长期信任的容器 · 科斯 1937 那把**双向**的尺子 (公司边界 = 内部协调成本 = 市场交易成本) · 把尺子反过来用 (AI 砍交易成本 → 规模沿曲线下滑,被「承诺」地板拦在 3–10 人) · 18 世纪匠师 vs 21 世纪独立开发者结构对照 (中间的公司缺席) · 旧词汇 → 身份真空 · 什么变小 vs 什么仍合理. Source credited to 花叔 (灵感来源), framed as my reading; ends with a 三点「我的批注」box. Filed Economy + Tech (cross-cutting `topics`).

- **New Series (专辑): 公司的形态 / The Shape of the Company** — second series added to `seriesDefs`. Groups the new piece with **不是一人公司,是几个人的公司** (`few-person-company.html`, index 07) via `seriesSlug: 'company-form'` on both. The two are the same question from opposite ends: "is the one-person company real (→ a few people)" and "is the company itself only a 300-year experiment (→ converging to 3–10)". Shows as its own card under Topics on `/ideas`; counts derive automatically.
- **Mutual cross-links** — `company-300-year-experiment.html` now has a "专辑 · 公司的形态" related card pointing to `few-person-company.html`; `few-person-company.html` gains a matching "专辑 · 公司的形态" block (Wise-Dark inline styles) pointing back. Each piece links to the other.

### Notes

- **Design-system exception, on purpose** — the site standard is Wise-Dark and all prior `/ideas` deep-reads use it; this one uses Claude-editorial at the user's explicit request. The /ideas list thumbnail still renders in the Wise-Dark list style (`art.motif: 'spiral'`, accent `#ffd11a`) so the catalog stays visually coherent.
- **Three red lines clean** — no company names (花叔 is a public independent developer; Anthropic/Midjourney/Ford etc. are public companies referenced, not the user's employers/clients), no private friend/colleague names, no personal financial figures.

---

## [1.3.0] — 2026-06-13 · Life gets a cinematic video hero (live: f705132)

> **A one-feature design session.** Sparked by a motion-design reference, the Life hero moves from a static AI painting to a code-driven **cinematic video hero** — full-bleed background video, bottom-only frosted blur, liquid-glass buttons, staggered entrance. The reference clip (two monoliths with sunset light through the gap, a path leading toward it) reads as *a threshold / the long view*, which is why it landed on Life rather than the AI Builder page it was first prototyped on. Built, previewed, and shipped to gimbo.co.nz.

### Added — Life

- **`<CinematicHero>` component** (`src/components/CinematicHero.astro`) — a video-backed hero ported from a streaming-hero reference prompt and adapted to this Astro site: no duplicate navbar (the sticky `<Nav>` already routes), an in-page tall hero (`min-h-[88vh]`) instead of a full-viewport takeover so the page still scrolls, and inline Lucide SVGs (no React). Mechanics kept faithful — full-bleed `<video>` (autoplay/muted/loop/playsinline), a **bottom-only frosted blur** over it (`mask: linear-gradient(to top, black 0%, transparent 45%)`, blur only, no dark gradient), liquid-glass buttons, and a staggered `blurFadeUp` entrance (meta 300ms → title 400 → copy 500 → CTAs 600/700 → scroll cue 900).
- **Life-semantic copy** — title **"Step Through. The Long View."** (keeps the reference's "Step Through" against the door-of-light frame), meta row *The slow lane · Ten years, nine chapters · Aotearoa*, lime primary CTA **Read the book** → `/life/book`, glass CTA + bobbing scroll cue → new `#more` anchor on the Writing-the-Book section.
- **Lime primary CTA** — the one departure from the faithful black/white liquid-glass palette, so the hero doesn't read as a generic template.

### Added — shared

- **Reusable motion utilities in `globals.css`** — `.liquid-glass` (near-transparent frosted glass with a `mask-composite` edge-highlight `::before`), `@keyframes blurFadeUp` + `.animate-blur-fade-up`, `.cine-bottom-blur`, and `.cine-bob`. All disabled under `prefers-reduced-motion` (entrance shows instantly; the video holds its first frame via a small inline script). Any page can get the same cinematic hero by reusing `<CinematicHero>`.

### Changed — Life

- **Self-hosted media, no external dependency** — background video `public/landing/life-cine.mp4` (9.4MB) and **poster `life-cine-poster.jpg` (a still frame extracted from the video)**. The poster being a video frame makes the poster→video hand-off seamless — an earlier build flashed the old `life-hero` skyline poster before the video loaded; that's gone.

### Notes

- **AI Builder hero unchanged** — the cinematic treatment was first prototyped there, then reverted once we agreed the clip had no semantic tie to AI building. `work-hero` static hero is exactly as before.

---

## [1.2.0] — 2026-06-12 · Supply chain thread lands: retro essay, Series, bilingual org diagrams

> **A content + one-feature session.** The two-week supply-chain-agent arc (5.30 concept exploration → 6.11 operational sims → upcoming real-work pilot) gets written up as an original Ideas retro; Ideas gains a reusable **Series (专辑)** mechanism; and AI Builder's supply chain stream gets a bilingual animated diagram page comparing agent-run vs AI-native org models.

### Added — Ideas

- **两次模拟,一条火线 · 复盘** (`/ideas/two-simulations.html`, index 10) — first-person retro of the two simulations (telescope: 5.30 "what is a company"; wrench: 6.11 miniature model + Glacis-style Action Center + mock-D365 scenarios, 27/27 assertions) and what was actually being asked: *where does my expertise stay valuable once cognition is free*. Ends on the real-work pilot design (shadow → assisted → whitelist) and the hook "下一篇是六周后的那张数据表". Filed Tech + Economy.
- **Series (专辑) mechanism** — `seriesDefs` + optional `seriesSlug` in `src/data/ideas.ts`; sidebar list under Topics (same button style, derived counts, tooltip description, AND-combining filter). First series: **供应链 AI Agent** (#05 + #10). Adding a future series (e.g. AI 发展观察) is one def + one line per article.

### Added — AI Builder

- **Agent-Run vs AI-Native · org evolution diagrams** (`/ai-builder/org-evolution.html`, supply-chain category, featured by date) — two SMIL-animated SVG flow diagrams: Mode A relay pipeline (dept agents, flows pass the baton, humans as PO/payment gates) vs Mode B force field (one pulsing core optimizer, edge agents by interface, flows solved jointly, humans at the two ends), plus a 7-dimension comparison table and a closing note framing A→B as one evolutionary path (cross-linked to Ideas #05/#10).
- **Bilingual EN/中文** — default English; sticky backbar carries a 中文版/English toggle (62 paired attribute labels + 30 paired rich-text blocks, `?lang=zh` deep link, localStorage memory, `<html lang>` + title swap). Copy rigor pass: hedged extrapolations ("can turn negative", "extrapolated end state"), removed spurious specificity (45-day terms), pilot described as *starting*, EN grammar fixes.

---

## [1.1.1] — 2026-06-10 · Mobile heroes fixed (live: 21bf253)

> **A fix-and-polish session driven by a full site audit.** The structural flaw the audit flagged as P0 — hero headlines baked into the AI artwork, sliced mid-word by the mobile crop ("DING / NEXT / ADE / THER.") — is fixed at the root: mobile now gets **real HTML headlines over text-free image crops**. Plus three P2 polish items (CRT, headline wrapping, ghost font). Pushed and verified live on gimbo.co.nz.

### Fixed — mobile hero text (audit P0)

- **`<HeroSection>` gains `headline` / `accent` / `subline` props** — rendered on mobile (<768px) as a real `<h1>` (display-mega, lime accent, mono subline) over a bottom canvas gradient; `sr-only` on md+ where the painted typography carries the visual. Text can never be cropped again — it's text.
- **Wired up: Home** ("Building the next decade **together.**") and **AI Builder** ("Building systems that scale **human potential.**", copy matching the painted manifesto). These are the site's first real `<h1>`s — SEO + screen readers fixed in the same move. Desktop verified pixel-identical.
- **Per-hero text-free mobile crop windows** in `optimize-images.mjs` (`MOBILE_CROPS`); all five `-mobile` images regenerated. The about window was re-tuned (530,296,594 → 588,375,536) to dodge the "NODE // A-01" annotation and the bottom strip's "…LAND." tail.
- **Deliberately deferred**: fitness / life / about mobile show the clean text-free crop with *no* headline for now — each is a one-line `headline` prop away when wanted.

### Fixed — polish (audit P2)

- **CRT effects**: the moving beam now respects `prefers-reduced-motion` (removed entirely — a frozen beam is a stray lime bar); book chapter pages (`ChapterLayout`) pass `hideCrt` so long-form reading no longer sits under scanlines.
- **`.display-mega` gets `text-wrap: balance`** — multi-line hero headlines break into even lines (visible on the live mobile homepage: three balanced lines).
- **'Wise Sans' removed from all font stacks** — it was referenced in 5 stacks but never loaded (no `@font-face`, and it's Wise's proprietary brand font — never licensable). Inter is and always was the display font; project docs updated to say so. Zero visual change.

### Audit backlog (not this session)

- **P1**: mobile nav (hamburger / tap targets / `aria-current`), About HTML text version + social links (`sameAs` is empty), RSS feed, `:focus-visible` styles, `lang="zh-CN"` → `en`.
- **P2 remaining**: self-hosted font subsets (#9), small-text density sweep — 96 uses of 9–11px (#11).

---

## [1.1.0] — 2026-06-09 · Ideas grows up

> **A living-site content + craft session.** Two new Ideas deep-reads built from videos, a generative animated-thumbnail system for the whole Ideas list, multi-column topic filtering, and a couple of AI Builder updates. Workflow learning of the day: YouTube caption download is now walled (PO-token), so **NotebookLM is the transcription path** — the user runs the video through it and pastes the transcript/infographics; I turn that into the page.

### Added — Ideas content (video deep-reads)

- **不再写代码,而是写 Loop · Boris Cherny 聊 Claude Code** (`/ideas/write-loops-not-code.html`, index 08) — from the Acquired × WorkOS interview. Re-anchored on the line that actually hooked the user: *"连「品味」也不再是人类独有 → 人类最后剩价值观"*; "写 Loop" demoted to a section. Includes origin arc, an 8-number strip, role-shift / petri-dish / 4 contrarian cards, and **two embedded NotebookLM infographics** (1600px JPEG inline, full-res PNG on click). Filed Tech + Economy.
- **不是一人公司,是几个人的公司 · OPC** (`/ideas/few-person-company.html`, index 07) — from the 科技早知道 × Sahil Lavingia podcast. Hero thesis "a few-person company," $20M-on-a-handful stat hook, myth-vs-real compare, 3 takeaways. Filed Tech + Economy; cross-linked from the Boris page (underfund + infinite tokens = its engineering sibling).

### Added — generative thumbnails

- **`<IdeaThumb>`** (`src/components/IdeaThumb.astro`) — per-article animated abstract geometric art in the Ideas list's left media slot. Pure SVG + CSS (no raster), seed-driven, honors `prefers-reduced-motion`. Lightweight motifs (`orbit/constellation/bars/spiral/wave/rings/loop`) + bespoke high-detail ones (`core` #08, `team` #07, `orchestrator` #05, `ascent` #04) with gradients, blurred glow, and `packet` data-flow animation. `ArticleRow` takes an optional `art` prop — `/fitness` rows keep the old placeholder.

### Changed

- **Ideas filtering** — a piece can now live in **multiple topic columns** via an optional `topics: string[]` (counts + client-side filter match on membership; backward compatible). The two new pieces sit in both Tech and Economy.
- **Ideas thumbnail frame** — when a generative thumb fills the media slot, the leftover dashed placeholder border is swapped for a clean solid hairline + nested radius (was reading as unfinished against the card).
- **AI Builder — The Personal AI Fleet** (`/ai-builder/ai-fleet.html`) — added the **Chief Evolution Officer (EVO)** horizontal "feeds every cell" layer to the org diagram.
- **AI Builder — NZ Managed Funds Guide** (`/ai-builder/nz-funds.html`) — replaced with the expanded 华人投资者 deep-dive (reuses the same URL + nav entry; date bumped).

### Tooling

- Installed `yt-dlp` on the Mac for video transcript pulls. Caveat: YouTube's PO-token wall blocks anonymous caption download and `--cookies-from-browser chrome` hangs (Keychain / app-bound cookies) — so the working path is NotebookLM, not yt-dlp. See memory `project_video_to_idea_pipeline`.

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
