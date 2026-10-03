# Remaining Work

Three items were deliberately left undone. All are recorded here with evidence and a
recommended fix so they can be picked up later without re-investigating.

Last updated: 2026-10-03
App state at time of writing: 113 programmes (47 IAA / 66 UDSM), 3,723 course rows,
`npm run build` passing. UDSM coverage is Bachelor only (NTA 7/8) — see section 3.

---

## 1. IAA programme id 5 is missing Semester 4

**Status:** blocked on source data — needs the IAA prospectus, not a code change.

### The problem

`Bachelor of Accountancy with Information Technology (BA-IT)` is `id: 5` in
`src/data/academicData.ts`. Its semester numbering skips 4:

| Semester | Courses | Credits |
|----------|---------|---------|
| 1 | 6 | 57 |
| 2 | 7 | 72 |
| 3 | 5 | 51 |
| **4** | **missing** | — |
| 5 | 6 | 69 |
| 6 | 6 | 60 |

Verified by importing the module and reading `semesters[].semesterNumber`, which
returns `1,2,3,5,6`.

### Why it was not "fixed"

The gap is in the source data, not in a parse. There is no Semester 4 content to
recover from the file, so any repair would mean inventing courses. The two tempting
shortcuts are both wrong:

- **Do not renumber** `5,6` → `4,5`. That would relabel the courses as "Semester IV"
  when the prospectus calls them Year 2 Semester 1 and 2. A student comparing the app
  against their transcript would see a mismatch.
- **Do not synthesise a Semester 4** from the other semesters or from a comparable
  programme.

### Impact

- Semester labels jump III → V in the UI, which looks like a bug to users.
- Anything iterating `semesters` **in array order** skips a step. CGPA accumulation
  and the What-If course list are unaffected in aggregate (they sum and filter rather
  than index positionally), so the computed numbers stay correct.

### To resolve

1. Obtain the IAA prospectus (`docs/IAA PROSPECTUS.pdf` is the copy on hand) and find
   the BA-IT year-2 course tables.
2. Confirm whether BA-IT is genuinely a 5-semester programme with no Semester 4, or
   whether the extraction dropped it. The 5-semester shape is plausible for a
   2.5-year professional programme, so this needs confirming, not assuming.
3. If Semester 4 exists in the source, add it with the next free id-based entry
   following the file's existing field order (`id`, `name`, `universityId`,
   `ntaLevel`, `semesters`).
4. If it genuinely does not exist, add a code comment on `id: 5` recording that the
   gap is intentional so the next person does not re-open this as a bug.

---

## 2. 65 pre-existing TypeScript errors (@mui/material v9)

**Status:** not started. Mechanical but broad. Does not block the build.

### How to verify (read this first)

The obvious command is wrong and silently checks **zero files**:

```
npx tsc --noEmit        # <-- checks NOTHING, always "passes"
```

Root `tsconfig.json` declares `"files": []` with project references, so it has no
input files of its own. Always use:

```
npx tsc -p tsconfig.app.json --noEmit
```

Also beware `npx tsc --noEmit | tail -5; echo $?` — that reports `tail`'s exit code,
not `tsc`'s. Pipe to a file and check the exit code directly.

Current state: **65 errors** (down from 104; the 39 `academicData.ts` errors are
already fixed).

### Breakdown by file

| Count | File |
|-------|------|
| 28 | `src/components/GPACalculator.tsx` |
| 13 | `src/pages/TargetGpaCalculator.tsx` |
| 7 | `src/pages/AdminDashboard.tsx` |
| 5 | `src/pages/WhatIfSimulator.tsx` |
| 3 | `src/pages/PrivacyPolicy.tsx` |
| 3 | `src/pages/NotFound.tsx` |
| 3 | `src/pages/GpaTools.tsx` |
| 1 | `src/pages/PDFExtractor.tsx` |
| 1 | `src/components/PDFUploader.tsx` |
| 1 | `src/components/AcademicChatbot.tsx` |

`src/data/academicData.ts` and `src/lib/gpaApi.ts` are clean.

### Root cause

`@mui/material` is at **9.2.0**. v9 removed the legacy system props from component
type definitions — `Typography` now accepts system styling only through `sx`. The
installed `Typography.d.ts` exposes `sx?: SxProps<Theme>` and no `fontWeight`.

