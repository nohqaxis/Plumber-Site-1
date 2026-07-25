import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/constants";
import { serviceImages } from "@/lib/images";

export function ServicesGrid() {
  return (
    <section className="section-wrap py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-brand-charcoal">Our Services</h2>
          <p className="mt-2 text-slate-600">Complete residential and commercial plumbing support.</p>
        </div>
        <Link href="/services" className="text-sm font-semibold text-brand-blue">
          See all services
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const image = serviceImages[service.slug];
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
