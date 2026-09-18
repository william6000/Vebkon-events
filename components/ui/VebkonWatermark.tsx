"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VebkonWatermarkProps {
  text?: string;
  variant?: "outline" | "faint" | "solid";
  direction?: "left" | "right";
  className?: string;
}

export const VebkonWatermark: React.FC<VebkonWatermarkProps> = ({
  text = "VEBKON EVENTS",
  variant = "outline",
  direction = "left",
  className = ""
}) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", "-15%"] : ["-15%", "0%"]
  );

  const getStyleClasses = () => {
    switch (variant) {
      case "outline":
        return "text-transparent stroke-text opacity-15";
      case "faint":
        return "text-[#111111]/[0.04] dark:text-white/[0.03]";
      case "solid":
        return "text-brand-red/[0.08]";
      default:
        return "text-transparent stroke-text opacity-15";
    }
  };

  return (
    <div
      className={`pointer-events-none absolute select-none overflow-hidden whitespace-nowrap font-heading text-[12vw] font-black uppercase leading-none tracking-tighter ${className}`}
      aria-hidden="true"
    >
      <motion.div style={{ x }} className={`will-change-transform ${getStyleClasses()}`}>
        {text}&nbsp;&nbsp;&nbsp;&nbsp;{text}
      </motion.div>
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(215, 25, 32, 0.2);
        }
      `}</style>
    </div>
  );
};

