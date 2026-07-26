import { notFound } from "next/navigation";

import { getBlogPost, getBlogPosts } from "@/lib/content";
import { makeMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return makeMetadata(`${post.title} | Pana Plumbing`, post.excerpt, `/blog/${post.slug}`);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="section-wrap py-16">
      <p className="text-sm text-slate-500">{post.date}</p>
      <h1 className="mt-2 text-4xl font-bold text-brand-charcoal">{post.title}</h1>
      <article className="prose mt-6 max-w-none whitespace-pre-line text-slate-700">{post.content}</article>
    </main>
  );
}
