# Graphify Exclusions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep generated, dependency, lockfile, coverage, and environment files out of the project knowledge graph.

**Architecture:** Add a project-level `.graphifyignore` file using Graphify's supported ignore mechanism. Document the exclusion rule in `AGENTS.md`, rebuild `graphify-out/`, and verify the graph still contains code, docs, and plans while excluding noisy paths.

**Tech Stack:** Graphify 0.9.6, `.graphifyignore`, Codex `AGENTS.md`, PowerShell verification commands.

---

## File Structure

- Create: `.graphifyignore`
  - Canonical project-level Graphify ignore list.
- Modify: `AGENTS.md`
  - Document that agents must not index generated/dependency/env/lockfile noise.
- Update: `graphify-out/graph.json`
  - Rebuilt graph after the ignore file and plan are added.
- Update: `graphify-out/GRAPH_REPORT.md`
  - Rebuilt report after exclusions are applied.
- Update: `graphify-out/graph.html`
  - Rebuilt visualization after exclusions are applied.

## Task 1: Add Graphify Ignore File

**Files:**
- Create: `.graphifyignore`

- [ ] **Step 1: Add ignored paths**

Create `.graphifyignore` with this content:

```gitignore
node_modules/
.next/
dist/
build/
coverage/
.env
.env.local
package-lock.json
pnpm-lock.yaml
```

- [ ] **Step 2: Confirm the file exists**

Run:

```powershell
Get-Content -Raw .graphifyignore
```

Expected: output contains every ignored path listed in Step 1.

## Task 2: Document The Rule

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Add Graphify noise exclusion rule**

Add this rule to the project-specific Graphify rules:

```markdown
- Never index generated, dependency, coverage, lockfile, or environment noise listed in `.graphifyignore`.
```

- [ ] **Step 2: Confirm the rule exists**

Run:

```powershell
Select-String -Path AGENTS.md -Pattern ".graphifyignore|Never index"
```

Expected: output includes the new rule.

## Task 3: Rebuild And Verify Graph

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

- [ ] **Step 2: Verify required content remains**

Run:

```powershell
python -c "import json; g=json.load(open('graphify-out/graph.json', encoding='utf-8')); files={n.get('source_file') for n in g.get('nodes', []) if n.get('source_file')}; required=['src/app/page.tsx','src/app/layout.tsx','docs/PROJECT_OVERVIEW.md','docs/superpowers/plans/2026-07-04-graphify-exclusions.md','AGENTS.md']; [print(p, p in files) for p in required]"
```

Expected: every line ends with `True`.

- [ ] **Step 3: Verify excluded content is absent**

Run:

```powershell
python -c "import json; g=json.load(open('graphify-out/graph.json', encoding='utf-8')); files=sorted({n.get('source_file') for n in g.get('nodes', []) if n.get('source_file')}); banned=['node_modules','.next','dist','build','coverage','.env','.env.local','package-lock.json','pnpm-lock.yaml']; bad=[f for f in files for b in banned if f == b or f.startswith(b + '/') or ('/' + b + '/') in f or f.endswith('/' + b)]; print(bad)"
```

Expected: output is `[]`.

