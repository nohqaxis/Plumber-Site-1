"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Areas", "/areas"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section-wrap flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Pana Plumbing logo" width={56} height={56} className="rounded-full" />
          <span className="text-lg font-bold text-brand-navy">Pana Plumbing</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-700 transition hover:text-brand-blue">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/contact" className="rounded-full border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy">Call Now</Link>
          <Link href="/quote" className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white">Get a Quote</Link>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="rounded border px-3 py-2 text-sm md:hidden">Menu</button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-wrap flex flex-col py-4">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="py-2 text-slate-700" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/quote" className="mt-2 rounded-full bg-brand-blue px-4 py-2 text-center font-semibold text-white">Get a Quote</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
