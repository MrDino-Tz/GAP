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
  description: string;
}

export const gradingScale: GradingScale[] = [
  { 
    minMark: 70, 
    maxMark: 100, 
    letterGrade: 'A', 
    gradePoint: 5.0,
    description: 'Excellent: Work of outstanding quality, rare talent for the module, an original or incisive mind.'
  },
  { 
    minMark: 60, 
    maxMark: 69, 
    letterGrade: 'B+', 
    gradePoint: 4.0,
    description: 'Very Good (Well Above Average): Comprehensive, accurate work, flair for and comprehension of the module is clearly perceptible.'
  },
  { 
    minMark: 50, 
    maxMark: 59, 
    letterGrade: 'B', 
    gradePoint: 3.0,
    description: 'Good (Above Average): Sound grasp of the most important goals of the module. Work described as careful, competent and good without being distinguished.'
  },
  { 
    minMark: 40, 
    maxMark: 49, 
    letterGrade: 'C', 
    gradePoint: 2.0,
    description: 'Satisfactory (Average): Average competence which falls short of B grade. Work described as adequate.'
  },
  { 
    minMark: 35, 
    maxMark: 39, 
    letterGrade: 'D', 
    gradePoint: 1.0,
    description: 'Poor (Below Average): Marginal, barely satisfy the minimum requirements.'
  },
  { 
    minMark: 0, 
    maxMark: 34, 
    letterGrade: 'F', 
    gradePoint: 0.0,
    description: 'Failure: Did not meet the minimum requirements.'
  },
];

