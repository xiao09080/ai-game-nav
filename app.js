/* =========================================================
   AI小游戏导航站 · 数据与渲染
   纯静态、零依赖。内容基于 2026-08 行业研究整理。
   ========================================================= */

/* ---------- 工具平台库（均附官网 + 一句话简介） ---------- */
const TOOLS = [
  {
    name: "SOON",
    tagline: "AI 小游戏全栈平台，生产+上架+分成闭环",
    tags: ["平台", "分发", "变现", "免费入驻"],
    free: true,
    note: "预设师分成 + 创作者社区流量，一条龙解决「做了游戏怎么卖」。最适合想在国内小游戏生态快速变现的人。",
    link: "https://soon.games"
  },
  {
    name: "Rosebud AI",
    tagline: "一句话 Prompt 直接出 Web 可玩原型",
    tags: ["生成式", "原型", "免费档"],
    free: true,
    note: "出 Web 原型最快，但缺深度与导出能力。适合做玩法验证，不适合直接做完整商业游戏。",
    link: "https://www.rosebud.ai"
  },
  {
    name: "TapTap 制造",
    tagline: "无代码 + AI，内置 TDS 服务与 TapTap 流量",
    tags: ["无代码", "分发", "免费"],
    free: true,
    note: "TDS 内置账号/防沉迷/云存档/联机，免费开放且自带 TapTap 流量红利。偏独立发行与社区向。",
    link: "https://www.taptap.cn"
  },
  {
    name: "Godogen",
    tagline: "一句话生成 Godot 4 完整工程 + 开源 AI 助手",
    tags: ["引擎", "生成式", "开源", "免费"],
    free: true,
    note: "产出是「可维护的真实工程」而非视频帧，能调数值、迭代逻辑、打包发布。只覆盖生产段，变现/分发要自己补。",
    link: "https://github.com/search?q=godogen"
  },
  {
    name: "GDevelop",
    tagline: "开源无代码 + AI，导出覆盖最广",
    tags: ["无代码", "开源", "免费"],
    free: true,
    note: "导出目标全覆盖（Web/移动/桌面/Steam），学习曲线比纯提示词工具缓。适合零基础做出完整游戏。",
    link: "https://gdevelop.io"
  },
  {
    name: "The9bit",
    tagline: "AI 游戏创作与分发平台",
    tags: ["平台", "分发", "变现"],
    free: false,
    note: "全栈式 AI 游戏平台，与 SOON 类似提供创作到分发链路。具体分成政策需注册查看。",
    link: "https://www.the9bit.com"
  },
  {
    name: "Suno",
    tagline: "AI 生成华语/英文情歌与 BGM，做游戏配乐",
    tags: ["素材", "音乐", "免费档"],
    free: true,
    note: "零成本产出情绪配乐、BGM 与主题曲，直接喂给游戏。做游戏音效的零成本利器。",
    link: "https://suno.com"
  },
  {
    name: "微信小游戏开放平台",
    tagline: "国内小游戏上架与变现主渠道（MAU 5亿+）",
    tags: ["分发", "平台", "变现"],
    free: false,
    note: "IAA/IAP 接入、激励视频 eCPM 80–150 元的来源。个人可注册，纯广告零资质门槛（软著+备案）。",
    link: "https://game.weixin.qq.com"
  },
  {
    name: "抖音小游戏开放平台",
    tagline: "内容驱动增长最快的渠道（DAU +130%）",
    tags: ["分发", "平台", "变现"],
    free: false,
    note: "短视频素材→玩法验证→爆款传播；直播弹幕互动开发者分成约 8%，零买量。新平台地址 developer.open-douyin.com。",
    link: "https://developer.open-douyin.com"
  },
  {
    name: "腾讯代号 Craft",
    tagline: "腾讯首曝 AI 游戏创作平台，自然语言生成 2D/3D",
    tags: ["零代码", "生成式", "大厂"],
    free: true,
    note: "一句话生成可运行游戏雏形，内置 AIGC 工具链、免费开放超万种预制美术资产。暂无独立官网，微信搜公众号「代号Craft」申请首测。",
    link: "https://ai-bot.cn/project-craft"
  },
  {
    name: "百度秒哒",
    tagline: "百度无代码平台，一句话生成小游戏/网页/小程序",
    tags: ["零代码", "生成式", "免费"],
    free: true,
    note: "无代码编程 + 多智能体协作，自然语言即可制作小游戏。已全量上线，官网 miaoda.cn。",
    link: "https://www.miaoda.cn"
  },
  {
    name: "233工坊",
    tagline: "对话式做游戏，一键发布 233 乐园",
    tags: ["零代码", "生成式", "分发", "免费"],
    free: true,
    note: "AI 全链路赋能的一站式创作工作台，零基础也能独立做出完整可玩游戏。1.9 万创作者，自带分发社区。",
    link: "https://maker.ark.online"
  },
  {
    name: "咪咕 AI智造",
    tagline: "中国移动旗下，自然语言生成可玩小游戏",
    tags: ["零代码", "生成式", "大厂"],
    free: true,
    note: "面向用户的 AI 游戏创作发行平台，意图理解到一键发布的端到端闭环，千亿级流量扶持。隶属咪咕游戏。",
    link: "https://www.migu.cn"
  },
  {
    name: "CodeBuddy",
    tagline: "腾讯云官方 AI 编程，1 小时生成小游戏",
    tags: ["AI编程", "免费档"],
    free: true,
    note: "搭配 CloudBase AI ToolKit 可一键部署上云，适合「路线 B」愿学 2–4 周、想自己写逻辑的开发者。",
    link: "https://www.codebuddy.ai"
  },
  {
    name: "Cursor",
    tagline: "AI 原生代码编辑器，效率拉满",
    tags: ["AI编程"],
    free: false,
    note: "基于大模型的编程助手，配合 Cocos/Godot 写游戏逻辑极顺手。个人免费档可用，进阶订阅付费。",
    link: "https://cursor.com"
  },
  {
    name: "Cocos Creator",
    tagline: "免费游戏引擎，一键导出微信/抖音",
    tags: ["引擎", "免费"],
    free: true,
    note: "国内小游戏最主流的免费引擎，官方模板+社区丰富，导出微信/抖音几乎零摩擦。",
    link: "https://www.cocos.com"
  },
  {
    name: "即梦",
    tagline: "字节 AI 生图/视频，做游戏美术素材",
    tags: ["美术", "免费档"],
    free: true,
    note: "中文友好、出图快，适合生成角色立绘、场景概念图、宣传图。做游戏视觉的零成本首选之一。",
    link: "https://jimeng.jianying.com"
  },
  {
    name: "Midjourney",
    tagline: "高质量 AI 生图，偏风格化美术",
    tags: ["美术", "付费"],
    free: false,
    note: "画面质感行业顶尖，适合做高审美角色/场景。需订阅，适合对美术品质要求高的项目。",
    link: "https://www.midjourney.com"
  },
  {
    name: "剪映 AI",
    tagline: "短视频成片，做游戏获客素材",
    tags: ["素材", "视频", "免费"],
    free: true,
    note: "把游戏录屏一键剪成 Hook 短视频，是抖音/视频号引流的标配。AI 文案与素材库很省事。",
    link: "https://www.capcut.cn"
  },
  {
    name: "CloudBase 云开发",
    tagline: "腾讯云后端，按量计费免运维",
    tags: ["后端", "免费档"],
    free: true,
    note: "账号/存档/排行榜/云函数一站搞定，新手免服务器。配合 CodeBuddy 可自动部署，月成本 0–30 元。",
    link: "https://cloud.tencent.com/product/tcb"
  }
];

