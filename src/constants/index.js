export const profile = {
  name: "Srinithi K",
  role: "AI Engineer",
  location: "Chennai, India",
  email: "srinithi15k@gmail.com",
  eyebrow: "AI ENGINEER · CHENNAI, INDIA",
  headline:
    "Retrieval and agent systems for enterprise data, built to hold up in production.",
  lede: "I design and build RAG and multi-agent architectures where wrong answers have real costs — hybrid retrieval pipelines serving automotive technicians, safety-guarded agent orchestration on GCP, and evaluation harnesses that catch failures before they reach users.",
  contactHeadline:
    "Open to AI engineering roles building production-grade retrieval and agent systems.",
  footNote: "Open to remote and relocation.",
  links: {
    linkedin: "https://linkedin.com/in/srinithik",
    github: "https://github.com/srik15",
    kaggle: "https://kaggle.com/srinithikmk",
    leetcode: "https://leetcode.com/u/Sri15nithi/",
    hackerrank: "https://www.hackerrank.com/profile/srikavikkayal",
    skillrack: "https://www.skillrack.com/faces/resume.xhtml?id=391095&key=ea8a7a0cb5070c6fe07a73d135d097c7827aff6b",
    resume: `${import.meta.env.BASE_URL}SRINITHI_K_FlowCV_Resume_2026-07-16.pdf`,
  },
};

export const navLinks = [
  { id: "work", title: "Experience", href: "/#work" },
  { id: "systems", title: "Systems", href: "/#systems" },
  {
    id: "what-i-think",
    title: "What I Think",
    to: "/what-i-think-about-ai-stack",
  },
];

export const exploreTiles = [
  {
    label: "Experience",
    title: "A year building production agentic AI at GGS",
    description:
      "Owned features end-to-end on an enterprise RAG platform for automotive aftermarket.",
    href: "#work",
    linkText: "See the experience →",
    tone: "signal",
  },
  {
    label: "Systems",
    title: "Published research, real-world systems",
    description:
      "From wildlife detection at 95.6% precision to a voice bot for bedridden patients.",
    href: "#systems",
    linkText: "Explore the systems →",
    tone: "amber",
  },
  {
    label: "Stack",
    title: "How I think about the AI stack",
    description:
      "Application, orchestration, retrieval, safety, infra — mapped layer by layer.",
    href: "/what-i-think-about-ai-stack",
    linkText: "See the stack →",
    tone: "indigo",
  },
];

export const impactMetrics = [
  {
    value: "3",
    description:
      "Production features owned end-to-end on an enterprise agentic RAG platform",
  },
  {
    value: "95.6%",
    description:
      "Precision on wildlife detection across 16,000+ images, published in IEEE",
  },
  {
    value: "1",
    description: "Peer-reviewed publication on YOLO framework benchmarking",
  },
  {
    value: "[X]%",
    description: "Reduction in technician lookup time after hybrid retrieval rollout",
  },
];

export const experiences = [
  {
    company: "GGS Information Services",
    role: "AI Engineer",
    date: "JUL 2025 — PRESENT",
    highlights: [
      "Architected the end-to-end design of a production RAG-based agentic platform for automotive OEM aftermarket, owning 3 features from design through deployment.",
      "Owned 3 features end-to-end (design → deployment) on a production RAG-based agentic platform for automotive OEM aftermarket, serving [X] technicians / [X] requests per day.",
      "Designed a multi-agent conversational system in LangGraph, orchestrating structured and unstructured enterprise data, reducing [manual escalation rate / turnaround time] by [X]%.",
      "Built a hybrid retrieval pipeline — dense embeddings + BM25 — for service-procedure XML on Vertex AI and Cloud Run, improving retrieval [precision/recall/NDCG] from [X] to [Y] and cutting technician lookup time by [X]%.",
      "Led architecture-validation sessions with Google's engineering team. Integrated LLM safety enforcement via Model Armor, achieving [X]% reduction in flagged unsafe outputs and [X] eval pass rate on RAGAS faithfulness metrics.",
    ],
    tech: [
      "GCP · VERTEX AI",
      "LANGGRAPH",
      "FASTAPI",
      "HYBRID SEARCH",
      "MODEL ARMOR",
      "RAGAS",
    ],
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    date: "JAN — JUN 2025",
    highlights: [
      "Rearchitected the metrics logging system for the Search app on Amazon Tablet devices, unifying collection across Kotlin and React Native microservices of the application.",
      "Partnered across teams to validate a unified telemetry pipeline for long-term maintainability.",
    ],
    tech: ["KOTLIN", "REACT NATIVE", "AWS"],
  },
  {
    company: "Robotico Digital & RBG.AI",
    role: "AI Intern",
    date: "2024",
    companyParts: ["Robotico Digital", "RBG.AI"],
    highlights: [
      "Built an LSTM model to forecast future work orders at 10% loss; benchmarked against Weibull-RNN.",
      "Ran a comparative study of YOLOv8–v10 on 16K+ camera-trap images, hitting 95.6% precision — published in IEEE.",
    ],
    tech: ["LSTM", "YOLO V8–V10", "ROBOFLOW"],
  },
];

