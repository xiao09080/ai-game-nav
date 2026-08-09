# AI小游戏导航站

一个**纯静态、零依赖**的 AI 小游戏聚合导航站：工具平台库、成熟变现案例、市场数据情报、分背景入局指南。基于 2026 年 8 月行业研究整理。

- 零后端、零构建、零外部 CDN → 加载快、可永久免费托管
- 内容全部结构化在 `app.js`，改数据即可改站点
- 支持关键词搜索 + 标签筛选 + 响应式布局

## 目录结构
```
ai-game-nav/
├── index.html      # 首页：导航/案例/数据/技能商店/商单对接
├── manual.html     # 实操手册深度页
├── ranking.html    # 热门排行榜（周榜/月榜）
├── styles.css      # 样式（手写，零依赖）
├── app.js          # 数据 + 渲染 + 搜索/筛选逻辑
├── nav.js          # 移动端汉堡菜单
├── .nojekyll       # 让 GitHub Pages 跳过 Jekyll
├── sitemap.xml     # SEO 站点地图
├── robots.txt      # 爬虫规则
└── README.md
```
> 本仓库已在本地 `git init` 并提交（commit `ee90ebe`），你只需完成最后一步 push 即可。

## 本地预览
```bash
cd ai-game-nav
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 部署到 GitHub Pages（免费、永久）
> 仓库已在本地 `git init` 并提交（commit `ee90ebe`，10 个文件）。你只需完成「建仓 + push + 开 Pages」三步，即可免费上线。
>
> 前置条件（任选其一）：
> - **A. 装了 `gh` 并登录**：终端跑 `gh auth login` 完成授权；或
> - **B. 有 Personal Access Token（PAT）**：GitHub → Settings → Developer settings → PAT → 生成带 `repo` 权限的 token；或
> - **C. 连 WorkBuddy GitHub 连接器**：左侧栏 → 连接器 → GitHub → 连接（仅用于本机 `gh` 授权；本沙箱 agent 无直接推送能力，最终仍需在本机终端执行下方命令）。

**方式一：用 gh 一键建仓并推送（推荐，需 A）**
```bash
cd ai-game-nav
gh repo create ai-game-nav --public --source=. --push
```

**方式二：手动关联已有仓库（需 A 或 B）**
```bash
cd ai-game-nav
git branch -M main
git remote add origin https://github.com/<你的用户名>/ai-game-nav.git
git push -u origin main
# 用 PAT 时：push 会弹窗要求输入用户名+token，用户名填你的 GitHub 账号，密码/令牌处粘贴 PAT
```

**开启 Pages**
1. 打开 `https://github.com/<你的用户名>/ai-game-nav` → **Settings → Pages**
2. Source 选 **main** 分支、**/(root)** 目录 → **Save**
3. 等待 1–2 分钟，访问 `https://<你的用户名>.github.io/ai-game-nav/`

> 首次访问若空白，清一下缓存（Ctrl+F5）或等几分钟——Pages 首次部署有边缘缓存延迟。

## 如何自定义
- **改内容**：编辑 `app.js` 顶部的 `TOOLS` / `CASES` / `DATA` / `GUIDE` 数组（纯中文，照格式加条目即可）
- **改配色**：编辑 `styles.css` 顶部的 `:root` CSS 变量
- **换站名**：改 `index.html` 的 `<title>` 与 `.brand` 文案

## 访问统计（可选，免费）

站点已预留 **GoatCounter** 隐私统计脚本（无 cookie、合规、免费）。去 https://www.goatcounter.com 注册，拿到你的站点代码后，把 `index.html` / `ranking.html` 里的 `YOUR-CODE` 替换掉即可生效；不替换也不会影响站点运行。

## 数据说明
站点数据来自公开行业报告与平台披露（2026-08 整理），仅供学习与参考，不构成投资建议。如发现数据过期或工具下架，欢迎提 Issue / PR 修正。
