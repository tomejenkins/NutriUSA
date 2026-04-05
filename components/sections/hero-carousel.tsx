"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HeroSlide } from "@/lib/types";
import { Button } from "@/components/ui/button";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000); return () => clearInterval(t); }, [slides.length]);
  const slide = slides[idx];
  return (
    <section className="relative h-[64vh] min-h-[460px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          <Image src={slide.desktopImage} alt={slide.alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30" />
          <div className="container-shell relative z-10 flex h-full max-w-3xl flex-col justify-center text-white">
            <p className="text-sm uppercase tracking-[0.22em] text-gold">{slide.subtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{slide.title}</h1>
            <p className="mt-4 text-base text-white/90">{slide.body}</p>
            <div className="mt-6 flex flex-wrap gap-3"><Button href={slide.primaryCta.href} variant="premium">{slide.primaryCta.label}</Button><Button href={slide.secondaryCta.href} variant="secondary">{slide.secondaryCta.label}</Button></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