These props are still valid at runtime, which is why the app works; only the typings
rejected them. Hence `npm run build` passes — Vite transpiles via esbuild and does not
typecheck.

### Errors by code

| Count | Code | Meaning |
|-------|------|---------|
| 60 | TS2769 | No overload matches (the MUI prop rejections below) |
| 4 | TS2322 | Type mismatch |
| 1 | TS2345 | Argument type mismatch |

### Rejected props, and the fix for each

| Count | Prop | Where | Recommended fix |
|-------|------|-------|-----------------|
| 42 | `fontWeight` | mostly `Typography` | move into `sx`, e.g. `sx={{ fontWeight: 700 }}` |
| 6 | `button` | `<ListItem button …>` in `GPACalculator.tsx` (mobile menu, ~L553–576) | use `<ListItemButton>` |
| 5 | `textAlign` | `Typography` | move into `sx={{ textAlign: 'center' }}` |
| 4 | `paragraph` | `Typography` | use `component="p"` |
| 3 | `mt` | `Typography` | move into `sx={{ mt: 2 }}` |
| 3 | `inputProps` | `TextField` in `TargetGpaCalculator.tsx` (L133, L142, L151) | `slotProps={{ htmlInput: { min: 0 } }}` |
| 1 | `mb` | `Typography` | move into `sx={{ mb: 2 }}` |

Notes:
- The `ListItem button` and `TextField inputProps` cases are genuine API removals,
  not just typing changes — verify each renders and behaves correctly after
  converting, especially the mobile navigation menu.
- Spacing values move as-is (`mb={2}` → `sx={{ mb: 2 }}`); the `sx` scale is the
  same 8px-based theme spacing.
- Fix file-by-file and re-run the typecheck between files; `GPACalculator.tsx` alone
  accounts for 43% of the total.

### Definition of done

```
npx tsc -p tsconfig.app.json --noEmit   # exits 0, no output
npm run build                            # still succeeds
```

Then spot-check in the browser: the mobile nav menu in `GPACalculator`, the target
GPA sliders in `TargetGpaCalculator`, and any page whose heading weight or alignment
changed.

---

## 3. UDSM has no certificate, diploma or master's programmes

**Status:** 4 of the programmes are extractable now; the rest are blocked on source data.

### The gap

Every UDSM programme in the app is NTA 7 or 8 (Bachelor). The Certificate, Diploma and
Masters academic levels are populated for IAA only:

| Level | NTA | IAA | UDSM |
|-------|-----|-----|------|
| Certificate | 4 | 6 | **0** |
| Diploma | 5 | 6 | **0** |
| Bachelor | 7 | 24 | 42 |
| Bachelor | 8 | 1 | 24 |
| Masters | 9 | 10 | **0** |

This is because `docs/UDSM_UNDERGRADUATE_PROSPECTUS_2025-2026.pdf` is the
**undergraduate** prospectus. It was never expected to carry UDSM certificate, diploma
or postgraduate curricula, so this is a source-coverage gap rather than a missed
extraction.

### 3a. Extractable now — 4 programmes with real course tables

These have complete, verifiable tables in `/tmp/udsm.txt`:

| Programme | Source line | Structure | Validation handle |
|-----------|-------------|-----------|-------------------|
| Certificate in Computer Science (CoICT) | 11582 | 1 year, 2 semesters, 120 credits | prospectus states the 120-credit total |
| Diploma in Computer Science (CoICT) | 11462 | 2 years, 4 semesters, 240 credits | prints Y1 = 124, Y2 = 116 |
| Certificate in Journalism | 20714 | 2 semesters, 11 courses | 72 credits/semester |
| Diploma in Journalism | 20734 | 2 years, 4 semesters | — |

Notes for whoever extracts these:
- Suggested ids are **1067–1070** (next free after 1066). Certificate → NTA 4,
  diplomas → NTA 5/6. Check against `ACADEMIC_LEVELS.ntaLevels`
  (Certificate `[4, 5]`, Diploma `[5, 6]`).
- **Certificate in Computer Science uses the UDSM scale with `E` as the fail letter**
  (A=70–100, B+=60–69, B=50–59, C=40–49, D=35–39, E=0–34, pass mark C), so the
  existing UDSM `gradingSystem` already applies — no new scale needed. Its
  classification is **Pass 2.0–5.0 / Fail 0.0–1.9**, i.e. pass/fail only, not the
  degree bands UDSM uses for bachelor's.
