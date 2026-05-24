export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: "Terminal",
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    skills: [
      { name: "Python", desc: "Primary language for distributed simulation systems, automated scripting, and backend routing." },
      { name: "JavaScript", desc: "Used for frontend client interactivity, web application building, and runtime scripting." },
      { name: "Dart", desc: "Primary language for cross-platform mobile client application design using Flutter." },
      { name: "C", desc: "Utilized for performance-critical systems programming, algorithm execution, and academic foundations." }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Cpu",
    color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    skills: [
      { name: "FastAPI", desc: "Core framework for building structured, low-latency, asynchronous RESTful APIs." },
      { name: "Flask", desc: "Microframework utilized for recommendation engines and context-aware routing." },
      { name: "Django", desc: "High-level web framework used for structured backend administration and testing." },
      { name: "REST APIs", desc: "Designing contract-safe, validated endpoints with precise JSON payloads." },
      { name: "WebSockets", desc: "Persistent bi-directional communication channels for real-time dashboard updates." },
      { name: "RabbitMQ", desc: "Distributed message broker managing task decoupling and event queues." }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    skills: [
      { name: "React", desc: "Frontend library for building telemetry panels, responsive dashboards, and interactive interfaces." },
      { name: "Flutter", desc: "Cross-platform mobile framework for compiling native client device interfaces." }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    skills: [
      { name: "PostgreSQL", desc: "Relational database used for transactional state storage and structured queries." },
      { name: "Redis", desc: "High-performance memory store for event coordinate caching and active WebSocket states." },
      { name: "Firebase", desc: "Serverless backend integration covering real-time database sync and user authentication." },
      { name: "MongoDB", desc: "NoSQL document database utilized for flexible JSON-like data schema prototyping." },
      { name: "MySQL", desc: "Relational database platform for managing transactional data structures and constraints." }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "Layers",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    skills: [
      { name: "Docker", desc: "Containerized environments orchestration mirroring localized multi-service distributed clusters." },
      { name: "Linux", desc: "Primary development OS environment for shell commands execution and server deployments." },
      { name: "Git", desc: "Distributed version control system for staging commits, branches management, and merges." },
      { name: "GitHub", desc: "Collaborative repository platform handling codebase revision tracking and workflow history." }
    ]
  },
  {
    id: "ai-ml",
    title: "AI / ML Integration",
    icon: "Sparkles",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    skills: [
      { name: "Gemini API", desc: "Large language model integrations for recommendation dialogues and query mapping." },
      { name: "Google ML Kit", desc: "On-device computer vision models executing body coordinate kinematics estimation." },
      { name: "Hugging Face", desc: "Model checkpoints hosting, semantic inference engines, and pipelines deployment." },
      { name: "PyTorch", desc: "Neural networks computational graph testing, training pipelines, and tensor preparation." }
    ]
  },
  {
    id: "tools",
    title: "Tools & Configurations",
    icon: "Wrench",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    skills: [
      { name: "CMake", desc: "Cross-platform build system generator utilized for compiling compiled assets." },
      { name: "YAML", desc: "Configuration formatting for project settings, environment details, and server tasks." },
      { name: "Shell Scripting", desc: "Automating routine shell commands, file manipulations, and deployment routines." },
      { name: "Procfile Tooling", desc: "Process type declarations for managing application runtime workers and pipelines." }
    ]
  }
];

// Flat skills mapping for general compatibility if needed
export const skills = {
  Languages: ["Python", "JavaScript", "Dart", "C"],
  Frameworks: ["FastAPI", "Flask", "Django", "React", "Flutter", "REST APIs"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  AI_ML: ["Hugging Face", "Gemini API", "Google ML Kit", "PyTorch"],
  Tools: ["Docker", "Git", "GitHub", "Linux", "RabbitMQ", "WebSockets"],
  SupportingTools: ["CMake", "Ruby", "YAML", "Shell", "Procfile tooling"]
};
