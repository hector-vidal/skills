---
name: itil-service-management
description: Applies ITIL service management at the scale of a small provider, covering the intake channel, classification of incidents, requests and changes, impact-by-urgency priority, service levels, problem handling, the periodic service report and continual improvement. Use when the user sets up or reviews IT support for a client or team, writes a support contract or SLA, classifies or prioritizes tickets, handles a recurring failure, plans a change, prepares a service report, or asks how ITIL applies to their case.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
  sources: "AXELOS, ITIL Foundation, ITIL 4 Edition; PeopleCert, ITIL Foundation (Version 5)"
---

# ITIL service management

ITIL describes many management practices. A small team needs a handful of them, adopted for a concrete reason each,
and the rest left out on purpose until volume justifies them. This skill applies that minimum and says when to grow.

## When to use

- Setting up support for a client, a product or an internal team.
- Writing or reviewing a support agreement, a service level agreement or a support tier offer.
- Deciding what a ticket is, how urgent it is, and who handles it.
- A failure keeps coming back, a change has to go to production, or a periodic service report is due.

## Checklist

### 1. Adopt the minimum, with a reason each

Start with five practices and write down why each one is there:

| Practice | Why a small provider needs it |
| --- | --- |
| Service desk | One entry point; without a record there is nothing to measure |
| Incident management | Restore service fast when something breaks; most of the volume |
| Service request management | Keep routine asks out of the emergency path |
| Change enablement | Uncontrolled changes are the usual cause of the next incident |
| Service level management | Without agreed levels nobody can say whether the service met them |

Add **problem management** as soon as the same symptom repeats. Leave the others out explicitly, and name what would
make each one worth adopting (more clients, more staff, an audit, a regulated customer).

### 2. One channel, everything recorded

Every report enters through one agreed channel (a support address, a ticket tool). Reports by personal message are
redirected to it. Record every case, including the five-minute ones: they add up, and an unrecorded case cannot be
measured, billed as overage or shown in the report. Agree on this when signing, not after the first breach.

### 3. Classify on first response

| Type | What it is | Typical handling |
| --- | --- | --- |
| Incident | Something that worked is interrupted or degraded, unplanned | Restore service; priority by impact and urgency |
| Service request | A routine, pre-agreed action (new user, restore a backup, export data) | Fulfil from a known procedure, within the agreed volume |
| Standard change | Low-risk, well understood, documented, pre-authorized | Done without further approval |
| Normal change | Needs assessment and authorization | Planned, assessed, approved by the right change authority, scheduled |
| Emergency change | Must happen as soon as possible (fix an incident, apply a security patch) | Fast-tracked approval, recorded after the fact |
| New feature | Something that did not exist | Not support: a separate project and quote |

Getting this right is what keeps a fixed-fee support agreement profitable: new features tend to arrive described as
"a small tweak".

### 4. Priority from impact and urgency

Priority comes from crossing **impact** (how much of the operation stops) with **urgency** (how fast the damage
grows), never from how the reporter describes it.

| | High urgency | Medium urgency | Low urgency |
| --- | --- | --- | --- |
| **High impact** | Critical | High | Medium |
| **Medium impact** | High | Medium | Low |
| **Low impact** | Medium | Low | Low |

### 5. Service levels you can keep

- Separate **response time** (someone takes the case) from **resolution time** (service restored).
- Commit to response always; commit to resolution only when the cause is under your control. For causes that depend
  on third parties, commit to response and management.
- Count time in written service hours, not calendar hours. Out-of-hours cover is quoted separately.
- Tie each level to a defined service and to outcomes the customer cares about, not only to operational metrics; a
  report full of green numbers while the customer is unhappy means the wrong things are measured.
- Write it plainly, agree it with the customer, and do not promise what the team's size cannot deliver: instant
  response from a one-person operation is a guaranteed breach.
- Write the customer's obligations too: report through the channel, give access, name one contact. Value is
  co-created; when the customer does not do their part, the provider cannot do theirs.

### 6. Incident flow

1. Record. 2. Classify and prioritize. 3. Acknowledge within the response time. 4. Diagnose and resolve, or apply a
workaround that restores operation. 5. Confirm with the customer before closing; never close unilaterally. 6. Record
the cause if known.

### 7. Problems behind incidents

An incident is resolved; a **problem** is the cause, or possible cause, of one or more incidents. When a symptom
repeats (for example three times), open a problem: analyze the cause, record the workaround as a **known error**
while it is unresolved, and fix it through a change. Fixing the cause costs more than one incident and less than ten.

### 8. Periodic service report

Monthly, with: cases received, resolved and open; service level compliance; consumption of the included volume; the
most relevant cases; problems found; and recommendations. The recommendations section often contains the next
project, and the whole report is what justifies renewal.

### 9. Continual improvement

Review each quarter, or after a major incident, with the improvement model's seven questions: what is the vision,
where are we now, where do we want to be, how do we get there, take action, are we getting there, and how do we keep
the improvement relevant. In a small operation, three questions carry most of the weight: which kind of case took the
most time, which of them can be removed at the root (a change, training, documentation), and whether the fee still
matches real consumption.

## Guiding principles as a review lens

When a decision is unclear, check it against the seven guiding principles: focus on value; start where you are;
progress iteratively with feedback; collaborate and promote visibility; think and work holistically; keep it simple
and practical; optimize and automate (in that order: simplify before automating). They apply together, not one at a
time.

## Rules

- Adopt practices for a stated reason; a full ITIL rollout is out of proportion for a small team.
- Never commit to a resolution time for a cause outside your control.
- Never close a case without the customer's confirmation.
- Use ITIL terms with the team, plain language with customers who do not know the framework.
- Do not quote the ITIL books; explain the ideas in your own words and point to the official publications for detail.

Based on ideas from *ITIL Foundation, ITIL 4 Edition* (AXELOS) and *ITIL Foundation (Version 5)* (PeopleCert),
summarized in our own words. ITIL® is a registered trademark of PeopleCert.
