import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export type ProjectMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  publishedAt?: string;
};

export async function getProjectBySlug(slug: string): Promise<{
  meta: Omit<ProjectMeta, "slug">;
  content: string;
}> {
  const filePath = path.join(root, "content/projects", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    meta: data as Omit<ProjectMeta, "slug">,
    content,
  };
}

export async function getAllProjectsMeta(): Promise<ProjectMeta[]> {
  const files = fs.readdirSync(path.join(root, "content/projects"));

  return files
    .map((file) => {
      const fileContent = fs.readFileSync(
        path.join(root, "content/projects", file),
        "utf8"
      );
      const { data } = matter(fileContent);

      return {
        ...(data as Omit<ProjectMeta, "slug">),
        slug: file.replace(".mdx", ""),
      };
    })
    .sort(
      (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
    );
}