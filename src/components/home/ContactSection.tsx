import { Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/forms/ContactForm";
import { business } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-charcoal py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(43,127,212,0.25),transparent_50%)]" />
      <div className="relative section-wrap grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-sky">Contact Us</p>
          <h2 className="mt-3 font-jakarta text-3xl font-bold sm:text-4xl">
            Got a plumbing problem? Let&apos;s sort it.
          </h2>
          <p className="mt-4 max-w-md text-slate-300">
            Send us a message and we&apos;ll get back to you quickly — or call us directly for urgent jobs.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2.5"><Phone className="h-4 w-4 text-brand-sky" /></span>
              <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="font-semibold hover:text-brand-sky">{business.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2.5"><Mail className="h-4 w-4 text-brand-sky" /></span>
              <a href={`mailto:${business.email}`} className="hover:text-brand-sky">{business.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2.5"><Clock3 className="h-4 w-4 text-brand-sky" /></span>
              <span>{business.hours}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2.5"><MapPin className="h-4 w-4 text-brand-sky" /></span>
              <span>{business.serviceRadius}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2.5"><Instagram className="h-4 w-4 text-brand-sky" /></span>
              <Link href={business.instagram} className="hover:text-brand-sky">@panaplumbing</Link>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
