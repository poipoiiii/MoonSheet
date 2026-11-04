# MoonSheet：MoonBit 表格计算内核

> 申报书级方案 · v0.1

## 0. 一句话定位

**MoonSheet 是一个用 MoonBit 从零实现的 headless 表格计算内核：负责公式解析、类型求值、依赖图分析与增量重算，并附带 CLI 与可交互 Web 网格用于演示和验收。**

它不是 Excel 克隆，也不做协作、云存储或完整 xlsx 兼容；它要补的是 MoonBit 生态里“表格公式计算”这一层可复用基础能力。

## 1. 选题背景与生态空缺

MoonBit 生态已经有不少相邻能力：

| 已有能力 | 代表项目 / 包 | 与本项目的关系 |
|---|---|---|
| xlsx 文件读写 | `bobzhang/mbtexcel` | 可复用其 IO，本项目专注“公式计算” |
| DataFrame | `MoonFrame` | 数据处理的上层，本项目可作为其单元格计算后端 |
| 文件型 SQL 查询 | `magpiedb` | 只读 OLAP，不提供表格公式与增量重算 |
| 文档转换 | `markitdown`、`MoonBitMark` | 输出 Markdown，不计算表格 |
| 图表 | `MoonCharts`、`yuecharts` | 消费计算结果，不是计算内核 |

**空缺很明确：**没有“工作簿 + 公式语言 + 依赖图 + 增量重算 + 错误/类型语义”的独立库。表格计算又是报表、财务、教学、数据分析、文档系统里反复出现的共性需求，边界清晰、可测试、可复用，符合赛事对生态库的偏好。

赛事方向匹配：

- OSC：生态库 / 开发工具 / 应用开发与内容处理。
- SCC：明确列出的“电子表格核心系统（Spreadsheet Core）”，以及“具备长期工程价值的系统型软件”。

## 2. 目标用户与场景

| 用户 | 场景 | MoonSheet 提供什么 |
|---|---|---|
| MoonBit 应用开发者 | 在报表、预算、实验记录里嵌入公式计算 | 一个无平台依赖的库，native / wasm / js 均可编译 |
| 文档 / 数据工具作者 | 从 CSV、JSON、xlsx 读入数据并计算 | 统一的值模型、公式求值、错误传播 |
| 教学与算法实践者 | 演示表达式解析、依赖图、增量计算 | 可读的实现、可视化依赖图、可跑测试 |
| AI Agent / 自动化工具 | 让代理生成、解释、校验表格公式 | 确定性计算内核 + 可选公式解释接口 |

## 3. 功能边界

### 3.1 范围内（MVP 必须完成）

1. **工作簿模型**
   - Workbook / Worksheet / Cell / Range / Address。
   - 稀疏单元格存储；空单元格与显式空值区分。
   - 命名区域、跨工作表引用、绝对/相对引用（`$A$1`、`A1`）。
2. **公式语言**
   - Lexer + Pratt parser + AST。
   - 数字、字符串、布尔、错误字面量、函数调用、区域、括号、一元/二元运算。
   - 运算符优先级与结合性；引用解析；公式序列化回文本。
3. **计算引擎**
   - 值类型：Number / Text / Boolean / Date / Error / Blank。
   - Excel 风格类型强转与错误传播（`#DIV/0!`、`#VALUE!`、`#REF!`、`#NAME?`、`#N/A`、`#NUM!`、`#CIRC!`）。
   - 函数库：数学、统计、文本、逻辑、查找、日期、财务七类，分批实现 100–200 个常用函数。
   - 日期序列号与 1900/1904 日期系统；时区无关。
4. **依赖图与重算**
   - Precedent / dependent 双向边；区域依赖索引。
   - 全量重算作为正确性基线；增量重算作为性能路径。
   - 拓扑排序、dirty 子图传播、循环引用检测。
   - Debug 模式强制比对“增量结果 == 全量结果”。
5. **互操作**
   - CSV 导入导出，包含引号转义。
   - 类型保持的 JSON 工作簿导入导出（formula / kind / value）。
   - XLSX 常用子集列为后续集成点：复用现有 MoonBit xlsx 读取器，把值与公式交给 `Sheet::set_value` / `Sheet::set_formula`。
