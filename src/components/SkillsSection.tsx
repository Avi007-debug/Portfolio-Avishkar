import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  Code, Server, Brain, Shield, Database, Users,
} from "lucide-react";

const skillGroups = [
  {
    title: "Core Computer Science",
    icon: Code,
    skills: ["DSA", "OOP", "Linux", "Operating Systems", "Computer Networks", "DBMS"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"],
  },
  {
    title: "Web & Mobile Frameworks",
    icon: Server,
    skills: ["React", "Flutter", "Node.js", "Express.js", "FastAPI", "Flask", "Django", "REST APIs"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["LLMs", "RAG", "Prompt Engineering", "AWS Bedrock", "Computer Vision", "Scikit-learn", "Feature Engineering", "NLP basics"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Network Security", "Active Directory Security", "Intrusion Detection Systems", "Threat Detection", "Wireshark", "Nmap"],
  },
  {
    title: "Database, Cloud & Tools",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "AWS (Lambda, App Runner)", "Docker", "Git"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="section-heading">
      <span className="gradient-text">Skills</span> & Tools
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <group.icon className="w-4 h-4 text-accent" />
            </div>
            <h3 className="mono text-xs text-muted-foreground uppercase tracking-wider">
              {group.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="tech-badge cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;