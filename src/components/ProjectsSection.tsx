import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, Github, Globe, Search, X, Layers, Code2, ShieldAlert, Lock } from "lucide-react";
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
  status: "Completed" | "Ongoing";
  isPrivate?: boolean;
  privateNote?: string;
}

const rawProjects: Project[] = [
  {
    title: "PathWarden",
    subtitle: "Evidence-Driven Attack Path Reconstruction & Threat Forensics",
    description: "High-scale threat investigation platform ingesting 30 GB+ heterogeneous EDR/SIEM logs under an 8 GB RAM lock with DuckDB, near-linear graph correlation, and an air-gapped on-device Tri-Agent LLM.",
    tech: ["Python", "FastAPI", "DuckDB", "PyArrow", "Next.js", "Cytoscape.js", "Ollama", "Docker"],
    github: "https://github.com/Avi007-debug/PathWarden",
    live: "https://path-warden-delta.vercel.app/",
    highlight: "Cybersecurity + Big Data",
    categories: ["Cybersecurity", "AI & ML", "Full Stack"],
    accent: "#06b6d4", // Glitch Cyan
    status: "Ongoing",
    isPrivate: false,
    points: [
      "Processes 15 GB to 30 GB+ raw security/EDR logs (20M+ events) under an 8.0 GB RAM lock (<500 MB peak per worker, 3-4 GB overall system usage) via 64 MB streaming chunkers.",
      "Vectorized DuckDB SQL over PyArrow Parquet views executes columnar joins (event_ts windowing) across millions of records in seconds.",
      "Graph correlation via O(alpha(N)) Disjoint-set Union-Find with logarithmic degree damping, cutting alert noise by 56%–86%.",
      "Air-gapped on-device Tri-Agent LLM engine (Ollama / Qwen 2.5 Coder) generating plain-English incident briefings with zero cloud telemetry egress.",
      "Deterministic forensic chain of custody with byte-offset pointers (ref:file_id:start_byte:line_num) and defensible blast radius reachability."
    ],
    impact: "Solves enterprise SecOps alert fatigue by reconstructing full multi-stage attack DAGs from 30 GB raw telemetry under strict memory locks."
  },
  {
    title: "HyperAD",
    subtitle: "Active Directory Attack Path Intelligence Platform",
    description: "Graph-intelligence security platform modeling enterprise Active Directory relationships as temporal hypergraphs, executing deterministic graph algorithms and LangChain ReAct agents.",
    tech: ["Python", "FastAPI", "React", "D3.js", "Neo4j", "NetworkX", "HyperNetX", "LangChain", "Ollama"],
    github: "https://github.com/Avi007-debug/HyperAD",
    highlight: "Cybersecurity + AI",
    categories: ["Cybersecurity", "AI & ML"],
    accent: "#10b981", // Emerald
    status: "Completed",
    isPrivate: true,
    privateNote: "Private repository due to patent evaluation & IP clearance review",
    points: [
      "Models Active Directory identity relationships as temporal hypergraphs where edge risk weights decay exponentially over time based on credential staleness.",
      "Implements deterministic graph algorithms: Temporal Bellman-Ford O(V*E), Tarjan's SCC for circular trust loops, Kleinberg HITS, and Frigioni Dynamic SSSP O(m log n) for real-time incremental updates.",
      "Built an interactive counterfactual simulator on D3.js allowing analysts to sever compromised ACL edges and preview eliminated attack paths in real time.",
      "Integrated LangChain ReAct agent with local LLaMA-3 for natural language to Cypher query translation and automated ReportLab PDF audit generation.",
      "Developed as the practical implementation for an IEEE academic research paper and engineering dossier."
    ],
    impact: "Uncovers complex, time-dependent privilege escalation paths inside Active Directory security matrices before adversary exploitation."
  },
  {
    title: "CipherLens",
    subtitle: "AI-Powered IPsec Protocol Analyzer & Security Framework",
    description: "Zero-decryption IPsec VPN assessment framework combining deterministic IKE state dissection with LightGBM + TreeSHAP flow classification, Shannon entropy verification, and NIST SP 800-77 scoring.",
    tech: ["Python", "FastAPI", "React 19", "LightGBM", "TreeSHAP", "Scapy", "strongSwan", "Tailwind CSS"],
    github: "https://github.com/Avi007-debug/CipherLens",
    highlight: "Network Cryptography + XAI",
    categories: ["Cybersecurity", "AI & ML", "Full Stack"],
    accent: "#6366f1", // Electric Indigo
    status: "Completed",
    isPrivate: false,
    points: [
      "Built for NTRO under Smart India Hackathon 2026 (PS 26160) to audit encrypted tunnels without breaking payload privacy.",
      "Trained a 24-feature LightGBM model classifying opaque ESP tunnels with 96.7%–99.4% accuracy (VoIP 99.4%, DNS Tunnels 99.1%, Bulk Exfil 97.5%) using timing variance and burst cadence.",
      "Attached local TreeSHAP feature attributions (<15ms) certifying exact decision boundaries and computed real-time Shannon entropy (H(X) ~ 7.94/8.00 bits/byte) to verify ciphertext opacity.",
      "Engineered deterministic IKEv1/IKEv2 state parser detecting CVE-2002-1623 (Aggressive Mode PSK cracking) and Sweet32 3DES collisions.",
      "Implemented pre-deployment ipsec.conf policy what-if simulator and automated 0–100 posture scoring anchored to NIST SP 800-77 Rev. 1 & CNSA 2.0."
    ],
    impact: "Enables defense and intelligence agencies to detect encrypted tunnel exfiltration and protocol downgrades without decrypting payloads."
  },
  {
    title: "ArgusASM",
    subtitle: "Attack-Surface Inventory & Merkle Drift Sentinel",
    description: "Autonomous External Attack-Surface Management (ASM) and cryptographic baseline drift sentinel enforcing strict authorization scope, 4 perimeter probes, explainable hygiene scoring, and SHA-256 Merkle audit chains.",
    tech: ["Python", "FastAPI", "React 19", "TypeScript", "Vite", "dnspython", "cryptography", "Docker", "Render", "Vercel"],
    github: "https://github.com/aiori-hackathon/A3-PS011-TC116",
    live: "https://a3-ps-011-tc-116.vercel.app",
    highlight: "EASM + Cryptography",
    categories: ["Cybersecurity", "Full Stack"],
    accent: "#f59e0b", // Amber
    status: "Completed",
    isPrivate: false,
    points: [
      "Engineered autonomous external perimeter sentinel for AIORI Hackathon 2026 (PS-011) enforcing strict scope caps (20 domains / 10 hosts) and zero-network-call rejections.",
      "Built 4 concurrent probes: recursive DNS resolver with cycle detection, TLS X.509 ASN.1 certificate inspector, non-intrusive TCP banner grabber (ports 22, 53, 80, 443, 8080), and dangling cloud CNAME detector (AWS S3, GitHub Pages, Azure).",
      "Architected stateful drift engine (T0 -> T1 -> T2) with 8 typed events and an explainable 0–100 Perimeter Hygiene scoring model with class deduction caps.",
      "Integrated tamper-evident SHA-256 Merkle audit chain linking historical snapshot roots for non-repudiation and cryptographic audit verification.",
      "Built Human-In-The-Loop (HITL) sign-off drawer, emergency kill-switch API, and automated SARIF 2.1.0 and printable executive audit report generators."
    ],
    impact: "Provides continuous, tamper-evident visibility over external attack surfaces while strictly guaranteeing non-exploitation safety policies."
  },
  {
    title: "Vajra-OT",
    subtitle: "Industrial Control Systems (ICS/SCADA) Security Platform",
    description: "AI-powered OT/ICS security assessment and digital twin simulation platform auditing industrial networks across Purdue Model Zones with Modbus/S7Comm fingerprinting and a local LLM tool router.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "Modbus TCP", "Siemens S7Comm", "Conpot", "OpenPLC", "Ollama"],
    github: "https://github.com/Avi007-debug/Vajra-OT",
    highlight: "OT/ICS Security + Local LLM",
    categories: ["Cybersecurity", "AI & ML", "IoT & Systems"],
    accent: "#ef4444", // Red
    status: "Ongoing",
    isPrivate: true,
    privateNote: "Private repository due to ongoing company research & industrial evaluation",
    points: [
      "Audits industrial devices across Purdue Model Zones (Level 1/2) with active protocol probes for Modbus TCP (MEI FC 43 Device ID) and Siemens S7Comm (COTP SZL firmware queries).",
      "Automates industrial vulnerability detection: unauthenticated Modbus FC3 holding register access, default PLC credentials (openplc/admin), cleartext protocols, and firmware CVE matching (CVE-2021-31664, CVSS 9.8).",
      "Deploys an optimized local LLM tool router (vajra-analyst-lite) under 2-second routing latency with 0ms deterministic keyword offline fallback and strict safety filters.",
      "Features digital twin simulation lab with interactive SVG topology graph, animated flow particles, real-time node toggling (ONLINE/OFFLINE), and 8-second background threat monitoring.",
      "Supports zero-code switching between real hardware (Conpot honeypot, OpenPLC on Raspberry Pi) and mocked simulation fallback across 5 industrial PLCs."
    ],
    impact: "Bridges the operational technology gap by automating non-disruptive security auditing and digital twin simulation for critical industrial infrastructure."
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
    accent: "#f97316", // Solar Orange
    status: "Ongoing",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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
    status: "Completed",
    isPrivate: false,
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

  // Prevent background scrolling and enable Escape key dismissal when modal is open
  useEffect(() => {
    if (selectedProject) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject]);

  const filteredProjects = rawProjects.filter((project) => {
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
            Production systems across threat investigation, graph security, cryptography, and full-stack AI
          </p>
        </div>

        <a
          href="https://github.com/Avi007-debug"
          target="_blank"
          rel="noreferrer"
          className="btn-cyber-outline text-xs self-start md:self-auto"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub Index ({rawProjects.length})</span>
        </a>
      </div>

      {/* ── Controls: Filter Tabs + Search Input ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-border/80 light:border-black">
        <div className="flex flex-wrap gap-2">
          {categoryList.map((cat) => (
            <button
              key={cat}
              type="button"
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
              type="button"
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
            const projectCatalogIndex = rawProjects.findIndex((p) => p.title === project.title);
            const projectNum = String(
              activeCategory === "All" && !searchQuery ? idx + 1 : projectCatalogIndex + 1
            ).padStart(2, "0");

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
                    {/* Top metadata line: Project Number + Status Badge + Highlight / Private */}
                    <div className="flex items-center justify-between gap-1.5 mb-3 text-[11px] mono flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="font-bold tracking-wider"
                          style={{ color: project.accent }}
                        >
                          // {projectNum}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 text-[9px] font-mono tracking-wider uppercase border font-semibold ${
                            project.status === "Ongoing"
                              ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                              : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                          }`}
                        >
                          {project.status === "Ongoing" ? "● Ongoing" : "✓ Completed"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {project.isPrivate && (
                          <span
                            title={project.privateNote || "Private Repository"}
                            className="px-1.5 py-0.5 text-[9px] font-mono tracking-wider uppercase border border-red-500/40 bg-red-500/10 text-red-400 font-semibold flex items-center gap-1"
                          >
                            <Lock className="w-2.5 h-2.5" />
                            <span>Private</span>
                          </span>
                        )}
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
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="mono text-xs text-foreground/80 hover:text-accent flex items-center gap-1 font-semibold transition-colors cursor-pointer select-none"
                      >
                        <span>Specs &amp; Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub Repository ${project.isPrivate ? "(Private)" : ""}`}
                          title={project.isPrivate ? (project.privateNote || "Private Repository") : "View GitHub Repository"}
                          className={`p-1.5 rounded border transition-colors ${
                            project.isPrivate
                              ? "border-red-500/40 text-red-400/80 hover:text-red-400 hover:border-red-500/80"
                              : "border-border/80 text-muted-foreground hover:text-foreground hover:border-accent/50"
                          }`}
                        >
                          {project.isPrivate ? (
                            <Lock className="w-3.5 h-3.5" />
                          ) : (
                            <Github className="w-3.5 h-3.5" />
                          )}
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
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Specification"
                className="absolute right-4 top-4 p-1.5 border-2 border-border/80 light:border-black bg-card hover:bg-accent/20 text-foreground transition-colors cursor-pointer"
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
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded border uppercase ${
                      selectedProject.status === "Ongoing"
                        ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                        : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                    }`}
                  >
                    {selectedProject.status === "Ongoing" ? "● Ongoing Development" : "✓ Completed Project"}
                  </span>
                </div>
                <p className="mono text-xs font-medium text-accent">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Private Repository Notice */}
              {selectedProject.isPrivate && (
                <div className="px-3.5 py-2.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2.5 mono">
                  <Lock className="w-4 h-4 flex-shrink-0 text-red-400" />
                  <span>
                    <strong>Private Repository:</strong> Access is restricted {selectedProject.privateNote ? `(${selectedProject.privateNote})` : "for proprietary/research review"}. Code available for evaluation upon request.
                  </span>
                </div>
              )}

              {/* Offline note notice if applicable */}
              {selectedProject.live && !["Master Algorithm", "CatchUpX", "PathWarden", "ArgusASM"].includes(selectedProject.title) && (
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
                  className={`btn-cyber-outline text-xs ${selectedProject.isPrivate ? "border-red-500/50 text-red-400 hover:bg-red-500/10" : ""}`}
                >
                  {selectedProject.isPrivate ? <Lock className="w-3.5 h-3.5 text-red-400" /> : <Github className="w-3.5 h-3.5" />}
                  <span>{selectedProject.isPrivate ? "View Repository (Private)" : "View GitHub Repository"}</span>
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
