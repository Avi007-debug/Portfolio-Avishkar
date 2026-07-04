import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, Github, Globe, Search, X } from "lucide-react";

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
}

const projects: Project[] = [
  {
    title: "HyperAD",
    subtitle: "Active Directory Attack Path Analysis Platform",
    description: "Built a graph-intelligence security platform to analyze Active Directory attack paths using temporal hypergraphs and risk reasoning.",
    tech: ["Python", "TypeScript", "CSS", "Temporal Hypergraphs", "Graph Algorithms"],
    github: "https://github.com/Avi007-debug/HyperAD",
    highlight: "Cybersecurity + AI",
    categories: ["Cybersecurity", "AI & ML"],
    points: [
      "Developed an Active Directory security analysis platform that models enterprise identity relationships as temporal hypergraphs.",
      "Implemented graph-based attack path detection and risk prioritization for proactive defense planning.",
      "Designed an AI-assisted reasoning layer to convert graph findings into actionable remediation insights.",
      "Built full-stack workflows enabling security analysts to investigate, interpret, and respond to privilege escalation risks."
    ],
    impact: "Uncovers complex, time-dependent attack paths inside Active Directory security matrices."
  },
  {
    title: "SmartStay",
    subtitle: "AI-Powered PG Accommodation Platform",
    description: "End-to-end platform for discovering paying-guest (PG) accommodations with multiple AI features and real-time chat/notifications.",
    tech: ["React", "TypeScript", "Flask", "Supabase", "Groq AI", "Llama 3.1", "Realtime"],
    github: "https://github.com/Avi007-debug/SmartStay",
    live: "https://smartstay-ruddy.vercel.app/",
    highlight: "SDE + AI",
    categories: ["AI & ML", "Full Stack"],
    points: [
      "Built a production-ready React + TypeScript front end and Flask API integrated with Supabase for auth, real-time data, and storage.",
      "Integrated Groq AI models to implement 6 AI features (personalized recommendations, sentiment analysis, hidden-charges detector, travel-time estimator, listing description generator, and chatbot).",
      "Implemented anonymous real-time chat, row-level security, and notification systems for price/vacancy alerts.",
      "Built secure role-based dashboards (User/Owner/Admin) with DB-level RLS, verification pipelines, and listing moderation capabilities."
    ],
    impact: "Combines full-stack web engineering, real-time messaging, and Groq-backed AI pipelines into a cohesive platform."
  },
  {
    title: "SmartSecure IDS",
    subtitle: "Multi-Stage ML-Powered Intrusion Detection System",
    description: "Real-time IDS combining packet capture, flow aggregation, multi-stage ML classifiers, and a dashboard for live alerts.",
    tech: ["Python", "FastAPI", "Scapy", "Scikit-Learn", "SHAP", "React"],
    github: "https://github.com/Avi007-debug/SmartSecure",
    highlight: "Cybersecurity",
    categories: ["Cybersecurity", "AI & ML"],
    points: [
      "Developed a FastAPI-based real-time IDS using Scapy for packet capture, flow aggregation, and multi-stage ML classifiers.",
      "Built ensemble models (Random Forest / Gradient Boosting) and implemented SHAP explainability for model transparency.",
      "Delivered an interactive React dashboard for live threat feed, severity visualization, and historical threat intelligence."
    ],
    impact: "Translates high-velocity packet buffers into explained ML inferences under low-latency boundaries."
  },
  {
    title: "Master Algorithm Platform",
    subtitle: "High-Performance Algorithm Visualization Engine",
    description: "A high-performance, interactive algorithm visualization platform bridging a React frontend with a pure C execution engine.",
    tech: ["React", "Node.js", "Express", "C", "Framer Motion", "Docker", "Vercel"],
    github: "https://github.com/Avi007-debug/Master_Algorithm",
    live: "https://master-algorithm.vercel.app/",
    highlight: "SDE",
    categories: ["Full Stack"],
    points: [
      "Engineered a full-stack platform utilizing a Node.js API to safely spawn and trace exactly 100 compiled C executables via IPC.",
      "Developed a dynamic React/Vite frontend using Framer Motion to parse complex JSON execution traces into GPU-accelerated step-by-step visual animations.",
      "Implemented robust backend security protocols, including Regex sanitization and strict execution timeouts to prevent command injection.",
      "Authored a comprehensive algorithmic database detailing asymptotic derivations and space complexity bounds for over 100 distinct algorithms.",
      "Built Interactive MCQ Guided Tutorials, DAA Theory sections, and an Interview Preparation Mode with timers."
    ],
    impact: "Provides an ultra-low latency, highly secure sandbox for evaluating and visualizing exact C memory states via inter-process communication."
  },
  {
    title: "Sherlock-D",
    subtitle: "Hackathon Management & Evaluation Platform",
    description: "A secure hackathon operations platform featuring secure team formation, role-based access control, and real-time leaderboards.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Supabase Auth", "Radix UI", "SlowAPI"],
    github: "https://github.com/Google-Developer-Groups-RVCE/Sherlock-D",
    highlight: "SDE",
    categories: ["Full Stack", "Cybersecurity"],
    points: [
      "Architected a full-stack hackathon management platform for participants and admins using React (TypeScript), FastAPI, and PostgreSQL (Supabase), automating team registration and live public leaderboards.",
      "Implemented a resilient submission pipeline with three-layer file validation, supporting datasets up to 10MB via dual storage backends (Supabase Storage and Google Drive API), ensuring secure data collection.",
      "Designed a secure PostgreSQL database schema with comprehensive Row Level Security (RLS) policies and custom triggers to enforce core business logic (e.g., maximum team size limits) directly at the data layer, reducing backend latency.",
      "Optimized application security by configuring strict CORS origins, SlowAPI rate limiting (20 req/min for auth), injection-safe security_barrier database views, and automated service-role isolation for administrative endpoints."
    ],
    impact: "Provides bulletproof data integrity at the database layer (via RLS and triggers) rather than relying purely on application-level constraints."
  },
  {
    title: "TrustCircle",
    subtitle: "AI Relationship Health App",
    description: "Built a proactive relationship wellness mobile app that detects early signs of relationship erosion and recommends preventive actions.",
    tech: ["Dart", "Flutter", "C++", "Swift"],
    github: "https://github.com/Avi007-debug/TrustCircle",
    highlight: "Mobile + AI",
    categories: ["AI & ML", "IoT & Systems"],
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
    subtitle: "Real-Time Emotion Detection & Mood Tracking",
    description: "Webcam video processing platform using DeepFace and OpenCV to log emotion session analytics.",
    tech: ["Python", "Flask", "DeepFace", "OpenCV", "React", "Supabase", "Docker", "Recharts"],
    github: "https://github.com/Avi007-debug/MoodVue",
    highlight: "AI / Computer Vision",
    categories: ["AI & ML"],
    points: [
      "Built a real-time webcam session analyzer to detect face geometry and classify emotions (DeepFace) with low inference latency.",
      "Developed a Flask backend and React frontend dashboard featuring Recharts visualization for long-term mood history.",
      "Integrated Supabase for secure data storage of emotion logs, analytics records, and user session metadata.",
      "Leveraged Docker containerization to standardize deployment environments for the Python DeepFace dependencies."
    ],
    impact: "Brings complex, deep-learning based emotion classification and analytics straight to the browser with lightweight edge execution."
  },
  {
    title: "Perimeter Intrusion Detection",
    subtitle: "IoT Security Monitoring System",
    description: "Developed an IoT-based perimeter monitoring solution to detect intrusions and trigger timely alerts in physical environments.",
    tech: ["HTML", "C++", "Python", "IoT Edge", "Embedded Sensors"],
    github: "https://github.com/Avi007-debug/Perimeter_Intrusion_Detection",
    highlight: "IoT + Cybersecurity",
    categories: ["IoT & Systems", "Cybersecurity"],
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
    subtitle: "RGB Vegetation Monitoring & Visualization",
    description: "Deterministic, RGB-based CV pipeline to compute a reproducible Canopy Health Index (CHI).",
    tech: ["React", "TypeScript", "Flask", "OpenCV", "Leaflet Maps", "GeoJSON"],
    github: "https://github.com/Avi007-debug/Urban_Canopy_Health_Index_UCHI",
    live: "https://dynamicurbancanopyhealthindex.vercel.app/",
    highlight: "Computer Vision",
    categories: ["Full Stack"],
    points: [
      "Designed and implemented a deterministic CV pipeline (HSV segmentation, pixel-based metrics) to compute an interpretable Canopy Health Index and store results in Supabase.",
      "Built interactive React dashboards and Leaflet visualizations for region comparisons, temporal trends, and GeoJSON overlays.",
      "Automated batch processing and API endpoints for image upload, CHI computation, and data exports."
    ],
    impact: "Provides a reproducible environmental health score without relying on resource-heavy ML model training."
  },
  {
    title: "AegisShield",
    subtitle: "AI-Enabled Security Intelligence Platform",
    description: "Built a security-focused intelligence platform combining web engineering and AI services for threat-aware workflows.",
    tech: ["TypeScript", "Python", "CSS", "Threat Intelligence"],
    github: "https://github.com/Avi007-debug/AegisShield",
    highlight: "Security",
    categories: ["Cybersecurity", "AI & ML"],
    points: [
      "Developed an AI-enabled security platform that transforms raw signals into actionable threat intelligence.",
      "Designed a modular TypeScript/Python architecture for rapid feature iteration and maintainability.",
      "Implemented integrated analysis workflows that connect backend intelligence to user-facing dashboards.",
      "Built scalable foundations for future expansion into advanced detection and risk prioritization."
    ],
    impact: "Connects raw event streams to intelligent reasoning backends for accelerated threat triage."
  },
  {
    title: "Fuel Tracker",
    subtitle: "Smart Fuel Usage & Cost Monitoring",
    description: "Fuel management app to track consumption, monitor costs, and improve fuel efficiency decisions.",
    tech: ["Dart", "Flutter", "HTML", "Mobile Analytics"],
    github: "https://github.com/Avi007-debug/Fuel-Tracker-App",
    highlight: "Mobile",
    categories: ["IoT & Systems"],
    points: [
      "Developed a fuel tracking application that centralizes consumption and cost data for better decision-making.",
      "Implemented trend-based analytics to help users identify inefficiencies and optimize fuel spend.",
      "Designed intuitive logging and history workflows to improve data quality and retention.",
      "Built cross-platform-ready foundations using Dart with native build integrations."
    ],
    impact: "Translates raw fill-up records into dynamic cost optimization recommendations."
  },
  {
    title: "Phantom Mode",
    subtitle: "Proactive Smartphone Context Intelligence Engine",
    description: "AI context engine that predicts user intent and pre-configures smartphone behavior before critical moments.",
    tech: ["JavaScript", "Python", "Intent Prediction", "Context Learning"],
    github: "https://github.com/Avi007-debug/Phantom_Mode_PrismOpenClaw",
    highlight: "AI",
    categories: ["AI & ML"],
    points: [
      "Developed a proactive smartphone intelligence engine that anticipates user needs from behavioral context.",
      "Implemented intent prediction workflows to automate device preparation ahead of time-sensitive events.",
      "Designed a cross-language architecture combining JavaScript orchestration with Python AI modules.",
      "Built adaptive personalization loops that continuously refine context-aware automation quality."
    ],
    impact: "Builds a continuous learning loop of human behavior directly on edge device simulations."
  },
  {
    title: "NetChat",
    subtitle: "Multi-Mode Multithreaded Chat System",
    description: "Multi-flavor chat application demonstrating OS and networking concepts in both C and WebSockets.",
    tech: ["C", "POSIX", "Node.js", "Socket.IO", "JWT", "AES Encryption"],
    github: "https://github.com/Avi007-debug/Netchat",
    highlight: "Networking / Systems",
    categories: ["Full Stack", "IoT & Systems"],
    points: [
      "Implemented multi-threaded and multi-process C servers demonstrating pthreads, shared memory, message queues, and semaphores for IPC and concurrency.",
      "Built a modern Node.js/Socket.IO web server with JWT authentication, AES message encryption, and file upload support.",
      "Integrated persistent storage and logging mechanisms for user auth and message history."
    ],
    impact: "Highlights low-level UNIX socket programming alongside modern JavaScript real-time patterns."
  },
  {
    title: "SmartDrop",
    subtitle: "AI-Driven Irrigation Control (IoT Prototype)",
    description: "IoT irrigation system combining sensor data, ML models, and microcontroller firmware.",
    tech: ["Arduino", "C++", "Python", "IoT", "ML", "scikit-learn"],
    github: "https://github.com/Avi007-debug/SmartDrop-AI-Driven-Irrigation",
    highlight: "IoT",
    categories: ["IoT & Systems"],
    points: [
      "Developed microcontroller firmware (Arduino/ESP) interfacing soil-moisture sensors with centralized relays.",
      "Implemented a gateway ML client loading serialized model artifacts (.pkl) for irrigation scheduling.",
      "Logged field data records and created dynamic visualization dashboards to assess water saving thresholds."
    ],
    impact: "Brings ML decision cycles to localized agricultural sensors, reducing water waste."
  },
  {
    title: "Chyrp Rebuild",
    subtitle: "Modern Full-Stack Blogging Platform",
    description: "Rebuilt the lightweight Chyrp blog engine as a modern, extensible full-stack web application.",
    tech: ["React", "Vite", "Flask", "PostgreSQL", "Supabase", "JWT Auth", "Gunicorn"],
    github: "https://github.com/Avi007-debug/chyrp-rebuild-clonefest",
    highlight: "Full-Stack",
    categories: ["Full Stack"],
    points: [
      "Rebuilt a legacy blog engine into a modern React + Flask full-stack platform with PostgreSQL and Supabase media storage.",
      "Implemented modular content types (text, photo, audio, video) and extensions (comments, caching, tags) to maintain Chyrp's extensibility.",
      "Designed REST API with JWT auth and integrated cloud hosting pipelines (Vercel frontend, Render backend)."
    ],
    impact: "Restores flexibility and speed of a legacy engine with a secure, production-grade decoupled stack."
  }
];