/* ---------- 成熟变现案例 ---------- */
const CASES = [
  {
    name: "《脑洞怪物大乱斗》",
    platform: "SOON 平台",
    cycle: "14 天",
    cost: "< 2 万元",
    result: "9 天获 2.5 万用户，已盈利",
    tags: ["平台赋能", "休闲"],
    note: "验证「全栈平台 + AI 生产」能在一个月内跑通从 0 到盈利。"
  },
  {
    name: "《大厂模拟器》",
    platform: "零代码开发者",
    cycle: "7 天业余",
    cost: "≈ 0",
    result: "首日 5 万 PV，已盈利",
    tags: ["零代码", "个人开发者"],
    note: "证明一个人、零预算也能做出有流量的小游戏。"
  },
  {
    name: "《明月宫心》",
    platform: "三七互娱",
    cycle: "10 天",
    cost: "AI 全要素生产",
    result: "两代迭代验证可扩展性",
    tags: ["大厂", "AI全要素"],
    note: "传统厂商用 AI 压缩研发周期、快速试错的标杆案例。"
  },
  {
    name: "《别崩人设啊》",
    platform: "AI 漫剧",
    cycle: "7 天",
    cost: "AI 流水线",
    result: "抖音 TOP2，但 2.5 月跌出 TOP100",
    tags: ["AI漫剧", "互动"],
    note: "爆款来得快去得也快——留存是最大坑，也是最大机会。"
  },
  {
    name: "《Suck Up!》",
    platform: "AI NPC 游戏",
    cycle: "14 天",
    cost: "零营销",
    result: "YouTube 过亿播放",
    tags: ["AI NPC", "海外"],
    note: "AI NPC 自由对话本身就是传播点，零投放靠内容裂变。"
  },
  {
    name: "《AI成语消除》",
    platform: "独立开发者",
    cycle: "3 天",
    cost: "≈ 0",
    result: "月入 4.1 万",
    tags: ["独立开发者", "IAA"],
    note: "小品类 + AI 辅助，极致低成本跑通广告变现。"
  },
  {
    name: "《超自然行动组》",
    platform: "AI NPC",
    cycle: "—",
    cost: "—",
    result: "验证 AI NPC 可作核心玩法",
    tags: ["AI NPC", "核心玩法"],
    note: "把 AI 对话从「锦上添花」变成「玩法骨架」的商业化验证。"
  },
  {
    name: "微信小游戏大盘",
    platform: "赛道级",
    cycle: "2025",
    cost: "—",
    result: "总收入 535 亿（+34%）",
    tags: ["赛道", "数据"],
    note: "300+ 款季度流水超千万，1400+ 开发者广告收入超百万——盘子足够大。"
  },
  {
    name: "《箭头快跑呀》",
    platform: "微信 IAA",
    cycle: "业余时间",
    cost: "AI约$20/月 + 服务器百元级",
    result: "合规上架微信，激励广告变现",
    tags: ["AI编程", "IAA", "单人", "微信"],
    note: "3 套主题×30 关 + 收集解锁 + 三层榜单 + 运营后台；可复制：轻量技术栈、固定参考图锁风格、AI 批量关卡 + 校验、激励广告只做刚需场景。"
  },
  {
    name: "张sir · 弹幕互动游戏",
    platform: "抖音直播",
    cycle: "15 天 / 款",
    cost: "单款约 1500 元",
    result: "年总流水近 2000 万，到手 80–100 万",
    tags: ["弹幕", "IAP", "直播"],
    note: "一人 6 款弹幕游戏流水线；可复制：15 天周期、低成本试错、矩阵思维。门槛：需游戏行业判断力 + 直播生态资源。"
  },
  {
    name: "《中华食肆》",
    platform: "学生独立",
    cycle: "200 小时",
    cost: "Token 约 $400",
    result: "ChinaJoy 现场获发行商接洽",
    tags: ["学生", "独立", "经营"],
    note: "903 个 AI 素材 + 330+ 段 AI 语音 + 1207 项代码；可复制：「人是制作人，AI 是员工」的分工法。"
  }
];

