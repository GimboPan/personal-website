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
  /** Optional series (专辑) this piece belongs to — see `seriesDefs`. */
  seriesSlug?: string;
  /** When a piece belongs to MORE than one 专辑, list every series here. When
      present this is the complete list and supersedes `seriesSlug` (mirrors how
      `topics` supersedes `topicSlug`). */
  seriesSlugs?: string[];
  /** Generative thumbnail for the list preview (left media slot). Picks a
      geometric motif + accent + seed; rendered by <IdeaThumb />. */
  art?: {
    motif: 'orbit' | 'constellation' | 'bars' | 'spiral' | 'wave' | 'rings' | 'loop' | 'core' | 'team' | 'orchestrator' | 'ascent';
    accent: string;
    seed: number;
  };
}

export interface TopicDef {
  slug: string;
  label: string;
  sub: string;
}

/* ─── Series (专辑) ─────────────────────────────────────────────────────────
   A series groups articles that belong to one ongoing thread. Articles opt in
   via `seriesSlug`; the /ideas page renders one card per series and filters
   the list when clicked. Counts are derived — no manual updates. */
export interface SeriesDef {
  slug: string;
  label: string;
  sub: string;
  description: string;
}

export const seriesDefs: SeriesDef[] = [
  {
    slug: 'ai-voices',
    label: 'AI 前沿人物',
    sub: 'Voices in AI',
    description:
      '把站里这些「顶尖 AI 人物」的对谈/访谈导读收成一条线——学者、创造者、创业者各一种视角:李飞飞(World Labs,空间智能与「agency 是钥匙」)、Boris Cherny(Claude Code 创造者,写 Loop 不写代码)、Sahil Lavingia(Gumroad,几个人的公司)。读他们怎么判断 AI 的下一步,以及人在其中的位置。',
  },
  {
    slug: 'supply-chain-agent',
    label: '供应链 AI Agent',
    sub: 'Supply Chain × Agent',
    description:
      '一条进行中的线:从一个分销商沙盘出发,问到「AI 原生公司是什么」,再把愿景拧回地面——缩微模型、能跑的 Action Center、模拟 ERP 上的断言,最后接上真实工作的火线。信念 → 证据 → 信任,每一步都留一篇记录。',
  },
  {
    slug: 'company-form',
    label: '公司的形态',
    sub: 'The Shape of the Company',
    description:
      '公司不是永恒的。AI 把交易成本砍下来之后,这个工业化容器会变成什么样?一条追问公司形态的线:从「一人公司是不是真的」(真要把体验做好,最后大概是几个人),到把镜头拉到 800 年尺度——公司可能只是工业化的一段临时实验,正向 3–10 人收敛。它从哪来、会不会变小、退场之后留下什么。',
  },
];

