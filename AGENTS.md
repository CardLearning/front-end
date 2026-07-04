# Agent Rules

These rules apply to all work in this repository.

## Superpowers

- Use the `superpowers` plugin for project work.
- Before starting a task, load and follow the relevant `superpowers` skill.
- Before any project task starts, create or update the task plan using the relevant `superpowers` planning workflow.
- After a task plan is written under `docs/superpowers/plans/`, refresh the Graphify knowledge graph so the plan is searchable.
- Do not skip `superpowers` because a task looks small or routine.
- If a `superpowers` skill applies, its workflow is mandatory unless the user gives a direct conflicting instruction.

## Testing

- For testing and browser-based verification, use the `@browser` plugin when it is available.
- If `@browser` is unavailable, state that clearly and use the best available local verification method.

## Priority

- Direct user instructions take priority over this file.
- Project documentation under `docs/` should be treated as product context for future work.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Project-specific rules:
- Keep `graphify-out/` current after code, documentation, or planning changes.
- The Graphify knowledge graph must include source code and documentation, not only prose docs.
- Plans under `docs/superpowers/plans/` are part of the project knowledge base and must be indexed in Graphify.
- Never index generated, dependency, coverage, lockfile, or environment noise listed in `.graphifyignore`.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
