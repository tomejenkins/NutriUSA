"use client";
import { useEffect, useState } from "react";
import { Testimonial } from "@/lib/types";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx((p) => (p + 1) % items.length), 4500); return () => clearInterval(t); }, [items.length]);
  const active = items[idx];
  return (
    <section className="card-surface bg-navy text-white">
      <p className="text-sm uppercase tracking-[0.18em] text-gold">Client Feedback</p>
      <blockquote className="mt-4 text-xl leading-relaxed">“{active.quote}”</blockquote>
      <p className="mt-3 text-sm text-white/80">{active.name} · {active.role}</p>
    </section>
  );
}