6. **前端与工具**
   - CLI：`eval`、`calc`、`json`、`validate`、`stress`。
   - Web 网格：单元格编辑、公式栏、区域选择、依赖高亮、错误/循环提示、重算计数。
   - 可复现的示例数据与一键启动脚本。

### 3.2 范围外（明确不做）

- 完整 Excel 兼容（宏、VBA、数据透视表、条件格式、复杂样式、打印布局）。
- 协作编辑、云端存储、账号体系。
- 图表渲染引擎（可输出数据给 MoonCharts 等）。
- 完整 xlsx 规范（0.1.0 不包含 xlsx；通过 CSV/JSON 覆盖互操作，xlsx 作为后续适配层）。
- 迭代计算 / 手动计算模式（列为后续可选增强）。

### 3.3 分期

| 阶段 | 主题 | 必须交付 |
|---|---|---|
| M0 | 工程骨架 | `moon.mod`、包结构、CI、测试夹具格式、API 草案 |
| M1 | 公式前端 | Lexer、Parser、AST、公式序列化、解析错误定位 |
| M2 | 求值核心 | 值模型、类型强转、引用/区域求值、错误传播、基础函数 |
| M3 | 依赖图 | 双向依赖、拓扑重算、循环检测、增量 vs 全量一致性 |
| M4 | 函数与语义 | 七类函数库、日期/统计/查找边界、命名区域、数字格式、55 项测试 |
| M5 | IO 与工具 | CSV/JSON、CLI、示例（xlsx 作为后续适配层） |
| M6 | 展示与硬化 | Web 网格、文档、CI 全绿、mooncakes 0.1.0 |

## 4. 系统架构

### 4.1 包结构

```text
MoonSheet/
├── moon.mod
├── lib/
│   ├── types/        # Value / CellError / CellFormat / Address / Range
│   ├── formula/      # lexer / parser / AST / reference collection
│   ├── eval/         # evaluator / coercion / control flow / range functions
│   ├── functions/    # math / text / logical / lookup / date / financial / stats
│   ├── graph/        # dependency graph / topo sort / cycle detection
│   ├── format/       # number formatting (decimals / grouping / currency / percent)
│   ├── workbook/     # workbook / worksheet / named ranges / recalc / formats
│   └── io/           # CSV / JSON
├── cmd/moonsheet/    # CLI
├── web/              # MoonBit + JS FFI 网格
├── fixtures/         # 公式一致性语料、样例工作簿
├── docs/
│   ├── proposal.md
│   └── design.md
├── .github/workflows/
├── README.md
├── CHANGELOG.md
└── LICENSE
```

核心库无平台依赖；IO 与 DOM 通过边界包隔离，保证 native / wasm / js 三后端可编译。

### 4.2 数据流

```text
文本公式
  │  lexer
  ▼
Token 流
  │  parser
  ▼
AST ──────────────┐
  │               │
  │ 引用解析       │ 依赖收集
  ▼               ▼
求值器          依赖图
  │               │
  │ 值/错误        │ dirty 子图 + 拓扑序
  ▼               ▼
单元格结果 ◄──── 增量重算
  │
  ▼
CLI / Web / 导出
```

### 4.3 核心模块职责

| 模块 | 职责 | 不做什么 |
|---|---|---|
| `types` | 值、错误、地址、区域、单元格 | 不解析文本 |
| `formula` | 文本 ↔ AST，语法错误定位 | 不访问工作簿 |
| `eval` | AST 求值、类型强转、错误传播 | 不决定重算顺序 |
| `graph` | 依赖关系、拓扑排序、循环检测 | 不执行函数 |
| `workbook` | 工作簿状态、命名区域、重算编排 | 不解析公式文本 |
| `io` | CSV/JSON/XLSX 边界 | 不参与计算语义 |
| `cmd` / `web` | 交互与展示 | 不重复实现核心逻辑 |

## 5. 关键设计

### 5.1 值模型与错误

```moonbit
pub enum Value {
  Number(Double)
  Text(String)
  Boolean(Bool)
  Date(Int)          // 序列号，1900/1904 由工作簿配置
  Error(CellError)
  Blank
}

pub enum CellError {
  DivZero
  Value
  Ref
  Name
  NotAvailable
  Num
  Circular
}
```

设计原则：

