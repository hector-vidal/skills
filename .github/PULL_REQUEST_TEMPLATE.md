<!-- markdownlint-disable-file MD041 -- a pull request description has no title heading of its own -->
<!-- PR title: type(scope): description. Example: feat(write-agents-md): add skill for writing AGENTS.md files -->

## What changes and why

<!-- One or two sentences. If it closes an issue: Closes #<number> -->

## How you tested it

<!-- Commands you ran and what you checked. For a skill: the requests you used to trigger it, and the agent and version. -->

## Checklist

- [ ] The pull request targets `dev`
- [ ] `pnpm run lint:md` and `pnpm run check:skills` pass
- [ ] A new or changed skill triggers with a request in English and another in Spanish, and not with an unrelated one
- [ ] A new skill is listed in a plugin of `.claude-plugin/marketplace.json`
- [ ] `CHANGELOG.md` has an entry under `Unreleased`, if users would notice the change
- [ ] Everything is in English, and content from a book or another source is in your own words, with the source cited
- [ ] No paths or links to places readers cannot reach
- [ ] Title and commits follow `type(scope): description`
