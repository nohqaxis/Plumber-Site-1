import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const blogPath = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogPath)) return [];

  return fs.readdirSync(blogPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogPath, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title),
        excerpt: String(data.excerpt),
        date: String(data.date),
        content
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}
