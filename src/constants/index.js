export const profile = {
  name: "Srinithi K",
  role: "AI Engineer",
  location: "Chennai, India",

  email: "srinithi15k@gmail.com",
  eyebrow: "AI ENGINEER · CHENNAI, INDIA",
  headline:
    "AI systems that reason over real enterprise data — reliably, in production.",
  lede: "I design retrieval and agent architectures for environments where hallucination isn't an option: hybrid search pipelines serving automotive technicians in real time, safety-guarded multi-agent systems on GCP, and evaluation harnesses that catch failure before it ships.",
  contactHeadline:
    "Open to AI engineering roles building production-grade retrieval and agent systems.",
  footNote: "Open to remote and relocation.",
  links: {
    linkedin: "https://linkedin.com/in/srinithik",
    github: "https://github.com/srik15",
    kaggle: "https://kaggle.com/srinithikmk",
    leetcode: "https://leetcode.com/u/Sri15nithi/",
    resume: "/SRINITHI_K_FlowCV_Resume_2026-07-16.pdf",
  },
};

export const navLinks = [
  { id: "work", title: "Experience" },
  { id: "systems", title: "Systems" },
  { id: "stack", title: "Stack" },
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
    href: "#stack",
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
    value: "150+",
    description: "DSA problems solved on LeetCode",
  },
];

export const experiences = [
  {
    company: "GGS Information Services",
    role: "AI Engineer",
    date: "JUL 2025 — PRESENT",
    highlights: [
      "Architected the end-to-end design of a production RAG-based agentic platform for automotive OEM aftermarket, owning 3 features from design through deployment.",
      "Designed a multi-agent conversational system in LangGraph, orchestrating structured and unstructured enterprise data.",
      "Built a hybrid retrieval pipeline — dense embeddings + BM25 — for service-procedure XML on Vertex AI and Cloud Run, cutting technician lookup time and reducing service downtime.",
      "Led architecture-validation sessions with Google's engineering team, and integrated LLM safety enforcement via Model Armor and LlamaGuard.",
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
      "Rearchitected the metrics logging system for the Search app on Amazon Tablet devices, unifying collection across Kotlin (Android) and React Native.",
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
    tech: ["LSTM", "YOLO V7–V10", "ROBOFLOW"],
  },
];

export const projects = [
  {
    name: "Convo Buddy",
    meta: "RAG VOICE ASSISTANT · PUBLISHED RESEARCH",
    description:
      "A RAG-based voice bot for bedridden patients, combining conversational context with real-time sensor health data delivered through Firebase. Paper accepted at API Conference Publications.",
    building: false,
    accent: "signal",
  },
  {
    name: "Eco Vision",
    meta: "COMPUTER VISION · 2023",
    description:
      "Comparative study of YOLOv7/v8/v9 on a wildlife camera-trap dataset, with manual polygon annotation in Roboflow and hyperparameter tuning across all three architectures.",
    building: false,
    accent: "amber",
  },
  {
    name: "Igniters",
    meta: "EMBEDDED SYSTEMS · TN EDII FINALIST, 2024",
    description:
      "Real-time street-lighting automation with fault detection, integrating LDR, rain, gas, and humidity sensors through ESP8266 controllers into a Firebase backend.",
    building: false,
    accent: "indigo",
  },
  {
    name: "In progress",
    meta: "AGENT EVALUATION HARNESS",
    description:
      'Building a custom evaluation framework for agentic systems — faithfulness, hallucination rate, and retrieval precision/recall — to close the gap between "it works in a demo" and "it works in production."',
    building: true,
    accent: "muted",
  },
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
      "Finalist, Entrepreneurship Development Institute of India — Tamil Nadu Government",
    highlight: "Tamil Nadu Government",
    meta: "SEP 2024",
  },
  {
    title: "Finalist, AnalyticaX — CFA Conclave, IIT Indore",
    highlight: "CFA Conclave, IIT Indore",
    meta: "MAR 2024",
  },
  {
    title:
      "B.E. Computer Science, St. Joseph's College of Engineering (Anna University Affiliated) — CGPA 8.98/10.0",
    highlight: "B.E. Computer Science",
    meta: "2021–2025",
  },
];
