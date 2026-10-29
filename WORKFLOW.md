# Workflow

`hector-vidal/skills` is an **experiment**: a content repository, with no code and no deployment, that publishes skills in the open Agent Skills format. It carries `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, a pull request template, this file, git hooks, commitlint, markdownlint and continuous integration. It does not carry `docs/` or Renovate.

## Justified divergences

The project bootstrap standard this repository follows asks for three things that are not done here, on purpose:

| The standard asks | Here | Why |
| --- | --- | --- |
| The project type in the first paragraph of `AGENTS.md` | In the first paragraph of this file | `AGENTS.md` and `CLAUDE.md` are in `.gitignore`: instructions for agents stay local |
| `CONTRIBUTING.md`, `CHANGELOG.md` and a pull request template only in production projects | Present in an experiment | The repository is public, and anyone can open an issue or a pull request |
| Documents in Spanish | Every document in English | The skills are in English and the readers are outside contributors |

Everything else the standard asks of an experiment is met.

Revisit: if `AGENTS.md` is versioned again, or if the repository becomes a production project.

## Branches

- `main` only receives pull requests from `dev`, with the `static` and `tests` checks green.
- Day-to-day work happens on `dev`. Outside contributors open their pull requests against `dev`.
- Git operations are done by the author. An AI agent does not create branches, commit or merge.

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org/), validated by commitlint in the `commit-msg` hook. The scope, when there is one, is the name of the skill or the plugin:

```text
feat(write-agents-md): add skill for writing AGENTS.md files
fix(marketplace): point code-quality to the right skill folder
```

## Commands

```sh
pnpm install                 # installs the tooling and turns the hooks on
pnpm run lint:md             # markdownlint on every .md
pnpm run lint:md:fix         # fixes what markdownlint knows how to fix
pnpm run check:skills        # skills-ref validate per skill, and the skills.sh CLI
```

`check:skills` needs `uv` (for `uvx`) and network the first time: it downloads `skills-ref` at the commit pinned in `package.json` and the `skills` CLI 1.7.4.

## Checking a change

| Where | What runs |
| --- | --- |
| `pre-commit` hook | Credential scan of the staged content, `lint:md` and `check:skills` |
| `commit-msg` hook | commitlint |
| `static` (`.github/workflows/static.yml`) | `lint:md` |
| `tests` (`.github/workflows/tests.yml`) | `check:skills` |

The hooks run the same as continuous integration, so the remote is never stricter than the local machine.

## Adding a skill

1. Create `skills/<name>/SKILL.md`, with `name` equal to the folder and a third-person `description` with "Use when…".
2. Add it to a plugin in `.claude-plugin/marketplace.json`, which only points to the folder: name and description live in the frontmatter.
3. Pass `pnpm run check:skills` and check that it triggers with a request in English and another in Spanish.
4. Add it under `Unreleased` in `CHANGELOG.md`.

## Releasing

The version lives in `metadata.version` of `.claude-plugin/marketplace.json`, and each skill has its own in `metadata.version` of its frontmatter. A release moves the `Unreleased` entries of `CHANGELOG.md` under the new version, with its date, and updates the version in `marketplace.json`.
