/**
 * Project Object Structure Schema
 * 
 * {
 *   slug: string,                   // Unique URL-friendly identifier
 *   title: string,                  // Name of the project
 *   subtitle: string,               // One-line technical summary
 *   description: string,            // Systems-oriented description (marketing-free)
 *   year: number,                   // Project calendar year
 *   status: string,                 // Current development status (e.g. Active, Completed)
 *   category: string,               // Tech category (e.g. AI Systems, Computer Vision)
 *   primaryStack: string[],         // Interactive filterable/highlighted tools
 *   supportingStack: string[],      // Minor tools, lower hierarchy
 *   bullets: string[],              // Short summary accomplishments
 *   features: string[],             // Detailed technical specs list
 *   githubLink: string | null,      // Link to repository
 *   demoLink: string | null,        // Link to live preview/demo
 *   image: string | null,           // Preview screenshot path
 *   featured: boolean,              // Is this the hero featured project?
 *   collaborative: boolean,         // Is this a collaborative repository?
 *   architecture?: string,          // Optional: system design details
 *   screenshots?: string[],         // Optional: gallery views
 *   challenges?: string[],          // Optional: technical implementation challenges solved
 *   longDescription?: string,       // Optional: markdown body details
 * }
 */

export const projects = [
  {
    slug: "aegissim",
    title: "AegisSim",
    subtitle: "Distributed AI Disaster Response Platform",
    description: "A distributed simulation system built to model emergency routing under load. Utilizes asynchronous event-driven workflows, localized coordinate caching, and WebSocket connections to optimize routing responses dynamically.",
    year: 2026,
    status: "Active",
    category: "AI Systems",
    primaryStack: ["Python", "FastAPI", "React", "Redis", "PostgreSQL", "RabbitMQ", "WebSockets"],
    supportingStack: ["Docker", "YAML", "Shell"],
    bullets: [
      "Asynchronous simulation runner workflows",
      "WebSocket dashboard state coordination",
      "Event-driven message routing pipelines"
    ],
    features: [
      "Asynchronous event loops",
      "WebSocket sync pipelines",
      "Prioritized queue routing",
      "Multi-agent system model",
      "Dynamic REST endpoints",
      "Low-latency execution",
      "Dockerized deployment",
      "RabbitMQ / Redis caching",
      "Relational state tracking"
    ],
    githubLink: null,
    demoLink: "https://github.com/Prithunandananks/AegisSim",
    image: "/assets/projects/aegissim_dashboard.webp",
    featured: true,
    collaborative: false,
    architecture: "Event-driven microservices orchestrated via Docker Compose",
    challenges: [
      "Mitigated message duplicate delivery using Redis idempotent keys",
      "Synchronized high-frequency WebSocket updates using connection pools"
    ],
    longDescription: "Detailed exploration of routing simulation pipelines and performance optimization."
  },
  {
    slug: "eduguide-ai",
    title: "EduGuide AI",
    subtitle: "College & Course Recommendation Chatbot",
    description: "A conversational advisor recommending engineering and university tracks based on user inputs, performance profiles, and goals.",
    year: 2025,
    status: "Completed",
    category: "Conversational AI",
    primaryStack: ["Python", "FastAPI"],
    supportingStack: ["HTML", "CSS", "JavaScript", "YAML"],
    bullets: [
      "Flask-based recommendation APIs",
      "Gemini API modeling integration",
      "Context-aware student profiles matching"
    ],
    githubLink: "https://github.com/Prithunandananks/Edu-Bot",
    demoLink: null,
    image: null,
    featured: false,
    collaborative: true,
    architecture: "Serverless FastAPI functions calling LLM endpoints",
    challenges: [
      "Resolved context window limits by summarizing conversation histories",
      "Normalized raw university data inputs into structured JSON templates"
    ],
    longDescription: "Conversational recommendation platform built using LLM embeddings."
  },
  {
    slug: "flexion-flow",
    title: "Flexion Flow",
    subtitle: "Tele-Rehabilitation Mobile Application",
    description: "A mobile application utilizing on-device computer vision to measure physical rehabilitation angles, offering postural metrics reporting.",
    year: 2024,
    status: "Completed",
    category: "Computer Vision",
    primaryStack: ["Flutter", "PostgreSQL"],
    supportingStack: ["CMake", "Shell"],
    bullets: [
      "Cross-platform mobile client application",
      "ML Kit local camera posture detection",
      "Real-time feedback calculation logic"
    ],
    githubLink: "https://github.com/Prithunandananks/Flexion-Flow",
    demoLink: null,
    image: null,
    featured: false,
    collaborative: true,
    architecture: "Flutter application communicating with a PostgreSQL API backend",
    challenges: [
      "Achieved smooth 60fps on-device kinematic estimates",
      "Optimized offline data sync for poor network environments"
    ],
    longDescription: "Physical rehabilitation application with on-device posture measurements."
  },
  {
    slug: "eduvora",
    title: "EduVora",
    subtitle: "AI-Powered Smart Learning System",
    description: "An educational dashboard that leverages large language model APIs to personalize query answering, timeline schedules, and quiz sets for students.",
    year: 2024,
    status: "Completed",
    category: "AI Education",
    primaryStack: ["React", "Firebase"],
    supportingStack: ["JavaScript", "HTML", "CSS", "Procfile tooling"],
    bullets: [
      "Real-time Firebase database integrations",
      "Adaptive query and quiz system workflows",
      "Interactive AI education dashboard panels"
    ],
    githubLink: "https://github.com/Prithunandananks/eduvora",
    demoLink: null,
    image: null,
    featured: false,
    collaborative: true,
    architecture: "Client-side React rendering connecting directly to Firebase Services",
    challenges: [
      "Implemented secure database access rules for tenant isolation",
      "Synchronized state updates across concurrent user quiz sessions"
    ],
    longDescription: "Smart educational portal combining serverless DBs with LLM integrations."
  }
];
