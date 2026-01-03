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
      { id: 11, name: 'Bachelor Degree in Procurement and Logistics Management (BPLM)', ntaLevel: 7, duration: '3 Years' },
      { id: 12, name: 'Bachelor Degree in Economics and Finance (BEF)', ntaLevel: 7, duration: '3 Years' },
      { id: 13, name: 'Bachelor of Library and Information Studies (BLIS)', ntaLevel: 7, duration: '3 Years' },
      { id: 14, name: 'Bachelor Degree in Business Management (BBM)', ntaLevel: 7, duration: '3 Years' },
      { id: 15, name: 'Bachelor Degree in Cyber Security (BCYSE)', ntaLevel: 7, duration: '3 Years' },
      { id: 16, name: 'Bachelor of Credit Management (BCM)', ntaLevel: 7, duration: '3 Years' },
      { id: 17, name: 'Bachelor Degree in Marketing and Public Relations (BMPR)', ntaLevel: 7, duration: '3 Years' },
      { id: 18, name: 'Bachelor Degree in Economics and Taxation (BET)', ntaLevel: 7, duration: '3 Years' },
      { id: 19, name: 'Bachelor Degree in Insurance and Risk Management with Apprenticeship (BIRM Appr)', ntaLevel: 7, duration: '3 Years' },
      { id: 20, name: 'Bachelor Degree in Tourism and Hospitality Management with Apprenticeship (BTHA)', ntaLevel: 7, duration: '3 Years' },
      { id: 21, name: 'Bachelor Degree in Banking with Apprenticeship (BB Appr)', ntaLevel: 7, duration: '3 Years' },
      { id: 22, name: 'Bachelor Degree in Human Resource Management (BHRM)', ntaLevel: 7, duration: '3 Years' },
      { id: 23, name: 'Bachelor Degree in Strategic and Security Studies (BSSS)', ntaLevel: 7, duration: '3 Years' },
      { id: 24, name: 'Bachelor Degree in Education with Computer Science (BECS)', ntaLevel: 7, duration: '3 Years' },
      { id: 25, name: 'Bachelor Degree in Multimedia and Mass Communication (BMM)', ntaLevel: 7, duration: '3 Years' },
      { id: 26, name: 'Bachelor Degree in Records and Information Management (BRIM)', ntaLevel: 7, duration: '3 Years' },
    ]
  },
  {
    id: 4,
    name: 'Masters',
    ntaLevels: [9],
    description: 'Postgraduate programs for advanced study and research',
    programs: [
      { id: 401, name: 'Master of Business Administration (MBA)', ntaLevel: 9, duration: '2 Years' },
      { id: 402, name: 'Master of Business Administration in Information Technology Management (MBA-ITM)', ntaLevel: 9, duration: '2 Years' },
      { id: 403, name: 'Master of Business Administration in Leadership and Governance (MBA-LG)', ntaLevel: 9, duration: '2 Years' },
      { id: 404, name: 'Master of Business Administration in Procurement and Supplies Management (MBA-PSM)', ntaLevel: 9, duration: '2 Years' },
      { id: 405, name: 'Master of Business Administration in Policy Development and Execution (MBA-PDE)', ntaLevel: 9, duration: '2 Years' },
      { id: 406, name: 'Master Degree in Accountancy (MAF)', ntaLevel: 9, duration: '2 Years' },
      { id: 407, name: 'Master of Science in Finance and Investment (MSc.FI)', ntaLevel: 9, duration: '2 Years' },
      { id: 408, name: 'Master of Science in Accounting and Finance (MSc A&F)', ntaLevel: 9, duration: '2 Years' },
      { id: 409, name: 'Master of Science in Human Resource Management (MSc-HRM)', ntaLevel: 9, duration: '2 Years' },
      { id: 410, name: 'Master Degree in Information Security (MIS)', ntaLevel: 9, duration: '2 Years' },
      { id: 411, name: 'Masters in Education Management (MEM)', ntaLevel: 9, duration: '2 Years' },
      { id: 412, name: 'Master of Science in Economics (MSc Economics)', ntaLevel: 9, duration: '2 Years' },
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