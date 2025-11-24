export interface AcademicProgram {
  id: number;
  name: string;
  ntaLevel: number;
  duration: string;
  description?: string;
}

export interface AcademicLevel {
  id: number;
  name: 'Certificate' | 'Diploma' | 'Bachelor' | 'Masters';
  ntaLevels: number[];
  description: string;
  programs: AcademicProgram[];
}

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: 1,
    name: 'Certificate',
    ntaLevels: [4, 5],
    description: 'Entry-level programs providing foundational knowledge and skills',
    programs: [
      { id: 11, name: 'Certificate in Accountancy (CA)', ntaLevel: 4, duration: '1 Year' },
      { id: 19, name: 'Certificate in Insurance and Risk Management (CIRM)', ntaLevel: 4, duration: '1 Year' },
      { id: 21, name: 'Certificate in Economics and Finance (CEF)', ntaLevel: 4, duration: '1 Year' },
      { id: 24, name: 'Certificate in Computer Networking (CCN)', ntaLevel: 4, duration: '1 Year' },
      { id: 28, name: 'Certificate in Information Technology (CIT)', ntaLevel: 4, duration: '1 Year' },
      { id: 31, name: 'Certificate in Human Resource Management (CHRM)', ntaLevel: 4, duration: '1 Year' },
    ]
  },
  {
    id: 2,
    name: 'Diploma',
    ntaLevels: [5, 6],
    description: 'Intermediate programs offering specialized training and practical skills',
    programs: [
      { id: 201, name: 'Ordinary Diploma in Accountancy (ODA)', ntaLevel: 5, duration: '2 Years' },
      { id: 202, name: 'Ordinary Diploma in Business Administration (ODBA)', ntaLevel: 5, duration: '2 Years' },
      { id: 203, name: 'Ordinary Diploma in Computer Science (ODCS)', ntaLevel: 5, duration: '2 Years' },
      { id: 204, name: 'Ordinary Diploma in Information Technology (ODIT)', ntaLevel: 5, duration: '2 Years' },
    ]
  },
  {
    id: 3,
    name: 'Bachelor',
    ntaLevels: [7, 8],
    description: 'Undergraduate degree programs providing comprehensive education',
    programs: [
      { id: 1, name: 'Bachelor of Accountancy (BA)', ntaLevel: 7, duration: '3 Years' },
      { id: 4, name: 'Bachelor of Accounting and Finance (BAF)', ntaLevel: 7, duration: '3 Years' },
      { id: 5, name: 'Bachelor of Accountancy with Information Technology (BA-IT)', ntaLevel: 7, duration: '3 Years' },
      { id: 6, name: 'Bachelor of Auditing and Assurance (BAA)', ntaLevel: 7, duration: '3 Years' },
      { id: 7, name: 'Bachelor of Finance and Banking (BFB)', ntaLevel: 7, duration: '3 Years' },
      { id: 8, name: 'Bachelor of Computer Science (BCS)', ntaLevel: 7, duration: '3 Years' },
      { id: 9, name: 'Bachelor of Economics and Project Management (BEPM)', ntaLevel: 7, duration: '3 Years' },
      { id: 10, name: 'Bachelor of Information Technology (BIT)', ntaLevel: 7, duration: '3 Years' },
    ]
  },
  {
    id: 4,
    name: 'Masters',
    ntaLevels: [9],
    description: 'Postgraduate programs for advanced study and research',
    programs: [
      { id: 401, name: 'Master of Business Administration (MBA)', ntaLevel: 9, duration: '2 Years' },
      { id: 402, name: 'Master of Science in Accounting and Finance (MSc A&F)', ntaLevel: 9, duration: '2 Years' },
      { id: 403, name: 'Master of Science in Information Technology (MSc IT)', ntaLevel: 9, duration: '2 Years' },
      { id: 404, name: 'Master of Science in Economics (MSc Economics)', ntaLevel: 9, duration: '2 Years' },
    ]
  }
];

export const getProgramById = (id: number): AcademicProgram | undefined => {
  for (const level of ACADEMIC_LEVELS) {
    const program = level.programs.find(p => p.id === id);
    if (program) return program;
  }
  return undefined;
};

export const getLevelByNtaLevel = (ntaLevel: number): AcademicLevel | undefined => {
  return ACADEMIC_LEVELS.find(level => level.ntaLevels.includes(ntaLevel));
};