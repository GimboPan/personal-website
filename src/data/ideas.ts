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
    slug: 'ai-log',
    label: 'AI 学习记录',
    sub: 'Learning the Latest AI',
    description:
      '一条持续更新的线:我对最新 AI 的学习记录。读到的每一样新东西——文章、访谈、发布、最佳实践——尽量不停在「看懂」,而是就地上手改一件自己的东西,把它变成能交出去的。重型的做成图解深读,零散的做成学习笔记,都收在这里。',
  },
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
    index: '22',
    title: '我搭的第一台自动机器,第一次就抓到了我自己的错 · 把 skill/workflow/loop 焊进一件真事 · 实操记录',
    lede: '前三篇(AI 学习记录 #01–03)我都在读 Anthropic 的 skill/workflow/loop 三篇、给自己的 skill 与舰队打分,结论高度一致:我擅长「生成」、不擅长「证伪」,全是「交出去」这一步没做够。这一篇是收官——我真把三样东西焊进了一件天天要做的真事(舰队里的投资简报官):给它加了一道「交付前自查闸」(来自 #01 skill 的自动 check)、一个专门唱反调的「红队」(来自 #02 workflow 的对抗式验证)、再挂成每周一次的本地循环(来自 #03 loop,数据不上云、触发为隐私留半手动)。三样加起来没写一行复杂代码,难的只是想清楚「一份合格的东西长什么样」「该从哪个角度拆自己的台」。然后按下试跑——第一次运行,这台机器就当面抓到我三个自欺:① 复读:我直接沿用了上一版的一个判断,而世界这周已经变了(self-preferential bias);② 越界:它差点催我做一件不可逆的事,被我自己定的纪律拦下、降级成「只起草、时点你定」;③ 假装完整:我在没看全数据时就想下结论,被逼着老实标「待核」。交付闸 5 条 4 过 + 1 带诚实标注放行,没有一个数被瞎填。落点:这三个自欺不是投资独有的,是每个人每天做决定都在犯的,过去唯一的区别是没有任何人任何机器会拦我——现在有了一个,它不比我聪明,只是不偏袒我。呼应《两次模拟》里招供过的「自己出题自己阅卷」:读→焊→跑,这一整圈才算真的闭上;学一样东西的终点不是看懂,是它开始替你干活还敢当面纠正你。全篇已脱敏,不含任何持仓/金额/涨跌。AI 学习记录第 4 篇,Anthropic 三件套小系列收官。',
    date: '2026.07',
    tags: ['Tech'],
    topicSlug: 'tech',
    href: '/ideas/first-machine.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-log',
    art: { motif: 'core', accent: '#9fe870', seed: 22 },
  },
  {
    index: '21',
    title: '我天天说「循环 > 派活」,其实我只是派了一次活 · 用 Loops 的四级阶梯给自己定位 · 学习笔记',
    lede: 'Anthropic 的《Getting started with loops》把 loop 定义成「agent 反复循环干活,直到满足停止条件」,分成四级:① 手动循环(turn-based,你 prompt 一次它干一次)② 目标循环(/goal,定义什么算成功、试几次就停)③ 定时循环(/loop 本地按间隔重跑、/schedule 挪云端)④ 自主循环(proactive,把 schedule+goal+skills+workflows+auto 拼起来长期跑)。真正戳中我的是一条暗线:这不是四种并列工具,是一部电梯——每升一级你就多交出去一件事:验证 → 停止条件 → 触发 → 连提示都不用。这正是我一直写的「把人安全地移出信任链」,终于有了能一级级踩的梯子。诚实自评:我把「循环>派活」写进了操作系统,身体却基本住一楼——整支舰队几乎都在 Lv1(还没几个 skill 带自动验证),/goal 几乎没用(停止条件一直攥自己手里),/loop 半分,Lv4 只有一条(Chief of Staff 每早自动出 briefing),证明做得到只是只做了一台。动手不贪四级、先升一级:把「投资简报」从手动派活升到定时循环——先补 Lv1 验证 skill、再用 /goal 交出停止条件、最后 /schedule 挂成每周云端例行,还叠上一篇的对抗验证当红队。三篇连起来是同一台机器的三个零件:skill 补坑、舰队补证伪、日常补循环,全是「交出去」这步没做够。落点:交出去的每一件事都得先值得信,信任不是省出来的,是一级级验出来的。AI 学习记录第 3 篇。',
    date: '2026.07',
    tags: ['Tech'],
    topicSlug: 'tech',
    href: '/ideas/getting-started-with-loops.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-log',
    art: { motif: 'loop', accent: '#ffd11a', seed: 21 },
  },
  {
    index: '20',
    title: '派活谁都会,难的是不让 AI「自己批自己的卷」· 用 dynamic workflows 给我的 AI 舰队做体检 · 学习笔记',
    lede: 'Anthropic 出了 dynamic workflows——让 Claude 遇到复杂任务时,自己现写一段 JS,临时搭一套多智能体编排(他们叫 harness):派几个子 agent、每个用什么模型、能不能各开一个干净工作区、断了能不能续跑。读的时候我一直点头,因为我早就手工搭了一个 harness——我的 AI 舰队(一个 Chief of Staff 扇出给投资/营销/健康/进化几个专职 agent)。文章说用 workflow 是为了从结构上治大模型干长活的三个老毛病:① 偷懒(半路宣布搞定,其实只做一半)② 自偏(要验证时偏袒自己的产出,自己出题自己阅卷)③ 跑偏(聊越久离最初目标越远)。再给七个可复用的编排套路:分类再派、扇出再合并、对抗式验证、多生成再筛、锦标赛两两对比、干到干净为止、智能分级路由。我拿这七招量自己的舰队+供应链沙盘:扇出合并(Chief of Staff)和分类再派(EVO)我天天在用只是不知道有名字,分级路由和 loop 各得半分,而对抗式验证是最大的洞——我的舰队全是「建设性」角色,没一个专门唱反调;供应链沙盘更是我在《两次模拟》里招供过的「邮件我造、规则我定、断言必然通过」,活生生的自偏。动手补四步:给舰队加个红队/审卷官、让别人给沙盘出脏数据边界场景、配 /goal+/loop+token 预算三个护栏、用 quarantine 隔离不可信邮件不给高权限。落点:我擅长生成不擅长证伪;认知免费之后,值钱的越来越是「有没有人诚实告诉你这里错了」——对抗式验证就是交出去前的最后一道自查。上一篇给 skill 补坑,这一篇给舰队补唱反调的人,同一件事。AI 学习记录第 2 篇。',
    date: '2026.07',
    tags: ['Tech'],
    topicSlug: 'tech',
    href: '/ideas/dynamic-workflows.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-log',
    art: { motif: 'team', accent: '#38c8ff', seed: 20 },
  },
  {
    index: '19',
    title: '我有 30 个 Skill,却没一个是「造」出来的 · 拿 Anthropic 的方法给自己的 Replen 打分 · 学习笔记',
    lede: 'Anthropic 的 Thariq Shihipar 写了篇《Lessons from building Claude Code: how we use skills》,把内部几百个 skill 的经验蒸馏成「好 skill 和平庸 skill 差在哪」。我没停在读后感——把自己那个供应链 skill「Replen」搬上手术台,拿他的判准逐条打分。文章先把 skill 分成 9 类(产品验证类对产出质量的可测量提升最大),再给出一串判准,我挑出对「会用、想做好」的人最要紧的八条:① 别说 Claude 已经知道的废话 ② Gotchas 坑清单是信息量最高的一段(作者原话)③ 门牌 description 写给模型看、塞触发词 ④ 分层按需展开 progressive disclosure ⑤ 给方向别写死 ⑥ 帮它记住(日志/JSON/SQLite)⑦ 存脚本别让它重造轮子 ⑧ 用 hooks 上保险。拿这八条量 Replen:门牌(带负向触发)、分层(references/cpim/)、不写死(判断框架而非死脚本)这三条它做对了;但真正把好坏分开的三样——坑、记忆、脚本——一样都没有,而它们恰好是「skill 生成器」吹不出来、只能亲手喂的。最狠的一刀是补 Gotchas:我从真实供应链工作刮出五条真·坑(前置期方差比需求方差更致命、MRP 看批量规则先于数量、「服务水平」fill rate vs 不缺货概率的双关、FEFO 撞上 WMS 默认 FIFO、牛鞭真凶是批量+促销+长 LT 而非终端需求),再配一个 safety_stock.py + 一个追加式参数日志。落点:生成一个 skill 很容易,「造」一个不容易;通用能力 Claude 自带,你的坑和判断才是护城河——认知变免费之后,专业值钱在「你踩过而它没踩过」的那一段。「AI 学习记录」第 1 篇。',
    date: '2026.07',
    tags: ['Tech'],
    topicSlug: 'tech',
    href: '/ideas/skill-scorecard.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-log',
    art: { motif: 'bars', accent: '#9fe870', seed: 19 },
  },
  {
    index: '18',
    title: 'Hyperliquid:把交易所做成链,再用真金白银回购自己 · 深度长文',
    lede: '接着「其他值得研究的 L1」往下钻,单独写一篇 Hyperliquid——周期四「应用拥有整条栈」迄今最强的实证。它不是「又一条更快的公链」,而是一家完全开在链上、却有中心化交易所级体验的永续交易所:把自己变成了 L1,再用约 97% 的真实手续费每天回购 HYPE。全文八节:① 是什么(为永续而生的 app-specific L1,链上能不能跑一个真正的交易所)② 架构(HyperBFT 共识 ~0.07s 最终性 + HyperCore 把订单簿/撮合/清算做成 L1 原生状态机 + 全链上 CLOB 而非 AMM + 清算三层兜底 HLP→保险基金→ADL)③ HyperEVM(2025/02,与 HyperCore 同共识同区块、read precompiles + CoreWriter 双向无信任读写——护城河 = 任意合约直接调用原生 CEX 级订单簿)④ 产品机制(把撮合/做市/清算/上币/开市场/前端分发全做成开放原语:HLP 社区金库、HIP-1 荷兰拍、HIP-3 建设者自部署永续、Builder Codes)⑤ 代币经济与回购飞轮(零 VC、11 人团队、~31% 推送式空投、Assistance Fund 约 97% 手续费回购、年化强度约市值 7% 是 ETH 销毁的 4–5 倍)⑥ app-specific L1 命题(与 dYdX v4 的控制变量对照、vs GMX/Jupiter「拥有链 vs 租用链」、对手其实是 CEX)⑦ 风险与争议(JELLY 事件 2025/03「裁判下场踢球」+ 验证者中心化/预言机/HLP 回撤+ADL/桥单点/飞轮顺周期五个投影)⑧ 多空辩论 + 诚实展望。全文经多智能体对抗式核查,份额/回购/收入等数字均标注为时点敏感快照。认知框架,非投资建议,不含任何个人持仓。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy'],
    href: '/ideas/hyperliquid.html',
    status: 'live',
    isNew: true,
    art: { motif: 'core', accent: '#9fe870', seed: 18 },
  },
  {
    index: '17',
    title: '四轮加密周期复盘 · 叙事、革命性技术与每轮的主导 Layer 1 · 图解深读',
    lede: '从 2013 到现在,加密走过四轮牛熊。我把它做成一份按「主导 Layer 1」这条主线串起来的复盘——每一轮各自的宏观背景、能让普通人听懂并驱动散户入场的主导叙事、当轮才成熟的革命性技术原语,以及最关键的:那一轮真正主导链上价值的公链是谁、谁在挑战。主线很清晰:独霸(比特币,「L1」概念还没诞生、它是事实上唯一的链)→ 一超(以太坊借 EVM/ERC-20 与 ICO 上位,把 BTC.D 从 ~87% 砸到 ~31%)→ 群雄(L1 大战:ETH 仍主导 DeFi/NFT 但 gas 危机外溢催生 BSC/Solana/Terra/Avalanche)→ 双极 + 锚回归(比特币靠现货 ETF 机构化、dominance 重回 65%,以太坊被自家 L2 吸血、Solana 从 FTX 废墟靠 memecoin 复活反超,形成双极)。还提炼了贯穿四轮的七条结构性规律(减半时钟、叙事逐层上移、每轮一个新原语点火、每轮顶部都有一场「最体面的暴雷」当墓碑、上一轮泡沫=下一轮地基、主导权高度黏滞、挑战者高死亡率)和一组纪律型投资启示。全文事实经一套多智能体流程逐轮对抗式核查(4 研究 + 4 核查 + 2 综合 agent),价格/份额/日期都用核过的口径。文末还内嵌了一章「技术沉淀」延伸:以太坊(模块化/L2-rollup)与 Solana(单体/scale-up)两条技术栈按七层对照,各自在熊市里沉淀下来、还活着还在用的技术(ETH:Rollup/OP Stack、EIP-4844 blobs、再质押 EigenLayer、ERC-4337、DeFi 乐高+RWA;Solana:PoH/Sealevel 八件套+Firedancer、去 FTX 化重建的 Jupiter/Jito、状态压缩、pump.fun、DePIN),并对 Base 这条 L2 做了专题——为什么它没自己造轮子、而是站在 Optimism 的 OP Stack 上、无原生代币却靠真实活跃度领跑(澄清:领先的是链上活跃度,绝对 TVL 仍是 Arbitrum 第一),最后落到 ETH/Solana 两条路线的趋同与各自护城河。再加一章「ETH/Solana 之外还有哪些 L1 值得研究」——把 Sui/Aptos(Move 系)、Hyperliquid(app-specific L1)、Cosmos/Celestia、并行 EVM(Monad/MegaETH)、TON/Tron/BNB(分发派)、Berachain/Cardano/Polkadot(强叙事弱生态的反面教材)分成四档,提炼七种「新架构押注」+ Sui×Aptos 同源孪生对决。认知框架,非投资建议,不含任何个人持仓。',
    date: '2026.06',
    tags: ['Economy', 'Tech'],
    topicSlug: 'economy',
    topics: ['economy', 'tech'],
    href: '/ideas/crypto-four-cycles.html',
    status: 'live',
    isNew: true,
    art: { motif: 'orbit', accent: '#ffd11a', seed: 17 },
  },
  {
    index: '16',
    title: 'AI 不会取代你,用 AI 的人会 · 把两本书熔成一个职场跃迁 skill · 操作手册',
    lede: '读书会发下来两本讲「AI 时代怎么工作」的书:LinkedIn CEO 的《Open to Work》和 McKinsey 的《Agents, Robots, and Us》。我没停在写读后感——把两本完整读完、蒸馏,熔成了一个职场跃迁教练 Navi,并开源:用 Claude 的人 clone 成 skill,不用 Claude 的人直接在 ChatGPT 里打开 Custom GPT 版就能聊。这篇是它的操作手册。两本书正好互补:报告给「人机到底怎么分工」的硬数据(57% 工作小时理论上可自动化、但 72% 的技能落在「人机伙伴区」、AI fluency 需求两年涨近 7 倍、最有价值的人正从 executor 变成 orchestrator/validator),书给「人怎么重新定位自己」的那一面(5C 人类能力、把工作拆成三桶的任务自评、职业是攀岩墙不是梯子、anxiety→agency→aspiration 的情绪弧)。核心是把这一切收成一条一次只爬一级的 6 级阶梯:L0 焦虑回避者 → L1 AI 使用者 → L2 任务架构师 → L3 编排者/验证者 → L4 人类优势创新者 → L5 新型职场人,每级都有认知转变、动手练习和升级判据。贯穿全篇的校准是同一句:自动化冲着任务来不冲着头衔(放射科医生在 AI 大举进入后就业还年增约 3%),真正的风险不是 AI 取代你,是「用 AI 的人」取代你——这条阶梯就是让你成为那个人。附 builder 批注:这又是一次「把读到的变成能交出去的」。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy', 'society'],
    href: '/ideas/ai-native-professional.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-log',
    art: { motif: 'ascent', accent: '#9fe870', seed: 16 },
  },
  {
    index: '15',
    title: '能力已经到了,差的是把它用起来的速度 · Code with Claude 伦敦 2026 现场笔记 · 现场笔记',
    lede: 'Anthropic 第一次把 Code with Claude 开到旧金山之外——伦敦站,24 场讲座。我把整个播放列表逐场拉出完整字幕、读完,做成这份现场笔记(全 24 场已整理)。贯穿全场那句话来自开场 keynote:能力其实早就到位了,真正剩下的差距是我们把它用起来有多快(平台 API 调用量同比 17×、人均每周用 20+ 小时、12 个月出 8 个前沿模型)。先提炼贯穿全场的 9 条主线——① 指数 vs 线性(为下一个模型设计)② 编程不再是瓶颈(敢审敢杀旧流程)③ 能力来自工具不是指令(每次新模型砍掉缝合怪 prompt)④ eval 是进步的单位(按「每个成功结果最便宜」选模型、警惕饱和 eval)⑤ 思考是杠杆不是开关 ⑥ 基础设施才是新约束(Managed Agents 原语+自托管沙箱+MCP tunnel)⑦ Memory+Dreaming 组织级自学习 ⑧ 上下文即护城河(被治理的 skills)⑨ 从工具到队友(routines/验证循环/council 评审/远程遥控)——再按 6 大主题逐场拆讲者·主旨·要点·数字·金句:keynote、AI 原生工程组织、prompting playbook、选模型/thinking lever、capability curve、记忆与做梦、托管 agent、Beyond the basics/Stop babysitting/What\'s new、Foundry/AWS/Google Cloud、以及 Man Group(自动交易信号)、Legora(法律)、Lovable、Spotify(2.5M 自动 PR)、Delivery Hero(Hurigen council 85%)、Base44(一人到 80)等客户故事。',
    date: '2026.06',
    tags: ['Tech', 'Economy'],
    topicSlug: 'tech',
    topics: ['tech', 'economy'],
    href: '/ideas/code-with-claude-london-2026.html',
    status: 'live',
    isNew: true,
    seriesSlug: 'ai-log',
    art: { motif: 'constellation', accent: '#9fe870', seed: 15 },
  },
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
    seriesSlugs: ['ai-voices', 'ai-log'],
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
    seriesSlugs: ['ai-voices', 'ai-log'],
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
    seriesSlugs: ['ai-voices', 'ai-log'],
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
  '2026.07',
  '2026.06',
  '2026.05',
  '2026.04',
  '2026.03',
  '2026.02',
  '2026.01',
];
