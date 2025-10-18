export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export const experiences: Experience[] = [
  {
    role: "AI Research Assistant",
    company: "San Jose State University",
    location: "San Jose, CA",
    startDate: "2025-02",
    endDate: "Present",
    description: [
      "Improved chatbot response accuracy and reduced hallucination rates by analyzing interaction data and refining conversational logic",
      "Built automated analytics pipelines with OpenAI GPT models to evaluate chat quality, monitor engagement trends, and cut manual review time by 50%",
      "Built and tested a ReAct-based agentic prototype system to improve the existing RAG-based chatbot with more context-aware and goal-oriented conversations",
    ],
    technologies: ["AI Agents", "LlamaIndex", "Retrieval-Augmented Generation (RAG)", "Vector DB", "Large Language Models (LLMs)","Python", "OpenAI API", "Chatbot", "Analytics", "Evaluation", "Monitoring", "Pipeline", "Automation"],
    links: [
      { label: "KingbotGPT Chatbot", url: "https://libapps.sjsu.edu/kingbot/" },
      { label: "AI Agents LibGuides", url: "https://library.sjsu.edu/aiagents" },
      { label: "Vector DB LibGuides", url: "https://library.sjsu.edu/vector-database" },
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Mphasis",
    location: "New York, NY",
    startDate: "2025-05",
    endDate: "2025-08",
    description: [
      "Benchmarked LLM deployment frameworks, analyzing performance, latency, and resource efficiency to identify bottlenecks and drive cost-performance optimization for scalable internal model serving",
      "Designed GPU utilization and resource-sharing strategies to enable multi-user model access and prevent recurring CUDA out-of-memory issues during peak usage",
      "Integrated system-level monitoring and performance dashboards to track GPU usage, detect load imbalances, and ensure continuous availability",
    ],
    technologies: ["vLLM","Llama.cpp","Ollama","Python", "Data Science","LLM Deployment", "Benchmarking"],
  },
  {
    role: "Software Development Engineer",
    company: "Amazon",
    location: "Toronto, ON",
    startDate: "2022-06",
    endDate: "2023-05",
    description: [
      "Contributed to the software development life cycle within Amazon’s A9 advertising platform, focusing on targeted ads and bidding strategies, with responsibilities spanning design, coding, testing, and deployment",
      "Evaluated AWS instance fleet configurations for daily cron jobs processing trillions of ad interaction records, conducting cost-performance benchmarking to recommend efficient compute setups",
      "Monitored production systems and resolved high-priority tickets as part of the on-call engineering rotation, ensuring the high availability and performance of software applications",
    ],
    technologies: ["Software Development Life Cycle", "AWS - EC2, S3, Lambda, DynamoDb, CloudWatch", "Java", "Python", "Scala", "Code Reviews", "Testing & Debugging", "Agile", "Object Oriented Programming (OOP)"],
  },
    {
    role: "Engineering Intern",
    company: "Bombardier",
    location: "Dorval, QC",
    startDate: "2019-09",
    endDate: "2020-08",
    description: [
      "Handled data migration during Bombardier’s segregation process, developing automated VBA scripts to streamline reporting workflows across all departments.",
      "Wrote comprehensive technical documentation covering fault-reporting procedures, team handoff protocols, and training materials for incoming interns and engineers",
      "Collaborated with cross-functional teams to improve data consistency, traceability, and workflow transparency, contributing to smoother project handovers and compliance reporting",
    ],
    technologies: ["Web Development", "HTML", "CSS", "JavaScript", "VBA", "Excel", "Data Migration", "Data Consistency", "Technical Documentation", "Communication", "Project Management"],
  },
];
