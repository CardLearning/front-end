# Context7 Documentation Rule Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a project rule requiring agents to use Context7 when they need library, framework, API, or tooling documentation.

**Architecture:** Document the rule in `AGENTS.md` for all agents and in `docs/architecture/frontend.md` for frontend work. Refresh Graphify so the rule is searchable before future implementation tasks.

**Tech Stack:** Context7, Codex agent rules, frontend architecture documentation, Graphify.

---

## File Structure

- Modify: `AGENTS.md`
  - Add a project-wide documentation source rule requiring Context7.
- Modify: `docs/architecture/frontend.md`
  - Add Context7 to frontend documentation-source rules.
- Update: `graphify-out/graph.json`
  - Refresh knowledge graph after the new rule is added.
- Update: `graphify-out/GRAPH_REPORT.md`
  - Refresh report after the new rule is added.
- Update: `graphify-out/graph.html`
  - Refresh visualization after the new rule is added.

## Task 1: Add Project-Wide Context7 Rule

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Add documentation source rule**

Add a section requiring agents to use Context7 before relying on memory or generic web search for library, framework, API, SDK, CLI, or tooling documentation.

## Task 2: Add Frontend Context7 Rule

**Files:**
- Modify: `docs/architecture/frontend.md`

- [ ] **Step 1: Add frontend documentation-source rule**

Add a rule that frontend questions about Next.js, React, Sass, TypeScript, FSD tooling, or other libraries must use Context7 for current documentation.

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
graphify query "Context7 documentation library framework API docs" --budget 1800
```

Expected: output references `AGENTS.md`, `docs/architecture/frontend.md`, or this plan.

