import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/lib/constants";
import { serviceImages } from "@/lib/images";
import { makeMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return makeMetadata(`${service.title} | Pana Plumbing`, service.excerpt, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const image = serviceImages[service.slug];

  return (
    <main>
      <section className="relative isolate min-h-[45vh] overflow-hidden">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brand-charcoal/65" />
        <div className="relative section-wrap flex min-h-[45vh] flex-col justify-end pb-12 pt-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{service.title}</h1>
          <p className="mt-3 max-w-2xl text-slate-200">{service.excerpt}</p>
        </div>
      </section>

      <section className="section-wrap py-16">
        <p className="max-w-3xl text-lg text-slate-600">
          Our licensed Sydney plumbers deliver safe, compliant work with clear communication and practical recommendations at every step.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-brand-navy">What you can expect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Fast response scheduling and transparent timelines.</li>
              <li>High-quality parts and workmanship guarantees.</li>
              <li>Clean, respectful service from experienced local plumbers.</li>
            </ul>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-2xl">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <Link href="/quote" className="mt-10 inline-flex rounded-full bg-brand-blue px-6 py-3 font-semibold text-white">
          Request a quote for {service.title}
        </Link>
      </section>
    </main>
  );
}