/* ---------- 数据情报 ---------- */
const DATA = [
  { v: "535亿", s: "2025 小程序游戏总收入", up: "+34%" },
  { v: "5亿", s: "微信小游戏月活 MAU" },
  { v: "1亿+", s: "微信小游戏日活 DAU" },
  { v: "+130%", s: "抖音小游戏 DAU 增速", up: "+130%" },
  { v: "300+", s: "季度流水超千万的款数" },
  { v: "1400+", s: "广告收入超百万的开发者" },
  { v: "68% / 32%", s: "收入结构：IAP 内购 / IAA 广告" },
  { v: "80–150元", s: "激励视频 eCPM（国内）" },
  { v: "130%", s: "微信首发新游最高综合到手", up: "激励" },
  { v: "400亿", s: "2026 AI 漫剧预期市场", up: "+138%" }
];

/* ---------- 本周新增 · 游戏平台推荐 ---------- */
const WEEKLY_NEW = [
  {
    name: "腾讯代号 Craft",
    tagline: "腾讯首曝 AI 游戏创作平台",
    tags: ["零代码", "大厂", "NEW"],
    free: true,
    why: "自然语言生成 2D/3D 可玩雏形，内置 AIGC 工具链 + 免费万种美术资产，近期开启首测。",
    note: "背靠腾讯游戏资源，零门槛也能产出可玩游戏；微信搜公众号「代号Craft」申请体验。",
    link: "https://ai-bot.cn/project-craft"
  },
  {
    name: "百度秒哒",
    tagline: "一句话生成小游戏/网页/小程序",
    tags: ["零代码", "免费", "NEW"],
    free: true,
    why: "百度无代码平台已全量上线，多智能体协作，自然语言即可做出小游戏，零成本创业首选。",
    note: "应用广场含游戏分类，社区可发布作品获浏览与收藏，适合纯小白起步。",
    link: "https://www.miaoda.cn"
  },
  {
    name: "233工坊",
    tagline: "对话式做游戏，一键发 233 乐园",
    tags: ["零代码", "分发", "NEW"],
    free: true,
    why: "AI 全链路一站式创作，最快 1 天上线，自带 1.9 万创作者社区与分成激励。",
    note: "「一句话就能做游戏」，不懂代码/美术也能做出完整可玩游戏，发布即同台亮相。",
    link: "https://maker.ark.online"
  },
  {
    name: "咪咕 AI智造",
    tagline: "中国移动旗下 AI 游戏创作发行平台",
    tags: ["零代码", "大厂", "NEW"],
    free: true,
    why: "自然语言生成可玩、一键发布社区，投入 1000万+ 创作激励与千亿级流量扶持。",
    note: "依托中国移动算力与用户能力，开放游戏工坊/资源体系/创作生态三大模块。",
    link: "https://www.migu.cn"
  },
  {
    name: "CodeBuddy",
    tagline: "腾讯云官方 AI 编程，1 小时出游戏",
    tags: ["AI编程", "免费档", "NEW"],
    free: true,
    why: "搭配 CloudBase 一键部署上云，是「路线 B（微信 IAA）」愿学 2–4 周人群的生产力核心。",
    note: "从需求到可运行小游戏的端到端生成，官方教程友好，新手可快速上手。",
    link: "https://www.codebuddy.ai"
  },
  {
    name: "Cocos Creator",
    tagline: "免费引擎，一键导出微信/抖音",
    tags: ["引擎", "免费", "NEW"],
    free: true,
    why: "国内小游戏最主流免费引擎，官方模板丰富，导出微信/抖音几乎零摩擦，AI 编程友好。",
    note: "想自己写逻辑又不想被引擎绑架，Cocos 是性价比最高的起点。",
    link: "https://www.cocos.com"
  }
];

