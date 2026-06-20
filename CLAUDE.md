# Project Rules — Gimbo's Universe (personal-website)

These are project-level rules for any future Claude Code session in this repo. Read this before making changes.

## 🚫 Three red lines for anything published to the public site

**Hard rules, no exceptions** — anywhere on the public-facing site, in metadata (JSON-LD, OG, sitemap), in code comments, in book chapter content (`src/pages/life/book/`), or in commit messages, **do not** publish the following:

### 1. Company names

Any company the user has worked for, currently works for, has clients/suppliers/employer relationships with — including past employers, current employer, the parent group, partner companies, recruiters, and customers. Replace with a role + industry ("Supply chain professional in NZ healthcare distribution") or a structural noun ("the new role", "my previous employer", "the recruiter").

If a structured field requires an organization (e.g. `schema.org/Person.worksFor`), **omit the field entirely** rather than substituting a placeholder.

### 2. Specific friend, colleague, or family member names

No first names, last names, or @-handles of people in the user's life — coworkers, hiring managers, mentors, friends, family. Replace with the role / relationship ("a coach who'd been a hiring manager at two of the companies I applied to", "a food R&D friend", "my manager"). Public figures (authors, chefs, podcast hosts) referenced by the user are fine.

### 3. Specific personal financial information

Concrete investment positions, holdings, account balances, bank/broker account numbers, transaction details, salary figures, net-worth statements. General investment philosophy or category-level notes are fine ("I hold NZ-based PIE funds across 5 families" — fine; "I bought 1,200 shares of XYZ at $14.30 last Tuesday" — not fine).

---

These rules were set by the user on 2026-05-07 (rule 1) and 2026-05-09 (rules 2 + 3) and apply in perpetuity. If unsure about borderline content, ask before publishing.

When auditing or revising existing content, run a sweep against all three rules — not just the company-name one.

## Stack & conventions

- **Framework**: Astro 5 (static, no SSR)
- **Styling**: Tailwind 3.4 + custom Wise-Dark tokens in `src/styles/globals.css`
- **Display font**: Inter, weight 900 (Wise Sans was never licensed/loaded — Inter IS the display font), line-height 0.85, **uppercase + period** for hero manifestos
- **Routes**: `/`, `/work`, `/fitness`, `/life`, `/ideas`, `/about` + `/404` (no nesting; each page is independent)
- **Modules**: `<ModuleCard />` — pass `href` to make clickable; `featured={true}` for ONE lime-green hero card per section

## Adding content

- Sub-page detail (rich layout): create `src/pages/<section>/<slug>.astro` and link via `href` on the ModuleCard
- Markdown article: drop `.md`/`.mdx` in `src/pages/<section>/` (after enabling MDX integration)
- Standalone HTML (Plan C, e.g. dashboards / Gamma exports): drop in `public/<section>/<name>.html`, link with `href="/<section>/<name>.html"`. **Always include a "← Gimbo's Universe" back link** at the top of the HTML — see the pattern in `public/work/nz-funds.html`

## Deploy

- Hosted on Vercel; Git auto-deploy from `main` branch is wired up
- `git push origin main` → 30s → live at `https://personal-website-zeta-nine-61.vercel.app`
- Manual deploy: `npx vercel@latest deploy --prod`

## Changelog & versioning (always)

Every **substantial** change gets recorded in `CHANGELOG.md` as part of the same piece of work — don't wait to be asked.

- **What counts as substantial**: a new page / section / component, a new feature or mechanism, a visible design or hero change, a content drop (Ideas piece, book chapter, dashboard), or a notable fix. **Skip** for trivial copy tweaks, typo fixes, or tiny style nudges.
- **Add a new top entry** under the format already in the file: `## [x.y.z] — YYYY-MM-DD · <one-line title>`, a `>` blockquote summary, then `### Added / Changed / Fixed / Notes` sections. Match the existing editorial voice (concrete, names files/paths, explains the *why*).
- **Bump the version (semver-ish)** — set by the owner on 2026-06-20:
  - **Just adding a new `/ideas` piece (a new "ID") → bump the THIRD digit (patch)**: 1.10.0 → 1.10.1. A plain content drop into Ideas is *not* a minor bump.
  - **A change to another module, a new section/feature/mechanism, or any big structural / IA / design change → bump the SECOND digit (minor)**: 1.10.x → 1.11.0.
  - Fix/polish only → patch (third digit) as well.
  - 1.0 was reached 2026-06-01. When a batch mixes both (e.g. a new Ideas piece *and* an IA change), the largest change wins → minor.
- **Stamp the live commit** in the header once pushed, e.g. `(live: f705132)` — matches prior entries.
- Use today's date from the session (convert any relative date to absolute).