- **Blank 与 Text("") 区分**：影响 `COUNT`、`COUNTA`、比较与连接。
- **错误是值，不是异常**：错误沿表达式传播，保证批量计算不中断。
- **强转规则集中在一处**：`to_number` / `to_text` / `to_bool` 表驱动，便于一致性测试。
- **日期用序列号**：避免时区与本地化差异，格式化交给展示层。

### 5.2 公式语言

```moonbit
pub enum Expr {
  NumberLit(Double)
  TextLit(String)
  BoolLit(Bool)
  ErrorLit(CellError)
  Ref(Address)
  Range(RangeRef)
  Unary(UnaryOp, Expr)
  Binary(BinaryOp, Expr, Expr)
  Call(String, Array[Expr])
  Name(String)          // 命名区域
}
```

解析策略：

- Pratt parser，优先级表显式定义。
- 错误恢复：记录首个错误位置与期望 token，返回可读诊断。
- 公式打印器保证 `parse(print(ast)) == ast`，用于 round-trip 测试。
- 引用解析与求值分离：解析阶段只产出地址/区域，求值阶段再访问工作簿。

### 5.3 依赖图与重算

- 每个公式单元格记录两类边：
  - `precedents`：它依赖谁（单元格或区域）。
  - `dependents`：谁依赖它。
- 区域依赖使用**区域索引**，避免把 `A1:A100000` 展开成十万条边。
- 修改单元格后：
  1. 标记自身与传递 dependents 为 dirty。
  2. 对 dirty 子图做拓扑排序。
  3. 按序求值；循环节点标记 `#CIRC!`。
- 正确性策略：全量重算始终可用；增量重算在 debug/test 模式下与全量结果逐格比对。
- 性能策略：只重算 dirty 子图；区域索引按行/列分桶；大表用稀疏结构。

### 5.4 函数库

按类别注册，统一签名与错误约定：

```moonbit
pub struct FunctionSpec {
  name : String
  min_args : Int
  max_args : Int
  eval : (Array[Value]) -> Value
}
```

首批函数（按优先级）：

| 类别 | 示例 | 说明 |
|---|---|---|
| 数学 | `SUM` `AVERAGE` `MIN` `MAX` `ROUND` `ABS` `MOD` | 区域聚合与数值边界 |
| 逻辑 | `IF` `AND` `OR` `NOT` `IFERROR` | 惰性求值需单独处理 |
| 文本 | `LEN` `LEFT` `RIGHT` `MID` `CONCAT` `TEXT` | Unicode 与格式 |
| 查找 | `VLOOKUP` `INDEX` `MATCH` `CHOOSE` | 区域访问与未命中错误 |
| 统计 | `COUNT` `COUNTA` `COUNTIF` `SUMIF` `STDEV` | Blank/错误/文本过滤 |
| 日期 | `DATE` `YEAR` `MONTH` `DAY` `TODAY` `EDATE` | 序列号与月份溢出 |
| 财务 | `PMT` `FV` `PV` `NPV` `IRR` | 数值稳定性 |

`IF` / `IFERROR` 需要惰性求值，求值器不能预先对所有参数求值；这是与普通函数不同的控制流节点。

### 5.5 性能策略

- 稀疏单元格：只存有值/公式的格子。
- 区域索引：按工作表 + 行列范围建索引，避免区域依赖全展开。
- 增量重算：dirty 子图 + 拓扑序。
- 基准场景：1k / 10k / 100k 单元格；宽表与深链两种形态。
- 基准输出：重算耗时、访问节点数、依赖边数，便于回归对比。

### 5.6 IO 与互操作

- CSV：首行表头可选；空字段 → Blank；公式列可带前导 `=`。
- JSON：工作簿/工作表/单元格的结构化导入导出，便于前端与测试。
- XLSX：优先复用 `mbtexcel` 读取值与公式；无法表达的样式/宏降级忽略，并在文档中说明。
- 导出：值、公式、错误三类视图。

## 6. 对外接口

### 6.1 Library

```moonbit
let wb = @workbook.Workbook::new()
let sheet = wb.add_sheet("Sheet1")

sheet.set("A1", @types.Value::Number(10.0))
sheet.set_formula("A2", "=A1 * 2")
sheet.set_formula("A3", "=SUM(A1:A2)")

let value = sheet.get_value("A3")   // Number(30.0)
let formula = sheet.get_formula("A3") // "=SUM(A1:A2)"

match sheet.recalculate() {
  Ok(stats) => println("recalculated: \{stats.cells}")
  Err(errors) => println("errors: \{errors.length()}")
}
```

