import Image from "next/image";
import Link from "next/link";

import { business } from "@/lib/constants";
import { heroImage } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/85 via-brand-charcoal/65 to-brand-navy/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,163,232,0.25),transparent_45%)]" />

      <div className="relative section-wrap flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-sky">
          Pana Plumbing
        </p>
        <h1 className="mt-4 max-w-3xl font-jakarta text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {business.slogan}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-200">
          {business.tagline} — emergency callouts, renovations, and everyday repairs done right across Sydney.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/quote" className="rounded-full bg-brand-blue px-6 py-3 font-semibold text-white transition hover:bg-brand-sky">
            Get a Quote
          </Link>
          <Link href="/gallery" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
