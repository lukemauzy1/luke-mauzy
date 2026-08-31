import { getProjectBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { MarkerHighlight } from "@/components/AnimatedHighlight";
import Link from "next/link";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-text" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-text-secondary" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-1.5 text-text-secondary" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed text-text-secondary" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-text" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-light hover:decoration-accent/60" {...props} />
  ),
  img: (props: React.HTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 w-full rounded-xl border border-border" alt="" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded-md border border-accent/15 bg-accent/[0.08] px-1.5 py-0.5 text-[0.85em] text-accent-light" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-bg-elevated p-5" {...props} />
  ),
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const { meta, content } = await getProjectBySlug(slug);

    return (
      <main className="relative px-6 pt-32 pb-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to projects
          </Link>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            {meta.title}
          </h1>

          {meta.publishedAt && (
            <p className="mb-10 text-sm text-text-muted">{meta.publishedAt}</p>
          )}

          <article className="prose-custom">
            <MDXRemote source={content} components={mdxComponents} />
          </article>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
