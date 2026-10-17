import React from "react";

interface AmLogoProps {
  className?: string;
  size?: number;
}

export const AmLogo: React.FC<AmLogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 76 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 group-hover:scale-105 ${className}`}
      aria-label="Avishkar More AM Cyber Monogram"
    >
      <defs>
        {/* Futuristic cyan-to-electric-blue gradient */}
        <linearGradient id="amCyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="60%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Glow filter for hover / accent */}
        <filter id="amGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Cyber Technical Frame Brackets - Transparent Background */}
      {/* Top-Left Bracket */}
      <path
        d="M 1 10 L 1 2 L 9 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent/60"
      />
      {/* Bottom-Right Bracket */}
      <path
        d="M 75 24 L 75 32 L 67 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent/60"
      />

      {/* ── LETTER 'A' (Fully rendered, non-overlapping) ── */}
      {/* Left & Right Legs meeting at Apex */}
      <path
        d="M 6 28 L 18 6 L 30 28"
        stroke="url(#amCyberGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Crossbar with Tech Stencil Inset */}
      <path
        d="M 10 20 L 26 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-foreground"
      />
      {/* Tech Accent Dot on 'A' Crossbar */}
      <circle cx="18" cy="20" r="1.5" fill="#06b6d4" />

      {/* ── LETTER 'M' (Fully rendered, non-overlapping) ── */}
      {/* Left vertical, center chevron, right vertical */}
      <path
        d="M 40 28 L 40 6 L 50 18 L 60 6 L 60 28"
        stroke="url(#amCyberGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Vertex Accent Node on 'M' */}
      <circle cx="50" cy="18" r="1.5" fill="#06b6d4" />

      {/* Micro-Telemetry Tech Bits */}
      <circle cx="71" cy="4" r="1" fill="#06b6d4" className="animate-pulse" />
      <circle cx="5" cy="30" r="1" fill="#0891b2" />
    </svg>
  );
};

export default AmLogo;
