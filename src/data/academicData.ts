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
    id: 9,
    name: "Bachelor of Economics and Project Management (BEPM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "EPU 07104",
            name: "Information and Communication Technology for Project Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EPU 07105",
            name: "Development Studies",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EPU 07102",
            name: "Mathematics for Economists",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07106",
            name: "Communication Skills for Managers",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EPU 07101",
            name: "Microeconomics Principles",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EPU 07103",
            name: "Project Management Principles",
            creditHours: 10,
            class: "Fundamental"
          }
        ]
      },
      // Semester II
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          {
            code: "EPU 07205",
            name: "Project Statistical Methods",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EPU 07201",
            name: "Macroeconomics Principles",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EPU 07202",
            name: "Development Economics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07203",
            name: "Project Identification",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07206",
            name: "Accounting Principles",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07204",
            name: "Law for Project Management",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      },
      // Semester III
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          {
            code: "EPU 07306",
            name: "Project Research Methodology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "EPU 07301",
            name: "Intermediate Microeconomics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07305",
            name: "Public Finance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07303",
            name: "Project Financial Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07304",
            name: "Business Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EPU 07302",
            name: "Project Feasibility Management",
            creditHours: 10,
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
            code: "EPU 07406",
            name: "Entrepreneurship and Innovation",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "EPU 07403",
            name: "Economic Planning and Policy",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07402",
            name: "Econometrics Principles",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07404",
            name: "Project Implementation",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07405",
            name: "Project Procurement",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EPU 07401",
            name: "Intermediate Macroeconomics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EPU 07407",
            name: "Industrial Practical Training",
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
            code: "EPU 08101",
            name: "Industrial Economics",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EPU 08102",
            name: "Project Risk Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EPU 08103",
            name: "Project Tax Planning",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EPU 08104",
            name: "Management Skills",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EPU 08105",
            name: "Principles of Human Resource Management",
            creditHours: 10,
            class: "Fundamental"
          }
        ]
      },
      // Semester VI
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          {
            code: "EPU 08201",
            name: "Economics of Natural Resources",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EPU 08202",
            name: "Intermediate Econometrics",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "EPU 08203",
            name: "International Economics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EPU 08204",
            name: "Monitoring and Evaluation Principles",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "EPU 08205",
            name: "Project Auditing",
            creditHours: 12,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Bachelor of Computer Science (BCS)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ITU 07101",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 07102",
            name: "Business Computer Applications",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07103",
            name: "Computer Fundamentals",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITU 07104",
            name: "Computer Systems Architecture",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 07105",
            name: "Database Systems",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07107",
            name: "Foundation of Mathematical Analysis",
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
            code: "ITU 07208",
            name: "Computer Networking",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07209",
            name: "Development Studies",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07210",
            name: "Discrete Mathematics",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07211",
            name: "Computer Graphics Design",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07212",
            name: "Principles of Programming",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07213",
            name: "Probability and Statistics",
            creditHours: 8,
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
            code: "ITU 07317",
            name: "Distributed Database",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 07318",
            name: "Distributed Computing Systems",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07320",
            name: "Operating Systems",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 07321",
            name: "Research Methodology",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ITU 07322",
            name: "Object Oriented Programming",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07323",
            name: "Web Design",
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
            code: "ITU 07424",
            name: "Artificial Intelligence",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 07425",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 07426",
            name: "Information Security",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07427",
            name: "Internet Programming and Applications",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITU 07428",
            name: "System Analysis and Design",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 07430",
            name: "Wireless Communication",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07431",
            name: "Industrial Practical Training",
            creditHours: 20,
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
            code: "ITU 08101",
            name: "IT Project Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 08102",
            name: "Open Source Software Development",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 08103",
            name: "Social and Ethical Issues in Computing",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 08104",
            name: "Data Mining",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITU 08105",
            name: "Network Management and Administration",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITU 08107",
            name: "Interactive Multimedia",
            creditHours: 8,
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
            code: "ITU 08209",
            name: "Data Structure and Algorithms",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 08211",
            name: "Cryptology and Coding Theory",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITU 08213",
            name: "Computer Security",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITU 08215",
            name: "Mobile Computing",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 08217",
            name: "Individual Project",
            creditHours: 20,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Bachelor of Finance and Banking (BFB)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "FBU 07101",
            name: "Fundamentals of Accounting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "FBU 07102",
            name: "Business Mathematics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 07103",
            name: "Principles of Micro-Economics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 07104",
            name: "Business Communication",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "FBU 07105",
            name: "Business Computer Application",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "FBU 07106",
            name: "Development Perspective",
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
            code: "FBU 07207",
            name: "International Trade and Finance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 07208",
            name: "Principles of Banking",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "FBU 07209",
            name: "Business Statistics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 07210",
            name: "Money and Banking",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "FBU 07211",
            name: "Principles of Macro-Economics",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "FBU 07212",
            name: "Business Laws",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 07213",
            name: "Digital Banking",
            creditHours: 10,
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
            code: "FBU 07314",
            name: "Principles of Bancassurance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "FBU 07315",
            name: "Research Methodology",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 07316",
            name: "Management Information System",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 07317",
            name: "Business Lending",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "FBU 07318",
            name: "Financial Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "FBU 07319",
            name: "Public Finance",
            creditHours: 12,
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
            code: "FBU 07420",
            name: "Entrepreneurship",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 07421",
            name: "Operation Research",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 07422",
            name: "Corporate Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "FBU 07423",
            name: "Financial Marketing and Institution",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "FBU 07424",
            name: "Banking Supervision and Regulation",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "FBU 07425",
            name: "Practical Training",
            creditHours: 20,
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
            code: "FBU 08101",
            name: "Principles of Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 08102",
            name: "Consultancy Skills",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "FBU 08103",
            name: "Risk Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 08104",
            name: "International Finance",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "FBU 08105",
            name: "Banking Business",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "FBU 08106",
            name: "Portfolio Management",
            creditHours: 12,
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
            code: "FBU 08207",
            name: "Strategic Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "FBU 08208",
            name: "Banking Operations",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "FBU 08209",
            name: "Financial Analysis",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FBU 08210",
            name: "Banking Law",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "FBU 08211",
            name: "Micro-Finance Services",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "FBU 08212",
            name: "Treasury Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "FBU 08213",
            name: "Managerial Economics",
            creditHours: 10,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Bachelor of Auditing and Assurance (BAA)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "AAU 07101",
            name: "Principles of Accounting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07102",
            name: "Business Mathematics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07103",
            name: "Principles of Auditing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07104",
            name: "Legal Aspect in Accounting and Auditing",
            creditHours: 7,
            class: "Fundamental"
          },
          {
            code: "AAU 07105",
            name: "Business Communication Skills",
            creditHours: 7,
            class: "Fundamental"
          },
          {
            code: "AAU 07106",
            name: "Business Computers Application",
            creditHours: 9,
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
            code: "AAU 07207",
            name: "Principles of Internal Auditing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07208",
            name: "Financial Accounting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07209",
            name: "Business Statistics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07210",
            name: "Principles of Risk Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AAU 07211",
            name: "Accounting and Auditing for Blockchain and Cryptocurrencies",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "AAU 07212",
            name: "Legal, Regulatory and Ethical Issues in Auditing",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AAU 07225",
            name: "Industrial Training 1",
            creditHours: 10,
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
            code: "AAU 07313",
            name: "International Financial Reporting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07314",
            name: "Assessment of Risks and Internal Controls",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AAU 07315",
            name: "Entrepreneurship",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AAU 07316",
            name: "Business Taxation",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "AAU 07317",
            name: "Cost Accounting",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "AAU 07318",
            name: "IT Concepts and System Analysis Design Development",
            creditHours: 10,
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
            code: "AAU 07419",
            name: "Financial Reporting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07420",
            name: "Indirect Taxation and Compliance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07421",
            name: "Public Sector Reporting",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07422",
            name: "Research Methodology",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AAU 07423",
            name: "Corporate Finance",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "AAU 07424",
            name: "Cyber Security",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "AAU 07426",
            name: "Industrial Training 2",
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
            code: "AAU 08101",
            name: "Management Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AAU 08102",
            name: "International Taxation",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AAU 08103",
            name: "Information System Audit",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AAU 08104",
            name: "Auditing and Assurance",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "AAU 08105",
            name: "Advanced Financial Reporting",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "AAU 08106",
            name: "Ethics and Organization Governance",
            creditHours: 9,
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
            code: "AAU 08207",
            name: "Forensic Auditing and Investigation",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AAU 08208",
            name: "Enterprise Risk Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AAU 08209",
            name: "Advanced IT Systems and Auditing",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "AAU 08210",
            name: "Modern Auditing and Assurance",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AAU 08211",
            name: "Financial Statement Analysis and Valuation",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "AAU 08212",
            name: "Tax Auditing",
            creditHours: 9,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Bachelor of Accountancy with Information Technology (BA-IT)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "AIU 07101",
            name: "Business Mathematics",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "AIU 07102",
            name: "Business Law",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AIU 07103",
            name: "Principles of Accounting",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AIU 07104",
            name: "Principles of Computing Science",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AIU 07105",
            name: "Introduction to Business Information System",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AIU 07106",
            name: "Development Studies",
            creditHours: 9,
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
            code: "AFU 07202",
            name: "Financial Accounting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 07201",
            name: "Web Development",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BMU 07201",
            name: "Entrepreneurship and Innovation",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "GSU 07204",
            name: "Quantitative Methods for Business Decision",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07202",
            name: "Operating Systems",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "GSU 07205",
            name: "Business Communication",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AFU 07203",
            name: "Practical Fieldwork Report",
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
            code: "AFU 07304",
            name: "Accounting Information Systems",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AFU 07305",
            name: "Auditing Principles and Practice",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "AFU 07306",
            name: "Principles of Economics",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07305",
            name: "Database Principles",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU 07307",
            name: "Financial Management",
            creditHours: 9,
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
            code: "AFU 08101",
            name: "Advanced Financial Reporting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU 08112",
            name: "Management Accounting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU 08102",
            name: "Auditing and Assurance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 08115",
            name: "IS Security and Risk Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "GSU 08201",
            name: "Strategic Business Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 08117",
            name: "Information Systems Management",
            creditHours: 9,
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
            code: "AFU 08205",
            name: "Corporate Reporting",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ITU 08216",
            name: "System Audit & Forensic",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AFU 08207",
            name: "Performance Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU 08212",
            name: "Advanced Business Taxation",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "AFU 08217",
            name: "Forensic Accounting and Auditing",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "AFU 08104",
            name: "International Finance",
            creditHours: 9,
            class: "Core"
          }
        ]
      }
    ]
  },
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