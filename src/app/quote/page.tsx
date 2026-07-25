import Image from "next/image";
import { Clock3, Phone, ShieldCheck, Sparkles } from "lucide-react";

import { QuoteForm } from "@/components/forms/QuoteForm";
import { business } from "@/lib/constants";
import { heroImage } from "@/lib/images";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "Get a Plumbing Quote | Pana Plumbing",
  "Request a fast plumbing quote for your Sydney property.",
  "/quote"
);

export default function QuotePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-navy/80 to-brand-blue/55" />
        <div className="relative section-wrap py-16 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Free quote in minutes
          </p>
          <h1 className="mt-4 max-w-3xl font-jakarta text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get a clear plumbing quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Answer a few quick questions and we&apos;ll get back with pricing and next steps — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <Clock3 className="h-4 w-4 text-brand-sky" />
              Fast response
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-brand-sky" />
              Licensed & insured
            </span>
            <a
              href={`tel:${business.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 font-semibold"
            >
              <Phone className="h-4 w-4" />
              Or call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-light to-white py-12 sm:py-16">
        <div className="section-wrap grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <QuoteForm />

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-jakarta text-xl font-bold text-brand-charcoal">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {[
                  "We review your request and confirm availability.",
                  "You get a clear quote and timing options.",
                  "We book a time that works for you."
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-sm font-bold text-brand-navy">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-slate-600">{item}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-brand-navy p-6 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-brand-sky">Emergency?</p>
              <p className="mt-2 font-jakarta text-2xl font-bold">Skip the form and call now</p>
              <p className="mt-2 text-sm text-blue-100">24/7 emergency plumbing support across Greater Sydney.</p>
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-brand-navy"
              >
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
