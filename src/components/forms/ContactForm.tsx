"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, type: "contact" })
    });
    if (response.ok) setSent(true);
  };

  if (sent) return <p className="rounded-xl bg-green-50 p-4 text-green-700">Thanks! We received your message and will get back to you shortly.</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
      <input {...register("name")} placeholder="Your name" className="w-full rounded-lg border p-3" />
      {errors.name && <p className="text-xs text-red-600">Please enter your name.</p>}
      <input {...register("email")} placeholder="Email address" className="w-full rounded-lg border p-3" />
      {errors.email && <p className="text-xs text-red-600">Please enter a valid email.</p>}
      <textarea {...register("message")} rows={5} placeholder="How can we help?" className="w-full rounded-lg border p-3" />
      {errors.message && <p className="text-xs text-red-600">Please add a bit more detail.</p>}
      <button disabled={isSubmitting} className="rounded-full bg-brand-blue px-6 py-3 font-semibold text-white">{isSubmitting ? "Sending..." : "Send Message"}</button>
    </form>
  );
}