- Certificate in CS course table begins at line 11624; Diploma in CS ends at 11580
  (its "Total Credits" rows are at 11566 and 11580 — use them to verify the parse
  rather than trusting the sum).
- **Diploma in Journalism reuses the `JS` code prefix** that BA Mass Communication
  also uses for Kiswahili courses (`JS 100`, `JS 109`). The codes mean different
  things in the two programmes. Codes are namespaced per programme in the app so this
  is safe, but do not merge or de-duplicate across programmes by code — an earlier
  pass had to fix exactly that kind of collision (`LE 400`, and `DS 112`/`DS 114`).
- Certificate in Journalism is 11 courses × 12 credits, so its two semesters are
  72 each — above the 30–110 band used for sanity-checking bachelor's semesters, so
  expect the validator to flag it as high when it is correct.

### 3b. Blocked — no course tables in the prospectus

- **Six UDSM Ordinary Diplomas** (mining cluster, lines 2250–2255): Geology and Mineral
  Exploration, Petroleum Geosciences, Mining Engineering, Mineral Processing
  Engineering, Environmental Engineering and Management in Mines, Land and Mine
  Surveying. Listed as awards only; every other mention is an admission-eligibility
  sentence. **No curriculum exists in this file** — they need the UDSM Handbook or the
  respective college prospectus.
- **All UDSM master's programmes.** Zero course tables. The only "Postgraduate"
  matches in the file are contact details for the Directorate of Postgraduate Studies.
  These need the **UDSM Postgraduate Prospectus**, which is a separate PDF. Until it is
  supplied, do not add UDSM master's programmes — inventing them would produce wrong
  GPA calculations.

### 3c. Related bug: `ACADEMIC_LEVELS` program lists are stale and misleading

While checking the levels, a separate defect surfaced in `src/types/academic.ts`.
`ACADEMIC_LEVELS` hardcodes an `AcademicProgram[]` per level, and those ids no longer
resolve to the intended programmes:

- The **Diploma** list references ids `201–204`, which after the duplicate-id
  renumbering point at **Bachelor** programmes (BPLM, BEF, BLIS, BIRM Appr). Before
  that renumbering they pointed at nothing at all.
- The **Bachelor** list references ids `19, 20, 21, 22, 24, 25`, which now resolve to a
  Certificate and two Diplomas.
- Neither list includes any UDSM programme.

**Impact: none at runtime.** `GPACalculator`, `WhatIfSimulator` and
`TargetGpaCalculator` all populate their dropdowns by filtering the real `programmes`
array with `level.ntaLevels.includes(p.ntaLevel)`; they never read `level.programs`.
The only reader is `getProgramById` in `academic.ts`, which nothing imports — dead
code. So the app will not display the wrong programmes.

**Fix:** either delete the `programs` arrays and the unused `getProgramById`, or derive
them from `programmes` so they cannot drift again. Deriving is safer:

```ts
export const getProgrammesForLevel = (ntaLevels: number[]) =>
  programmes.filter(p => ntaLevels.includes(p.ntaLevel));
```

Note this must not reintroduce a circular import — `types/academic.ts` importing from
`data/academicData.ts` is fine, but confirm `academicData.ts` does not import
`types/academic.ts`.

### Definition of done for section 3

- The 4 extractable programmes exist with `universityId: 2`, correct `ntaLevel`, and
  per-semester credits matching the prospectus totals where printed.
- `ACADEMIC_LEVELS` no longer contains hardcoded ids that disagree with `programmes`.
- UDSM certificate/diploma/master's coverage is either complete or explicitly recorded
  here as blocked, so the gap is not rediscovered from scratch.

---

## Completed — do not re-open

This was on the original checklist but is already implemented. Recorded here so it is
not mistaken for outstanding work:

- [x] `Programme.universityId` is a **required** field (`src/data/academicData.ts`).
      All 113 programmes carry it; the 39 legacy IAA entries that were missing it have
      been backfilled with `universityId: 1`.
- [x] Per-university grading with differing fail letters (`src/types/university.ts`):
      IAA fails at **F**, UDSM fails at **E**.
- [x] `precision: 'round' | 'truncate'` on `GradingSystem` — IAA uses
      `round`/2 decimals, UDSM uses `truncate`/1 decimal.
