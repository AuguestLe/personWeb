# CODE KNIGHT · 王乐的个人像素世界

一个把个人简历做成 16-bit 像素冒险 RPG 的职业作品集。React + Vite 构建。

## 快速开始

```bash
npm install
npm run dev      # 本地开发，默认 http://localhost:5173
npm run build    # 生产构建，产物在 dist/
npm run preview  # 预览构建产物
```

## 站点结构

| 分区 | 说明 |
|---|---|
| START | 启动页，CRT 扫描线 + PRESS START |
| Hero | 首页，姓名 / 职位 / 世界地图主视觉 |
| About | 角色档案，RPG 属性面板 + 优势 + 教育经历 |
| Journey | 冒险地图，4 段工作经历作为可切换关卡 |
| Skills | 技能树，四大分支 |
| Projects | 成就殿堂，6 个项目的徽章墙（含详情弹窗） |
| Contact | 联络驿站，NPC 对话框 + 联系方式 |
| Mini Game | 隐藏关卡，Canvas 小游戏 CODE CATCHER |

## 目录结构

```
src/
  components/       各分区组件 + 像素图标库
  data/portfolio.js 全站内容数据源（改文案只改这里）
  hooks/useReveal.js 滚动进入动画（全局共享观察器）
  styles/           按模块拆分的样式
public/
  fonts/            自托管像素字体（不依赖 Google Fonts）
  *.webp            优化后的像素插画
```

## 工程约定

- **内容与组件分离**：所有文案、经历、项目数据集中在 `src/data/portfolio.js`。
- **字体自托管**：`public/fonts/` 内为 Press Start 2P / VT323 的 latin 子集，避免境内外链不可用。
- **动效可降级**：所有动画遵循 `prefers-reduced-motion`。
- **滚动动画**：组件内不要自建 IntersectionObserver，统一用 `useReveal()`，
  它通过 MutationObserver 覆盖动态新增节点，避免"切换内容后元素隐形"。

## 移动端 / 无障碍

- 小游戏键盘事件只在游戏区域聚焦时拦截，不劫持全局滚动键。
- 窄屏 / 触屏设备显示方向键按钮。
- 项目详情弹窗支持 Esc 关闭、焦点圈定与关闭后焦点归还。
