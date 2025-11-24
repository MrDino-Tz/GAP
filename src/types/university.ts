export interface University {
  id: number;
  name: string;
  shortName: string;
  location: string;
  country: string;
  logo?: string;
  website?: string;
  description?: string;
  gradingSystem?: {
    scale: string;
    levels: Array<{
      grade: string;
      points: number;
      minMark: number;
      maxMark: number;
    }>;
  };
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
      levels: [
        { grade: 'A', points: 5.0, minMark: 70, maxMark: 100 },
        { grade: 'B+', points: 4.0, minMark: 60, maxMark: 69 },
        { grade: 'B', points: 3.0, minMark: 50, maxMark: 59 },
        { grade: 'C', points: 2.0, minMark: 40, maxMark: 49 },
        { grade: 'D', points: 1.0, minMark: 35, maxMark: 39 },
        { grade: 'F', points: 0.0, minMark: 0, maxMark: 34 }
      ]
    }
  }
];

export const getUniversityById = (id: number): University | undefined => {
  return UNIVERSITIES.find(u => u.id === id);
};

export const getUniversitiesByCountry = (country: string): University[] => {
  return UNIVERSITIES.filter(u => u.country.toLowerCase() === country.toLowerCase());
};
