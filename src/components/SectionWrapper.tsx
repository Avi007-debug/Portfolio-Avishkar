import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  index?: string;
  tag?: string;
}

export const SectionWrapper = ({ id, children, className = "", index, tag }: Props) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-24 px-6 border-t border-border/40 overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {(index || tag) && (
          <div className="flex items-center gap-2 mb-4 select-none">
            {index && (
              <span className="mono text-[11px] font-bold text-accent tracking-wider">
                // {index}
              </span>
            )}
            {tag && (
              <span className="cyber-label">
                {tag}
              </span>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;
