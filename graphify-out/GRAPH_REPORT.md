# Graph Report - front-end  (2026-07-04)

## Corpus Check
- 17 files · ~5,916 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 140 nodes · 124 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `12bf46a5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_Card Learning обзор проекта|Card Learning: обзор проекта]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_Graphify Knowledge Base Implementation Plan|Graphify Knowledge Base Implementation Plan]]
- [[_COMMUNITY_Agent Rules|Agent Rules]]
- [[_COMMUNITY_Frontend Architecture|Frontend Architecture]]
- [[_COMMUNITY_Дополнительный функционал после MVP|Дополнительный функционал после MVP]]
- [[_COMMUNITY_Context7 Documentation Rule Implementation Plan|Context7 Documentation Rule Implementation Plan]]
- [[_COMMUNITY_Frontend FSD Styling Rules Implementation Plan|Frontend FSD Styling Rules Implementation Plan]]
- [[_COMMUNITY_Graphify Exclusions Implementation Plan|Graphify Exclusions Implementation Plan]]
- [[_COMMUNITY_Базовый функционал MVP|Базовый функционал MVP]]
- [[_COMMUNITY_Frontend FFD Documentation Implementation Plan|Frontend FFD Documentation Implementation Plan]]
- [[_COMMUNITY_API Contracts|API Contracts]]
- [[_COMMUNITY_README|README.md]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_eslint.config.mjs|eslint.config.mjs]]
- [[_COMMUNITY_next.config.ts|next.config.ts]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Card Learning: обзор проекта` - 12 edges
3. `Graphify Knowledge Base Implementation Plan` - 8 edges
4. `scripts` - 7 edges
5. `Agent Rules` - 7 edges
6. `Дополнительный функционал после MVP` - 7 edges
7. `Frontend Architecture` - 6 edges
8. `Базовый функционал MVP` - 5 edges
9. `Основные пользовательские сценарии` - 5 edges
10. `Context7 Documentation Rule Implementation Plan` - 5 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Card Learning: обзор проекта"
Cohesion: 0.13
Nodes (14): Card Learning: обзор проекта, Frontend-стек, Для кого приложение, Использование чужого набора, Краткое описание, Методология разработки frontend, Обучающий подход, Основные пользовательские сценарии (+6 more)

### Community 2 - "scripts"
Cohesion: 0.13
Nodes (14): dependencies, next, react, react-dom, name, private, scripts, build (+6 more)

### Community 3 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, babel-plugin-react-compiler, eslint, eslint-config-next, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier, eslint-plugin-react-hooks (+6 more)

### Community 4 - "Graphify Knowledge Base Implementation Plan"
Cohesion: 0.22
Nodes (8): File Structure, Graphify Knowledge Base Implementation Plan, Task 1: Verify Graphify CLI, Task 2: Register Graphify For Codex, Task 3: Add Project-Specific Planning Rules, Task 4: Build The Knowledge Graph, Task 5: Verify Graph Coverage, Task 6: Final Status Check

### Community 5 - "Agent Rules"
Cohesion: 0.25
Nodes (7): Agent Rules, Documentation Sources, Frontend: FSD And Sass Modules, graphify, Priority, Superpowers, Testing

### Community 6 - "Frontend Architecture"
Cohesion: 0.29
Nodes (6): Development Methodology, Frontend Architecture, FSD Architecture, Practical Rules, Sass Modules: styles.module.scss, Stack

### Community 7 - "Дополнительный функционал после MVP"
Cohesion: 0.29
Nodes (7): Алгоритмы обучения, Ассоциативные алгоритмы обучения, Аудио воспроизведение, Ачивки и мотивация, Дополнительный функционал после MVP, Мобильное приложение, Уведомления

### Community 8 - "Context7 Documentation Rule Implementation Plan"
Cohesion: 0.33
Nodes (5): Context7 Documentation Rule Implementation Plan, File Structure, Task 1: Add Project-Wide Context7 Rule, Task 2: Add Frontend Context7 Rule, Task 3: Refresh Knowledge Graph

### Community 9 - "Frontend FSD Styling Rules Implementation Plan"
Cohesion: 0.33
Nodes (5): File Structure, Frontend FSD Styling Rules Implementation Plan, Task 1: Update Frontend Documentation With FSD And styles.module.scss, Task 2: Update Agent Rules With FSD And Sass Modules, Task 3: Refresh Knowledge Graph

### Community 10 - "Graphify Exclusions Implementation Plan"
Cohesion: 0.33
Nodes (5): File Structure, Graphify Exclusions Implementation Plan, Task 1: Add Graphify Ignore File, Task 2: Document The Rule, Task 3: Rebuild And Verify Graph

### Community 11 - "Базовый функционал MVP"
Cohesion: 0.40
Nodes (5): Базовый функционал MVP, Наборы карточек, Обучение по карточкам, Ручное интервальное повторение, Шаринг наборов

### Community 12 - "Frontend FFD Documentation Implementation Plan"
Cohesion: 0.40
Nodes (4): File Structure, Frontend FFD Documentation Implementation Plan, Task 1: Update Project Overview, Task 2: Refresh Knowledge Graph

### Community 13 - "API Contracts"
Cohesion: 0.50
Nodes (3): API Contracts, Contract Requirements, Contract Workflow

### Community 14 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **105 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+100 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Card Learning: обзор проекта` connect `Card Learning: обзор проекта` to `Базовый функционал MVP`, `Дополнительный функционал после MVP`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _105 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Card Learning: обзор проекта` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._