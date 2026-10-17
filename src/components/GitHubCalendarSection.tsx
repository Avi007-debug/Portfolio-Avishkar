import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useState } from "react";
import { Star, Users, BookOpen, Code2, ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  topLangs: { name: string; pct: number }[];
}

export const GitHubCalendarSection = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/Avi007-debug"),
          fetch("https://api.github.com/users/Avi007-debug/repos?per_page=100"),
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();

        interface GitHubRepoItem {
          stargazers_count?: number;
          language?: string;
        }

        const stars = Array.isArray(repos)
          ? (repos as GitHubRepoItem[]).reduce((sum: number, r) => sum + (r.stargazers_count || 0), 0)
          : 0;

        const langMap: Record<string, number> = {};
        if (Array.isArray(repos)) {
          (repos as GitHubRepoItem[]).forEach((r) => {
            if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
          });
        }
        const total = Object.values(langMap).reduce((a, b) => a + b, 0);
        const topLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }));

        setStats({
          repos: user.public_repos || 0,
          stars,
          followers: user.followers || 0,
          topLangs,
        });
      } catch {
        // Silently use defaults
      }
    };
    fetchStats();
  }, []);

  return (
    <SectionWrapper id="github" tag="DEVELOPER TELEMETRY">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="editorial-heading">
            Open-Source Activity &amp; Git Telemetry
          </h2>
          <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
            Live public repositories, commit cadence, and code distribution
          </p>
        </div>

        <a
          href="https://github.com/Avi007-debug"
          target="_blank"
          rel="noreferrer"
          className="btn-cyber-outline text-xs self-start md:self-auto"
        >
          <span>@Avi007-debug</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Stats row */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "PUBLIC REPOSITORIES", value: stats.repos, icon: BookOpen },
            { label: "TOTAL STARS", value: stats.stars, icon: Star },
            { label: "GITHUB FOLLOWERS", value: stats.followers, icon: Users },
            { label: "DOMINANT LANGUAGE", value: stats.topLangs[0]?.name || "Python", icon: Code2 },
          ].map((item) => (
            <div key={item.label} className="dossier-card p-4">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="cyber-label text-[9px]">{item.label}</span>
                <item.icon className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground heading-font">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* GitHub Calendar Heatmap */}
      <div className="dossier-card p-6 overflow-x-auto mb-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4">
          <span className="cyber-label text-foreground font-semibold">
            CONTRIBUTION HEATMAP &bull; 365 DAYS
          </span>
          <span className="mono text-[10px] text-accent">LIVE API</span>
        </div>

        <div className="min-w-[700px] flex justify-center py-2">
          <GitHubCalendar
            username="Avi007-debug"
            colorScheme={theme === "light" ? "light" : "dark"}
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Top Languages breakdown */}
      {stats && stats.topLangs.length > 0 && (
        <div className="dossier-card p-6">
          <span className="cyber-label block mb-4">
            CORE CODEBASE DISTRIBUTION (TOP LANGUAGES)
          </span>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {stats.topLangs.map((lang) => (
              <div key={lang.name} className="p-3 rounded bg-secondary/40 border border-border/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-foreground">{lang.name}</span>
                  <span className="mono text-[11px] text-accent font-bold">{lang.pct}%</span>
                </div>
                <div className="h-1 rounded-none bg-border/60 overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${lang.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default GitHubCalendarSection;
