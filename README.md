# Gimbo's Universe

A personal website that aggregates Gimbo's projects into a single public surface — three "floating islands" in deep space (Work, Fitness, Life) plus Ideas and About.

**Status**: 🟢 v0.5 — shipped 2026-05-07. See [CHANGELOG.md](./CHANGELOG.md) for the full release notes.
**Live**: https://personal-website-zeta-nine-61.vercel.app · _custom domain pending_
**Stack**: [Astro](https://astro.build) + [Tailwind](https://tailwindcss.com), hosted on Vercel.

---

## Stack

- **Astro 5** — static site generation, file-based routing, content islands
- **Tailwind CSS 3.4** — utility-first styling, custom design tokens (Wise-Dark + roland-garros accents)
- **Sharp** — image optimization (PNG → WebP/AVIF, OG cropping)
- **`@astrojs/sitemap`** — auto-generated sitemap

## Routes

| Path                | Page                                  |
| ------------------- | ------------------------------------- |
| `/`                 | Landing — full-bleed hero with three island hot spots |
| `/work`             | Work & investing modules              |
| `/fitness`          | Fitness modules                       |
| `/life`             | Life & reading modules                |
| `/ideas`            | Ideas / essays / theses               |
| `/about`            | About Gimbo                           |
| `/404`              | Universe-not-found terminal screen    |

## Design system

Lives in `src/styles/globals.css` and follows [Wise-Dark](https://github.com/anthropics/...) token rules:

- **Background**: Near Black `#0e0f0c` / Surface `#1a1b17`
- **Brand accent**: Wise Green `#9fe870` / Light Mint `#e2f6d5`
- **Display**: Wise Sans (fallback Inter), 900 weight, 0.85 line-height
- **Mono / terminal**: JetBrains Mono
- **Pixel/retro**: Press Start 2P, VT323
- **Cards**: 30px radius, `1px` ring border (`#ffffff1f`)

Inner pages use the `BaseLayout` + `SectionHero` + `ModuleCard` primitives. The landing page is fully bespoke around the painted hero image.

## Repo layout

```
personal-website/
├── public/
│   ├── landing/            # hero image variants (PNG/WebP/AVIF + responsive)
│   ├── favicon.svg         # G-letter pixel logo
│   ├── apple-touch-icon.png
│   ├── og-image.jpg        # 1200x630 social preview
│   └── robots.txt
├── scripts/
│   ├── optimize-images.mjs # PNG → WebP/AVIF + OG generator
│   ├── mobile-screenshot.mjs
│   └── inspect-overflow.mjs
├── src/
│   ├── layouts/BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── SectionHero.astro
│   │   ├── ModuleCard.astro
│   │   └── landing/        # Galaxy + 3 pixel scenes (legacy alt landing)
│   ├── pages/              # one .astro per route
│   └── styles/globals.css  # Wise-Dark tokens + animations
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
```

## Production build + preview

```bash
npm run build        # → dist/
npm run preview      # http://localhost:4321 (static preview)
```

## Image optimization

Re-run if you replace the hero image:

```bash
# Drop a 1536×1024 PNG at landing-source/<name>.png, then:
node scripts/optimize-images.mjs
```

Outputs:

- `gimbos-universe.{avif,webp}` — full-res
- `gimbos-universe-{768,1280}w.{avif,webp}` — responsive
- `og-image.{jpg,png}` — 1200×630 social card

## Lighthouse (mobile, simulated 4G)

| Category | Score |
| --- | --- |
| Performance | 90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Deployment

The site is configured to deploy to Vercel as a static build:

1. Push this repo to GitHub.
2. In Vercel: **Import Project** → select the repo → defaults work (Framework: Astro, Output: `dist/`).
3. Add the custom domain in Vercel Project Settings → Domains, then point your registrar's DNS at Vercel.
4. Update `SITE_URL` env var (or `astro.config.mjs`'s `SITE` constant) to the final domain so canonical / OG / sitemap URLs are correct.

See `SHIP.md` for the full pre-launch checklist.

---

## License

Personal site — content © Gimbo. Code structure free to copy/learn from.
