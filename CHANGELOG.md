# Changelog

Changes that users of these skills would notice. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- `CONTRIBUTING.md`, a pull request template and this changelog.
- Git hooks, commitlint and continuous integration that validate every skill with `skills-ref` and the skills.sh CLI.

## [0.1.0] - 2026-10-28

### Added

- `commit-message` skill in the `dev-workflow` plugin: proposes a Conventional Commits message for a finished change, without running git.
- `sustainable-code-review` skill in the `code-quality` plugin: reviews code for long-term maintainability and says when a design pattern would or would not help.
- `.claude-plugin/marketplace.json`, so the repository installs with the skills.sh CLI, with akmon and as a Claude Code plugin marketplace.