export const programmes: Programme[] = [
  {
    id: 10,
    name: "Bachelor of Information Technology (BIT)",
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
            code: "ITU 07105",
            name: "Database Systems Development",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 07106",
            name: "Digital Logic and Computer Organization",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITU 07107",
            name: "Foundation of Analysis",
            creditHours: 8,
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
            code: "ITU 07208",
            name: "Computer Networking",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITU 07209",
            name: "Development Perspectives",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07211",
            name: "Computer Graphic Design",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07212",
            name: "Principles of Programming",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITU 07213",
            name: "Probability and Statistics",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 07214",
            name: "Database Implementation and Management",
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
            code: "ITU 07315",
            name: "Business Law",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 07316",
            name: "Data Routing and Switching",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 07319",
            name: "Management Information Systems",
            creditHours: 8,
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
            code: "ITU 07425",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Fundamental"
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
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITU 07429",
            name: "Supporting Personal Computers",
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
            code: "ITU 08106",
            name: "Information System Auditing",
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
            code: "ITU 08208",
            name: "Cybercrimes and Computer Law",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ITU 08210",
            name: "E-commerce and Technology",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 08212",
            name: "Business Information System Re-engineering",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 08214",
            name: "Information System Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITU 08216",
            name: "Programming for Mobile Device",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITU 08217",
            name: "Individual Project",
            creditHours: 20,
            class: "Core"
          }
        ]
      }
    ]
  },
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
  // Add Diploma in Accountancy (DA) for NTA Level 4
  {
    id: 11,
    name: "Certificate in Accountancy (CA) - NTA Level 4",
    ntaLevel: 4,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ACT 04101",
            name: "Basic Bookkeeping",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ACT 04102",
            name: "Basic Business Mathematics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ACT 04103",
            name: "Basic Storekeeping",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ACT 04104",
            name: "Commercial Knowledge",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ACT 04105",
            name: "Basic Communication Skills",
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
            code: "ACT 04206",
            name: "Basic Computer Application in Business",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ACT 04207",
            name: "Bookkeeping and Accounts",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ACT 04208",
            name: "Office Practice and Records Managements",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ACT 04209",
            name: "Basic Business Finance",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ACT 04210",
            name: "Basics of Costing",
            creditHours: 15,
            class: "Core"
          }
        ]
      }
    ]
  },
  // Add Diploma in Accountancy (DA) for NTA Level 5 & 6
  {
    id: 12,
    name: "Diploma in Accountancy (DA) - NTA Level 5 & 6",
    ntaLevel: 5, // Using 5 as the primary level, since the programme covers both 5 and 6
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ACT 05101",
            name: "Principles of Accounting",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "ACT 05102",
            name: "Computer Applications",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ACT 05103",
            name: "Store and Stock Control",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ACT 05104",
            name: "Business Mathematics and Statistics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ACT 05105",
            name: "Business Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ACT 05106",
            name: "Communication Skills and Office Practice",
            creditHours: 8,
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
            code: "ACT 05207",
            name: "Principles of Accounts and Auditing",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "ACT 05208",
            name: "Finance Principles",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "ACT 05209",
            name: "Economics",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "ACT 05210",
            name: "Customer Service",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ACT 05211",
            name: "Practical Training",
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
            code: "ACT 06101",
            name: "Financial of Accounting",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "ACT 06102",
            name: "Marketing",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ACT 06103",
            name: "Business Finance",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "ACT 06104",
            name: "Banking Operations",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "ACT 06105",
            name: "Principles of Auditing",
            creditHours: 13,
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
            code: "ACT 06206",
            name: "Taxation",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "ACT 06207",
            name: "Cost Accounting",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "ACT 06208",
            name: "Principles of Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ACT 06209",
            name: "Business Law",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ACT 06210",
            name: "Principles of Entrepreneurship",
            creditHours: 12,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  // Add Master Degree in Accounting and Finance (MAF)
  {
    id: 13,
    name: "Master Degree in Accounting and Finance (MAF)",
    ntaLevel: 8,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "AFG09101",
            name: "Quantitative Techniques for Business",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "AFG09102",
            name: "Financial Reporting",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09103",
            name: "Financial Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09104",
            name: "Management Accounting and Control",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09105",
            name: "Investments and Portfolio Management",
            creditHours: 15,
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
            code: "AFG09206",
            name: "Research Methods for Business",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "AFG09207",
            name: "Investment and Portfolio Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09208",
            name: "Multinational Finance Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09209",
            name: "Advanced Corporate Reporting",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09315",
            name: "MAF-Dissertation",
            creditHours: 40,
            class: "Core"
          }
        ]
      },
      // Semester II: Electives
      {
        semesterNumber: 3,
        semesterName: "Semester II: Electives",
        modules: [
          {
            code: "AFG09210",
            name: "Management, Government & Ethics",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09211",
            name: "Behavioral Finance",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "AFG09212",
            name: "Institutional Investments",
            creditHours: 15,
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
          }
        ]
      }
    ]
  },
  // Add Diploma in Insurance and Risk Management (BIRM Appr) for NTA Level 4
  {
    id: 19,
    name: "Certificate in Insurance and Risk Management (CIRM) - NTA Level 4",
    ntaLevel: 4,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "IRT 04101",
            name: "Basic Insurance Practice",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRT 04102",
            name: "Basic Short Term Insurance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "IRT 04103",
            name: "Essentials of Risk Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRT 04104",
            name: "Basic Insuarance Agency Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRT 04106",
            name: "Elementary Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "IRT 04207",
            name: "Elements of Micro-Insurance",
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
            code: "IRT 04208",
            name: "Basic Bancassurance Practice",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRT 04209",
            name: "Basic Health Insurance",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRT 04211",
            name: "Basic Computer Application",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRT 04212",
            name: "Elements of Commerce",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "IRT 04213",
            name: "Practical Training",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRT04105",
            name: "Elements of Business Mathematics and Statistics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRT04210",
            name: "Basic Insuarance Regulation",
            creditHours: 10,
            class: "Core"
          }
        ]
      }
    ]
  },
  // Add Diploma in Economics and Finance (ODEF) for NTA Level 5 & 6
  {
    id: 20,
    name: "Diploma in Economics and Finance (ODEF) - NTA Level 5 & 6",
    ntaLevel: 5, // Using 5 as the primary level, since the programme covers both 5 and 6
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "EFT 05101",
            name: "Principles of Accounting",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "EFT 05102",
            name: "Communication Skills and Office Practice",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EFT 05103",
            name: "Fundamentals of Information and Communication Technology",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EFT 05104",
            name: "Principles of Microeconomics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFT05105",
            name: "Fundamentals of Business Mathematics and Statistics",
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
            code: "EFT05201",
            name: "Fundamentals of Financial Planning and Budgeting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EFT05202",
            name: "Principles of Micro-Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFT05203",
            name: "Principles of Taxation",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EFT05204",
            name: "Basics of Business Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFT05205",
            name: "Principles of Macroeconomics",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EFT05206",
            name: "Industrial Training",
            creditHours: 20,
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
            code: "EFD 06101",
            name: "Fundamentals of Financial Accounting",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "EFD06102",
            name: "Principles of Banking Operations",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFD06103",
            name: "Marketing of Financial Services",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "EFD 06104",
            name: "Principles of Public Economics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFD 06105",
            name: "Basics Monetary and Financial Economics",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "EFT05206",
            name: "Industrial Training",
            creditHours: 20,
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
            code: "EFD06201",
            name: "Fundamentals of Project Planning and Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EFD 06202",
            name: "Basic Econometrics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFD 06203",
            name: "Principles of Cost Accounting",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "EFD 06204",
            name: "Fundamentals of Development Economics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "EFD06205",
            name: "Principles of Entrepreneurship and Small Business Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EFT05206",
            name: "Industrial Training",
            creditHours: 20,
            class: "Core"
          }
        ]
      }
    ]
  },
  // Add Diploma in Economics and Finance (ODEF) for NTA Level 4
  {
    id: 21,
    name: "Certificate in Economics and Finance (CEF) - NTA Level 4",
    ntaLevel: 4,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "EFT 04101",
            name: "Elementary Microeconomics",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "EFT 04102",
            name: "Basic Book keeping and Accounts",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFT04103",
            name: "Elements of Business Mathematics and Statistics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFT04104",
            name: "Basic Computer Applications in Business",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFT 04105",
            name: "Basic Communication Skills",
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
            code: "EFT 04201",
            name: "Basic Macroeconomics",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "EFT 04202",
            name: "Elements of Banking",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "EFT 04203",
            name: "Elementary Microfinance",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "EFT 04204",
            name: "Basics of Development Economics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFT 04205",
            name: "Elements of Business",
            creditHours: 12,
            class: "Core"
          }
        ]
      }
    ]
  },
  // Add Diploma in Computer Science (ODCS) for NTA Level 5 & 6
  {
    id: 22,
    name: "Diploma in Computer Science (ODCS) - NTA Level 5 & 6",
    ntaLevel: 5, // Using 5 as the primary level, since the programme covers both 5 and 6
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ITT05101",
            name: "Computing Mathematics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITT05102",
            name: "Introduction to Computer Applications",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT05103",
            name: "Introduction to Electrical and Electronics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT05104",
            name: "Introduction to Management Principles",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITT05105",
            name: "Communication Skills and Office Practice",
            creditHours: 8,
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
            code: "ITT05206",
            name: "Introduction to Financial Planning and Budgeting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITT05207",
            name: "Computer Maintenance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT05208",
            name: "Operating Systems Concepts",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT05209",
            name: "Introduction to Computer Programming",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT05210",
            name: "Computer Networks",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITT 05211",
            name: "Industrial Training",
            creditHours: 20,
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
            code: "ITT06101",
            name: "Linear Algebra",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITT06102",
            name: "Web Programming",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT06106",
            name: "Principles of Software Development",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT06103",
            name: "Database Concepts",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT06107",
            name: "Principles of Network Design",
            creditHours: 10,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "ITT06209",
            name: "Server Operating System Administration",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ITT06213",
            name: "Introduction to Data Structure and Algorithm",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT06214",
            name: "Introduction to Object Oriented Programming",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT06215",
            name: "Mobile Application Development",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT06208",
            name: "Project Work",
            creditHours: 15,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  // Add Diploma in Computer Networking (ODCN) for NTA Level 4
  {
    id: 24,
    name: "Certificate in Computer Networking (CCN) - NTA Level 4",
    ntaLevel: 4,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "CNT 04101",
            name: "Fundamentals of Computer Systems",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "CNT 04102",
            name: "Basic Computer Applications",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "CNT 04103",
            name: "Elements of Business Mathematics and Statistics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CNT 04104",
            name: "Basic Communication Skills",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CNT 04105",
            name: "Essential of office Practice",
            creditHours: 8,
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
            code: "CNT04206",
            name: "Basic Internet Applications",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "CNT04207",
            name: "Fundamentals of Computer Networking",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "CNT04208",
            name: "Fundamentals of Programming",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CNT04209",
            name: "Fundamentals of Database",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CNT04210",
            name: "Customer Care",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  // Add Diploma in Multimedia (ODMM) for NTA Level 5 & 6
  {
    id: 25,
    name: "Diploma in Multimedia (ODMM) - NTA Level 5 & 6",
    ntaLevel: 5, // Using 5 as the primary level, since the programme covers both 5 and 6
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "MMT 05101",
            name: "Principles of Multimedia",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "MMT05102",
            name: "Basic principles of Computer Applications",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMT 05103",
            name: "Principles of Digital Imaging",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MMT 05104",
            name: "Basic Principles of Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "MMT 05105",
            name: "Communication Skills and Office Practice",
            creditHours: 8,
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
            code: "MMT 05201",
            name: "Basic Principles of Financial Planning and Budgeting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "MMT 05202",
            name: "Graphic Design",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMT 05203",
            name: "Operating Systems Concepts",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MMT 05204",
            name: "2D Animation",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MMT 05205",
            name: "Typography",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "MMT05206",
            name: "Industrial Training",
            creditHours: 20,
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
            code: "MMD 06101",
            name: "Principles of 3D Animation",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "MMD06102",
            name: "Web Design",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMD06103",
            name: "Principles of Photography",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "MMD06104",
            name: "Database Concepts",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMD06105",
            name: "Audio Visual Production",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "MMT05206",
            name: "Industrial Training",
            creditHours: 20,
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
            code: "MMD06201",
            name: "Desktop Publishing",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "MMD06202",
            name: "Social Networking and Publishing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMD 06203",
            name: "Computer Networks",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMD 06204",
            name: "Mobile Application Development",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MMD06205",
            name: "Project Work",
            creditHours: 15,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  // Add Ordinary Diploma in Information Technology (ODIT) for NTA Level 5 & 6
  {
    id: 27,
    name: "Ordinary Diploma in Information Technology (ODIT) - NTA Level 5 & 6",
    ntaLevel: 5, // Using 5 as the primary level, since the programme covers both 5 and 6
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ITT05101",
            name: "Computing Mathematics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITT05102",
            name: "Introduction to Computer Applications",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT05103",
            name: "Introduction to Electrical and Electronics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT05104",
            name: "Introduction to Management Principles",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITT05105",
            name: "Communication Skills and Office Practice",
            creditHours: 8,
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
            code: "ITT05206",
            name: "Introduction to Financial Planning and Budgeting",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITT05207",
            name: "Computer Maintenance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT05208",
            name: "Operating Systems Concepts",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT05209",
            name: "Introduction to Computer Programming",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT05210",
            name: "Computer Networks",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ITT 05211",
            name: "Industrial Training",
            creditHours: 20,
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
            code: "ITT06101",
            name: "Linear Algebra",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITT06102",
            name: "Web Progeamming",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT06103",
            name: "Database Concepts",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT06104",
            name: "Information System Analysis",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT06105",
            name: "Desktop Publishing",
            creditHours: 12,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "ITT06208",
            name: "Project Work",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ITT06209",
            name: "Server Operating System Administration",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT06210",
            name: "Principles of IS Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT06211",
            name: "ICT for Development",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITT06212",
            name: "Entrepreneurship and Innovation",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  // Add Ordinary Diploma in Information Technology (ODIT) for NTA Level 4
  {
    id: 28,
    name: "Certificate in Information Technology (CIT) - NTA Level 4",
    ntaLevel: 4,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ITT04103",
            name: "Elements of Business Mathematics and Statistics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ITT04105",
            name: "Basic Communication Skills",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ITT 04102",
            name: "Basic Computer Applications",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT 04101",
            name: "Elements of Computer Systems",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT 04104",
            name: "Basics Theories of computer electronics",
            creditHours: 12,
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
            code: "ITT04206",
            name: "Elementary Computer Networking",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ITT04207",
            name: "Basic Computer Troubleshooting",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITT04208",
            name: "Essentials of Office Practice",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "ITT04209",
            name: "Basic Internet Applications",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ITT04210",
            name: "Customer Care",
            creditHours: 11,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  // Add Diploma in Human Resource Management (ODHRM) for NTA Level 4
  {
    id: 31,
    name: "Certificate in Human Resource Management (CHRM) - NTA Level 4",
    ntaLevel: 4,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "HRT 04102",
            name: "Basic of Computer Application in Business",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "HRT 04103",
            name: "Basic of Communication Skills",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 04104",
            name: "Elements of  Employement Law",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "HRT 04105",
            name: "Essentials of office practice",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRT 04101",
            name: "Basic of Human Resource Management",
            creditHours: 15,
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
            code: "HRT 04206",
            name: "Elements of Entrepreneurship",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRT 04207",
            name: "Basic of Industrial Relation",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "HRT 04208",
            name: "Basic of Training and Development",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "HRT 04209",
            name: "Basic of Management Practice",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 04210",
            name: "Element of Book-keeping",
            creditHours: 10,
            class: "Core"
          }
        ]
      }
    ]
  },
  // Add Diploma in Human Resource Management (ODHRM) for NTA Level 5 & 6
  {
    id: 32,
    name: "Diploma in Human Resource Management (ODHRM) - NTA Level 5 & 6",
    ntaLevel: 5, // Using 5 as the primary level, since the programme covers both 5 and 6
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "HRT 05101",
            name: "Human Resource Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRT 05102",
            name: "Recruitment and Selection",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRT 05103",
            name: "Workplace Health and Safety",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRT 05104",
            name: "Information Communication Technology",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 05105",
            name: "Elements and Functions of Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 05106",
            name: "Administrative Law",
            creditHours: 10,
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
            code: "HRT 05207",
            name: "Employee Reward Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRT 05208",
            name: "Cost accounting Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 05209",
            name: "Element of Organizational Behaviour",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRT 05210",
            name: "Communication Skills and office Practice",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 05211",
            name: "Field Practical",
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
            code: "HRT 06101",
            name: "Human Resource Planning and Appraisal",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "HRT06102",
            name: "Sales Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 06103",
            name: "Job design and Analysis",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "HRT 06104",
            name: "Leadership Theories and Practice",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "HRT 06105",
            name: "Training and Development",
            creditHours: 15,
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
            code: "HRT 06206",
            name: "International Human Resource Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "HRT 06207",
            name: "Business Ethics and Governance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRT 06208",
            name: "Labor Law and Industrial Relations",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRT 06209",
            name: "Entrepreneurship",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRT 06210",
            name: "Presentation Skills",
            creditHours: 10,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "Bachelor Degree in Business Management (BBM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "BMU 07105",
            name: "Management Theory and Practice",
            creditHours: 14,
            class: "Fundamental"
          },
          {
            code: "BMU 07104",
            name: "Introduction to Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BMU 07101",
            name: "Business Computer Applications",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07102",
            name: "Business mathematics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BMU 07103",
            name: "Business Communication",
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
            code: "BMU 07213",
            name: "Marketing Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "BMU 07208",
            name: "Business Statistics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BMU 07211",
            name: "Business Law",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07212",
            name: "Financial Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BMU 07210",
            name: "Economics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BMU 07209",
            name: "Development Perspectives",
            creditHours: 10,
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
            code: "BMU 07319",
            name: "Consumer Behaviour",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "BMU 07320",
            name: "Marketing Research",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07316",
            name: "Research Methodology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07317",
            name: "Supply Chain Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07318",
            name: "Management Information System",
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
            code: "BMU 07428",
            name: "Taxation Theory and practice",
            creditHours: 14,
            class: "Fundamental"
          },
          {
            code: "BMU 07407",
            name: "Operations Research",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07425",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BMU 07427",
            name: "Accounting for managers",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "BMU 07426",
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
            code: "BMU 08105",
            name: "Consultancy and Report writing skills",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "BMU 08102",
            name: "Human Resources Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 08103",
            name: "Change management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BMU 08101",
            name: "Organizational Behavior",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "BMU 08104",
            name: "Business Ethics",
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
            code: "BMU 08213",
            name: "International marketing",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BMU 08209",
            name: "Production and Operations Management",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "BMU 08210",
            name: "International procurement",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BMU 08211",
            name: "Leadership and Governance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 08212",
            name: "Strategic Management",
            creditHours: 12,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Bachelor Degree in Procurement and Logistics Management (BPLM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "BMU 07101",
            name: "Business Computer Application",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07102",
            name: "Business Mathematics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BMU 07103",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07104",
            name: "Introductory Accounting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07106",
            name: "Physical Distribution Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07107",
            name: "Procurement Management",
            creditHours: 12,
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
            code: "BMU 07208",
            name: "Business Statistics",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "BMU 07209",
            name: "Development perspectives",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BMU 07210",
            name: "Economics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "BMU 07211",
            name: "Business Laws",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "BMU 07212",
            name: "Financial Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BMU 07214",
            name: "Inventory management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07215",
            name: "Warehouse Management",
            creditHours: 12,
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
            code: "BMU 07316",
            name: "Research methodology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07317",
            name: "Supply Chain Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07318",
            name: "Management Information system",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BMU 07321",
            name: "Cost Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BMU 07322",
            name: "Fundamentals of Marketing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BMU 07323",
            name: "Public Procurement",
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
            code: "BMU 07424",
            name: "Operations Research",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "BMU 07425",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07426",
            name: "Industrial practical Training",
            creditHours: 20,
            class: "Fundamental"
          },
          {
            code: "BMU 07429",
            name: "Public Procurement II",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 07430",
            name: "Business Ethics and Governance",
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
            code: "BMU 08107",
            name: "Procurement Contracts Management",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "BMU 08108",
            name: "International Logistics and Transport",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "BMU 08106",
            name: "Negotiation Skills",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BMU 08102",
            name: "Human Resource Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BMU 08101",
            name: "Organizational Behavior",
            creditHours: 13,
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
            code: "BMU 08217",
            name: "Procurement and Supplies Audit",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "BMU 08216",
            name: "International Procurement",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BMU 08214",
            name: "Strategic Procurement and Supply Chain Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BMU 08215",
            name: "Fundamentals of e-procurement",
            creditHours: 10,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Bachelor Degree in Economics and Finance (BEF)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "EFU 07101",
            name: "Microeconomics Principles",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 07102",
            name: "Business Mathematics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EFU 07103",
            name: "Accounting for Finance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFU 07104",
            name: "Information and Communication Technology for Business",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EFU 07105",
            name: "Development Perspectives",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "EFU 07106",
            name: "Communication Skills for Managers",
            creditHours: 8,
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
            code: "EFU 07207",
            name: "Macroeconomics Principles",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "EFU 07208",
            name: "Mathematical Techniques for Economists",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFU 07209",
            name: "Principles of Banking",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFU 07210",
            name: "Business Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EFU 07211",
            name: "Business Statistical Methods",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 07212",
            name: "Financial and Monetary Economics",
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
            code: "EFU 07313",
            name: "Intermediate Microeconomics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 07314",
            name: "Financial Statement Analysis",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFU 07315",
            name: "Financial Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "EFU 07316",
            name: "Management Information System",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "EFU 07317",
            name: "Portfolio and Investment Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 07318",
            name: "Research Methodology",
            creditHours: 9,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "EFU 07419",
            name: "Intermediate Macroeconomics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 07420",
            name: "Econometrics Principles",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFU 07421",
            name: "Development Economics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFU 07422",
            name: "Financial Markets and Institutions",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "EFU 07423",
            name: "Operations Research",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "EFU 07424",
            name: "Entrepreneurship and Innovation in Projects",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "EFU 07425",
            name: "Industrial Practical Training",
            creditHours: 20,
            class: "Fundamental"
          }
        ]
      },
      // Semester V
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          {
            code: "EFU 08101",
            name: "Industrial Economics",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "EFU 08102",
            name: "International Finance",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "EFU 08103",
            name: "Financial Programming and Forecasting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "EFU 08104",
            name: "Finance and Security Analysis",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EFU 08105",
            name: "Public Economics",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "EFU 08106",
            name: "Business Law and Ethics",
            creditHours: 8,
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
            code: "EFU 08207",
            name: "Natural Resources Economics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 08208",
            name: "Project Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "EFU 08209",
            name: "Intermediate Econometrics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "EFU 08210",
            name: "International Economics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "EFU 08211",
            name: "Economic Policy and Planning",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "EFU 08212",
            name: "Strategic Management",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "Bachelor of Library and Information Studies (BLIS)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "LIU 07101",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "LIU 07102",
            name: "Business Computer Application",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU 07103",
            name: "Information Literacy",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "LIU 07104",
            name: "Database Systems",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU 07105",
            name: "Fundamentals of Library and Information Studies",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "LIU 07106",
            name: "Information and Society",
            creditHours: 8,
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
            code: "LIU 07207",
            name: "Computer Networking",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "LIU 07208",
            name: "Development Perspectives",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LIU 07209",
            name: "Graphics Design",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU 07210",
            name: "Information Resources and Services",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "LIU 07211",
            name: "Principles of Knowledge Organization",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "LIU 07212",
            name: "Library Operations",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LIU 07213",
            name: "Library Automation",
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
            code: "LIU07314",
            name: "Information and Communication Theory",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "LIU07315",
            name: "Collection and Development Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LIU07316",
            name: "Management Information Systems",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "LIU07317",
            name: "Research Methodology",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "LIU07318",
            name: "Cataloguing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU07319",
            name: "Web Design",
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
            code: "LIU07420",
            name: "Entrepreneurship",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "LIU07421",
            name: "Records Security and Disaster Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LIU07422",
            name: "Classification",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU07423",
            name: "Systems Analysis and Design",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LIU07424",
            name: "Electronic Records Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LIU07425",
            name: "Marketing of Library and Information Services",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "LIU07426",
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
            code: "LIU08101",
            name: "Library Project Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "LIU08102",
            name: "Management of Libraries and Information Centres",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "LIU08103",
            name: "Legal and Professional Ethics",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "LIU08104",
            name: "Data Mining",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "LIU08105",
            name: "Network Management and Administration",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU08106",
            name: "Multimedia Librarianship",
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
            code: "LIU 08201",
            name: "Information User Studies",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "LIU 08202",
            name: "Mobile Computing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU 08203",
            name: "Computer Security",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "LIU 08204",
            name: "Knowledge Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "LIU 08205",
            name: "Library Individual Project",
            creditHours: 20,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 15,
    name: "Bachelor Degree in Cyber Security (BCYSE)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "CYU 07101",
            name: "Communication and Technical Writing",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CYU 07102",
            name: "Discrete Mathematics",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CYU 07103",
            name: "Computer System Architecture",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CYU 07104",
            name: "Introduction to Cyber security",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CYU 07105",
            name: "Database system",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CYU 07106",
            name: "Foundations of Intelligence",
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
            code: "CYU 07207",
            name: "Probability and Statistics",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CYU 07208",
            name: "Cyber laws",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "CYU 07209",
            name: "Development Studies",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CYU 07210",
            name: "Programming Fundamentals",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CYU 07211",
            name: "Operating systems concepts",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "CYU 07212",
            name: "Software design",
            creditHours: 12,
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
            code: "CYU 07313",
            name: "Foundations of mathematical analysis",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CYU 07314",
            name: "Routing and switching",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CYU 07315",
            name: "Communication networks",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CYU 07316",
            name: "Web Technologies",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CYU 07317",
            name: "Security strategies in windows platform",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "CYU 07318",
            name: "Research skills for IT professionals",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "CYU 07419",
            name: "Security strategies in UNIX platform",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "CYU 07420",
            name: "Programming in C++",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CYU 07421",
            name: "Network security",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "CYU 07422",
            name: "Java Programming",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CYU 07423",
            name: "Ethical Hacking",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "CYU 07424",
            name: "Cyberwarfare",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CYU 07425",
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
            code: "CYU 08101",
            name: "IT Project Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "CYU 08102",
            name: "Vulnerability Analysis",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CYU 08103",
            name: "Network Management and Administration",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "CYU 08104",
            name: "Data Structure and Algorithms",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CYU 08105",
            name: "Wireless Networking",
            creditHours: 7,
            class: "Fundamental"
          },
          {
            code: "CYU 08106",
            name: "Introduction to Social Psychology",
            creditHours: 6,
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
            code: "CYU 08207",
            name: "Social and Ethical Issues in Computing",
            creditHours: 7,
            class: "Fundamental"
          },
          {
            code: "CYU 08208",
            name: "Individual project",
            creditHours: 20,
            class: "Core"
          },
          {
            code: "CYU 08209",
            name: "Information Systems Security and Auditing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CYU 08210",
            name: "Digital Forensics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CYU 08211",
            name: "Cryptology and Coding Theory",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "CYU 08212",
            name: "Database Security",
            creditHours: 9,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "Bachelor of Credit Management (BCM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "CMU07101",
            name: "Principles of Accounting",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07102",
            name: "Fundamentals of Credit Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07103",
            name: "Entrepreneurship Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07104",
            name: "Business Statistics",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "CMU07105",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CMU07106",
            name: "Computer Applications",
            creditHours: 8,
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
            code: "CMU07207",
            name: "Commercial Credit Law",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07208",
            name: "Principles of Credit Control",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07209",
            name: "Credit Risk Assessment",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07210",
            name: "Customer Care Services",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07211",
            name: "Principles of Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "CMU07212",
            name: "Money and Banking",
            creditHours: 12,
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
            code: "CMU07313",
            name: "Human Resource Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CMU07314",
            name: "Credit Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07315",
            name: "Export Credit Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CMU07316",
            name: "Financial Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "CMU07317",
            name: "Research Methodology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CMU07318",
            name: "Management Information Systems",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "CMU07419",
            name: "Sales Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "CMU07420",
            name: "Credit Portfolio Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU07421",
            name: "Field Practical Training",
            creditHours: 20,
            class: "Core"
          },
          {
            code: "CMU07422",
            name: "Financial Analysis and Credit Scoring",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CMU07423",
            name: "Operations Research",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "CMU07424",
            name: "Economics",
            creditHours: 10,
            class: "Fundamental"
          }
        ]
      },
      // Semester V
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          {
            code: "CMU08125",
            name: "Trade Credit Insurance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU08126",
            name: "Business & Company Law",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "CMU08127",
            name: "International Trade & Finance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "CMU08128",
            name: "Credit Risk Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU08129",
            name: "Consumer Credit Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU08130",
            name: "Risk Management",
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
            code: "CMU08231",
            name: "Banking Law & Practice",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "CMU08232",
            name: "Credit Management in the Financial Sector",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU08233",
            name: "Credit Services",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU08234",
            name: "Corporate Lending",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "CMU08235",
            name: "Strategic Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "CMU08236",
            name: "Practice of Credit Management",
            creditHours: 14,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 17,
    name: "Bachelor Degree in Marketing and Public Relations (BMPR)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "MPU 07101",
            name: "Public relations writing",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "MPU 07102",
            name: "Business Mathematics",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "MPU 07103",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MPU 07104",
            name: "Management Theory and Practice",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "MPU 07105",
            name: "Business Computer Application",
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
            code: "MPU 07206",
            name: "Event and Campaign Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "MPU 07207",
            name: "Financial Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "MPU 07208",
            name: "Development Perspective",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "MPU 07209",
            name: "Marketing Management",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "MPU 07210",
            name: "Business and Media Law",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MPU 07211",
            name: "Customer Relationship Management",
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
            code: "MPU 07312",
            name: "Research Methodology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MPU 07313",
            name: "Management Information System",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MPU 07314",
            name: "Marketing Research",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "MPU 07315",
            name: "Consumer Behavior",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "MPU 07316",
            name: "Public Relations Management",
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
            code: "MPU 07417",
            name: "Public Relations and Media",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "MPU 07418",
            name: "Marketing Distribution System",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "MPU 07419",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MPU 07420",
            name: "Accounting for Managers",
            creditHours: 14,
            class: "Fundamental"
          },
          {
            code: "MPU 07421",
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
            code: "MPU 08101",
            name: "Consultancy and Reporting skills",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "MPU 08102",
            name: "Strategic Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MPU 08103",
            name: "Sales and Retail management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MPU 08104",
            name: "Marketing and Service",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "MPU 08105",
            name: "Strategic Public Relation",
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
            code: "MPU 08206",
            name: "Corporate Public Relation",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MPU 08207",
            name: "Brand Management",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "MPU 08208",
            name: "Strategic Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "MPU 08209",
            name: "Business Planning and Development",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "MPU 08210",
            name: "International Marketing",
            creditHours: 12,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 18,
    name: "Bachelor Degree in Economics and Taxation (BET)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ETU 07104",
            name: "Business Computer Application",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ETU 07106",
            name: "Development Perspectives",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ETU 07103",
            name: "Business Mathematics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ETU 07105",
            name: "Business Communication",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ETU 07102",
            name: "Fundamentals of Microeconomics",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ETU 07101",
            name: "Fundamentals of Accounting",
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
            code: "ETU 07211",
            name: "Business Statistics",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ETU 07209",
            name: "Fundamentals of Macroeconomics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ETU 07210",
            name: "Development Economics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ETU 07207",
            name: "Introduction to taxation theory",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ETU 07212",
            name: "Business Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ETU 07208",
            name: "Financial Accounting",
            creditHours: 12,
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
            code: "ETU 07317",
            name: "Research Methodology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ETU 07318",
            name: "Management Information System",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ETU 07313",
            name: "Public Finance",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ETU 07314",
            name: "Introduction to Income Taxation",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 07315",
            name: "Financial Planning and Policy",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ETU 07316",
            name: "Economic Planning and policy",
            creditHours: 11,
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
            code: "ETU 07423",
            name: "Entrepreneurship",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ETU 07424",
            name: "Operations Research",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ETU 07422",
            name: "Principles of Econometrics",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ETU 07419",
            name: "Advanced Income Taxation",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 07420",
            name: "Economics of Taxation",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ETU 07421",
            name: "Indirect Taxation",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "ETU 07425",
            name: "Industrial Practical Training",
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
            code: "ETU 08100",
            name: "International Taxation",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "ETU 08102",
            name: "Taxation Policy and Theory",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 08103",
            name: "Mathematical techniques for Economists",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 08104",
            name: "Intermediate Microeconomics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 08105",
            name: "Business Law and Ethics",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ETU 07421",
            name: "Indirect Taxation",
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
            code: "ETU 08206",
            name: "Advanced taxation",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "ETU 08207",
            name: "Tax Administration Laws",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 08208",
            name: "Intermediate Econometrics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 08209",
            name: "International Economics",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ETU 08210",
            name: "Intermediate Macroeconomics",
            creditHours: 12,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 19,
    name: "Bachelor Degree in Insurance and Risk Management with Apprenticeship (BIRM Appr)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "AFU 07101",
            name: "Principles of Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "GSU 07101",
            name: "Business Mathematics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "GSU 07102",
            name: "Business Law",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "GSU 07103",
            name: "Development Perspectives",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "IRU 07101",
            name: "General insurance Business",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRU 07102",
            name: "Principles of Risk Management",
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
            code: "BMU 07210",
            name: "Principles of Economics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "GSU 07204",
            name: "Business Computer Application",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "GSU 07205",
            name: "Business Communication",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRU 07203",
            name: "Enterprise Risk Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRU 07204",
            name: "Principles of Bancassurance",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "IRU 07205",
            name: "Customer Service and Marketing Insurance Product",
            creditHours: 10,
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
            code: "IRU 07306",
            name: "Insurance law and regulations",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "IRU 07307",
            name: "Motor Insurance Practice",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "IRU 07308",
            name: "Insurance Underwriting practice",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "IRU 07309",
            name: "Healthcare Insurance Practice",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRU 07310",
            name: "Insurance Intermediary Practice",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "IRU 07311",
            name: "Bancassurance Practice",
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
            code: "GSU 07405",
            name: "Principles of Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "GSU 07406",
            name: "Research Methodology",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "IRU 07412",
            name: "Risk Financing",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRU 07413",
            name: "Engineering Insurance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "IRU 07414",
            name: "Life Assurance and Critical Illness",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "IRU 07415",
            name: "Liability Insurance",
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
            code: "IRU 08501",
            name: "Claims Management Practice",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "IRU 08502",
            name: "Reinsurance Practice",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "IRU 08503",
            name: "Fundamentals of Loss Assessment and Adjustment",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "IRU 08504",
            name: "Agriculture Insurance Practice",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRU 08505",
            name: "Microinsurance Practice",
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
            code: "IRU 08606",
            name: "Financial Planning and Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BMU 08229",
            name: "Strategic Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "IRU 08607",
            name: "Oil and Gas Insurance",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "GSU 08101",
            name: "Entrepreneurship",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "IRU 08608",
            name: "Marine Insurance Business",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "IRU 08609",
            name: "Project Risk Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "GSU 08102",
            name: "Human Resource Management",
            creditHours: 9,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 20,
    name: "Bachelor Degree in Tourism and Hospitality Management with Apprenticeship (BTHA)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "THU 07101",
            name: "Fundamentals Tourism",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "THU 07102",
            name: "Fundamentals of Hospitality Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "THU 07103",
            name: "Fundamentals of English Grammar and Structure",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "THU 07104",
            name: "Information and Communication Technology",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 07105",
            name: "Sustainable Tourism",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "THU 07106",
            name: "Tourism Geography",
            creditHours: 6,
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
            code: "THU 07207",
            name: "Business Communication Skills",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "THU 07208",
            name: "Food and beverage service management",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "THU 07209",
            name: "Food Production",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "THU 07210",
            name: "Tour Management",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "THU 07211",
            name: "Tourism and Hospitality Safety and Security",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "THU 07212",
            name: "Menu planning and Costing",
            creditHours: 6,
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
            code: "THU 07313",
            name: "Entrepreneurship and product development",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "THU 07314",
            name: "Contemporary Issues",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "THU 07315",
            name: "Customer Care and Cross Cultural Issues",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "THU 07316",
            name: "Business Mathematic",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 07317",
            name: "Tourism and Hospitality Economics",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 07318",
            name: "Behavioral Studies for Tourism and Hospitality Management",
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
            code: "THU 07419",
            name: "Computer Application for tourism and hospitality industry",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "THU 07420",
            name: "Tourism and Hospitality Marketing",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 07421",
            name: "Accommodation Management",
            creditHours: 14,
            class: "Core"
          },
          {
            code: "THU 07422",
            name: "Managing Travel Business",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "THU 07423",
            name: "Event Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "THU 07424",
            name: "Tourism and Hospitality Operational Management",
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
            code: "THU 08101",
            name: "Tourism and Hospitality Revenue Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "THU 08102",
            name: "Product and Service Quality Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 08103",
            name: "Applied Research",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "THU 08104",
            name: "Tourism and Hospitality Policy and Planning",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "THU 08105",
            name: "Tourism and Hospitality law",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "THU 08106",
            name: "Fundamentals of wildlife tourism",
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
            code: "THU 08207",
            name: "Tourism and Hospitality Facility Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "THU 08208",
            name: "Project and Business Management",
            creditHours: 18,
            class: "Core"
          },
          {
            code: "THU 08209",
            name: "Human Resources Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "THU 08210",
            name: "Tourism and hospitality Strategic Leadership",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 08211",
            name: "Tourism Destination Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "THU 08212",
            name: "Fundamentals of Recreation and Leisure",
            creditHours: 6,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 21,
    name: "Bachelor Degree in Banking with Apprenticeship (BB Appr)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "BBU 07101",
            name: "Principles of Banking",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BBU 07102",
            name: "Principles of Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BBU 07103",
            name: "Principles of Micro-Economics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BBU 07104",
            name: "Business Mathematics and Statistics",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "BBU 07105",
            name: "Business Communication",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "BBU 07106",
            name: "Computer and IT for Business Solution",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BBU 07107",
            name: "Business Law",
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
            code: "BBU 07208",
            name: "Financial Accounting",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BBU 07209",
            name: "Banking Law",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "BBU 07210",
            name: "Code of Ethics for Bankers",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BBU 07211",
            name: "Banking Operations",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BBU 07212",
            name: "Digital Banking",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BBU 07213",
            name: "Frauds and Forgeries Control",
            creditHours: 11,
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
            code: "BBU 07314",
            name: "Bank Records Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "BBU 07315",
            name: "Assets and Liability Management in banks",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "BBU 07316",
            name: "Customer Experience",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BBU 07317",
            name: "Credit Analysis and Lending Practices",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "BBU 07318",
            name: "International Banking and Trade Finance",
            creditHours: 11,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "BBU 07419",
            name: "Management Information System",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BBU 07420",
            name: "Entrepreneurship",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BBU 07421",
            name: "Corporate Finance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BBU 07422",
            name: "Taxation policy, structure and Administration",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "BBU 07423",
            name: "Research and Marketing",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "BBU 07424",
            name: "Islamic Banking",
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
            code: "BBU 08501",
            name: "Risk Management in Banking",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BBU 08502",
            name: "Cyber Security in Banking",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BBU 08503",
            name: "Security Analysis and Portfolio Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "BBU 08504",
            name: "Microfinance Practices",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "BBU 08505",
            name: "Bancassurance",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "BBU 08506",
            name: "Financial Markets and Instruments",
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
            code: "BBU 08607",
            name: "Financial Institutions Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BBU 08608",
            name: "Strategic Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BBU 08609",
            name: "Information System Audit",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "BBU 08610",
            name: "Central Banking and Monetary Policy",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "BBU 08611",
            name: "Financial Modelling",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "BBU 08612",
            name: "Corporate Governance Aspects in Banking",
            creditHours: 12,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 22,
    name: "Bachelor Degree in Human Resource Management (BHRM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "HRU 07102",
            name: "Development studies",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "HRU 07101",
            name: "Human Resource Management",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "HRU 07103",
            name: "Communication Skills and Report writing",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "HRU 07104",
            name: "Principles and Practice of Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07105",
            name: "Administrative Law",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRU07106",
            name: "Business Information System",
            creditHours: 12,
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
            code: "HRU 07207",
            name: "Local Government Administration",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRU 07208",
            name: "Public Administration",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07209",
            name: "Financial Accounting",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "HRU 07210",
            name: "Principles of Economics",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRU 07211",
            name: "Business Mathematics and Statistics",
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
            code: "HRU 07312",
            name: "Public Service Delivery",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRU 07313",
            name: "Change and Organizational Development",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07314",
            name: "Strategic Human Resource Management",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "HRU 07315",
            name: "Industrial Relation",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07316",
            name: "Financial Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07317",
            name: "Organization Behaviour",
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
            code: "HRU 07418",
            name: "Labour law",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "HRU 07419",
            name: "Human Resource planning",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "HRU 07420",
            name: "Office Practice and Records Management",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRU 07421",
            name: "Recruitment and Selection",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07422",
            name: "Research Methodology",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 07423",
            name: "Field Report",
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
            code: "HRU 08101",
            name: "Workforce Training and Development",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "HRU 08102",
            name: "Human Resource Performance Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "HRU 08103",
            name: "Human Resource Information System",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "HRU 08104",
            name: "Business Entrepreneurship skills",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 08105",
            name: "Human Resource Consultancy",
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
            code: "HRU 08206",
            name: "Project Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "HRU 08207",
            name: "Public Policy",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "HRU 08208",
            name: "Compensation and Benefits Management",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "HRU 08209",
            name: "Human Resource Auditing",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "HRU 08210",
            name: "Workplace Health and safety management",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "HRU 08211",
            name: "International Human Resource Management",
            creditHours: 10,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 23,
    name: "Bachelor Degree in Strategic and Security Studies (BSSS)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "SSU 07101",
            name: "Applied Mathematics",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "SSU 07102",
            name: "Environment and sustainable development",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "SSU 07103",
            name: "Strategic Communication skills",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "SSU 07104",
            name: "Computer Application",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "SSU 07105",
            name: "National Security",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "SSU 07106",
            name: "Development Perspectives",
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
            code: "SSU 07201",
            name: "Statistics Approaches",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "SSU 07202",
            name: "Intelligence and Security",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "SSU 07203",
            name: "Introduction to peace and conflict studies",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "SSU 07204",
            name: "Geo-informatics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "SSU 07205",
            name: "IT Strategy in security",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "SSU 07206",
            name: "Patriotism and National Interest",
            creditHours: 11,
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
            code: "SSU 07301",
            name: "International Humanitarian and Law of armed conflicts",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "SSU 07302",
            name: "Research Methodology",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "SSU 07303",
            name: "International relations and diplomacy",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "SSU 07304",
            name: "Security ethics and leadership",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "SSU 07305",
            name: "Counter Insurgency and Internal Security",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "SSU 07306",
            name: "Cyber security",
            creditHours: 11,
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
            code: "SSU 07401",
            name: "Global peace and political science",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "SSU 07402",
            name: "Geo-Political Environment",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "SSU 07403",
            name: "International Terrorism",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "SSU 07404",
            name: "Operational Research",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "SSU 07405",
            name: "Disaster Management and Emergency planning",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "SSU 07406",
            name: "Practical Training",
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
            code: "SSU 08101",
            name: "Public Administration",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "SSU 08102",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "SSU 08103",
            name: "Strategic Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "SSU 08104",
            name: "Operations Planning and Project Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "SSU 08105",
            name: "Gender, Peace and Security",
            creditHours: 13,
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
            code: "SSU 08206",
            name: "International Relations and Diplomacy",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "SSU 08207",
            name: "Conflict and media(Media and Military Operation)",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "SSU 08208",
            name: "Civil Military Relations",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "SSU 08209",
            name: "Demobilization, Disarmament and Reintegration",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "SSU 08210",
            name: "Emerging Security Issues",
            creditHours: 13,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 24,
    name: "Bachelor Degree in Education with Computer Science (BECS)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ECU 07101",
            name: "Business Communication",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ECU 07102",
            name: "Business Computer Applications",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ECU 07103",
            name: "Computer Fundamentals",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ECU 07105",
            name: "Database systems",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ECU 07106",
            name: "Blended Learning",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ECU 07107",
            name: "Lifelong learning",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07108",
            name: "Foundation of education",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07109",
            name: "Psychology of education",
            creditHours: 6,
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
            code: "ECU 07210",
            name: "Computer Networking",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ECU 07211",
            name: "Development Studies",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ECU 07214",
            name: "Early Childhood Education(ECE)",
            creditHours: 6,
            class: "Fundamental"
          },
          {
            code: "ECU 07212",
            name: "Computer Graphics Design",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ECU 07213",
            name: "Principles of programming",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ECU 07215",
            name: "Technical methods in computer science",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07216",
            name: "Educational Media and Technology",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07217",
            name: "Teaching Practice",
            creditHours: 20,
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
            code: "ECU 07318",
            name: "Sociology of education",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07319",
            name: "Human growth and development",
            creditHours: 6,
            class: "Fundamental"
          },
          {
            code: "ECU 07320",
            name: "Research methodology",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ECU 07321",
            name: "Object oriented programme",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ECU 07322",
            name: "Web design",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ECU 07323",
            name: "Measurement and evaluation in education",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07324",
            name: "Curriculum development and Evaluation",
            creditHours: 6,
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
            code: "ECU 07425",
            name: "Information Security",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ECU 07426",
            name: "Internet Programming and applications",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "ECU 07427",
            name: "System analysis and design",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "ECU 07428",
            name: "Special and inclusive education",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07429",
            name: "Educational guidance and counseling",
            creditHours: 6,
            class: "Core"
          },
          {
            code: "ECU 07430",
            name: "Teaching Practice 2",
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
            code: "ECU 08101",
            name: "Open source software Development",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ECU 08102",
            name: "Network Management and Administration",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "ECU 08103",
            name: "Interactive Multimedia",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "ECU 08104",
            name: "Principles of Consultancy in Education",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ECU 08105",
            name: "Principles of Classroom management",
            creditHours: 9,
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
            code: "ECU 08206",
            name: "Educational Software Individual Project",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ECU 08207",
            name: "Professionalism and Ethical Issues in Education",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ECU 08208",
            name: "Educational Policy Analysis and Implementation",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ECU 08209",
            name: "Adult Education and Learning",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ECU 08210",
            name: "School Manangement",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ECU 08211",
            name: "Community Education and Development",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ECU 08212",
            name: "Industrial Training in Computer Science",
            creditHours: 20,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 25,
    name: "Bachelor Degree in Multimedia and Mass Communication (BMM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "MCU 07101",
            name: "Introduction to Communication Skills",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "MCU 07102",
            name: "Foundations of Computer Applications",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MCU 07103",
            name: "News Production",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "MCU 07104",
            name: "Introduction to Multimedia Writing",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "MCU 07105",
            name: "Principles of Broadcasting",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "MCU 07106",
            name: "Statistics",
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
            code: "MCU 07207",
            name: "Communication Theory",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "MCU 07208",
            name: "Development Perspectives",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MCU 07209",
            name: "Digital Audio & Video Production",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "MCU 07210",
            name: "Newsroom Practice",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "MCU 07211",
            name: "Introduction to Public Relations",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "MCU 07212",
            name: "Radio and TV Programming",
            creditHours: 12,
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
            code: "MCU 07313",
            name: "Media Law & Regulations",
            creditHours: 2,
            class: "Fundamental"
          },
          {
            code: "MCU 07314",
            name: "Research Methodology",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "MCU 07315",
            name: "Digital Photography",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "MCU 07316",
            name: "Critical Thinking",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "MCU 07317",
            name: "Social Media Publishing",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "MCU 07318",
            name: "Graphics and Web Design",
            creditHours: 11,
            class: "Fundamental"
          }
        ]
      },
      // Semester IV
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          {
            code: "MCU 07419",
            name: "Social and Ethical Issues in Media",
            creditHours: 2,
            class: "Fundamental"
          },
          {
            code: "MCU 07420",
            name: "Media Management & Organization",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "MCU 07421",
            name: "Entrepreneurship",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "MCU 07422",
            name: "International Journalism",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "MCU 07423",
            name: "Data Journalism",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "MCU 07424",
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
            code: "MCU 08101",
            name: "Digital Media",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "MCU 08102",
            name: "Principles of Copywriting",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "MCU 08103",
            name: "E-Commerce and Technology",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "MCU 08104",
            name: "Life Skills",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "MCU 08105",
            name: "Computer Security",
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
            code: "MCU 08201",
            name: "International Mass Communication",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MCU 08202",
            name: "Social Communication Skills",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "MCU 08203",
            name: "Social Psychology",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "MCU 08204",
            name: "Interactive Multimedia",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "MCU 08205",
            name: "Individual Project",
            creditHours: 20,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 26,
    name: "Bachelor Degree in Records and Information Management (BRIM)",
    ntaLevel: 7,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "RIU07101",
            name: "Communication Skills",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "RIU07102",
            name: "Computer Applications in Records Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU07103",
            name: "Accounting Principles",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU07104",
            name: "Database Management Systems",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "RIU07105",
            name: "Records Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "RIU07106",
            name: "Archives Administration",
            creditHours: 12,
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
            code: "RIU07201",
            name: "Principles of Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "RIU07202",
            name: "Development Perspectives",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "RIU07203",
            name: "Graphics Design",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU07204",
            name: "Records Management Systems",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "RIU07205",
            name: "Records Center Automation",
            creditHours: 12,
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
            code: "RIU07301",
            name: "Preservation and Conservation of Records",
            creditHours: 2,
            class: "Fundamental"
          },
          {
            code: "RIU07302",
            name: "Information management systems",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "RIU07303",
            name: "Research Methodology",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU07304",
            name: "Cataloguing and Classification",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "RIU07305",
            name: "Web Design",
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
            code: "RIU07401",
            name: "Entrepreneurship",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "RIU07402",
            name: "Disaster Management",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU07403",
            name: "Computer Networks",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "RIU07404",
            name: "System Analysis and Design",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "RIU07405",
            name: "Web Technology Management",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      },
      // Semester V
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          {
            code: "RIU08101",
            name: "Project Management",
            creditHours: 8,
            class: "Core"
          },
          {
            code: "RIU08102",
            name: "Computer Maintenance",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU08103",
            name: "Computer Programming in mobile application",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "RIU08104",
            name: "Records Retention and Disposal",
            creditHours: 10,
            class: "Fundamental"
          },
          {
            code: "RIU08105",
            name: "Quality Assurance and Control",
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
            code: "RIU08201",
            name: "Computer Maintenance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "RIU08202",
            name: "Human Resource Management",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "RIU08203",
            name: "Personnel Records Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "RIU08204",
            name: "Medical Records Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "RIU08205",
            name: "Legal Records Management",
            creditHours: 8,
            class: "Fundamental"
          },
          {
            code: "RIU08206",
            name: "Land Records Management",
            creditHours: 8,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 401,
    name: "Master of Business Administration (MBA)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "BAG 09101",
            name: "Marketing Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "BAG 09102",
            name: "Operation Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "BAG 09103",
            name: "Organization Behaviour and Human Resources and Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "BAG 09104",
            name: "Managarial Finance",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BAG 09105",
            name: "Strategic Management",
            creditHours: 15,
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
            code: "BAG 09201",
            name: "Business research methods",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "BAG 09202",
            name: "Entreprenuership and Innovation",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BAG 09203",
            name: "Managerial Economics",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "BAG 09204",
            name: "Corporate Law and Governance",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "BAG 09205",
            name: "Project Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "BAG 09301",
            name: "MBA Dissertation",
            creditHours: 9,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 402,
    name: "Master of Business Administration in Information Technology Management (MBA-ITM)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ITG 09101",
            name: "Operations Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ITG 09102",
            name: "Organization Behaviour and Human Resource Management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ITG 09103",
            name: "Managerial Finance",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ITG 09104",
            name: "Strategic Business Information Systems",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITG 09105",
            name: "Enterprise Resource Planning",
            creditHours: 15,
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
            code: "ITG 09206",
            name: "Business Research",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "ITG 09207",
            name: "Entrepreneurship and Innovation",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ITG 09208",
            name: "Cybercrimes and Computer Law",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITG 09209",
            name: "Information Systems Auditing",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ITG 09210",
            name: "Information Systems Development",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ITG 09211",
            name: "Dissertation",
            creditHours: 60,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 403,
    name: "Master of Business Administration in Leadership and Governance (MBA-LG)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "LGG09101",
            name: "Managing Innovation and Entrepreneurship",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "LGG09102",
            name: "Communication Skills for Leaders",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "LGG090103",
            name: "Human resource and Organisational Behaviour",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "LGG090104",
            name: "Finance for Leaders",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "LGG090105",
            name: "Strategic Management",
            creditHours: 15,
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
            code: "LGG090201",
            name: "Business research methods",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "LGG090202",
            name: "Leadership theories and good governance",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "LGG090203",
            name: "Negotiation and Decision making",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "LGG090204",
            name: "Corporate Laws",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "LGG09301",
            name: "MBA Dissertation",
            creditHours: 60,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 404,
    name: "Master of Business Administration in Procurement and Supplies Management (MBA-PSM)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "PSG09101",
            name: "Strategic Public Procument Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "PSG09102",
            name: "Operations Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PSG09103",
            name: "Organizational Behaviour & Human Resource Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "PSG09104",
            name: "Managerial Finance",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "PSG09105",
            name: "Marketing Management",
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
            code: "PSG09206",
            name: "Business Research Methods",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "PSG09207",
            name: "Entreprenuership and Innovation",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PSG09208",
            name: "Procurement Contract Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "PSG09209",
            name: "Supply Chain Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PSG09210",
            name: "Procurement and Supplies Audit",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PSG09211",
            name: "MBA-PSM Dissertation",
            creditHours: 60,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 405,
    name: "Master of Business Administration in Policy Development and Execution (MBA-PDE)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "PEG09101",
            name: "Policy Formulation and Evaluation",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PEG09102",
            name: "Trade Policy and Marketing Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PEG09103",
            name: "Human Resource and Change Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "PEG09104",
            name: "Public Finance and Finacial Analysis",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PEG09105",
            name: "Business Policy and Strategic Management",
            creditHours: 15,
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
            code: "PEG09201",
            name: "Research methodology",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "PEG09203",
            name: "Discipline and policy execution",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PEG09204",
            name: "Policy negotiation and conflict management",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "PEG09205",
            name: "Economics for development",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "PEG09301",
            name: "MBA-Dissertation",
            creditHours: 60,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 406,
    name: "Master Degree in Accountancy (MAF)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ACG09101",
            name: "Quantitative Techniques for Business",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACG09102",
            name: "Financial Reporting",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ACG09103",
            name: "Financial Management",
            creditHours: 16,
            class: "Core"
          },
          {
            code: "ACG09104",
            name: "Performance Management",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ACG09105",
            name: "Advanced Taxation",
            creditHours: 16,
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
            code: "ACG09206",
            name: "Research Methods for Business",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "ACG09207",
            name: "Advanced Financial Reporting",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ACG09208",
            name: "Multinational Finance Management",
            creditHours: 16,
            class: "Core"
          },
          {
            code: "ACG09209",
            name: "Auditing And Assurance Services",
            creditHours: 16,
            class: "Core"
          },
          {
            code: "ACG09210",
            name: "Corporate Governance",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "ACG09311",
            name: "MA - Dissertation",
            creditHours: 40,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 407,
    name: "Master of Science in Finance and Investment (MSc.FI)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "FIG09101",
            name: "Quantitative Techniques for Finance",
            creditHours: 10,
            class: "Core"
          },
          {
            code: "FIG09102",
            name: "Financial Management",
            creditHours: 13,
            class: "Core"
          },
          {
            code: "FIG09103",
            name: "Business Analysis and Valuation",
            creditHours: 12,
            class: "Core"
          },
          {
            code: "FIG09104",
            name: "Financial Markets and Institutions",
            creditHours: 13,
            class: "Fundamental"
          },
          {
            code: "FIG09105",
            name: "Financial Risk Management",
            creditHours: 13,
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
            code: "FIG09206",
            name: "Research Methods for Finance",
            creditHours: 2,
            class: "Fundamental"
          },
          {
            code: "FIG09207",
            name: "Institutional Investment",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "FIG09208",
            name: "Investment and Portfolio Management",
            creditHours: 11,
            class: "Core"
          },
          {
            code: "FIG09209",
            name: "Behavioural Finance",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "FIG09210",
            name: "Emerging Financial markets",
            creditHours: 11,
            class: "Fundamental"
          },
          {
            code: "FIG09211",
            name: "MSc-FI Dissertation",
            creditHours: 11,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 409,
    name: "Master of Science in Human Resource Management (MSc-HRM)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "HRG09101",
            name: "Organizational Behaviour and Human Resource Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "HRG09102",
            name: "Statistics and Decision Making",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "HRG09103",
            name: "Human Resource Information System",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRG09104",
            name: "Performance and Compensation Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "HRG09105",
            name: "Strategic Management",
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
            code: "HRG09206",
            name: "Human Resource Planning",
            creditHours: 2,
            class: "Fundamental"
          },
          {
            code: "HRG09207",
            name: "Labour Laws and Industrial Relations",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "HRG09208",
            name: "Human Resources Analytics",
            creditHours: 12,
            class: "Fundamental"
          },
          {
            code: "HRG09209",
            name: "Social Science Research Methods",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "HRG09210",
            name: "Accounting for Managers",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "HRG09211",
            name: "MSc.HRM Dissertation",
            creditHours: 15,
            class: "Core"
          }
        ]
      }
    ]
  },
  {
    id: 410,
    name: "Master Degree in Information Security (MIS)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "ISG09101",
            name: "Software Engineering",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ISG09102",
            name: "Advanced Computer Networks",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ISG09103",
            name: "Information and Coding Theory",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ISG09104",
            name: "Information Security and Cryptography",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ISG09105",
            name: "Research Methods",
            creditHours: 9,
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
            code: "ISG09202",
            name: "Ethical Hacking",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "ISG09203",
            name: "Biometrics",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "ISG09204",
            name: "Computer Forensics",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ISG09205",
            name: "Operation Management",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "ISG09206",
            name: "Dissertation",
            creditHours: 60,
            class: "Fundamental"
          }
        ]
      }
    ]
  },
  {
    id: 411,
    name: "Masters in Education Management (MEM)",
    ntaLevel: 9,
    semesters: [
      // Semester I
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          {
            code: "EMG09101",
            name: "Educational Leadership",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EMG09102",
            name: "Teaching and Learning Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "EMG09103",
            name: "E-Learning in Education Management",
            creditHours: 9,
            class: "Fundamental"
          },
          {
            code: "EMG09104",
            name: "Research Methodology in Education",
            creditHours: 15,
            class: "Core"
          },
          {
            code: "EMG09105",
            name: "Curriculum Development",
            creditHours: 15,
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
            code: "EMG09201",
            name: "Management of Educational Organization",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EMG09202",
            name: "Education Planning and Management",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "EMG09203",
            name: "Resource Management in Education",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "EMG09204",
            name: "Educational Policy and Practice",
            creditHours: 9,
            class: "Core"
          },
          {
            code: "EMG09205",
            name: "Legal Issues in Education",
            creditHours: 15,
            class: "Fundamental"
          },
          {
            code: "EMG09206",
            name: "Dissertation",
            creditHours: 60,
            class: "Core"
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

export const getProgramById = (id: number): Programme | undefined => {
  return programmes.find(programme => programme.id === id);
};

export const getProgrammesByLevel = (ntaLevel: number): Programme[] => {
  return programmes.filter(programme => programme.ntaLevel === ntaLevel);
};