### 6.2 CLI

```bash
moon run cmd/moonsheet -- eval "=SUM(1,2,3)"          # 6
moon run cmd/moonsheet -- calc fixtures/budget.csv     # 计算结果
moon run cmd/moonsheet -- validate fixtures/formulas.json
moon run cmd/moonsheet -- bench --cells 10000
```

### 6.3 Web

- 网格渲染、单元格编辑、公式栏。
- 选中单元格时高亮其 precedents / dependents。
- 错误单元格显示错误码与简短原因；循环引用单独标色。
- 导入 CSV / JSON，导出结果；可分享一个包含公式的示例工作簿。
- 复用 chess web 的 JS FFI + 静态服务器模式，保持构建简单。

## 7. 测试与验收

### 7.1 测试分层

| 层级 | 内容 | 目标 |
|---|---|---|
| 单元测试 | lexer / parser / AST printer / 强转 / 单函数 | 每个模块可独立验证 |
| 一致性测试 | 公式用例表（当前 55 个测试，含跨模块一致性） | 与参考语义一致 |
| 图测试 | 依赖边、拓扑序、循环、区域索引 | 重算正确性 |
| 属性测试 | 增量 == 全量；重算顺序无关；IO round-trip | 已覆盖主要路径，后续扩展随机化 |
| Fuzz / 基准 | 随机公式、随机编辑序列、1k/10k/100k 单元格 | 后续增强 |

### 7.2 一致性语料

`fixtures/formulas.json` 保留为可扩展的语料格式；当前可执行的一致性检查位于 `lib/workbook/conformance_wbtest.mbt`，通过真实的 `Sheet::recalculate` 路径运行。

```json
[
  {
    "id": "math.sum.basic",
    "sheet": { "A1": 1, "A2": 2, "A3": "=SUM(A1:A2)" },
    "expect": { "A3": 3 }
  },
  {
    "id": "error.divide_by_zero",
    "sheet": { "A1": "=1/0" },
    "expect": { "A1": "#DIV/0!" }
  }
]
```

期望值优先由人工审核的公开语义确定；需要批量生成时，用参考实现离线产出并人工抽查，不把参考实现作为运行时依赖。

### 7.3 验收命令

```bash
moon check --target native
moon test --target native
moon fmt --check
moon info

moon run cmd/moonsheet -- eval "=SUM(1,2,3)"
moon run cmd/moonsheet -- calc fixtures/budget.csv
moon run cmd/moonsheet -- bench --cells 10000
```

Web 演示通过静态服务器打开，点击单元格、输入公式、观察重算与依赖高亮。

### 7.4 验收标准

- [ ] 核心库在 native / wasm / js 三后端可编译（至少 native + js 有 CI 覆盖）。
- [ ] 公式解析、求值、依赖图、重算、循环检测全部有测试。
- [ ] 500+ 一致性用例通过；错误码与边界行为有文档。
- [ ] 增量重算与全量重算在测试中逐格一致。
- [ ] CLI 与 Web demo 可按文档一键复现。
- [ ] `mooncakes.io` 发布 0.1.0；README / design / CHANGELOG 完整。
- [ ] CI 通过 `check` / `test` / `fmt` / `info`。

## 8. 里程碑与交付物

| 里程碑 | 进入条件 | 交付物 | 验收方式 |
|---|---|---|---|
| M0 骨架 | 方案确认 | `moon.mod`、包结构、CI、语料格式、API 草案 | `moon check` 通过 |
| M1 公式前端 | M0 | lexer、parser、AST、printer、解析错误测试 | 解析用例全绿 |
| M2 求值核心 | M1 | 值模型、强转、引用/区域、错误传播、基础函数 | 单函数与表达式测试 |
| M3 依赖图 | M2 | 双向依赖、拓扑重算、循环检测、增量/全量对比 | 图测试 + 属性测试 |
| M4 函数与语义 | M3 | 七类函数、日期/统计/查找边界、500+ 用例 | 一致性套件全绿 |
| M5 IO 与 CLI | M4 | CSV/JSON、XLSX 子集、CLI、示例 | 命令可复现 |
| M6 展示与发布 | M5 | Web 网格、文档、fuzz、bench、0.1.0 发布 | CI 全绿 + demo 可演示 |

