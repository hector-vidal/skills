# skills

Personal agent skills that follow the [Agent Skills](https://agentskills.io) open format. They work with Claude Code
and with any agent that reads `.agents/skills/`.

| Plugin | Skills |
| --- | --- |
| `dev-workflow` | `commit-message` |
| `code-quality` | `sustainable-code-review` |

## Install

With the [skills](https://github.com/vercel-labs/skills) CLI:

```sh
pnpm dlx skills add hector-vidal/skills
```

With akmon: add `hector-vidal/skills` as a skill source.

As a Claude Code plugin marketplace:

```text
/plugin marketplace add hector-vidal/skills
```

## Development

Issues and pull requests are welcome: see [CONTRIBUTING.md](CONTRIBUTING.md). Branches, checks and how to add a skill are in [WORKFLOW.md](WORKFLOW.md); changes per version, in [CHANGELOG.md](CHANGELOG.md).

## License

MIT. Skills based on books summarize their ideas in our own words and cite the source in their `metadata`.
