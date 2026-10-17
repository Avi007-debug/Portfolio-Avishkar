import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, Github, Globe, Search, X, Layers, Code2, ShieldAlert } from "lucide-react";
import BrutalistTiltCard from "./BrutalistTiltCard";
import CyberScrambleText from "./CyberScrambleText";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  highlight?: string;
  categories: string[];
  points: string[];
  impact?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "HyperAD",
    subtitle: "Active Directory Attack Path Analysis Platform",
    description: "Built a graph-intelligence security platform to analyze enterprise Active Directory attack paths using temporal hypergraphs and automated risk reasoning.",
    tech: ["Python", "TypeScript", "CSS", "Temporal Hypergraphs", "Graph Algorithms"],
    github: "https://github.com/Avi007-debug/HyperAD",
    highlight: "Cybersecurity + AI",
    categories: ["Cybersecurity", "AI & ML"],
    accent: "#10b981", // Emerald
    points: [
      "Developed an Active Directory security analysis platform that models enterprise identity relationships as temporal hypergraphs.",
      "Implemented graph-based attack path detection and risk prioritization for proactive defense planning.",
      "Designed an AI-assisted reasoning layer to convert graph findings into actionable remediation insights.",
      "Built full-stack workflows enabling security analysts to investigate, interpret, and respond to privilege escalation risks."
    ],
    impact: "Uncovers complex, time-dependent attack paths inside Active Directory security matrices before exploitation."
  },
  {
    title: "SmartStay",
    subtitle: "AI-Powered Accommodation & Real-Time Platform",
    description: "End-to-end platform for discovering paying-guest accommodations with personalized AI workflows and real-time chat/notification infrastructure.",
    tech: ["React 18", "TypeScript", "Flask", "Supabase", "Groq AI", "Llama 3.1", "Realtime"],
    github: "https://github.com/Avi007-debug/SmartStay",
    live: "https://smartstay-ruddy.vercel.app/",
    highlight: "SDE + AI",
    categories: ["AI & ML", "Full Stack"],
    accent: "#f59e0b", // Solar Amber
    points: [
      "Built a production-ready React + TypeScript front end and Flask API integrated with Supabase for auth, real-time data, and storage.",
      "Integrated Groq AI models to implement 6 AI features (personalized recommendations, sentiment analysis, hidden-charges detector, travel-time estimator, listing description generator, and chatbot).",
      "Implemented anonymous real-time chat, row-level security, and notification systems for price/vacancy alerts.",
      "Built secure role-based dashboards (User/Owner/Admin) with DB-level RLS, verification pipelines, and listing moderation capabilities."
    ],
    impact: "Combines full-stack web engineering, real-time messaging, and Groq-backed sub-second AI pipelines into a cohesive platform."
  },
  {
    title: "SmartSecure IDS",
    subtitle: "Multi-Stage ML Intrusion Detection System",
    description: "Real-time network IDS combining kernel-level packet capture, flow aggregation, multi-stage ML classifiers, and an interactive threat dashboard.",
    tech: ["Python", "FastAPI", "Scapy", "Scikit-Learn", "SHAP", "React"],
    github: "https://github.com/Avi007-debug/SmartSecure",
    highlight: "Cybersecurity",
    categories: ["Cybersecurity", "AI & ML"],
    accent: "#3b82f6", // Electric Cobalt
    points: [
      "Developed a FastAPI-based real-time IDS using Scapy for packet capture, flow aggregation, and multi-stage ML classifiers.",
      "Built ensemble models (Random Forest / Gradient Boosting) and implemented SHAP explainability for model transparency.",
      "Delivered an interactive React dashboard for live threat feed, severity visualization, and historical threat intelligence."
    ],
    impact: "Translates high-velocity packet buffers into explained ML inferences under low-latency boundaries."
  },
  {
    title: "Master Algorithm Platform",
    subtitle: "High-Performance Algorithm Visualization Sandbox",
    description: "A high-performance algorithmic engineering platform bridging a dynamic React frontend with a pure C compiled execution engine.",
    tech: ["React", "Node.js", "Express", "C", "Framer Motion", "Docker", "Vercel"],
    github: "https://github.com/Avi007-debug/Master_Algorithm",
    live: "https://master-algorithm.vercel.app/",
    highlight: "Systems + SDE",
    categories: ["Full Stack"],
    accent: "#06b6d4", // Glitch Teal / Cyan
    points: [
      "Engineered a full-stack platform utilizing a Node.js API to safely spawn and trace exactly 100 compiled C executables via IPC.",
      "Developed a dynamic React/Vite frontend using Framer Motion to parse complex JSON execution traces into GPU-accelerated step-by-step visual animations.",
      "Implemented robust backend security protocols, including Regex sanitization and strict execution timeouts to prevent command injection.",
      "Authored a comprehensive algorithmic database detailing asymptotic derivations and space complexity bounds for over 100 distinct algorithms.",
      "Built Interactive MCQ Guided Tutorials, DAA Theory sections, and an Interview Preparation Mode with timers."
    ],
    impact: "Provides an ultra-low latency sandbox for evaluating and visualizing exact C memory states via inter-process communication."
  },
  {
    title: "Sherlock-D",
    subtitle: "Hackathon Operations & Verification Engine",
    description: "A secure hackathon operations platform featuring team formation, role-based access control, database-level security policies, and live leaderboards.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Supabase Auth", "Radix UI", "SlowAPI"],
    github: "https://github.com/Google-Developer-Groups-RVCE/Sherlock-D",
    highlight: "SDE & Security",
    categories: ["Full Stack", "Cybersecurity"],
    accent: "#ec4899", // Signal Crimson / Pink
    points: [
      "Architected a full-stack hackathon management platform for participants and admins using React (TypeScript), FastAPI, and PostgreSQL (Supabase), automating team registration and live public leaderboards.",
      "Implemented a resilient submission pipeline with three-layer file validation, supporting datasets up to 10MB via dual storage backends (Supabase Storage and Google Drive API), ensuring secure data collection.",
      "Designed a secure PostgreSQL database schema with comprehensive Row Level Security (RLS) policies and custom triggers to enforce core business logic directly at the data layer.",
      "Optimized application security by configuring strict CORS origins, SlowAPI rate limiting (20 req/min for auth), injection-safe security_barrier database views, and automated service-role isolation for administrative endpoints."
    ],
    impact: "Enforces data integrity at the database layer (via RLS and triggers) rather than relying purely on application-level constraints."
  },
  {
    title: "MedAssist",
    subtitle: "Healthcare Patient Monitoring & AI Agent Platform",
    description: "RAG-based AI healthcare assistant & patient monitoring platform with multi-tool agent workflows and vector retrieval pipelines.",
    tech: ["React", "TypeScript", "Python", "PostgreSQL", "RAG Pipelines", "LLMs"],
    github: "https://github.com/Avi007-debug/Team_Agent_Wars_Healthcare-Monitoring-AI-Agent",
    live: "https://team-agent-wars-healthcare-monitori.vercel.app/",
    highlight: "RAG + AI Agents",
    categories: ["AI & ML", "Full Stack"],
    accent: "#14b8a6", // Teal
    points: [
      "Developed a RAG-powered healthcare monitoring system integrating semantic retrieval, multi-tool agents, and clinical context assembly.",
      "Designed a responsive React frontend interface for patient status visualization and interactive AI assistant communication.",
      "Engineered backend orchestration APIs utilizing vector embeddings (50k+) and multi-LLM retrieval pipelines.",
      "Frontend interface is deployed and live; backend cloud services are currently offline due to free trial expiration."
    ],
    impact: "Demonstrates production-ready AI healthcare agent orchestration with modular vector retrieval."
  },
  {
    title: "TrustCircle",
    subtitle: "AI-Assisted Relationship Wellness Mobile App",
    description: "Built a proactive relationship wellness mobile app that detects early signs of relationship erosion and recommends preventive actions.",
    tech: ["Dart", "Flutter", "C++", "Swift", "Predictive Analytics"],
    github: "https://github.com/Avi007-debug/TrustCircle",
    highlight: "Mobile + AI",
    categories: ["AI & ML", "IoT & Systems"],
    accent: "#8b5cf6", // Violet
    points: [
      "Developed a cross-platform AI-powered mobile app to proactively assess relationship health and prevent silent degradation.",
      "Designed an insight pipeline that converts behavioral patterns into actionable interventions.",
      "Implemented modular Flutter architecture with native Android/iOS integration for extensibility.",
      "Built a prevention-first UX that increased the practical value of continuous relationship tracking."
    ],
    impact: "Delivers predictive risk scoring and context-aware personalization in a lightweight mobile-native application."
  },
  {
    title: "MoodVue",
    subtitle: "Real-Time Emotion Detection & Computer Vision",
    description: "Webcam video processing platform using DeepFace and OpenCV to analyze face geometry and log emotion session analytics.",
    tech: ["Python", "Flask", "DeepFace", "OpenCV", "React", "Supabase", "Docker", "Recharts"],
    github: "https://github.com/Avi007-debug/MoodVue",
    highlight: "Computer Vision",
    categories: ["AI & ML"],
    accent: "#a855f7", // Purple
    points: [
      "Built a real-time webcam session analyzer to detect face geometry and classify emotions (DeepFace) with low inference latency.",
      "Developed a Flask backend and React frontend dashboard featuring Recharts visualization for long-term mood history.",
      "Integrated Supabase for secure data storage of emotion logs, analytics records, and user session metadata.",
      "Leveraged Docker containerization to standardize deployment environments for the Python DeepFace dependencies."
    ],
    impact: "Brings complex, deep-learning based emotion classification straight to the browser with lightweight edge execution."
  },
  {
    title: "Perimeter Intrusion Detection",
    subtitle: "IoT Hardware & Security Monitoring System",
    description: "Developed an IoT-based perimeter monitoring solution to detect intrusions and trigger timely physical security alerts.",
    tech: ["HTML", "C++", "Python", "IoT Edge", "Embedded Sensors"],
    github: "https://github.com/Avi007-debug/Perimeter_Intrusion_Detection",
    highlight: "IoT + Security",
    categories: ["IoT & Systems", "Cybersecurity"],
    accent: "#ef4444", // Crimson
    points: [
      "Built an IoT intrusion detection system integrating embedded sensing logic with application-layer monitoring.",
      "Implemented event-driven detection and alert workflows for improved physical security response.",
      "Designed cross-layer communication between device-side C++ components and Python control services.",
      "Developed a lightweight monitoring interface for real-time visibility of perimeter events."
    ],
    impact: "Integrates low-level hardware sensors with a centralized visualization dashboard."
  },
  {
    title: "Urban Canopy Health Index",
    subtitle: "RGB Deterministic Vegetation Monitoring",
    description: "Deterministic, RGB-based computer vision pipeline to compute a reproducible Canopy Health Index (CHI) from aerial imagery.",
    tech: ["React", "TypeScript", "Flask", "OpenCV", "Leaflet Maps", "GeoJSON"],
    github: "https://github.com/Avi007-debug/Urban_Canopy_Health_Index_UCHI",
    live: "https://dynamicurbancanopyhealthindex.vercel.app/",
    highlight: "Computer Vision",
    categories: ["Full Stack"],
    accent: "#22c55e", // Grass Green
    points: [
      "Designed and implemented a deterministic CV pipeline (HSV segmentation, pixel-based metrics) to compute an interpretable Canopy Health Index and store results in Supabase.",
      "Built interactive React dashboards and Leaflet visualizations for region comparisons, temporal trends, and GeoJSON overlays.",
      "Automated batch processing and API endpoints for image upload, CHI computation, and data exports."
    ],
    impact: "Provides a reproducible environmental health score without relying on resource-heavy ML model training."
  },
  {
    title: "NetChat",
    subtitle: "POSIX C Sockets & WebSockets Concurrency System",
    description: "Multi-paradigm networking application demonstrating low-level UNIX concurrency in C alongside modern WebSockets.",
    tech: ["C (POSIX)", "pthreads", "Node.js", "Socket.IO", "JWT", "AES-256"],
    github: "https://github.com/Avi007-debug/Netchat",
    highlight: "Systems & Networking",
    categories: ["Full Stack", "IoT & Systems"],
    accent: "#6366f1", // Slate Blue
    points: [
      "Implemented multi-threaded and multi-process C servers demonstrating pthreads, shared memory, message queues, and semaphores for IPC and concurrency.",
      "Built a modern Node.js/Socket.IO web server with JWT authentication, AES message encryption, and file upload support.",
      "Integrated persistent storage and logging mechanisms for user auth and message history."
    ],
    impact: "Highlights low-level UNIX socket programming alongside modern JavaScript real-time patterns."
  },
  {
    title: "AegisShield",
    subtitle: "AI Threat Intelligence Ingestion Platform",
    description: "Security-focused intelligence platform combining full-stack web engineering and AI modules for automated threat parsing.",
    tech: ["TypeScript", "Python", "CSS", "Threat Intelligence"],
    github: "https://github.com/Avi007-debug/AegisShield",
    highlight: "Security",
    categories: ["Cybersecurity", "AI & ML"],
    accent: "#0284c7", // Sky Blue
    points: [
      "Developed an AI-enabled security platform that transforms raw signals into actionable threat intelligence.",
      "Designed a modular TypeScript/Python architecture for rapid feature iteration and maintainability.",
      "Implemented integrated analysis workflows that connect backend intelligence to user-facing dashboards.",
      "Built scalable foundations for future expansion into advanced detection and risk prioritization."
    ],
    impact: "Connects raw event streams to intelligent reasoning backends for accelerated threat triage."
  },
  {
    title: "SmartDrop",
    subtitle: "AI-Driven Irrigation & Embedded Firmware",
    description: "Prototype IoT irrigation system combining sensor readings, serialized scikit-learn models, and microcontroller firmware.",
    tech: ["Arduino", "C++", "Python", "IoT", "scikit-learn"],
    github: "https://github.com/Avi007-debug/SmartDrop-AI-Driven-Irrigation",
    highlight: "IoT + ML",
    categories: ["IoT & Systems"],
    accent: "#10b981", // Mint
    points: [
      "Developed microcontroller firmware (Arduino/ESP) interfacing soil-moisture sensors with centralized relays.",
      "Implemented a gateway ML client loading serialized model artifacts (.pkl) for irrigation scheduling.",
      "Logged field data records and created dynamic visualization dashboards to assess water saving thresholds."
    ],
    impact: "Brings ML decision cycles to localized agricultural sensors, reducing water waste."
  },
  {
    title: "Chyrp Rebuild",
    subtitle: "Modernized Extensible Content Platform",
    description: "Rebuilt the lightweight Chyrp blog engine as a modern, decoupled full-stack application supporting multiple media formats.",
    tech: ["React", "Vite", "Flask", "PostgreSQL", "Supabase", "JWT Auth"],
    github: "https://github.com/Avi007-debug/chyrp-rebuild-clonefest",
    highlight: "Full-Stack",
    categories: ["Full Stack"],
    accent: "#f97316", // Rust Orange
    points: [
      "Rebuilt a legacy blog engine into a modern React + Flask full-stack platform with PostgreSQL and Supabase media storage.",
      "Implemented modular content types (text, photo, audio, video) and extensions (comments, caching, tags) to maintain Chyrp's extensibility.",
      "Designed REST API with JWT auth and integrated cloud hosting pipelines (Vercel frontend, Render backend)."
    ],
    impact: "Restores flexibility and speed of a legacy engine with a secure, production-grade decoupled stack."
  }
];

