"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Droplets,
  Flame,
  Hammer,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Wrench,
  Zap
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { business, services, suburbs } from "@/lib/constants";
import { serviceImages } from "@/lib/images";

const schema = z.object({
  service: z.string().min(1),
  urgency: z.enum(["today", "this-week", "planned"]),
  suburb: z.string().min(1),
  details: z.string().min(10),
  name: z.string().min(2),
  phone: z.string().min(6)
});

type Values = z.infer<typeof schema>;

const icons = {
  Wrench,
  Droplets,
  Flame,
  Search,
  Hammer,
  Shield,
  ShieldCheck,
  Building2
} as const;

const urgencyOptions = [
  {
    value: "today" as const,
    title: "Need help today",
    description: "Burst pipe, no hot water, or urgent leak.",
    icon: Zap,
    tone: "border-red-200 bg-red-50 text-red-700 ring-red-300"
  },
  {
    value: "this-week" as const,
    title: "This week",
    description: "Soon as practical — within a few days.",
    icon: Clock3,
    tone: "border-blue-200 bg-blue-50 text-brand-navy ring-brand-sky"
  },
  {
    value: "planned" as const,
    title: "Planned work",
    description: "Renovation or non-urgent job booking.",
    icon: CheckCircle2,
    tone: "border-emerald-200 bg-emerald-50 text-emerald-800 ring-emerald-300"
  }
];

const steps = ["Service", "Timing", "Details", "Contact"] as const;

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { urgency: "this-week", service: "", suburb: "", details: "", name: "", phone: "" },
    mode: "onChange"
  });

  const values = watch();
  const selectedService = useMemo(
    () => services.find((item) => item.title === values.service),
    [values.service]
  );
  const progress = ((step + 1) / steps.length) * 100;

  const goNext = async () => {
    const fieldsByStep: Array<(keyof Values)[]> = [
      ["service"],
      ["urgency"],
      ["suburb", "details"],
      ["name", "phone"]
    ];
    const valid = await trigger(fieldsByStep[step]);
    if (valid) setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  const onSubmit = async (formValues: Values) => {
    setSubmitError(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formValues, type: "quote" })
      });
      if (response.ok) setSent(true);
      else setSubmitError(true);
    } catch {
      setSubmitError(true);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-brand-light p-8 text-center shadow-sm sm:p-12"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="mt-5 font-jakarta text-3xl font-bold text-brand-charcoal">Quote request sent</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Thanks{values.name ? `, ${values.name.split(" ")[0]}` : ""}. We&apos;ll review your{" "}
          {values.service || "plumbing"} request and call you back shortly.
        </p>
        <div className="mx-auto mt-8 grid max-w-lg gap-3 text-left sm:grid-cols-2">
          <div className="rounded-2xl bg-white/80 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Service</p>
            <p className="mt-1 font-semibold text-brand-navy">{values.service}</p>
          </div>
          <div className="rounded-2xl bg-white/80 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Area</p>
            <p className="mt-1 font-semibold text-brand-navy">{values.suburb}</p>
          </div>
        </div>
        <a
          href={`tel:${business.phone.replace(/\s/g, "")}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          Prefer to talk now? {business.phone}
        </a>
      </motion.div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(27,79,138,0.45)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-sky px-6 py-5 text-white sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Step {step + 1} of {steps.length}</p>
            <h2 className="mt-1 font-jakarta text-2xl font-bold">{steps[step]}</h2>
          </div>
          {selectedService ? (
            <p className="rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">{selectedService.title}</p>
          ) : null}
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full rounded-full bg-white"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
        <div className="mt-3 flex gap-2">
          {steps.map((label, index) => (
            <div
              key={label}
              className={`h-1.5 flex-1 rounded-full ${index <= step ? "bg-white" : "bg-white/25"}`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="service"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-slate-600">What do you need help with?</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = icons[service.icon as keyof typeof icons] ?? Wrench;
                  const image = serviceImages[service.slug];
                  const selected = values.service === service.title;
                  return (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => {
                        setValue("service", service.title, { shouldValidate: true });
                      }}
                      className={`group overflow-hidden rounded-2xl border text-left transition ${
                        selected
                          ? "border-brand-blue ring-2 ring-brand-sky/60"
                          : "border-slate-200 hover:border-brand-sky/70"
                      }`}
                    >
                      <div className="relative h-28 overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                          <span className="rounded-full bg-white/20 p-1.5 backdrop-blur">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-semibold">{service.title}</span>
                        </div>
                      </div>
                      <p className="p-3 text-sm text-slate-600">{service.excerpt}</p>
                    </button>
                  );
                })}
              </div>
              {errors.service ? <p className="mt-3 text-sm text-red-600">Please choose a service to continue.</p> : null}
            </motion.div>
          ) : null}

          {step === 1 ? (
            <motion.div
              key="urgency"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-slate-600">How urgent is it?</p>
              <div className="mt-5 grid gap-3">
                {urgencyOptions.map((option) => {
                  const Icon = option.icon;
                  const selected = values.urgency === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setValue("urgency", option.value, { shouldValidate: true })}
                      className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition ${
                        selected ? `ring-2 ${option.tone}` : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="rounded-xl bg-white p-3 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-lg font-semibold text-brand-charcoal">{option.title}</span>
                        <span className="mt-1 block text-sm text-slate-600">{option.description}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Where in Sydney?</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {suburbs.map((suburb) => {
                    const selected = values.suburb === suburb;
                    return (
                      <button
                        key={suburb}
                        type="button"
                        onClick={() => setValue("suburb", suburb, { shouldValidate: true })}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                          selected
                            ? "border-brand-blue bg-brand-light text-brand-navy ring-2 ring-brand-sky/50"
                            : "border-slate-200 text-slate-700 hover:border-brand-sky"
                        }`}
                      >
                        {suburb}
                      </button>
                    );
                  })}
                </div>
                {errors.suburb ? <p className="mt-2 text-sm text-red-600">Please select your area.</p> : null}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Tell us what&apos;s going on</label>
                <textarea
                  {...register("details")}
                  rows={5}
                  className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-sky/40"
                  placeholder="E.g. hot water system stopped heating this morning, unit is about 8 years old..."
                />
                {errors.details ? <p className="mt-2 text-sm text-red-600">Add a bit more detail (at least a sentence).</p> : null}
              </div>
            </motion.div>
          ) : null}

          {step === 3 ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="rounded-2xl bg-brand-light p-4 text-sm text-slate-700">
                <p className="font-semibold text-brand-navy">Almost done</p>
                <p className="mt-1">
                  {values.service || "Plumbing"} · {urgencyOptions.find((item) => item.value === values.urgency)?.title} ·{" "}
                  {values.suburb || "Sydney"}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Your name</label>
                  <input
                    {...register("name")}
                    className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-sky/40"
                    placeholder="Full name"
                  />
                  {errors.name ? <p className="mt-2 text-sm text-red-600">Please enter your name.</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Best phone number</label>
                  <input
                    {...register("phone")}
                    className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-sky/40"
                    placeholder="04xx xxx xxx"
                  />
                  {errors.phone ? <p className="mt-2 text-sm text-red-600">Please enter a phone number.</p> : null}
                </div>
              </div>
              {submitError ? (
                <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send my quote request"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
