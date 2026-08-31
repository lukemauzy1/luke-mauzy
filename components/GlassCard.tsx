"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