const categoryList = ["All", "AI & ML", "Cybersecurity", "Full Stack", "IoT & Systems"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by both category and search query
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
    <SectionWrapper id="projects">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="section-heading mb-2">
            <span className="gradient-text">Projects</span> Portfolio
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore {projects.length} advanced AI, Cybersecurity, Full-Stack, and IoT implementations ranked by relevance.
          </p>
        </div>
        <a
          href="https://github.com/Avi007-debug"
          target="_blank"
          rel="noreferrer"
          className="btn-outline flex items-center gap-2 text-xs"
        >
          <Github className="w-3.5 h-3.5" /> View All on GitHub
        </a>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {categoryList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground border-accent shadow-[0_0_15px_rgba(var(--neon-blue-rgb),0.35)]"
                  : "bg-card/30 text-muted-foreground border-border/50 hover:text-foreground hover:bg-card/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search title, description, or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-full bg-card/25 border border-border/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
              className="glass-card p-6 flex flex-col relative overflow-hidden cursor-pointer h-full group"
            >
              {/* Card Hover Border Glow */}
              <div
                className="absolute inset-[-1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "gradient-border", // Fallback helper or CSS class
                  borderColor: "hsl(var(--neon-blue) / 0.15)",
                }}
              />

              <div className="flex items-start justify-between mb-2 gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors text-base heading-font">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {project.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </div>

              <p className="text-sm text-secondary-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tech-badge text-[10px] px-2 py-0.5">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] text-muted-foreground flex items-center pl-1 font-mono">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No projects match your criteria.</p>
        </div>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8 relative z-10 flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-muted/20 transition-all text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1 pr-6">
                  <h3 className="text-2xl font-bold text-foreground heading-font">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.highlight && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                      {selectedProject.highlight}
                    </span>
                  )}
                </div>
                <p className="text-sm text-accent font-medium">{selectedProject.subtitle}</p>
              </div>

              {/* Cost Saving Alert for paused backends */}
              {selectedProject.live && !["Master Algorithm", "CatchUpX"].includes(selectedProject.title) && (
                <div className="px-4 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse flex-shrink-0" />
                  <span>Note: The backend database and AI services for this live demo are temporarily offline to reduce hosting costs.</span>
                </div>
              )}

              {/* Action Links */}
              <div className="flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex items-center gap-2 text-xs py-1.5 px-3.5 bg-card/45"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex items-center gap-2 text-xs py-1.5 px-3.5"
                  >
                    <Globe className="w-4 h-4" /> Visit Live Demo
                  </a>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mono mono mb-2">
                    Key Achievements & Contributions
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.points.map((pt, j) => (
                      <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.impact && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mono mono mb-1">
                      Technical Impact / Complexity
                    </h4>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mono mono mb-2">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="tech-badge text-xs px-3 py-1 bg-accent/5">
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
