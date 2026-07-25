import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/constants";
import { serviceImages } from "@/lib/images";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "Plumbing Services | Pana Plumbing",
  "Explore our full range of Sydney plumbing services.",
  "/services"
);

export default function ServicesPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="text-4xl font-bold text-brand-charcoal">Plumbing Services</h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        We provide reliable residential and commercial plumbing support throughout Sydney.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const image = serviceImages[service.slug];
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-brand-navy">{service.title}</h2>
                <p className="mt-2 text-slate-600">{service.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
