"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectMeta } from "@/lib/mdx";

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectMeta;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group glass glow relative flex items-center justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300"
      >
        {/* Left accent line */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-gradient-to-b from-accent to-accent-light transition-transform duration-300 ease-out group-hover:scale-y-100"
        />

        <div className="flex items-center gap-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-bg text-xs font-mono text-text-muted transition-all duration-300 group-hover:border-accent/30 group-hover:text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-base font-semibold text-text transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </p>
            {project.description && (
              <p className="mt-1 text-sm text-text-secondary transition-colors duration-300 group-hover:text-text-secondary/90">
                {project.description}
              </p>
            )}
          </div>
        </div>

        <span className="shrink-0 text-lg text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