/* ---------- AI 技能商店（成熟制作技能精选） ---------- */
/* score：买购网《十大AI游戏平台排行(2026)》综合指数；编辑评估=多源口碑参考分 */
const SKILLS = [
  { name: "SOON AI", score: 92.0, src: "买购网", tags: ["平台", "生成式", "分发", "免费入驻"], free: true,
    tagline: "国内头部全链路 AI 游戏工业化创作平台",
    note: "一句话/视频生成完整可商用游戏，适配微信/手游/Steam 多渠道上线。综合指数 92.0，榜单第一。",
    link: "https://soon.games" },
  { name: "腾讯代号 Craft", score: 90.4, src: "买购网", tags: ["零代码", "生成式", "大厂", "免费"], free: true,
    tagline: "腾讯官方对话式 AI 游戏创作工具",
    note: "自然语言生成 2D/3D 游戏内容，内置两万余款官方免费资产库，适配腾讯系渠道。综合指数 90.4。",
    link: "https://ai-bot.cn/project-craft" },
  { name: "TapTap 制造", score: 88.8, src: "买购网", tags: ["无代码", "生成式", "分发", "免费"], free: true,
    tagline: "TapTap 旗下零门槛 AI 游戏创作智能体",
    note: "纯自然语言生成全套游戏代码，一键直连 TapTap 商店上架分发。综合指数 88.8。",
    link: "https://www.taptap.cn" },
  { name: "Unity Muse / Sentis", score: 87.2, src: "买购网", tags: ["引擎AI", "大厂", "付费"], free: false,
    tagline: "Unity 官方 AI 工业化开发套件",
    note: "Muse 负责编辑器内容生产，Sentis 负责游戏端内 AI 推理，大中型项目主流增效工具。综合指数 87.2。",
    link: "https://unity.com/products/muse" },
  { name: "Summer Engine", score: 85.6, src: "买购网", tags: ["引擎", "生成式", "海外", "免费档"], free: true,
    tagline: "基于 Godot 4 重构的海外 AI 原生游戏引擎",
    note: "对话生成标准 Godot 完整工程文件，可一键打包 Steam/移动端安装包。综合指数 85.6。",
    link: "https://www.summerengine.com" },
  { name: "SEELE AI", score: 84.0, src: "买购网", tags: ["生成式", "海外", "免费档"], free: true,
    tagline: "云端多引擎导出型 AI 游戏开发平台",
    note: "数分钟生成完整可运行 2D/3D 游戏原型，自带海量动画素材库。综合指数 84.0。",
    link: "https://www.seele.ai" },
  { name: "Bitmagic", score: 83.0, src: "买购网", tags: ["生成式", "3D", "海外", "免费"], free: true,
    tagline: "AI 优先式 3D 游戏创作平台（芬兰团队）",
    note: "单条文字指令生成 3D 交互式游戏，云端托管一键生成网页试玩链接。综合指数 83.0。",
    link: "https://www.bitmagic.io" },
  { name: "Rosebud AI", score: 81.4, src: "买购网", tags: ["生成式", "原型", "海外", "免费档"], free: true,
    tagline: "浏览器端轻量化 AI 网页游戏生成工具",
    note: "几分钟产出可分享网页小游戏，支持社区二创改写；付费档可下代码/上 Steam。综合指数 81.4。",
    link: "https://www.rosebud.ai" },
  { name: "Aippy", score: 79.8, src: "买购网", tags: ["社区", "海外", "免费"], free: true,
    tagline: "信息流式 AI 游戏创作社区（TikTok 类分发）",
    note: "语音/文字快速生成竖屏休闲小游戏，依托短视频流量分发作品。综合指数 79.8。",
    link: "https://www.aippy.ai" },
  { name: "Astrocade", score: 78.2, src: "买购网", tags: ["社区", "无代码", "海外", "免费"], free: true,
    tagline: "零代码 AI 游戏创作社交平台",
    note: "一句话生成带音效玩法的可玩小游戏；月活约 500 万、7.5 万+ 创作者游戏。综合指数 78.2。",
    link: "https://www.astrocade.com" },
  { name: "GDevelop", score: 86, src: "编辑评估", tags: ["无代码", "开源", "引擎", "免费"], free: true,
    tagline: "开源无代码 + AI，导出覆盖最广",
    note: "150k+ 已发布游戏，AI 助手可在事件表里生成功能；项目文件永远归你，所有权与性价比首选。",
    link: "https://gdevelop.io" },
  { name: "Godogen", score: 80, src: "编辑评估", tags: ["引擎", "生成式", "开源", "免费"], free: true,
    tagline: "一句话生成 Godot 4 完整工程 + 开源 AI 助手",
    note: "产出可维护真实工程而非视频帧，能调数值/迭代/打包；只覆盖生产段，分发要自己补。",
    link: "https://github.com/search?q=godogen" },
  { name: "百度秒哒", score: 82, src: "编辑评估", tags: ["零代码", "生成式", "大厂", "免费"], free: true,
    tagline: "百度无代码平台，一句话生成小游戏/网页/小程序",
    note: "多智能体协作，自然语言即可制作小游戏，已全量上线，官网 miaoda.cn。",
    link: "https://www.miaoda.cn" },
  { name: "233工坊", score: 81, src: "编辑评估", tags: ["零代码", "生成式", "分发", "免费"], free: true,
    tagline: "对话式做游戏，一键发布 233 乐园",
    note: "AI 全链路一站式创作工作台，零基础独立做出完整可玩游戏，自带分发社区。",
    link: "https://maker.ark.online" },
  { name: "咪咕 AI智造", score: 80, src: "编辑评估", tags: ["零代码", "生成式", "大厂", "免费"], free: true,
    tagline: "中国移动旗下 AI 游戏创作发行平台",
    note: "意图理解到一键发布端到端闭环，千亿级流量扶持，隶属咪咕游戏。",
    link: "https://www.migu.cn" },
  { name: "Cursor + Godot/Unity", score: 88, src: "编辑评估", tags: ["AI编程", "海外", "付费"], free: false,
    tagline: "开发者模式：AI 编程代理写 GDScript/C#",
    note: "r/godot 一致推荐的「真·所有权」工作流，$20/月；上限拉满，但需能读/跑/调代码。",
    link: "https://cursor.com" },
  { name: "CodeBuddy", score: 84, src: "编辑评估", tags: ["AI编程", "大厂", "免费档"], free: true,
    tagline: "腾讯云官方 AI 编程，1 小时生成小游戏",
    note: "搭配 CloudBase 一键部署上云，是「路线 B（微信 IAA）」愿学 2–4 周人群的生产力核心。",
    link: "https://www.codebuddy.ai" },
  { name: "Inworld AI", score: 83, src: "编辑评估", tags: ["NPC对话", "海外", "付费"], free: false,
    tagline: "AI 角色与对话引擎（Unity/Unreal 集成）",
    note: "自然语言逼真假人 NPC，被《上古卷轴》《骑马与砍杀2》等 MOD 采用，叙事向游戏利器。",
    link: "https://inworld.ai" },
  { name: "Meshy", score: 82, src: "编辑评估", tags: ["美术3D", "海外", "免费档"], free: true,
    tagline: "文字/图片秒出游戏级 3D 模型",
    note: "约 5 分钟生成可导入 Unity/Unreal 的 3D 资产，快速搭建资产库。",
    link: "https://www.meshy.ai" },
  { name: "Scenario", score: 80, src: "编辑评估", tags: ["美术3D", "海外", "付费"], free: false,
    tagline: "风格一致的批量 AI 美术生成",
    note: "训练自定义画风模型、批量产出道具/环境，保持统一视觉语言。",
    link: "https://scenario.com" },
  { name: "Suno", score: 85, src: "编辑评估", tags: ["音乐语音", "免费档"], free: true,
    tagline: "AI 生成华语/英文情歌与 BGM，做游戏配乐",
    note: "零成本产出情绪配乐与主题曲，直接喂给游戏，做音效的零成本首选。",
    link: "https://suno.com" },
  { name: "ElevenLabs", score: 84, src: "编辑评估", tags: ["音乐语音", "海外", "付费"], free: false,
    tagline: "AI 语音与音效（角色配音/SFX）",
    note: "高质量角色配音与旁白，多语种，做剧情向小游戏对话配音必备。",
    link: "https://elevenlabs.io" },
  { name: "Roblox Assistant + Cube", score: 82, src: "编辑评估", tags: ["社区", "海外", "免费"], free: true,
    tagline: "Roblox 生态内免费 AI 创作栈",
    note: "在 Roblox 里免费做 AI 生成内容，适合想在成熟生态内起步的创作者。",
    link: "https://create.roblox.com" }
];

