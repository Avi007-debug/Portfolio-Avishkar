import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeGlitchWipeProps {
  active: boolean;
}

export const ThemeGlitchWipe: React.FC<ThemeGlitchWipeProps> = ({ active }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 pointer-events-none z-[999] overflow-hidden select-none"
        >
          {/* Subtle Cyber Flash Tint */}
          <div className="absolute inset-0 bg-cyan-400/10 mix-blend-screen" />

          {/* High-Speed Laser Sweep Bar */}
          <motion.div
            initial={{ top: "-5%" }}
            animate={{ top: "105%" }}
            transition={{ duration: 0.25, ease: "linear" }}
            className="absolute left-0 right-0 h-1.5 bg-cyan-400 shadow-[0_0_15px_#06b6d4]"
          />

          {/* Rapid Digital Scanline Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.2) 3px, transparent 4px)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeGlitchWipe;
