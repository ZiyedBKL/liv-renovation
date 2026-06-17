"use client";

import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface FlowSectionProps {
  style?: CSSProperties;
  children: ReactNode;
  "aria-label"?: string;
}

/**
 * Une section de FlowArt — affiche son contenu sur fond pleine hauteur.
 * V1 : entrance animation Framer Motion (pas de pin GSAP — version simplifiée).
 */
export function FlowSection({
  style,
  children,
  ...props
}: FlowSectionProps) {
  return (
    <motion.section
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full px-6 py-20 md:px-16 lg:px-24"
      {...props}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}

interface FlowArtProps {
  children: ReactNode;
  "aria-label"?: string;
}

/**
 * Wrapper container pour empiler des FlowSection.
 * V1 simplifié : sections empilées séquentielles avec entrance Framer Motion.
 * V2 (quand validé) : ajout GSAP ScrollTrigger pin + rotation cinematic.
 */
export function FlowArt({ children, ...props }: FlowArtProps) {
  return (
    <div className="relative w-full" {...props}>
      {children}
    </div>
  );
}
