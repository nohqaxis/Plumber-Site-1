import { testimonials, trustBadges } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-wrap">
        <div className="mb-8 flex flex-wrap gap-2">
          {trustBadges.map((badge) => (
            <span key={badge} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm">{badge}</span>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-brand-charcoal">What Sydney clients say</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-brand-navy">{testimonial.name} · {testimonial.suburb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
