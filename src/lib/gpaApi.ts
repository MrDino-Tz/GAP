import { calculateSemesterGPA, calculateCGPA, gradingScale as localGradingScale } from '@/data/academicData';

/**
 * GAP backend GPA client.
 *
 * Every GPA/CGPA/target calculation is sent to the FastAPI backend
 * (VITE_VISITOR_API). If the backend is unreachable, the identical math is
 * computed locally so the calculators never break.
 */

export interface GradingConfig {
  precision: 'round' | 'truncate';
  decimals: number;
}

const DEFAULT_GRADING: GradingConfig = { precision: 'round', decimals: 2 };

const applyPrecision = (value: number, grading: GradingConfig): number => {
  const factor = Math.pow(10, grading.decimals);
  if (grading.precision === 'truncate') {
    return Math.trunc(value * factor) / factor;
  }
  return parseFloat(value.toFixed(grading.decimals));
};

export interface GradingScaleEntry {
  letterGrade: string;
  gradePoint: number;
  minScore: number;
  maxScore: number;
  remark: string;
}

interface ModuleInput {
  module?: { code?: string; name?: string; creditHours: number };
  gradePoint: number;
}

interface SemesterInput {
  gpa: number;
  totalCreditHours: number;
}

export interface SemesterResult {
  gpa: number;
  totalCreditHours: number;
  totalQualityPoints: number;
  passedModules: number;
  totalModules: number;
  modules: Array<{
    code: string | null;
    name: string | null;
    creditHours: number;
    gradePoint: number;
    qualityPoints: number;
    passed: boolean;
  }>;
}

export interface CgpaResult {
  cgpa: number;
  totalSemesters: number;
  totalCreditHours: number;
  totalQualityPoints: number;
  semesters: Array<{ gpa: number; totalCreditHours: number }>;
}

export interface TargetGpaInput {
  currentCgpa: number;
  completedCreditHours: number;
  semesterCreditHours: number;
  targetCgpa: number;
}

export interface TargetGpaResult {
  requiredGpa: number;
  achievable: boolean;
  needsAtLeast: number;
  currentQualityPoints: number;
  totalQualityPoints: number;
}

export const apiBase = (): string | null => {
  const url = import.meta.env.VITE_VISITOR_API as string | undefined;
  return url ? String(url).replace(/\/$/, '') : null;
};

let cachedGradingScale: GradingScaleEntry[] | null = null;

const localScaleAsEntries: GradingScaleEntry[] = localGradingScale.map((g) => ({
  letterGrade: g.letterGrade,
  gradePoint: g.gradePoint,
  minScore: g.minMark,
  maxScore: g.maxMark,
  remark: g.description,
}));

const postJson = async <T>(path: string, body: unknown): Promise<T> => {
  const res = await fetch(`${apiBase()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API ${path} failed with ${res.status}`);
  return res.json() as Promise<T>;
};

export const getGradingScale = async (): Promise<GradingScaleEntry[]> => {
  if (cachedGradingScale) return cachedGradingScale;
  const api = apiBase();
  if (!api) return localScaleAsEntries;
  try {
    const res = await fetch(`${api}/api/gpa/grading-scale`);
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    cachedGradingScale = data.gradingScale as GradingScaleEntry[];
    return cachedGradingScale;
  } catch {
    return localScaleAsEntries;
  }
};

const toApiModule = (m: ModuleInput) => ({
  code: m.module?.code,
  name: m.module?.name,
  creditHours: m.module?.creditHours ?? 0,
  gradePoint: m.gradePoint,
});

const computeSemesterLocal = (modules: ModuleInput[], grading: GradingConfig): SemesterResult => {
  const gpa = applyPrecision(
    calculateSemesterGPA(modules.map((m) => ({ creditHours: m.module?.creditHours ?? 0, gradePoint: m.gradePoint }))),
    grading,
  );
  const breakdown = modules.map((m) => {
    const creditHours = m.module?.creditHours ?? 0;
    const qualityPoints = m.gradePoint * creditHours;
    return {
      code: m.module?.code ?? null,
      name: m.module?.name ?? null,
      creditHours,
      gradePoint: m.gradePoint,
      qualityPoints,
      passed: m.gradePoint >= 2.0,
    };
  });
  return {
    gpa,
    totalCreditHours: breakdown.reduce((s, m) => s + m.creditHours, 0),
    totalQualityPoints: breakdown.reduce((s, m) => s + m.qualityPoints, 0),
    passedModules: breakdown.filter((m) => m.passed).length,
    totalModules: modules.length,
    modules: breakdown,
  };
};

export const calcSemesterGPA = async (modules: ModuleInput[], record = true, grading: GradingConfig = DEFAULT_GRADING): Promise<SemesterResult> => {
  const api = apiBase();
  if (!api) return computeSemesterLocal(modules, grading);
  try {
    return await postJson<SemesterResult>('/api/gpa/semester', {
      record,
      modules: modules.map(toApiModule),
      precision: grading.precision,
      decimals: grading.decimals,
    });
  } catch {
    return computeSemesterLocal(modules, grading);
  }
};

const computeCgpaLocal = (semesters: SemesterInput[], grading: GradingConfig = DEFAULT_GRADING): CgpaResult => {
  const cgpa = applyPrecision(calculateCGPA(semesters), grading);
  return {
    cgpa,
    totalSemesters: semesters.length,
    totalCreditHours: semesters.reduce((s, sem) => s + sem.totalCreditHours, 0),
    totalQualityPoints: semesters.reduce((s, sem) => s + sem.gpa * sem.totalCreditHours, 0),
    semesters,
  };
};

export const calcCGPA = async (semesters: SemesterInput[], record = true, grading: GradingConfig = DEFAULT_GRADING): Promise<CgpaResult> => {
  const api = apiBase();
  if (!api) return computeCgpaLocal(semesters, grading);
  try {
    return await postJson<CgpaResult>('/api/gpa/cgpa', {
      record,
      semesters,
      precision: grading.precision,
      decimals: grading.decimals,
    });
  } catch {
    return computeCgpaLocal(semesters, grading);
  }
};

const computeTargetLocal = (input: TargetGpaInput, grading: GradingConfig = DEFAULT_GRADING): TargetGpaResult => {
  const currentQualityPoints = input.currentCgpa * input.completedCreditHours;
  const requiredGpa =
    input.targetCgpa > 0 && input.semesterCreditHours > 0
      ? (input.targetCgpa * (input.completedCreditHours + input.semesterCreditHours) - currentQualityPoints) /
        input.semesterCreditHours
      : 0;
  const achievable = requiredGpa >= 0 && requiredGpa <= 5;
  const needsAtLeast = Math.max(0, requiredGpa);
  return {
    requiredGpa: applyPrecision(requiredGpa, grading),
    achievable,
    needsAtLeast: applyPrecision(needsAtLeast, grading),
    currentQualityPoints,
    totalQualityPoints: currentQualityPoints + needsAtLeast * input.semesterCreditHours,
  };
};

export const calcTargetGPA = async (input: TargetGpaInput, record = false, grading: GradingConfig = DEFAULT_GRADING): Promise<TargetGpaResult> => {
  const api = apiBase();
  if (!api) return computeTargetLocal(input, grading);
  try {
    return await postJson<TargetGpaResult>('/api/gpa/target', {
      ...input,
      record,
      precision: grading.precision,
      decimals: grading.decimals,
    });
  } catch {
    return computeTargetLocal(input, grading);
  }
};