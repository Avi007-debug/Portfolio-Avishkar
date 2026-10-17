import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface BrutalistTiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const BrutalistTiltCard: React.FC<BrutalistTiltCardProps> = ({
  children,
  className = "",
  style = {},
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shadowOffset, setShadowOffset] = useState({ x: 5, y: 5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x / rect.width - 0.5;
    const dy = y / rect.height - 0.5;

    setRotateX(-dy * 8); // max 4 deg tilt
    setRotateY(dx * 8);
    setShadowOffset({
      x: 5 - dx * 4,
      y: 5 - dy * 4,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShadowOffset({ x: 5, y: 5 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        perspective: 900,
        transformStyle: "preserve-3d",
        boxShadow: `${shadowOffset.x}px ${shadowOffset.y}px 0px 0px currentColor`,
        ...style,
      }}
      className={`transition-shadow duration-150 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BrutalistTiltCard;
