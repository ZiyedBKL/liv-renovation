"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";

interface HeroScrubProps {
  frameCount: number;
  frameUrl: (i: number) => string;
  titleTop: string;
  titleBottom: string;
  accentClassName?: string;
}

/**
 * Hero scroll-scrub avant/après.
 *
 * Mode placeholder (frameCount <= 10) :
 *   - Crossfade des frames liées au scroll (Framer Motion useTransform)
 *   - Ex: 2 frames "avant" / "après" → opacity de la 2ème passe de 0 à 1
 *     pendant que le scroll progresse
 *
 * Mode production (frameCount > 10) :
 *   - Même logique mais avec X frames intermédiaires
 *   - Quand les 150 frames seront livrées, swap fichiers + bump frameCount
 *     dans la prop, code identique
 *
 * Fallback : reduced-motion → vue split-screen statique 50/50
 */
export function HeroScrub({
  frameCount,
  frameUrl,
  titleTop,
  titleBottom,
  accentClassName = "text-primary",
}: HeroScrubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Opacity du dernier frame (cible "après")
  const lastFrameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Titres : "AVANT" fade out + slide up, "APRÈS" fade in + slide up
  const topTitleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const topTitleY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const bottomTitleOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const bottomTitleY = useTransform(scrollYProgress, [0.4, 1], [40, 0]);

  // Fallback statique reduced-motion ou pas encore monté SSR
  if (reducedMotion || !mounted) {
    return (
      <section className="relative grid h-screen grid-cols-2 bg-background">
        <div className="relative">
          <Image
            src={frameUrl(0)}
            alt={titleTop}
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/30" />
          <h2 className="absolute inset-0 flex items-center justify-center font-display text-6xl tracking-tight uppercase text-foreground">
            {titleTop}
          </h2>
        </div>
        <div className="relative">
          <Image
            src={frameUrl(frameCount - 1)}
            alt={titleBottom}
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/30" />
          <h2 className={`absolute inset-0 flex items-center justify-center font-display text-6xl tracking-tight uppercase ${accentClassName}`}>
            {titleBottom}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Frame "AVANT" (toujours visible en fond) */}
        <div className="absolute inset-0">
          <Image
            src={frameUrl(0)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Frame "APRÈS" (crossfade via opacity scroll-linked) */}
        <motion.div
          style={{ opacity: lastFrameOpacity }}
          className="absolute inset-0"
        >
          <Image
            src={frameUrl(frameCount - 1)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlay sombre pour lisibilité titre */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/70" />

        {/* Titres */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6">
          <motion.h1
            style={{ opacity: topTitleOpacity, y: topTitleY }}
            className="font-display text-7xl tracking-tighter uppercase text-foreground md:text-9xl lg:text-[12rem]"
          >
            {titleTop}
          </motion.h1>
          <motion.h1
            style={{ opacity: bottomTitleOpacity, y: bottomTitleY }}
            className={`absolute font-display text-7xl tracking-tighter uppercase md:text-9xl lg:text-[12rem] ${accentClassName}`}
          >
            {titleBottom}
          </motion.h1>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-sans text-xs tracking-[0.3em] uppercase text-foreground/60">
          ↓ Faites défiler
        </div>
      </div>
    </div>
  );
}
