// 王乐 · AI 应用前端开发 —— 全站数据源
// 所有内容取自简历原文，游戏化叙事只做表达，不虚构事实。

export const HERO = {
  name: '王乐',
  nameEn: 'WANG LE',
  class: 'AI 应用前端 / 全栈开发工程师',
  level: 42,
  tagline: '把 AI 从 Demo 推到业务可用',
  subtitle: 'Coding the Future, One Pixel at a Time.',
  github: 'github.com/AuguestLe/permit-route-planner',
  site: 'auguestle.github.io/permit-route-planner/',
  email: 'wangleaiqi@163.com',
}

// 角色属性（对应简历"个人优势"，数值为叙事化表达，非简历事实）
export const STATS = [
  { key: 'ARCHITECTURE', label: '架构', value: 90, color: '#f0a830', icon: 'tower' },
  { key: 'CROSS-PLATFORM', label: '跨端', value: 85, color: '#4db8e8', icon: 'layers' },
  { key: 'AI APPLICATION', label: 'AI 应用', value: 88, color: '#5cc85c', icon: 'robot' },
  { key: 'TECH FOUNDATION', label: '技术底座', value: 92, color: '#e07a3c', icon: 'gear' },
]

export const ADVANTAGES = [
  {
    icon: 'tower',
    title: '架构',
    text: '多个项目主导牵头经验，SaaS / PaaS、融合开发、小程序落地商用；对三端架构、交付节奏与线上质量负责。',
  },
  {
    icon: 'layers',
    title: '跨端升级',
    text: '主导特运通 App 原生 → 融合跨端（iOS / Android / 鸿蒙）改造，2024.06 货版商用上线并推广至车版，迁移期不停服。',
  },
  {
    icon: 'robot',
    title: 'AI 应用',
    text: '超限证多模态识别（JSON Schema / Function Calling 约束输出、低置信转人工、异常降级）、Agent 客服问答（SSE 流式、BM25 + 向量检索）。',
  },
  {
    icon: 'gear',
    title: '技术底座',
    text: 'React / Vue3 / TypeScript / Taro / uni-app / Electron / Node.js；擅长分层架构与能力协议设计、长列表与首屏性能治理、工程化与 Code Review。',
  },
]

// 工作经历 = 4 个关卡据点
export const JOURNEY = [
  {
    level: 'LV.01',
    year: '2022.7 — 2026.11',
    role: '前端负责人',
    company: '北京邦利德网络科技有限公司',
    landmark: 'castle',
    title: '特运通 · 公路货运交易平台',
    desc: '车版司机找货 / 接单 / 运输，货版货主发货 / 管单 / 结算；在线交易，不可停服。',
    feats: [
      '整合 8 人 Web 前端为大前端团队，统管 Web / App（iOS / Android / 鸿蒙）/ 小程序架构与发布',
      '主导原生 → 融合跨端，包体约 300MB → 100MB 以内，迁移期不停服',
      '建立基础能力 / 组件 / 业务 / 页面四层边界与统一能力协议',
      '牵头超限证识别与 Agent 客服问答落地，推动团队 Vue → React 技术栈转型',
    ],
  },
  {
    level: 'LV.02',
    year: '2020.5 — 2022.7',
    role: 'Web 前端工程师',
    company: '惟客数据',
    landmark: 'tower',
    title: '数字化营销 SaaS',
    desc: '官网、aPaaS 低代码平台、广告投放平台、DSP 营销平台，服务运营 / 营销 / 销售三条业务线。',
    feats: [
      '主导官网 2.0 / 3.0 改版，负责 aPaaS 低代码、广告投放、DSP 三个平台前端',
      'Express BFF 以 Adapter 模式统一 6 家渠道授权 / 报表 / 字段转换',
      '新增一家渠道从 3 天联调降到半天；报表首屏秒级 → 百毫秒级',
    ],
  },
  {
    level: 'LV.03',
    year: '2019.3 — 2020.4',
    role: 'Web 前端工程师',
    company: '完美世界教育',
    landmark: 'village',
    title: '像素种子 · 教育与 ToB 平台',
    desc: '官网、教育平台与 ToB 项目前端研发，完成页面开发、接口联调与线上问题处理。',
    feats: [
      '基于 React + Redux 完成教育平台数据库对接与功能迭代',
      '官网加载性能优化：资源压缩、按需加载与缓存策略，改善首屏打开速度',
    ],
  },
  {
    level: 'LV.04',
    year: '2015.2 — 2019.3',
    role: 'Web 前端工程师',
    company: '北京精真估',
    landmark: 'cave',
    title: '车商服务平台',
    desc: '从 0 搭建后台管理系统，支撑交易端与服务端线上线下业务对接。',
    feats: [
      'React + Ant Design + DVA 从 0 搭建后台管理系统',
      '负责车商易星 App 内嵌 H5 与 C 端车商后台（Angular.js），完成 iOS / Android 打包嵌入与联调',
    ],
  },
]

