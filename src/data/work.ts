/* ─── Work catalog ─────────────────────────────────────────────────────────
   Single source of truth for /work. Featured = top 3 by date across all
   categories. Each category section shows up to 3 most-recent items; the
   page derives counts and ordering from this list. */

export type Status = 'live' | 'wip' | 'planned' | 'archive';
export type Category = 'supply-chain' | 'investing' | 'ai-experiments';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  status: Status;
  date: string; // YYYY-MM-DD; used for sorting
  href?: string;
  imageUrl?: string; // optional — replaces gradient/monogram placeholder when present
}

export interface CatDef {
  key: Category;
  name: string;
  kicker: string;
  hue: string;
  monogram: string;
  gradient: string;
}

export const projects: Project[] = [
  // INVESTING
  {
    slug: 'nz-funds',
    title: 'NZ Managed Funds Guide',
    summary: '华人投资者 deep-dive on PIE funds, FIF rules, and the 5 fund families worth knowing in 2026.',
    category: 'investing',
    status: 'live',
    date: '2026-05-07',
    href: '/work/nz-funds.html',
  },
  {
    slug: 'ark-theses',
    title: 'ARK Theses Tracker',
    summary: 'Live notes on the disruption theses I am following — innovation, robotics, multi-omic, fintech.',
    category: 'investing',
    status: 'planned',
    date: '2026-04-15',
  },
  {
    slug: 'on-chain',
    title: 'On-Chain Research',
    summary: 'Market-structure visualizations, flow analysis, and crypto thesis notes.',
    category: 'investing',
    status: 'planned',
    date: '2026-04-01',
  },
  // SUPPLY CHAIN
  {
    slug: 'supply-chain-agent',
    title: 'Supply Chain Agent',
    summary: 'Three-agent stack running NZ + AU MRP, PO routing, vendor confirmations and settlement.',
    category: 'supply-chain',
    status: 'wip',
    date: '2026-05-01',
  },
  {
    slug: 'mrp-watchdog',
    title: 'MRP Anomaly Watchdog',
    summary: 'Daily exception scanner that catches stockouts and PO mismatches before they hit production.',
    category: 'supply-chain',
    status: 'planned',
    date: '2026-04-20',
  },
  {
    slug: 'vendor-settlement',
    title: 'Vendor Settlement Automation',
    summary: 'Tri-party matching and dispute routing — a 3-hour weekly task collapsed into a 5-minute review.',
    category: 'supply-chain',
    status: 'planned',
    date: '2026-04-10',
  },
  // AI EXPERIMENTS
  {
    slug: 'tennis-buddy',
    title: 'Tennis Buddy',
    summary: 'A small Roland-Garros-themed match-log + hitting-partner app — one-person build, React 19 + Supabase + Vercel, shipped end-to-end.',
    category: 'ai-experiments',
    status: 'live',
    date: '2026-05-08',
    href: '/work/tennis-buddy.html',
  },
  {
    slug: 'ai-data-analysis',
    title: 'AI × Data Analysis',
    summary: 'Where AI meets the spreadsheet — vendor performance dashboards, on-chain flows, market structure.',
    category: 'ai-experiments',
    status: 'planned',
    date: '2026-05-05',
  },
  {
    slug: 'ai-applications',
    title: 'AI Applications',
    summary: 'Practical agentic workflows — Outlook rule rewrites, weekly review automation, document parsers.',
    category: 'ai-experiments',
    status: 'planned',
    date: '2026-04-25',
  },
  {
    slug: 'weekly-review-automator',
    title: 'Weekly Review Automator',
    summary: "Six-dimension review (health, learning, people, projects, money, work) auto-drafted from week's logs.",
    category: 'ai-experiments',
    status: 'planned',
    date: '2026-04-18',
  },
];

export const categories: CatDef[] = [
  {
    key: 'supply-chain',
    name: 'Supply Chain',
    kicker: '供应链 · the day job, automated',
    hue: '#cc4e0e',
    monogram: 'S',
    gradient: 'linear-gradient(135deg, rgba(204,78,14,0.42) 0%, #1a1b17 65%)',
  },
  {
    key: 'investing',
    name: 'Investing',
    kicker: '投资 · what I put money behind',
    hue: '#9fe870',
    monogram: 'I',
    gradient: 'linear-gradient(135deg, rgba(159,232,112,0.32) 0%, #1a1b17 65%)',
  },
  {
    key: 'ai-experiments',
    name: 'AI Experiments',
    kicker: 'AI 实践 · agents, workflows, builds',
    hue: '#5e6ad2',
    monogram: 'A',
    gradient: 'linear-gradient(135deg, rgba(94,106,210,0.45) 0%, #1a1b17 65%)',
  },
];
