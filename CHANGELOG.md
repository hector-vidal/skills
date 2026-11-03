# Changelog

Changes that users of these skills would notice. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- `pmbok-tailoring` skill in the `management` plugin: tailors PMBOK to the size of a project, with the approach, the domains kept and left out, and lightweight charter, risk register, change control and reports.
- `itil-service-management` skill in the new `management` plugin: applies ITIL at the scale of a small provider, from intake and classification to service levels, problems, reports and continual improvement.
- `blind-evaluation` skill in the new `research` plugin: prepares a blind comparison scored by a person with a frozen rubric, anonymous codes, a shuffled score sheet and a sealed key.
- `convert-to-markdown` skill in the `vault` plugin: converts .docx and .pdf files to Markdown with Pandoc and pymupdf4llm, keeps originals and images apart, and checks the output for lost text and garbled characters.
- `investigation-lifecycle` skill in the new `vault` plugin: opens, pauses, resumes, closes, reopens and transfers a research investigation kept as Markdown notes, with templates for each document.
- `write-agents-md` skill in the `dev-workflow` plugin: writes or reviews a repository's `AGENTS.md` and the `CLAUDE.md` pointer, and places each rule in `AGENTS.md`, a skill or a subagent.
- `CONTRIBUTING.md`, a pull request template and this changelog.
- Git hooks, commitlint and continuous integration that validate every skill with `skills-ref` and the skills.sh CLI.

## [0.1.0] - 2026-10-28

### Added

- `commit-message` skill in the `dev-workflow` plugin: proposes a Conventional Commits message for a finished change, without running git.
- `sustainable-code-review` skill in the `code-quality` plugin: reviews code for long-term maintainability and says when a design pattern would or would not help.
- `.claude-plugin/marketplace.json`, so the repository installs with the skills.sh CLI, with akmon and as a Claude Code plugin marketplace.
