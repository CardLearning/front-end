# Frontend FSD Styling Rules Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Document mandatory frontend architecture and styling rules: FSD architecture, Sass, and CSS Modules colocated with TSX components.

**Architecture:** Add canonical rules to `docs/architecture/frontend.md`, add a short mandatory reminder to `AGENTS.md`, then refresh Graphify so agents can discover the rules through the knowledge graph.

**Tech Stack:** Next.js, TypeScript, FSD, Sass, CSS Modules, Graphify.

---

## File Structure

- Modify: `docs/architecture/frontend.md`
  - Add FSD architecture and Sass module styling rules.
- Modify: `AGENTS.md`
  - Add mandatory frontend rules for future agents.
- Update: `graphify-out/graph.json`
  - Refresh knowledge graph after documentation changes.
- Update: `graphify-out/GRAPH_REPORT.md`
  - Refresh report after documentation changes.
- Update: `graphify-out/graph.html`
  - Refresh visualization after documentation changes.

## Task 1: Update Frontend Documentation With FSD And styles.module.scss

**Files:**
- Modify: `docs/architecture/frontend.md`

- [ ] **Step 1: Add FSD architecture rule**

Add a section stating that frontend code must use FSD architecture.

- [ ] **Step 2: Add Sass module rule**

Add styling rules requiring:

```text
styles.module.scss
```

to live next to the related `.tsx` component and to be imported as:

```ts
import s from "./styles.module.scss"
```

## Task 2: Update Agent Rules With FSD And Sass Modules

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Add frontend rules section**

Add a compact `Frontend` section requiring FSD architecture and Sass module colocated styles.

## Task 3: Refresh Knowledge Graph

**Files:**
- Update: `graphify-out/graph.json`
- Update: `graphify-out/GRAPH_REPORT.md`
- Update: `graphify-out/graph.html`

- [ ] **Step 1: Rebuild Graphify**

Run:

```powershell
graphify update . --force
```

Expected: command exits successfully and updates graph files in `graphify-out/`.

- [ ] **Step 2: Verify graph search**

Run:

```powershell
graphify query "FSD architecture Sass styles.module.scss import s" --budget 1800
```

Expected: output references `docs/architecture/frontend.md`, `AGENTS.md`, or this plan.
