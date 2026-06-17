"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { STATS } from "@/lib/stats";

function StatBlock({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = new Intl.NumberFormat("fr-FR").format(
            Math.round(v)
          );
        }
      },
    });
    return () => ctrl.stop();
  }, [value, inView]);

  return (
    <div ref={containerRef} className="text-center">
      <p className="font-display text-6xl md:text-8xl tracking-tighter text-primary leading-none">
        <span ref={ref}>0</span>
        <span className="text-foreground/80">{suffix}</span>
      </p>
      <p className="mt-3 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function NumberTicker() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((s) => (
            <StatBlock key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
