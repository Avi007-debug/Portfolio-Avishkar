import { useState, useEffect } from "react";

interface SectionItem {
  id: string;
  num: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: "hero", num: "01", label: "IDENTITY" },
  { id: "about", num: "02", label: "DOSSIER" },
  { id: "education", num: "03", label: "ACADEMICS" },
  { id: "experience", num: "04", label: "TIMELINE" },
  { id: "projects", num: "05", label: "ARCHIVE" },
  { id: "skills", num: "06", label: "CAPABILITIES" },
  { id: "certifications", num: "07", label: "CREDENTIALS" },
  { id: "contact", num: "08", label: "CONTACT" },
];

export const SectionIndex = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-15% 0px -45% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Dossier Section Index"
      className="hidden xl:flex fixed right-4 2xl:right-6 top-20 z-40 flex-col items-end gap-2.5 select-none pointer-events-auto"
    >
      <div className="mono text-[8px] text-muted-foreground/60 tracking-widest uppercase mb-1 pr-1 font-semibold">
        INDEX //
      </div>

      {sections.map(({ id, num, label }) => {
        const isActive = activeSection === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Scroll to ${label}`}
            className="group flex items-center gap-2 text-right transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-accent py-0.5"
          >
            {/* Expandable label on hover or active */}
            <span
              className={`mono text-[9px] tracking-widest font-mono transition-all duration-200 ${
                isActive
                  ? "opacity-100 translate-x-0 font-semibold text-accent"
                  : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground"
              }`}
            >
              {label}
            </span>

            {/* Section Number */}
            <span
              className={`mono text-[10px] tracking-tighter transition-colors ${
                isActive
                  ? "text-accent font-bold"
                  : "text-muted-foreground/70 group-hover:text-foreground font-medium"
              }`}
            >
              {num}
            </span>

            {/* Minimalist Line Indicator - Clean, transparent, zero blurry box */}
            <span
              className={`h-0.5 transition-all duration-300 rounded-full ${
                isActive
                  ? "w-5 bg-accent shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                  : "w-2 bg-border/80 group-hover:w-3.5 group-hover:bg-foreground/60"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

export default SectionIndex;
