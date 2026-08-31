"use client";

import { motion } from "framer-motion";

export default function SkillPill({
  skill,
  index = 0,
}: {
  skill: string;
  index?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="inline-flex items-center rounded-full border border-border-subtle bg-bg-card px-3 py-1 text-xs font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:bg-accent-dim hover:text-accent-light"
    >
      {skill}
    </motion.span>
  );
}
