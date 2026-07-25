import Link from "next/link";

import { getBlogPosts } from "@/lib/content";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata("Plumbing Tips Blog | Pana Plumbing", "Read practical plumbing tips for Sydney homes and businesses.", "/blog");

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="section-wrap py-16">
      <h1 className="text-4xl font-bold text-brand-charcoal">Plumbing Tips & Insights</h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs text-slate-500">{post.date}</p>
            <h2 className="mt-2 text-xl font-semibold text-brand-navy">{post.title}</h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-blue">Read article</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