const categoryList = ["All", "Cybersecurity", "AI & ML", "Full Stack", "IoT & Systems"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.categories.includes(activeCategory);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <SectionWrapper id="projects" index="05" tag="CURATED ENGINEERING ARCHIVE">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="editorial-heading">
            <CyberScrambleText text="Selected Engineering Projects" />
          </h2>
          <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
            Archived systems across graph security, low-latency C pipelines, and multi-tenant AI
          </p>
        </div>

        <a
          href="https://github.com/Avi007-debug"
          target="_blank"
          rel="noreferrer"
          className="btn-cyber-outline text-xs self-start md:self-auto"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub Index ({projects.length})</span>
        </a>
      </div>

      {/* ── Controls: Filter Tabs + Search Input ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-border/80 light:border-black">
        <div className="flex flex-wrap gap-2">
          {categoryList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-150 select-none border-2 ${
                activeCategory === cat
                  ? "bg-accent text-black border-accent shadow-[3px_3px_0px_0px_#ffffff] light:shadow-[3px_3px_0px_0px_#000000]"
                  : "bg-card text-muted-foreground hover:text-foreground border-border/80 light:border-black hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search systems, tech, or protocols..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 border-2 border-border/80 light:border-black bg-card focus:outline-none focus:border-accent focus:shadow-[3px_3px_0px_0px_#06b6d4] light:focus:shadow-[3px_3px_0px_0px_#000000] text-xs mono text-foreground placeholder:text-muted-foreground/60 transition-all rounded-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Editorial Project Archive: Distinct Restrained Accent Treatments ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const projectNum = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <BrutalistTiltCard
                  className="dossier-card flex flex-col justify-between p-6 relative group overflow-hidden h-full"
                  style={{
                    borderLeft: `4px solid ${project.accent}`,
                  }}
                >
                  <div>
                  {/* Top metadata line: Project Number + Role/Highlight */}
                  <div className="flex items-center justify-between mb-3 text-[11px] mono">
                    <span
                      className="font-bold tracking-wider"
                      style={{ color: project.accent }}
                    >
                      // {projectNum}
                    </span>

                    {project.highlight && (
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide border uppercase"
                        style={{
                          backgroundColor: `${project.accent}12`,
                          borderColor: `${project.accent}30`,
                          color: project.accent,
                        }}
                      >
                        {project.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="heading-font text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mono text-xs text-muted-foreground mb-3 leading-snug">
                    {project.subtitle}
                  </p>

                  {/* Concise Description */}
                  <p className="text-secondary-foreground text-xs sm:text-[13px] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack labels */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border/40">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag text-[10px] py-0.5 px-2">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="mono text-[10px] text-muted-foreground self-center pl-1">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links & Deep Dive button */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mono text-xs text-foreground/80 hover:text-accent flex items-center gap-1 font-semibold transition-colors"
                    >
                      <span>Specs &amp; Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="p-1.5 rounded border border-border/80 text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} Live Deployment`}
                          className="p-1.5 rounded border border-border/80 text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </BrutalistTiltCard>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 dossier-card">
          <p className="mono text-xs text-muted-foreground">
            NO ARCHIVE MATCHES SPECIFIED CRITERIA.
          </p>
        </div>
      )}

      {/* ── Project Technical Deep-Dive Modal / Specification Sheet ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pt-24 pb-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Modal Sheet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl my-auto max-h-[calc(100vh-7.5rem)] overflow-y-auto p-6 sm:p-8 relative z-10 flex flex-col gap-6 bg-card border-2 border-accent light:border-black shadow-[8px_8px_0px_0px_#06b6d4] light:shadow-[8px_8px_0px_0px_#000000] rounded-none"
              style={{
                borderTop: `6px solid ${selectedProject.accent}`,
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close Specification"
                className="absolute right-4 top-4 p-1.5 border-2 border-border/80 light:border-black bg-card hover:bg-accent/20 text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1 pr-6">
                  <h3 className="heading-font text-2xl sm:text-3xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.highlight && (
                    <span
                      className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded border uppercase"
                      style={{
                        backgroundColor: `${selectedProject.accent}15`,
                        borderColor: `${selectedProject.accent}40`,
                        color: selectedProject.accent,
                      }}
                    >
                      {selectedProject.highlight}
                    </span>
                  )}
                </div>
                <p className="mono text-xs font-medium text-accent">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Offline note notice if applicable */}
              {selectedProject.live && !["Master Algorithm", "CatchUpX"].includes(selectedProject.title) && (
                <div className="px-3.5 py-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs flex items-center gap-2 mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
                  <span>
                    {selectedProject.title === "MedAssist"
                      ? "Notice: Frontend interface is live; backend AI cloud API is currently offline due to provider free-tier expiration."
                      : "Notice: Backend database/inference services for this live demo are temporarily offline to reduce hosting costs."}
                  </span>
                </div>
              )}

              {/* Primary Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyber-outline text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View GitHub Repository</span>
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cyber-primary text-xs"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-5 pt-2 border-t border-border/40">
                <div>
                  <h4 className="cyber-label mb-2.5">
                    TECHNICAL IMPLEMENTATION &amp; RESPONSIBILITIES
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.points.map((pt, j) => (
                      <li key={j} className="text-xs sm:text-sm text-secondary-foreground flex items-start gap-2.5 leading-relaxed">
                        <span
                          className="w-1.5 h-1.5 rounded-none mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: selectedProject.accent }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.impact && (
                  <div>
                    <h4 className="cyber-label mb-1.5">
                      TECHNICAL COMPLEXITY &amp; IMPACT
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-mono bg-secondary/30 p-3 rounded border border-border/40">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="cyber-label mb-2">
                    TECHNOLOGIES &amp; ARCHITECTURE
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="tech-tag text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;
