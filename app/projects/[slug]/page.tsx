import { getProjectBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { MarkerHighlight } from "@/components/AnimatedHighlight";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 mb-4 text-2xl font-bold text-white" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-bold text-white" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7 text-[#b8c2cf]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-1 text-[#b8c2cf]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7 text-[#b8c2cf]" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-white" {...props} />
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
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          Project
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">
          <MarkerHighlight>{meta.title}</MarkerHighlight>
        </h1>
        <p className="mb-10 text-sm text-[var(--muted)]">{meta.publishedAt}</p>

        <article className="space-y-2">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}