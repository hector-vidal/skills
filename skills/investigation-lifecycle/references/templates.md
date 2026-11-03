# Investigation templates

Skeletons for each document of an investigation. Replace `<…>` and drop what does not apply. Write the notes in the
language the knowledge base uses; if it already fixes file names, headings or frontmatter fields, use those.

Every note carries at least `title`, `date`, `tags` and a one-line `description` of what it contains. Quote any
value that contains a colon followed by a space, or the YAML breaks.

## README

```markdown
---
title: <Name>
date: YYYY-MM-DD
tags: [investigation, <name>, readme]
description: <What the note contains, in one line.>
type: documentary
status: open
---

# <Name>

<Goal in one paragraph: what is investigated, what for, and the concrete question it answers.>

**Type:** documentary.

## Conclusion

Pending.

## Reading order

1. [Framework](Framework.md)
2. [Comparison](Comparison.md)
3. [Decisions](Decisions.md)
```

## Status notices

Placed right under the H1 of the README. Only one at a time.

```markdown
> **Investigation paused on YYYY-MM-DD.** Reason: external blocker. <What is missing.> Resumes when <condition>.

> **Investigation resumed on YYYY-MM-DD**, paused since YYYY-MM-DD for <reason>: <what was missing>.

> **Investigation closed on YYYY-MM-DD.** <Conclusion in one sentence.> <Where the work continues, if anywhere.>

> **Investigation reopened on YYYY-MM-DD**, closed on YYYY-MM-DD. Reason: <reason>. Round 2.
```

## Framework

```markdown
---
title: Framework
date: YYYY-MM-DD
tags: [investigation, <name>, framework]
description: <What the note contains, in one line.>
---

# Framework

## Scope

<What the investigation covers.>

**Left out:** <what is not investigated here.>

## Constraints

| Constraint | Detail |
| --- | --- |
| <Constraint> | <Why it discards candidates> |

## Criteria

| Criterion | How it is evaluated |
| --- | --- |
| <Criterion> | <Source or measurement> |

## Machine

<Machine used, or a link to where it is already described.>

## Phases

<Experimental only: which phases of the catalog are used, merged or skipped, and why.>
```

## Phase note

```markdown
---
title: Phase N - <Title>
date: YYYY-MM-DD
tags: [investigation, <name>, phase]
description: <What the note contains, in one line.>
---

# Phase N - <Title>

<What this phase looks for.>

## Method

<How it is done, with the script in a fenced block and the exact command.>

## Results

<Data obtained, with machine, version, command and date.>

## What passes to the next phase

<What was obtained and what is discarded.>
```

## Decisions

```markdown
---
title: Decisions
date: YYYY-MM-DD
tags: [investigation, <name>, decisions]
description: <What the note contains, in one line.>
---

# Decisions

What was decided in [<Name>](README.md) and why, so the analysis is not repeated.

## <Decision title>

**Decision.** <What was chosen or discarded.>

**Reason.** <Why, with the data behind it.>

**Revisit when.** <Concrete condition.>

## <Decision title> (open)

**Options.** <The alternatives in play.>

**Missing to decide.** <Data, test or purchase pending.>
```

## Installed

```markdown
---
title: Installed
date: YYYY-MM-DD
tags: [investigation, <name>, installed]
description: Software installed for <Name>, how to remove it and whether it is still in use.
---

# Installed

What was installed for [<Name>](README.md). Updated when each thing is installed.

| Program | Machine | Method | Uninstall | Status |
| --- | --- | --- | --- | --- |
| <Name and version> | <Machine> | <brew, extension, installer> | <Exact command or steps> | Under test |
```

## Synthesis

```markdown
---
title: Synthesis
date: YYYY-MM-DD
tags: [investigation, <name>, synthesis]
description: Method, results and final comparison of <Name>, condensed at closing.
---

# Synthesis

What remains of [<Name>](README.md) after closing on YYYY-MM-DD. Criteria in the [Framework](Framework.md); what was
chosen and discarded, in [Decisions](Decisions.md).

## Method

<How it was searched or measured: machine, versions, commands or scripts needed to repeat it.>

## Phases

<One paragraph per phase: what it looked for and what came out.>

## Results

<Key figures with source and date, and the final results table.>

## Final comparison

| Candidate | <Criterion 1> | <Criterion 2> | Result |
| --- | --- | --- | --- |
| <Candidate> | <Value> | <Value> | Chosen or discarded: <reason in one line> |
```
