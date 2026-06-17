"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Item {
  src: string;
  alt: string;
  span?: string;
}

const CATEGORIES: Array<{
  id: string;
  label: string;
  folder: string;
  items: Item[];
}> = [
  {
    id: "peinture",
    label: "Peinture",
    folder: "portfolio-peinture",
    items: [
      { src: "01.jpg", alt: "Peinture salon" },
      { src: "02.jpg", alt: "Cage d'escalier" },
      { src: "03.jpg", alt: "Murs peints" },
      { src: "04.jpg", alt: "Finitions" },
    ],
  },
  {
    id: "serrurerie",
    label: "Serrurerie",
    folder: "portfolio-serrurerie",
    items: [
      { src: "01.jpg", alt: "Porte blindée" },
      { src: "02.jpg", alt: "Cylindre" },
      { src: "03.jpg", alt: "Serrure 5 points" },
      { src: "04.jpg", alt: "Verrou" },
    ],
  },
  {
    id: "plomberie",
    label: "Plomberie",
    folder: "portfolio-plomberie",
    items: [
      { src: "01.jpg", alt: "Salle de bain" },
      { src: "02.jpg", alt: "Robinetterie" },
      { src: "03.jpg", alt: "Recherche fuite" },
      { src: "04.jpg", alt: "WC" },
    ],
  },
  {
    id: "renovation",
    label: "Rénovation",
    folder: "portfolio-renovation",
    items: [
      { src: "01.jpg", alt: "Cuisine complète" },
      { src: "02.jpg", alt: "Pièce à vivre" },
      { src: "03.jpg", alt: "Sol" },
      { src: "04.jpg", alt: "Cloisons" },
    ],
  },
];

export function PortfolioByCategory() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section id="realisations" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Portfolio par métier
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight uppercase text-foreground">
            Le travail<span className="text-primary">.</span> Pas les mots.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "px-6 py-2.5 rounded-full font-display tracking-tight uppercase transition-all whitespace-nowrap",
                active === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground/70 hover:bg-paper hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[14rem] gap-3"
          >
            {current.items.map((item, i) => (
              <div
                key={`${active}-${i}`}
                className={cn(
                  "relative overflow-hidden rounded-xl group bg-card",
                  item.span
                )}
              >
                <Image
                  src={`/${current.folder}/${item.src}`}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
