import { notFound } from "next/navigation";

import { suburbs } from "@/lib/constants";
import { makeMetadata } from "@/lib/seo";

function toSlug(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: toSlug(suburb) }));
}

export function generateMetadata({ params }: { params: { suburb: string } }) {
  const suburb = suburbs.find((item) => toSlug(item) === params.suburb);
  if (!suburb) return {};
  return makeMetadata(`Plumber in ${suburb} | Pana Plumbing`, `Trusted local plumbing services in ${suburb}, Sydney.`, `/areas/${params.suburb}`);
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const suburb = suburbs.find((item) => toSlug(item) === params.suburb);
  if (!suburb) notFound();

  return (
    <main className="section-wrap py-16">
      <h1 className="text-4xl font-bold text-brand-charcoal">Plumber in {suburb}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">Pana Plumbing provides responsive, professional plumbing support in {suburb}. From urgent repairs to scheduled installations, we deliver high-quality work for local homes and businesses.</p>
    </main>
  );
}
