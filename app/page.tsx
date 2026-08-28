import Link from "next/link";
import { getAllProjectsMeta } from "@/lib/mdx";
import HeroHeading from "@/components/HeroHeading";

export default async function Home() {
  const projects = await getAllProjectsMeta();

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* ── Hero ── */}
      <section className="mb-24">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#e57200]">
          Portfolio
        </p>

        <HeroHeading />

        <p className="max-w-2xl text-lg leading-8 text-[#b8c2cf]">
          Hi, I'm Luke, an EE student at UVA who design PCBs, write embedded firmware, and builds hardware that works.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/about"
            className="rounded-md bg-[#e57200] px-5 py-2.5 text-sm font-semibold text-[#0b1622] transition hover:bg-[#ff8c1a]"
          >
            About me
          </Link>
          <a
            href="#projects"
            className="rounded-md border border-[#22364d] px-5 py-2.5 text-sm font-semibold text-[#b8c2cf] transition hover:border-[#e57200] hover:text-[#e57200]"
          >
            See my work ↓
          </a>
          <a
            href="/Luke_Mauzy_Resume.pdf"
            download="Luke_Mauzy_Resume.pdf"
            className="rounded-md border border-[#22364d] px-5 py-2.5 text-sm font-semibold text-[#b8c2cf] transition hover:border-[#e57200] hover:text-[#e57200]"
          >
            Resume ↓
          </a>
        </div>
      </section>

      <section id="projects">
        <h2 className="mb-10 text-xs uppercase tracking-[0.2em] text-[#e57200]">
          Selected Work
        </h2>

        <div className="flex flex-col divide-y divide-[#22364d]">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between py-6 transition hover:pl-2"
            >
              <div className="flex items-center gap-6">
                <span className="w-6 text-xs text-[#22364d] group-hover:text-[#e57200] transition">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-lg font-semibold text-[#f8f5f0] group-hover:text-[#e57200] transition">
                    {project.title}
                  </p>
                  {project.description && (
                    <p className="mt-1 text-sm text-[#b8c2cf]">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-[#22364d] transition group-hover:translate-x-1 group-hover:text-[#e57200] text-xl">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}