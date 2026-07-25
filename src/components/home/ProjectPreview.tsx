import Image from "next/image";
import Link from "next/link";

import { galleryImages } from "@/lib/images";

export function ProjectPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="bg-brand-light py-16">
      <div className="section-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal">Recent Work</h2>
            <p className="mt-2 text-slate-600">A look at the quality finishes and on-site workmanship we deliver across Sydney.</p>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-brand-blue">
            Open full gallery
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((image) => (
            <div key={image.src} className="group relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent p-4">
                <p className="text-sm font-medium text-white">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