// 技能树 = 四大分支
export const SKILL_TREE = [
  {
    branch: '前端与跨端',
    icon: 'sword',
    color: '#4db8e8',
    skills: ['React', 'Vue2/3', 'TypeScript', 'Taro', 'uni-app', 'Electron', 'qiankun', 'Ant Design', '微信/支付宝小程序', 'iOS/Android/鸿蒙'],
  },
  {
    branch: 'AI 应用',
    icon: 'robot',
    color: '#5cc85c',
    skills: ['DeepSeek / Qwen', 'SSE 流式渲染', 'JSON Schema', 'Function Calling', 'RAG（BM25+向量）', 'Dify / Coze', '多模态识别'],
  },
  {
    branch: '工程与服务端',
    icon: 'gear',
    color: '#f0a830',
    skills: ['Vite / Webpack', 'Node.js', 'Express / BFF', 'MySQL', 'Redis', '分包与预下载', '首屏优化', '灰度与回滚', 'CI'],
  },
  {
    branch: '团队与架构',
    icon: 'shield',
    color: '#e07a3c',
    skills: ['8 人团队管理', 'Code Review', '架构规范', '能力协议治理', 'React/RN/Taro 培训', '分层架构设计'],
  },
]

// 成就殿堂 = 6 大项目徽章
export const ACHIEVEMENTS = [
  {
    rarity: 'legendary',
    icon: 'robot',
    name: 'AI 客服问答平台',
    year: '2026.6 — 2026.11',
    stack: 'Vue3 + Pinia + SSE + DeepSeek + Dify/Coze + Node/Express',
    desc: 'Vue3 封装跨组件流式对话状态机，多会话隔离与历史持久化；BM25 + 向量混合检索解决专有名词召回；聚合层收敛三类上游鉴权与流式转发。',
    trophy: '企业内落地 · RBAC 权限 · 敏感知识不出域',
  },
  {
    rarity: 'legendary',
    icon: 'eye',
    name: '超限证识别与风控地图',
    year: '2026.7 — 2026.11',
    stack: 'Vue3 + Qwen 多模态 + JSON Schema + 高德 GIS',
    desc: '上传质检 → OCR/多模态识别 → 结构化抽取 → 规则校验 → 人工复核；低置信转人工、异常降级；GIS 还原线路并叠加电子围栏与路线偏离。',
    trophy: '替代人工逐张核验 · badcase 回流闭环',
    demo: true,
  },
  {
    rarity: 'epic',
    icon: 'layers',
    name: '特运通 App 融合跨端升级',
    year: '2022.7 — 2026.11',
    stack: 'React + Taro · uni-app + Vue3 · iOS/Android/鸿蒙',
    desc: '放弃"一套代码跑两端"，保留各自生态 + 统一四层架构与能力协议；原生与融合页面共存，货版先行验证再推车版。',
    trophy: '包体 300MB → 100MB · 迁移期不停服',
  },
  {
    rarity: 'epic',
    icon: 'desktop',
    name: '特运通 PC 客户端',
    year: '2022.7 — 2026.11',
    stack: 'Vue2 + Electron + vxe-table + lowdb',
    desc: '主/渲染进程分层、窗口池、单实例锁与 IPC 封装；4 条线路并行查询与增量轮询；MD5 签名、AES/XXTEA 加密、asar 热更新。',
    trophy: '5 万行 · 100+ 组件 · 迭代至 5.9.x',
  },
  {
    rarity: 'rare',
    icon: 'puzzle',
    name: 'SaaS 中后台微前端',
    year: '2022.10 — 2023.11',
    stack: 'Vue3 + qiankun + Pinia + Ant Design Vue',
    desc: 'Vue3 主应用壳负责路由权限；存量 JSP 以 iframe 接入，新模块以 qiankun 子应用挂载，按模块灰度，双系统并行零中断。',
    trophy: '50+ 页面迁移 · PC 支付链路缩短约一半',
  },
  {
    rarity: 'rare',
    icon: 'grid',
    name: 'aPaaS 低代码 · 广告投放',
    year: '2020.5 — 2022.7',
    stack: 'Vue + X6 + bpmn-js + Node/Express + MySQL/Redis',
    desc: '从 0 搭建编辑器/渲染器/物料库/协议层四层低代码底座；Schema 驱动渲染；Express BFF Adapter 对接 6 家渠道。',
    trophy: '渠道接入 3 天 → 半天 · 报表秒级 → 百毫秒级',
  },
]

export const CONTACTS = [
  { label: 'GITHUB', value: 'AuguestLe', url: 'https://github.com/AuguestLe/permit-route-planner', icon: 'github' },
  { label: 'EMAIL', value: 'wangleaiqi@163.com', url: 'mailto:wangleaiqi@163.com', icon: 'mail' },
  { label: 'SITE', value: 'permit-route-planner demo', url: 'https://auguestle.github.io/permit-route-planner/', icon: 'link' },
]

export const EDUCATION = [
  { school: '河北工业大学', major: '计算机科学与技术', degree: '本科', year: '2015.3 — 2018.1' },
  { school: '唐山工业职业技术学院', major: '计算机科学与技术', degree: '专科', year: '2015.3 — 2018.1' },
]
