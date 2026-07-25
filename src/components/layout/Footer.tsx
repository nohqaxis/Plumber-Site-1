import Link from "next/link";

import { business, suburbs } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-brand-charcoal text-slate-100">
      <div className="section-wrap grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{business.name}</h3>
          <p className="mt-1 text-sm font-semibold text-brand-sky">{business.slogan}</p>
          <p className="mt-2 text-sm text-slate-300">Modern plumbing solutions across Sydney with fast response and clear communication.</p>
        </div>
        <div>
          <h4 className="font-semibold">Service Areas</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            {suburbs.map((suburb) => (
              <li key={suburb}>{suburb}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect</h4>
          <p className="mt-2 text-sm text-slate-300">{business.phone}</p>
          <p className="text-sm text-slate-300">{business.email}</p>
          <Link href={business.instagram} className="mt-2 inline-block text-sm text-blue-300 hover:text-blue-200">Instagram</Link>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} {business.name}. ABN {business.abn}</div>
    </footer>
  );
}
