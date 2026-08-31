"use client";

import { motion } from "framer-motion";

export default function GradientOrb({
  className = "",
  color = "#f97316",
  size = 500,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`gradient-orb ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
