# Ship Checklist

> **Current version**: 🟢 **v0.7 — shipped 2026-05-09** ([CHANGELOG.md](./CHANGELOG.md))
> **Live URL**: https://personal-website-zeta-nine-61.vercel.app
> **Repo**: https://github.com/GimboPan/personal-website
> **Auto-deploy**: ✅ `git push origin main` → ~30s → live

Status as of 2026-05-09. Everything listed under **DONE** is wired up and committed; everything under **TODO (you)** needs your account/auth/decision.

---

## ✅ DONE (technical prep)

- [x] Astro + Tailwind project scaffolded
- [x] Six routes live: `/`, `/work`, `/fitness`, `/life`, `/ideas`, `/about` + `/404`
- [x] Landing rebuilt as full-bleed AI image hero with click hot spots over each island, painted nav, ENTER MY UNIVERSE, and SCROLL TO EXPLORE
- [x] Animations: mouse-tracked parallax (hero + 3 islands by depth), 4-comet meteor shower, staggered entry fade-in, twinkling starfield overlay
- [x] **Image optimization**: 2.0 MB PNG → 65 KB AVIF / 114 KB WebP + 768/1280w responsive variants → progressive `<picture>` element
- [x] **Favicon**: SVG G-logo (lime on near-black) + 32px PNG fallback + apple-touch-icon
- [x] **OG share image**: 1200×630 JPEG + PNG generated from hero crop
- [x] **SEO meta**: title, description, canonical, Open Graph, Twitter Card, JSON-LD Person schema
- [x] **404 page**: terminal-style "universe not found" with quick-jump pills
- [x] **`@astrojs/sitemap`** integration → auto-generated `/sitemap-index.xml`
- [x] **`/robots.txt`** with sitemap reference
- [x] **Mobile responsive pass**: tested at iPhone (390×844), iPad (768×1024), Pixel 7 (412×915), Desktop (1440×900); fixed nav overflow + heading wrap on narrow viewports
- [x] **Lighthouse mobile**: Performance 90, Accessibility 100, Best Practices 100, SEO 100
- [x] **Font loading**: `font-display: swap` + non-blocking secondary fonts (Press Start 2P, VT323 only on landing)
- [x] **Color contrast** fixed (lime hero card "TOOLS" label was 3.4:1, now passes)
- [x] README + this SHIP.md

## 🧑‍💻 TODO (you — needs your accounts)

### 1. Pick + buy a domain

Open at the same time and compare price/availability:

- [ ] [Cloudflare Registrar](https://dash.cloudflare.com/?to=/:account/domains) — best for cost, no markup
- [ ] [Namecheap](https://www.namecheap.com)
- [ ] [Porkbun](https://porkbun.com) — also no markup

Recommended (in order):

1. `gimbosuniverse.com` (~$10/yr) — matches the hero title verbatim
2. `gimbo.life` (~$20–30/yr) — short, "virtual life" pun
3. `panjunbao.com` (~$10/yr) — real name version

**After purchase**: leave the registrar tab open, you'll add DNS records in step 4.

### 2. Create the GitHub repo

1. Go to <https://github.com/new>
2. Name: `personal-website` (or whatever you prefer)
3. **Public** (recommended — the build is part of your brand)
4. **DO NOT** check "Add README", "Add .gitignore", or "Add license" — we have ours
5. Click _Create repository_
6. Copy the SSH URL (e.g. `git@github.com:<you>/personal-website.git`)
7. **Paste it back to me** — I'll run `git remote add origin <url>` and `git push -u origin main`

### 3. Connect Vercel

1. Go to <https://vercel.com/new>
2. Sign in with GitHub if you haven't already
3. _Import Git Repository_ → pick `personal-website`
4. Vercel auto-detects Astro. Defaults work — just click **Deploy**
5. After ~30s you'll get a `*.vercel.app` preview URL. Open it. Confirm the site loads.

### 4. Wire up your custom domain

In your new Vercel project:

1. **Settings → Domains → Add**
2. Type your purchased domain (e.g. `gimbosuniverse.com`) → Add
3. Vercel will display the DNS records you need to add at your registrar:
   - An `A` record for the apex (`@`) pointing to `76.76.21.21`
   - A `CNAME` record for `www` pointing to `cname.vercel-dns.com`
   (exact values shown by Vercel)
4. Go back to Cloudflare/Namecheap → DNS settings → add those records
5. Wait 5 min – 1 hr for DNS propagation
6. HTTPS auto-issued by Vercel (Let's Encrypt)
7. Site live at `https://gimbosuniverse.com` ✅

### 5. Update the canonical site URL

After domain is live, update one constant so canonical URLs / sitemap / OG tags reflect the real domain:

**Option A** — env var on Vercel:

- Vercel → Settings → Environment Variables → add `SITE_URL=https://gimbosuniverse.com`
- Trigger redeploy

**Option B** — bake it in:

- Edit `astro.config.mjs` → change `SITE` constant to your domain
- Commit + push (auto-deploys)

---

## 🟡 Optional but worth doing soon after launch

- [ ] **Analytics**: drop in [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (free, no cookies, no GDPR concerns) or [Plausible](https://plausible.io) ($9/mo)
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Test Open Graph preview with [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Tell people 🙂

## 🟢 Later

- [ ] Fill in real content for `/about`, `/ideas`, `/journal` (currently stubs)
- [ ] Auto-import MDX from sibling project folders (`/Users/gimbo/Desktop/claude cowork/*`) into the right routes
- [ ] Three.js sci-fi 3D upgrade for the landing once the static image gets old
- [ ] Bilingual zh-CN / en variants
- [ ] RSS feed for `/ideas`
- [ ] Comments via [Giscus](https://giscus.app)

---

## Useful commands

```bash
npm run dev         # local dev server :4321
npm run build       # production build → dist/
npm run preview     # preview built site :4321

# Re-optimize hero image after replacing it:
node scripts/optimize-images.mjs

# Render at multiple device viewports (CDP-based):
node scripts/mobile-screenshot.mjs http://localhost:4322

# Find any element causing horizontal overflow at a viewport:
node scripts/inspect-overflow.mjs http://localhost:4322
```

---

## 🚀 Live Deploy Status (auto-updated 2026-05-09)

- **Production URL**: https://personal-website-zeta-nine-61.vercel.app
- **Vercel Project**: `panjunbao-8783s-projects/personal-website`
- **GitHub repo**: https://github.com/GimboPan/personal-website
- **Git auto-deploy**: ✅ enabled (every push to `main` triggers a production rebuild)
- **Custom domain**: pending — TBD
- **Latest version**: v0.7 (/work + /life rebuilt; first book chapter live at /life/book/ch02-food-health)

To deploy a change: `git push origin main` → wait ~30s → live.

To deploy without pushing: `npx vercel@latest deploy --prod`.