export const projects = [
  {
    name: "Convo Buddy",
    meta: "RAG VOICE ASSISTANT · PUBLISHED RESEARCH",
    description:
      "A RAG-based voice assistant for bedridden patients, combining conversational context with real-time sensor health data via Firebase and personal information gathered via mobile application. Achieved [X]s average response latency and [X]% grounding accuracy against a [Y]-question eval set. Paper accepted at API Conference Publications.",
    building: false,
    accent: "signal",
    tech: ["RAG", "Firebase", "Whisper", "Streamlit", "Android"],
    href: null,
    github: null,
  },
  {
    name: "Eco Vision",
    meta: "COMPUTER VISION · 2023",
    description:
      "Comparative study of YOLOv8/v9/v10/v11 on a wildlife camera-trap dataset, with manual polygon annotation in Roboflow and hyperparameter tuning across all four models.",
    building: false,
    accent: "amber",
    tech: ["YOLO", "Roboflow", "Python", "Computer Vision"],
    href: "https://ieeexplore.ieee.org/document/10939902",
    github: "https://github.com/srik15/RBG-Team-Gamma",
  },
  {
    name: "Igniters",
    meta: "EMBEDDED SYSTEMS · TN EDII FINALIST, 2024",
    description:
      "Real-time street-lighting automation with fault detection, integrating LDR, rain, gas, and humidity sensors through ESP8266 controllers into a Firebase backend.",
    building: false,
    accent: "indigo",
    tech: ["Java", "Firebase", "ESP8266", "Android"],
    href: "https://github.com/srik15/Igniters-project",
    github: "https://github.com/srik15/Igniters-project",
  },
  {
    name: "In progress",
    meta: "AGENT EVALUATION HARNESS",
    description:
      'Building a custom evaluation framework for agentic systems — faithfulness, hallucination rate, and retrieval precision/recall — to close the gap between "it works in a demo" and "it works in production."',
    building: true,
    accent: "muted",
    tech: ["RAGAS", "LangGraph", "Evaluation"],
    href: null,
    github: null,
  },
];

export const technologies = [
  { name: "Python", tone: "indigo" },
  { name: "SQL", tone: "signal" },
  { name: "JavaScript", tone: "amber" },
  { name: "Kotlin", tone: "indigo" },
  { name: "RAG", tone: "signal" },
  { name: "LangGraph", tone: "indigo" },
  { name: "Prompt Engineering", tone: "amber" },
  { name: "Hybrid Retrieval", tone: "signal" },
  { name: "YOLO", tone: "amber" },
  { name: "FastAPI", tone: "indigo" },
  { name: "Streamlit", tone: "signal" },
  { name: "GCP / Vertex AI", tone: "indigo" },
  { name: "PostgreSQL", tone: "signal" },
  { name: "Firebase", tone: "amber" },
  { name: "Docker", tone: "indigo" },
  { name: "AWS", tone: "amber" },
  { name: "Whisper", tone: "signal" },
  { name: "LangSmith", tone: "indigo" },
  { name: "RAGAS", tone: "signal" },
  { name: "Model Armor", tone: "amber" },
  { name: "LlamaGuard", tone: "indigo" },
  { name: "React Native", tone: "signal" },
  { name: "Roboflow", tone: "amber" },
  { name: "Git", tone: "indigo" },
];

export const skillLayers = [
  {
    name: "APPLICATION",
    sub: "what the user touches",
    items:
      "FastAPI microservices, Streamlit interfaces, voice interfaces via Whisper",
  },
  {
    name: "ORCHESTRATION & AGENTS",
    sub: "reasoning and control flow",
    items:
      "LangGraph, LangSmith, Google ADK, prompt engineering, multi-agent workflows",
  },
  {
    name: "RETRIEVAL & DATA",
    sub: "what grounds the answer",
    items:
      "Hybrid search (dense embeddings + BM25 + TF-IDF), Vertex AI Vector Store, RAGAS evaluation",
  },
  {
    name: "SAFETY & RELIABILITY",
    sub: "what keeps it trustworthy",
    items: "Model Armor, LlamaGuard, sensitive-data policy enforcement",
  },
  {
    name: "INFRASTRUCTURE",
    sub: "what it runs on",
    items:
      "GCP (Vertex AI, Cloud Run, Cloud SQL), PostgreSQL, Firebase, Docker, Git",
  },
];

export const education = {
  degree: "B.E. Computer Science and Engineering",
  school: "St. Joseph's College of Engineering (Anna University Affiliated)",
  dates: "2021–2025",
  detail: "CGPA 8.98/10.0",
};

export const certifications = [
  {
    name: "BEC Vantage Level B2",
    provider: "Cambridge University",
  },
  {
    name: "Google Cloud Computing Foundation (Elite — Silver)",
    provider: "NPTEL · IIT Kharagpur (Top 5%)",
  },
  {
    name: "Python for Data Science (Elite — Silver)",
    provider: "NPTEL · IIT Madras",
  },
  {
    name: "Computer Vision Onramp",
    provider: "MATLAB · MathWorks",
  },
  {
    name: "Introduction to Probability and Data with R",
    provider: "Coursera · Duke University",
  },
  {
    name: "Machine Learning and its Applications using Python",
    provider: "EduxLabs with Mechanica · IIT Madras",
  },
];

export const recognition = [
  {
    title:
      '"Wildlife Recognition in Trap Images: Assessing the Efficiency of YOLO Frameworks" — IEEE',
    highlight: "IEEE",
    meta: "PAPER ID 10939902",
  },
  {
    title:
      '"E-Companion: Revolutionizing Patient Mental Care" — API Conference Publications',
    highlight: "API Conference Publications",
    meta: "ACCEPTED",
  },
  {
    title:
      "Semi-Finalist (Top 100 of 8000+ teams), Entrepreneurship Development Institute of India — Tamil Nadu Government",
    highlight: "Tamil Nadu Government",
    meta: "SEP 2024",
  },
  {
    title: "Finalist, AnalyticaX — CFA Conclave, IIT Indore",
    highlight: "CFA Conclave, IIT Indore",
    meta: "MAR 2024",
  },
];
