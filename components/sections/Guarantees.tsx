"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Shield } from "lucide-react";

const ITEMS = [
  {
    icon: Clock,
    title: "Devis gratuit sous 24h",
    desc: "Vous appelez le matin, vous avez un devis avant la nuit. Sans engagement.",
  },
  {
    icon: Zap,
    title: "Intervention sous 2h en IDF",
    desc: "Urgences traitées en priorité, partout en Île-de-France selon disponibilité.",
  },
  {
    icon: Shield,
    title: "Satisfait ou ré-intervention 7j",
    desc: "Si le travail ne vous convient pas, nous revenons gratuitement sous 7 jours.",
  },
];

export function Guarantees() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Nos engagements
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase text-foreground">
            Ce qu&apos;on vous <span className="text-primary">garantit</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <item.icon className="size-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl tracking-tight uppercase text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Slot vide pour les logos certifications futures */}
        <div className="text-center text-xs text-muted-foreground/60">
          {/* TODO: insérer logos certifications (décennale, RGE, Qualibat) quand reçus du client */}
        </div>
      </div>
    </section>
  );
}
