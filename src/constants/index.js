export const profile = {
  name: "Srinithi K",
  role: "AI Systems Engineer",
  location: "Chennai, India",

  email: "srinithi15k@gmail.com",
  summary:
    "AI systems engineer specializing in production-grade, cloud-native RAG and multi-agent architectures for real-world industrial applications — with a growing interest in AI at the edge of embedded and hardware-driven environments.",
  links: {
    linkedin: "https://linkedin.com/in/srinithik",
    github: "https://github.com/srik15",
    kaggle: "https://kaggle.com/srinithikmk",
    leetcode: "https://leetcode.com/u/Sri15nithi/",
    resume: "/SRINITHI_K_FlowCV_Resume_2026-07-16.pdf",
  },
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Passion", value: "100%" },
];

export const coreSkills = [
  { name: "RAG & Agentic AI", level: 92 },
  { name: "Machine Learning", level: 88 },
  { name: "Deep Learning", level: 85 },
  { name: "Python", level: 90 },
  { name: "Cloud (GCP/AWS)", level: 82 },
  { name: "MLOps", level: 78 },
];

export const focusAreas = [
  {
    title: "RAG Platforms",
    description:
      "End-to-end retrieval pipelines with hybrid search, Vertex AI, and production observability for industrial domains.",
  },
  {
    title: "Multi-Agent Systems",
    description:
      "LangGraph orchestration across structured tables, documents, and video — designed for real technician workflows.",
  },
  {
    title: "Cloud-Native AI",
    description:
      "FastAPI microservices on GCP Cloud Run with safety layers, Model Armor, and enterprise reliability patterns.",
  },
  {
    title: "Applied ML",
    description:
      "Computer vision, time-series models, and voice interfaces that move from research notebooks into shipped systems.",
  },
];

export const experiences = [
  {
    company: "GGS Information Services",
    role: "AI Engineer",
    date: "Jul 2025 – Present",
    location: "Chennai, India",
    highlights: [
      "Architected a production-grade RAG-based agentic AI platform for automotive OEM aftermarket and owned delivery of 3 features.",
      "Designed a multi-agent conversational system with LangGraph across structured and unstructured enterprise datasets.",
      "Built a custom ingestion + hybrid retrieval pipeline (dense embeddings + BM25) for service procedures on Vertex AI and Cloud Run.",
      "Shipped Python FastAPI microservices on GCP with modular architecture, observability, and LLM safety via Model Armor.",
      "Led junior engineers, client conversations, and a Google architecture validation session on GCP services.",
    ],
    tech: [
      "GCP",
      "LangGraph",
      "Vertex AI",
      "RAG",
      "FastAPI",
      "Whisper",
      "Model Armor",
      "Postgres",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    date: "Jan 2025 – Jun 2025",
    location: "Chennai, India",
    highlights: [
      "Contributed to Search on Amazon Tablet devices — performance metrics and cross-language consistency.",
      "Redesigned metrics logging across Kotlin (Android) and React Native using builder and singleton patterns.",
      "Partnered with multiple teams to validate a unified telemetry pipeline for long-term analytics reliability.",
    ],
    tech: ["AWS", "Java", "Kotlin", "React Native"],
  },
  {
    company: "Robotico Digital LLP",
    role: "AI Intern",
    date: "Jun 2024 – Jul 2024",
    location: "Chennai, India",
    highlights: [
      "Built a custom LSTM neural network to predict future work orders with ~10% loss.",
      "Explored Weibull-RNN models for time-series prediction in operational workflows.",
    ],
    tech: ["LSTM", "Time Series", "Python"],
  },
  {
    company: "RBG.AI",
    role: "AI Intern",
    date: "Jan 2024 – May 2024",
    location: "Chennai, India",
    highlights: [
      "Built an LLM web app that answers questions from uploaded image text content (68% accuracy).",
      "Compared YOLOv8–v10 for wildlife detection on 16K+ camera-trap images across 7 species — 95.6% precision with YOLOv10.",
      'Published IEEE paper: "Wildlife Recognition in Trap Images: Assessing the Efficiency of YOLO Frameworks" (ID 10939902).',
    ],
    tech: ["YOLO", "LLM", "Roboflow", "Computer Vision"],
  },
];

export const projects = [
  {
    name: "Eco Vision",
    tagline: "Wildlife detection comparative study",
    description:
      "Preprocessed conservation trap images, balanced classes, annotated with smart polygons in Roboflow, and trained YOLO v7–v9 with hyperparameter tuning for a rigorous model comparison.",
    tags: ["YOLO", "Computer Vision", "Roboflow", "Python"],
    gradient: "from-indigo-950 via-purple-900 to-violet-700",
  },
  {
    name: "Convo Buddy",
    tagline: "RAG voice companion for patient care",
    description:
      "Retrieval-augmented voice bot trained on a custom dataset for bedridden patients, with Firebase personalization and realtime health sensor data.",
    tags: ["RAG", "Voice AI", "Firebase", "Healthcare"],
    gradient: "from-slate-900 via-indigo-900 to-purple-800",
  },
  {
    name: "Igniters",
    tagline: "TN EDII Finalist — smart street lighting",
    description:
      "Realtime mobile and web control for sustainable street lighting with fault detection, ESP8266 sensor networks, and Firebase as the cloud backbone.",
    tags: ["IoT", "Firebase", "Android", "ESP8266"],
    gradient: "from-gray-900 via-violet-950 to-indigo-800",
  },
  {
    name: "Agentic RAG Platform",
    tagline: "Production automotive AI assistant",
    description:
      "Multi-agent RAG system with hybrid retrieval, LangGraph orchestration, and GCP Cloud Run deployment for enterprise aftermarket workflows.",
    tags: ["LangGraph", "GCP", "RAG", "FastAPI"],
    gradient: "from-indigo-950 via-blue-950 to-purple-900",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "C", "SQL", "Kotlin", "JavaScript", "R"],
  },
  {
    label: "AI / ML",
    items: [
      "RAG",
      "Agentic AI",
      "Hybrid Retrieval",
      "LangGraph",
      "Prompt Engineering",
      "YOLO v7–v10",
      "LSTM",
      "NLP",
      "LLM Safety",
    ],
  },
  {
    label: "Cloud & Backend",
    items: [
      "GCP Vertex AI",
      "Cloud Run",
      "Cloud SQL",
      "FastAPI",
      "Microservices",
      "Firebase",
      "AWS",
      "REST APIs",
    ],
  },
  {
    label: "Tools & Frameworks",
    items: [
      "LangSmith",
      "Google ADK",
      "Whisper",
      "Ollama",
      "Pydantic",
      "Streamlit",
      "Git",
      "Roboflow",
    ],
  },
];

