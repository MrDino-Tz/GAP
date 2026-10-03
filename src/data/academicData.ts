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
  universityId: number;
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    id: 201,
    universityId: 1,
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
    id: 202,
    universityId: 1,
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
    id: 203,
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    id: 204,
    universityId: 1,
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
    id: 205,
    universityId: 1,
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
    id: 206,
    universityId: 1,
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
    id: 207,
    universityId: 1,
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
    universityId: 1,
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
    id: 208,
    universityId: 1,
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
    id: 209,
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
    universityId: 1,
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
  },
  {
    id: 1001,
    universityId: 2,
    name: "BSc Computer Science (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "MT 100", name: "Foundations of Analysis", creditHours: 12, class: "Core" },
          { code: "CS 151", name: "Computer Organization and Architecture I", creditHours: 12, class: "Core" },
          { code: "CS 174", name: "Programming in C", creditHours: 12, class: "Core" },
          { code: "IS 162", name: "Introduction to Information Systems", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "IS 158", name: "Computer Hardware and System Maintenance", creditHours: 8, class: "Core" },
          { code: "CS 173", name: "Business Computer Communication", creditHours: 8, class: "Core" },
          { code: "IS 143", name: "Discrete Structures", creditHours: 12, class: "Core" },
          { code: "IS 171", name: "Introduction to Computer Networks", creditHours: 8, class: "Core" },
          { code: "CS 175", name: "Programming in Java", creditHours: 12, class: "Core" },
          { code: "IS 181", name: "Web Programming", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CS 243", name: "Computer Network Design and Administration", creditHours: 12, class: "Core" },
          { code: "IS 243", name: "Practical Training I", creditHours: 8, class: "Core" },
          { code: "IS 238", name: "Mobile Application Development", creditHours: 12, class: "Core" },
          { code: "IS 274", name: "Object Oriented Analysis and Design", creditHours: 8, class: "Core" },
          { code: "IS 237", name: "Data Abstraction and Algorithms", creditHours: 12, class: "Core" },
          { code: "IS 264", name: "Principles of Database Systems", creditHours: 12, class: "Core" },
          { code: "IS 246", name: "Principles of Computer Graphics", creditHours: 8, class: "Core" },
          { code: "IS 236", name: "Structured Systems Analysis and Design", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CS 252", name: "Computer Organization and Architecture II", creditHours: 12, class: "Core" },
          { code: "MT 249", name: "Mathematical Logic and Formal Semantics", creditHours: 12, class: "Core" },
          { code: "CS 234", name: "Object Oriented Programming in Java", creditHours: 12, class: "Core" },
          { code: "IS 239", name: "Algorithms and Complexity", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "IS 344", name: "Human Computer Interaction", creditHours: 12, class: "Core" },
          { code: "IS 343", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "IS 367", name: "Management of Information Systems", creditHours: 8, class: "Core" },
          { code: "IS 371", name: "Systems Administration in Linux", creditHours: 12, class: "Core" },
          { code: "CS 334", name: "Principles of Operating Systems", creditHours: 12, class: "Core" },
          { code: "CS 335", name: "Software Engineering", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "IS 335", name: "Final Year Project", creditHours: 16, class: "Core" },
          { code: "IS 336", name: "Principles of Systems Security", creditHours: 8, class: "Core" },
          { code: "IS 337", name: "Mobile Computing", creditHours: 8, class: "Core" },
          { code: "IS 365", name: "Artificial Intelligence", creditHours: 8, class: "Core" }
        ]
      }
    ]
  },
  {
    id: 1002,
    universityId: 2,
    name: "BSc Business Information Technology (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CS 174", name: "Programming in C", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "ST 113", name: "Basic Statistics", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomic Analysis", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "CS 173", name: "Business Computer Communication", creditHours: 8, class: "Core" },
          { code: "ST 114", name: "Probability Theory I", creditHours: 12, class: "Core" },
          { code: "IS 171", name: "Introduction to Computer Networks", creditHours: 8, class: "Core" },
          { code: "IS 181", name: "Web Programming", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomic Analysis", creditHours: 12, class: "Core" },
          { code: "GM 100", name: "Principles and Practice of Management", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "IS 237", name: "Data Abstraction and Algorithms", creditHours: 12, class: "Core" },
          { code: "IS 264", name: "Principles of Database Systems", creditHours: 12, class: "Core" },
          { code: "IS 274", name: "Object-oriented Analysis and Design", creditHours: 8, class: "Core" },
          { code: "IS 243", name: "Practical Training I", creditHours: 8, class: "Core" },
          { code: "IS 238", name: "Mobile Application Development", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "ST 119", name: "Operations Research I", creditHours: 12, class: "Core" },
          { code: "CS 234", name: "Object-Oriented Programming in Java", creditHours: 12, class: "Core" },
          { code: "IS 284", name: "Business Process Management", creditHours: 8, class: "Core" },
          { code: "IS 285", name: "Programming in R", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CS 334", name: "Principles of Operating Systems", creditHours: 12, class: "Core" },
          { code: "CS 335", name: "Software Engineering", creditHours: 12, class: "Core" },
          { code: "IS 384", name: "Software Project Management", creditHours: 8, class: "Core" },
          { code: "IS 386", name: "Enterprise Systems", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "IS 369", name: "IT Audit and Controls", creditHours: 8, class: "Core" },
          { code: "MK 301", name: "Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "IS 385", name: "Business Intelligence", creditHours: 12, class: "Core" },
          { code: "IS 336", name: "Principles of Systems Security", creditHours: 8, class: "Core" },
          { code: "IS 335", name: "Final Year Project", creditHours: 16, class: "Core" }
        ]
      }
    ]
  },
  {
    id: 1003,
    universityId: 2,
    name: "Bachelor of Commerce in Accounting (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AC 100", name: "Principles of Accounting I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Micro-economics", creditHours: 12, class: "Core" },
          { code: "AC 103", name: "Public Finance and Taxation", creditHours: 12, class: "Core" },
          { code: "FN 103", name: "Principles of Finance", creditHours: 12, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AC 101", name: "Principles of Accounting II", creditHours: 12, class: "Core" },
          { code: "FN 106", name: "Financial Management", creditHours: 12, class: "Core" },
          { code: "AC 104", name: "Cost Accounting", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macro-economics", creditHours: 12, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AC 200", name: "Managerial Accounting", creditHours: 12, class: "Core" },
          { code: "AC 201", name: "Intermediate Accounting", creditHours: 12, class: "Core" },
          { code: "AC 203", name: "Accounting Systems and Data Analytics", creditHours: 12, class: "Core" },
          { code: "EC 219", name: "Econometrics I", creditHours: 12, class: "Core" },
          { code: "HR 200", name: "Organization Behaviour", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 205", name: "Auditing and Assurance", creditHours: 12, class: "Core" },
          { code: "AC 206", name: "Financial Reporting", creditHours: 12, class: "Core" },
          { code: "AC 207", name: "Income Taxation", creditHours: 12, class: "Core" },
          { code: "EC 229", name: "Econometrics II", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 300", name: "Strategic Management", creditHours: 12, class: "Core" },
          { code: "AC 301", name: "Indirect Taxes", creditHours: 12, class: "Core" },
          { code: "AC 302", name: "Corporate Governance and Ethics", creditHours: 12, class: "Core" },
          { code: "AC 333", name: "Accounting Industrial Placement", creditHours: 24, class: "Core" },
          { code: "FN 250", name: "Financial Literacy (Self-study)", creditHours: 0, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "AC 304", name: "Advanced Financial Accounting", creditHours: 12, class: "Core" },
          { code: "AC 305", name: "Advanced Auditing and Assurance Services", creditHours: 12, class: "Core" },
          { code: "AC 306", name: "Advanced Management and Cost Accounting", creditHours: 12, class: "Core" },
          { code: "MK 360", name: "Entrepreneurship and Innovation", creditHours: 12, class: "Core" },
          { code: "MK 324", name: "Management Consulting", creditHours: 12, class: "Core" }
        ]
      }
    ]
  },
  {
    id: 1004,
    universityId: 2,
    name: "BSc Mathematics and Statistics (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "MT 100", name: "Foundations of Analysis", creditHours: 12, class: "Core" },
          { code: "MT 127", name: "Linear Algebra 1", creditHours: 12, class: "Core" },
          { code: "ST 113", name: "Basic Statistics", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomics", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "MT 114", name: "Computer Programming", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "MT 135", name: "Ordinary Differential Equation I", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "MT 120", name: "Analysis I: Functions of Single Variable", creditHours: 12, class: "Core" },
          { code: "ST 114", name: "Probability Theory I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 200", name: "Analysis 2: Functions of Several Variables", creditHours: 12, class: "Core" },
          { code: "ST 210", name: "Probability Distributions I", creditHours: 12, class: "Core" },
          { code: "ST 218", name: "Applied Statistics I", creditHours: 12, class: "Core" },
          { code: "MT 225", name: "Partial Differential Equations", creditHours: 12, class: "Core" },
          { code: "ST 212", name: "Statistical Inference I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 278", name: "Linear Programming", creditHours: 12, class: "Core" },
          { code: "MT 274", name: "Numerical Analysis 1", creditHours: 12, class: "Core" },
          { code: "ST 211", name: "Probability Distributions II", creditHours: 12, class: "Core" },
          { code: "ST 219", name: "Applied Statistics II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "MT 357", name: "Abstract Algebra", creditHours: 12, class: "Core" },
          { code: "ST 310", name: "Statistical Inference II", creditHours: 12, class: "Core" },
          { code: "MT 340", name: "Analysis 4: Real Analysis", creditHours: 12, class: "Core" },
          { code: "MT 310", name: "Complex Analysis", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "ST 318", name: "Sampling Theory and Methodology", creditHours: 12, class: "Core" },
          { code: "ST 316", name: "Statistical Quality Control", creditHours: 12, class: "Core" },
          { code: "ST 321", name: "Regression Analysis", creditHours: 12, class: "Core" },
          { code: "MT 398", name: "Practical Training", creditHours: 8, class: "Core" },
          { code: "MT 389", name: "Project", creditHours: 8, class: "Core" },
          { code: "MT 360", name: "Functional Analysis", creditHours: 12, class: "Core" }
        ]
      }
    ]
  },
  {
    id: 1005,
    universityId: 2,
    name: "BSc Civil Engineering (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Computers Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "SC 101", name: "Civil Engineering Drawing I", creditHours: 10, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
          { code: "TR 111", name: "Engineering Surveying I", creditHours: 8, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "SC 102", name: "Civil Engineering Drawing II", creditHours: 10, class: "Core" },
          { code: "SC 112", name: "Construction Materials I", creditHours: 12, class: "Core" },
          { code: "SC 122", name: "Dynamics of Solids", creditHours: 8, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 8, class: "Core" },
          { code: "TR 112", name: "Engineering Surveying II", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus and Differential Equation for Non-Majors", creditHours: 12, class: "Core" },
          { code: "SC 104", name: "Fundamentals of Building Design", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "SC 211", name: "Civil Engineering Materials II", creditHours: 12, class: "Core" },
          { code: "SC 201", name: "Mechanics of Materials", creditHours: 8, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "TR 231", name: "Geology for Civil Engineers", creditHours: 8, class: "Core" },
          { code: "WR 211", name: "Fluid Mechanics for Civil Engineers", creditHours: 12, class: "Core" },
          { code: "SC 221", name: "Analysis of Statically Determinate Structures", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "TR 221", name: "Transportation System and Planning", creditHours: 12, class: "Core" },
          { code: "TR 232", name: "Soil Mechanics", creditHours: 12, class: "Core" },
          { code: "WR 212", name: "Open Channel Hydraulics", creditHours: 8, class: "Core" },
          { code: "WR 213", name: "Hydraulic Practicals", creditHours: 4, class: "Core" },
          { code: "WR 231", name: "Water Supply and Treatment", creditHours: 12, class: "Core" },
          { code: "SC 222", name: "Analysis of Statically Indeterminate Structures", creditHours: 12, class: "Core" },
          { code: "CE 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "SC 341", name: "Design of Reinforced Concrete Structures I", creditHours: 8, class: "Core" },
          { code: "TR 334", name: "Foundation Engineering I", creditHours: 8, class: "Core" },
          { code: "TR 331", name: "Highway Materials", creditHours: 12, class: "Core" },
          { code: "WR 321", name: "Engineering Hydrology", creditHours: 12, class: "Core" },
          { code: "TR 321", name: "Highway Route and Geometric Design", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "TR 335", name: "Foundation Engineering II", creditHours: 8, class: "Core" },
          { code: "SC 342", name: "Design of Reinforced Concrete Structures II", creditHours: 8, class: "Core" },
          { code: "SC 312", name: "Research Methodology for Civil Engineers", creditHours: 8, class: "Core" },
          { code: "TR 323", name: "Traffic Engineering and Management", creditHours: 12, class: "Core" },
          { code: "TR 324", name: "Pavement Design and Maintenance", creditHours: 12, class: "Core" },
          { code: "SC 411", name: "Design of Steel Structures", creditHours: 8, class: "Core" },
          { code: "SC 441", name: "Design of Masonry and Timber Structures", creditHours: 8, class: "Core" },
          { code: "CE 200", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "SC 401", name: "Construction Techniques and Site Organization", creditHours: 8, class: "Core" },
          { code: "WR 410", name: "Design of Hydraulic Structures and Machinery", creditHours: 8, class: "Core" },
          { code: "SC 431", name: "Engineering Economics and Planning Techniques", creditHours: 12, class: "Core" },
          { code: "CE 498", name: "Final Project I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 432", name: "Civil Engineering Procedures & Ethics", creditHours: 8, class: "Core" },
          { code: "WR 452", name: "Wastewater Treatment", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "CE 499", name: "Final Project II", creditHours: 12, class: "Core" },
          { code: "CE 300", name: "Practical Training III", creditHours: 8, class: "Core" }
        ]
      }
    ]
  },
  {
    id: 1006,
    universityId: 2,
    name: "Bachelor of Laws (LLB) (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "LW 100", name: "Constitutional Law I", creditHours: 12, class: "Core" },
          { code: "LW 101", name: "Law of Contract", creditHours: 12, class: "Core" },
          { code: "LW 102", name: "Criminal Law and Procedure I", creditHours: 12, class: "Core" },
          { code: "LW 103", name: "Legal Method I", creditHours: 12, class: "Core" },
          { code: "LW 108", name: "Communication Skills for Lawyers I", creditHours: 12, class: "Core" },
          { code: "IS 131", name: "Computer Skills", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "LW 104", name: "Constitutional Law II", creditHours: 12, class: "Core" },
          { code: "LW 105", name: "Law of Contract II", creditHours: 12, class: "Core" },
          { code: "LW 106", name: "Criminal Law and Procedure II", creditHours: 12, class: "Core" },
          { code: "LW 107", name: "Legal Method II", creditHours: 12, class: "Core" },
          { code: "LW 109", name: "Communication Skills for Lawyers II", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "LW 200", name: "Administrative Law I", creditHours: 12, class: "Core" },
          { code: "LW 201", name: "Public International Law", creditHours: 12, class: "Core" },
          { code: "LW 202", name: "Land Law I", creditHours: 12, class: "Core" },
          { code: "LW 203", name: "Law of Torts I", creditHours: 12, class: "Core" },
          { code: "LW 205", name: "Legal History", creditHours: 12, class: "Core" },
          { code: "LW 204", name: "Evidence I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "LW 206", name: "Administrative Law II", creditHours: 12, class: "Core" },
          { code: "LW 207", name: "Land Law II", creditHours: 12, class: "Core" },
          { code: "LW 208", name: "Law of Torts II", creditHours: 12, class: "Core" },
          { code: "LW 209", name: "Evidence II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "LW 300", name: "Jurisprudence 1", creditHours: 12, class: "Core" },
          { code: "LW 302", name: "Law of Business Associations", creditHours: 12, class: "Core" },
          { code: "LW 303", name: "Labour Law", creditHours: 12, class: "Core" },
          { code: "LW 307", name: "Law of Succession and Trusts", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "LW 301", name: "Family Law", creditHours: 12, class: "Core" },
          { code: "LW 304", name: "Legal Writing and Drafting", creditHours: 12, class: "Core" },
          { code: "LW 305", name: "Legal Research", creditHours: 12, class: "Core" },
          { code: "LW 306", name: "Jurisprudence II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "LW 400", name: "LL.B. Dissertation", creditHours: 24, class: "Core" },
          { code: "LW 401", name: "Civil Procedure I", creditHours: 12, class: "Core" },
          { code: "LW 403", name: "Private International Law", creditHours: 12, class: "Core" },
          { code: "LW 404", name: "Legal Ethics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "LW 405", name: "Civil Procedure II", creditHours: 12, class: "Core" },
          { code: "LW 402", name: "Arbitration and Alternative Dispute Resolution", creditHours: 12, class: "Core" },
          { code: "LW 406", name: "Environmental Law", creditHours: 12, class: "Core" },
          { code: "LW 407", name: "East African Community Law", creditHours: 12, class: "Core" }
        ]
      }
    ]
  },
  {
    id: 1007,
    universityId: 2,
    name: "BSc Agricultural Engineering and Mechanisation (UDSM)",
    ntaLevel: 8,
    semesters: [
{
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "MT 161", name: "12 1 Core Majors", creditHours: 12, class: "Core" },
          { code: "SC 121", name: "Statics 12", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "8 1 Core Programming for", creditHours: 8, class: "Core" },
          { code: "EE 151", name: "8 1 Core Engineering I", creditHours: 8, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing 8", creditHours: 8, class: "Core" },
          { code: "CL 111", name: "Communication Skills for Engineers I 12", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I 12", creditHours: 12, class: "Core" },
          { code: "AM 111", name: "Workshop Training, I 4", creditHours: 4, class: "Core" },
        ]
      },
{
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "MT 171", name: "Differential Equations for 12", creditHours: 12, class: "Core" },
          { code: "EE 131", name: "12 2 Core Engineers", creditHours: 12, class: "Core" },
          { code: "EE 152", name: "8 2 Core Engineering II", creditHours: 8, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting 8", creditHours: 8, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I 8", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II 12", creditHours: 12, class: "Core" },
          { code: "AM 112", name: "Workshop Training II 4", creditHours: 4, class: "Core" },
          { code: "AM 101", name: "8 2 Core Engineering", creditHours: 8, class: "Core" },
        ]
      },
{
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 261", name: "12 1 Core Majors", creditHours: 12, class: "Core" },
          { code: "WR 211", name: "Fluid Mechanics for Civil Engineers 12", creditHours: 12, class: "Core" },
          { code: "ME 206", name: "Strength of Materials II 12", creditHours: 12, class: "Core" },
          { code: "ME 201", name: "Design Methodology 8", creditHours: 8, class: "Core" },
          { code: "TR 111", name: "Engineering Surveying, I 8", creditHours: 8, class: "Core" },
          { code: "AM 201", name: "8 1 Core Engineering", creditHours: 8, class: "Core" },
          { code: "AM 203", name: "Fundamentals of Soil Science 8", creditHours: 8, class: "Core" },
        ]
      },
{
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "WR 212", name: "Open Channels Hydraulics 8", creditHours: 8, class: "Core" },
          { code: "WR 213", name: "Hydraulics Practicals 4", creditHours: 4, class: "Core" },
          { code: "ME 226", name: "Thermodynamics 12", creditHours: 12, class: "Core" },
          { code: "ME 208", name: "Dynamics 8", creditHours: 8, class: "Core" },
          { code: "TR 112", name: "Engineering Surveying II 8", creditHours: 8, class: "Core" },
          { code: "AM 202", name: "Principles of Agronomy 12", creditHours: 12, class: "Core" },
          { code: "AM 200", name: "Practical Training I 8", creditHours: 8, class: "Core" },
        ]
      },
{
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "AM 301", name: "Engineering Properties of Biological 8", creditHours: 8, class: "Core" },
          { code: "ME 303", name: "Computer Aided Design 8", creditHours: 8, class: "Core" },
          { code: "AM 302", name: "Mechatronics 8", creditHours: 8, class: "Core" },
          { code: "AM 303", name: "12 1 Core Equipment", creditHours: 12, class: "Core" },
          { code: "AM 304", name: "Agricultural Machine Elements 12", creditHours: 12, class: "Core" },
          { code: "WR 321", name: "Engineering Hydrology 12", creditHours: 12, class: "Core" },
        ]
      },
{
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "ME 325", name: "Turbo-machinery 8", creditHours: 8, class: "Core" },
          { code: "ME 329", name: "Internal Combustion Engines 8", creditHours: 8, class: "Core" },
          { code: "IE 399", name: "Research Methods for Engineers 8", creditHours: 8, class: "Core" },
          { code: "AM 307", name: "12 2 Core Agricultural Engi", creditHours: 12, class: "Core" },
          { code: "AM 308", name: "8 2 Core Machinery", creditHours: 8, class: "Core" },
          { code: "AM 309", name: "8 2 Core Project", creditHours: 8, class: "Core" },
          { code: "AM 300", name: "Practical Training II 8", creditHours: 8, class: "Core" },
        ]
      },
{
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "AM 401", name: "Mechanics of Farm Machinery 12", creditHours: 12, class: "Core" },
          { code: "AM 402", name: "8 1 Core Non-Perishable Co", creditHours: 8, class: "Core" },
          { code: "AM 403", name: "Precision Agriculture Technologies 8", creditHours: 8, class: "Core" },
          { code: "AM 404", name: "Fluid Power Systems 12", creditHours: 12, class: "Core" },
          { code: "AM 498", name: "Final Project I 8", creditHours: 8, class: "Core" },
        ]
      },
{
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "AM 400", name: "Practical Training III 8", creditHours: 8, class: "Core" },
          { code: "AM 406", name: "8 2 Core Preservation of", creditHours: 8, class: "Core" },
          { code: "AM 407", name: "Livestock Handling Systems", creditHours: 8, class: "Core" },
          { code: "AM 408", name: "Ergonomics, Safety and Maintenance", creditHours: 12, class: "Core" },
          { code: "ME 426", name: "Refrigeration and Air Conditioning", creditHours: 8, class: "Core" },
          { code: "SC 430", name: "12 2 Core Ethics", creditHours: 12, class: "Core" },
          { code: "AM 410", name: "Aquaculture Engineering", creditHours: 8, class: "Core" },
          { code: "AM 499", name: "Final Project II", creditHours: 12, class: "Core" },
        ]
      }
      ]
  },
  {
    id: 1008,
    universityId: 2,
    name: "BSc Agricultural and Natural Resources Economics and Business (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EC 116", name: "Introductory Microeconomics I 12", creditHours: 12, class: "Core" },
          { code: "EC 117", name: "Introductory Macroeconomics I 12", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I 12", creditHours: 12, class: "Core" },
          { code: "EB 100", name: "Agricultural Economics 12", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I 12", creditHours: 12, class: "Core" },
          { code: "EB 101", name: "Natural Resources Economics I 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "EC 126", name: "Introductory Microeconomics II 12", creditHours: 12, class: "Core" },
          { code: "EC 127", name: "Introductory Macroeconomics II 12", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II 12", creditHours: 12, class: "Core" },
          { code: "EB 103", name: "Entrepreneurship and Innovation I 12", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II 12", creditHours: 12, class: "Core" },
          { code: "EB 102", name: "Natural Resources Economics II 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EC 216", name: "Intermediate Microeconomics I 12", creditHours: 12, class: "Core" },
          { code: "EC 217", name: "Intermediate Macroeconomics I 12", creditHours: 12, class: "Core" },
          { code: "EB 201", name: "Agricultural Products Marketing I 12", creditHours: 12, class: "Core" },
          { code: "EC 218", name: "Quantitative Methods I 12", creditHours: 12, class: "Core" },
          { code: "EC 219", name: "Econometrics I 12", creditHours: 12, class: "Core" },
          { code: "EB 200", name: "Agribusiness Management 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "EC 220", name: "Development Economics 12", creditHours: 12, class: "Core" },
          { code: "EC 228", name: "Quantitative Methods II 12", creditHours: 12, class: "Core" },
          { code: "EC 229", name: "Econometrics II 12", creditHours: 12, class: "Core" },
          { code: "EB 202", name: "Agricultural Products Marketing II 12", creditHours: 12, class: "Core" },
          { code: "EB 204", name: "Business Planning 12", creditHours: 12, class: "Core" },
          { code: "EB 203", name: "Fishery Economics and Management 12", creditHours: 12, class: "Core" },
          { code: "EB 310", name: "Practical Training 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EB 303", name: "Entrepreneurship and Innovation II 12", creditHours: 12, class: "Core" },
          { code: "EB 304", name: "Economics of Agricultural Marketing I 12", creditHours: 12, class: "Core" },
          { code: "EB 300", name: "Economic Management and Policy 12", creditHours: 12, class: "Core" },
          { code: "EB 301", name: "Natural Resource Accounting 12", creditHours: 12, class: "Core" },
          { code: "EB 302", name: "Applied Econometrics 12", creditHours: 12, class: "Core" },
          { code: "EC 372", name: "Public Sector Economics I 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EB 308", name: "Management Information Systems 12", creditHours: 12, class: "Core" },
          { code: "EB 306", name: "Project Appraisal and Techniques 12", creditHours: 12, class: "Core" },
          { code: "EB 305", name: "Economics of Agricultural Marketing 12", creditHours: 12, class: "Core" },
          { code: "EC 377", name: "Industrial Economics 12", creditHours: 12, class: "Core" },
          { code: "EB 309", name: "Environmental Economics 12", creditHours: 12, class: "Core" },
          { code: "EC 382", name: "Public Sector Economics II 12", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1009,
    universityId: 2,
    name: "BSc Beekeeping Science and Technology (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AP 101", name: "Introduction to Beekeeping 8", creditHours: 8, class: "Core" },
          { code: "BT 130", name: "Evolutionary Botany 12", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development perspectives I 12", creditHours: 12, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology 12", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and 8", creditHours: 8, class: "Core" },
          { code: "ZL 121", name: "Invertebrate Zoology 8", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AP 102", name: "Honey Bee Behaviour 8", creditHours: 8, class: "Core" },
          { code: "AP 103", name: "Honey Production Technologies 12", creditHours: 12, class: "Core" },
          { code: "BT 113", name: "Introduction to Plant Physiology 8", creditHours: 8, class: "Core" },
          { code: "CH 113", name: "Chemistry for Life Sciences 12", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II 12", creditHours: 12, class: "Core" },
          { code: "FS 100", name: "Introduction to Food Science and 8", creditHours: 8, class: "Core" },
          { code: "FS 101", name: "Introduction to Food Microbiology 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AP 200", name: "Practical Training I 8", creditHours: 8, class: "Core" },
          { code: "AP 201", name: "Honeybee Anatomy and 12", creditHours: 12, class: "Core" },
          { code: "AP 205", name: "Chemistry of Bee Products 12", creditHours: 12, class: "Core" },
          { code: "BT 225", name: "Taxonomy of Higher Plants 12", creditHours: 12, class: "Core" },
          { code: "MC 206", name: "Food Microbiology and Processing", creditHours: 12, class: "Core" },
          { code: "ZL 236", name: "Introductory Entomology and", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AP 202", name: "Pollination Ecology 12", creditHours: 12, class: "Core" },
          { code: "AP 203", name: "Beekeeping Management 12", creditHours: 12, class: "Core" },
          { code: "AP 204", name: "Agro-Forestry 12", creditHours: 12, class: "Core" },
          { code: "BL 234", name: "Biostatistics I 8", creditHours: 8, class: "Core" },
          { code: "BN 232", name: "Food Biotechnology", creditHours: 12, class: "Core" },
          { code: "ZL 229", name: "Insect Physiology and Pathology", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "AP 300", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "AP 302", name: "Honeybee Genetics and Breeding", creditHours: 12, class: "Core" },
          { code: "AP 303", name: "Legal and Policy Framework in", creditHours: 12, class: "Core" },
          { code: "AP 304", name: "Beekeeping Extension and", creditHours: 12, class: "Core" },
          { code: "AP 306", name: "Apibusiness", creditHours: 12, class: "Core" },
          { code: "AP 308", name: "Environmental Conservation and", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "AP 301", name: "Bee Products, Processing", creditHours: 12, class: "Core" },
          { code: "AP 305", name: "Bee Pests and Diseases", creditHours: 12, class: "Core" },
          { code: "AP 307", name: "Apicultural Economics", creditHours: 8, class: "Core" },
          { code: "AP 309", name: "Beekeeping Entrepreneurship", creditHours: 8, class: "Core" },
          { code: "AP 399", name: "Research Project", creditHours: 12, class: "Core" },
          { code: "FS 309", name: "Functional Foods and", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1010,
    universityId: 2,
    name: "BSc Crop Science and Technology (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "AG 101", name: "Introduction to Agriculture 8", creditHours: 8, class: "Core" },
          { code: "AG 102", name: "Field Crops Production I 8", creditHours: 8, class: "Core" },
          { code: "IS 131", name: "Introduction to Informatics and 8", creditHours: 8, class: "Core" },
          { code: "AG 103", name: "Horticulture I: Principles of 8", creditHours: 8, class: "Core" },
          { code: "AG 104", name: "Urban and Peri-Urban Agriculture 8", creditHours: 8, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and 8", creditHours: 8, class: "Core" },
          { code: "AG 108", name: "Introduction to Soil Science 8", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AG 106", name: "Introduction to Cell and Molecular 12", creditHours: 12, class: "Core" },
          { code: "AG 107", name: "Introduction to Plant Genetics 8", creditHours: 8, class: "Core" },
          { code: "BT 113", name: "Introduction to Plant Physiology 8", creditHours: 8, class: "Core" },
          { code: "AG 109", name: "Agricultural Botany 8", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AG 203", name: "Plant Molecular Genetics 12", creditHours: 12, class: "Core" },
          { code: "AG 204", name: "Plant Biochemistry 8", creditHours: 8, class: "Core" },
          { code: "AG 205", name: "Plant Developmental Physiology 8", creditHours: 8, class: "Core" },
          { code: "AG 206", name: "Field Crops Production II 12", creditHours: 12, class: "Core" },
          { code: "AG 214", name: "Experimental Design and Analysis 12", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AP 202", name: "Pollination Ecology 12", creditHours: 12, class: "Core" },
          { code: "AG 207", name: "Introduction to Precision 8", creditHours: 8, class: "Core" },
          { code: "AG 208", name: "Soil Fertility and Plant Nutrition 12", creditHours: 12, class: "Core" },
          { code: "AG 212", name: "Agricultural Extension and ICT 12", creditHours: 12, class: "Core" },
          { code: "AP 204", name: "Agro-forestry 12", creditHours: 12, class: "Core" },
          { code: "AG 200", name: "Practical Training I 8", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "AG 301", name: "Crop Breeding and Biotechnology", creditHours: 12, class: "Core" },
          { code: "AG 304", name: "Seed Production Technology", creditHours: 8, class: "Core" },
          { code: "AG 309", name: "Organic Agriculture", creditHours: 8, class: "Core" },
          { code: "AG 306", name: "Precision Agriculture", creditHours: 12, class: "Core" },
          { code: "FS 308", name: "Postharvest Technology I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "AG 210", name: "Crop Protection", creditHours: 12, class: "Core" },
          { code: "AG 310", name: "Soil Water Plant Relationship", creditHours: 8, class: "Core" },
          { code: "AG 300", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "AG 308", name: "Agricultural Resources and Farm", creditHours: 8, class: "Core" },
          { code: "AG 311", name: "Agricultural Value Chain", creditHours: 8, class: "Core" },
          { code: "AG 399", name: "Research Project", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1011,
    universityId: 2,
    name: "Bachelor of Business Administration (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "BAC 100", name: "Principles of Accounting I", creditHours: 12, class: "Core" },
          { code: "BBS 100", name: "Introduction to Business", creditHours: 12, class: "Core" },
          { code: "BBS 101", name: "Business Communication", creditHours: 12, class: "Core" },
          { code: "BIM 100", name: "Elementary Business Mathematics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "BAC 101", name: "Principles of Accounting II", creditHours: 12, class: "Core" },
          { code: "BBS 102", name: "Principles and Practices of Management and Administration", creditHours: 12, class: "Core" },
          { code: "BBS 103", name: "Business Environment I", creditHours: 12, class: "Core" },
          { code: "BEC 100", name: "Micro-Economics", creditHours: 12, class: "Core" },
          { code: "BIT 100", name: "Introduction to Information Technology and Information Systems", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "BAC 102", name: "Management Accounting", creditHours: 12, class: "Core" },
          { code: "BBS 104", name: "Business Environment II", creditHours: 12, class: "Core" },
          { code: "BEC 101", name: "Macro-Economics", creditHours: 12, class: "Core" },
          { code: "BIM 101", name: "Quantitative Methods for Business Decision Making", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "BFN 102", name: "Introduction to Business Law", creditHours: 12, class: "Core" },
          { code: "BFN 201", name: "Introduction to Financial Management", creditHours: 12, class: "Core" },
          { code: "BIT 200", name: "Management Information Systems", creditHours: 12, class: "Core" },
          { code: "BMK 200", name: "Principles of Marketing", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "BBS 203", name: "Business Policy and Strategic Management", creditHours: 12, class: "Core" },
          { code: "BHR 200", name: "Human Resources Management", creditHours: 12, class: "Core" },
          { code: "BMK 201", name: "Small Business and Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "BMK 202", name: "Marketing Research", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "BAC 200", name: "Taxation", creditHours: 12, class: "Core" },
          { code: "BFN 202", name: "Financial Statement Analysis", creditHours: 12, class: "Core" },
          { code: "BMK 203", name: "Business Planning and Development", creditHours: 12, class: "Core" },
          { code: "BMK 204", name: "Marketing of Services", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "BFN 300", name: "Financial Management for Small Business", creditHours: 12, class: "Core" },
          { code: "BFN 301", name: "Insurance and Risk Management", creditHours: 12, class: "Core" },
          { code: "BMK 300", name: "Marketing for Small Business", creditHours: 12, class: "Core" },
          { code: "BMK 302", name: "International Marketing", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "BPW 333", name: "Project Work", creditHours: 48, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1012,
    universityId: 2,
    name: "BCom Banking and Financial Services (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AC 100", name: "Principles of Accounting I (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomic Analysis (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
          { code: "IM 100", name: "Introduction to Information and Communications Technology (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
          { code: "IM 102", name: "Business Mathematics (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AC 101", name: "Principles of Accounting II (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics Analysis (Prerequisite FN 100)", creditHours: 12, class: "Core" },
          { code: "GM 100", name: "Principles and Practice of Management (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
          { code: "MK 101", name: "Principles of Marketing (Prerequisite MK 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AC 200", name: "Management Accounting I (Prerequisite AC 101)", creditHours: 12, class: "Core" },
          { code: "FN 200", name: "Principles of Finance (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "FN 201", name: "Introduction to Financial Services (Prerequisite FN 101)", creditHours: 12, class: "Core" },
          { code: "FN 210", name: "Bank Operations (Prerequisite FN 101)", creditHours: 12, class: "Core" },
          { code: "IM 200", name: "Quantitative Methods for Business Decisions (Prerequisite IM 102)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 202", name: "Management Accounting II (Prerequisite AC 101 and AC 200)", creditHours: 12, class: "Core" },
          { code: "FN 202", name: "Introduction to Financial Management (Prerequisite FN 200)", creditHours: 12, class: "Core" },
          { code: "FN 212", name: "Microfinance (Prerequisite FN 200)", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "IM 205", name: "Business Research Methods (Prerequisite GM 100 and IM 200)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 333", name: "Field Practical with Research Component", creditHours: 8, class: "Core" },
          { code: "FN 300", name: "International Business Finance (Prerequisite FN 101 and FN 202)", creditHours: 12, class: "Core" },
          { code: "FN 302", name: "Security Analysis and Portfolio Management (Prerequisite FN 202)", creditHours: 12, class: "Core" },
          { code: "FN 304", name: "Bank Financial Management (Prerequisite FN 202 and FN 210)", creditHours: 12, class: "Core" },
          { code: "FN 310", name: "Investment Analysis (Prerequisite FN 202)", creditHours: 12, class: "Core" },
          { code: "GM 300", name: "Strategic Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "FN 303", name: "Law Relating to Banking and Financial Services (Prerequisite FN 210)", creditHours: 12, class: "Core" },
          { code: "FN 306", name: "Lending Management (Prerequisite FN 202 and FN 210)", creditHours: 12, class: "Core" },
          { code: "FN 307", name: "Treasury Management (Prerequisite FN 202 and FN 211)", creditHours: 12, class: "Core" },
          { code: "MK 301", name: "Entrepreneurship (Prerequisite MK 100)", creditHours: 12, class: "Core" },
          { code: "MK 326", name: "Marketing of Services (Prerequisite MK 100 and MK 101)", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1013,
    universityId: 2,
    name: "BCom Finance (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AC 100", name: "Principles of Accounting I (Prerequisite for Admission to BCOM)", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomic Analysis (Prerequisite for Admission to BCOM", creditHours: 12, class: "Core" },
          { code: "IM 100", name: "Introduction to Information and Communications Technology (Prerequisite for Admission to BCOM)", creditHours: 12, class: "Core" },
          { code: "IM 102", name: "Business Mathematics (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business (Prerequisite for Admission into BCOM)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AC 101", name: "Principles of Accounting II (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics Analysis (Prerequisite FN 100)", creditHours: 12, class: "Core" },
          { code: "GM 100", name: "Principles and Practice of Management (Prerequisite for Admission to BCOM)", creditHours: 12, class: "Core" },
          { code: "MK 101", name: "Principles of Marketing (Prerequisite MK 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AC 200", name: "Management Accounting I (Prerequisite AC 101)", creditHours: 12, class: "Core" },
          { code: "FN 200", name: "Principles of Finance (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "FN 201", name: "Introduction to Financial Services (Prerequisite FN 101)", creditHours: 12, class: "Core" },
          { code: "IM 200", name: "Quantitative Methods for Business Decisions (Prerequisite IM 102)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 202", name: "Management Accounting II (Prerequisite AC 101 and AC 200)", creditHours: 12, class: "Core" },
          { code: "FN 202", name: "Financial Management (Prerequisite FN 200)", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "IM 205", name: "Business Research Methods (Prerequisite GM 100 and IM 200)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 333", name: "Field Practical with Research Component", creditHours: 8, class: "Core" },
          { code: "FN 300", name: "International Business Finance (Prerequisite FN 101 and FN 202)", creditHours: 12, class: "Core" },
          { code: "FN 302", name: "Security Analysis and Portfolio Management (Prerequisite FN 202)", creditHours: 12, class: "Core" },
          { code: "FN 310", name: "Investment Analysis (Prerequisite FN 202)", creditHours: 12, class: "Core" },
          { code: "GM 300", name: "Strategic Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "FN 301", name: "Financial Analysis (Prerequisite FN 202 and AC 202)", creditHours: 12, class: "Core" },
          { code: "FN 307", name: "Treasury Management (Prerequisite FN 202 and FN 211)", creditHours: 12, class: "Core" },
          { code: "FN 319", name: "Advanced Security Analysis and Portfolio Management (Prerequisite FN 202)", creditHours: 12, class: "Core" },
          { code: "MK 301", name: "Entrepreneurship (Prerequisite MK 100)", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1014,
    universityId: 2,
    name: "BCom Human Resources Management (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomic Analysis (Prerequisite Admissible into BCom", creditHours: 12, class: "Core" },
          { code: "IM 102", name: "Business Mathematics (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "IM 100", name: "Introduction to Information and Communications Technology (Prerequisite Admissible into (BCom)", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I (Prerequisite Admissible into (BCom)", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "GM 100", name: "Principles and Practice of Management (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics Analysis (Prerequisite FN 100)", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "MK 101", name: "Principles of Marketing (Prerequisite MK 100)", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AC 200", name: "Management Accounting I (Prerequisite AC 101)", creditHours: 12, class: "Core" },
          { code: "IM 200", name: "Quantitative Methods for Business Decisions (Prerequisite IM 102)", creditHours: 12, class: "Core" },
          { code: "FN 200", name: "Principles of Finance (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "HR 204", name: "Principles and Practices of Human Resources Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "HR 200", name: "Organization Behaviour (PrerequisiteGM100)", creditHours: 12, class: "Core" },
          { code: "MK 223", name: "Distribution and Logistics Management (Prerequisite MK 101)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 202", name: "Management Accounting II (Prerequisite AC 101and AC 200)", creditHours: 12, class: "Core" },
          { code: "IM 205", name: "Business Research Methods (Prerequisite GM 100and IM 200)", creditHours: 12, class: "Core" },
          { code: "HR 203", name: "Human Resource Planning and Development (Prerequisite HR 200)", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "HR 202", name: "Industrial Relations (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "HR 205", name: "Compensation Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 333", name: "Field Practical with Research Component", creditHours: 8, class: "Core" },
          { code: "GM 300", name: "Strategic Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "HR 310", name: "Human Resources Management Economics (Prerequisite FN 101)", creditHours: 12, class: "Core" },
          { code: "HR 311", name: "Laboratoryour Law (Prerequisite HR 200 and HR 202)", creditHours: 12, class: "Core" },
          { code: "HR 312", name: "Organization Development (Prerequisite GM 100 and HR 200)", creditHours: 12, class: "Core" },
          { code: "HR 313", name: "Organizational Theory and Design (Prerequisite HR 200)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "MK 301", name: "Entrepreneurship (Prerequisite MK 100)", creditHours: 12, class: "Core" },
          { code: "HR 316", name: "Occupational Health and Safety (Prerequisite GM100)", creditHours: 12, class: "Core" },
          { code: "HR 317", name: "International Human Resources Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "HR 314", name: "Leadership and Supervisory Skills (Prerequisite GM 100)", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1015,
    universityId: 2,
    name: "BCom Marketing (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomic Analysis (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "IM 102", name: "Business Mathematics (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "IM 100", name: "Introduction to Information and Communications Technology (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "GM 100", name: "Principles and Practice of Management (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics Analysis (Prerequisite FN100)", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II (Prerequisite AC100)", creditHours: 12, class: "Core" },
          { code: "MK 101", name: "Principles of Marketing (Prerequisite MK100)", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AC 200", name: "Management Accounting I (Prerequisite AC 101)", creditHours: 12, class: "Core" },
          { code: "IM 200", name: "Quantitative Methods for Business Decisions (Prerequisite IM 102)", creditHours: 12, class: "Core" },
          { code: "FN 200", name: "Principles of Finance (Prerequisite AC 100)", creditHours: 12, class: "Core" },
          { code: "MK 213", name: "Consumer Behavior (Prerequisite MK 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 202", name: "Management Accounting II (Prerequisite AC 101 and AC 200)", creditHours: 12, class: "Core" },
          { code: "IM 205", name: "Business Research Methods (Prerequisite GM 100and IM 200)", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "MK 223", name: "Distribution and Logistics Management (Prerequisite MK 101)", creditHours: 12, class: "Core" },
          { code: "MK 201", name: "International Marketing (Prerequisite MK 100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 333", name: "Field Practical with Research Component", creditHours: 8, class: "Core" },
          { code: "GM 300", name: "Strategic Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "HR 204", name: "Principles and Practices of Human Resources Management (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "MK 322", name: "Marketing Research (Prerequisite MK 101)", creditHours: 12, class: "Core" },
          { code: "MK 327", name: "Pricing Decisions (Prerequisite MK 100 and AC 202)", creditHours: 12, class: "Core" },
          { code: "MK 323", name: "E-Marketing (Prerequisite MK 101)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "MK 300", name: "Strategic Marketing (Prerequisite MK100 and GM100)", creditHours: 12, class: "Core" },
          { code: "MK 301", name: "Entrepreneurship (Prerequisite MK100)", creditHours: 12, class: "Core" },
          { code: "MK 326", name: "Marketing of Services (Prerequisite MK101)", creditHours: 12, class: "Core" },
          { code: "MK 324", name: "Management Consulting Skills (Prerequisite GM100)", creditHours: 12, class: "Core" },
          { code: "MK 330", name: "Relationship Marketing (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1016,
    universityId: 2,
    name: "BCom Procurement and Supply Chain Management (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "FN 100", name: "Principles of Microeconomic Analysis", creditHours: 12, class: "Core" },
          { code: "IM 102", name: "Business Mathematics", creditHours: 12, class: "Core" },
          { code: "IM 100", name: "Introduction to Information and Communications Technology", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "GM 100", name: "Principles and Practice of Management", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics Analysis", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II", creditHours: 12, class: "Core" },
          { code: "MK 101", name: "Principles of Marketing", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AC 200", name: "Management Accounting", creditHours: 12, class: "Core" },
          { code: "IM 200", name: "Quantitative Methods for Business Decisions", creditHours: 12, class: "Core" },
          { code: "FN 200", name: "Principles of Finance", creditHours: 12, class: "Core" },
          { code: "IM 220", name: "Fundamentals of Procurement and supply chain management", creditHours: 12, class: "Core" },
          { code: "HR 200", name: "Organizational Behaviour", creditHours: 12, class: "Core" },
          { code: "IM 229", name: "Public Procurement management", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 202", name: "Management Accounting II (Prerequisite AC 101 and AC 200)", creditHours: 12, class: "Core" },
          { code: "IM 205", name: "Business Research Methods", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Business Law and Ethics (Prerequisite GM 100)", creditHours: 12, class: "Core" },
          { code: "MK 223", name: "Distribution and Logistics Management", creditHours: 12, class: "Core" },
          { code: "IM 231", name: "Warehouse and Inventory Management", creditHours: 12, class: "Core" },
          { code: "IM 203", name: "Procurement Management", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 333", name: "Practical Training in Procurement and Supply Chain Management", creditHours: 8, class: "Core" },
          { code: "GM 300", name: "Strategic Leadership in Procurement and Supply Chain Management", creditHours: 12, class: "Core" },
          { code: "IM 342", name: "International Procurement Management", creditHours: 12, class: "Core" },
          { code: "IM 325", name: "Transportation Management", creditHours: 12, class: "Core" },
          { code: "IM 339", name: "Operations Management", creditHours: 12, class: "Core" },
          { code: "GM 301", name: "Project Management", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "MK 301", name: "Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "IM 320", name: "Procurement Ethics", creditHours: 12, class: "Core" },
          { code: "IM 317", name: "Negotiation and Contract Management", creditHours: 12, class: "Core" },
          { code: "IM 344", name: "Procurement Auditing and Assurance Services", creditHours: 12, class: "Core" },
          { code: "IM 354", name: "Port and Terminal Operations Management", creditHours: 12, class: "Core" },
          { code: "IM 306", name: "E-Commerce and Supply Chain Information Management", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1017,
    universityId: 2,
    name: "BCom Tourism Management (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "FN 100", name: "Principles of Micro Economic Analysis (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "IM 100", name: "Introduction to Information and Communication Technology (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "IM 102", name: "Business Mathematics and Statistics (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "GM 100", name: "Principles and Practice of Management (Prerequisite Admissible into BCom)", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics Analysis (Prerequisite FN100)", creditHours: 12, class: "Core" },
          { code: "MK 101", name: "Principles of Marketing (Prerequisite MK100)", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II (PrerequisiteAC100)", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "FN 200", name: "Principles of Finance", creditHours: 12, class: "Core" },
          { code: "GM 200", name: "Introduction to Business Law and Ethics", creditHours: 12, class: "Core" },
          { code: "IM 200", name: "Quantitative Methods for Business Decisions", creditHours: 12, class: "Core" },
          { code: "TH 211", name: "Introduction to Hospitality Management", creditHours: 12, class: "Core" },
          { code: "TH 212", name: "Consumer Behavior in Tourism", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "TH 213", name: "Nature Based Tourism", creditHours: 12, class: "Core" },
          { code: "TH 214", name: "Tour Guiding and Interpretation", creditHours: 12, class: "Core" },
          { code: "TH 215", name: "Tourism Marketing", creditHours: 12, class: "Core" },
          { code: "IM 205", name: "Business Research Methods", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GM 333", name: "Field Practical with Research Component", creditHours: 8, class: "Core" },
          { code: "GM 300", name: "Strategic Management", creditHours: 12, class: "Core" },
          { code: "MK 301", name: "Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "TH 310", name: "Tourism Transportation Management", creditHours: 12, class: "Core" },
          { code: "TH 303", name: "Tourism and Hospitality Marketing Research", creditHours: 12, class: "Core" },
          { code: "TH 312", name: "Tourism Policy and Planning", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "TH 301", name: "Advanced Tourism Management", creditHours: 12, class: "Core" },
          { code: "TH 314", name: "Destination Marketing and Branding", creditHours: 12, class: "Core" },
          { code: "TH 315", name: "Management of Tourism Operations", creditHours: 12, class: "Core" },
          { code: "TH 316", name: "e-Tourism", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1018,
    universityId: 2,
    name: "Bachelor of Education in Commerce (BEdCom) (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EF 100", name: "Principles of Education", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CL 108", name: "Business Communication", creditHours: 12, class: "Core" },
          { code: "EA 100", name: "Introduction to Microeconomics of Education", creditHours: 12, class: "Core" },
          { code: "BM 102", name: "Introduction to Business", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "EP 101", name: "Introduction to Educational Psychology", creditHours: 12, class: "Core" },
          { code: "EA 101", name: "Approaches to Educational Planning", creditHours: 12, class: "Core" },
          { code: "CT 100", name: "Introduction to Teaching", creditHours: 12, class: "Core" },
          { code: "CT 101", name: "Teaching Practice I", creditHours: 12, class: "Core" },
          { code: "CT 102", name: "Computer Literacy for Teachers", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CT 200", name: "Principles of Curriculum Dev. and Teaching", creditHours: 12, class: "Core" },
          { code: "CT 201", name: "Educational Media and Technology", creditHours: 12, class: "Core" },
          { code: "CT 208", name: "Commerce Teaching Methods", creditHours: 12, class: "Core" },
          { code: "EF 200", name: "History of Education", creditHours: 12, class: "Core" },
          { code: "EA 200", name: "Human Resources Dev in EducationalOrganizations", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AC 200", name: "Managerial Accounting I", creditHours: 12, class: "Core" },
          { code: "MK 200", name: "Principles of Marketing", creditHours: 12, class: "Core" },
          { code: "FN 202", name: "Introduction to Financial Management", creditHours: 12, class: "Core" },
          { code: "EA 201", name: "School Governance", creditHours: 12, class: "Core" },
          { code: "CT 202", name: "Teaching Practice II", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EP 300", name: "Educational Measurement and Evaluation", creditHours: 12, class: "Core" },
          { code: "EA 300", name: "Management of Educ. & School Admin.I", creditHours: 12, class: "Core" },
          { code: "EA 302", name: "Admin. & Organizational Behaviour in Educ.", creditHours: 12, class: "Core" },
          { code: "EP 302", name: "Research Methods in Education", creditHours: 12, class: "Core" },
          { code: "EA 303", name: "Micro-Economics of Education and Finance", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EA 305", name: "Management of Educ. School Admin. II", creditHours: 12, class: "Core" },
          { code: "EF 303", name: "Professionalism and Ethics in Education", creditHours: 12, class: "Core" },
          { code: "IM 305", name: "Management Information Systems", creditHours: 12, class: "Core" },
          { code: "MK 301", name: "Small Business and Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "MK 307", name: "Business Plan Development", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1019,
    universityId: 2,
    name: "Bachelor of Education in Early Childhood Education (BEd ECE) (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EP 100", name: "Introduction to Psychology", creditHours: 12, class: "Core" },
          { code: "CT 102", name: "Computer Literacy for Teachers", creditHours: 12, class: "Core" },
          { code: "EP 102", name: "Methods of Studying Young Children's Behaviour", creditHours: 12, class: "Core" },
          { code: "EP 103", name: "Human Development and Learning", creditHours: 12, class: "Core" },
          { code: "EP 124", name: "Foundations of Early Childhood Education", creditHours: 12, class: "Core" },
          { code: "EF 100", name: "Principles of Education", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "EP 101", name: "Introduction to Educational Psychology", creditHours: 12, class: "Core" },
          { code: "EP 125", name: "Early Childhood Education Practicum", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CT 100", name: "Introduction to Teaching", creditHours: 12, class: "Core" },
          { code: "CT 101", name: "Teaching Practice I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CT 200", name: "Principles of Curriculum Development and Teaching", creditHours: 12, class: "Core" },
          { code: "CT 201", name: "Educational Media and Technology", creditHours: 12, class: "Core" },
          { code: "EP 201", name: "Introduction to Social Psychology", creditHours: 12, class: "Core" },
          { code: "EP 224", name: "Monitoring and Measurement of Childhood Development Processes", creditHours: 12, class: "Core" },
          { code: "EF 200", name: "History of Education in East Africa", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "EP 200", name: "Human Development and School Learning", creditHours: 12, class: "Core" },
          { code: "EP 221", name: "Parenting Education", creditHours: 12, class: "Core" },
          { code: "EP 222", name: "Management of Early Childhood Educational Institutions", creditHours: 12, class: "Core" },
          { code: "CT 202", name: "Teaching Practice II", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EA 300", name: "Management of Education and School Administration", creditHours: 12, class: "Core" },
          { code: "EP 300", name: "Educational Management and Evaluation", creditHours: 12, class: "Core" },
          { code: "EP 302", name: "Research Methods in Education", creditHours: 12, class: "Core" },
          { code: "EP 305", name: "Introduction to Gender Psychology", creditHours: 12, class: "Core" },
          { code: "EP 307", name: "Psychology of Exceptionalities", creditHours: 12, class: "Core" },
          { code: "EP 308", name: "Early Childhood Education", creditHours: 12, class: "Core" },
          { code: "EP 301", name: "Educational Statistics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EP 320", name: "Early Childhood Screening and Assessment", creditHours: 12, class: "Core" },
          { code: "EF 303", name: "Professionalism and Ethics in Education", creditHours: 12, class: "Core" },
          { code: "EP 321", name: "Communication Methods in Early Childhood", creditHours: 12, class: "Core" },
          { code: "EP 322", name: "Pre-Literacy Development and Learning", creditHours: 12, class: "Core" },
          { code: "EP 323", name: "Childhood Development, Health and Nutrition", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1020,
    universityId: 2,
    name: "Bachelor of Education in Physical Education and Sport Sciences (BEdPESS) (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EF 100", name: "Principles of Education", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "PE 100", name: "Foundations of Physical Education and Sport", creditHours: 12, class: "Core" },
          { code: "PE 101", name: "Human Anatomy and Physiology", creditHours: 12, class: "Core" },
          { code: "PE 106", name: "Track and Field Athletics", creditHours: 12, class: "Core" },
          { code: "PE 107", name: "Sport Biomechanics", creditHours: 12, class: "Core" },
          { code: "PE 109", name: "Swimming and Life Saving", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "EP 101", name: "Introduction to Educational Psychology", creditHours: 12, class: "Core" },
          { code: "CT 100", name: "Introduction to Teaching", creditHours: 12, class: "Core" },
          { code: "CT 101", name: "Teaching Practice I", creditHours: 12, class: "Core" },
          { code: "CT 102", name: "Computer Literacy for Teachers", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CT 200", name: "Principles of Curriculum Development and Teaching", creditHours: 12, class: "Core" },
          { code: "CT 201", name: "Educational Media and Technology", creditHours: 12, class: "Core" },
          { code: "PE 212", name: "Sport, Society and Development", creditHours: 12, class: "Core" },
          { code: "PE 214", name: "Sports Journalism and Marketing", creditHours: 12, class: "Core" },
          { code: "PE 208", name: "Handball, Gymnastics and Traditional Games", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CT 202", name: "Teaching Practice II", creditHours: 12, class: "Core" },
          { code: "EF 200", name: "History of Education in East Africa", creditHours: 8, class: "Core" },
          { code: "PE 202", name: "Exercise Physiology", creditHours: 12, class: "Core" },
          { code: "PE 204", name: "Sports Psychology", creditHours: 12, class: "Core" },
          { code: "PE 209", name: "Soccer and Volleyball", creditHours: 12, class: "Core" },
          { code: "PE 210", name: "Basketball and Netball", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EA 300", name: "Management of Education and School Administration", creditHours: 12, class: "Core" },
          { code: "EP 300", name: "Educational Measurement and Evaluation", creditHours: 12, class: "Core" },
          { code: "EP 302", name: "Research Methods in Education", creditHours: 12, class: "Core" },
          { code: "PE 300", name: "Sports Medicine", creditHours: 12, class: "Core" },
          { code: "PE 308", name: "Physical Education in Schools and Colleges", creditHours: 12, class: "Core" },
          { code: "PE 311", name: "Theory and Methods of Sport Training", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EF 303", name: "Professionalism and Ethics in Education", creditHours: 12, class: "Core" },
          { code: "PE 303", name: "Motor Learning and Adopted Physical Education", creditHours: 12, class: "Core" },
          { code: "PE 309", name: "Racket Games (Tennis & Table Tennis)", creditHours: 12, class: "Core" },
          { code: "PE 310", name: "Organization & Admin. of Physical Education and Sport", creditHours: 12, class: "Core" },
          { code: "EP 301", name: "Educational Statistics", creditHours: 12, class: "Core" },
          { code: "PE 302", name: "Measurement and Evaluation in Physical Education and Sports", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1021,
    universityId: 2,
    name: "BSc Geology (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "GE 160", name: "Fundamentals of Geographical Information Systems", creditHours: 12, class: "Core" },
          { code: "PH 133", name: "Vibration and Waves", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "GY 125", name: "Introduction to Survey and Mapping", creditHours: 12, class: "Core" },
          { code: "GP 120", name: "Earth Physics", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "PH 121", name: "Electricity and Magnetism", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GY 201", name: "Optical Mineralogy", creditHours: 12, class: "Core" },
          { code: "GY 229", name: "Introduction to Geochemistry", creditHours: 12, class: "Core" },
          { code: "GE 161", name: "Principles of Remote Sensing", creditHours: 12, class: "Core" },
          { code: "EG 201", name: "Fundamentals of Engineering Geology", creditHours: 12, class: "Core" },
          { code: "GP 211", name: "Rock Physics", creditHours: 12, class: "Core" },
          { code: "GY 299", name: "Geological Mapping I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "GY 250", name: "Mineralogy and Crystallography", creditHours: 12, class: "Core" },
          { code: "GY 212", name: "Structural Geology 1", creditHours: 8, class: "Core" },
          { code: "GY 216", name: "Paleontology", creditHours: 8, class: "Core" },
          { code: "GY 260", name: "Sedimentology and Sedimentary Petrology", creditHours: 12, class: "Core" },
          { code: "PG 235", name: "Fossil fuel", creditHours: 12, class: "Core" },
          { code: "MT 271", name: "Statistics for Mathematics Non-Majors", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 315", name: "Stratigraphy", creditHours: 8, class: "Core" },
          { code: "GY 318", name: "Structural Geology II", creditHours: 8, class: "Core" },
          { code: "GY 330", name: "Principles of Hydrogeology", creditHours: 12, class: "Core" },
          { code: "GY 361", name: "Magmatic Petrology", creditHours: 12, class: "Core" },
          { code: "GY 371", name: "Geotectonics", creditHours: 12, class: "Core" },
          { code: "GY 399", name: "Geological Mapping II", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GY 311", name: "Metallic Mineral Deposits", creditHours: 12, class: "Core" },
          { code: "GY 317", name: "Mining Geology", creditHours: 12, class: "Core" },
          { code: "GY 344", name: "Geomorphology and Soils", creditHours: 12, class: "Core" },
          { code: "GY 362", name: "Metamorphic Petrology", creditHours: 12, class: "Core" },
          { code: "GY 375", name: "Professional Communication for Geologists", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GY 409", name: "Industrial Minerals and Rocks", creditHours: 12, class: "Core" },
          { code: "GY 411", name: "Geology and Mineral Resources of Tanzania", creditHours: 12, class: "Core" },
          { code: "GY 412", name: "Ore Microscopy", creditHours: 8, class: "Core" },
          { code: "MN 480", name: "Mineral Economics", creditHours: 12, class: "Core" },
          { code: "GY 403", name: "Project Proposal development", creditHours: 8, class: "Core" },
          { code: "MK 100", name: "Introduction to Business", creditHours: 12, class: "Core" },
          { code: "GY 499/GY 498", name: "Industrial Training/ Industrial Attachment for Extractive Industry Students", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "GY 427", name: "Remote Sensing and GIS II", creditHours: 8, class: "Core" },
          { code: "GM 101", name: "Principles and Practice of Management", creditHours: 12, class: "Core" },
          { code: "GY 401", name: "History of the Earth", creditHours: 8, class: "Core" },
          { code: "GY 405", name: "Independent Project", creditHours: 12, class: "Core" },
          { code: "GY 446", name: "Environmental Geology", creditHours: 8, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1022,
    universityId: 2,
    name: "BSc Marine Sciences (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "OC 101", name: "Biological Oceanography I", creditHours: 8, class: "Core" },
          { code: "OC 102", name: "Chemical Oceanography I", creditHours: 8, class: "Core" },
          { code: "OC 103", name: "Geological Oceanography I", creditHours: 8, class: "Core" },
          { code: "OC 104", name: "Physical Oceanography I", creditHours: 8, class: "Core" },
          { code: "GI 101", name: "Introduction to Informatics for Marine Scientists", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "OC 107", name: "Biological Oceanography II", creditHours: 12, class: "Core" },
          { code: "OC 108", name: "Chemical Oceanography II", creditHours: 8, class: "Core" },
          { code: "OC 109", name: "Geological Oceanography II", creditHours: 8, class: "Core" },
          { code: "OC 110", name: "Physical Oceanography II", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 8, class: "Core" },
          { code: "OC 199", name: "Practical Training I", creditHours: 4, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CR 200", name: "Introduction to Fisheries Science", creditHours: 8, class: "Core" },
          { code: "CR 202", name: "Biology and Ecology of Mangrove", creditHours: 8, class: "Core" },
          { code: "CR 204", name: "Marine Phytoplankton and Primary Production", creditHours: 12, class: "Core" },
          { code: "OC 200", name: "Scientific Writing and Communication", creditHours: 8, class: "Core" },
          { code: "OC 201", name: "Climate Change and Variability I", creditHours: 8, class: "Core" },
          { code: "GI 201", name: "Principles of Coastal and Marine GIS and Remote Sensing", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CR 201", name: "Fish Biology and Taxonomy", creditHours: 12, class: "Core" },
          { code: "CR 206", name: "Biology and Ecology of Coral Reefs", creditHours: 12, class: "Core" },
          { code: "CR 208", name: "Introduction to Integrated Coastal Zone Management", creditHours: 8, class: "Core" },
          { code: "OC 203", name: "Marine Non-living Resources", creditHours: 12, class: "Core" },
          { code: "OC 205", name: "Biostatistics for Marine Scientists", creditHours: 8, class: "Core" },
          { code: "OC 299", name: "Practical Training II", creditHours: 4, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CR 301", name: "Fish Stock Assessment", creditHours: 12, class: "Core" },
          { code: "CR 302", name: "Marine Resource Marketing and Entrepreneurship", creditHours: 8, class: "Core" },
          { code: "MD 303", name: "Introduction to Aquaculture", creditHours: 12, class: "Core" },
          { code: "MD 304", name: "Aquaculture Feeds and Production", creditHours: 12, class: "Core" },
          { code: "MD 305", name: "Breeding and Stock Enhancement in Aquaculture", creditHours: 12, class: "Core" },
          { code: "MD 306", name: "Fin fish, Shellfish and Holothurian Farming Technologies", creditHours: 12, class: "Core" },
          { code: "OC 301", name: "Coastal and Nearshore Processes", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "CR 307", name: "Marine Plant Physiology", creditHours: 12, class: "Core" },
          { code: "OC 304", name: "Petroleum Geology", creditHours: 12, class: "Core" },
          { code: "CR 305", name: "Seagrasses and Seaweed Ecology", creditHours: 8, class: "Core" },
          { code: "TI 301", name: "Coastal and Marine Engineering", creditHours: 12, class: "Core" },
          { code: "OC 399", name: "Research Project", creditHours: 8, class: "Core" },
          { code: "OC 302", name: "Principles of Geophysics", creditHours: 8, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1023,
    universityId: 2,
    name: "BSc Metallurgy and Mineral Processing Engineering (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering I", creditHours: 8, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
          { code: "MP 111", name: "Workshop Training I", creditHours: 4, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "MP 112", name: "Workshop Training II", creditHours: 4, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I", creditHours: 8, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" },
          { code: "MP 131", name: "Mineral Processing I", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus & Diff. Eq. for Non-Majors", creditHours: 12, class: "Core" },
          { code: "MN 102", name: "Introduction to Mining", creditHours: 8, class: "Core" },
          { code: "CP 105", name: "Materials and Energy Balance", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" },
          { code: "ME 218", name: "Materials Technology I", creditHours: 12, class: "Core" },
          { code: "CP 203", name: "Engineering Thermodynamics", creditHours: 12, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "CH 240", name: "Physical Chemistry", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "CH 219", name: "Systematic Inorganic Chemistry", creditHours: 8, class: "Core" },
          { code: "CP 211", name: "Chemical Engineering Fluid Mechanics", creditHours: 12, class: "Core" },
          { code: "CH 271", name: "Chemistry Practical for Mineral Processing", creditHours: 8, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "ME 219", name: "Materials Technology II", creditHours: 12, class: "Core" },
          { code: "MP 100", name: "Practical Training I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "MP 331", name: "Mineral Processing II", creditHours: 12, class: "Core" },
          { code: "MP 332", name: "Pyrometallurgy", creditHours: 12, class: "Core" },
          { code: "MN 341", name: "Mine Transportation and Materials Handling", creditHours: 12, class: "Core" },
          { code: "MN 410", name: "Mine safety and Environment", creditHours: 12, class: "Core" },
          { code: "MP 335", name: "Coal Processing and Utilization", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "MP 333", name: "Hydrometallurgy", creditHours: 12, class: "Core" },
          { code: "GY 311", name: "Metallic Mineral Deposits", creditHours: 12, class: "Core" },
          { code: "CP 327", name: "Reaction Engineering", creditHours: 12, class: "Core" },
          { code: "MP 334", name: "Metallurgical Accounting", creditHours: 8, class: "Core" },
          { code: "MP 350", name: "Mineral Processing Laboratory I", creditHours: 8, class: "Core" },
          { code: "MP 200", name: "Practical Training II", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "MN 480", name: "Mineral Economics", creditHours: 12, class: "Core" },
          { code: "MP 430", name: "Electrometallurgy", creditHours: 8, class: "Core" },
          { code: "MP 450", name: "Mineral Processing Laboratory II", creditHours: 8, class: "Core" },
          { code: "MP 420", name: "Design and Operation of Mineral Processes", creditHours: 12, class: "Core" },
          { code: "MP 498", name: "Final Year Project I", creditHours: 8, class: "Core" },
          { code: "***", name: "Electives I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "MN 481", name: "Mine Management", creditHours: 12, class: "Core" },
          { code: "MP 499", name: "Final Year Project II", creditHours: 12, class: "Core" },
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "MP 300", name: "Practical Training III", creditHours: 8, class: "Core" },
          { code: "***", name: "Electives II", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1024,
    universityId: 2,
    name: "BSc Mining Engineering (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EE 171", name: "Introduction to computers and programming for engineers", creditHours: 8, class: "Core" },
          { code: "GY 110", name: "Introduction to Geology and Geological Processes for Engineers", creditHours: 12, class: "Core" },
          { code: "DS 114", name: "Development perspective I", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "TW 101", name: "Bench Work Practice", creditHours: 6, class: "Core" },
          { code: "TW 133", name: "Electrical Machines and Installation", creditHours: 6, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "TW 146", name: "Plumbing and Pipe Fittings Installation", creditHours: 6, class: "Core" },
          { code: "TW 108", name: "Building, Setting Out, & Formwork", creditHours: 6, class: "Core" },
          { code: "MN 103", name: "Principles of Mining and Mineral Processing", creditHours: 12, class: "Core" },
          { code: "DS 115", name: "Development perspective II", creditHours: 12, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I", creditHours: 8, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" },
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus & Differential Equations for Non-Majors", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 261", name: "Several Variables Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "TR 111", name: "Engineering Surveying I", creditHours: 8, class: "Core" },
          { code: "MN 237", name: "Small-Scale Mining and Processing Techniques", creditHours: 12, class: "Core" },
          { code: "WR 211", name: "Fluid Mechanics for Civil Engineers", creditHours: 12, class: "Core" },
          { code: "MN 280", name: "Operations Research in Mining", creditHours: 12, class: "Core" },
          { code: "MN 220", name: "Mine Development", creditHours: 8, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering I", creditHours: 8, class: "Core" },
          { code: "FN 250", name: "Financial Literacy", creditHours: 0, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "EN 202", name: "Thermodynamics", creditHours: 12, class: "Core" },
          { code: "TR 112", name: "Engineering Surveying II", creditHours: 8, class: "Core" },
          { code: "TR 232", name: "Soil Mechanics", creditHours: 8, class: "Core" },
          { code: "MN 221", name: "Drilling and Blasting", creditHours: 12, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "GY 212", name: "Structural Geology I", creditHours: 8, class: "Core" },
          { code: "MN 200", name: "Practical Training in Industry I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 311", name: "Metallic Mineral Deposits", creditHours: 12, class: "Core" },
          { code: "MN 341", name: "Mine Transportation and Materials Handling", creditHours: 12, class: "Core" },
          { code: "MN 321", name: "Surface Mining Methods", creditHours: 12, class: "Core" },
          { code: "MN 324", name: "Rock Mechanics", creditHours: 12, class: "Core" },
          { code: "MN 378", name: "Introduction to Data Analytics in Mining Engineering", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "MN 322", name: "Mine Surveying", creditHours: 12, class: "Core" },
          { code: "MN 325", name: "Geostatistics and Mineral Resource Estimation", creditHours: 12, class: "Core" },
          { code: "MN 326", name: "Underground Mining Methods", creditHours: 12, class: "Core" },
          { code: "MN 350", name: "Mining Engineering Laboratory I", creditHours: 8, class: "Core" },
          { code: "MP 351", name: "Technical and Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "MN 300/MN 390", name: "Practical Training in Industrial III/ Industrial Attachment for Extractive Industry Students", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "MN 480", name: "Mineral Economics", creditHours: 12, class: "Core" },
          { code: "MN 423", name: "Mine Ventilation and Air Conditioning", creditHours: 12, class: "Core" },
          { code: "MN 498", name: "Final Year Project I", creditHours: 8, class: "Core" },
          { code: "MN 450", name: "Mining Engineering Laboratory II", creditHours: 8, class: "Core" },
          { code: "GY 330", name: "Principles of Hydrogeology", creditHours: 12, class: "Core" },
          { code: "MN 410", name: "Mine Safety and Environment", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "MN 481", name: "Mine Management", creditHours: 12, class: "Core" },
          { code: "SC 436", name: "General Engineering Procedures and Ethics", creditHours: 8, class: "Core" },
          { code: "MN 420", name: "Fundamentals of Mine Design", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "MN 499", name: "Final Year Project II", creditHours: 12, class: "Core" },
          { code: "MN 400", name: "Practical Training in Industry III", creditHours: 8, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1025,
    universityId: 2,
    name: "BSc Petroleum Engineering (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering I", creditHours: 8, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "OG 101", name: "Introduction to Petroleum Engineering", creditHours: 12, class: "Core" },
          { code: "CP 105", name: "Materials and Energy Balance", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "OG 112", name: "Workshop Training II", creditHours: 4, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus and Differential Equations for Non-Majors", creditHours: 12, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CH 240", name: "Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 219", name: "Systematic Inorganic Chemistry", creditHours: 8, class: "Core" },
          { code: "CP 211", name: "Chemical Engineering Fluid Mechanics", creditHours: 12, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" },
          { code: "CP 203", name: "Engineering Thermodynamics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 117", name: "Organic Chemistry", creditHours: 12, class: "Core" },
          { code: "OG 260", name: "Computer Application in Petroleum Engineering", creditHours: 12, class: "Core" },
          { code: "OG 241", name: "Reservoir Fluid Properties", creditHours: 12, class: "Core" },
          { code: "CH 270", name: "Chemistry Practical", creditHours: 8, class: "Core" },
          { code: "GY 230", name: "Petroleum Geology I", creditHours: 8, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "OG 100", name: "Practical training I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "OG 320", name: "Petroleum Engineering Systems", creditHours: 12, class: "Core" },
          { code: "OG 321", name: "Drilling 1", creditHours: 12, class: "Core" },
          { code: "OG 334", name: "Petroleum Production", creditHours: 12, class: "Core" },
          { code: "OG 357", name: "Reservoir Petrophysics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "OG 330", name: "Natural Gas Processing", creditHours: 12, class: "Core" },
          { code: "OG 331", name: "Drilling II", creditHours: 12, class: "Core" },
          { code: "OG 310", name: "Industrial Health, Safety and Environmental Protection", creditHours: 12, class: "Core" },
          { code: "OG 341", name: "Reservoir Engineering I", creditHours: 12, class: "Core" },
          { code: "OG 351", name: "Petroleum Engineering Laboratory I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "OG 405", name: "Petroleum Project Evaluation and Economics", creditHours: 12, class: "Core" },
          { code: "CP 426", name: "Process Dynamics and Control", creditHours: 12, class: "Core" },
          { code: "OG 450", name: "Petroleum Engineering Laboratory II", creditHours: 8, class: "Core" },
          { code: "OG 442", name: "Reservoir Engineering II", creditHours: 12, class: "Core" },
          { code: "OG 498", name: "Final Project I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "OG 460", name: "Computer Modelling and Simulation", creditHours: 12, class: "Core" },
          { code: "OG 499", name: "Final Project II", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "OG 300", name: "Practical training III", creditHours: 8, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1026,
    universityId: 2,
    name: "BSc Petroleum Geology (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "PH 122", name: "Classical Mechanics", creditHours: 8, class: "Core" },
          { code: "PH 127", name: "Vibration, Waves and Optics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "GY 125", name: "Introduction to Survey and Mapping", creditHours: 12, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "PH 128", name: "Electromagnetism", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GY 201", name: "Optical Mineralogy", creditHours: 12, class: "Core" },
          { code: "GY 229", name: "Introduction to Geochemistry", creditHours: 12, class: "Core" },
          { code: "GY 230", name: "Petroleum Geology I", creditHours: 8, class: "Core" },
          { code: "GY 250", name: "Crystallography and Mineralogy", creditHours: 12, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Major", creditHours: 12, class: "Core" },
          { code: "GY 265", name: "Geological Mapping I", creditHours: 4, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 271", name: "Statistics for Mathematics Non-Majors", creditHours: 12, class: "Core" },
          { code: "GY 243", name: "Structural Geology", creditHours: 12, class: "Core" },
          { code: "GY 245", name: "Remote Sensing and GIS", creditHours: 12, class: "Core" },
          { code: "GY 260", name: "Sedimentology and Sedimentary Petrology", creditHours: 12, class: "Core" },
          { code: "GY 263", name: "Fundamentals of Geophysics", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 310", name: "Principles of Stratigraphy and Paleontology", creditHours: 12, class: "Core" },
          { code: "GY 314", name: "Igneous and Metamorphic Petrology", creditHours: 12, class: "Core" },
          { code: "GY 336", name: "Introduction to Hydrogeology", creditHours: 12, class: "Core" },
          { code: "GY 338", name: "Petroleum Geophysics", creditHours: 12, class: "Core" },
          { code: "GY 355", name: "Geological mapping II", creditHours: 4, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GY 301", name: "Petroleum Geology II", creditHours: 12, class: "Core" },
          { code: "GY 313", name: "Biostratigraphy", creditHours: 12, class: "Core" },
          { code: "GY 323", name: "Petroleum Geochemistry", creditHours: 8, class: "Core" },
          { code: "GY 349", name: "Data Analysis Methods in Petroleum Geology", creditHours: 12, class: "Core" },
          { code: "GY 352", name: "Marine Geology", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GY 411", name: "Geology and Mineral Resources of Tanzania", creditHours: 12, class: "Core" },
          { code: "GY 418", name: "Sedimentary Basins and Petroleum Systems", creditHours: 12, class: "Core" },
          { code: "GY 449", name: "Technology Review", creditHours: 12, class: "Core" },
          { code: "GY 479", name: "Reservoir Characterization", creditHours: 8, class: "Core" },
          { code: "GY 485", name: "Practical Training", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "GY 405", name: "Independent Project", creditHours: 12, class: "Core" },
          { code: "GY 440", name: "Production Geology", creditHours: 12, class: "Core" },
          { code: "GY 444", name: "Petroleum Geology Review", creditHours: 12, class: "Core" },
          { code: "GY 450", name: "Prospect Assessment, Evaluation and Petroleum Economics", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1027,
    universityId: 2,
    name: "BSc Computer Engineering and Information Technology (UDSM)",
    ntaLevel: 8,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "ES 173", name: "Introduction to Electrical Circuits", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Major", creditHours: 12, class: "Core" },
          { code: "ES 171", name: "Computer Aided Drafting and Design", creditHours: 8, class: "Core" },
          { code: "ES 110", name: "Analogue Electronics I", creditHours: 8, class: "Core" },
          { code: "CS 174", name: "Programming in C", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "IS 158", name: "Computer Hardware and System Maintenance", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus & Diff. Eq. for Non-Major", creditHours: 12, class: "Core" },
          { code: "IS 171", name: "Introduction to Computer Networks", creditHours: 8, class: "Core" },
          { code: "ES 120", name: "Digital Electronics I", creditHours: 8, class: "Core" },
          { code: "CS 175", name: "Programming in Java", creditHours: 12, class: "Core" },
          { code: "TE 172", name: "Workshop Training", creditHours: 8, class: "Core" },
          { code: "CS 173", name: "Business Computer Communication", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "PT1_CS", name: "Practical Training I", creditHours: 8, class: "Core" },
          { code: "ES 211", name: "Analogue Electronics II", creditHours: 8, class: "Core" },
          { code: "CS 151", name: "Computer Organization and Architecture I", creditHours: 12, class: "Core" },
          { code: "CS 211", name: "Measurements & Instrumentation Engineering I", creditHours: 12, class: "Core" },
          { code: "IS 274", name: "Object Oriented Analysis and Design", creditHours: 8, class: "Core" },
          { code: "CS 243", name: "Computer Network Design and Administration", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "ES 221", name: "Digital Electronics II", creditHours: 8, class: "Core" },
          { code: "IS 236", name: "Structured Systems Analysis and Design", creditHours: 8, class: "Core" },
          { code: "CS 252", name: "Computer Organization and Architecture II", creditHours: 12, class: "Core" },
          { code: "CS 234", name: "Object Oriented Programming in Java", creditHours: 12, class: "Core" },
          { code: "CS 212", name: "Measurements and Instrumentation Engineering II", creditHours: 12, class: "Core" },
          { code: "TE 231", name: "Fundamentals of Signals and Systems", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CS 350", name: "Micro Computer Systems I", creditHours: 12, class: "Core" },
          { code: "PT2_CS", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "CS 334", name: "Principles of Operating Systems", creditHours: 12, class: "Core" },
          { code: "CS 335", name: "Software Engineering", creditHours: 12, class: "Core" },
          { code: "IS 264", name: "Principles of Database Systems", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "IS 336", name: "Principles of Systems Security", creditHours: 8, class: "Core" },
          { code: "CS 323", name: "Control Systems Engineering", creditHours: 12, class: "Core" },
          { code: "CS 348", name: "Network Switching and Routing", creditHours: 12, class: "Core" },
          { code: "CS 354", name: "Microcomputer Systems II", creditHours: 8, class: "Core" },
          { code: "CS 356", name: "Embedded Systems", creditHours: 8, class: "Core" },
          { code: "IS 365", name: "Artificial Intelligence", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "PT3_CS", name: "Practical Training III", creditHours: 8, class: "Core" },
          { code: "CS 420", name: "Modern Control Systems Engineering", creditHours: 8, class: "Core" },
          { code: "IS 371", name: "Systems Administration in Linux", creditHours: 8, class: "Core" },
          { code: "CS 433", name: "Software Quality Assurance and Testing", creditHours: 12, class: "Core" },
          { code: "CS 454", name: "Computer Organization and Architecture III", creditHours: 12, class: "Core" },
          { code: "TE 415", name: "Optical Communication", creditHours: 8, class: "Core" },
          { code: "CS 498", name: "Final Year Project I", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "CS 441", name: "Wide Area Networking", creditHours: 8, class: "Core" },
          { code: "CS 499", name: "Final Year Project II", creditHours: 16, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1028,
    universityId: 2,
    name: "BA Economics (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EC 116", name: "Introductory Microeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "EC 117", name: "Introductory Macroeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "AC 100", name: "Principles of Accounting I", creditHours: 12, class: "Core" },
          { code: "ST 120", name: "Basic Mathematics", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research Methods", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "EC 126", name: "Introductory Microeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "EC 127", name: "Introductory Macroeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "AC 101", name: "Principles of Accounting II", creditHours: 12, class: "Core" },
          { code: "ST 112", name: "Introduction to Statistics", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EC 216", name: "Intermediate Microeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "EC 217", name: "Intermediate Macroeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "EC 218", name: "Quantitative Methods I", creditHours: 12, class: "Core" },
          { code: "EC 219", name: "Econometrics I", creditHours: 12, class: "Core" },
          { code: "EC 220", name: "Development Economics I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "EC 226", name: "Intermediate Microeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "EC 227", name: "Intermediate Macroeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "EC 228", name: "Quantitative Methods II", creditHours: 12, class: "Core" },
          { code: "EC 229", name: "Econometrics II", creditHours: 12, class: "Core" },
          { code: "EC 230", name: "Development Economics II", creditHours: 12, class: "Core" },
          { code: "PL 111", name: "Introduction to Critical Thinking and Argumentation", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EC 366", name: "Economic Policy, Planning and Programming I", creditHours: 12, class: "Core" },
          { code: "EC 371", name: "Monetary Economics I", creditHours: 12, class: "Core" },
          { code: "EC 372", name: "Public Finance I", creditHours: 12, class: "Core" },
          { code: "EC 373", name: "International Economics I", creditHours: 12, class: "Core" },
          { code: "EC 384", name: "Applied Quantitative Methods and Econometrics II", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EC 374", name: "Applied Quantitative Methods and Econometrics I", creditHours: 12, class: "Core" },
          { code: "EC 376", name: "Economic Policy, Planning and Programming II", creditHours: 12, class: "Core" },
          { code: "EC 381", name: "Monetary Economics II", creditHours: 12, class: "Core" },
          { code: "EC 382", name: "Public Finance II", creditHours: 12, class: "Core" },
          { code: "EC 383", name: "International Economics II", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1029,
    universityId: 2,
    name: "BA Economics and Statistics (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "EC 116", name: "Introductory Microeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "EC 117", name: "Introductory Macroeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "ST 113", name: "Basic Statistics", creditHours: 12, class: "Core" },
          { code: "ST 121", name: "Analytical Calculus", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research Methods", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspective I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "EC 126", name: "Introductory Microeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "EC 127", name: "Introductory Macroeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "ST 114", name: "Probability Theory I", creditHours: 12, class: "Core" },
          { code: "ST 122", name: "Linear Algebra with Application", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EC 216", name: "Intermediate Microeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "EC 217", name: "Intermediate Macroeconomic Analysis I", creditHours: 12, class: "Core" },
          { code: "EC 219", name: "Econometrics I", creditHours: 12, class: "Core" },
          { code: "ST 210", name: "Probability Distributions I", creditHours: 12, class: "Core" },
          { code: "ST 215", name: "Differential and Difference Equations", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "EC 226", name: "Intermediate Microeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "EC 227", name: "Intermediate Macroeconomic Analysis II", creditHours: 12, class: "Core" },
          { code: "EC 229", name: "Econometrics II", creditHours: 12, class: "Core" },
          { code: "ST 211", name: "Probability Distributions II", creditHours: 12, class: "Core" },
          { code: "ST 212", name: "Statistical Inference I", creditHours: 12, class: "Core" },
          { code: "PL 111", name: "Introduction to Critical Thinking and Argumentation", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EC 371", name: "Monetary Economics I", creditHours: 12, class: "Core" },
          { code: "EC 372", name: "Public Finance I", creditHours: 12, class: "Core" },
          { code: "EC 373", name: "International Economics I", creditHours: 12, class: "Core" },
          { code: "EC 384", name: "Applied Quantitative Methods and Econometrics II", creditHours: 12, class: "Core" },
          { code: "ST 310", name: "Statistical Inference II", creditHours: 12, class: "Core" },
          { code: "ST 316", name: "Statistical Quality Control", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EC 381", name: "Monetary Economics II", creditHours: 12, class: "Core" },
          { code: "EC 382", name: "Public Finance II", creditHours: 12, class: "Core" },
          { code: "EC 383", name: "International Economics II", creditHours: 12, class: "Core" },
          { code: "ST 311", name: "Multivariate Normal Distribution", creditHours: 12, class: "Core" },
          { code: "ST 318", name: "Sampling Theory and Methodology", creditHours: 12, class: "Core" },
          { code: "ST 312", name: "Stochastic Processes", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1030,
    universityId: 2,
    name: "BA Journalism (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "JO 102", name: "Introduction to Journalism", creditHours: 12, class: "Core" },
          { code: "CO 101", name: "Introduction to Mass Communication", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "JE 100", name: "English for the Media", creditHours: 8, class: "Core" },
          { code: "JS 100", name: "Kiswahili for the Media", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "JO 103", name: "Introduction to writing for the Media", creditHours: 8, class: "Core" },
          { code: "JO 104", name: "Journalism History and Issues", creditHours: 8, class: "Core" },
          { code: "CO 103", name: "Technical Basis of Communication", creditHours: 8, class: "Core" },
          { code: "PL 111", name: "Intro. to Critical Thinking and Argumentation", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspective", creditHours: 12, class: "Core" },
          { code: "JO 106", name: "Media Ethics", creditHours: 8, class: "Core" },
          { code: "JO 108", name: "Radio Broadcasting", creditHours: 12, class: "Core" },
          { code: "JO 109", name: "Television Broadcasting", creditHours: 12, class: "Core" },
          { code: "JO 100", name: "Practicum", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "JO 202", name: "News Reporting and Writing for Print Media", creditHours: 12, class: "Core" },
          { code: "CO 208", name: "Television Production", creditHours: 12, class: "Core" },
          { code: "JR 203", name: "Mass Media Research", creditHours: 12, class: "Core" },
          { code: "LW 540", name: "Media Law", creditHours: 12, class: "Core" },
          { code: "CO 201", name: "Theories of Mass Communication", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "JO 204", name: "Photojournalism", creditHours: 12, class: "Core" },
          { code: "JO 206", name: "Advanced Media Ethics", creditHours: 12, class: "Core" },
          { code: "CO 203", name: "Issues in Mass Communication Research", creditHours: 12, class: "Core" },
          { code: "JO 210", name: "Editing, Layout and Graphics", creditHours: 12, class: "Core" },
          { code: "JO 200", name: "Practicum", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "JO 301", name: "Current Affairs and News Analysis", creditHours: 12, class: "Core" },
          { code: "CO 305", name: "New Media Technologies", creditHours: 12, class: "Core" },
          { code: "JO 307", name: "Dissertation I", creditHours: 12, class: "Core" },
          { code: "JO 303", name: "Specialised Writing", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "JO 302", name: "Media Management and Organisation", creditHours: 12, class: "Core" },
          { code: "CO 304", name: "Media Criticism", creditHours: 12, class: "Core" },
          { code: "CO 310", name: "Mass Media and Popular Culture", creditHours: 12, class: "Core" },
          { code: "JO 308", name: "Dissertation II", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
  {
    id: 1031,
    universityId: 2,
    name: "BA Law Enforcement (UDSM)",
    ntaLevel: 7,
    semesters: [
{
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "LWE 103", name: "Legal Method", creditHours: 12, class: "Core" },
          { code: "LE 100", name: "Research Methodology", creditHours: 8, class: "Core" },
          { code: "LE 101", name: "Public Administration and Law Enforcement", creditHours: 12, class: "Core" },
          { code: "LWE 525", name: "Human Rights Law", creditHours: 12, class: "Core" },
          { code: "LE 102", name: "Psychosocial Studies", creditHours: 12, class: "Core" },
          { code: "LWE 100", name: "Constitutional Law", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
        ]
      },
{
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "LE 103", name: "Public Ethics and Law Enforcement", creditHours: 12, class: "Core" },
          { code: "LWE 200", name: "Administrative Law", creditHours: 12, class: "Core" },
          { code: "LWE 201", name: "Public International Law", creditHours: 12, class: "Core" },
          { code: "LE 104", name: "Psychosocial Studies II", creditHours: 12, class: "Core" },
          { code: "LWE 104", name: "Communication Skills for Lawyers", creditHours: 12, class: "Core" },
        ]
      },
{
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "LE 200", name: "Leadership in Law Enforcement", creditHours: 8, class: "Core" },
          { code: "LWE 530", name: "International Humanitarian Law", creditHours: 12, class: "Core" },
          { code: "LWE 102", name: "Criminal Law and Procedure I", creditHours: 12, class: "Core" },
          { code: "LE 201", name: "Management in Law Enforcement", creditHours: 12, class: "Core" },
          { code: "LE 202", name: "Public Health and Environment", creditHours: 8, class: "Core" },
        ]
      },
{
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [{ code: "ST 113", name: "Basic Statistics and Law Enforcement", creditHours: 12, class: "Core" },
{ code: "LE 204", name: "Juvenile Justice Law", creditHours: 12, class: "Core" },
{ code: "LWE 467", name: "Gender and the Law", creditHours: 12, class: "Core" },
{ code: "LE 205", name: "Logistics and Law Enforcement", creditHours: 8, class: "Core" },
{ code: "LWE 204", name: "Law of Evidence", creditHours: 12, class: "Core" },
{ code: "LE 400", name: "Series Select from list of optional courses", creditHours: 8, class: "Core" }]
      },
{
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "LE 300", name: "Techno-mathematics in Law Enforcement", creditHours: 8, class: "Core" },
          { code: "LE 301", name: "Trans-national Crimes Law", creditHours: 8, class: "Core" },
          { code: "LE 302", name: "Communication Technology in Law Enforcement", creditHours: 8, class: "Core" },
          { code: "LE 303", name: "Security Procedures & Firearms Management", creditHours: 8, class: "Core" },
          { code: "LE 304", name: "Legal Aspects of Community Engagement", creditHours: 12, class: "Core" },
          { code: "LE 305", name: "Dissertation", creditHours: 12, class: "Core" },
        ]
      },
{
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "LWE 463", name: "Criminology and Penology", creditHours: 12, class: "Core" },
          { code: "LWE 106", name: "Criminal Law and Procedure II", creditHours: 12, class: "Core" },
          { code: "LE 306", name: "International Law Enforcement", creditHours: 12, class: "Core" },
          { code: "LE 307", name: "Law Enforcement Intelligence and Application", creditHours: 12, class: "Core" },
          { code: "LE 308", name: "Forensic Science and Law Enforcement", creditHours: 12, class: "Core" },
        ]
      }
      ]
  },
  {
    id: 1032,
    universityId: 2,
    name: "BA Public Relations and Advertising (UDSM)",
    ntaLevel: 7,
    semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CO 101", name: "Introduction to Mass Communication", creditHours: 12, class: "Core" },
          { code: "PR 101", name: "Intro to Public Relations and Advertising", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "JE 100", name: "English for the Media", creditHours: 8, class: "Core" },
          { code: "JS 100", name: "Kiswahili for the Media", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "JO 103", name: "Introduction to Writing for the Media", creditHours: 8, class: "Core" },
          { code: "PR 102", name: "Psychology of Advertising", creditHours: 8, class: "Core" },
          { code: "PR 104", name: "Public Opinion and Public Relations", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CO 103", name: "Technical Basis of Communication", creditHours: 8, class: "Core" },
          { code: "PL 111", name: "Intro. to Critical Thinking and Argumentation", creditHours: 8, class: "Core" },
          { code: "PR 100", name: "Practicum", creditHours: 8, class: "Core" },
          { code: "JO 108", name: "Radio Broadcasting", creditHours: 12, class: "Core" },
          { code: "JO 109", name: "Television Production", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CO 201", name: "Theories of Mass Communication", creditHours: 12, class: "Core" },
          { code: "PR 201", name: "Mass Media and Public Relations", creditHours: 12, class: "Core" },
          { code: "PR 203", name: "Advertising, Layout and Production", creditHours: 12, class: "Core" },
          { code: "JR 203", name: "Mass Media Research", creditHours: 12, class: "Core" },
          { code: "PR 207", name: "Ethics and Professional Responsibilities in Public Relations", creditHours: 12, class: "Core" },
          { code: "LW 540", name: "Media Law", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "PR 202", name: "Media and Contemporary Issues", creditHours: 12, class: "Core" },
          { code: "CO 203", name: "Issues in Mass Communication Research", creditHours: 12, class: "Core" },
          { code: "PR 204", name: "Mass Media Advertising and Sales Promotion", creditHours: 12, class: "Core" },
          { code: "PR 206", name: "Writing for Public Relations", creditHours: 12, class: "Core" },
          { code: "PR 200", name: "Practicum", creditHours: 8, class: "Core" },
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "PR 301", name: "Advertising and Public Relations Campaign", creditHours: 12, class: "Core" },
          { code: "CO 305", name: "New Media Technologies", creditHours: 12, class: "Core" },
          { code: "PR 309", name: "Propaganda and Persuasion", creditHours: 12, class: "Core" },
          { code: "PR 305", name: "Advanced Advertising Issues", creditHours: 12, class: "Core" },
          { code: "PR 307", name: "Dissertation I", creditHours: 12, class: "Core" },
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "PR 302", name: "Special Issues in Advertising", creditHours: 12, class: "Core" },
          { code: "PR 304", name: "Media Representation and Perception", creditHours: 12, class: "Core" },
          { code: "PR 306", name: "Public Relations Organisation and Management", creditHours: 12, class: "Core" },
          { code: "PR 308", name: "Dissertation II", creditHours: 12, class: "Core" },
        ]
      },
    ]
  },
    {
      id: 1033,
      universityId: 2,
      name: "Bachelor of Architecture (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AR 111", name: "Studio Design Project I", creditHours: 16, class: "Core" },
          { code: "AR 121", name: "Architectural Graphics I", creditHours: 8, class: "Core" },
          { code: "AR 131", name: "History and Theory of Architecture I", creditHours: 8, class: "Core" },
          { code: "AR 151", name: "Building Materials I", creditHours: 8, class: "Core" },
          { code: "SC 161", name: "Mechanics for Architects", creditHours: 8, class: "Core" },
          { code: "TW 107", name: "Building, Setting out, Formwork & Brick Work Skills", creditHours: 6, class: "Core" },
          { code: "TW 113", name: "Carpentry and Joinery", creditHours: 6, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 8, class: "Core" },
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AR 112", name: "Studio Design Project II", creditHours: 16, class: "Core" },
          { code: "AR 122", name: "Architectural Graphics II", creditHours: 8, class: "Core" },
          { code: "AR 132", name: "History and Theory of Architecture II", creditHours: 8, class: "Core" },
          { code: "AR 152", name: "Building Materials II", creditHours: 8, class: "Core" },
          { code: "SC 155", name: "Building Construction I", creditHours: 8, class: "Core" },
          { code: "TR 168", name: "Introduction to Geomatics for Architects", creditHours: 8, class: "Core" },
          { code: "TW 151", name: "Welding and Fabrication", creditHours: 6, class: "Core" },
          { code: "TW 145", name: "Plumbing Skills and Pipe Fittings Installations", creditHours: 6, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AR 213", name: "Studio Design Project III", creditHours: 20, class: "Core" },
          { code: "AR 233", name: "History of World Architecture", creditHours: 8, class: "Core" },
          { code: "SC 220", name: "Building Materials II", creditHours: 8, class: "Core" },
          { code: "AR 232", name: "Building Services I", creditHours: 8, class: "Core" },
          { code: "SC 202", name: "Building Economics", creditHours: 8, class: "Core" },
          { code: "SC 223", name: "Building Structures I", creditHours: 8, class: "Core" },
          { code: "AR 223", name: "Architectural Rendering", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AR 224", name: "Architectural Graphics - Computer Aided", creditHours: 8, class: "Core" },
          { code: "AR 214", name: "Studio Design Project IV", creditHours: 24, class: "Core" },
          { code: "AR 254", name: "Professional Practice I", creditHours: 12, class: "Core" },
          { code: "AR 261", name: "Settlement Planning", creditHours: 8, class: "Core" },
          { code: "AR 243", name: "Building Services II", creditHours: 8, class: "Core" },
          { code: "AR 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "AR 315", name: "Studio Design Project V", creditHours: 24, class: "Core" },
          { code: "SC 311", name: "Building Services III", creditHours: 8, class: "Core" },
          { code: "AR 364", name: "Urban Design", creditHours: 8, class: "Core" },
          { code: "AR 354", name: "Professional Practice II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "AR 316", name: "Studio Design Project VI", creditHours: 24, class: "Core" },
          { code: "SC 323", name: "Analysis of Building Structures", creditHours: 8, class: "Core" },
          { code: "SC 301", name: "Building Construction II", creditHours: 8, class: "Core" },
          { code: "AR 372", name: "Architectural Specification", creditHours: 8, class: "Core" },
          { code: "AR 334", name: "Architectural Conservation", creditHours: 8, class: "Core" },
          { code: "AR 200", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "AR 417", name: "Studio Design Project VII", creditHours: 24, class: "Core" },
          { code: "SC 403", name: "Research Methodology", creditHours: 8, class: "Core" },
          { code: "WR 470", name: "Environmental Impact Assessment", creditHours: 12, class: "Core" },
          { code: "AR 452", name: "Architectural Project Management", creditHours: 8, class: "Core" },
          { code: "SC 423", name: "Building structures II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "AR 462", name: "Urban Sociology", creditHours: 8, class: "Core" },
          { code: "AR 451", name: "Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "SC 404", name: "Project Procurement", creditHours: 8, class: "Core" },
          { code: "AR 300", name: "Practical Training III", creditHours: 8, class: "Core" },
          { code: "AR 418", name: "Studio Design Project VIII", creditHours: 24, class: "Core" }
        ]
      },
      {
        semesterNumber: 9,
        semesterName: "Semester IX",
        modules: [
          { code: "AR 585", name: "Studio Design Project IX", creditHours: 36, class: "Core" },
          { code: "AR 598", name: "Final Project 1", creditHours: 24, class: "Core" }
        ]
      },
      {
        semesterNumber: 10,
        semesterName: "Semester X",
        modules: [
          { code: "AR 599", name: "Final Project 2", creditHours: 60, class: "Core" },
          { code: "AR 400", name: "Practical Training IV", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1034,
      universityId: 2,
      name: "BSc Quantity Surveying (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineering", creditHours: 8, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 8, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 8, class: "Core" },
          { code: "EC 116", name: "Introduction to Micro Economics", creditHours: 8, class: "Core" },
          { code: "SC 112", name: "Civil Engineering Materials I", creditHours: 12, class: "Core" },
          { code: "QS 176", name: "Introduction to Information Technology", creditHours: 8, class: "Core" },
          { code: "TR 111", name: "Engineering Surveying I", creditHours: 8, class: "Core" },
          { code: "QS 122", name: "Building Technology I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "SC 113", name: "Civil Engineering Materials II", creditHours: 8, class: "Core" },
          { code: "SC 101", name: "Mechanics of Materials", creditHours: 8, class: "Core" },
          { code: "QS 132", name: "Measurement of Building Works I", creditHours: 12, class: "Core" },
          { code: "QS 125", name: "Building Technology II", creditHours: 12, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 8, class: "Core" },
          { code: "TR 112", name: "Engineering Surveying II", creditHours: 8, class: "Core" },
          { code: "QS 151", name: "Project Work I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 271", name: "Statistics for Non Majors", creditHours: 12, class: "Core" },
          { code: "SC 212", name: "Civil Engineering Materials II", creditHours: 8, class: "Core" },
          { code: "QS 213", name: "Design of Structures I", creditHours: 8, class: "Core" },
          { code: "QS 222", name: "Building Technology III", creditHours: 12, class: "Core" },
          { code: "QS 232", name: "Measurement of Building Works II", creditHours: 12, class: "Core" },
          { code: "SC 202", name: "Building Economics", creditHours: 8, class: "Core" },
          { code: "QS 243", name: "Law for Quantity Surveyors I", creditHours: 8, class: "Core" },
          { code: "QS 251", name: "Project Work II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "QS 214", name: "Design of Structures II", creditHours: 8, class: "Core" },
          { code: "QS 223", name: "Building Services", creditHours: 12, class: "Core" },
          { code: "QS 224", name: "Building Construction I", creditHours: 12, class: "Core" },
          { code: "QS 239", name: "Measurement of Building Works III", creditHours: 12, class: "Core" },
          { code: "QS 241", name: "Management Theory", creditHours: 12, class: "Core" },
          { code: "QS 252", name: "Project Work III", creditHours: 8, class: "Core" },
          { code: "QS 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "QS 324", name: "Civil Engineering Construction II", creditHours: 8, class: "Core" },
          { code: "QS 333", name: "Measurement of Civil Engineering Works I", creditHours: 12, class: "Core" },
          { code: "QS 334", name: "Measurement of Building Services", creditHours: 12, class: "Core" },
          { code: "QS 336", name: "Estimating and Price Analysis", creditHours: 8, class: "Core" },
          { code: "QS 343", name: "Law for Quantity Surveyor II", creditHours: 8, class: "Core" },
          { code: "QS 351", name: "Project Work IV", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "QS 339", name: "Measurement of Civil Engineering Works II", creditHours: 12, class: "Core" },
          { code: "QS 335", name: "Construction Economics I", creditHours: 12, class: "Core" },
          { code: "QS 338", name: "Procurement", creditHours: 12, class: "Core" },
          { code: "QS 344", name: "Financial Accounting", creditHours: 8, class: "Core" },
          { code: "QS 352", name: "Project Work V", creditHours: 8, class: "Core" },
          { code: "QS 200", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "QS 435", name: "Construction Economics II", creditHours: 12, class: "Core" },
          { code: "QS 437", name: "Contract Administration", creditHours: 12, class: "Core" },
          { code: "QS 442", name: "Construction Management", creditHours: 12, class: "Core" },
          { code: "QS 452", name: "Architectural Project Management", creditHours: 8, class: "Core" },
          { code: "AR 451", name: "Project Work VI", creditHours: 8, class: "Core" },
          { code: "SC 312", name: "Research Methodology", creditHours: 8, class: "Core" },
          { code: "QS 498", name: "Final Project I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 432", name: "Ethics and Professional Practice", creditHours: 8, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "SC 404", name: "Project Procurement", creditHours: 8, class: "Core" },
          { code: "QS 300", name: "Practical Training III", creditHours: 8, class: "Core" },
          { code: "QS 499", name: "Final Year Project II", creditHours: 16, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1035,
      universityId: 2,
      name: "BSc Geomatics (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "GT 111", name: "Introduction to Surveying", creditHours: 12, class: "Core" },
          { code: "GT 115", name: "Principles of Cartography", creditHours: 12, class: "Core" },
          { code: "GT 173", name: "Physics for Geomaticians", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "GT 112", name: "Topographic Surveying", creditHours: 8, class: "Core" },
          { code: "EE 131", name: "Fundamentals of Electronics for Engineers", creditHours: 12, class: "Core" },
          { code: "GT 156", name: "Introduction to Photogrametry", creditHours: 12, class: "Core" },
          { code: "EE 172", name: "Computer Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "GT 163", name: "Computer Programming for Geomatics", creditHours: 12, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus and Differential Equations for Non-Majors", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 261", name: "Several Variable Calculus for Non Majors", creditHours: 12, class: "Core" },
          { code: "GT 213", name: "Electronic Surveying", creditHours: 12, class: "Core" },
          { code: "GT 221", name: "Introduction to Engineering Surveying", creditHours: 12, class: "Core" },
          { code: "GT 241", name: "Spherical and Ellipsoidal Geometry", creditHours: 8, class: "Core" },
          { code: "GT 257", name: "Remote Sensing Principles and Applications", creditHours: 8, class: "Core" },
          { code: "LW 202", name: "Land Law I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 271", name: "Statistics for Non Majors", creditHours: 12, class: "Core" },
          { code: "GT 214", name: "Cadastral Surveying", creditHours: 12, class: "Core" },
          { code: "GT 231", name: "Adjustment Theory", creditHours: 12, class: "Core" },
          { code: "GT 272", name: "Urban Planning and Design Theory", creditHours: 12, class: "Core" },
          { code: "GT 281", name: "Project I: Cadastral Surveying", creditHours: 12, class: "Core" },
          { code: "LW 207", name: "Land Law II", creditHours: 12, class: "Core" },
          { code: "GT 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GE 353", name: "Geographical Information Systems (GIS)", creditHours: 12, class: "Core" },
          { code: "GT 342", name: "Geometrical Geodesy", creditHours: 8, class: "Core" },
          { code: "GT 351", name: "Space Geodetic Techniques", creditHours: 8, class: "Core" },
          { code: "GT 355", name: "Satellite Surveying", creditHours: 12, class: "Core" },
          { code: "GT 362", name: "Numerical Methods", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GT 333", name: "Applied Adjustment Theory", creditHours: 12, class: "Core" },
          { code: "GT 332", name: "Control Surveys", creditHours: 8, class: "Core" },
          { code: "GT 324", name: "Mine Surveying", creditHours: 12, class: "Core" },
          { code: "GT 343", name: "Map Projections", creditHours: 8, class: "Core" },
          { code: "GT 352", name: "Physical Geodesy", creditHours: 8, class: "Core" },
          { code: "GT 361", name: "Differential Geometry", creditHours: 8, class: "Core" },
          { code: "GT 358", name: "Database Management Systems", creditHours: 8, class: "Core" },
          { code: "GT 382", name: "Project II: Control Surveying", creditHours: 12, class: "Core" },
          { code: "GT 200", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GT 422", name: "Engineering Surveying for Geomaticians", creditHours: 12, class: "Core" },
          { code: "GT 453", name: "Geophysics for Geomaticians", creditHours: 8, class: "Core" },
          { code: "GT 454", name: "Earth Gravity Field and its Applications", creditHours: 8, class: "Core" },
          { code: "QS 452", name: "Architectural Project Management", creditHours: 8, class: "Core" },
          { code: "EI 354", name: "Engineering Project Management", creditHours: 8, class: "Core" },
          { code: "GT 483", name: "Project III: Engineering Surveying", creditHours: 12, class: "Core" },
          { code: "GT 498", name: "Final Year Project I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "GT 423", name: "Hydrographic Surveying", creditHours: 12, class: "Core" },
          { code: "GT 471", name: "Industrial Metrology", creditHours: 12, class: "Core" },
          { code: "GT 300", name: "Practical Training III", creditHours: 8, class: "Core" },
          { code: "GT 499", name: "Final Year Project II", creditHours: 16, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1036,
      universityId: 2,
      name: "BSc Electrical Engineering (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "TW 107", name: "Building, Setting Out, Formwork & Brick Work Skills", creditHours: 6, class: "Core" },
          { code: "TW 125", name: "Practical Electronics Engineering", creditHours: 6, class: "Core" },
          { code: "EE 171", name: "Principles of Computer programming", creditHours: 8, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non- Majors", creditHours: 12, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "TW 107", name: "Building, Setting Out, Formwork & Brick Work Skills", creditHours: 6, class: "Core" },
          { code: "TW 125", name: "Practical Electronics Engineering", creditHours: 6, class: "Core" },
          { code: "EE 131", name: "Fundamentals of Electronics", creditHours: 12, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering", creditHours: 12, class: "Core" },
          { code: "EE 153", name: "Computer Aided Drafting for Electrical and Electronics Engineers", creditHours: 8, class: "Core" },
          { code: "EE 172", name: "Modelling and Simulations for Engineers", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus and Differential Equation for Non-Majors NOTE: A student shall take only two TW courses per semester", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EE 221", name: "High Voltage Engineering", creditHours: 12, class: "Core" },
          { code: "EE 231", name: "Electronics for Engineers I", creditHours: 8, class: "Core" },
          { code: "EE 241", name: "Measurements and Instrumentation Engineering I", creditHours: 12, class: "Core" },
          { code: "EE 251", name: "Electrical Network Analysis I", creditHours: 8, class: "Core" },
          { code: "EE 253", name: "Engineering Electromagnetics I", creditHours: 8, class: "Core" },
          { code: "ME 213", name: "Electrical and Electronic Materials", creditHours: 8, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "EE 222", name: "Electrical Power Transmission and Distribution", creditHours: 12, class: "Core" },
          { code: "EE 242", name: "Measurements and Instrumentation Engineering II", creditHours: 12, class: "Core" },
          { code: "EE 252", name: "Electrical Network Analysis II", creditHours: 8, class: "Core" },
          { code: "EE 254", name: "Engineering Electromagnetics II", creditHours: 8, class: "Core" },
          { code: "ME 207", name: "Mechanics of Machines", creditHours: 8, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "EE 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "EE 311", name: "Electrical Machines I", creditHours: 12, class: "Core" },
          { code: "EE 313", name: "Power Electronics I", creditHours: 8, class: "Core" },
          { code: "EE 321", name: "Electrical Power System Analysis I", creditHours: 8, class: "Core" },
          { code: "EE 331", name: "Electronics for Engineers II", creditHours: 12, class: "Core" },
          { code: "EE 341", name: "Control Systems Engineering I Elective (Minimum 3.0 Units) 12E 1", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "EE 312", name: "Electrical Machines II", creditHours: 12, class: "Core" },
          { code: "EE 314", name: "Power Electronics II", creditHours: 8, class: "Core" },
          { code: "EE 322", name: "Electrical Power System Analysis II", creditHours: 8, class: "Core" },
          { code: "EE 323", name: "Electrical Power Utilization", creditHours: 12, class: "Core" },
          { code: "EE 342", name: "Control Systems Engineering II", creditHours: 12, class: "Core" },
          { code: "EE 200", name: "Practical Training II Elective (Minimum 3.0 Units) 12E 2 Elective courses for third year of study", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "EE 411", name: "Electrical Machine III", creditHours: 12, class: "Core" },
          { code: "EE 421", name: "Electrical Power Plants", creditHours: 8, class: "Core" },
          { code: "EE 422", name: "Power System Operation & Control", creditHours: 12, class: "Core" },
          { code: "IE 443", name: "Industrial Safety and Maintenance", creditHours: 8, class: "Core" },
          { code: "EE 498", name: "Final Project I Elective (Minimum 3.0 Units) 12E 1", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "EE 423", name: "Switchgear and Protection Engineering", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 499", name: "Final Project II", creditHours: 12, class: "Core" },
          { code: "EE 300", name: "Practical Training III Elective (Minimum 3.0 Units) 12E 2 Elective courses for fourth year of study", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1037,
      universityId: 2,
      name: "BSc Chemical and Process Engineering (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "MT 161", name: "Matrices and Basic Calculus for Non- Majors", creditHours: 12, class: "Core" },
          { code: "CP 111", name: "Workshop Training, I", creditHours: 4, class: "Core" },
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering I", creditHours: 8, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "CP 102", name: "Fundamentals of Chemical and Biochemical Engineering", creditHours: 8, class: "Core" },
          { code: "EE 172", name: "Computer Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "CP 105", name: "Materials and Energy Balance", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CP 112", name: "Workshop Training II", creditHours: 4, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus & Diff. Equations for Non-Majors", creditHours: 12, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CH 240", name: "Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "ME 201", name: "Design Methodology", creditHours: 8, class: "Core" },
          { code: "ME 206", name: "Strength of Materials II", creditHours: 12, class: "Core" },
          { code: "CP 203", name: "Engineering Thermodynamics", creditHours: 12, class: "Core" },
          { code: "CP 211", name: "Chemical Engineering Fluid Mechanics", creditHours: 12, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 117", name: "Organic Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 219", name: "Systematic Inorganic Chemistry", creditHours: 8, class: "Core" },
          { code: "CH 270", name: "Chemical Engineering Laboratory I", creditHours: 8, class: "Core" },
          { code: "CP 209", name: "Biochemical Engineering", creditHours: 12, class: "Core" },
          { code: "CP 260", name: "Computer Application in Chemical 2 Core", creditHours: 12, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "CP 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CP 330", name: "Unit Operations I", creditHours: 12, class: "Core" },
          { code: "IE 340", name: "Engineering Operations Management", creditHours: 12, class: "Core" },
          { code: "CP 320", name: "Quality Control in Chemical and Food Industries Elective I (minimum) 12 1", creditHours: 8, class: "Core" },
          { code: "CP 350", name: "Chemical Engineering Laboratory II", creditHours: 8, class: "Core" },
          { code: "IE 440", name: "Engineering Economics", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "CP 340", name: "Heat and Mass Transfer", creditHours: 12, class: "Core" },
          { code: "CP 325", name: "Process Plant Equipment", creditHours: 12, class: "Core" },
          { code: "CP 327", name: "Reaction Engineering", creditHours: 12, class: "Core" },
          { code: "CP 310", name: "Elements of Environmental Engineering", creditHours: 12, class: "Core" },
          { code: "CP 200", name: "Practical Training II Elective II (minimum) 12 2 Third Year Elective Courses", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "CP 432", name: "Unit Operations II", creditHours: 12, class: "Core" },
          { code: "CP 425", name: "Plant Design and Economics", creditHours: 12, class: "Core" },
          { code: "CP 498", name: "Final Project I", creditHours: 8, class: "Core" },
          { code: "IE 443", name: "Industrial Safety and Maintenance", creditHours: 8, class: "Core" },
          { code: "CP 426", name: "Process Dynamics and Control", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "CP 435", name: "Gas and Petroleum Processing", creditHours: 8, class: "Core" },
          { code: "CP 450", name: "Chemical Engineering Laboratory III", creditHours: 8, class: "Core" },
          { code: "CP 499", name: "Final Project II", creditHours: 12, class: "Core" },
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "CP 300", name: "Practical Training III", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1038,
      universityId: 2,
      name: "BSc Mechanical Engineering (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Principles of Computer Programming", creditHours: 8, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "TW 139", name: "Metal Cutting and Machine Tools Practice", creditHours: 6, class: "Core" },
          { code: "TW 151", name: "Welding and Fabrication Practices", creditHours: 6, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "EE 131", name: "Fundamentals of Electronics", creditHours: 8, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering", creditHours: 12, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I", creditHours: 8, class: "Core" },
          { code: "TW 134", name: "Electrical Machines and Installation Practice", creditHours: 6, class: "Core" },
          { code: "TW 125", name: "Practical Electronics Engineering", creditHours: 6, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus and Differential 12E Core", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "ME 201", name: "Design Methodology", creditHours: 8, class: "Core" },
          { code: "ME 206", name: "Strength of Materials II", creditHours: 12, class: "Core" },
          { code: "ME 218", name: "Materials Technology I", creditHours: 12, class: "Core" },
          { code: "ME 228", name: "Mechanics of Fluids", creditHours: 12, class: "Core" },
          { code: "EE 243", name: "Measurements and Instrumentation for Non- majors", creditHours: 8, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-majors", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "ME 202", name: "Machine Elements and Design I", creditHours: 12, class: "Core" },
          { code: "ME 208", name: "Dynamics", creditHours: 8, class: "Core" },
          { code: "ME 219", name: "Materials Technology II", creditHours: 12, class: "Core" },
          { code: "ME 226", name: "Thermodynamics", creditHours: 12, class: "Core" },
          { code: "ME 232", name: "Manufacturing Technology I", creditHours: 12, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-majors", creditHours: 12, class: "Core" },
          { code: "ME 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "ME 302", name: "Machine Elements and Design II", creditHours: 12, class: "Core" },
          { code: "ME 303", name: "Computer Aided Design", creditHours: 8, class: "Core" },
          { code: "ME 324", name: "Mechanical Control Systems", creditHours: 8, class: "Core" },
          { code: "ME 332", name: "Manufacturing Technology II", creditHours: 12, class: "Core" },
          { code: "IE 340", name: "Engineering Operations Management", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "ME 309", name: "Design Project", creditHours: 8, class: "Core" },
          { code: "ME 325", name: "Turbomachinery", creditHours: 8, class: "Core" },
          { code: "ME 326", name: "Combustion and Heat Transfer", creditHours: 12, class: "Core" },
          { code: "ME 329", name: "Internal Combustion Engines", creditHours: 8, class: "Core" },
          { code: "ME 334", name: "Computer Aided Manufacturing", creditHours: 8, class: "Core" },
          { code: "IE 399", name: "Research Methods for Engineers", creditHours: 8, class: "Core" },
          { code: "ME 200", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "ME 402", name: "Material Handling Systems", creditHours: 8, class: "Core" },
          { code: "ME 431", name: "Industrial Automation", creditHours: 8, class: "Core" },
          { code: "IE 440", name: "Engineering Economics", creditHours: 8, class: "Core" },
          { code: "IE 443", name: "Industrial Safety and Maintenance", creditHours: 8, class: "Core" },
          { code: "ME 428", name: "Computational Fluid Dynamics", creditHours: 12, class: "Core" },
          { code: "ME 498", name: "Final Project I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "ME 408", name: "Noise and Vibration Control", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "ME 499", name: "Final Project II", creditHours: 12, class: "Core" },
          { code: "ME 300", name: "Practical Training III", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1039,
      universityId: 2,
      name: "BSc Industrial Engineering (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CL 111", name: "Communication Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Principles of Computers Programming", creditHours: 8, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "IE 120", name: "Fundamentals of Industrial and Systems Engineering", creditHours: 8, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-majors", creditHours: 12, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
          { code: "TW 139", name: "Metal Cutting and Machine Tools Practice", creditHours: 6, class: "Core" },
          { code: "TW 151", name: "Welding and Fabrication", creditHours: 6, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering", creditHours: 12, class: "Core" },
          { code: "EE 172", name: "Computer Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" },
          { code: "ME 106", name: "Strength of Materials I", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus and Diff. Equations for Non majors", creditHours: 12, class: "Core" },
          { code: "TW 134", name: "Electrical Machines and Installation Practice", creditHours: 6, class: "Core" },
          { code: "TW 125", name: "Practical Electronics Engineering", creditHours: 6, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "IE 201", name: "Design of Work Systems", creditHours: 8, class: "Core" },
          { code: "IE 220", name: "Productivity and Business Competitiveness", creditHours: 8, class: "Core" },
          { code: "ME 201", name: "Design Methodology", creditHours: 8, class: "Core" },
          { code: "CS 231", name: "Computer Programming in Java", creditHours: 8, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-majors", creditHours: 12, class: "Core" },
          { code: "IE 255", name: "Industrial Information System", creditHours: 8, class: "Core" },
          { code: "ME 206", name: "Strength of Material II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "ME 202", name: "Machine Elements and Design I", creditHours: 12, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-majors", creditHours: 12, class: "Core" },
          { code: "IE 232", name: "Human Factors Engineering", creditHours: 12, class: "Core" },
          { code: "CS 232", name: "Web Technologies", creditHours: 8, class: "Core" },
          { code: "ME 226", name: "Thermodynamics", creditHours: 12, class: "Core" },
          { code: "IE 260", name: "Product Design", creditHours: 8, class: "Core" },
          { code: "IE 245", name: "Industrial Logistics Engineering", creditHours: 8, class: "Core" },
          { code: "EI 100", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "IE 340", name: "Engineering Operations Management", creditHours: 12, class: "Core" },
          { code: "IE 354", name: "Engineering Project Management", creditHours: 12, class: "Core" },
          { code: "ME 303", name: "Computer Aided Design", creditHours: 8, class: "Core" },
          { code: "IE 370", name: "Decision Support System Engineering", creditHours: 8, class: "Core" },
          { code: "IE 347", name: "Industrial System Engineering", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "ME 326", name: "Combustion and Heat Transfer", creditHours: 8, class: "Core" },
          { code: "IE 355", name: "Quality Engineering and Management", creditHours: 8, class: "Core" },
          { code: "IE 365", name: "Industrial Systems Simulation", creditHours: 12, class: "Core" },
          { code: "ME 334", name: "Computer Aided Manufacturing", creditHours: 8, class: "Core" },
          { code: "ME 327", name: "Industrial Energy Management", creditHours: 12, class: "Core" },
          { code: "IE 399", name: "Research Methods for Engineers", creditHours: 8, class: "Core" },
          { code: "EI 200", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "ME 431", name: "Industrial Automation", creditHours: 8, class: "Core" },
          { code: "IE 440", name: "Engineering Economics", creditHours: 8, class: "Core" },
          { code: "IE 442", name: "Operations Research", creditHours: 8, class: "Core" },
          { code: "IE 443", name: "Industrial Safety and Maintenance", creditHours: 8, class: "Core" },
          { code: "IE 446", name: "Innovation Management", creditHours: 8, class: "Core" },
          { code: "IE 498", name: "Final Project I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "IE 448", name: "Database Design and Analysis", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "IE 499", name: "Final Project II", creditHours: 12, class: "Core" },
          { code: "EI 300", name: "Practical Training III", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1040,
      universityId: 2,
      name: "BSc Textile Design and Technology (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CL 111", name: "Communications Skills for Engineers", creditHours: 8, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Computers Programming for Engineers", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "TX 101", name: "Apparel Technology", creditHours: 12, class: "Core" },
          { code: "TX 103", name: "Mathematics for Textile Designers I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "TX 107", name: "Principles of Textile Design", creditHours: 12, class: "Core" },
          { code: "TX 105", name: "Pattern Design and Development", creditHours: 12, class: "Core" },
          { code: "TX 108", name: "Mathematics for Textile Designers II", creditHours: 8, class: "Core" },
          { code: "ME 103", name: "Computer Aided Drafting", creditHours: 8, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "TX 104", name: "Fibre Science", creditHours: 8, class: "Core" },
          { code: "TX 106", name: "3D Workshop", creditHours: 12, class: "Core" },
          { code: "TX 109", name: "Textile Chemistry", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "TX 203", name: "Introduction to Textile Processes", creditHours: 12, class: "Core" },
          { code: "TX 201", name: "Fibre Physics", creditHours: 8, class: "Core" },
          { code: "TX 205", name: "Textile Design with Fabrics", creditHours: 12, class: "Core" },
          { code: "TX 211", name: "Fashion Design", creditHours: 12, class: "Core" },
          { code: "TX 202", name: "Basic Textile Chemistry", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "TX 206", name: "Creative Fashion Design", creditHours: 12, class: "Core" },
          { code: "TX 204", name: "Textile Physics", creditHours: 8, class: "Core" },
          { code: "TX 207", name: "Textile Processes", creditHours: 8, class: "Core" },
          { code: "TX 217", name: "Textile Chemistry", creditHours: 8, class: "Core" },
          { code: "TX 208", name: "Garment Technology", creditHours: 12, class: "Core" },
          { code: "TX 210", name: "Surface Textile Design", creditHours: 12, class: "Core" },
          { code: "TX 218", name: "Introduction to Interior Design", creditHours: 8, class: "Core" },
          { code: "PT 1", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "TX 301", name: "Textile Design with Garments", creditHours: 12, class: "Core" },
          { code: "TX 302", name: "Distribution and Logistics", creditHours: 8, class: "Core" },
          { code: "TX 315", name: "Coloration and Finishing Technology", creditHours: 8, class: "Core" },
          { code: "TX 305", name: "Marketing in Textiles", creditHours: 8, class: "Core" },
          { code: "MG 340", name: "Engineering Operations Management I", creditHours: 8, class: "Core" },
          { code: "TX 323", name: "Interior Design Technology", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "TX 307", name: "Colour Science and Technology", creditHours: 12, class: "Core" },
          { code: "TX 304", name: "CAD/CAM for Textiles", creditHours: 8, class: "Core" },
          { code: "TX 308", name: "Product Analysis", creditHours: 8, class: "Core" },
          { code: "TX 309", name: "Garment Pattern and Sample Development", creditHours: 12, class: "Core" },
          { code: "TX 310", name: "Supply Chain Management", creditHours: 12, class: "Core" },
          { code: "PT 2", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "TX 498", name: "Final Project I", creditHours: 8, class: "Core" },
          { code: "TX 401", name: "Textile and Fashion Product Development", creditHours: 12, class: "Core" },
          { code: "TX 402", name: "Textile and Fashion Retail Promotion", creditHours: 12, class: "Core" },
          { code: "TX 406", name: "Environmental Aspects in Textile and Allied Industries", creditHours: 8, class: "Core" },
          { code: "TX 414", name: "Textile Quality Improvement", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "TX 499", name: "Final Project II", creditHours: 16, class: "Core" },
          { code: "TX 404", name: "Textile and Fashion Visualization", creditHours: 12, class: "Core" },
          { code: "MG 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "PT 3", name: "Practical Training III", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1041,
      universityId: 2,
      name: "BSc Textile Engineering (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "CL 111", name: "Communications Skills for Engineers", creditHours: 12, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 8, class: "Core" },
          { code: "EE 171", name: "Principles of Computer Programmig", creditHours: 8, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "SC 121", name: "Statics", creditHours: 12, class: "Core" },
          { code: "TW 119", name: "Fundamentals of Chemical and Process Engineering and Practice", creditHours: 6, class: "Core" },
          { code: "TW 151", name: "Welding and Fabrication", creditHours: 6, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "EE 131", name: "Fundamentals of Electronics for Engineers", creditHours: 12, class: "Core" },
          { code: "EE 151", name: "Fundamentals of Electrical Engineering", creditHours: 12, class: "Core" },
          { code: "ME 103", name: "Computer aided drafting", creditHours: 8, class: "Core" },
          { code: "MT 171", name: "Matrices and Basic Calculus for Non- Majors", creditHours: 12, class: "Core" },
          { code: "TW 134", name: "Electrical machines and installation practice", creditHours: 6, class: "Core" },
          { code: "TW 140", name: "Metal Cutting and Machine Tools Practice", creditHours: 6, class: "Core" },
          { code: "TX 104", name: "Fibre Science", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 261", name: "Several Variables Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "TX 203", name: "Introduction to Textile Processes", creditHours: 12, class: "Core" },
          { code: "TX 202", name: "Basic Textile Chemistry", creditHours: 8, class: "Core" },
          { code: "TX 201", name: "Fibres Physics", creditHours: 8, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "TX 214", name: "Polymer Science", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "TX 227", name: "Theory of Textile Structures", creditHours: 12, class: "Core" },
          { code: "EN 226", name: "Thermodynamics I", creditHours: 12, class: "Core" },
          { code: "TX 204", name: "Textile Physics", creditHours: 8, class: "Core" },
          { code: "TX 217", name: "Textile Chemistry", creditHours: 8, class: "Core" },
          { code: "MT 271", name: "Statistics for Non-Majors", creditHours: 12, class: "Core" },
          { code: "ME 207", name: "Mechanics of Machines", creditHours: 8, class: "Core" },
          { code: "TX 207", name: "Textile Processes", creditHours: 8, class: "Core" },
          { code: "PT 1", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "TX 311", name: "Spinning Mechanics", creditHours: 12, class: "Core" },
          { code: "TX 312", name: "Weaving Mechanics", creditHours: 12, class: "Core" },
          { code: "EN 326", name: "Thermodynamics II", creditHours: 8, class: "Core" },
          { code: "TX 313", name: "Knitting Technology", creditHours: 8, class: "Core" },
          { code: "TX 314", name: "Nonwoven Engineering Principles", creditHours: 8, class: "Core" },
          { code: "TX 315", name: "Coloration and Finishing Technology", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "TX 304", name: "CAD/CAM for Textiles", creditHours: 8, class: "Core" },
          { code: "TX 322", name: "Coloration of Textile Materials", creditHours: 12, class: "Core" },
          { code: "MG 340", name: "Engineering Operations Management I", creditHours: 8, class: "Core" },
          { code: "TX 317", name: "Textile Materials Testing", creditHours: 12, class: "Core" },
          { code: "TX 318", name: "Textile Machinery and Maintenance", creditHours: 12, class: "Core" },
          { code: "PT 2", name: "Practical Training II Elective Minimum Units 8.0", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "TX 498", name: "Final Project I", creditHours: 8, class: "Core" },
          { code: "TX 412", name: "Spinning Engineering", creditHours: 12, class: "Core" },
          { code: "TX 414", name: "Textile Quality Improvement", creditHours: 12, class: "Core" },
          { code: "TX 452", name: "Colour Measurement", creditHours: 12, class: "Core" },
          { code: "TX 450", name: "Textile Composites", creditHours: 8, class: "Core" },
          { code: "MG 443", name: "Industrial Safety and Maintenance", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "TX 499", name: "Final Project II", creditHours: 16, class: "Core" },
          { code: "TX 413", name: "Weaving Engineering", creditHours: 12, class: "Core" },
          { code: "MG 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" },
          { code: "TX 451", name: "Knitting Structures", creditHours: 8, class: "Core" },
          { code: "PT 3", name: "Practical Training III", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1042,
      universityId: 2,
      name: "BSc Botanical Sciences (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Perspectives of Development", creditHours: 12, class: "Core" },
          { code: "BT 130", name: "Evolutionary Botany", creditHours: 12, class: "Core" },
          { code: "BL 111", name: "Introduction to Cell Biology and Genetics", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CH 113", name: "Chemistry for Life Sciences Students", creditHours: 12, class: "Core" },
          { code: "BT 112", name: "Principles of Plant Population Genetics", creditHours: 8, class: "Core" },
          { code: "BT 113", name: "Introduction to Plant Physiology", creditHours: 8, class: "Core" },
          { code: "BL 113", name: "Ecology I", creditHours: 8, class: "Core" },
          { code: "WS 101", name: "Ecology and Utilisation of Natural Resources", creditHours: 8, class: "Core" },
          { code: "IS 131", name: "Introduction to Informatics and Microcomputers", creditHours: 8, class: "Core" },
          { code: "BN 131", name: "Biochemistry I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "SC 215", name: "Scientific Methods", creditHours: 8, class: "Core" },
          { code: "BT 211", name: "Fundamentals of Soil Science", creditHours: 8, class: "Core" },
          { code: "BT 224", name: "Introduction to Plant Molecular Biology", creditHours: 12, class: "Core" },
          { code: "BT 225", name: "Taxonomy of Higher Plants", creditHours: 12, class: "Core" },
          { code: "BL 215", name: "Ecology II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "BT 223", name: "Biometry for Plant Science", creditHours: 12, class: "Core" },
          { code: "BT 221", name: "Management and Conservation of Soils", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "BT 329", name: "Plant Ecology and Phytogeography", creditHours: 12, class: "Core" },
          { code: "BT 349", name: "Management and Monitoring of Fragile Ecosystems", creditHours: 12, class: "Core" },
          { code: "BL 390", name: "Research Project", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "BT 319", name: "Practical Training", creditHours: 8, class: "Core" },
          { code: "BT 323", name: "Algal Systematics and Ecology", creditHours: 12, class: "Core" },
          { code: "BT 327", name: "Anatomy of Angiosperms", creditHours: 8, class: "Core" },
          { code: "BT 356", name: "Plant Diversity and Conservation", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1043,
      universityId: 2,
      name: "BSc Chemistry (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "IS 131", name: "Introduction to Informatics and Microcomputers", creditHours: 8, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 121", name: "Chemistry Practical I", creditHours: 8, class: "Core" },
          { code: "CH 172", name: "Chemical Separation", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "CH 122", name: "Chemistry Practical II", creditHours: 8, class: "Core" },
          { code: "CH 173", name: "Introduction to Electronic Structure and Spectroscopy", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science", creditHours: 8, class: "Core" },
          { code: "CH 201", name: "Chemical Thermodynamics", creditHours: 12, class: "Core" },
          { code: "CH 243", name: "Organic Chemistry II", creditHours: 12, class: "Core" },
          { code: "CH 244", name: "Chemistry Practical IV", creditHours: 8, class: "Core" },
          { code: "CH 248", name: "Instrumental Methods in Analytical Chemistry", creditHours: 8, class: "Core" },
          { code: "CH 262", name: "Analytical and Environmental Chemistry", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 219", name: "Systematic Inorganic Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 241", name: "Chemistry Practical III", creditHours: 8, class: "Core" },
          { code: "CH 245", name: "Chemistry Practical V", creditHours: 8, class: "Core" },
          { code: "CH 280", name: "Organic Structure, Reactions and Mechanisms", creditHours: 12, class: "Core" },
          { code: "CH 290", name: "Chemical Kinetics and Electrochemistry", creditHours: 12, class: "Core" },
          { code: "CH 299", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CH 314", name: "Project Work", creditHours: 12, class: "Core" },
          { code: "CH 303", name: "Organic Synthesis", creditHours: 12, class: "Core" },
          { code: "CH 341", name: "Chemistry Practical VI", creditHours: 8, class: "Core" },
          { code: "CH 377", name: "Industrial Chemistry", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "CH 314", name: "Project Work", creditHours: 12, class: "Core" },
          { code: "CH 323", name: "Organic Spectroscopy", creditHours: 8, class: "Core" },
          { code: "CH 364", name: "Coordination Chemistry", creditHours: 8, class: "Core" },
          { code: "CH 394", name: "Fundamentals of Theoretical Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 379", name: "Organometallic Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 399", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1044,
      universityId: 2,
      name: "BSc Petroleum Chemistry (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "IS 131", name: "Introduction to Informatics and Microcomputers", creditHours: 8, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 121", name: "Chemistry Practical I", creditHours: 8, class: "Core" },
          { code: "CH 172", name: "Chemical Separation", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "CH 122", name: "Chemistry Practical II", creditHours: 8, class: "Core" },
          { code: "CH 173", name: "Introduction to Electronic Structure and Spectroscopy", creditHours: 12, class: "Core" },
          { code: "CH 174", name: "Scientific Methods in Chemistry", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science", creditHours: 8, class: "Core" },
          { code: "CH 201", name: "Chemical Thermodynamics", creditHours: 12, class: "Core" },
          { code: "CH 243", name: "Organic Chemistry II", creditHours: 12, class: "Core" },
          { code: "CH 251", name: "Formation and Composition of Petroleum", creditHours: 12, class: "Core" },
          { code: "CH 248", name: "Instrumental Methods in Analytical Chemistry", creditHours: 8, class: "Core" },
          { code: "CH 254", name: "Petroleum Chemistry Practical I", creditHours: 12, class: "Core" },
          { code: "CH 262", name: "Analytical and Environmental Chemistry", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 252", name: "Chemistry of Coal", creditHours: 12, class: "Core" },
          { code: "CH 253", name: "Surface Chemistry for Petroleum Industry", creditHours: 12, class: "Core" },
          { code: "CH 255", name: "Petroleum Chemistry Practical II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CH 336", name: "Petroleum Refining and Petrochemicals", creditHours: 12, class: "Core" },
          { code: "CH 337", name: "Petroleum Chemistry practical\u2019s III", creditHours: 12, class: "Core" },
          { code: "CH 338", name: "Corrosion and its Control in the Petroleum Industry", creditHours: 12, class: "Core" },
          { code: "CH 341", name: "Chemistry practical VI", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "OG 310", name: "Industrial Health Safety and Environmental Protection in Petroleum Engineering", creditHours: 12, class: "Core" },
          { code: "CH 323", name: "Organic Spectroscopy", creditHours: 8, class: "Core" },
          { code: "CH 339", name: "Petroleum Chemistry Practical IV", creditHours: 12, class: "Core" },
          { code: "OG 477", name: "Petroleum Refining Techniques", creditHours: 12, class: "Core" },
          { code: "CH 399", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1045,
      universityId: 2,
      name: "BSc Chemistry and Physics (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "IS 131", name: "Introduction to Informatics and Microcomputers", creditHours: 8, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 121", name: "Chemistry practical I", creditHours: 8, class: "Core" },
          { code: "CH 172", name: "Chemical Separation", creditHours: 12, class: "Core" },
          { code: "PH 122", name: "Classical Mechanics", creditHours: 8, class: "Core" },
          { code: "PH 124", name: "Optics", creditHours: 8, class: "Core" },
          { code: "PH 133", name: "Vibrations and Waves", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "CH 173", name: "Introduction to Electronic Structure and Spectroscopy", creditHours: 12, class: "Core" },
          { code: "PH 116", name: "Experimental Methods of Physics I", creditHours: 8, class: "Core" },
          { code: "PH 121", name: "Electricity and Magnetism", creditHours: 8, class: "Core" },
          { code: "PH 126", name: "Analogy Electronics", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science", creditHours: 8, class: "Core" },
          { code: "CH 243", name: "Organic Chemistry II", creditHours: 12, class: "Core" },
          { code: "CH 248", name: "Instrumental Methods in Analytical Chemistry", creditHours: 8, class: "Core" },
          { code: "PH 204", name: "Mathematical Methods for Physics", creditHours: 12, class: "Core" },
          { code: "PH 210", name: "Physics Practical Training I", creditHours: 8, class: "Core" },
          { code: "PH 224", name: "Digital Electronics", creditHours: 8, class: "Core" },
          { code: "PH 247", name: "Experimental Methods of Physics II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 219", name: "Systematic Inorganic Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 241", name: "Chemistry Practicals III", creditHours: 8, class: "Core" },
          { code: "CH 290", name: "Chemical Kinetics and Electrochemistry", creditHours: 12, class: "Core" },
          { code: "PH 217", name: "Quantum Physics", creditHours: 12, class: "Core" },
          { code: "PH 220", name: "Statistical Thermodynamics", creditHours: 12, class: "Core" },
          { code: "PH 229", name: "Computational Physics", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CH 201", name: "Chemical Thermodynamics", creditHours: 12, class: "Core" },
          { code: "CH 314", name: "Project Work", creditHours: 12, class: "Core" },
          { code: "CH 323", name: "Organic Spectroscopy", creditHours: 8, class: "Core" },
          { code: "CH 341", name: "Chemistry Practical VI", creditHours: 8, class: "Core" },
          { code: "CH 399", name: "Chemistry Practical Training II", creditHours: 8, class: "Core" },
          { code: "PH 320", name: "Atomic Physics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "CH 364", name: "Coordination Chemistry", creditHours: 8, class: "Core" },
          { code: "CH 394", name: "Fundamentals of Theoretical Chemistry", creditHours: 12, class: "Core" },
          { code: "PH 326", name: "Nuclear Physics and Applications", creditHours: 12, class: "Core" },
          { code: "PH 332", name: "Solid State Physics", creditHours: 8, class: "Core" },
          { code: "PH 347", name: "Electromagnetism", creditHours: 8, class: "Core" },
          { code: "PH 359", name: "Astrophysics", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1046,
      universityId: 2,
      name: "BSc Actuarial Sciences (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "MT 114", name: "Computer Programming", creditHours: 12, class: "Core" },
          { code: "ST 113", name: "Basic Statistics", creditHours: 12, class: "Core" },
          { code: "ST 121", name: "Analytical Calculus", creditHours: 12, class: "Core" },
          { code: "AC 102", name: "Accounting for Non-Business Majors", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "MT 136", name: "Ordinary Differential Equations", creditHours: 8, class: "Core" },
          { code: "FN 102", name: "Introduction to Actuarial Studies", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills", creditHours: 12, class: "Core" },
          { code: "MT 180", name: "Introduction to Actuarial Mathematics", creditHours: 12, class: "Core" },
          { code: "ST 122", name: "Linear Algebra with Applications", creditHours: 12, class: "Core" },
          { code: "ST 114", name: "Probability Theory I", creditHours: 12, class: "Core" },
          { code: "FN 101", name: "Principles of Macroeconomics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 281", name: "Life Contingencies", creditHours: 12, class: "Core" },
          { code: "ST 220", name: "Basic Demographic Methods", creditHours: 12, class: "Core" },
          { code: "MT 226", name: "Partial Differential Equations", creditHours: 8, class: "Core" },
          { code: "MT 233", name: "Mathematical Statistics", creditHours: 12, class: "Core" },
          { code: "FN 200", name: "Principles of Finance", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 278", name: "Linear Programming", creditHours: 12, class: "Core" },
          { code: "FN 209", name: "Risk Theory", creditHours: 12, class: "Core" },
          { code: "MT 280", name: "Basic Pension Mathematics", creditHours: 12, class: "Core" },
          { code: "FN 202", name: "Financial Management", creditHours: 12, class: "Core" },
          { code: "LW 705", name: "Legal Aspects of Actuarial Science", creditHours: 12, class: "Core" },
          { code: "ST 324", name: "Linear Models", creditHours: 12, class: "Core" },
          { code: "BM 333", name: "Field Practical with Research Component", creditHours: 24, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "ST 326", name: "Survival Models", creditHours: 12, class: "Core" },
          { code: "ST 327", name: "Actuarial Modelling", creditHours: 12, class: "Core" },
          { code: "FN 315", name: "Basics of Actuarial Planning and Control", creditHours: 12, class: "Core" },
          { code: "FN 314", name: "Quantitative Methods for Risk Management", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "FN 316", name: "Superannuation Practices", creditHours: 12, class: "Core" },
          { code: "MT 381", name: "Credibility and Loss Distributions", creditHours: 12, class: "Core" },
          { code: "FN 317", name: "Actuarial Practices in Insurance Schemes", creditHours: 12, class: "Core" },
          { code: "FN 318", name: "Actuarial Practices in Pension and Retirement Benefits", creditHours: 12, class: "Core" },
          { code: "ST 325", name: "Mathematical Demography", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1047,
      universityId: 2,
      name: "BSc Molecular Biology and Biotechnology (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 130", name: "Methods and Safety in Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 131", name: "Eukaryotic Microorganisms", creditHours: 12, class: "Core" },
          { code: "BL 111", name: "Introductory Cell Biology and Genetics", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "BN 130", name: "Molecular Biology", creditHours: 12, class: "Core" },
          { code: "BN 131", name: "Biochemistry I", creditHours: 12, class: "Core" },
          { code: "BN 112", name: "Immunology I", creditHours: 12, class: "Core" },
          { code: "MC 132", name: "Practicals in Eukaryotic Microorganisms", creditHours: 8, class: "Core" },
          { code: "PH 103", name: "Applied Physics in Biology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "SC 215", name: "Scientific Methods", creditHours: 8, class: "Core" },
          { code: "BN 230", name: "Methods in Molecular Biology I", creditHours: 12, class: "Core" },
          { code: "BN 231", name: "Bioinformatics I", creditHours: 12, class: "Core" },
          { code: "BN 235", name: "Practicals in Molecular Biology I", creditHours: 8, class: "Core" },
          { code: "BN 238", name: "Biochemistry II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "BN 234", name: "Molecular Virology", creditHours: 12, class: "Core" },
          { code: "BN 237", name: "Immunology II", creditHours: 12, class: "Core" },
          { code: "BL 234", name: "Biostatisticscs I", creditHours: 12, class: "Core" },
          { code: "BN 236", name: "Practicals in Molecular Biology II", creditHours: 8, class: "Core" },
          { code: "BN 240", name: "Practicals in Biochemistry", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "BN 335", name: "Bioinformatics II", creditHours: 12, class: "Core" },
          { code: "BL 390", name: "Research Project", creditHours: 12, class: "Core" },
          { code: "BN 342", name: "Methods in Molecular Biology II", creditHours: 12, class: "Core" },
          { code: "BN 340", name: "Practical Training", creditHours: 8, class: "Core" },
          { code: "BN 330", name: "Environmental Biotechnology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "BL 314", name: "Biostatistics II", creditHours: 8, class: "Core" },
          { code: "BN 338", name: "Biosafety, Biopolicy and Bioethics", creditHours: 12, class: "Core" },
          { code: "BN 341", name: "Immunology III", creditHours: 12, class: "Core" },
          { code: "BN 332", name: "Industrial Biotechnology", creditHours: 12, class: "Core" },
          { code: "BN 336", name: "Practicals in Biotechnology", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1048,
      universityId: 2,
      name: "BSc Microbiology (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "MC 130", name: "Methods and Safety in Microbiology", creditHours: 12, class: "Core" },
          { code: "BL 111", name: "Introduction to Cell Biology and Genetics", creditHours: 12, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 131", name: "Eukaryotic Microorganisms", creditHours: 12, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological & Chemical Sciences", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "BN 130", name: "Molecular Biology", creditHours: 12, class: "Core" },
          { code: "BN 112", name: "Immunology I", creditHours: 12, class: "Core" },
          { code: "MC 132", name: "Practicals in Eukaryotic Microorganisms", creditHours: 8, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "SC 215", name: "Scientific Methods", creditHours: 8, class: "Core" },
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "MC 231", name: "Microbial Nutrition and Metabolism", creditHours: 12, class: "Core" },
          { code: "MC 232", name: "Food Microbiology and Processing", creditHours: 12, class: "Core" },
          { code: "BN 231", name: "Bioinformatics I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MC 230", name: "Microbial taxonomy", creditHours: 12, class: "Core" },
          { code: "MC 235", name: "Microbial Ecology", creditHours: 12, class: "Core" },
          { code: "BL 234", name: "Biostatistics I", creditHours: 12, class: "Core" },
          { code: "MC 233", name: "Environmental Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 237", name: "Practicals in Microbiology I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "BL 390", name: "Research Projects", creditHours: 12, class: "Core" },
          { code: "MC 330", name: "Entrepreneurship Microorganisms", creditHours: 12, class: "Core" },
          { code: "MC 331", name: "Microbial Biotechnology", creditHours: 12, class: "Core" },
          { code: "MC 332", name: "Agricultural Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 340", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "BL 314", name: "Biostatics II", creditHours: 8, class: "Core" },
          { code: "MC 333", name: "Applied Mycology", creditHours: 12, class: "Core" },
          { code: "BN 338", name: "Biosafety, Biopolicy and Bioethics", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1049,
      universityId: 2,
      name: "BSc Applied Microbiology and Chemistry (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 130", name: "Methods and Safety in Microbiology", creditHours: 12, class: "Core" },
          { code: "CH 121", name: "Chemistry Practicals I", creditHours: 8, class: "Core" },
          { code: "CH 172", name: "Chemical Separation", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry I", creditHours: 12, class: "Core" },
          { code: "CH 173", name: "Introduction to Electronic Structure and Spectroscopy", creditHours: 12, class: "Core" },
          { code: "BN 111", name: "Introduction to Molecular Biology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "SC 215", name: "Scientific Methods", creditHours: 8, class: "Core" },
          { code: "CH 243", name: "Organic Chemistry II", creditHours: 12, class: "Core" },
          { code: "MC 231", name: "Microbial Nutrition and Metabolism", creditHours: 12, class: "Core" },
          { code: "MC 232", name: "Food Microbiology and Processing", creditHours: 12, class: "Core" },
          { code: "CH 299", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CH 241", name: "Chemistry Practicals III", creditHours: 8, class: "Core" },
          { code: "CH 219", name: "Systematic Inorganic Chemistry", creditHours: 12, class: "Core" },
          { code: "MC 230", name: "Microbial Taxonomy", creditHours: 12, class: "Core" },
          { code: "MC 237", name: "Practicals in Microbiology I", creditHours: 8, class: "Core" },
          { code: "BL 210", name: "Immunology for Life Science", creditHours: 12, class: "Core" },
          { code: "CH 290", name: "Chemical Kinetics and Electrochemistry", creditHours: 12, class: "Core" },
          { code: "MC 233", name: "Environmental Microbiology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CH 201", name: "Chemical Thermodynamics", creditHours: 12, class: "Core" },
          { code: "CH 323", name: "Organic Spectroscopy", creditHours: 8, class: "Core" },
          { code: "CH 341", name: "Chemistry Practicals VI CH 314* Project work 12 1 Core", creditHours: 8, class: "Core" },
          { code: "MC 330", name: "Entrepreneurship Microbiology", creditHours: 12, class: "Core" },
          { code: "MC 340", name: "Practical Training BL390* Research Project 12 2 Core", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "CH 364", name: "Coordination Chemistry", creditHours: 8, class: "Core" },
          { code: "MC 333", name: "Applied Mycology", creditHours: 12, class: "Core" },
          { code: "BN 338", name: "Biosafety, Bio-policy and Bioethics", creditHours: 12, class: "Core" },
          { code: "CH 353", name: "Biochemistry", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1050,
      universityId: 2,
      name: "BSc Meteorology (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "PH 122", name: "Classical Mechanics", creditHours: 8, class: "Core" },
          { code: "PH 127", name: "Vibrations, Waves and Optics", creditHours: 12, class: "Core" },
          { code: "MT 100", name: "Foundations of Analysis", creditHours: 12, class: "Core" },
          { code: "MT 127", name: "Linear Algebra", creditHours: 12, class: "Core" },
          { code: "MR 101", name: "Introduction to Meteorology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "PH 128", name: "Electromagnetism", creditHours: 12, class: "Core" },
          { code: "PH 129", name: "Atmospheric Thermodynamics", creditHours: 12, class: "Core" },
          { code: "MT 120", name: "Functions of a Single Variable", creditHours: 8, class: "Core" },
          { code: "MT 136", name: "Ordinary Differential Equations", creditHours: 8, class: "Core" },
          { code: "MR 102", name: "Meteorological Instrumentation and Observations", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 114", name: "Computer Programming", creditHours: 12, class: "Core" },
          { code: "MT 200", name: "Calculus of Several Variables", creditHours: 12, class: "Core" },
          { code: "MT 233", name: "Mathematical Statistics", creditHours: 12, class: "Core" },
          { code: "MT 226", name: "Partial Differential Equations", creditHours: 8, class: "Core" },
          { code: "SC 215", name: "Scientific Methods", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 346", name: "Fluid Mechanics", creditHours: 12, class: "Core" },
          { code: "MR 201", name: "Synoptic Meteorology", creditHours: 12, class: "Core" },
          { code: "MR 202", name: "Climatology", creditHours: 12, class: "Core" },
          { code: "MR 203", name: "Dynamic Meteorology", creditHours: 12, class: "Core" },
          { code: "MT 274", name: "Numerical Analysis I", creditHours: 12, class: "Core" },
          { code: "MR 204", name: "Physical Meteorology", creditHours: 12, class: "Core" },
          { code: "MR 210", name: "Practical Training", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "MR 306", name: "Numerical Weather Prediction", creditHours: 12, class: "Core" },
          { code: "MR 302", name: "Principles and Applications of Remote Sensing", creditHours: 12, class: "Core" },
          { code: "MR 303", name: "Tropical Meteorology", creditHours: 8, class: "Core" },
          { code: "MR 301", name: "Weather Analysis and Forecasting", creditHours: 12, class: "Core" },
          { code: "MR 305", name: "Boundary-Layer and Micro-meteorology", creditHours: 12, class: "Core" },
          { code: "MR 308", name: "Climate Monitoring and Prediction", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "MR 307", name: "Short-term Weather Prediction", creditHours: 12, class: "Core" },
          { code: "MR 314", name: "Project in Meteorology", creditHours: 12, class: "Core" },
          { code: "MR 309", name: "Mesoscale Meteorology", creditHours: 12, class: "Core" },
          { code: "MR 310", name: "Climate Change", creditHours: 8, class: "Core" },
          { code: "MR 313", name: "Air Pollution Meteorology", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1051,
      universityId: 2,
      name: "BSc Physics with Medical Physics (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "PH 133", name: "Vibrations and Waves", creditHours: 8, class: "Core" },
          { code: "PH 116", name: "Experimental Methods of Physics I", creditHours: 8, class: "Core" },
          { code: "PH 122", name: "Classical Mechanics", creditHours: 8, class: "Core" },
          { code: "PH 124", name: "Optics", creditHours: 8, class: "Core" },
          { code: "PH 161", name: "Nuclear and Radiation Physics", creditHours: 8, class: "Core" },
          { code: "PH 162", name: "Mathematical Methods for Physicists I", creditHours: 8, class: "Core" },
          { code: "MB 104", name: "Human Anatomy and Physiology I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "PH 121", name: "Electricity and Magnetism", creditHours: 8, class: "Core" },
          { code: "PH 136", name: "Analogue Electronics", creditHours: 8, class: "Core" },
          { code: "PH 163", name: "Mathematical Methods for Physicists II", creditHours: 8, class: "Core" },
          { code: "PH 164", name: "Introduction to Medical Physics", creditHours: 8, class: "Core" },
          { code: "PH 165", name: "Advanced Experimental Methods of Physics I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "PH 210", name: "Practical Training, I", creditHours: 8, class: "Core" },
          { code: "PH 224", name: "Digital Electronics", creditHours: 8, class: "Core" },
          { code: "PH 270", name: "Simulations in Physics", creditHours: 8, class: "Core" },
          { code: "PH 271", name: "Physics of the Human Body", creditHours: 8, class: "Core" },
          { code: "PH 273", name: "Radiation Dosimetry", creditHours: 8, class: "Core" },
          { code: "PH 274", name: "Radiobiology", creditHours: 8, class: "Core" },
          { code: "PH 278", name: "Nuclear Safety and Security", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "PH 217", name: "Quantum Physics", creditHours: 12, class: "Core" },
          { code: "PH 229", name: "Computational Physics", creditHours: 8, class: "Core" },
          { code: "PH 220", name: "Statistical Thermodynamics", creditHours: 8, class: "Core" },
          { code: "PH 260", name: "Advanced Experimental Methods of Physics II", creditHours: 8, class: "Core" },
          { code: "PH 275", name: "Physics of Diagnostic and Intervention Imaging", creditHours: 8, class: "Core" },
          { code: "PH 351", name: "Physics of the Atom", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "PH 310", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "PH 311", name: "Fundamentals of Radiation Therapy Physics", creditHours: 8, class: "Core" },
          { code: "PH 313", name: "Professional Ethics in Medical Physics", creditHours: 8, class: "Core" },
          { code: "PH 314", name: "Experiments in Medical Physics", creditHours: 8, class: "Core" },
          { code: "PH 315", name: "Physics of Nuclear Medicine", creditHours: 8, class: "Core" },
          { code: "PH 332", name: "Solid State Physics", creditHours: 8, class: "Core" },
          { code: "PH 360", name: "Radiation Treatment Planning", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "PH 318", name: "Medical electronics and Instrumentation", creditHours: 8, class: "Core" },
          { code: "PH 321", name: "Accelerator Physics", creditHours: 8, class: "Core" },
          { code: "PH 322", name: "Frontiers in Medical Physics", creditHours: 8, class: "Core" },
          { code: "PH 323", name: "Physics with LabVIEW", creditHours: 8, class: "Core" },
          { code: "PH 327", name: "Radiotherapy Equipment", creditHours: 8, class: "Core" },
          { code: "PH 346", name: "Physics Project", creditHours: 8, class: "Core" },
          { code: "PH 347", name: "Electromagnetism", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1052,
      universityId: 2,
      name: "BSc Wildlife Science and Conservation (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "AC 102", name: "Fundamentals of Accounting for Non business majors", creditHours: 12, class: "Core" },
          { code: "ZL 121", name: "Invertebrate Zoology", creditHours: 8, class: "Core" },
          { code: "BT 130", name: "Evolutionary Botany", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" },
          { code: "BL 111", name: "Introduction to Cell Biology and Genetics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "WS 101", name: "Ecology and Utilisation of Natural Resources", creditHours: 8, class: "Core" },
          { code: "CH 113", name: "Chemistry for Life Sciences", creditHours: 12, class: "Core" },
          { code: "ZL 122", name: "Chordate Zoology", creditHours: 8, class: "Core" },
          { code: "BL 113", name: "Ecology I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "ZL 215", name: "Mammalian Biology", creditHours: 8, class: "Core" },
          { code: "ZL 210", name: "Vertebrate Anatomy and Physiology I", creditHours: 8, class: "Core" },
          { code: "ZL 236", name: "Introductory Entomology and Parasitology", creditHours: 12, class: "Core" },
          { code: "AQ 201", name: "Aquatic Biology", creditHours: 8, class: "Core" },
          { code: "BL 215", name: "Ecology II", creditHours: 12, class: "Core" },
          { code: "BT 225", name: "Taxonomy of Higher Plants", creditHours: 12, class: "Core" },
          { code: "AQ 218", name: "Aquatic Biology Field Course", creditHours: 4, class: "Core" },
          { code: "WS 200", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "WS 202", name: "Biology of Birds", creditHours: 8, class: "Core" },
          { code: "ZL 220", name: "Vertebrate Anatomy and Physiology II", creditHours: 12, class: "Core" },
          { code: "WS 204", name: "Community-based Conservation and Extension", creditHours: 8, class: "Core" },
          { code: "ZL 214", name: "Herpetology", creditHours: 8, class: "Core" },
          { code: "BL 234", name: "Biostatistics I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "WS 215", name: "Range and Fire Ecology", creditHours: 12, class: "Core" },
          { code: "WS 301", name: "Conservation Biology", creditHours: 8, class: "Core" },
          { code: "GE 245", name: "Remote Sensing", creditHours: 12, class: "Core" },
          { code: "ZL 307", name: "Animal Behaviour I", creditHours: 8, class: "Core" },
          { code: "BT 329", name: "Plant Ecology and Phytogeography", creditHours: 12, class: "Core" },
          { code: "BM 100", name: "Principles of Management and Administration", creditHours: 12, class: "Core" },
          { code: "WS 300", name: "Practical Training II", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "BL 390", name: "Research Project", creditHours: 12, class: "Core" },
          { code: "WS 321", name: "Analysis and Utilization of Wildlife Populations", creditHours: 12, class: "Core" },
          { code: "WS 308", name: "Animal Behaviour II", creditHours: 8, class: "Core" },
          { code: "WS 309", name: "Reproduction, Growth and Nutrition in Wild Mammals", creditHours: 8, class: "Core" },
          { code: "WS 314", name: "Economics and Legislation for Wildlife Conservation", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1053,
      universityId: 2,
      name: "BSc Applied Zoology (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "BL 111", name: "Introductory Cell Biology and Genetics", creditHours: 12, class: "Core" },
          { code: "ZL 121", name: "Invertebrate Zoology", creditHours: 8, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "BL 113", name: "Ecology I", creditHours: 8, class: "Core" },
          { code: "BN 131", name: "Biochemistry I", creditHours: 12, class: "Core" },
          { code: "CH 113", name: "Chemistry for Life Sciences Students", creditHours: 12, class: "Core" },
          { code: "ZL 122", name: "Chordate Zoology", creditHours: 8, class: "Core" },
          { code: "ZL 124", name: "Developmental Biology", creditHours: 8, class: "Core" },
          { code: "ZL 200", name: "Practical Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "AQ 201", name: "Aquatic Biology", creditHours: 8, class: "Core" },
          { code: "BL 215", name: "Ecology II", creditHours: 12, class: "Core" },
          { code: "ZL 210", name: "Vertebrate Anatomy and Physiology I", creditHours: 8, class: "Core" },
          { code: "ZL 215", name: "Mammalian Biology", creditHours: 8, class: "Core" },
          { code: "ZL 236", name: "Introductory Entomology and Parasitology", creditHours: 12, class: "Core" },
          { code: "BN 238", name: "Biochemistry II", creditHours: 12, class: "Core" },
          { code: "AQ 218", name: "Aquatic Biology Field Course", creditHours: 4, class: "Core" },
          { code: "BL 234", name: "Biostatistics I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "BL 210", name: "Immunology for Life Sciences", creditHours: 12, class: "Core" },
          { code: "ZL 202", name: "Macro-Evolution", creditHours: 12, class: "Core" },
          { code: "ZL 220", name: "Vertebrate Anatomy and Physiology II", creditHours: 12, class: "Core" },
          { code: "ZL 229", name: "Insect Physiology & Pathology", creditHours: 8, class: "Core" },
          { code: "ZL 300", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "BN 240", name: "Practicals in Biochemistry", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "ZL 307", name: "Animal Behaviour I", creditHours: 8, class: "Core" },
          { code: "BL 331", name: "Cell Biology and Molecular Genetics", creditHours: 12, class: "Core" },
          { code: "BL 313", name: "Biological Impact Assessment", creditHours: 8, class: "Core" },
          { code: "ZL 314", name: "Environmental Physiology", creditHours: 8, class: "Core" },
          { code: "BN 330", name: "Environmental Biotechnology", creditHours: 12, class: "Core" },
          { code: "BL 311", name: "Cell Biology and Molecular Genetics", creditHours: 12, class: "Core" },
          { code: "ZL 336", name: "Entomology", creditHours: 12, class: "Core" },
          { code: "ZL 332", name: "Molecular Biology of Parasites", creditHours: 12, class: "Core" },
          { code: "ZL 331", name: "Immunology of Parasitism", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "BL 390", name: "Research Project", creditHours: 12, class: "Core" },
          { code: "ZL 318", name: "Endocrinology & Reproductive Physiology", creditHours: 8, class: "Core" },
          { code: "ZL 339", name: "Ecotoxicology", creditHours: 12, class: "Core" },
          { code: "ZL 302", name: "Evolution", creditHours: 8, class: "Core" },
          { code: "ZL 300", name: "Practical Training in Applied Zoology", creditHours: 8, class: "Core" },
          { code: "ZL 333", name: "Insect Ecology", creditHours: 12, class: "Core" },
          { code: "ZL 338", name: "Parasitology", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1054,
      universityId: 2,
      name: "BA Geography and Environmental Studies (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "GE 140", name: "Introduction to Physical Geography", creditHours: 12, class: "Core" },
          { code: "GE 142", name: "Spatial Organization", creditHours: 12, class: "Core" },
          { code: "GE 145", name: "Introduction to Environmental Education", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research Methods", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives 1", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
          { code: "PL 111", name: "Introduction to Critical Thinking and Argumentation", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "GE 141", name: "Climatology", creditHours: 12, class: "Core" },
          { code: "GE 143", name: "Environmental Resources and Food Security", creditHours: 12, class: "Core" },
          { code: "GE 144", name: "Surveying and Mapping Science", creditHours: 12, class: "Core" },
          { code: "AS 103", name: "Social Science Research Methods", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GE 240", name: "Soil Resources", creditHours: 12, class: "Core" },
          { code: "GE 242", name: "Agricultural Systems and Location", creditHours: 12, class: "Core" },
          { code: "GE 244", name: "Quantitative Techniques in Geography", creditHours: 12, class: "Core" },
          { code: "GE 250", name: "Environmental Education and Conservation", creditHours: 12, class: "Core" },
          { code: "GE 251", name: "Tourism and Leisure", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "GE 241", name: "Biogeography", creditHours: 12, class: "Core" },
          { code: "GE 245", name: "Remote Sensing", creditHours: 12, class: "Core" },
          { code: "GE 246", name: "Hydrometeorology", creditHours: 12, class: "Core" },
          { code: "GE 247", name: "Population Studies", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GE 340", name: "Water Resources Management", creditHours: 12, class: "Core" },
          { code: "GE 343", name: "Population and Development", creditHours: 12, class: "Core" },
          { code: "GE 352", name: "Natural Resources Management", creditHours: 12, class: "Core" },
          { code: "GE 353", name: "Geographical Information Systems", creditHours: 12, class: "Core" },
          { code: "GE 249", name: "Research Methods in Geography", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GE 350", name: "Environmental Policy and Planning", creditHours: 12, class: "Core" },
          { code: "GE 351", name: "Land Evaluation for Development Planning", creditHours: 12, class: "Core" },
          { code: "GE 354", name: "Environmental Assessment", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1055,
      universityId: 2,
      name: "BA Anthropology (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AT 100", name: "Introduction to Anthropology", creditHours: 12, class: "Core" },
          { code: "AT 101", name: "Introduction to Anthropological Methods", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research Methods", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
          { code: "PL 111", name: "Introduction to Critical Thinking and Argumentation", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AT 110", name: "Introduction to Anthropological Theories", creditHours: 12, class: "Core" },
          { code: "AT 102", name: "Introduction to Kinship, Sex and Gender", creditHours: 12, class: "Core" },
          { code: "SO 115", name: "Introduction to Culture and Society", creditHours: 12, class: "Core" },
          { code: "AT 118", name: "Introduction to Cultural Anthropology", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "AS 103", name: "Introduction to Quantitative Research Methods", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AT 250", name: "Contemporary Anthropological Theories", creditHours: 12, class: "Core" },
          { code: "AT 251", name: "Ethnography as a Research Method", creditHours: 12, class: "Core" },
          { code: "AT 202", name: "Introduction to Medical Anthropology", creditHours: 12, class: "Core" },
          { code: "AT 253", name: "Introduction to Gender and Anthropology", creditHours: 12, class: "Core" },
          { code: "SO 253", name: "Quantitative Research Methods", creditHours: 12, class: "Core" },
          { code: "SO 258", name: "Family and Gender Relations: A Sociological Perspective", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AT 220", name: "Urban Health", creditHours: 12, class: "Core" },
          { code: "SO 284", name: "Qualitative Research", creditHours: 12, class: "Core" },
          { code: "AT 221", name: "Introduction to Gerontology", creditHours: 12, class: "Core" },
          { code: "AT 224", name: "Sexuality and Reproductive Health", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "SO 398", name: "Anthropology of Development", creditHours: 12, class: "Core" },
          { code: "AT 301", name: "Ageing, Health and Care", creditHours: 12, class: "Core" },
          { code: "AT 300", name: "Ethnographic Research and Writing", creditHours: 12, class: "Core" },
          { code: "SO 393", name: "Society, Culture and Health", creditHours: 12, class: "Core" },
          { code: "SO 397", name: "Community Development Theory and Practices", creditHours: 12, class: "Core" },
          { code: "SO 346", name: "Social Problems of Urbanization", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "AT 320", name: "Global Health from an Anthropological Perspectives", creditHours: 12, class: "Core" },
          { code: "AT 395", name: "Anthropological Aspects of East African Population", creditHours: 12, class: "Core" },
          { code: "AT 321", name: "Emerging Social Problems", creditHours: 12, class: "Core" },
          { code: "SO 384", name: "Occupation, Health and Safety", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1056,
      universityId: 2,
      name: "Bachelor of Social Work (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research I", creditHours: 12, class: "Core" },
          { code: "SO 102", name: "Introduction to Sociology", creditHours: 12, class: "Core" },
          { code: "WK 101", name: "Introduction to Social Work", creditHours: 12, class: "Core" },
          { code: "WK 102", name: "Field Practice Methods", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "WK 111", name: "Social Welfare Policies and Services", creditHours: 12, class: "Core" },
          { code: "WK 112", name: "Generalist Social Work", creditHours: 12, class: "Core" },
          { code: "WK 113", name: "Social Work with Individuals and Families", creditHours: 12, class: "Core" },
          { code: "WK 114", name: "Psychology for Social Workers", creditHours: 12, class: "Core" },
          { code: "AS 103", name: "Social Science Research Methods II", creditHours: 12, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "WK 201", name: "Social Work with Groups and Organizations", creditHours: 12, class: "Core" },
          { code: "WK 202", name: "Social Work with Communities", creditHours: 12, class: "Core" },
          { code: "WK 203", name: "Social Work and the Law", creditHours: 12, class: "Core" },
          { code: "WK 204", name: "Integrated Field Practice Methods", creditHours: 6, class: "Core" },
          { code: "WK 206", name: "Guidance and Counselling", creditHours: 12, class: "Core" },
          { code: "WK 207", name: "Internship Practicum I", creditHours: 6, class: "Core" },
          { code: "WK 216", name: "Introduction to Social Policy", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "WK 211", name: "Ethics in Social Work Practice", creditHours: 12, class: "Core" },
          { code: "WK 212", name: "Social Security and Protection Systems", creditHours: 12, class: "Core" },
          { code: "WK 213", name: "Social Planning and Administration", creditHours: 12, class: "Core" },
          { code: "WK 214", name: "Social Work with People with Special Needs", creditHours: 12, class: "Core" },
          { code: "WK 215", name: "Social Policy Analysis", creditHours: 12, class: "Core" },
          { code: "WK 205", name: "Social Work Research Methods", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "WK 301", name: "Social Work and Social Development", creditHours: 12, class: "Core" },
          { code: "AC 102", name: "Fundamentals of Accounting for Non-Business Majors", creditHours: 12, class: "Core" },
          { code: "WK 303", name: "Social Work Practice in Emergency Situations", creditHours: 12, class: "Core" },
          { code: "WK 304", name: "Child and Family Welfare", creditHours: 12, class: "Core" },
          { code: "WK 305", name: "Human Behaviour and Social Environment", creditHours: 12, class: "Core" },
          { code: "WK 306", name: "Individual and Social Pathology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "UR 308", name: "Project Monitoring and Evaluation", creditHours: 12, class: "Core" },
          { code: "WK 302", name: "Internship Practicum II", creditHours: 6, class: "Core" },
          { code: "WK 307", name: "Management of Social Welfare Organizations", creditHours: 12, class: "Core" },
          { code: "AC 102", name: "Fundamentals of Accounting for Non-Business Majors", creditHours: 12, class: "Core" },
          { code: "WK 309", name: "Social Work and Community Health", creditHours: 12, class: "Core" },
          { code: "WK 310", name: "Legal Instruments for Social Work Practice", creditHours: 12, class: "Core" },
          { code: "WK 399", name: "Social Work Research Project", creditHours: 6, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1057,
      universityId: 2,
      name: "BA Psychology (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "PL 111", name: "Introduction to Critical Thinking and Argumentation", creditHours: 12, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research Methods", creditHours: 12, class: "Core" },
          { code: "PY 100", name: "Introduction to General Psychology I", creditHours: 12, class: "Core" },
          { code: "PY 102", name: "Developmental Psychology I: Childhood", creditHours: 12, class: "Core" },
          { code: "PY 105", name: "Introduction to Social Psychology I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "AS 103", name: "Social Science Research Methods II", creditHours: 12, class: "Core" },
          { code: "PY 101", name: "Introduction to General Psychology II", creditHours: 12, class: "Core" },
          { code: "PY 110", name: "First Year Counselling Practicum", creditHours: 12, class: "Core" },
          { code: "PY 104", name: "Introduction to Counselling and Psychotherapy", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "PY 200", name: "Developmental Psychology II: Adolescence", creditHours: 12, class: "Core" },
          { code: "PY 202", name: "Psychology of Exceptional Children", creditHours: 12, class: "Core" },
          { code: "PY 203", name: "Introduction to Personality Psychology", creditHours: 12, class: "Core" },
          { code: "PY 212", name: "Introduction to Positive Psychology", creditHours: 12, class: "Core" },
          { code: "PY 208", name: "Abnormal Psychology", creditHours: 12, class: "Core" },
          { code: "PY 211", name: "Introduction to Mental Health and Psychosocial Well Being", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "PY 201", name: "Cognitive Psychology", creditHours: 12, class: "Core" },
          { code: "PY 204", name: "Introduction to Social Psychology II", creditHours: 12, class: "Core" },
          { code: "PY 206", name: "Health Psychology", creditHours: 12, class: "Core" },
          { code: "PY 207", name: "Work/Organizational Psychology", creditHours: 12, class: "Core" },
          { code: "PY 210", name: "Second Year Counselling Practicum", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "PY 300", name: "Research Methods in Psychology", creditHours: 12, class: "Core" },
          { code: "PY 301", name: "Community Psychology", creditHours: 12, class: "Core" },
          { code: "PY 302", name: "Psychological Testing and Assessment", creditHours: 12, class: "Core" },
          { code: "PY 303", name: "Statistics and Data Analysis in Psychology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "PY 304", name: "Principles of Writing in Psychology", creditHours: 12, class: "Core" },
          { code: "PY 305", name: "Final Psychology Research Project", creditHours: 24, class: "Core" },
          { code: "PY 309", name: "Contemporary Issues in Counselling and Psychotherapy", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1058,
      universityId: 2,
      name: "BA Library and Information Studies (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "LS 100", name: "Introduction to Library and Information Studies", creditHours: 12, class: "Core" },
          { code: "LS 101", name: "ICT and Its Applications I", creditHours: 12, class: "Core" },
          { code: "LS 102", name: "Information Literacy Skills", creditHours: 12, class: "Core" },
          { code: "LS 103", name: "Library Operations", creditHours: 12, class: "Core" },
          { code: "CL 100", name: "Communication Skills for Arts and Social Sciences", creditHours: 8, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "LS 104", name: "Information Resources and Services", creditHours: 12, class: "Core" },
          { code: "LS 105", name: "ICT and its Applications II", creditHours: 12, class: "Core" },
          { code: "LS 106", name: "Principles of Organisation of Knowledge", creditHours: 12, class: "Core" },
          { code: "LS 107", name: "Information and Society", creditHours: 8, class: "Core" },
          { code: "LS 108", name: "Customer Care", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "LS 200", name: "Information and Communication Theory", creditHours: 12, class: "Core" },
          { code: "LS 201", name: "Organization of Knowledge I", creditHours: 12, class: "Core" },
          { code: "LS 202", name: "Collection Development and Management", creditHours: 12, class: "Core" },
          { code: "LS 203", name: "Qualitative Research Methods in Information Science", creditHours: 12, class: "Core" },
          { code: "LS 204", name: "Records Management and Archives Administration I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "LS 205", name: "Organization of Knowledge II: Classification", creditHours: 12, class: "Core" },
          { code: "LS 206", name: "Systems Analysis, Design and Evaluation", creditHours: 12, class: "Core" },
          { code: "LS 207", name: "Records Management and Archives Administration II", creditHours: 12, class: "Core" },
          { code: "LS 208", name: "Quantitative Research Methods in Information Science", creditHours: 12, class: "Core" },
          { code: "LS 209", name: "Marketing of Library and Information Services", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "LS 300", name: "Website Designing for Libraries", creditHours: 12, class: "Core" },
          { code: "LS 301", name: "Database Management Systems", creditHours: 12, class: "Core" },
          { code: "LS 302", name: "Management of Libraries and Information Centres", creditHours: 12, class: "Core" },
          { code: "LS 303", name: "Organization of Knowledge III", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "LS 305", name: "Information User Studies", creditHours: 12, class: "Core" },
          { code: "LS 306", name: "Multimedia Librarianship", creditHours: 12, class: "Core" },
          { code: "LS 307", name: "Knowledge Management", creditHours: 12, class: "Core" },
          { code: "LS 308", name: "Management of Electronic Resources", creditHours: 12, class: "Core" },
          { code: "LS 309", name: "Independent Study", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1059,
      universityId: 2,
      name: "BSc Aquatic Sciences and Fisheries (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "AQ 120", name: "Ecology of Lakes and Rivers", creditHours: 12, class: "Core" },
          { code: "AQ 121", name: "Introduction to Fisheries Science and Technology", creditHours: 8, class: "Core" },
          { code: "BL 111", name: "Introductory Cell Biology and Genetics", creditHours: 12, class: "Core" },
          { code: "ZL 121", name: "Invertebrate Zoology", creditHours: 8, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "AQ 122", name: "Introduction to Aquaculture", creditHours: 12, class: "Core" },
          { code: "AQ 124", name: "Marine Benthic Ecology", creditHours: 8, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" },
          { code: "ZL 122", name: "Chordate Zoology", creditHours: 8, class: "Core" },
          { code: "CH 113", name: "Chemistry for Life Sciences Students", creditHours: 12, class: "Core" },
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "AQ 200", name: "Practical Training I", creditHours: 8, class: "Core" },
          { code: "AQ 231", name: "Marine Biogeochemistry", creditHours: 8, class: "Core" },
          { code: "AQ 232", name: "Fish Population Dynamics and Stock Assessment", creditHours: 12, class: "Core" },
          { code: "AQ 234", name: "Mangrove, Seagrass and Seaweed Ecology", creditHours: 12, class: "Core" },
          { code: "AQ 236", name: "Fish Taxonomy and Biology", creditHours: 12, class: "Core" },
          { code: "EV 200", name: "Environmental Science", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "AQ 224", name: "Plankton Systematics and Ecology", creditHours: 12, class: "Core" },
          { code: "AQ 221", name: "Estuarine and Wetland Ecology", creditHours: 12, class: "Core" },
          { code: "AQ 233", name: "Physical and Geological Processes in the Oceans", creditHours: 8, class: "Core" },
          { code: "AQ 235", name: "Coral Reef Ecosystem", creditHours: 8, class: "Core" },
          { code: "AQ 237", name: "Fish Ecology", creditHours: 8, class: "Core" },
          { code: "BL 234", name: "Biostatistics I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "AQ 300", name: "Practical Training II", creditHours: 8, class: "Core" },
          { code: "AQ 339", name: "Aquaculture Production Systems", creditHours: 12, class: "Core" },
          { code: "AQ 342", name: "Fisheries Resource Management", creditHours: 12, class: "Core" },
          { code: "AQ 320", name: "Watershed Management", creditHours: 8, class: "Core" },
          { code: "AQ 347", name: "Aquabusiness", creditHours: 12, class: "Core" },
          { code: "AQ 348", name: "Aquatic Pollution and Control", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "AQ 340", name: "Genetics, Breeding and Seed Production", creditHours: 12, class: "Core" },
          { code: "AQ 341", name: "Feed Production Technology", creditHours: 8, class: "Core" },
          { code: "AQ 307", name: "Law of the Sea and Inland Waters", creditHours: 8, class: "Core" },
          { code: "AQ 345", name: "Diseases of Fish", creditHours: 8, class: "Core" },
          { code: "AQ 346", name: "Fisheries Economics", creditHours: 8, class: "Core" },
          { code: "AQ 399", name: "Research Project", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1060,
      universityId: 2,
      name: "Bachelor of Science with Geology (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "GY 125", name: "Introduction to Mapping and Surveying", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GY 201", name: "Optical Mineralogy", creditHours: 3, class: "Core" },
          { code: "GY 229", name: "Introduction to Geochemistry", creditHours: 12, class: "Core" },
          { code: "GY 250", name: "Mineralogy and Crystallography", creditHours: 12, class: "Core" },
          { code: "GY 299", name: "Geological mapping 1", creditHours: 8, class: "Core" },
          { code: "FN 250", name: "Financial Literacy", creditHours: 0, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "GY 212", name: "Structural Geology 1", creditHours: 8, class: "Core" },
          { code: "GY 260", name: "Sedimentology and Sedimentary Petrology", creditHours: 12, class: "Core" },
          { code: "GP 120", name: "Earth Physics", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 315", name: "Stratigraphy", creditHours: 8, class: "Core" },
          { code: "GY 330", name: "Principles of Hydrogeology", creditHours: 12, class: "Core" },
          { code: "GY 361", name: "Magmatic Petrology", creditHours: 12, class: "Core" },
          { code: "GY 371", name: "Geo-tectonics", creditHours: 12, class: "Core" },
          { code: "GY 399", name: "Geological mapping 1I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GY 311", name: "Metallic Mineral Deposits", creditHours: 12, class: "Core" },
          { code: "GY 317", name: "Mining Geology", creditHours: 12, class: "Core" },
          { code: "GY 362", name: "Metamorphic Petrology", creditHours: 12, class: "Core" },
          { code: "GY 375", name: "Professional Communication for Geologists", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GY 403", name: "Project Proposal development", creditHours: 8, class: "Core" },
          { code: "GY 409", name: "Industrial Minerals and Rocks", creditHours: 12, class: "Core" },
          { code: "GY 411", name: "Geology and Mineral Resources of Tanzania", creditHours: 12, class: "Core" },
          { code: "GY 412", name: "Ore Microscopy", creditHours: 8, class: "Core" },
          { code: "MN 480", name: "Mineral Economics", creditHours: 12, class: "Core" },
          { code: "MK 100", name: "Introduction to Business", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "GY 344", name: "Geomorphology and Soils", creditHours: 12, class: "Core" },
          { code: "GY 401", name: "History of the Earth", creditHours: 8, class: "Core" },
          { code: "GY 405", name: "Independent Project", creditHours: 12, class: "Core" },
          { code: "GY 427", name: "Remote Sensing and GIS II", creditHours: 8, class: "Core" },
          { code: "GY 446", name: "Environmental Geology", creditHours: 8, class: "Core" },
          { code: "GM 101", name: "Principles and Practice of Management", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1061,
      universityId: 2,
      name: "BSc Food Science and Technology (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "MT 111", name: "Mathematics for Biological and Chemical Sciences", creditHours: 8, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "CH 121", name: "Chemistry Practical I", creditHours: 8, class: "Core" },
          { code: "MC 100", name: "Fundamentals of Microbiology", creditHours: 12, class: "Core" },
          { code: "BN 131", name: "Biochemistry I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "FS 100", name: "Introduction to Food Science and Technology", creditHours: 8, class: "Core" },
          { code: "FS 101", name: "Introduction to Food Microbiology", creditHours: 12, class: "Core" },
          { code: "CH 117", name: "Organic Chemistry", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MC 237", name: "Practical in Microbiology I", creditHours: 8, class: "Core" },
          { code: "FS 200", name: "Food Chemistry", creditHours: 12, class: "Core" },
          { code: "FS 201", name: "Food Engineering", creditHours: 12, class: "Core" },
          { code: "FS 203", name: "Food Laws", creditHours: 8, class: "Core" },
          { code: "SC 215", name: "Scientific Methods", creditHours: 8, class: "Core" },
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "BL 234", name: "Biostatistics I", creditHours: 12, class: "Core" },
          { code: "MC 238", name: "Practical in Microbiology II", creditHours: 8, class: "Core" },
          { code: "BN 232", name: "Food Biotechnology", creditHours: 12, class: "Core" },
          { code: "BN 240", name: "Practical in Biochemistry", creditHours: 8, class: "Core" },
          { code: "FS 202", name: "Advanced Food Microbiology", creditHours: 12, class: "Core" },
          { code: "FS 205", name: "Industrial Training I", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "FS 300", name: "Food Processing and Preservation", creditHours: 12, class: "Core" },
          { code: "FS 302", name: "Food Product Development and Marketing", creditHours: 12, class: "Core" },
          { code: "FS 303", name: "Food Safety and Quality Control", creditHours: 8, class: "Core" },
          { code: "FS 304", name: "Human Nutrition and Dietetics", creditHours: 8, class: "Core" },
          { code: "FS 305", name: "Dairy Processing Technology", creditHours: 8, class: "Core" },
          { code: "CP 379", name: "Fermentation Technology and its Applications", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "FS 301", name: "Food Analysis and Sensory Evaluation", creditHours: 12, class: "Core" },
          { code: "FS 306", name: "Industrial Training II", creditHours: 8, class: "Core" },
          { code: "FS 308", name: "Postharvest Technology I", creditHours: 12, class: "Core" },
          { code: "FS 310", name: "Practical in Food Processing and Preservation", creditHours: 8, class: "Core" },
          { code: "BN 338", name: "Biosafety, Biopolicy and Bioethics", creditHours: 12, class: "Core" },
          { code: "FS 311", name: "Food Additives", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "FS 400", name: "Food Packaging", creditHours: 12, class: "Core" },
          { code: "FS 401", name: "Extrusion Technology", creditHours: 12, class: "Core" },
          { code: "FS 403", name: "Food Plant Design", creditHours: 12, class: "Core" },
          { code: "FS 406", name: "Meat, Poultry and Fish Processing", creditHours: 12, class: "Core" },
          { code: "FS 412", name: "Research Project", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "FS 402", name: "Post-harvest Technology II", creditHours: 12, class: "Core" },
          { code: "FS 407", name: "Cereals, Legumes and Oilseed Processing Technology", creditHours: 12, class: "Core" },
          { code: "FS 408", name: "Current Topics in Food Science and Technology", creditHours: 8, class: "Core" },
          { code: "FS 409", name: "Food Business Management and Entrepreneurship", creditHours: 12, class: "Core" },
          { code: "FS 410", name: "Sanitation and Waste Management", creditHours: 12, class: "Core" },
          { code: "FS 413", name: "Industrial Training III", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1062,
      universityId: 2,
      name: "BA Philosophy and Ethics (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "PL 100", name: "Introduction to Philosophical Analysis", creditHours: 12, class: "Core" },
          { code: "PL 111", name: "Introduction to Critical Thinking and Argumentation", creditHours: 12, class: "Core" },
          { code: "CL 106", name: "Communication Skills for Arts and Social Sciences", creditHours: 12, class: "Core" },
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "AS 102", name: "Introduction to Social Science Research Methods I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "PL 112", name: "Formal Logic", creditHours: 12, class: "Core" },
          { code: "PL 122", name: "Metaphysics", creditHours: 12, class: "Core" },
          { code: "PL 132", name: "Theory of Knowledge", creditHours: 12, class: "Core" },
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "AS 103", name: "Introduction to Social Science Research Methods II", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "PL 211", name: "Methods of Philosophy", creditHours: 12, class: "Core" },
          { code: "PL 221", name: "Theories of Ethics and Moral Philosophy", creditHours: 12, class: "Core" },
          { code: "PL 231", name: "History of Ancient and Medieval Philosophy", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "PL 212", name: "Contemporary Political Philosophy", creditHours: 12, class: "Core" },
          { code: "PL 222", name: "History of Modern and Contemporary Philosophy", creditHours: 12, class: "Core" },
          { code: "PL 232", name: "Climate Change and Environmental Ethics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "PL 311", name: "Professional and Civic Ethics", creditHours: 12, class: "Core" },
          { code: "PL 321", name: "Philosophy of Law and Human Rights", creditHours: 12, class: "Core" },
          { code: "PL 331", name: "African Philosophy", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "PL 312", name: "Philosophy of Science", creditHours: 12, class: "Core" },
          { code: "PL 322", name: "Development Ethics and Global Justice", creditHours: 12, class: "Core" },
          { code: "PL 332", name: "Philosophy of Mind and Cognitive Science", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1063,
      universityId: 2,
      name: "BSc Geophysics (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" },
          { code: "MT 127", name: "Linear Algebra", creditHours: 12, class: "Core" },
          { code: "MT 100", name: "Foundations of Analysis", creditHours: 12, class: "Core" },
          { code: "PH 122", name: "Classical Mechanics", creditHours: 8, class: "Core" },
          { code: "PH 133", name: "Vibration and Waves", creditHours: 8, class: "Core" },
          { code: "GE 160", name: "Fundamentals of Geographical Information Systems", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "GY 125", name: "Introduction to Survey and Mapping", creditHours: 12, class: "Core" },
          { code: "GP 120", name: "Earth Physics", creditHours: 8, class: "Core" },
          { code: "MT 136", name: "Ordinary Differential Equations", creditHours: 8, class: "Core" },
          { code: "MT 120", name: "Analysis 1: Functions of Single Variable", creditHours: 8, class: "Core" },
          { code: "PH 121", name: "Electricity and Magnetism", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "MT 114", name: "Computer Programming", creditHours: 12, class: "Core" },
          { code: "PH 347", name: "Electromagnetism", creditHours: 8, class: "Core" },
          { code: "MT 200", name: "Calculus of Several variables", creditHours: 12, class: "Core" },
          { code: "GP 211", name: "Rock Physics", creditHours: 12, class: "Core" },
          { code: "MT 226", name: "Partial Differential Equations", creditHours: 8, class: "Core" },
          { code: "MT 261", name: "Several Variables Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "GE 161", name: "Principles of Remote Sensing", creditHours: 12, class: "Core" },
          { code: "GP 299", name: "Geophysical Field School I", creditHours: 8, class: "Core" },
          { code: "EG 201", name: "Fundamentals of Engineering Geology", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "GY 212", name: "Structural Geology 1", creditHours: 8, class: "Core" },
          { code: "GP 221", name: "Nuclear Geophysics", creditHours: 12, class: "Core" },
          { code: "GY 260", name: "Sedimentology and Sedimentary Petrology", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 315", name: "Stratigraphy", creditHours: 8, class: "Core" },
          { code: "GY 314", name: "Igneous and Metamorphic Petrology", creditHours: 12, class: "Core" },
          { code: "GP 311", name: "Gravity and Magnetic Methods", creditHours: 12, class: "Core" },
          { code: "GP 312", name: "Seismology", creditHours: 12, class: "Core" },
          { code: "PG 418", name: "Sedimentary Basin and Petroleum Systems", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GY 311", name: "Metallic Mineral Deposits", creditHours: 12, class: "Core" },
          { code: "GP 321", name: "Exploration Seismology", creditHours: 12, class: "Core" },
          { code: "GP 322", name: "Electrical and Electromagnetic Methods", creditHours: 12, class: "Core" },
          { code: "GP 313", name: "Geophysical Time Series Analysis", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GY 411", name: "Geology and Mineral Resources of Tanzania", creditHours: 12, class: "Core" },
          { code: "GP 401", name: "Groundwater and Environmental Geophysics", creditHours: 12, class: "Core" },
          { code: "GP 421", name: "Seismic Data Interpretation", creditHours: 12, class: "Core" },
          { code: "GP 414", name: "Inversion of Geophysical Data", creditHours: 12, class: "Core" },
          { code: "GP 499", name: "Industrial Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "MK 100", name: "Principles of Management and Administration", creditHours: 12, class: "Core" },
          { code: "GP 412", name: "Borehole Geophysics", creditHours: 12, class: "Core" },
          { code: "GM 101", name: "Principles and Practices of Management", creditHours: 12, class: "Core" },
          { code: "GP 435", name: "Geophysical Independent Project", creditHours: 12, class: "Core" },
          { code: "GP 402", name: "Seismic Hazard Analysis", creditHours: 12, class: "Core" },
          { code: "GY 446", name: "Environmental Geology", creditHours: 8, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1064,
      universityId: 2,
      name: "BSc Geology and Geothermal Energy (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 114", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "CH 118", name: "Basic Analytical and Physical Chemistry", creditHours: 12, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological Processes", creditHours: 12, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "PH 133", name: "Vibration and Waves", creditHours: 8, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" },
          { code: "PH 122", name: "Classical Mechanics", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 115", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "GY 125", name: "Introduction to Survey and Mapping", creditHours: 12, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "PH 121", name: "Electricity and Magnetism", creditHours: 12, class: "Core" },
          { code: "PH 129", name: "Atmospheric Thermodynamics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GY 201", name: "Optical Mineralogy", creditHours: 12, class: "Core" },
          { code: "GY 229", name: "Introduction to Geochemistry", creditHours: 12, class: "Core" },
          { code: "GY 250", name: "Mineralogy and Crystallography", creditHours: 12, class: "Core" },
          { code: "GR 201", name: "Volcanology", creditHours: 8, class: "Core" },
          { code: "CH 201", name: "Chemical Thermodynamics", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "GY 243", name: "Structural Geology", creditHours: 12, class: "Core" },
          { code: "GY 245", name: "Remote Sensing and GIS", creditHours: 12, class: "Core" },
          { code: "GR 204", name: "Geothermal Systems", creditHours: 12, class: "Core" },
          { code: "GY 260", name: "Sedimentology and Sedimentary Petrology", creditHours: 12, class: "Core" },
          { code: "GY 263", name: "Fundamentals of Geophysics", creditHours: 12, class: "Core" },
          { code: "GY 265", name: "Geological Mapping I", creditHours: 4, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 310", name: "Principles of Stratigraphy and Palaeontology", creditHours: 12, class: "Core" },
          { code: "GY 336", name: "Introduction to Hydrogeology", creditHours: 12, class: "Core" },
          { code: "GY 314", name: "Igneous and Metamorphic Petrology", creditHours: 12, class: "Core" },
          { code: "GY 371", name: "Geotectonics", creditHours: 12, class: "Core" },
          { code: "GR 301", name: "Geochemistry of Thermal Fluids", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GR 302", name: "Isotopes and Tracers of Geothermal Systems", creditHours: 8, class: "Core" },
          { code: "GR 305", name: "Geothermal Exploration Methods and Modelling", creditHours: 12, class: "Core" },
          { code: "GR 306", name: "Geothermal Drilling Technology and Risk Management", creditHours: 12, class: "Core" },
          { code: "GY 355", name: "Geological mapping II", creditHours: 4, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GY 411", name: "Geology and Mineral Resources of Tanzania", creditHours: 12, class: "Core" },
          { code: "MN 480", name: "Mineral Economics", creditHours: 12, class: "Core" },
          { code: "GR 400", name: "Borehole Logging", creditHours: 8, class: "Core" },
          { code: "GR 401", name: "Geomechanics", creditHours: 12, class: "Core" },
          { code: "GR 402", name: "Project Proposal Development", creditHours: 8, class: "Core" },
          { code: "GY 485", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "GY 410", name: "Advanced Hydrogeology", creditHours: 8, class: "Core" },
          { code: "GY 401", name: "History of the Earth", creditHours: 8, class: "Core" },
          { code: "GM 100", name: "Principles and Practice of Management", creditHours: 12, class: "Core" },
          { code: "ME 322", name: "Renewable Energy Technology", creditHours: 12, class: "Core" },
          { code: "GR 403", name: "Geothermal Utilization", creditHours: 8, class: "Core" },
          { code: "GY 405", name: "Independent Project", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1065,
      universityId: 2,
      name: "BSc Engineering Geology (UDSM)",
      ntaLevel: 8,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "EV 200", name: "Environmental Science I", creditHours: 8, class: "Core" },
          { code: "GY 100", name: "Introduction to Geology and Geological processes", creditHours: 12, class: "Core" },
          { code: "EG 100", name: "Workshop Training", creditHours: 12, class: "Core" },
          { code: "ME 101", name: "Engineering Drawing", creditHours: 8, class: "Core" },
          { code: "MT 161", name: "Matrices and Basic Calculus for Non Majors", creditHours: 12, class: "Core" },
          { code: "EE 171", name: "Introduction to Computers and Programming for Engineers", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "DS 113", name: "Development Perspectives II", creditHours: 12, class: "Core" },
          { code: "GY 120", name: "Earth Materials (Rocks and Minerals)", creditHours: 12, class: "Core" },
          { code: "MT 171", name: "One Variable Calculus for Non Majors", creditHours: 12, class: "Core" },
          { code: "SC 102", name: "Civil Engineering Drawing", creditHours: 10, class: "Core" },
          { code: "SC 112", name: "Civil Engineering Materials I", creditHours: 12, class: "Core" },
          { code: "GY 125", name: "Introduction to Mapping and Surveying", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "GY 201", name: "Optical Mineralogy", creditHours: 12, class: "Core" },
          { code: "GY 252", name: "Fundamentals of Engineering Geology", creditHours: 12, class: "Core" },
          { code: "MT 261", name: "Several Variable Calculus for Non-Majors", creditHours: 12, class: "Core" },
          { code: "TR 111", name: "Engineering Surveying", creditHours: 8, class: "Core" },
          { code: "TR 231", name: "Geology for Civil Engineers", creditHours: 8, class: "Core" },
          { code: "GY 265", name: "Geological Mapping I", creditHours: 4, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "MT 271", name: "Statistics for Mathematics Non-Major", creditHours: 12, class: "Core" },
          { code: "GY 243", name: "Structural Geology", creditHours: 12, class: "Core" },
          { code: "GY 245", name: "Remote Sensing and GIS", creditHours: 12, class: "Core" },
          { code: "GY 260", name: "Sedimentology and Sedimentary Petrology", creditHours: 12, class: "Core" },
          { code: "TR 112", name: "Engineering Surveying II", creditHours: 8, class: "Core" },
          { code: "TR 232", name: "Soil Mechanics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "GY 250", name: "Mineralogy and Crystallography", creditHours: 12, class: "Core" },
          { code: "GY 336", name: "Introduction to Hydrogeology", creditHours: 12, class: "Core" },
          { code: "GY 361", name: "Magmatic Petrology", creditHours: 12, class: "Core" },
          { code: "SC 211", name: "Civil Engineering Materials II", creditHours: 12, class: "Core" },
          { code: "GY 310", name: "Principles of Stratigraphy and Palaeontology", creditHours: 12, class: "Core" },
          { code: "TR 334", name: "Foundation Engineering I", creditHours: 8, class: "Core" },
          { code: "GY 355", name: "Geological Mapping II", creditHours: 4, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "GY 423", name: "Applied Rock mechanics", creditHours: 12, class: "Core" },
          { code: "GY 362", name: "Metamorphic Petrology", creditHours: 12, class: "Core" },
          { code: "TR 324", name: "Pavement Design and Maintenance", creditHours: 12, class: "Core" },
          { code: "TR 335", name: "Foundation Engineering", creditHours: 8, class: "Core" },
          { code: "GY 263", name: "Fundamentals of Geophysics", creditHours: 12, class: "Core" },
          { code: "GY 311", name: "Metallic Mineral Deposits", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 7,
        semesterName: "Semester VII",
        modules: [
          { code: "GY 411", name: "Geology and Mineral Resources of Tanzania", creditHours: 12, class: "Core" },
          { code: "GY 431", name: "Dam Geology", creditHours: 8, class: "Core" },
          { code: "GY 485", name: "Practical Training", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 8,
        semesterName: "Semester VIII",
        modules: [
          { code: "SC 430", name: "General Engineering Procedures and Ethics", creditHours: 12, class: "Core" },
          { code: "GY 424", name: "Rock Excavation and Support", creditHours: 8, class: "Core" },
          { code: "GY 363", name: "Integrated Prospecting Methods", creditHours: 12, class: "Core" },
          { code: "GY 405", name: "Independent Project", creditHours: 12, class: "Core" },
          { code: "IE 445", name: "Entrepreneurship for Engineers", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
    {
      id: 1066,
      universityId: 2,
      name: "BA Mass Communication (UDSM)",
      ntaLevel: 7,
      semesters: [
      {
        semesterNumber: 1,
        semesterName: "Semester I",
        modules: [
          { code: "CO 101", name: "Introduction to Mass Communication", creditHours: 12, class: "Core" },
          { code: "JO 102", name: "Introduction to Journalism", creditHours: 12, class: "Core" },
          { code: "DS 112", name: "Development Perspectives I", creditHours: 12, class: "Core" },
          { code: "JE 100", name: "English for the Media", creditHours: 8, class: "Core" },
          { code: "JS 100", name: "Kiswahili for the Media", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 2,
        semesterName: "Semester II",
        modules: [
          { code: "JO 103", name: "Introduction to Writing for the Media", creditHours: 8, class: "Core" },
          { code: "CO 102", name: "Mediated Communication in Africa", creditHours: 8, class: "Core" },
          { code: "PL 111", name: "Intro. To Critical Thinking and Argumentation", creditHours: 8, class: "Core" },
          { code: "DS 113", name: "Development Perspective II", creditHours: 12, class: "Core" },
          { code: "JO 106", name: "Media Ethics", creditHours: 8, class: "Core" },
          { code: "JO 108", name: "Radio Broadcasting", creditHours: 12, class: "Core" },
          { code: "JO 109", name: "Television Production", creditHours: 12, class: "Core" },
          { code: "CO 103", name: "Technical Basis of Communication", creditHours: 8, class: "Core" },
          { code: "CO 100", name: "Practicum", creditHours: 8, class: "Core" }
        ]
      },
      {
        semesterNumber: 3,
        semesterName: "Semester III",
        modules: [
          { code: "CO 201", name: "Theories of Mass Communication", creditHours: 12, class: "Core" },
          { code: "CO 205", name: "Mass Media and Society", creditHours: 12, class: "Core" },
          { code: "JR 203", name: "Mass Media Research", creditHours: 12, class: "Core" },
          { code: "LW 540", name: "Media Law", creditHours: 12, class: "Core" },
          { code: "CO 211", name: "Media Management and Organisation", creditHours: 12, class: "Core" },
          { code: "CO 208", name: "TV Production", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 4,
        semesterName: "Semester IV",
        modules: [
          { code: "CO 203", name: "Issues in Mass Communication Research", creditHours: 12, class: "Core" },
          { code: "CO 204", name: "Contemporary Mass Media in Tanzania", creditHours: 12, class: "Core" },
          { code: "CO 207", name: "Special Radio Production", creditHours: 12, class: "Core" },
          { code: "CO 200", name: "Practicum", creditHours: 8, class: "Core" },
          { code: "JO 206", name: "Advanced Media Ethics", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 5,
        semesterName: "Semester V",
        modules: [
          { code: "CO 301", name: "Audience Research", creditHours: 12, class: "Core" },
          { code: "CO 303", name: "Development Communication", creditHours: 12, class: "Core" },
          { code: "CO 305", name: "New Media Technologies", creditHours: 12, class: "Core" },
          { code: "CO 307", name: "Dissertation I", creditHours: 12, class: "Core" }
        ]
      },
      {
        semesterNumber: 6,
        semesterName: "Semester VI",
        modules: [
          { code: "CO 302", name: "International Mass Communication System", creditHours: 12, class: "Core" },
          { code: "CO 304", name: "Media Criticism", creditHours: 12, class: "Core" },
          { code: "CO 308", name: "Dissertation II", creditHours: 12, class: "Core" },
          { code: "CO 306", name: "Broadcast and Cable Programming", creditHours: 12, class: "Core" }
        ]
      }
      ]
    },
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