# Project Rules — Gimbo's Universe (personal-website)

These are project-level rules for any future Claude Code session in this repo. Read this before making changes.

## 🚫 Never mention the user's employer / company name

**Hard rule, no exceptions** — anywhere on the public-facing site, in metadata (JSON-LD, OG, sitemap), in code comments, or in commit messages, **do not name the user's day-job employer**.

If a structured field requires an organization (e.g. `schema.org/Person.worksFor`), **omit the field entirely** rather than substituting a placeholder. If a sentence used to read "Supply Planner @ <Employer>", rewrite it to just "Supply Planner" or "Supply chain professional" — drop the @ <Employer> portion.

This rule was set by the user on 2026-05-07 and applies in perpetuity. If asked to add resume-style content with a current job, default to role + industry only ("Supply chain professional based in Auckland"), never the company.

If unsure, ask before publishing.

## Stack & conventions

- **Framework**: Astro 5 (static, no SSR)
- **Styling**: Tailwind 3.4 + custom Wise-Dark tokens in `src/styles/globals.css`
- **Display font**: Wise Sans (fallback Inter), weight 900, line-height 0.85, **uppercase + period** for hero manifestos
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
