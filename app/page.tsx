import Link from "next/link";
import { getAllProjectsMeta } from "@/lib/mdx";
import HeroHeading from "@/components/HeroHeading";
import { FadeIn } from "@/components/Motion";
import ProjectCard from "@/components/ProjectCard";
import GradientOrb from "@/components/GradientOrb";

export default async function Home() {
  const projects = await getAllProjectsMeta();

  return (
    <main className="relative">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-28">
        <GradientOrb
          className="pointer-events-none -top-40 -left-40"
          size={700}
          color="#f97316"
        />
        <GradientOrb
          className="pointer-events-none top-20 -right-60"
          size={500}
          color="#ea580c"
        />

        <div className="relative mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-accent-light">
                Open to opportunities
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <HeroHeading />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
              EE student at UVA designing PCBs, writing embedded firmware, and
              building hardware that works in the real world.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                About me
              </Link>
              <a
                href="#projects"
                className="rounded-xl border border-border-subtle bg-bg-card px-6 py-3 text-sm font-semibold text-text-secondary transition-all hover:border-accent/30 hover:text-text"
              >
                See my work
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="relative px-6 pb-32">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Selected Work
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-accent/40 to-transparent" />
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
