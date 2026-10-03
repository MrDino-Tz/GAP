export interface GradingLevel {
  grade: string;
  points: number;
  minMark: number;
  maxMark: number;
}

export interface ClassificationBand {
  label: string;
  minGpa: number;
  maxGpa: number;
}

export interface GradingSystem {
  scale: string;
  /** How the GPA/CGPA is rounded after division. */
  precision: 'round' | 'truncate';
  /** Number of decimals kept in GPA/CGPA results. */
  decimals: number;
  /** Grade points at/above which a course counts as passed (default 2.0 => C). */
  minPassGradePoint?: number;
  levels: GradingLevel[];
  /** Degree classification bands (highest first) used for performance description. */
  classification?: ClassificationBand[];
}

export interface University {
  id: number;
  name: string;
  shortName: string;
  location: string;
  country: string;
  logo?: string;
  website?: string;
  description?: string;
  gradingSystem?: GradingSystem;
}

export const UNIVERSITIES: University[] = [
  {
    id: 1,
    name: "Institute of Accountancy Arusha",
    shortName: "IAA",
    location: "Arusha",
    country: "Tanzania",
    website: "https://iaa.ac.tz",
    description: "Premier institute for accounting, finance, and business education in Tanzania",
    gradingSystem: {
      scale: "NTA 5-Point Scale",
      precision: 'round',
      decimals: 2,
      levels: [
        { grade: 'A', points: 5.0, minMark: 70, maxMark: 100 },
        { grade: 'B+', points: 4.0, minMark: 60, maxMark: 69 },
        { grade: 'B', points: 3.0, minMark: 50, maxMark: 59 },
        { grade: 'C', points: 2.0, minMark: 40, maxMark: 49 },
        { grade: 'D', points: 1.0, minMark: 35, maxMark: 39 },
        { grade: 'F', points: 0.0, minMark: 0, maxMark: 34 }
      ]
    }
  },
  {
    id: 2,
    name: "University of Dar es Salaam",
    shortName: "UDSM",
    location: "Dar es Salaam",
    country: "Tanzania",
    website: "https://www.udsm.ac.tz",
    description: "The oldest and largest public university in Tanzania (Mlimani Campus, Dar es Salaam)",
    gradingSystem: {
      scale: "UDSM 5-Point Scale",
      precision: 'truncate',
      decimals: 1,
      minPassGradePoint: 2.0,
      levels: [
        { grade: 'A', points: 5.0, minMark: 70, maxMark: 100 },
        { grade: 'B+', points: 4.0, minMark: 60, maxMark: 69 },
        { grade: 'B', points: 3.0, minMark: 50, maxMark: 59 },
        { grade: 'C', points: 2.0, minMark: 40, maxMark: 49 },
        { grade: 'D', points: 1.0, minMark: 35, maxMark: 39 },
        { grade: 'E', points: 0.0, minMark: 0, maxMark: 34 }
      ],
      classification: [
        { label: 'First Class (A)', minGpa: 4.4, maxGpa: 5.0 },
        { label: 'Upper Second Class (B+)', minGpa: 3.5, maxGpa: 4.3 },
        { label: 'Lower Second Class (B)', minGpa: 2.7, maxGpa: 3.4 },
        { label: 'Pass (C)', minGpa: 2.0, maxGpa: 2.6 },
        { label: 'No Award', minGpa: 0.0, maxGpa: 1.9 },
      ],
    }
  }
];

export const getUniversityById = (id: number): University | undefined => {
  return UNIVERSITIES.find(u => u.id === id);
};

export const getUniversitiesByCountry = (country: string): University[] => {
  return UNIVERSITIES.filter(u => u.country.toLowerCase() === country.toLowerCase());
};

export const getUniversityGradeScale = (university: University | null | undefined): GradingLevel[] => {
  const levels = university?.gradingSystem?.levels;
  if (levels && levels.length > 0) return levels;
  return UNIVERSITIES[0].gradingSystem?.levels ?? [];
};

export const getUniversityFailGrade = (university: University | null | undefined): string => {
  const levels = getUniversityGradeScale(university);
  const fail = levels.reduce(
    (lowest, level) => (level.points < lowest.points ? level : lowest),
    levels[0],
  );
  return fail?.grade ?? 'F';
};

export const getGradingPrecision = (
  university: University | null | undefined,
): { precision: 'round' | 'truncate'; decimals: number; minPassGradePoint: number } => {
  const system = university?.gradingSystem;
  return {
    precision: system?.precision ?? 'round',
    decimals: system?.decimals ?? 2,
    minPassGradePoint: system?.minPassGradePoint ?? 2.0,
  };
};