export const articles: IdeaArticle[] = [
  {
    index: '14',
    title: 'Agency 就是那把钥匙 · 李飞飞 × MasterClass 创始人聊 AI 时代 · 视频导读',
    lede: '李飞飞(Fei-Fei Li,做出 ImageNet、现在创办 World Labs)和 David Rogier(MasterClass 创始人)的一场对谈。我读完整份字幕做成的视觉笔记——他们在反复讲同一个判断:在一个认知能力强到「自动我们的智能」的技术面前,决定你被甩下、还是被放大的,不是学历、不是岗位,而是 agency(能动性)。真正打动我的那句是李飞飞的「entrepreneurial 几乎就是 agency 的同义词」——你可以是专科医生、可以是 K12 老师,身份不重要,重要的是有没有勇气抓住工具、命令它、为自己所用。沿着字幕往下拆四块:① CEO 的工具栈已是他自己用 Claude Code 建的 app(含模仿他写信语气的 Davidify、一个超 1.5 天就逼你「现在做/扔掉/派人」的待办 app),造一个 app 从「几个月」掉到「一个周末」;② 别 vibe code 你的 dashboard——只有前端、不接真实数据,好用一小时然后就坏;③ 工作的杠铃效应:顶尖 1% 专才 + 高能动性通才,中间「还行」被抹平;④ 「智能成本归零」是不负责任的化约——人类还有感知/空间/物理/情感智能和创造力,LLM 只是语言这一块。再补上李飞飞的空间智能四件事(理解·推理·生成·交互,World Labs 攻 3D)、教育的分叉($80k/年→约 $100、用 AI 学省 60% 时间)、以及怎么练 agency(拒绝「求表扬」、人人都说好的点子大概不好)。给害怕 AI 的人的唯一建议:找一个 25 岁以下、你信任的孩子,牵你的手用一个周末。附我作为 builder 的一点批注:这几乎是我那套 AI 舰队的外部印证。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy', 'society'],
    href: '/ideas/agency-is-the-key.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-voices',
    art: { motif: 'ascent', accent: '#9fe870', seed: 14 },
  },
  {
    index: '13',
    title: '认知四象限 · 把「我不知道我不知道」变成一张能用的地图 · 图解深读',
    lede: '一句被拉姆斯菲尔德讲红、又被齐泽克补全的「认知绕口令」——已知的已知 / 已知的未知 / 未知的已知 / 未知的未知——其实是一套能用的自我觉察方法论。这篇先把它背后的两条轴立起来(横轴:我意识到了吗;纵轴:我到底有没有),用一支「黑屋子里的手电筒」把四个格子一次讲透,再补上它真正的来路(1955 乔哈里窗 → 2002 拉姆斯菲尔德只讲三格 → 齐泽克补第四格)。核心洞察是:左半边(①②)靠自省就能盘点,右半边(③④)是盲区,按定义照不到自己,只能被外力照亮。三个应用各配一张框架图:① 求职——把简历照成镜子,③④ 靠 Career Coach 显影,华人尤其要找「折射率不同」的本地(Kiwi)教练,因为你的④可能正是他的①;② 投资——最隐蔽的陷阱是把③(我以为我懂)当成①(真的懂),而④(黑天鹅)消除不了、只能靠仓位与冗余活下来;③ 人际——绝大多数误解都来自「我不知道对方不知道」。还拆开第三象限的两张脸(被埋没的天赋 vs. 不肯承认的自欺),用「学开车四阶段」④→②→①→③ 讲清象限会流动,最后收在一句递归的谦卑:这张地图本身也有盲区。',
    date: '2026.06',
    tags: ['Culture', 'Society'],
    topicSlug: 'culture',
    topics: ['culture', 'society'],
    href: '/ideas/cognition-four-quadrants.html',
    status: 'live',
    isNew: true,
    art: { motif: 'rings', accent: '#c96442', seed: 13 },
  },
  {
    index: '12',
    title: '极简创业操作手册 · 把《小而美》拆成 10 个能调用的 skill · 操作手册',
    lede: 'Sahil Lavingia 把《小而美 / The Minimalist Entrepreneur》亲手开源成了 10 个能在 Claude Code 里调用的创业参谋 skill(github.com/slavingia/skills),我把它们装进自己的 fleet——等于把一本书变成了一支创业参谋团队。这篇把它们按出场顺序串成一条从 0 到盈利的完整动线:① 找方向(find-community 不从点子开始而从你已属于的社区开始 + validate-idea 验证靠卖不靠造,附绿灯/红灯清单)→ ② 做出来(processize 先手动跑通的「魔法纸」、mvp 的四个动手问题、pricing 哪怕只收 1 块的零价格效应 + 财务自由算式:$10×200 客户=$2000/月,每工作日成交一个不到一年)→ ③ 卖出去(first-customers 的亲友/社区/陌生人销售同心圆、marketing-plan 的五步漏斗 + 教育/激励/娱乐三层内容 + 邮件才是自己的地)→ ④ 活下去(grow-sustainably 盈利即超能力、先用机器人再用人、default alive/dead、company-values 的 Gumroad 四条)→ ⑤ 持续校准(minimalist-review 的 8 问决策表)。一个普通人怎么不融资、不招人、从第一天就盈利地建一家小而美的公司。附我作为 builder 的三点批注:AI 把「手动→产品化」压扁了、这个网站本身就是一次极简创业、盈利即超能力对打工人也成立。',
    date: '2026.06',
    tags: ['Economy', 'Tech'],
    topicSlug: 'economy',
    topics: ['economy', 'tech'],
    href: '/ideas/minimalist-entrepreneur-playbook.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'company-form',
    art: { motif: 'bars', accent: '#9fe870', seed: 12 },
  },
  {
    index: '11',
    title: '公司可能是一个 300 年的临时实验 · 公司形态的过去与下一站 · 图解深读',
    lede: '独立开发者花叔的一篇小红书把一个我一直没想清的问题摆上台面:「公司」作为人类默认的组织形态,到底存在了多久?他翻完历史和经济学后给的答案是——满打满算,约 300 年。这是我读后的重述 + 自己画的 8 张逻辑图:从行会的 500 年(匠师嵌在一张行会·教会·家族的密网里,这张网替个人兜底)、到工业化抬高交易成本的三关(规模·资本·信任)催生了「公司」这个在匿名社会重造长期信任的容器、到科斯 1937 年那把双向的尺子(公司边界 = 内部协调成本 = 市场交易成本),最后把尺子反过来用:AI 系统性砍下交易成本,公司规模沿曲线下滑——但被「承诺」这条 AI 砍不动的地板拦在 3–10 人。结构在向 18 世纪的独立匠师复归,但匠师有行会兜底,今天的独立开发者没有。比「公司消失」更大的,是「员工」这个心智模型的消失——身份真空。结尾那句金匠的发问:「你的行会在哪儿?」我答不出来。附我作为供应链计划员 + builder 的三点批注。',
    date: '2026.06',
    tags: ['Economy', 'Tech'],
    topicSlug: 'economy',
    topics: ['economy', 'tech'],
    href: '/ideas/company-300-year-experiment.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'company-form',
    art: { motif: 'spiral', accent: '#ffd11a', seed: 11 },
  },
  {
    index: '10',
    title: '两次模拟,一条火线 · 从「公司是什么」到「周五选供应商」 · 复盘',
    lede: '两周里我做了两次供应链模拟。第一次(05.30)从「帮我模拟一个分销商」一路追问到「AI 原生公司是什么」——产出 deck 和研究报告,验证方式是推演自洽,它产出信念。第二次(06.11)方向反过来:把我自己的日常工作做成等比例缩微模型(3 医院 / 3 供应商 / 9 SKU,FCST·MM·BTO),克隆行业标杆做成能跑的 Action Center,再接上模拟的 D365 跑通 7 个场景 27 条断言——验证方式是 assertion,它产出证据。复盘这两次,我真正在找的答案只有一个:认知变免费之后,我的专业值钱在哪一段。两次模拟的共同盲区是「自己出题自己阅卷」,所以第三步不是第三次模拟,而是真实工作里的试点:一个供应商 × PO 确认段,shadow → assisted → 白名单,六周出数。信念 → 证据 → 信任。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy'],
    href: '/ideas/two-simulations.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'supply-chain-agent',
    art: { motif: 'orbit', accent: '#9fe870', seed: 10 },
  },
  {
    index: '09',
    title: '把人,安全地移出信任链 · Claude Code 一周年 × Boris · 专题',
    lede: '同一周,两支都来自 Claude Code 创造者团队的视频:团队的「一年回望」(Reflecting on a Year of Claude Code)和 Boris Cherny 的「未来判断」(#08)。两份完整字幕读完做成的专题——它们在讲同一件事:这一年所有的工程,本质是把人类一步步、安全地移出信任链。分三幕走:【退场】人怎么被一层层移走(交互对象从源码→agent→Loop、模型替人做更多、专业身份融化、维护杂活交给 routines)→【为什么敢退】把信任做成可证明的(验证从跑 lint 变成「run the thing」、classifier+红队+eval 证明 Auto 比人更安全、错误写进 CLAUDE.md 让 loop 永远跑不歪)→【退场之后】把文件柜扔掉让 Claude 坐到流程正中央,连「品味」也退场,剩下的只有价值观。「人类退场」一辑的压轴。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy'],
    href: '/ideas/claude-code-one-year.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-voices',
    art: { motif: 'loop', accent: '#38c8ff', seed: 9 },
  },
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
    seriesSlug: 'ai-voices',
    art: { motif: 'core', accent: '#9fe870', seed: 8 },
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
    seriesSlugs: ['company-form', 'ai-voices'],
    art: { motif: 'team', accent: '#38c8ff', seed: 7 },
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
    seriesSlug: 'supply-chain-agent',
    art: { motif: 'orchestrator', accent: '#9fe870', seed: 5 },
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
    art: { motif: 'ascent', accent: '#ffd11a', seed: 4 },
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
