---
name: commit-message
description: Proposes a Conventional Commits message in English for a finished change, with type, scope and requirement id, ready for the user to commit. Use when the user asks for a commit message, says a change is done or ready to commit, or a repository rule says the agent must not commit. Never runs git.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
---

# Commit message

Write the message; the user commits. This skill never stages, commits, pushes or amends anything.

## When to use

- The user asks for a commit message, or asks to "commit" in a repository whose rules forbid the agent from doing it.
- A change is finished and the repository's closing steps include proposing a message.

## Procedure

1. **Read the repository rules first.** Look at `AGENTS.md`, `CLAUDE.md` and `WORKFLOW.md` for a section on commit
   messages, and at `commitlint.config.js` or `.commitlintrc.json`. A rule written there wins over this skill: some
   repositories write commits in another language on purpose ("justified divergence").
2. **Find what changed.** Use the diff the user describes or a read-only command (`git status`, `git diff`,
   `git diff --staged`). Read-only commands are fine; anything that changes the repository is not.
3. **Pick one type** for the main intent of the change:

   | Type | Use for |
   | --- | --- |
   | `feat` | New behavior a user can notice |
   | `fix` | A bug fix |
   | `docs` | Documentation only |
   | `refactor` | Code change with no behavior change |
   | `test` | Adding or fixing tests only |
   | `perf` | Performance improvement |
   | `build` | Build system or dependencies |
   | `ci` | CI configuration |
   | `chore` | Maintenance that fits nothing above |
   | `style` | Formatting with no code meaning |
   | `revert` | Reverting a previous commit |

4. **Pick the scope**: the module, package or area touched, in lowercase (`catalog`, `tui`, `health`). Omit it only if
   the change is truly repository-wide.
5. **Write the subject**: imperative mood, lowercase first word, no final period, at most 72 characters including the
   prefix. Say what the change does, not how.
6. **Add the requirement id** at the end of the subject when the change fulfils a documented requirement:
   `(RF-23)`.
7. **Add a body only when the why is not obvious**: a blank line after the subject, lines of at most 100 characters,
   explaining the reason and any trade-off. Add `BREAKING CHANGE:` in a footer when the change breaks a public
   contract.
8. **Split if needed.** If the change mixes unrelated intents (a fix and a refactor), propose one message per commit
   and say which files go in each.

## Output

Give the message in a `text` block, then one line with the files it covers. Do not run the commit.

```text
fix(staging): refuse to authorize a draft with a path collision (RF-08)
```

## Rules

- Never run `git add`, `git commit`, `git push`, `git commit --amend` or any command that changes the repository.
- Never invent a requirement id. If none is documented, leave it out.
- English unless the repository says otherwise.
- One intent per commit. "and" in a subject usually means two commits.
