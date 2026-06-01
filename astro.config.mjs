import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Real domain wired 2026-06-01: gimbo.co.nz (apex, no-www canonical).
// Vercel will inject VERCEL_PROJECT_PRODUCTION_URL at build time, but we still
// set a stable canonical here for SEO. Override with SITE_URL env if needed.
const SITE = process.env.SITE_URL ?? 'https://gimbo.co.nz';

export default defineConfig({
  site: SITE,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  server: {
    port: 4321,
    host: true,
  },
});
