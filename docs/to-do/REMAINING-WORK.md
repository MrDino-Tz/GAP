# Remaining Work

Two items were deliberately left undone. Both are recorded here with evidence and a
recommended fix so they can be picked up later without re-investigating.

Last updated: 2026-10-03
App state at time of writing: 113 programmes (47 IAA / 66 UDSM), 3,723 course rows,
`npm run build` passing.

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
