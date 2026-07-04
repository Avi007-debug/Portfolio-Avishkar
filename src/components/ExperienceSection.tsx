import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Users, Smartphone, ChevronDown, ChevronUp, Sparkles, MapPin, Github, Globe, Linkedin } from "lucide-react";

interface Experience {
  title: string;
  org: string;
  period: string;
  location: string;
  icon: React.ComponentType<any>;
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
    title: "Technical Co-Founder & Technical Lead",
    org: "CatchUpX (Pre-launch EdTech Startup)",
    period: "Jan 2026 – Present",
    location: "Remote",
    icon: Briefcase,
    shortDescription: "Architecting an AI-powered EdTech platform functioning as a multi-tenant School Management System integrated with an adaptive learning gap diagnostic engine.",
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
    title: "Co-Founder & Tech Lead",
    org: "Heapify Global Community",
    period: "June 2026 – Present",
    location: "International",
    icon: Users,
    shortDescription: "Leading technical strategy, automation platforms, and community infrastructure to make emerging tech accessible.",
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
    title: "AI Engineering Intern",
    org: "Capabl",
    period: "Feb 2026 – Jun 2026",
    location: "Remote",
    icon: Smartphone,
    shortDescription: "Built RAG pipelines and multi-tool agent workflows for a production-grade AI platform.",
    tech: ["Python", "TypeScript", "PostgreSQL", "RAG Pipelines", "LLMs", "REST APIs"],
    points: [
      "Developed a RAG-based AI platform using TypeScript, Python, PostgreSQL, and LLM-powered retrieval pipelines.",
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
    note: "The backend server for this prototype is temporarily offline to reduce cost."
  },
  {
    title: "Junior Core Team Member",
    org: "Google Developer Groups (GDG) RVCE",
    period: "May 2025 – Present",
    location: "Bangalore, India",
    icon: Briefcase,
    shortDescription: "Contributing to one of RVCE's largest developer communities by organizing major technical events and hackathons.",
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex gap-6"
    >
      {/* Icon timeline node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_15px_rgba(var(--neon-blue-rgb),0.15)]"
        >
          <exp.icon className="w-4 h-4 text-accent" />
        </motion.div>
      </div>

      {/* Card Body */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ y: -2 }}
        className="glass-card p-6 flex-1 cursor-pointer transition-all duration-300 relative overflow-hidden group select-none"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]"
          style={{ background: "linear-gradient(135deg, hsl(var(--neon-blue) / 0.05), transparent 60%)" }}
        />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-foreground heading-font text-lg flex items-center gap-2">
              {exp.title}
              {exp.metrics && (
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              )}
            </h3>
            <p className="text-accent text-sm font-medium mt-0.5">{exp.org}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mono mt-1.5 flex-wrap">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                {exp.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-accent font-medium mt-2 md:mt-0 transition-colors self-end md:self-start">
            <span>{isExpanded ? "Click to collapse" : "Click to expand"}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>

        <p className="text-sm text-secondary-foreground mt-3 leading-relaxed">
          {exp.shortDescription}
        </p>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-4 pt-4 border-t border-border/50 space-y-4"
              onClick={(e) => e.stopPropagation()} // Prevent card collapse on clicking buttons or links
            >
              {/* Cost Saving Note */}
              {exp.note && (
                <div className="px-4 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse flex-shrink-0" />
                  <span>{exp.note}</span>
                </div>
              )}

              {/* Links Row */}
              {(exp.github || exp.live || exp.linkedin) && (
                <div className="flex flex-wrap gap-3">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline flex items-center gap-2 text-xs py-1.5 px-3.5 bg-card/45"
                    >
                      <Github className="w-4 h-4" /> Code Repository
                    </a>
                  )}
                  {exp.live && (
                    <a
                      href={exp.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex items-center gap-2 text-xs py-1.5 px-3.5"
                    >
                      <Globe className="w-4 h-4" /> Live Site
                    </a>
                  )}
                  {exp.linkedin && (
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline flex items-center gap-2 text-xs py-1.5 px-3.5 border-accent/30 text-accent hover:bg-accent/5 hover:border-accent/60"
                    >
                      <Linkedin className="w-4 h-4 text-accent" /> LinkedIn Profile
                    </a>
                  )}
                </div>
              )}

              {/* Metrics Grid */}
              {exp.metrics && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mono mb-2.5">
                    Quantified Impact
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {exp.metrics.map((m, k) => (
                      <div key={k} className="p-3 rounded-lg bg-card/40 border border-border/40 text-center">
                        <p className="text-xl font-bold text-accent heading-font">{m.value}</p>
                        <p className="text-[10px] text-muted-foreground font-medium mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contributions */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mono mb-2">
                  Key Contributions & Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mono mb-2">
                  Skills & Tools Leveraged
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-badge text-[10px] px-2 py-0.5 bg-accent/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="section-heading">
      <span className="gradient-text">Experience</span> History
    </h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-violet to-transparent hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;