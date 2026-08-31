"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function MarkerHighlight({
  children,
  delay = 0.3,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 0.45em" }}
      animate={{ backgroundSize: "100% 0.45em" }}
      transition={{ duration: 1.1, ease: "easeInOut", delay }}
      className="
        inline
        bg-[linear-gradient(to_right,rgba(249,115,22,0.3),rgba(249,115,22,0.3))]
        bg-no-repeat
        [background-position:0_88%]
        text-text
        [box-decoration-break:clone]
        [-webkit-box-decoration-break:clone]
        px-[0.04em]
      "
    >
      {children}
    </motion.span>
  );
}
