import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code, Server, Brain, Shield, Cloud, Wrench } from "lucide-react";

const categories = [
  { name: "Languages",  icon: Code,   items: ["Python", "TypeScript", "JavaScript", "C / C++", "Java"],           angle: 0   },
  { name: "Frameworks", icon: Server, items: ["React", "Flask", "FastAPI", "Node.js", "Express"],                  angle: 60  },
  { name: "AI / ML",    icon: Brain,  items: ["Scikit-Learn", "DeepFace", "OpenCV", "SHAP", "AWS Bedrock"],        angle: 120 },
  { name: "Security",   icon: Shield, items: ["JWT / Bcrypt", "IDS / IPS", "Scapy", "AES-256", "RBAC / RLS"],     angle: 180 },
  { name: "Cloud",      icon: Cloud,  items: ["AWS Lambda", "Supabase", "PostgreSQL", "Docker", "Vercel / Render"], angle: 240 },
  { name: "Tools",      icon: Wrench, items: ["Git / GitHub", "Linux", "Arduino", "Postman", "Gunicorn"],          angle: 300 },
];

// Orbit geometry constants — all pixel math uses these so center is always consistent
const SIZE   = 620;   // canvas side length (px)
const CX     = SIZE / 2;  // 310 — geometric center X
const CY     = SIZE / 2;  // 310 — geometric center Y
const RADIUS = 230;
const NODE   = 112;   // w-28 = 7 rem = 112 px
const CENTER_R = 68;  // half of center bubble diameter (136 px)

// Return tooltip placement class based on the spoke angle
function tooltipClass(angle: number): string {
  if (angle === 0)                        return "left-full ml-2 top-1/2 -translate-y-1/2";
  if (angle > 0   && angle <= 135)        return "top-full mt-2 left-1/2 -translate-x-1/2";
  if (angle === 180)                      return "right-full mr-2 top-1/2 -translate-y-1/2";
  /* 181 – 359 (upper half) */            return "bottom-full mb-2 left-1/2 -translate-x-1/2";
}

const TechStackVisualization = () => (
  <SectionWrapper id="tech-stack">
    <h2 className="section-heading text-center">
      <span className="gradient-text">Tech</span> Stack
    </h2>

    {/* ── Orbit visualization — desktop only ── */}
    <div className="hidden lg:flex justify-center mb-16">
      <div className="relative" style={{ width: SIZE, height: SIZE }}>

        {/* SVG layer: ring guides + spoke lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          {/* Outer orbit guide ring */}
          <circle
            cx={CX} cy={CY} r={RADIUS + 6}
            stroke="hsl(var(--border) / 0.18)" strokeWidth="1" fill="none"
          />
          {/* Inner guide ring */}
          <circle
            cx={CX} cy={CY} r={RADIUS * 0.55}
            stroke="hsl(var(--border) / 0.10)" strokeWidth="1" fill="none"
          />
          {/* Spoke lines — dashed, from edge of center bubble to edge of each orbit node */}
          {categories.map((cat) => {
            const rad  = (cat.angle * Math.PI) / 180;
            const cos  = Math.cos(rad);
            const sin  = Math.sin(rad);
            // Start just outside the center bubble, end just before the orbit node face
            const x1 = CX + (CENTER_R + 8)  * cos;
            const y1 = CY + (CENTER_R + 8)  * sin;
            const x2 = CX + (RADIUS - NODE / 2 - 8) * cos;
            const y2 = CY + (RADIUS - NODE / 2 - 8) * sin;
            return (
              <line
                key={cat.name}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(var(--neon-blue) / 0.18)"
                strokeWidth="1"
                strokeDasharray="5 4"
              />
            );
          })}
        </svg>

        {/* Center node — pixel-positioned to match orbit math exactly */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute z-10"
          style={{
            width:  CENTER_R * 2,
            height: CENTER_R * 2,
            left:   CX - CENTER_R,
            top:    CY - CENTER_R,
          }}
        >
          <div className="w-full h-full rounded-full glass-card flex flex-col items-center justify-center gap-0.5 border border-accent/40">
            <p className="text-xs mono text-accent font-semibold leading-tight">Engineering</p>
            <p className="text-xs mono text-muted-foreground leading-tight">Stack</p>
          </div>
        </motion.div>

        {/* Orbit nodes — positioned so their geometric center is exactly at (CX + R·cos, CY + R·sin) */}
        {categories.map((cat, i) => {
          const rad   = (cat.angle * Math.PI) / 180;
          const nodeLeft = CX + RADIUS * Math.cos(rad) - NODE / 2;
          const nodeTop  = CY + RADIUS * Math.sin(rad) - NODE / 2;

          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="absolute group"
              style={{ left: nodeLeft, top: nodeTop, width: NODE, height: NODE }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                className="w-full h-full glass-card rounded-2xl flex flex-col items-center justify-center gap-1 cursor-default group-hover:border-accent/40 transition-colors"
              >
                <cat.icon className="w-5 h-5 text-accent" />
                <span className="text-xs font-medium text-foreground">{cat.name}</span>
                <span className="text-[10px] text-muted-foreground mono">{cat.items.length} skills</span>
              </motion.div>

              {/* Tooltip — direction changes per quadrant to avoid overflow */}
              <div className={`absolute ${tooltipClass(cat.angle)} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 w-36`}>
                <div className="glass-card p-3 rounded-xl shadow-xl">
                  {cat.items.map((item) => (
                    <div key={item} className="text-xs text-foreground/80 py-0.5 border-b border-border/10 last:border-0">{item}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* ── Grid fallback — mobile / tablet ── */}
    <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <cat.icon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">{cat.name}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cat.items.map((item) => (
              <span key={item} className="tech-badge text-[10px] px-2 py-1">{item}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackVisualization;
