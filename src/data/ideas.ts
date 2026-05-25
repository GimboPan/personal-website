/* ─── Ideas catalog ────────────────────────────────────────────────────────
   Single source of truth for /ideas. The topic counts and archive timeline
   on the page are derived from `articles` — no manual count updates. */

export interface IdeaArticle {
  index: string;
  title: string;
  lede: string;
  date: string; // YYYY.MM
  tags: string[];
  topicSlug: string;
  href: string;
  status: 'live' | 'wip' | 'planned';
  isNew?: boolean;
}

export interface TopicDef {
  slug: string;
  label: string;
  sub: string;
}

export const articles: IdeaArticle[] = [
  {
    index: '04',
    title: 'Open to Work · LinkedIn CEO 的 AI 时代职业指南 · 全书解读',
    lede: 'Ryan Roslansky（LinkedIn CEO）+ Aneesh Raman 2026 年 2 月新书的完整可视化解读：10 章 × 3 部分的论证骨架、5Cs（curiosity / courage / creativity / compassion / communication）、三桶任务框架、攀岩墙式职业模型、30-60-90 day plan，加上从书里精挑的 11 位真实工作者故事。专门为这周末的读书会做的视觉版。',
    date: '2026.05',
    tags: ['Economy'],
    topicSlug: 'economy',
    href: '/ideas/open-to-work-visual-guide.html',
    status: 'live',
    isNew: true,
  },
  {
    index: '03',
    title: '文明系列 · 十书可视化解读',
    lede: 'Iain M. Banks 用十本书、二十五年时间，雕刻出一座"工作可选"的乌托邦。这是一份可视化解读：每本书一种颜色、一个母题、一个对今天硅谷大佬的回声——从《Phlebas》的入场到《Hydrogen Sonata》的退场。',
    date: '2026.05',
    tags: ['Culture'],
    topicSlug: 'culture',
    href: '/ideas/culture-series-visual-guide.html',
    status: 'live',
  },
  {
    index: '02',
    title: '《文明》系列与 AI 时代的人生意义',
    lede: '为什么马斯克、贝佐斯、扎克伯格几乎都在不同场合推荐 Iain M. Banks 的《文明》（The Culture）系列？如果 AI 真的把我们从"工作"中解放出来，人活着的意义到底是什么？这是我和 Gemini 的一次深度对话的整理。',
    date: '2026.05',
    tags: ['Culture'],
    topicSlug: 'culture',
    href: '/ideas/culture-series',
    status: 'live',
  },
  {
    index: '01',
    title: 'Yang 的竞选史 + UBI 起源',
    lede: 'Yang 上一次参选总统是 2020 年大选，那本《The War on Normal People》系统阐述了 UBI 论证——但当时谈的是蓝领+物理自动化的故事。2026 年再看，论证的射程已经从蓝领扩到了白领，这是质变；但政治可行性其实比 2020 年还要更复杂。',
    date: '2026.05',
    tags: ['Economy'],
    topicSlug: 'economy',
    href: '/ideas/yang-ubi',
    status: 'live',
  },
];

export const topicDefs: TopicDef[] = [
  { slug: 'all', label: '全部', sub: 'All' },
  { slug: 'society', label: '社会', sub: 'Society' },
  { slug: 'economy', label: '经济', sub: 'Economy' },
  { slug: 'culture', label: '文化', sub: 'Culture' },
  { slug: 'tech', label: '科技', sub: 'Tech' },
];

/** Months shown in the archive timeline, newest first. */
export const archiveMonths: string[] = [
  '2026.05',
  '2026.04',
  '2026.03',
  '2026.02',
  '2026.01',
];
