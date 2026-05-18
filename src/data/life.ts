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

export interface Group {
  slug: string;
  emoji: string;
  name: string;
  interest: string;
  frequency: string;
  brief: string;
  status: 'active' | 'dormant';
}

/* Reading list — currently on (or near) the table. */
export const books: Book[] = [
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
  {
    slug: 'next-conversation',
    title: 'The Next Conversation',
    author: 'Jefferson Fisher',
    tags: ['communication', 'relationships', 'argument'],
    brief: "Argue less, talk more. Fisher (a litigator-turned-communicator) on getting to the conversation that actually matters.",
    thoughts: "The bit on pausing before responding earns its keep on its own. The rest is bonus.",
    coverUrl: '/next-conversation.webp',
  },
  {
    slug: 'be-you-be-true',
    title: '活出你的本來面目',
    author: '鐘穎',
    tags: ['psychology', 'jungian', 'self'],
    // TODO: 用户改成自己语气的一句话
    brief: '一本献给现代人的荣格心灵指南——在有限的人生里，剥开角色与期待，活出本来面目的真正意义。',
    // TODO: 用户改成自己读后的真实感想
    thoughts: '提醒自己：每一次"应该"背后，都藏着一个被让位的"我想"。',
    coverUrl: '/book11.webp',
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
