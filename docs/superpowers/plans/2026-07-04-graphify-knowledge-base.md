# Graphify Knowledge Base Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install and maintain a Graphify knowledge base for this project so agents can query code, documentation, and task plans before changing the project.

**Architecture:** Graphify will be installed as the project knowledge graph tool and registered for Codex via `AGENTS.md`. The graph output will live in `graphify-out/` and will be refreshed after code, documentation, or `docs/superpowers/plans/` changes so future agents can find relevant files quickly.

**Tech Stack:** Graphify CLI (`graphifyy` PyPI package), Codex `AGENTS.md`, project Markdown docs, Next.js source files.

---

## File Structure

- Modify: `AGENTS.md`
  - Add Graphify workflow rules and keep the existing `superpowers` and `@browser` rules.
- Create or update: `graphify-out/graph.json`
  - Machine-readable knowledge graph containing project code, docs, and planning artifacts.
- Create or update: `graphify-out/GRAPH_REPORT.md`
  - Human-readable knowledge graph report.
- Create or update: `graphify-out/graph.html`
  - Browser-readable graph visualization.
- Create: `docs/superpowers/plans/2026-07-04-graphify-knowledge-base.md`
  - This implementation plan, which must also be included in the knowledge graph.

## Task 1: Verify Graphify CLI

**Files:**
- Read: `AGENTS.md`
- Read: `.gitignore`

- [ ] **Step 1: Check the installed Graphify command**

Run:

```powershell
graphify --version
```

Expected: command exits successfully and prints a version such as `graphify 0.9.2`.

- [ ] **Step 2: Update the official package if needed**

Run:

```powershell
python -m pip install --upgrade graphifyy
```

Expected: command exits successfully and reports `Successfully installed` or `Requirement already satisfied`.

- [ ] **Step 3: Re-check the CLI**

Run:

```powershell
graphify --version
graphify --help
```

Expected: both commands exit successfully, and `graphify --help` lists `update`, `query`, `path`, `explain`, and `codex install`.

## Task 2: Register Graphify For Codex

**Files:**
- Modify: `AGENTS.md`
- Create or modify: `.codex/hooks.json`

- [ ] **Step 1: Run the Codex integration installer**

Run:

```powershell
graphify codex install
```

Expected: command exits successfully and adds a `## graphify` section to `AGENTS.md`. If `.codex/hooks.json` is created or updated, keep it as part of the project setup.

- [ ] **Step 2: Confirm the Graphify rules exist**

Run:

```powershell
Select-String -Path AGENTS.md -Pattern "graphify|graphify query|graphify update"
```

Expected: output includes rules telling agents to query Graphify and refresh `graphify-out/` after code changes.

## Task 3: Add Project-Specific Planning Rules

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Add project workflow rules**

Add these rules to `AGENTS.md` near the existing `Superpowers` section:

```markdown
- Before any project task starts, create or update the task plan using the relevant `superpowers` planning workflow.
- After a task plan is written under `docs/superpowers/plans/`, refresh the Graphify knowledge graph so the plan is searchable.
- Keep `graphify-out/` current after code or documentation changes.
- The Graphify knowledge graph must include source code and documentation, not only prose docs.
```

Expected: existing `superpowers` and `@browser` rules remain intact.

- [ ] **Step 2: Review the final rules file**

Run:

```powershell
Get-Content -Raw AGENTS.md
```

Expected: the file includes `superpowers`, `@browser`, project planning, and Graphify query/update rules without duplicate conflicting sections.

## Task 4: Build The Knowledge Graph

**Files:**
- Create or update: `graphify-out/graph.json`
- Create or update: `graphify-out/GRAPH_REPORT.md`
- Create or update: `graphify-out/graph.html`

- [ ] **Step 1: Build or refresh the graph**

Run:

```powershell
graphify update . --force
```

Expected: command exits successfully and creates or updates `graphify-out/graph.json`, `graphify-out/GRAPH_REPORT.md`, and `graphify-out/graph.html`.

- [ ] **Step 2: If `graphify update . --force` fails because no prior graph exists, run a full extraction**

Run:

```powershell
graphify extract . --no-cluster
graphify cluster-only .
```

Expected: both commands exit successfully and generate the same three `graphify-out/` files.

## Task 5: Verify Graph Coverage

**Files:**
- Read: `graphify-out/graph.json`
- Read: `graphify-out/GRAPH_REPORT.md`

- [ ] **Step 1: Confirm expected graph files exist**

Run:

```powershell
Test-Path graphify-out/graph.json
Test-Path graphify-out/GRAPH_REPORT.md
Test-Path graphify-out/graph.html
```

Expected: each command prints `True`.

- [ ] **Step 2: Check that the graph contains code, docs, and this plan**

Run:

```powershell
python -c "import json; g=json.load(open('graphify-out/graph.json', encoding='utf-8')); labels='\\n'.join(str(n.get('label') or n.get('id') or n) for n in g.get('nodes', [])); print('src/app/page.tsx' in labels); print('docs/PROJECT_OVERVIEW.md' in labels); print('docs/superpowers/plans/2026-07-04-graphify-knowledge-base.md' in labels)"
```

Expected: the command prints three `True` lines.

- [ ] **Step 3: Verify query works**

Run:

```powershell
graphify query "Где описаны правила работы с планами и графом?" --budget 1200
```

Expected: output references `AGENTS.md`, this plan file, or `graphify-out/` rules.

## Task 6: Final Status Check

**Files:**
- Read: git working tree

- [ ] **Step 1: Check git status**

Run:

```powershell
git status --short
```

Expected: output lists the new or modified setup files without unrelated tracked code changes.

- [ ] **Step 2: Summarize completion**

Report:

```text
Graphify is installed or updated, Codex rules are registered, AGENTS.md requires superpowers planning before tasks, graphify-out contains code/docs/plan knowledge graph files, and graphify query works.
```
