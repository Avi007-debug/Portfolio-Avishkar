import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Users, Smartphone, ChevronDown, ChevronUp, MapPin, Github, Globe, Linkedin, ArrowUpRight } from "lucide-react";
import CyberScrambleText from "./CyberScrambleText";

interface Experience {
  title: string;
  org: string;
  period: string;
  location: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDescription: string;
  tech: string[];
  points: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  live?: string;
  linkedin?: string;
  note?: string;
}

const experiences: Experience[] = [
  {
    title: "Co-Founder & Tech Lead",
    org: "Heapify Global Community",
    period: "June 2026 – Present",
    location: "International",
    icon: Users,
    shortDescription: "Leading technical strategy, community infrastructure, and developer workshops for an international engineering community.",
    tech: ["Node.js", "React", "TypeScript", "Vercel", "GitHub Actions", "Discord API"],
    points: [
      "Leading technical strategy and platform development for an international developer community.",
      "Managing a team responsible for website development, automation, and community infrastructure.",
      "Organizing AI workshops, hackathons, and developer sessions to make emerging tech accessible.",
      "Designing scalable systems for registrations, participant management, and event operations."
    ],
    metrics: [
      { label: "Community Members", value: "500+" },
      { label: "Workshops Conducted", value: "10+" },
      { label: "Hackathons Organized", value: "3+" },
      { label: "Partnerships", value: "5+" }
    ],
    linkedin: "https://www.linkedin.com/in/heapify-global-community-7bb767414/",
  },
  {
    title: "Technical Co-Founder & Technical Lead",
    org: "CatchUpX (EdTech Platform)",
    period: "Jan 2026 – Aug 2026",
    location: "Remote",
    icon: Briefcase,
    shortDescription: "Architected a multi-tenant School Management System integrated with a real-time cognitive learning gap diagnostic engine.",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "AWS App Runner", "Groq LLM API", "Docker", "SQLAlchemy", "JWT"],
    points: [
      "Architected and deployed an AI-driven EdTech platform using Next.js and FastAPI, supporting multi-tenant role-based access for students, teachers, and parents.",
      "Engineered a real-time learning gap diagnostic engine integrating Groq LLM API, reducing cognitive analysis latency to sub-seconds while enforcing strict JSON schemas.",
      "Designed a highly relational PostgreSQL database schema with 19+ tables using SQLAlchemy, optimizing for multi-tenancy isolation and predictive exam analytics.",
      "Deployed scalable backend microservices on AWS App Runner via Docker ECR, implementing strict security middlewares, rate-limiting, and custom JWT authentication."
    ],
    metrics: [
      { label: "Schools Piloted", value: "2" },
      { label: "AI Latency", value: "<1s" },
      { label: "DB Tables", value: "19+" }
    ],
    github: "https://github.com/GhostRiderGaming/CatchupXV1.git",
    live: "https://CatchupX.in",
    linkedin: "https://www.linkedin.com/company/catchupx/about/?viewAsMember=true",
  },
  {
    title: "AI Engineering Intern",
    org: "Capabl",
    period: "Feb 2026 – Jun 2026",
    location: "Remote",
    icon: Smartphone,
    shortDescription: "Built RAG retrieval pipelines and multi-tool agent workflows for the MedAssist healthcare monitoring platform.",
    tech: ["Python", "TypeScript", "PostgreSQL", "RAG Pipelines", "LLMs", "REST APIs"],
    points: [
      "Developed a RAG-based AI platform (MedAssist) using TypeScript, Python, PostgreSQL, and LLM-powered retrieval pipelines.",
      "Designed multi-tool agent workflows integrating semantic retrieval, context assembly, and AI-driven response generation.",
      "Built backend orchestration APIs and database pipelines through cross-functional collaboration and communication."
    ],
    metrics: [
      { label: "Orchestration APIs", value: "4+" },
      { label: "LLMs Integrated", value: "3" },
      { label: "Vector Embeddings", value: "50k+" }
    ],
    github: "https://github.com/Avi007-debug/Team_Agent_Wars_Healthcare-Monitoring-AI-Agent",
    live: "https://team-agent-wars-healthcare-monitori.vercel.app/",
    note: "Frontend interface is live; backend AI API free-tier cloud server has expired."
  },
  {
    title: "Development Lead",
    org: "Google Developer Groups (GDG) RVCE",
    period: "May 2025 – Present",
    location: "Bangalore, India",
    icon: Briefcase,
    shortDescription: "Leading technical operations and hackathon logistics for RVCE's developer community, coordinating major student technical initiatives.",
    tech: ["Event Execution", "Project Management", "Leadership", "Technical Operations"],
    points: [
      "Organized and coordinated large-scale hackathons, workshops, and technical events.",
      "Worked with cross-functional student teams to improve event execution and participant experience.",
      "Managed communication with participants, mentors, judges, and sponsors during community events.",
      "Helped build a stronger developer ecosystem through technical sessions and community initiatives."
    ],
    metrics: [
      { label: "Hackathon Participants", value: "800+" },
      { label: "Finalist Teams Managed", value: "30+" },
      { label: "Technical Events", value: "10+" }
    ]
  }
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // Expand first by default

  return (
    <div className="flex gap-4 sm:gap-6 relative">
      {/* Node Marker */}
      <div className="hidden sm:flex flex-col items-center">
        <div className="w-3 h-3 rounded-none bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0 z-10 mt-6">
          <div className="w-1.5 h-1.5 bg-accent" />
        </div>
      </div>

      {/* Card Content */}
      <div className="dossier-card p-6 flex-1 transition-colors group">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }
          }}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="heading-font text-lg sm:text-xl font-bold text-foreground">
                {exp.title}
              </h3>
              <span className="mono text-xs text-accent font-semibold">
                @ {exp.org}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] mono text-muted-foreground flex-wrap">
              <span className="text-foreground/90 font-medium">
                {exp.period}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {exp.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs mono text-muted-foreground group-hover:text-foreground transition-colors self-end sm:self-start pt-1">
            <span>{isExpanded ? "COLLAPSE" : "DETAILS"}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-secondary-foreground mt-3 leading-relaxed">
          {exp.shortDescription}
        </p>

        {/* Expandable Details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-4 pt-4 border-t border-border/40 space-y-4"
            >
              {/* Notice note if offline */}
              {exp.note && (
                <div className="px-3 py-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs mono">
                  {exp.note}
                </div>
              )}

              {/* Verified Metrics */}
              {exp.metrics && (
                <div>
                  <h4 className="cyber-label mb-2">VERIFIED METRICS</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 border-2 border-border/80 light:border-black bg-card shadow-[2px_2px_0px_0px_#06b6d4] light:shadow-[2px_2px_0px_0px_#000000] text-center">
                        <p className="text-lg font-black text-accent heading-font">{m.value}</p>
                        <p className="mono text-[9px] text-muted-foreground uppercase font-bold">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities list */}
              <div>
                <h4 className="cyber-label mb-2">KEY ARCHITECTURAL HIGHLIGHTS</h4>
                <ul className="space-y-1.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-xs text-secondary-foreground flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-none bg-accent/60 mt-1.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-tag text-[10px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(exp.github || exp.live || exp.linkedin) && (
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-cyber-outline text-xs py-1.5 px-3"
                    >
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                  )}
                  {exp.live && (
                    <a
                      href={exp.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-cyber-primary text-xs py-1.5 px-3"
                    >
                      <Globe className="w-3.5 h-3.5" /> Live Platform
                    </a>
                  )}
                  {exp.linkedin && (
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-cyber-outline text-xs py-1.5 px-3"
                    >
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" index="04" tag="STRUCTURED TIMELINE">
      <div className="mb-10">
        <h2 className="editorial-heading">
          <CyberScrambleText text="Experience & Technical Leadership" />
        </h2>
        <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
          Chronological engineering roles, startup leadership, and community infrastructure
        </p>
      </div>

      <div className="relative space-y-6">
        {/* Fine vertical timeline spine */}
        <div className="absolute left-[5px] top-6 bottom-6 w-px bg-border/60 hidden sm:block" />

        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.title + exp.org} exp={exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;