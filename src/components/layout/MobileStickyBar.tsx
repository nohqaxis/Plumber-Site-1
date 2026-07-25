import Link from "next/link";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-3 md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <Link href="/contact" className="flex-1 rounded-full border border-brand-navy px-4 py-2 text-center text-sm font-semibold text-brand-navy">Call</Link>
        <Link href="/quote" className="flex-1 rounded-full bg-brand-blue px-4 py-2 text-center text-sm font-semibold text-white">Quote</Link>
      </div>
    </div>
  );
}