/* ---------- AI 游戏导航站聚合（行业入口） ---------- */
const NAVSITES = [
  { name: "AIBase · AI游戏导航", cat: "游戏专类", tagline: "超 500 款 AI 游戏经人工筛选",
    note: "涵盖生成类、玩法类、NPC 类，带流量和点评数据，找游戏 / 找创作平台都好用。",
    link: "https://app.aibase.com/zh/class/AI游戏" },
  { name: "AIG123 · AI游戏应用", cat: "游戏专类", tagline: "3000+ AI工具导航站的「游戏」专栏",
    note: "每日更新，AI 游戏制作与 AI 可玩游戏都有收录。",
    link: "https://www.aig123.com/favorites/game" },
  { name: "乐科技 · AI游戏排行榜", cat: "游戏专类", tagline: "专注 AI 游戏网站收集",
    note: "按排行榜形式整理，适合快速对比哪个平台热门。",
    link: "https://www.panlele.com/n/游戏" },
  { name: "买购网 · 十大AI游戏平台排行(2026)", cat: "评测榜单", tagline: "主流 AI 游戏创作平台排名介绍",
    note: "决定先用哪个平台上手的参考榜，更新截至 2026-07-16。",
    link: "https://www.maigoo.com/top/447596.html" },
  { name: "AI工具集", cat: "综合导航", tagline: "收录 1000+ AI 工具，含游戏分类",
    note: "国内老牌 AI 工具导航，游戏相关分类齐全，也收录了「代号Craft」等新品。",
    link: "https://ai-bot.cn/" },
  { name: "NavCN", cat: "综合导航", tagline: "1000+ AI 工具，更新频繁",
    note: "中文 AI 工具导航，收录速度快，常能第一时间发现新发游戏平台。",
    link: "https://www.navcn.cn/" },
  { name: "MossAI", cat: "综合导航", tagline: "2026 全球 AI 工具目录",
    note: "覆盖全球的 AI 工具目录，适合找海外 AI 游戏生成器与引擎。",
    link: "https://mossai.org/cn" }
];

