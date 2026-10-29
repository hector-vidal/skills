# Contributing

Thanks for your interest. This repository publishes agent skills in the open [Agent Skills](https://agentskills.io) format. Issues and pull requests are welcome.

## Where things are

| Document | What it covers |
| --- | --- |
| [README.md](README.md) | What the repository is and how to install it |
| [WORKFLOW.md](WORKFLOW.md) | Branches, commit messages, commands, checks, adding a skill and releasing |
| [CHANGELOG.md](CHANGELOG.md) | What changed in each version |
| [Pull request template](.github/PULL_REQUEST_TEMPLATE.md) | What a pull request description and checklist need |
| [LICENSE](LICENSE) | MIT |

## Reporting an issue

Open an issue with:

- the skill, by its `name`;
- the agent and its version (Claude Code, Codex, Cursor or another);
- the request you made, what the skill did, and what you expected;
- for a skill that did not trigger, or triggered when it should not, the exact request.

## Proposing a skill

Open an issue before writing it. A skill fits here when it describes a procedure or a body of knowledge that is needed in some tasks and not in all of them. A rule that applies to every task belongs in a repository's `AGENTS.md`, not in a skill.

## The cycle of a change

1. Fork the repository and branch from `dev`.
2. Run `pnpm install`. It turns on the hooks that check every commit.
3. Make the change, following [WORKFLOW.md](WORKFLOW.md). A new skill follows "Adding a skill" there.
4. Pass `pnpm run lint:md` and `pnpm run check:skills`.
5. Add an entry under `Unreleased` in [CHANGELOG.md](CHANGELOG.md) if users would notice the change.
6. Open the pull request against `dev` and fill in its template.

## What a pull request needs

- One change per pull request, described by what it changes and why.
- Commit messages in [Conventional Commits](https://www.conventionalcommits.org/), in English.
- The `static` and `tests` checks green.
- Everything in English.
- Content based on a book or another source, written in your own words: no literal quotes, copied tables or figures. The source goes in `metadata.sources` of the skill and in a closing attribution line.
- No paths or links to places readers cannot reach, such as private repositories.
- Only the invocation fields of Claude Code in the frontmatter: `disable-model-invocation`, `user-invocable` and `argument-hint`.

By contributing you agree that your contribution is licensed under the [MIT License](LICENSE).
