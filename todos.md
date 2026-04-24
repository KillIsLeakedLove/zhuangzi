# 庄子智慧网站 — 查漏补缺清单

> 以下为本项目审查后发现的待修复/优化事项，按优先级排序。

---

## 🔴 高优先级 — 内容错误与重复

### 1. 重复章节数据（需合并或删除）
- [x] **`tianxia.js` 与 `tianda.js` 内容完全重复**
  - 两者标题均为《天下》，内容、解读、启示、用例完全一致
  - **处理**：已删除 `tianda.js`

- [x] **`hongbeiming.js` 与 `jiquan.js` 内容高度重复**
  - 两者标题均为《庚桑楚》，内容几乎一致
  - **处理**：已删除 `jiquan.js`，并将 `hongbeiming.js` 重命名为 `gengsangchu.js`

- [x] **`lieyukou.js` 与 `liezi.js` 同为《列御寇》但内容不同**
  - **处理**：已删除 `liezi.js`，保留内容更丰富的 `lieyukou.js`

### 2. 文件名与章节标题严重不匹配
- [x] **`zhimubai.js` → 实际内容为《至乐》** → 已重命名为 `zhile.js`
- [x] **`hongbeiming.js` → 实际内容为《庚桑楚》** → 已重命名为 `gengsangchu.js`
- [x] **`shuibai.js` → 实际内容为《说剑》** → 已重命名为 `shuojian.js`
- [x] **`zuojian.js` → 实际内容为《渔父》** → 已重命名为 `yufu.js`

### 3. 章节分类错误（main.js 中内/外/杂篇归属不当）
- [x] **《天下》从外篇移到杂篇**（传统上属杂篇）
- [x] **《列御寇》从外篇移到杂篇**（传统上属杂篇）
- [x] **删除不存在的"荆筐"条目**

---

## 🟡 中优先级 — 内容质量与一致性

### 4. 部分内容质量参差不齐
- [x] **`wawu.js`（外物）内容明显偏短**
  - 已补充完整的 5 点启示 + 3 个历史用例

### 5. 数据命名规范
- [x] `index.html` 中 `<script>` 标签加载列表已同步更新
- [x] `main.js` 中 `chapterData` 映射已同步更新
- [x] 4 个重命名文件的全局变量名已同步更新

---

## 🟢 低优先级 — 体验优化与工程化

### 6. HTML / 前端优化
- [x] **添加 favicon**（使用 SVG data URI 的 ☯ 符号）
- [x] **补充 SEO meta 标签**：`description`、`keywords`、`author`
- [x] **添加 Open Graph 标签**：`og:title`、`og:description`、`og:type`
- [x] `<title>` 优化为"庄子智慧 — 内篇·外篇·杂篇全解"

### 7. 文案修正
- [x] `readme.md` 章节总数从 28 修正为 25
- [x] `readme.md` 外篇从 15 章修正为 13 章
- [x] `readme.md` 杂篇从 6 章修正为 5 章

---

## 📋 核查附录 — 当前数据文件清单与对应状态

| 文件名 | 实际标题 | 在 main.js 中的分类 | 状态 |
|--------|----------|---------------------|------|
| `xiaoyaoyou.js` | 逍遥游 | 内篇 | ✅ 正常 |
| `qiwulun.js` | 齐物论 | 内篇 | ✅ 正常 |
| `yangshengzhu.js` | 养生主 | 内篇 | ✅ 正常 |
| `renjianshi.js` | 人间世 | 内篇 | ✅ 正常 |
| `dechongfu.js` | 德充符 | 内篇 | ✅ 正常 |
| `dashizong.js` | 大宗师 | 内篇 | ✅ 正常 |
| `yingdiwang.js` | 应帝王 | 内篇 | ✅ 正常 |
| `tiandao.js` | 天道 | 外篇 | ✅ 正常 |
| `tianyun.js` | 天运 | 外篇 | ✅ 正常 |
| `qishui.js` | 秋水 | 外篇 | ✅ 正常 |
| `zhile.js` | 至乐 | 外篇 | ✅ 已重命名 |
| `dasheng.js` | 达生 | 外篇 | ✅ 正常 |
| `shanshui.js` | 山木 | 外篇 | ✅ 正常 |
| `tianziyan.js` | 田子方 | 外篇 | ✅ 正常 |
| `zhiman.js` | 知北游 | 外篇 | ✅ 正常 |
| `yuyan.js` | 寓言 | 外篇 | ✅ 正常 |
| `rangwang.js` | 让王 | 外篇 | ✅ 正常 |
| `shuojian.js` | 说剑 | 外篇 | ✅ 已重命名 |
| `daozhi.js` | 盗跖 | 外篇 | ✅ 正常 |
| `yufu.js` | 渔父 | 外篇 | ✅ 已重命名 |
| `gengsangchu.js` | 庚桑楚 | 杂篇 | ✅ 已重命名 |
| `zeyang.js` | 则阳 | 杂篇 | ✅ 正常 |
| `wawu.js` | 外物 | 杂篇 | ✅ 已补充内容 |
| `lieyukou.js` | 列御寇 | 杂篇 | ✅ 已移分类 |
| `tianxia.js` | 天下 | 杂篇 | ✅ 已移分类 |

**已删除文件**：`tianda.js`、`jiquan.js`、`liezi.js`

---

## 💡 剩余可选优化（后续迭代）

- [ ] 移动端响应式进一步检查（`.main-content` 在 `height: 100vh` 下的内容裁剪）
- [ ] 添加"返回顶部"按钮或章节内快速导航
- [ ] 考虑将分散的 `content/*.js` 文件合并为一个 JSON 数据文件，减少 HTTP 请求
- [ ] 添加简单的内容校验脚本，确保每个章节数据格式正确
