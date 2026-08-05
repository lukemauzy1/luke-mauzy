import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(root, 'content/projects', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContent);

  return {
    meta: data,
    content,
  };
}

export async function getAllProjectsMeta() {
  const files = fs.readdirSync(path.join(root, 'content/projects'));

  return files
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(root, 'content/projects', file), 'utf8');
      const { data } = matter(fileContent);
      return {
        ...data,
        slug: file.replace('.mdx', ''),
      };
    })
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}