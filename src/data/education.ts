export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  details?: string;
}

export const education: Education[] = [
  {
    degree: "Master of Science in Artificial Intelligence",
    institution: "San Jose State University",
    location: "San Jose, CA, USA",
    startDate: "2024-01",
    endDate: "2025-12",
    gpa: "3.83/4.0",
    details: " Machine Learning, AI, Data Mining, Deep Learning, Natural Language Processing, Cloud Computing",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "McGill University",
    location: "Montreal, QC, Canada",
    startDate: "2016-09",
    endDate: "2021-12",
    gpa: "3.6/4.0",
    details: "Algorithms & Data Structures, Software engineering practices, Computer Architecture, Computer Vision",
  },
];