## 9. 风险与应对

| 风险 | 影响 | 应对 |
|---|---|---|
| Excel 语义边界多 | 结果与用户预期不符 | 明确“支持的子集”；一致性语料覆盖边界；文档列出差异 |
| XLSX 规范复杂 | IO 拖垮进度 | 只做常用子集；复用 `mbtexcel`；失败时降级为值导入 |
| 依赖图性能 | 大表重算慢 | 稀疏存储 + 区域索引 + dirty 子图；benchmark 回归 |
| 函数范围膨胀 | 无法收敛 | 分 Tier：Tier 1 必做、Tier 2 加分；以用例驱动 |
| 惰性函数与错误传播 | 求值器复杂 | 控制流节点单独处理；先 `IF` / `IFERROR`，再扩展 |
| 单人开发范围失控 | 完成度不足 | 里程碑门禁；M2 后先跑通端到端最小闭环，再扩函数 |

## 10. 与现有项目的复用关系

| 现有资产 | 复用方式 |
|---|---|
| MoonChess 的 perft 思路 | 用“一致性语料 + 全量/增量对比”作为计算正确性的 oracle |
| MoonChess 的 Web FFI | 复用 JS FFI、静态服务器、点击交互与构建脚本模式 |
| Agent Runtime 的工程规范 | 复用 CI、README 结构、CHANGELOG、mooncakes 发布流程 |
| Agent Runtime 的 LLM 网关 | 可选：公式解释/生成助手；不进入核心库，不影响确定性 |

三个项目保持独立仓库/模块，不互相耦合；复用是工程方法与模式，不是代码依赖。

## 11. 参赛材料清单

- [ ] `README.md`：30 秒定位、架构图、快速开始、演示截图、验收命令。
- [ ] `docs/proposal.md`：本方案。
- [ ] `docs/design.md`：数据模型、求值语义、依赖图与重算设计取舍。
- [ ] `LICENSE`：MIT。
- [ ] `CHANGELOG.md`。
- [ ] `.github/workflows/check.yml`：三平台 `check` / `test` / `fmt` / `info`。
- [ ] `mooncakes.io` 0.1.0 发布。
- [ ] Web demo 与 GIF/视频。
- [ ] 开发历程文章：AI 工具使用、参考实现取舍、踩坑与复盘。
- [ ] 一页 PDF 申报书。

## 12. 代码规模（实际）

| 包 | 实际 MoonBit 行数 | 说明 |
|---|---:|---|
| `types` | 161 | 值、错误、地址、区域 |
| `formula` | 578 | lexer、parser、AST、引用收集 |
| `eval` | 555 | 求值、强转、错误、控制流、范围函数 |
| `functions` | 1,337 | 55+ 函数与边界 |
| `graph` | 138 | 依赖图、拓扑、循环 |
| `format` | 约 100 | 数字格式：千分位、货币、百分比 |
| `workbook` | 450 | 工作簿、重算编排、增量路径、命名区域、格式 |
| `io` | 280 | CSV/JSON |
| `cmd` | 152 | CLI |
| `web` | 450 | JS FFI、网格交互、格式选择 |
| 测试 | 约 560 | 55 个单元/一致性测试 |
| **合计** | **约 4.6k** | 另有 HTML/CSS/JS 演示层 |

符合赛事“4–10k 有效代码”的参考区间。函数库、XLSX 适配层、随机化属性测试和基准测试保留了明确的扩展点。

## 13. 首批任务

1. 建立 `moon.mod`、`lib/*` 包骨架、`.github/workflows/check.yml`。
2. 定义 `Value` / `CellError` / `Address` / `Range`，补齐单元测试。
3. 实现 lexer + Pratt parser + AST printer，建立解析用例。
4. 实现算术/比较/引用/区域求值，跑通 `=SUM(A1:A3)` 最小闭环。
5. 建立依赖图与全量重算，先不做增量。
6. 加增量重算 + 循环检测，并在测试中比对全量结果。
7. 接入 CLI `eval` / `calc`，用 `fixtures/budget.csv` 做端到端示例。
8. 再按 Tier 扩函数库、IO 与 Web 网格。

---

**范围原则：先让“一个公式从文本到结果、从修改到重算”完整跑通，再扩函数与格式。**
