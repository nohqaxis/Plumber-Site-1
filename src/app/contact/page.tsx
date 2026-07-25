import Image from "next/image";

import { ContactForm } from "@/components/forms/ContactForm";
import { business } from "@/lib/constants";
import { contactImage } from "@/lib/images";
import { localBusinessSchema, makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "Contact Pana Plumbing",
  "Contact our Sydney plumbing team for bookings and enquiries.",
  "/contact"
);

export default function ContactPage() {
  return (
    <main>
      <section className="relative isolate min-h-[36vh] overflow-hidden">
        <Image src={contactImage.src} alt={contactImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
        <div className="relative section-wrap flex min-h-[36vh] flex-col justify-end pb-10 pt-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-slate-200">
            Get in touch for plumbing bookings, emergency support, or a free quote request.
          </p>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-brand-navy">Business details</h2>
            <p className="mt-4 text-sm text-slate-700">
              <strong>Phone:</strong> {business.phone}
            </p>
            <p className="text-sm text-slate-700">
              <strong>Email:</strong> {business.email}
            </p>
            <p className="text-sm text-slate-700">
              <strong>Hours:</strong> {business.hours}
            </p>
            <p className="text-sm text-slate-700">
              <strong>Service radius:</strong> {business.serviceRadius}
            </p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={contactImage.src} alt={contactImage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </main>
  );
}
