import Image from "next/image";

import { aboutImage, galleryImages } from "@/lib/images";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "About Pana Plumbing",
  "Learn about our Sydney plumbing team, values, and service approach.",
  "/about"
);

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate min-h-[42vh] overflow-hidden">
        <Image src={aboutImage.src} alt={aboutImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
        <div className="relative section-wrap flex min-h-[42vh] flex-col justify-end pb-12 pt-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About Pana Plumbing</h1>
          <p className="mt-3 max-w-2xl text-slate-200">
            A Sydney-based plumbing team focused on reliable workmanship, clear communication, and long-term customer trust.
          </p>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal">Built for Sydney homes and businesses</h2>
            <p className="mt-4 text-slate-600">
              From emergency callouts to planned renovations, we bring licensed, insured plumbing support across Greater Sydney. Our approach is simple: show up on time, explain the work clearly, and leave every job clean and compliant.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-brand-navy">Quality First</h3>
                <p className="mt-2 text-sm text-slate-600">Every job completed to high industry standards.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">Transparent Service</h3>
                <p className="mt-2 text-sm text-slate-600">Clear quotes and practical advice before work begins.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">Local Team</h3>
                <p className="mt-2 text-sm text-slate-600">Fast response across Sydney and surrounding suburbs.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.slice(0, 4).map((image) => (
              <div key={image.src} className="relative aspect-square overflow-hidden">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
