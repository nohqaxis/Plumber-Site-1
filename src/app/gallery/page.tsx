import Image from "next/image";

import { galleryImages } from "@/lib/images";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "Plumbing Projects Gallery | Pana Plumbing",
  "View recent plumbing project examples and workmanship across Sydney.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <main>
      <section className="relative isolate min-h-[42vh] overflow-hidden">
        <Image
          src={galleryImages[2].src}
          alt={galleryImages[2].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
        <div className="relative section-wrap flex min-h-[42vh] flex-col justify-end pb-12 pt-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Project Gallery</h1>
          <p className="mt-3 max-w-2xl text-slate-200">
            Bathroom renovations, kitchen fit-outs, emergency repairs, and commercial work across Greater Sydney.
          </p>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <figure key={image.src} className="mb-4 break-inside-avoid overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="mt-2 flex items-center justify-between gap-2 text-sm">
                <span className="text-slate-700">{image.alt}</span>
                <span className="shrink-0 font-medium text-brand-navy">{image.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
