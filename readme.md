<div align="center">

<h1>📚 庄子智慧</h1>

<p><em>「吾生也有涯，而知也无涯」—— 探索道家哲学的现代之旅</em></p>

<p>
  <a href="https://killisleakedlove.github.io/zhuangzi/">
    <img src="https://img.shields.io/badge/在线预览-庄子智慧-blue?style=flat-square&logo=githubpages" alt="在线预览">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License: MIT">
  </a>
  <img src="https://img.shields.io/badge/通行本-33篇-orange?style=flat-square" alt="33篇">
  <img src="https://img.shields.io/badge/已上线-33篇-success?style=flat-square" alt="33篇">
  <img src="https://img.shields.io/badge/技术栈-原生HTML/CSS/JS-9cf?style=flat-square" alt="技术栈">
</p>

</div>

---

## 🌟 项目简介

**庄子智慧**是一个精心打造的《庄子》经典阅读网站，以现代化的交互方式呈现两千年前的东方智慧。

本项目参照郭象注本《庄子》通行分类体系（内篇7、外篇15、杂篇11，共33篇），**33 篇内容已全部上线**。

无论你是初次接触庄子，还是想要深入研读，这里都能为你提供沉浸式的阅读体验。

---

## ✨ 特色功能

| 功能 | 描述 |
|------|------|
| 📖 **原文译文对照** | 经典原文 + 白话译文，点击文段即可展开译文，便于理解 |
| 💡 **深度解读** | 每章配有现代意义阐释，深入浅出阐发哲思 |
| 🎯 **核心启示** | 提炼 5 点 actionable 智慧，古今贯通 |
| 📜 **历史用例** | 3 个经典历史人物故事佐证，以史为鉴 |
| 🎨 **优雅界面** | 暗黑/明亮双主题，沉浸阅读，支持系统偏好自动适配 |
| 📍 **段落导航** | 顶部时间线快速定位任意段落，支持拖拽滚动 |

---

## 📁 项目结构

```
zhuangzi/
├── index.html          # 单页应用入口
├── styles.css          # CSS 入口（@import 加载模块化样式）
├── css/                # 样式模块（每文件 <=200 行）
│   ├── variables.css   # 主题变量
│   ├── base.css        # 基础重置 + 动画
│   ├── layout.css      # 页面骨架
│   ├── sidebar.css     # 侧边栏 + 目录
│   ├── components.css  # 工具栏 + 按钮
│   ├── timeline.css    # 段落时间线
│   ├── chapter.css     # 原文 + 译文卡片
│   ├── tabs.css        # 标签页
│   ├── utilities.css   # 工具类 + 主题覆盖
│   └── responsive.css  # 响应式适配
├── js/                 # 脚本模块（每文件 <=200 行）
│   ├── config.js       # 章节目录 + 数据映射
│   ├── theme.js        # 主题管理
│   ├── scroll.js       # 滚动 + 返回顶部
│   ├── timeline.js     # 时间线拖拽 + tooltip
│   ├── chapter.js      # 章节加载 + 渲染
│   ├── navigation.js   # 导航 + 标签页
│   └── main.js         # 入口
└── content/            # 33 篇章节数据
```

---

## 📚 内容结构

> 分类体系参照郭象注本《庄子》通行本（内篇7、外篇15、杂篇11，共33篇）。
> 表示已上线。

### 内篇 7 章（ 全部上线）
《逍遥游》·《齐物论》·《养生主》·《人间世》·《德充符》·《大宗师》·《应帝王》

### 外篇 15 章（ 全部上线）
《骈拇》·《马蹄》·《胠箧》·《在宥》·《天地》·《天道》·《天运》·《刻意》·《缮性》·《秋水》·《至乐》·《达生》·《山木》·《田子方》·《知北游》

### 杂篇 11 章（ 全部上线）
《庚桑楚》·《徐无鬼》·《则阳》·《外物》·《寓言》·《让王》·《盗跖》·《说剑》·《渔父》·《列御寇》·《天下》

---

## 🖼️ 界面预览

| 🌞 明亮模式 | 🌙 暗黑模式 |
|------------|------------|
| 清新淡雅，适合日间阅读 | 沉浸护眼，适合夜间品读 |

---

## 🛠️ 技术栈

- **前端**：原生 HTML5 + CSS3 + JavaScript（无框架依赖）
- **样式**：CSS 变量主题系统，支持暗黑/明亮双主题；模块化拆分（10 个 CSS 文件）
- **脚本**：原生 DOM 操作，模块化拆分（7 个 JS 文件）
- **数据**：模块化 JavaScript 数据文件（JSON 格式）
- **部署**：GitHub Pages

---

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/KillIsLeakedLove/zhuangzi.git

# 进入目录
cd zhuangzi

# 本地打开（任选其一）
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

或直接访问在线版本 👉 **[killisleakedlove.github.io/zhuangzi](https://killisleakedlove.github.io/zhuangzi/)**

---

## 📖 使用指南

1. **浏览章节** — 左侧目录快速跳转，支持分类折叠
2. **阅读原文** — 点击文段查看译文，再点收起
3. **深度学习** — 阅读「解读」「启示」「用例」三部分
4. **段落导航** — 顶部时间线拖拽或点击，快速定位任意段落
5. **切换主题** — 点击右上角 🌙/☀️ 切换暗黑/明亮模式，支持自动适配系统偏好

---

## 📝 内容标准

-  原文精选经典段落 10–18 段
-  译文准确流畅，符合现代汉语规范
-  解读深入浅出，阐发现代意义
-  启示提炼 5 点核心智慧， actionable
-  用例采用《史记》等史书人物典故

---

## 🤝 参与贡献

欢迎通过以下方式参与本项目：

- 🐛 [提交 Issue](https://github.com/KillIsLeakedLove/zhuangzi/issues) 反馈问题或建议
- 🔀 [提交 Pull Request](https://github.com/KillIsLeakedLove/zhuangzi/pulls) 完善内容
- 📢 分享传播庄子智慧，让更多人受益

---

## 📜 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

> 「至人无己，神人无功，圣人无名」——《逍遥游》
>
> **在浮躁的时代，寻找内心的宁静**
