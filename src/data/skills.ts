export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: ["LLMs", "RAG", "Agentic AI", "NLP", "Generative AI", "PyTorch", "Transformers",  "LangChain", "LlamaIndex", "Prompt Engineering","Chatbots", "Vector DB", "Model Evaluation","Computer Vision"],
  },
  {
    category: "Software Development",
    skills: ["Agile", "Object Oriented Programming (OOP)", "SDLC", "RESTful APIs", "Algorithms & Data Structures", "Code Reviews", "Testing & Debugging"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "C", "Assembly"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS - EC2, S3, Lambda, DynamoDB, CloudWatch, CloudFormation", "Docker", "vllm", "Ollama"],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "EDA", "Data Visualization", "Statistics"],
  },
 
  {
    category: "Tools & Frameworks",
    skills: ["Git/Github", "CI/CD", "Jupyter", "VSCode", "Streamlit"],
  },
];
