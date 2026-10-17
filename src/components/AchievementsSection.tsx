import SectionWrapper from "./SectionWrapper";
import { Trophy, Star, Award, Users, ShieldCheck } from "lucide-react";
import CyberScrambleText from "./CyberScrambleText";

const achievements = [
  {
    icon: Trophy,
    title: "Prayatna 3.0 Hackathon — 2nd Runner-Up",
    metric: "TOP 3 / 500+ BUILDERS",
    description: "Secured 2nd Runner-Up at Prayatna 3.0 Hackathon, developing an integrated technical solution evaluated across speed, security, and scalability.",
  },
  {
    icon: Star,
    title: "National Top 1% Standardized Standing",
    metric: "99.002%ile & AIR 15,207",
    description: "Achieved AIR 15,207 in JEE Advanced 2024, 99.002 percentile in MHT-CET 2024, and AIR 779 in COMEDK UGET 2024.",
  },
  {
    icon: Award,
    title: "Batch Rank 1 Academic Excellence",
    metric: "9.74 CGPA (RVCE)",
    description: "Maintained exceptional academic standing (9.74 CGPA) across 3 years of rigorous Computer Science & Cybersecurity engineering.",
  },
  {
    icon: Users,
    title: "Co-Founder — Heapify Global Community",
    metric: "500+ DEVELOPERS",
    description: "Co-founded an international engineering network, designing web infrastructure, organizing 10+ developer workshops and 3 hackathons.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Lead — GDG RVCE Operations",
    metric: "800+ PARTICIPANTS",
    description: "Directed technical coordination, finalist logistics, and mentor communications for flagship university developer hackathons.",
  },
];

export const AchievementsSection = () => (
  <SectionWrapper id="achievements" tag="KEY HONORS & MILESTONES">
    <div className="mb-8">
      <h2 className="editorial-heading">
        <CyberScrambleText text="Recognitions & Milestones" />
      </h2>
      <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
        Competitively verified hackathon placements, academic rankings, and leadership impact
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {achievements.map((item) => (
        <div
          key={item.title}
          className="dossier-card p-6 flex flex-col justify-between group hover:border-accent/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-3 text-xs mono">
              <span className="p-2 bg-secondary text-accent border border-accent/40 group-hover:bg-accent group-hover:text-black transition-colors">
                <item.icon className="w-4 h-4" />
              </span>
              <span className="mono text-[10px] font-bold text-accent tracking-wider">
                {item.metric}
              </span>
            </div>

            <h3 className="heading-font font-bold text-foreground text-base mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-secondary-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-border/30 text-[10px] mono text-muted-foreground/60 flex items-center justify-between">
            <span>VERIFIED MILESTONE</span>
            <span>&bull;</span>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;