/* ---------- 入局指南（分人群路径） ---------- */
const GUIDE = [
  {
    avatar: "🎓",
    who: "大学生",
    title: "边学边赚的第一款游戏",
    desc: "时间多、零资金，最该用低成本试错、攒作品集。",
    list: [
      "用 GDevelop / Rosebud 零代码做小游戏练手，3 天出原型",
      "参加 GameJam / 校园比赛，作品直接写进简历",
      "放 SOON / TapTap 上架，赚人生第一笔零花钱",
      "组队接校内外包，积累真实项目经验"
    ]
  },
  {
    avatar: "🔄",
    who: "失业 / 转行",
    title: "零基础学一门能吃饭的技能",
    desc: "不需要天赋，AI 把门槛降到了「会提需求」就行。",
    list: [
      "从零代码平台起步，先做一款自己的小游戏",
      "用免费平台验证能不能跑通变现",
      "把做过的游戏当作品集，投游戏公司 / 接外包",
      "重点学「数值 + 投放」，比写代码更稀缺"
    ]
  },
  {
    avatar: "🚀",
    who: "创业者",
    title: "把爱好变成一门生意",
    desc: "你要的不是好玩，是可规模化的生意。",
    list: [
      "用 SOON / TapTap 制造做「生产+分发」一体",
      "先小成本测 ROI，跑正了再加团队",
      "盯次留和 LTV，别被首日数据骗了",
      "组小团队（策划+美术+投放），分摊风险"
    ]
  },
  {
    avatar: "👶",
    who: "宝妈",
    title: "带娃间隙也能做的小事",
    desc: "时间碎片化，就做轻量、手机能搞定的陪伴向内容。",
    list: [
      "做合成 / 消除 / 文字剧情类轻量小游戏",
      "用 AI 出图出文案，手机就能改内容",
      "亲子 / 解压向题材，天然有受众",
      "利用带娃空档更新，细水长流赚零花"
    ]
  },
  {
    avatar: "🎮",
    who: "爱好者 / 玩家",
    title: "做自己想玩的那个游戏",
    desc: "纯粹因为喜欢，就为做出心中那个玩法。",
    list: [
      "用 Godogen 出高保真原型，快速验证手感",
      "做同人 / 独立游戏，上 Steam 社区向发行",
      "在玩家社群分享开发日志，攒第一批粉丝",
      "不为赚钱也行——把热爱做成作品就值"
    ]
  }
];

