import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const languages = [
  { name: "Python",                 level: 92, color: "var(--neon-blue)" },
  { name: "TypeScript / JavaScript",level: 89, color: "var(--neon-cyan)" },
  { name: "Dart (Flutter)",         level: 85, color: "var(--neon-violet)" },
  { name: "C / C++",                level: 78, color: "var(--neon-blue)" },
  { name: "SQL / PLpgSQL",          level: 75, color: "var(--neon-cyan)" },
];

const specialties = [
  { name: "Full-Stack Web Dev",     level: 88, color: "var(--neon-cyan)" },
  { name: "AI / ML & Computer Vision", level: 85, color: "var(--neon-violet)" },
  { name: "Cybersecurity & AD",     level: 82, color: "var(--neon-blue)" },
  { name: "Cloud & IoT Systems",    level: 78, color: "var(--neon-cyan)" },
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
  >
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      <span className="mono text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: index * 0.06, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(${skill.color}), hsl(${skill.color} / 0.6))`,
          boxShadow: `0 0 12px hsl(${skill.color} / 0.3)`,
        }}
      />
    </div>
  </motion.div>
);

const SkillBars = () => (
  <SectionWrapper id="skills-proficiency">
    <h2 className="section-heading text-center">
      <span className="gradient-text">Skills & Proficiency</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* Languages Column */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-foreground heading-font mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 rounded-full bg-accent" /> Top Languages
        </h3>
        <div className="space-y-5">
          {languages.map((lang, i) => (
            <SkillBar key={lang.name} skill={lang} index={i} />
          ))}
        </div>
      </div>

      {/* Specialties Column */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-foreground heading-font mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 rounded-full bg-accent" /> Technical Specialties
        </h3>
        <div className="space-y-5">
          {specialties.map((spec, i) => (
            <SkillBar key={spec.name} skill={spec} index={i} />
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SkillBars;
