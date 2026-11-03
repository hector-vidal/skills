---
name: blind-evaluation
description: Prepares and runs a blind comparison of candidate outputs (voices, translations, model answers, images, designs) scored by a person with a fixed rubric, using anonymous codes, a shuffled score sheet and a sealed key that is opened only after scoring. Use when the user wants to compare options without knowing which is which, set up a listening or reading test, write a scoring rubric, break ties between finalists, or calibrate an automatic judge against human scores.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
---

# Blind evaluation

When a person judges quality, knowing the brand, the price or the model name changes the score. A blind evaluation
removes that: the scorer sees only codes, scores everything with the same rubric, and learns who is who at the end.

## When to use

- Several candidates produce something a person has to judge by eye or ear: a voice, a translation, an answer, a
  summary, an image, a layout.
- The user asks for a rubric, a blind test or an A/B comparison.
- Finalists tie and the decision needs a forced ranking.
- An automatic judge (a metric or an LLM) needs to be checked against human scores.

## Procedure

1. **Freeze the rubric before generating anything.** Criteria in priority order, each scored 1 to 5 with a written
   description of every level, so two sessions mean the same by "4". Add knock-out thresholds where a low score must
   discard a candidate whatever its total ("under 3 in fidelity discards it"). Once scoring has started, the rubric
   does not change to favor a candidate; a change is recorded with its reason and applies to a new session.
2. **Choose the unit of judgment**: the output as it will really be used (the whole voice-over, not each sentence;
   the whole document, not each paragraph). It costs fewer scores and judges what matters.
3. **Generate under equal conditions.** Same input for every candidate, same settings where they apply, and record
   the version, parameters and date of each run.
4. **Remove every identifying mark.** Normalize what is not being judged (loudness, format, resolution, length), strip
   names from files and metadata, and remove signatures, watermarks or boilerplate that give a candidate away.
5. **Add controls when useful.** A known reference (last round's winner, a paid service) scored blind shows whether a
   new candidate really reaches it. One sample repeated under a second code shows whether the scorer is consistent.
6. **Blind the samples** with the script below: random codes, a key file, and a score sheet in shuffled order.
7. **The person scores; the agent does not.** Tell the user the conditions: same device and volume, every sample in
   the sheet's order, the whole sample once before scoring, notes for anything specific. The agent never opens,
   quotes or hints at the key before the sheet is complete. No model scores its own output or a rival's.
8. **Reveal**: only when every row is filled, join the sheet with the key and compute totals, knock-outs and ranks.
9. **Break ties by ranking.** When the rubric saturates (several candidates at the top score), run a final blind
   session where the scorer orders the finalists from best to worst, keeping notes on why. Move every candidate tied
   for first to the final.
10. **Record** the rubric, the date, the conditions, the sheet, the key and the decision with its reason.

## Blinding script

```python
# blind.py: copy each candidate's file under a random code, write the key and a shuffled score sheet.
# Usage: python3 blind.py OUT_DIR criterion1,criterion2,... FILE [FILE ...]
import csv, random, shutil, sys
from pathlib import Path

out, criteria, files = Path(sys.argv[1]), sys.argv[2].split(","), [Path(f) for f in sys.argv[3:]]
(out / "blind").mkdir(parents=True, exist_ok=True)
codes = [f"S{n}" for n in random.sample(range(10, 100), len(files))]
for code, f in zip(codes, files):
    shutil.copy(f, out / "blind" / f"{code}{f.suffix}")
with open(out / "key.csv", "w", newline="", encoding="utf-8") as fh:  # do not open until scoring ends
    csv.writer(fh).writerows([["code", "file"]] + [[c, str(f)] for c, f in zip(codes, files)])
order = random.sample(codes, len(codes))
with open(out / "scores.csv", "w", newline="", encoding="utf-8") as fh:
    csv.writer(fh).writerows([["code", *criteria, "notes"]] + [[c, *[""] * len(criteria), ""] for c in order])
print(f"{len(codes)} samples in {out / 'blind'}; score them in the order of scores.csv")
```

Up to 90 samples per session. Copying keeps the original names out of the blind folder; check that the files carry
no identifying metadata (tags, EXIF, document properties) before handing them over.

## Too many outputs to score

Scoring everything does not scale, and a rubric that is never applied decides nothing. Score a fixed random sample per
candidate, plus every output that failed an automatic check and every suspicious success. Use that same scored sample
to calibrate any automatic judge: if the judge and the person disagree often, the judge is not used to decide.

## Rules

- The rubric is written and frozen before the first sample is generated.
- Nobody who scores sees the key before the sheet is complete; the agent does not reveal it, even if asked mid-session.
  Offer to stop the session instead.
- Every candidate gets the same input, the same conditions and the same rubric.
- A person scores quality. A model may only pre-check objective things (format, length, a forbidden word).
- Results carry the date, the versions and the conditions; a score without them is not used to decide.
- Do not delete the key, the sheet or the samples without the user's approval: they are the evidence for the decision.
