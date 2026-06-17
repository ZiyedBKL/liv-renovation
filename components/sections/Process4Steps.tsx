"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Vous nous appelez",
    desc: "Téléphone, WhatsApp ou formulaire. Réponse rapide en journée.",
  },
  {
    n: "02",
    title: "Devis gratuit sous 24h",
    desc: "Devis transparent, sans engagement. Photos = devis encore plus précis.",
  },
  {
    n: "03",
    title: "Intervention planifiée",
    desc: "Date convenue ensemble. Urgences traitées sous 2h en IDF.",
  },
  {
    n: "04",
    title: "Travail garanti",
    desc: "Satisfait ou ré-intervention sous 7 jours. Facture détaillée fournie.",
  },
];

export function Process4Steps() {
  return (
    <section id="process" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Process
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight uppercase text-foreground">
            4 étapes. <span className="text-primary">Rien de plus.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <p className="font-display text-7xl md:text-8xl text-primary/30 tracking-tighter leading-none">
                {s.n}
              </p>
              <h3 className="font-display text-2xl tracking-tight uppercase text-foreground mt-2 mb-2">
                {s.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-primary/40 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
