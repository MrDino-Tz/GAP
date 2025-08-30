export interface Module {
  code: string;
  name: string;
  creditHours: number;
  class: string;
}

export interface Semester {
  semesterNumber: number;
  semesterName: string;
  modules: Module[];
}

export interface Programme {
  id: number;
  name: string;
  ntaLevel: number;
  semesters: Semester[];
}

export interface GradingScale {
  minMark: number;
  maxMark: number;
  letterGrade: string;
  gradePoint: number;
}

export const gradingScale: GradingScale[] = [
  { minMark: 80, maxMark: 100, letterGrade: 'A', gradePoint: 5.0 },
  { minMark: 75, maxMark: 79, letterGrade: 'B+', gradePoint: 4.5 },
  { minMark: 70, maxMark: 74, letterGrade: 'B', gradePoint: 4.0 },
  { minMark: 65, maxMark: 69, letterGrade: 'C+', gradePoint: 3.5 },
  { minMark: 60, maxMark: 64, letterGrade: 'C', gradePoint: 3.0 },
  { minMark: 50, maxMark: 59, letterGrade: 'D', gradePoint: 2.0 },
  { minMark: 0, maxMark: 49, letterGrade: 'F', gradePoint: 0.0 },
];

export const programmes: Programme[] = [
  {
    id: 4,
    name: "Bachelor of Accounting and Finance (BAF)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "AFU07101",
            name: "Principle of Accounting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "AFU07102",
            name: "Business Mathematics and Statistics",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07103",
            name: "Micro Economics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07104",
            name: "Business Computer Application",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07105",
            name: "Business Communication",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07106",
            name: "Development Perspectives",
            creditHours: 8,
            class: "Core"
          }
        ]
      },
      // Semester II
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          {
            code: "AFU07207",
            name: "Financial Accounting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "AFU07208",
            name: "Financial Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07209",
            name: "Business Law",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07210",
            name: "Macro Economics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07211",
            name: "Financial Markets and Institutions",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AFU07212",
            name: "International Trade and Finance",
            creditHours: 9,
            class: "Core"
          }
        ]
      },
      // Semester III
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          {
            code: "AFU07313",
            name: "Intermediate Financial Accounting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "AFU07314",
            name: "Management Information System",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07315",
            name: "Costing Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07316",
            name: "Corporate Finance",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFG09213",
            name: "Public Finance and Taxation",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09214",
            name: "Advanced Taxation",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFU07317",
            name: "Research Methodology",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07318",
            name: "Ethics and Good Governance",
            creditHours: 8,
            class: "Core"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "AFU07419",
            name: "Operations Research",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07420",
            name: "Portfolio and Investment Analysis",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07421",
            name: "Advanced Financial Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07422",
            name: "Auditing",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07423",
            name: "Entrepreneurship",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU07424",
            name: "Taxation and Public Finance",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU07425",
            name: "Field Practical Training",
            creditHours: 10,
            class: "Core"
          }
        ]
      },
      // Semester V
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          {
            code: "AFU08101",
            name: "Financial Reporting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU08102",
            name: "International Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU08103",
            name: "Strategic Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "AFU08104",
            name: "Public Sector Accounting",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AFU08105",
            name: "Management Accounting and Control",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU08106",
            name: "Advanced Public Finance & Taxation",
            creditHours: 11,
            class: "Core"
          }
        ]
      },
      // Semester VI
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          {
            code: "AFU08207",
            name: "Auditing and Assurance Services",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU08208",
            name: "Advanced Financial Reporting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU08209",
            name: "Treasury Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU08210",
            name: "Micro-Finance Services",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AFU08211",
            name: "Risk Management",
            creditHours: 11,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: "Bachelor of Accountancy (BA)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ACU 07101",
            name: "Accounting Principles",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 07102",
            name: "Business Mathematics and Statistics",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ACU 07103",
            name: "Micro Economics",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 07104",
            name: "Business Computer Application",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ACU 07105",
            name: "Business Communication",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AFU07120",
            name: "Introductory Micro Economics",
            creditHours: 11,
            class: "Core"
          }
        ]
      },
      // Semester II
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          {
            code: "ACU 07206",
            name: "Financial Accounting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 07207",
            name: "Financial Management",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 07208",
            name: "Business Law",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ACU 07209",
            name: "Macro Economics",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 07210",
            name: "Development Perspectives",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ACU 07211",
            name: "Principles of Marketing",
            creditHours: 9,
            class: "Core"
          }
        ]
      },
      // Semester III
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          {
            code: "ACU 07312",
            name: "Intermediate Financial Accounting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ACU 07313",
            name: "Cost Accounting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ACU 07314",
            name: "Taxation and Public Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ACU 07315",
            name: "Operational Research",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ACU 07316",
            name: "Ethics and Good Governance",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ACU 07317",
            name: "Management Information System",
            creditHours: 9,
            class: "Core"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "ACU 07418",
            name: "Research Methodology",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ACU 07419",
            name: "Advanced Financial Accounting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ACU 07420",
            name: "Auditing",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ACU 07421",
            name: "Entrepreneurship",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ACU 07422",
            name: "Corporate Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ACU 07423",
            name: "Field Practical Training",
            creditHours: 15,
            class: "Core"
          }
        ]
      },
      // Semester V
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          {
            code: "ACU 08101",
            name: "Financial Reporting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 08102",
            name: "International Finance",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ACU 08103",
            name: "Principle of Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ACU 08104",
            name: "Public Sector Accounting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ACU 08105",
            name: "Management Accounting and Control",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ACU 08206",
            name: "Financial Markets and Institutions",
            creditHours: 10,
            class: "Core"
          }
        ]
      },
      // Semester VI
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          {
            code: "ACU 08207",
            name: "Auditing and Assurance Services",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 08208",
            name: "Advanced Financial Reporting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACU 08209",
            name: "Strategic Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ACU 08210",
            name: "Organizational Behavior",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ACU 08211",
            name: "Advanced Public Finance and Taxation",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ACU 08212",
            name: "Treasury Management",
            creditHours: 11,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Diploma in Finance and Banking (ODFB)",
    ntaLevel: 5,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "FBU 05101",
            name: "Principles of Banking",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 05102",
            name: "Financial Mathematics",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "FBU 05103",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "FBU 05104",
            name: "Computer Applications",
            creditHours: 6,
            class: "Fundamental"
          }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          {
            code: "FBU 05201",
            name: "Financial Accounting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 05202",
            name: "Commercial Banking",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 05203",
            name: "Business Law",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 05204",
            name: "Economics",
            creditHours: 6,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Certificate in Bookkeeping and Accounts (CBA)",
    ntaLevel: 4,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "BKU 04101",
            name: "Introduction to Bookkeeping",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "BKU 04102",
            name: "Business Mathematics",
            creditHours: 6,
            class: "Fundamental"
          },
          {
            code: "BKU 04103",
            name: "Business Communication",
            creditHours: 6,
            class: "Fundamental"
          },
          {
            code: "BKU 04104",
            name: "Computer Skills",
            creditHours: 4,
            class: "Fundamental"
          }
        ]
      }
    ]
  }
];

export const getGradeInfo = (mark: number): { letterGrade: string; gradePoint: number } => {
  const grade = gradingScale.find(g => mark >= g.minMark && mark <= g.maxMark);
  return {
    letterGrade: grade?.letterGrade || 'F',
    gradePoint: grade?.gradePoint || 0.0
  };
};

export const calculateSemesterGPA = (modules: Array<{ creditHours: number; gradePoint: number }>): number => {
  const totalQualityPoints = modules.reduce((sum, module) => sum + (module.gradePoint * module.creditHours), 0);
  const totalCreditHours = modules.reduce((sum, module) => sum + module.creditHours, 0);
  
  return totalCreditHours > 0 ? totalQualityPoints / totalCreditHours : 0;
};

export const calculateCGPA = (semesters: Array<{ gpa: number; totalCreditHours: number }>): number => {
  const totalQualityPoints = semesters.reduce((sum, sem) => sum + (sem.gpa * sem.totalCreditHours), 0);
  const totalCreditHours = semesters.reduce((sum, sem) => sum + sem.totalCreditHours, 0);
  
  return totalCreditHours > 0 ? totalQualityPoints / totalCreditHours : 0;
};