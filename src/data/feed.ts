/* ─── /universe activity feed ──────────────────────────────────────────────
   A hand-edited, reverse-chronological log of what's recently happened
   across the site — shipped pieces, builds in flight, books picked up.
   Rendered as the "Recent across the universe" block on the homepage.

   This is what gives the site life, so keep it fresh: when something lands,
   add a row at the TOP. Older rows can be trimmed once the list runs long.

   TODO (Gimbo): these were seeded from existing site content — edit freely. */

export interface FeedEntry {
  /** 'YYYY.MM' — newest entries go first in the array */
  date: string;
  /** Short verb shown in colour, e.g. Shipped / Building / Reading */
  action: string;
  /** Drives the colour of the action word: done = lime, wip = orange, ongoing = grey */
  kind: 'done' | 'wip' | 'ongoing';
  /** What it is, in one line */
  title: string;
  /** Which module it belongs to — shown as a tag */
  module: 'AI BUILDER' | 'FITNESS' | 'LIFE' | 'IDEAS';
  /** Optional deep link */
  href?: string;
}

/** Month this feed was last edited by hand — shown as a freshness stamp. */
export const feedUpdated = '2026.05';

export const feed: FeedEntry[] = [
  {
    date: '2026.05',
    action: 'Counting down',
    kind: 'ongoing',
    title: 'Rafa — Netflix sports series, premieres May 29',
    module: 'FITNESS',
    href: '/fitness/tennis',
  },
  {
    date: '2026.05',
    action: 'Shipped',
    kind: 'done',
    title: 'Open to Work · LinkedIn CEO 新书的全书可视化解读',
    module: 'IDEAS',
    href: '/ideas/open-to-work-visual-guide.html',
  },
  {
    date: '2026.05',
    action: 'Shipped',
    kind: 'done',
    title: '文明系列 · 十书可视化解读',
    module: 'IDEAS',
    href: '/ideas/culture-series-visual-guide.html',
  },
  {
    date: '2026.05',
    action: 'Reading',
    kind: 'ongoing',
    title: '《活出你的本來面目》— 鐘穎 写给现代人的荣格心灵指南',
    module: 'LIFE',
    href: '/life',
  },
  {
    date: '2026.05',
    action: 'Building',
    kind: 'wip',
    title: 'Supply Chain Agent — a three-agent stack for the day job',
    module: 'AI BUILDER',
    href: '/ai-builder',
  },
  {
    date: '2026.05',
    action: 'Shipped',
    kind: 'done',
    title: 'Tennis Buddy — the smallest possible match-log app',
    module: 'AI BUILDER',
    href: '/ai-builder/tennis-buddy.html',
  },
  {
    date: '2026.04',
    action: 'Published',
    kind: 'done',
    title: 'Chapter 2 · Food & Health — the first book chapter, live',
    module: 'LIFE',
    href: '/life/book/ch02-food-health',
  },
];
