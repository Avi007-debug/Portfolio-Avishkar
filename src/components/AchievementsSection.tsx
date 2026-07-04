import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, Star, Award, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Prayatna 3.0 Hackathon 2nd Runner-Up",
    description: "Secured 2nd Runner-Up at Prayatna 3.0 Hackathon among 500+ participants.",
  },
  {
    icon: Star,
    title: "National Top 1% in Entrance Exams",
    description: "Achieved JEE Advanced AIR 15,207, MHT-CET 99.002 percentile, and COMEDK AIR 779.",
  },
  {
    icon: Award,
    title: "Academic Excellence at RVCE",
    description: "Maintaining exceptional academic standing (CGPA 9.75) in CSE (Cybersecurity) — top of batch.",
  },
  {
    icon: Users,
    title: "Developer Community Leadership",
    description: "Co-Founder & Tech Lead at Heapify Global Community and Junior Core Team Member at GDG RVCE, organizing Google-backed AI initiatives.",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <h2 className="section-heading">
      <span className="gradient-text">Achievements</span>
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {achievements.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="glass-card p-6 gradient-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 neon-glow-cyan">
              <a.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground heading-font text-lg">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;