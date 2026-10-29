---
name: sustainable-code-review
description: Reviews code for long-term maintainability (names, least surprise, cohesion and coupling, SOLID, function design, error handling, domain types) and says when a design pattern would or would not help. Use when the user asks to review code, a diff or a pull request for design or maintainability, asks whether code is clean or easy to change, or asks which design pattern fits a problem.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
  sources: "Carlos Blé Jurado, Código sostenible; Alexander Shvets, Sumérgete en los patrones de diseño"
---

# Sustainable code review

Review for the next person who has to change this code. Every finding names the place, the problem in one sentence,
and the smallest change that fixes it.

## When to use

- Reviewing a file, a diff or a pull request for design and maintainability, not for bugs or style alone.
- Deciding whether a design pattern fits a problem.

For formatting and lint rules, defer to the repository's linter. For correctness bugs, use a correctness review.

## Procedure

1. Read the repository's `AGENTS.md` and code conventions. A convention written there wins over this checklist.
2. Read the code with one question in mind: would someone arriving later be surprised by what it does?
3. Go through the checklist below. Skip sections that do not apply.
4. Report findings ordered by cost of leaving them: hidden side effects and coupling first, naming last.
5. If a pattern seems useful, read `references/design-patterns.md` before recommending it.

## Checklist

### Least surprise

- A function does what its name says and nothing else. A query that also writes, sends or caches is a finding.
- Abstractions behave like the language's own types: equality, copying and mutability work as a reader expects.

### Names

- Names are pronounceable, concrete and in the domain's language, without technical noise (`data`, `info`,
  `manager`, `handler`, type suffixes).
- Nouns for values, verbs for actions, adjectives or `is`/`has` for booleans. Calls read like a sentence.
- One name per concept across the codebase, no aliases.
- Literal values that carry meaning have a name.

### Cohesion and coupling

- Each module, class or function can be understood and changed on its own; it depends only on what it needs.
- Callers tell objects what to do instead of asking for their data and deciding for them.
- No chains that reach through objects (`a.b().c().d()`).
- Domain logic does not depend on frameworks, databases or I/O; those depend on it (ports and adapters).
- When two pieces must change together, the dependency is explicit and as weak as possible (a name rather than a
  position, a type rather than a convention).

### SOLID

- One reason to change per unit.
- New behavior arrives by adding code, not by editing a growing `if`/`switch` over types.
- A subtype can replace its parent without callers noticing.
- Interfaces are small and shaped by their clients.
- High-level policy depends on abstractions it owns, not on concrete low-level details.

### Functions and implementation

- Guard clauses handle edge cases first; the main path is not nested.
- Each block stays at one level of abstraction.
- Variables live in the smallest scope; access is as restricted as possible.
- Constructors only assign; named constructors explain alternative ways to build.
- Pure functions are preferred; side effects are pushed to the edges.
- Few parameters, no boolean flags that switch behavior, no long lists of optional parameters.
- A function either answers a question or changes state, not both.
- Composition over inheritance.

### Errors and absent values

- Absence is explicit (`Optional`, `Maybe`, null object) instead of `null` travelling through the code.
- Expected failures are values the caller must handle; exceptions are for the unexpected.
- Exceptions are caught where something useful can be done, never swallowed silently.
- Error messages and logs say what failed and with which input, without leaking secrets.

### Domain types

- Domain concepts have their own types instead of bare strings and numbers (`Email`, `Money`, `UserId`).
- Invalid states cannot be built: validation lives in the type's constructor.

## Rules

- Do not flag these as problems by themselves; they are often misapplied rules: a function with several returns,
  missing comments on clear code, missing getters and setters, code that is not micro-optimized.
- Do not recommend a pattern to look sophisticated. If the simple version reads well, say so.
- Do not rewrite the code unasked. Propose the change; the user decides.

## References

- `references/design-patterns.md`: read before recommending or rejecting a design pattern.

Based on ideas from *Código sostenible* (Carlos Blé Jurado) and *Sumérgete en los patrones de diseño* (Alexander
Shvets), summarized in our own words.
