---
name: write-agents-md
description: Writes or reviews a repository's AGENTS.md and the CLAUDE.md that points to it, keeping only rules that hold in every task, verified commands and justified divergences, with no facts duplicated from other documents. Use when the user asks to create, update, audit or trim AGENTS.md or CLAUDE.md, set up instructions for AI agents in a repository, or decide whether a rule belongs in AGENTS.md, a skill or a subagent.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
---

# Write AGENTS.md

`AGENTS.md` is loaded into every session in the repository, so every line costs context in every task. It holds what
an agent must know before touching anything, and nothing else.

## When to use

- A repository has no `AGENTS.md`, or only a `CLAUDE.md` with the content.
- The user asks to update, review or shorten an existing `AGENTS.md` or `CLAUDE.md`.
- A rule, procedure or role has to be placed: in `AGENTS.md`, in a skill or in a subagent.

## Where each thing goes

| The content | Goes in |
| --- | --- |
| A rule that holds in any task in the repository ("agents do not run git", "`pnpm`, never `npm`") | `AGENTS.md` |
| A procedure or body of knowledge needed only in some tasks (writing a release, a review checklist) | A skill |
| A role that needs isolated context or restricted tools (a read-only researcher) | A subagent |
| A fact another document already owns (setup steps, architecture, branch policy) | That document, linked from `AGENTS.md` |
| Rules that only apply inside one folder | A nested `AGENTS.md` in that folder |

A rule moved into a skill is not applied when the skill does not trigger. Keep permanent rules in `AGENTS.md`.

## Procedure

1. **Read what exists.** `AGENTS.md` and `CLAUDE.md` at the root and in subfolders, `README.md`, `WORKFLOW.md` or
   `CONTRIBUTING.md`, the manifest (`package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Makefile`), the git
   hooks and the CI workflows. Note which document already owns each fact.
2. **Collect candidate content**: the user's request, the rules already written, and what the hooks and CI enforce.
3. **Place each item** with the table above. Drop what an agent would do correctly anyway.
4. **Verify every fact against the repository.** Each command must exist in the manifest, the `Makefile` or the CI;
   each path must exist; each tool version must match the lockfile or manifest. If something cannot be verified, ask
   or leave it out. Never invent a build, lint or test command.
5. **Write `AGENTS.md`** with the structure below, in the language the repository already uses for its documents.
6. **Write `CLAUDE.md` as a pointer.** Claude Code reads `CLAUDE.md`, not `AGENTS.md`; the import keeps a single
   source:

   ```markdown
   # <project>

   This file only exists so that Claude Code loads the project context. The content lives in AGENTS.md.

   @AGENTS.md
   ```

   If `CLAUDE.md` already has content, move each item to `AGENTS.md` (or drop it if it is already there) and leave
   only the pointer.
7. **Check the result** with the review checklist, and run the repository's Markdown linter if it has one.

## Structure

Short sections, in this order. Omit a section that would be empty; do not write "N/A".

1. **Title and one paragraph: what this is.** Name the project type when the repository distinguishes them
   (experiment or production, library or service), and link `README.md` for what the project does and how to start
   it.
2. **Non-negotiable rules.** A numbered or bulleted list, each rule in bold with one sentence of scope or reason.
   Typical ones: who runs git, where credentials live, the package manager, what may never be edited, language of
   code and of documents, exact versions, how pending work is tracked.
3. **Justified divergences**, one section per rule of a shared standard that this repository does not follow on
   purpose (template below).
4. **Commands.** The verification commands in a fenced block, one per line with a short comment. Agents try to run
   them before finishing, so list the ones that must pass.
5. **Before finishing a change**, if the repository has closing steps: tests to run, which document to update,
   proposing a commit message.
6. **Where things are.** One line per document or folder an agent needs, linked, saying what it owns.

Template for a justified divergence:

```markdown
## Justified divergence: <rule that is not followed>

<Standard> asks for <rule>. It is not done here, on purpose: <concrete, checkable reason>.

Everything else in the standard is met: <list>.

Revisit: <condition that reopens the decision>.
```

A divergence without a revisit condition is an omission nobody will review.

## Review checklist

- [ ] Every command runs and every path exists today.
- [ ] No statement about the state of the repository has gone stale ("no code yet", "single branch").
- [ ] No fact is repeated from `README.md`, `WORKFLOW.md` or `docs/`; it is linked instead.
- [ ] `CLAUDE.md` holds only the pointer, with no rule of its own.
- [ ] No procedure that is needed only in some tasks; those are skills.
- [ ] Every divergence has a reason and a revisit condition.
- [ ] Nested `AGENTS.md` files add to the root one and do not repeat it.
- [ ] No secrets, tokens, internal hostnames or private paths, especially in a public repository.
- [ ] Short enough to read in one pass: under about 150 lines, with detail in linked documents.

## Rules

- Never invent commands, versions or paths. A wrong command is worse than none: agents will run it.
- One fact, one place. Link the owning document instead of copying it.
- The nearest `AGENTS.md` to the file being edited wins over the root one, and an explicit instruction from the user
  in the chat wins over both. Write nested files with that in mind.
- Do not move, rename or delete existing agent files without the user's confirmation; propose the change first.
- Do not run git. If the repository asks for a commit message at the end, propose it and let the user commit.