export const education = {
  degree: "B.E. Computer Science and Engineering",
  school: "St. Joseph's College of Engineering",
  location: "Chennai, India",
  period: "2021 – 2025",
  gpa: "CGPA 8.98 / 10.0",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Data Structures",
    "Cloud Computing",
    "Computer Vision",
  ],
};

export const certificates = [
  {
    title: "Google Cloud Computing Foundation",
    org: "NPTEL — IIT Kharagpur",
    note: "ELITE Silver · Top 5%",
    year: "2024",
  },
  {
    title: "Python for Data Science",
    org: "NPTEL — IIT Madras",
    note: "ELITE Silver",
    year: "2024",
  },
  {
    title: "BEC Vantage Level B2",
    org: "Cambridge University",
    note: "Business English",
    year: "2023",
  },
  {
    title: "Computer Vision Onramp",
    org: "MATLAB — MathWorks",
    note: null,
    year: "2023",
  },
  {
    title: "Introduction to Probability and Data with R",
    org: "Coursera — Duke University",
    note: null,
    year: "2023",
  },
  {
    title: "Machine Learning and its Applications using Python",
    org: "EduxLabs with Mechanica IIT Madras",
    note: null,
    year: "2023",
  },
];

export const achievements = [
  {
    title: "Kaggle Contributor",
    description: "Active in ML competitions & datasets",
  },
  {
    title: "Research Published",
    description: "IEEE paper on wildlife recognition",
  },
  {
    title: "Open Source",
    description: "Projects on GitHub",
  },
  {
    title: "Hackathon Finalist",
    description: "EDII Tamil Nadu & IIT Indore",
  },
];

export const awards = [
  {
    title: "Finalist — Entrepreneurship Development Institute of India, Tamil Nadu",
    date: "Sep 2024",
  },
  {
    title: "Finalist — AnalyticaX, CFA Conclave'24, IIT Indore",
    date: "Mar 2024",
  },
];

export const coding = {
  leetcode: "150+ problems solved",
  badges: ["100 Days Badge (2024)", "Introduction to Pandas", "January LeetCode Challenge"],
};
