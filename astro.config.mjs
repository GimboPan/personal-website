import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update this once the real domain is wired up.
// Vercel will inject VERCEL_PROJECT_PRODUCTION_URL at build time, but we still
// set a stable canonical here for SEO.
const SITE = process.env.SITE_URL ?? 'https://gimbosuniverse.com';

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
