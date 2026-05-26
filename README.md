# v1-builder

An AI tool that takes a product idea — a few sentences from a founder, a sketch on a whiteboard — and scaffolds a working v1: frontend, backend, database, deploy pipeline, and tests. Less "code generator," more "opinionated AI engineer that ships a coherent project."

## Status

Pre-development. Scope and architecture defined; implementation in progress.

## Why this exists

Most AI scaffolders generate components in isolation: a UI here, an API stub there, no glue. The premise here is the opposite — start from product intent, generate a *coherent* scaffold (frontend talks to backend, backend talks to a real DB, tests exist, CI works), and surface the architectural decisions so a human can override them rather than fight them.

## Planned approach

1. **Intent capture** — structured intake: what does the product do, who's it for, what data does it model
2. **Architecture plan** — agent proposes a stack, schema, route map, and test plan; user revises
3. **Generation** — multi-stage pipeline produces a working repo: schema → migrations → API → UI → tests → CI
4. **Verification** — generated code runs, tests pass, deploy works before handoff

## Planned stack

| Layer | Choice | Rationale |
|---|---|---|
| Web app | Next.js 15 | Streaming UI for long jobs |
| Agent runtime | Inngest | Long-running, observable, replayable |
| LLM | Claude (primary), GPT (fallback) | Tool use depth, configurable |
| Codegen target | Next.js + Drizzle + Postgres + Vitest + GH Actions | One opinionated stack done well |
| Code execution | Sandboxed via E2B | Run generated code safely |
| Output | Pushed to user's GitHub repo | Real artifact, not a zip |

## Planned features

- Intake interview (structured + conversational)
- Live architecture plan with editable decisions
- Step-by-step generation with progress streaming
- Generated repo runs locally and deploys to Vercel out of the box
- Iterative refinement (talk to the agent after generation)

## Roadmap

- [ ] Intake UI + plan generation (no codegen yet)
- [ ] Single-stack generator: schema + migrations
- [ ] API layer from schema
- [ ] UI scaffold from API + intent
- [ ] Test generation
- [ ] CI / deploy wiring
- [ ] Iteration loop (post-generation chat)

---

By [Jamison Kimminau](https://github.com/jkimminau).
