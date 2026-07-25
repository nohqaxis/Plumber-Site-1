import Image from "next/image";
import Link from "next/link";

import { suburbs } from "@/lib/constants";
import { contactImage, galleryImages } from "@/lib/images";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "Sydney Service Areas | Pana Plumbing",
  "See where we provide plumbing services across Sydney.",
  "/areas"
);

export default function AreasPage() {
  return (
    <main>
      <section className="relative isolate min-h-[36vh] overflow-hidden">
        <Image src={contactImage.src} alt={contactImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
        <div className="relative section-wrap flex min-h-[36vh] flex-col justify-end pb-10 pt-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Service Areas Across Sydney</h1>
          <p className="mt-3 max-w-2xl text-slate-200">
            Our team services homes and businesses across major Sydney regions.
          </p>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {suburbs.map((suburb, index) => {
            const slug = suburb.toLowerCase().replace(/\s+/g, "-");
            const image = galleryImages[index % galleryImages.length];
            return (
              <Link
                key={suburb}
                href={`/areas/${slug}`}
                className="group grid overflow-hidden rounded-xl border border-slate-200 sm:grid-cols-[140px_1fr]"
              >
                <div className="relative min-h-28 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="140px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-brand-navy">{suburb}</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Local plumbing support in {suburb} and surrounding suburbs.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
