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
  /** Optional extra topic columns this piece also belongs to. When omitted,
      the piece lives only in `topicSlug`. Used for cross-cutting ideas that
      legitimately sit in two columns (e.g. Tech + Economy). */
  topics?: string[];
  href: string;
  status: 'live' | 'wip' | 'planned';
  isNew?: boolean;
  /** Generative thumbnail for the list preview (left media slot). Picks a
      geometric motif + accent + seed; rendered by <IdeaThumb />. */
  art?: {
    motif: 'orbit' | 'constellation' | 'bars' | 'spiral' | 'wave' | 'rings' | 'loop';
    accent: string;
    seed: number;
  };
}

export interface TopicDef {
  slug: string;
  label: string;
  sub: string;
}

export const articles: IdeaArticle[] = [
  {
    index: '08',
    title: '连「品味」也不再是人类独有 · Boris Cherny 聊 Claude Code · 视频导读',
    lede: '社媒上那句「连品味都不再是人类独有」把我抓住了——它来自 Claude Code 创造者 Boris Cherny 的访谈。很多人以为人类最后的护城河是「产品品味」,但 Boris 判断这道墙 3–6 个月内也会被攻破(模型自动生成的想法已有约 20% 是好主意);真正留给人的，是教模型「成为一个好模型」的价值观，像教孩子做一个好人。顺着完整字幕往下，是一整套关于 AI 发展的切片:Claude Code 怎么从「产品悬垂」时期的原型长出来(他已 6 个月没亲手写代码、11 月卸载 IDE、~200 个 Claude 后台常驻)、工程师从「写代码」变成「写 Loop」、为什么编程是 AI 安全干净得不可思议的「培养皿」，以及几个很辣的反直觉判断(资深要先 unlearn、代码品味常是愚蠢执念、故意让团队人手不足 +无限 token、拉平头衔减少盲从)。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy'],
    href: '/ideas/write-loops-not-code.html',
    status: 'live',
    isNew: true,
    art: { motif: 'loop', accent: '#9fe870', seed: 8 },
  },
  {
    index: '07',
    title: '不是一人公司,是几个人的公司 · OPC 的真实形态 · 视频导读',
    lede: 'AI 火了之后,人人都想做一家 OPC(一人公司)——「一个人在家,几个 Agent 干掉过去一整个团队」。但 Gumroad 创始人、《小而美》作者 Sahil Lavingia(这个领域的 OG)说:真要把用户体验做好,最后大概不是 1 个人,而是几个人。基于一期《科技早知道》的视频导读:Gumroad 是怎么被 VC「逼」小、年入 2000 万却只靠 3 个工程师 + 半个 CFO + 1.5 个客服跑起来的;5 个核心观点(AI 能写代码但找不到客户 / 最好的软件不一定躺赢 / AI 当 CEO 人类负责热爱);以及把「想象中的一人公司」和「真实形态」摆在一起的那个核心落点 —— 极简不是把人减到 0,而是减到刚好还能保证体验的那几个。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy'],
    href: '/ideas/few-person-company.html',
    status: 'live',
    isNew: true,
    art: { motif: 'constellation', accent: '#38c8ff', seed: 7 },
  },
  {
    index: '06',
    title: 'The Intimate Animal · 亲密的动物 · 全书可视化解读',
    lede: 'Kinsey Institute 执行主任、演化生物学家 Justin Garcia 2026 年的新书：人类不是只被性驱动的动物，而是被「亲密」深刻塑造的 intimate animal。这份可视化解读读完了全书——从内华达沙漠里一项 2 万美元、却不一定包含性的「Girlfriend Experience」讲起，拆开社会性单偶 vs 性单偶的核心悖论、关系生命周期的 10 个阶段（Need → Love Again）、亲密危机的数据、出轨的 8 种动机，到 Aron 那套「促进亲密的 36 个问题」，以及作者关于 AI 时代如何重塑亲密关系的追问。为读书会做的视觉版。',
    date: '2026.06',
    tags: ['Society'],
    topicSlug: 'society',
    href: '/ideas/intimate-animal-visual-guide.html',
    status: 'live',
    isNew: true,
    art: { motif: 'rings', accent: '#ff7a82', seed: 6 },
  },
  {
    index: '05',
    title: '用 AI Agent 运营一家公司 · Distributor 的 Agent 原生架构',
    lede: '如果让 AI Agent 来运营一家分销公司，人到底还留在哪里？一张可视化架构图给出答案：一个 Orchestrator 调度 4 个 Agent（客服 / 供应链 / 财务 / WMS），人只守在三件事上——搬实物、维护关系、对钱和异常负责。核心原则是「Agent 跑 happy path，人当 exception owner」，外加两道授权闸（PO 金额闸 + 付款闸）守住内控。',
    date: '2026.05',
    tags: ['Tech'],
    topicSlug: 'tech',
    href: '/ideas/ai-agent-company.html',
    status: 'live',
    art: { motif: 'orbit', accent: '#9fe870', seed: 5 },
  },
  {
    index: '04',
    title: 'Open to Work · LinkedIn CEO 的 AI 时代职业指南 · 全书解读',
    lede: 'Ryan Roslansky（LinkedIn CEO）+ Aneesh Raman 2026 年 2 月新书的完整可视化解读：10 章 × 3 部分的论证骨架、5Cs（curiosity / courage / creativity / compassion / communication）、三桶任务框架、攀岩墙式职业模型、30-60-90 day plan，加上从书里精挑的 11 位真实工作者故事。专门为这周末的读书会做的视觉版。',
    date: '2026.05',
    tags: ['Economy'],
    topicSlug: 'economy',
    href: '/ideas/open-to-work-visual-guide.html',
    status: 'live',
    art: { motif: 'bars', accent: '#ffd11a', seed: 4 },
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
    art: { motif: 'constellation', accent: '#9fe870', seed: 3 },
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
    art: { motif: 'spiral', accent: '#38c8ff', seed: 2 },
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
    art: { motif: 'wave', accent: '#ffd11a', seed: 1 },
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
  '2026.06',
  '2026.05',
  '2026.04',
  '2026.03',
  '2026.02',
  '2026.01',
];
