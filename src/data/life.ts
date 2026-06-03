/* ─── Life catalog ─────────────────────────────────────────────────────────
   Single source of truth for the Reading and Social modules on /life. */

export interface Book {
  slug: string;
  title: string;
  author: string;
  tags: string[];
  brief: string;
  thoughts: string;
  /** Path to cover image. When present, renders a real <img>. */
  coverUrl?: string;
  /** Tints the placeholder cover when no coverUrl. */
  hue?: string;
}

/** A book on the virtual shelf — shown spine-out, no cover. */
export interface ShelfBook {
  title: string;
  author: string;
  /** Spine colour. */
  hue: string;
  /** Use dark ink instead of light, for pale spines. */
  light?: boolean;
  /** Spine width in px; if omitted, derived from title length. */
  spine?: number;
}

export interface Group {
  slug: string;
  emoji: string;
  name: string;
  interest: string;
  frequency: string;
  brief: string;
  status: 'active' | 'dormant';
}

export interface TalebViz {
  slug: string;
  no: string; // display order, e.g. "01"
  title: string; // 中文书名
  titleEn: string;
  year: string;
  thesis: string; // one-line takeaway
  hue: string; // accent hue for the card
  href?: string; // standalone visualization; absent = not built yet
  status: 'live' | 'wip';
}

/* Reading list — the three currently on the table, shown cover-out. */
export const currentlyReading: Book[] = [
  {
    slug: 'outlive',
    title: 'Outlive',
    author: 'Peter Attia, MD (with Bill Gifford)',
    tags: ['health', 'longevity', 'medicine'],
    brief: "The science and art of longevity — Attia's case for re-thinking medicine across the four horsemen of disease.",
    thoughts: "Stop optimizing for the absence of disease; start optimizing for the last decade. That mindset reframe alone pays for the book.",
    coverUrl: '/outlive.webp',
  },
  {
    slug: 'heal-faster',
    title: 'Heal Faster',
    author: 'Dr Victoria Maizes',
    tags: ['health', 'recovery', 'self-care'],
    brief: "On the body's recovery reflex — practical protocols for bouncing back from illness and injury.",
    thoughts: "Reads more like a manual than a memoir. The kind of book you wish you'd read before you needed it.",
    coverUrl: '/heal-faster.webp',
  },
  {
    slug: 'let-them',
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    tags: ['psychology', 'agency', 'relationships'],
    brief: "A two-word reframe for letting go — what other people do is none of your business; what you do is.",
    thoughts: "Half a sentence I now use weekly. The other half is 'let me'.",
    coverUrl: '/let-them.webp',
  },
];

/* The virtual shelf — books already read, displayed spine-out on a
   two-tier wall shelf. Add a line here and it slots onto the boards. */
export const shelf: ShelfBook[] = [
  { title: 'The Next Conversation', author: 'Jefferson Fisher', hue: '#c2603e' },
  { title: '活出你的本來面目', author: '鐘穎', hue: '#6f8f6a' },
];

/* ─── Taleb 专区 ──────────────────────────────────────────────────────────
   Incerto 五部曲 · 逐本读透后做的可视化深读。Overview + 三本单本已建，
   两本（随机漫步 / 普罗克拉斯提斯之床）进行中。 */
export const talebOverview: TalebViz = {
  slug: 'incerto',
  no: '00',
  title: '不确定性五部曲 · 总览',
  titleEn: 'Incerto · The Whole Series',
  year: '2001–2018',
  thesis:
    '五本书是一部交响乐：从「误把运气当本事」一路推进到「为自己的判断流血」。一张图看懂黑天鹅、极端斯坦、反脆弱、杠铃、否定法、林迪、顽固少数派、风险共担、遍历性等全部核心模型。',
  hue: '#9fe870',
  href: '/life/taleb/incerto.html',
  status: 'live',
};

export const talebBooks: TalebViz[] = [
  {
    slug: 'fooled-by-randomness',
    no: '01',
    title: '随机漫步的傻瓜',
    titleEn: 'Fooled by Randomness',
    year: '2001',
    thesis:
      '成功者多半只是运气好的傻瓜。我们看不见「没发生的历史」，于是把幸存者当英雄。判断一个人，要看他所有可能人生的平均值。',
    hue: '#c9a14a',
    status: 'wip',
  },
  {
    slug: 'black-swan',
    no: '02',
    title: '黑天鹅',
    titleEn: 'The Black Swan',
    year: '2007',
    thesis:
      '稀有、极端、事后才「显而易见」的事件，几乎解释了历史上的一切。而我们偏偏对它视而不见，还用钟形曲线假装能控制它。',
    hue: '#7d93b0',
    href: '/life/taleb/black-swan.html',
    status: 'live',
  },
  {
    slug: 'bed-of-procrustes',
    no: '03',
    title: '普罗克拉斯提斯之床',
    titleEn: 'The Bed of Procrustes',
    year: '2010',
    thesis:
      '一本格言集。普罗克拉斯提斯把客人拉长或砍短以适应他的床——而我们，也总是削足适履，把看不懂的现实硬塞进预设的概念里。',
    hue: '#9a8cb0',
    status: 'wip',
  },
  {
    slug: 'antifragile',
    no: '04',
    title: '反脆弱',
    titleEn: 'Antifragile',
    year: '2012',
    thesis:
      '脆弱的反面不是「强韧」，而是「反脆弱」——从波动、压力、混乱中获益。风会熄灭蜡烛，却能使火越烧越旺。',
    hue: '#d97757',
    href: '/life/taleb/antifragile.html',
    status: 'live',
  },
  {
    slug: 'skin-in-the-game',
    no: '05',
    title: '非对称风险',
    titleEn: 'Skin in the Game',
    year: '2018',
    thesis:
      '不承担后果的人，没有资格做决定。别告诉我你怎么想，告诉我你的投资组合里有什么。没有「风险共担」，就没有进化。',
    hue: '#d96b6b',
    href: '/life/taleb/skin-in-the-game.html',
    status: 'live',
  },
];

/* Interest-based groups — placeholder. */
export const groups: Group[] = [
  {
    slug: 'tennis-club',
    emoji: '🎾',
    name: 'Auckland Tennis Club',
    interest: 'tennis',
    frequency: 'weekly',
    brief: 'Where the body project gets a sparring partner. Friday hits and Saturday matches.',
    status: 'active',
  },
  {
    slug: 'nz-investing',
    emoji: '📈',
    name: 'NZ 投资圈',
    interest: 'investing',
    frequency: 'monthly',
    brief: 'A small group of NZ-based 华人 trading notes on funds, tax brackets, and where to park money.',
    status: 'active',
  },
  {
    slug: 'ai-builders',
    emoji: '🤖',
    name: 'AI Builders Auckland',
    interest: 'AI · coding',
    frequency: 'fortnightly',
    brief: 'Coffee + code. Casual show-and-tell — bring whatever you are building, in whatever shape it is in.',
    status: 'active',
  },
  {
    slug: 'reading-circle',
    emoji: '📚',
    name: 'Auckland Reading Circle',
    interest: 'books',
    frequency: 'monthly',
    brief: 'One book a month, two hours on a Sunday, no agenda except actually reading.',
    status: 'active',
  },
];
