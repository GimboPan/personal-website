/* ─── Fitness modules ──────────────────────────────────────────────────────
   Single source of truth for the four /fitness/<module> sub-pages. Each entry
   is rendered by the dynamic route src/pages/fitness/[module].astro — add a
   module here and its page builds automatically. */

export interface FitnessArticle {
  index: string;
  title: string;
  lede: string;
  status: 'live' | 'wip' | 'planned';
  href?: string;
  date?: string;
  tags?: string[];
}

export interface FitnessModule {
  /** URL slug — page builds at /fitness/<slug> */
  slug: string;
  /** <BaseLayout> metadata */
  meta: { title: string; description: string; ogImage: string };
  /** <SectionHero> props */
  hero: {
    index: string;
    kicker: string;
    title: string[];
    subtitle: string;
  };
  articles: FitnessArticle[];
}

export const fitnessModules: FitnessModule[] = [
  {
    slug: 'tennis',
    meta: {
      title: "Tennis Buddy — Fitness — Gimbo's Universe",
      description:
        'Match logs, hitting partners, drill notes — building a small app for finding and tracking court time.',
      ogImage: '/og-fitness.jpg',
    },
    hero: {
      index: '02.1',
      kicker: 'Fitness · Module 01 · Tennis Buddy',
      title: ['On the court,', 'I am present.'],
      subtitle:
        'Match logs, hitting partners, drill notes, NTRP-tagged sessions. The articles below track the build and the practice — both.',
    },
    articles: [
      {
        index: '01',
        title: 'Tennis Buddy v1 — what shipped (project retrospective)',
        lede: 'End-to-end build retro: a tennis social + match-tracking app, taken from concept to production by one person. React 19 + Supabase + Vercel, Roland-Garros visual identity over Material 3 mechanics, 37 design frames, 5 live tabs, magic-link auth, RLS-secured data, git-push-to-deploy. Pitch, stack, architecture diagram, outcomes, and the three lessons I want to keep.',
        status: 'live',
        href: '/fitness/tennis-buddy.html',
        date: '2026-05',
        tags: ['retrospective', 'build log', 'shipped'],
      },
      {
        index: '02',
        title: 'Why I am building Tennis Buddy',
        lede: "Three years of bouncing between WhatsApp groups, court-booking apps, and a notes file called partners.txt. The problem isn't finding tennis — it is keeping the same hitting partner long enough for either of you to actually improve. So I am building the smallest possible app that solves that.",
        status: 'planned',
        date: '2026-Q2',
        tags: ['intro'],
      },
      {
        index: '03',
        title: 'Match Log v0 — fields, not features',
        lede: 'The first version of the match log has five fields and no charts. Date, opponent, NTRP, surface, score. Notes are free text. I am resisting the temptation to add a serve-percentage tracker before I have logged ten matches by hand and know what I actually want to see at the end of the year.',
        status: 'planned',
        date: '2026-Q2',
        tags: ['build log'],
      },
      {
        index: '04',
        title: 'NTRP self-rating — honest at 3.5',
        lede: 'Most adult-rec players over-rate themselves by half a notch. I have hit with 4.0s and gotten dismantled, and I have hit with 3.0s and walked off bored. After 50 matches the honest answer is 3.5 — steady forehand, weak backhand under pressure, serve that lives and dies by my second-toss height.',
        status: 'planned',
        date: '2026-Q2',
        tags: ['self-eval'],
      },
    ],
  },
  {
    slug: 'nutrition',
    meta: {
      title: "Nutrition — Fitness — Gimbo's Universe",
      description:
        'What I eat, when, and why. Tracking intake against training load and NZ-grocery realities.',
      ogImage: '/og-fitness.jpg',
    },
    hero: {
      index: '02.2',
      kicker: 'Fitness · Module 02 · Nutrition · 营养',
      title: ['Food is fuel.', 'Also memory.'],
      subtitle:
        'What I eat, when, and why — tracked against training load and the long game, not the next 6-pack.',
    },
    articles: [
      {
        index: '01',
        title: 'The NZ-grocery reality check',
        lede: "Most online nutrition advice assumes a US Trader Joe's pantry. In Auckland, half those ingredients are either three times the price, seasonal-only, or labelled differently. This is the working list of substitutions I made over twelve months to stop fighting the supermarket and start eating well within it.",
        status: 'planned',
        date: '2026-Q2',
        tags: ['groceries'],
      },
      {
        index: '02',
        title: 'Protein on a training day — what 1.8g/kg actually looks like',
        lede: 'The number is easy to quote and hard to hit without thinking. For an 80kg body that is 144g of protein per day, every day, including the days when I just want toast. Here is what a Tuesday on-court looks like when I actually count it — and the three meal patterns I rotate to make it boring enough to be sustainable.',
        status: 'planned',
        date: '2026-Q2',
        tags: ['protein', 'tracking'],
      },
      {
        index: '03',
        title: 'Why I stopped tracking calories (and what I track instead)',
        lede: 'I tracked every calorie for eighteen months and learned exactly one useful thing: that I under-ate protein on rest days and over-ate carbs the night before a hitting session. Once I knew that, the spreadsheet was friction. Now I track three things and ignore the rest.',
        status: 'planned',
        date: '2026-Q3',
        tags: ['habits'],
      },
    ],
  },
  {
    slug: 'strength',
    meta: {
      title: "Strength — Fitness — Gimbo's Universe",
      description:
        'Compound lifts, mobility work, recovery protocols. A hedge against everything tennis breaks down.',
      ogImage: '/og-fitness.jpg',
    },
    hero: {
      index: '02.3',
      kicker: 'Fitness · Module 03 · Strength · 力量训练',
      title: ['Lift the body', 'tennis wears out.'],
      subtitle:
        'Compound lifts, mobility work, recovery protocols. Volume tracking and progression as a hedge against everything tennis breaks down.',
    },
    articles: [
      {
        index: '01',
        title: 'The four lifts I keep coming back to',
        lede: 'After cycling through eight different programs in three years I have settled on four movements that earn their slot regardless of phase — trap-bar deadlift, goblet squat, single-arm dumbbell row, and overhead press. Everything else is seasoning. Here is the case for each and why I picked these variations over the textbook versions.',
        status: 'planned',
        date: '2026-Q2',
        tags: ['programming'],
      },
      {
        index: '02',
        title: 'Strength for tennis — the four mistakes I made first',
        lede: 'I tried to train like a powerlifter for two years before realising tennis is not a max-effort sport. It is repeated near-max effort, recoverable inside a 20-second window, for three hours. The mistakes I made — heavy bench press, low-rep barbell squats, no rotational work, no single-leg work — all came from copying programs written for a different sport.',
        status: 'planned',
        date: '2026-Q3',
        tags: ['mistakes', 'tennis'],
      },
      {
        index: '03',
        title: 'A 40-minute home gym that actually gets used',
        lede: 'The cheapest gym in the world is the one in the garage that you actually walk into. Mine is one adjustable bench, a pair of adjustable dumbbells, a trap bar, a pull-up bar, and a yoga mat. Total cost about NZD 1,200 over four years. Total sessions: way more than the commercial-gym membership it replaced.',
        status: 'planned',
        date: '2026-Q3',
        tags: ['gear', 'home gym'],
      },
    ],
  },
  {
    slug: 'core',
    meta: {
      title: "Core & Stability — Fitness — Gimbo's Universe",
      description:
        'Anti-rotation, anti-extension, single-leg balance. The quiet engine behind every groundstroke and every lift.',
      ogImage: '/og-fitness.jpg',
    },
    hero: {
      index: '02.4',
      kicker: 'Fitness · Module 04 · Core & Stability · 核心与稳定性',
      title: ['The quiet engine', 'under every shot.'],
      subtitle:
        'Anti-rotation, anti-extension, single-leg balance. The part nobody trains until something tears.',
    },
    articles: [
      {
        index: '01',
        title: 'Core is not abs — and why that distinction matters',
        lede: 'For ten years I trained "core" as a synonym for "abs" — crunches, sit-ups, leg raises. Then a physio watched me serve and said the reason my lower back hurt at the end of every match was that nothing between my ribs and my hips was actually holding me together. Core is anti-rotation, anti-extension, anti-lateral-flexion. The visible muscle is the smallest part of the job.',
        status: 'planned',
        date: '2026-Q2',
        tags: ['intro', 'mindset'],
      },
      {
        index: '02',
        title: 'The five movements I run twice a week',
        lede: 'After three rounds of trying complicated programs I cut the core block down to five moves that I can run in fifteen minutes with no equipment besides a mat and a band: dead bug, bird dog, Pallof press, side plank with reach, and Copenhagen plank. Each one trains a specific anti- pattern. I do all five, twice a week, every week. No periodisation. No deload. Just five moves.',
        status: 'planned',
        date: '2026-Q2',
        tags: ['program', 'minimalism'],
      },
      {
        index: '03',
        title: 'Single-leg balance — the test I failed for two years',
        lede: 'Stand on one leg, close your eyes, set a timer. Most adults under 50 should be able to do thirty seconds. I could do six. For two years I thought my forehand was timing-related; turns out my forehand was balance-related, and my balance was non-existent because I sat at a desk all day and trained both legs symmetrically every gym session. The fix took six months and one minute a day.',
        status: 'planned',
        date: '2026-Q3',
        tags: ['balance', 'tennis'],
      },
    ],
  },
];