/* =========================================================
   渲染逻辑
   ========================================================= */
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" }[c])); }

/* 工具库 */
const toolGrid = document.getElementById("tools-grid");
const toolChips = document.getElementById("tool-chips");
const toolSearch = document.getElementById("tool-search");
const toolsEmpty = document.getElementById("tools-empty");
let toolActiveTag = "全部";

const toolTagSet = ["全部", ...new Set(TOOLS.flatMap(t => t.tags))];
toolChips.innerHTML = toolTagSet.map(t => `<button class="chip${t==="全部"?" active":""}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");

function renderTools() {
  const q = toolSearch.value.trim().toLowerCase();
  const list = TOOLS.filter(t => {
    const okTag = toolActiveTag === "全部" || t.tags.includes(toolActiveTag);
    const hay = (t.name + t.tagline + t.tags.join(" ") + t.note).toLowerCase();
    return okTag && (!q || hay.includes(q));
  });
  toolsEmpty.hidden = list.length > 0;
  toolGrid.innerHTML = list.map(t => `
    <div class="card">
      <h3>${esc(t.name)} ${t.free ? '<span class="free-badge">免费</span>' : '<span class="paid-badge">付费/商务</span>'}</h3>
      <p class="tagline">${esc(t.tagline)}</p>
      <div class="tags">${t.tags.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      <p class="note">${esc(t.note)}</p>
      <div class="meta"><a href="${esc(t.link)}" target="_blank" rel="noopener">访问官网 ↗</a></div>
    </div>`).join("");
}
toolChips.addEventListener("click", e => {
  if (!e.target.dataset.tag) return;
  toolActiveTag = e.target.dataset.tag;
  [...toolChips.children].forEach(c => c.classList.toggle("active", c.dataset.tag === toolActiveTag));
  renderTools();
});
toolSearch.addEventListener("input", renderTools);
renderTools();

/* 案例库 */
const caseGrid = document.getElementById("cases-grid");
const caseChips = document.getElementById("case-chips");
const caseSearch = document.getElementById("case-search");
const casesEmpty = document.getElementById("cases-empty");
let caseActiveTag = "全部";

const caseTagSet = ["全部", ...new Set(CASES.flatMap(c => c.tags))];
caseChips.innerHTML = caseTagSet.map(t => `<button class="chip${t==="全部"?" active":""}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");

function renderCases() {
  const q = caseSearch.value.trim().toLowerCase();
  const list = CASES.filter(c => {
    const okTag = caseActiveTag === "全部" || c.tags.includes(caseActiveTag);
    const hay = (c.name + c.platform + c.tags.join(" ") + c.note).toLowerCase();
    return okTag && (!q || hay.includes(q));
  });
  casesEmpty.hidden = list.length > 0;
  caseGrid.innerHTML = list.map(c => `
    <div class="card">
      <h3>${esc(c.name)}</h3>
      <div class="meta">
        <span>平台：<b>${esc(c.platform)}</b></span>
        <span>周期：<b>${esc(c.cycle)}</b></span>
        <span>成本：<b>${esc(c.cost)}</b></span>
      </div>
      <p class="tagline"><b>成绩：</b>${esc(c.result)}</p>
      <div class="tags">${c.tags.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      <p class="note">${esc(c.note)}</p>
    </div>`).join("");
}
caseChips.addEventListener("click", e => {
  if (!e.target.dataset.tag) return;
  caseActiveTag = e.target.dataset.tag;
  [...caseChips.children].forEach(c => c.classList.toggle("active", c.dataset.tag === caseActiveTag));
  renderCases();
});
caseSearch.addEventListener("input", renderCases);
renderCases();

/* 数据情报 */
document.getElementById("data-grid").innerHTML = DATA.map(d => `
  <div class="dstat">
    <b>${esc(d.v)}${d.up ? ` <span class="up">${esc(d.up)}</span>` : ""}</b>
    <span>${esc(d.s)}</span>
  </div>`).join("");

/* 本周新增 */
document.getElementById("weekly-grid").innerHTML = WEEKLY_NEW.map(w => `
  <div class="card weekly-card">
    <span class="new-badge">本周新增</span>
    <h3>${esc(w.name)} ${w.free ? '<span class="free-badge">免费</span>' : '<span class="paid-badge">付费/商务</span>'}</h3>
    <p class="tagline">${esc(w.tagline)}</p>
    <div class="tags">${w.tags.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
    <p class="why"><b>为什么推荐：</b>${esc(w.why)}</p>
    <p class="note">${esc(w.note)}</p>
    <div class="meta"><a href="${esc(w.link)}" target="_blank" rel="noopener">访问官网 ↗</a></div>
  </div>`).join("");

/* 入局指南 */
document.getElementById("guide-grid").innerHTML = GUIDE.map(g => `
  <div class="gcard">
    <div class="ava">${g.avatar}</div>
    <span class="who">${esc(g.who)}</span>
    <h3>${esc(g.title)}</h3>
    <p>${esc(g.desc)}</p>
    <ul>${g.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
  </div>`).join("");

/* 技能商店 */
const skillGrid = document.getElementById("skills-grid");
const skillChips = document.getElementById("skills-chips");
const skillSearch = document.getElementById("skills-search");
const skillsEmpty = document.getElementById("skills-empty");
let skillActiveTag = "全部";

const skillList = [...SKILLS].sort((a, b) => b.score - a.score);
const skillTagSet = ["全部", ...new Set(SKILLS.flatMap(s => s.tags))];
skillChips.innerHTML = skillTagSet.map(t => `<button class="chip${t === "全部" ? " active" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");

function renderSkills() {
  const q = skillSearch.value.trim().toLowerCase();
  const list = skillList.filter(s => {
    const okTag = skillActiveTag === "全部" || s.tags.includes(skillActiveTag);
    const hay = (s.name + s.tagline + s.tags.join(" ") + s.note).toLowerCase();
    return okTag && (!q || hay.includes(q));
  });
  skillsEmpty.hidden = list.length > 0;
  skillGrid.innerHTML = list.map(s => `
    <div class="card skill-card">
      <div class="skill-top">
        <h3>${esc(s.name)} ${s.free ? '<span class="free-badge">免费</span>' : '<span class="paid-badge">付费/商务</span>'}</h3>
        <span class="score-badge" title="来源：${esc(s.src)}">${esc(s.score.toFixed(1))}<small>${s.score >= 85 ? "强" : s.score >= 80 ? "优" : "良"}</small></span>
      </div>
      <p class="tagline">${esc(s.tagline)}</p>
      <div class="tags">${s.tags.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      <p class="note">${esc(s.note)}</p>
      <div class="meta"><a href="${esc(s.link)}" target="_blank" rel="noopener">访问官网 ↗</a></div>
    </div>`).join("");
}
skillChips.addEventListener("click", e => {
  if (!e.target.dataset.tag) return;
  skillActiveTag = e.target.dataset.tag;
  [...skillChips.children].forEach(c => c.classList.toggle("active", c.dataset.tag === skillActiveTag));
  renderSkills();
});
skillSearch.addEventListener("input", renderSkills);
renderSkills();

/* 导航站聚合 */
document.getElementById("navsites-grid").innerHTML = NAVSITES.map(n => `
  <div class="card navsite-card">
    <div class="skill-top">
      <h3>${esc(n.name)}</h3>
      <span class="cat-badge">${esc(n.cat)}</span>
    </div>
    <p class="tagline">${esc(n.tagline)}</p>
    <p class="note">${esc(n.note)}</p>
    <div class="meta"><a href="${esc(n.link)}" target="_blank" rel="noopener">前往站点 ↗</a></div>
  </div>`).join("");
