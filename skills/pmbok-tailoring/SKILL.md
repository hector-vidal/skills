---
name: pmbok-tailoring
description: Tailors PMBOK project management to the size of a real project, choosing the development approach, the performance domains and artifacts that solve a concrete problem, and writing down what is left out and when to revisit it, with lightweight charter, risk register, change control and progress reports. Use when the user plans or reviews a client project, asks how much PMBOK or project management process a project needs, writes a project charter, risk register, change request or status report, or picks between predictive, adaptive and hybrid approaches.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
  sources: "Project Management Institute, A Guide to the Project Management Body of Knowledge (PMBOK Guide), 6th, 7th and 8th editions"
---

# PMBOK tailoring

PMBOK is a body of knowledge, not a method: it says what to consider, not how much of it to do. Applied literally to a
six-week project for a small client, it produces more documents than work. Tailoring is the deliberate choice of what
to use, and the written record of what is left out.

## When to use

- Planning a project, or reviewing one that is slipping.
- The user asks how much process, documentation or governance a project needs.
- Writing a charter, a risk register, a change request, a status report or a closure review.
- Choosing a predictive, adaptive or hybrid approach, or explaining PMBOK terms from another edition.

## Procedure

1. **Understand the environment first.** Who sponsors, who pays, who uses the result; contract type (fixed price,
   time and materials); organizational rules that cannot be tailored away (regulation, a client's PMO, audits).
2. **Pick the development approach** from the deliverable and its uncertainty:

   | Situation | Approach |
   | --- | --- |
   | Clear, short scope (a diagnosis, an assessment) | Predictive |
   | Phases that depend on each other (an implementation) | Predictive with milestones |
   | Software the client will correct as they see it | Adaptive: increments every 2 to 3 weeks |
   | Uncertain result (research, a proof of concept) | Iterative, with decision points where it can stop |
   | Fixed contract around adaptive delivery | Hybrid: the contract sets the commitment, the iterations set the pace |

3. **Choose what to manage, domain by domain.** For each performance domain, adopt a practice only if it prevents a
   known way of losing money or trust, and name the artifact that carries it. Starting point for a small team:

   | Domain | Keep | Artifact |
   | --- | --- | --- |
   | Governance | Who decides and how changes are approved | Change control in the contract |
   | Scope | Work breakdown and verifiable acceptance criteria | Statement of work, WBS |
   | Schedule | Sequence, dependencies, critical path, short milestones | Gantt or milestone list |
   | Finance | Three-point estimate with contingency | Estimate and quote |
   | Stakeholders | Who decides, who pays, who uses | Charter |
   | Resources | Usually trivial for one or two people | Note in the charter |
   | Risk | A short register with responses | Risk register inside the charter |

4. **Write down what is left out, and why.** Typical exclusions for a small team: formal procurement, team resource
   management, separate quality plans, subsidiary plans per domain, full earned value (milestones approved give the
   same signal for a fraction of the effort). Each exclusion names the condition that brings it back ("a team of three
   or more", "a client with a PMO", "public tender"). A framework adopted halfway in silence becomes an excuse;
   adopted halfway in writing, it is a decision.
5. **Keep the documents to three**, plus the risk register:

   | Document | When | Target length |
   | --- | --- | --- |
   | Project charter | At the start | 1 to 2 pages |
   | Progress report | Every week or two | 1 page |
   | Closure and post-mortem | At the end | 1 to 2 pages |

6. **Revisit the tailoring** at each milestone and after any surprise. Tailoring is not a one-time decision: add rigor
   where the project hurts, remove what nobody reads.

Process tailoring has five moves: **add** an element for an unusual condition or more rigor, **modify** one to fit,
**remove** one that costs more than it saves, **blend** several into one, and **align** definitions across teams or
organizations. When tailoring, look at three things: the deliverable (regulation, technology stability, timeframe,
how stable the requirements are, whether it can be shown in increments), the team (size, location, experience, access
to the customer) and the culture (buy-in, trust, how much decision-making the team is given).

## Risk register

Five to ten rows, reviewed in every progress report: risk, probability, impact, response (avoid, mitigate, transfer or
accept), owner, status. Risks worth preloading in small client projects:

- Source data is worse than declared.
- The client's contact does not answer within the agreed time.
- A requirement everyone assumed was included shows up.
- A third-party dependency does not behave as documented.
- The only person doing the work falls ill or is absorbed by another project (no full mitigation; short milestones
  and up-to-date documentation reduce it).

## Change control

1. Receive every change request **in writing**, however it arrives.
2. Estimate its impact on effort, cost and date with the same method as the original estimate.
3. Send it to the client as a change request with price and new date.
4. Execute **only** after written approval.

Step 4 is the one that gets skipped "because it is quick", and with it go both the payment and the explanation for the
delay.

## Principles as a check

The 8th edition groups the mindset into six principles: adopt a holistic view; focus on value; embed quality into
processes and deliverables; be an accountable leader; integrate sustainability within all project areas; build an
empowered culture. Use them to test a tailoring decision: if removing a practice hurts value, quality or
accountability, keep a lighter version of it instead.

## Editions

The user or the client may speak in another edition's terms:

- **6th edition**: ten knowledge areas and five process groups (initiating, planning, executing, monitoring and
  controlling, closing).
- **7th edition**: twelve principles and eight performance domains (stakeholders, team, development approach and life
  cycle, planning, project work, delivery, measurement, uncertainty).
- **8th edition**: six principles, seven performance domains (governance, scope, schedule, finance, stakeholders,
  resources, risk), and the process groups back as focus areas.

Map their terms to the plan rather than rewriting the plan in another edition's vocabulary.

## Rules

- Every adopted practice has a reason and an artifact; every exclusion has a reason and a revisit condition.
- Never let a change be executed without written approval in a fixed-price project.
- Do not produce a document nobody will read; prefer one page that is kept current.
- Do not quote the PMBOK Guide; explain the ideas in your own words and point to the official publication for detail.

Based on ideas from *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*, 6th, 7th and 8th editions
(Project Management Institute), summarized in our own words. PMI and PMBOK are trademarks of Project Management
Institute, Inc.
