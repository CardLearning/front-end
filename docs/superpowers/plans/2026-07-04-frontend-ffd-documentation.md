# Frontend FFD Documentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Document that the frontend uses Next.js and follows Frontend-first development.

**Architecture:** Add the frontend stack and FFD methodology to the product overview documentation, then refresh Graphify so future agents can discover the decision through the knowledge graph.

**Tech Stack:** Next.js, TypeScript, fixtures/mock data, Graphify.

---

## File Structure

- Modify: `docs/PROJECT_OVERVIEW.md`
  - Add frontend stack and development methodology sections with links to architecture docs.
- Modify: `docs/architecture/frontend.md`
  - Add the canonical frontend stack and FFD methodology rules.
- Modify: `docs/architecture/api-contracts.md`
  - Add FFD-based API contract workflow rules.
- Update: `graphify-out/graph.json`
  - Refresh knowledge graph after documentation changes.
- Update: `graphify-out/GRAPH_REPORT.md`
  - Refresh report after documentation changes.
- Update: `graphify-out/graph.html`
  - Refresh visualization after documentation changes.

## Task 1: Update Project Overview

**Files:**
- Modify: `docs/PROJECT_OVERVIEW.md`
- Modify: `docs/architecture/frontend.md`
- Modify: `docs/architecture/api-contracts.md`

- [ ] **Step 1: Add frontend stack**

Add sections stating that the frontend is built with Next.js and TypeScript in `docs/PROJECT_OVERVIEW.md` and `docs/architecture/frontend.md`.

- [ ] **Step 2: Add FFD methodology**

Add a section describing Frontend-first development:

```markdown
1. Проектирование UI.
2. Создание TypeScript типов.
3. Создание fixtures/mock data.
4. Разработка frontend.
5. Определение API-контрактов.
6. Реализация backend.
7. Замена fixtures на реальные запросы.
```

- [ ] **Step 3: Confirm the documentation contains the decision**

Run:

```powershell
Select-String -Path docs/PROJECT_OVERVIEW.md -Pattern "Next.js|Frontend-first development|fixtures|API-контракт"
```

Expected: output references the new frontend stack and FFD methodology sections.

- [ ] **Step 4: Add API contract workflow**

Add `docs/architecture/api-contracts.md` content that explains API contracts are defined after UI, TypeScript types, fixtures/mock data, and primary frontend implementation.

## Task 2: Refresh Knowledge Graph

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
graphify query "Next.js Frontend-first development FFD fixtures API contracts" --budget 1600
```

Expected: output references `docs/PROJECT_OVERVIEW.md` and the FFD documentation.
