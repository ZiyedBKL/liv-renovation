"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";
import { SITE, WHATSAPP_LINK } from "@/lib/schema-org";

export function EmergencyZone() {
  return (
    <section style={{ backgroundColor: "#E25822" }} className="relative">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/emergency/poster.jpg"
        bgImageSrc="/emergency/bg.jpg"
        title="Intervention Express"
        subtitle="Sous 2 heures · IDF · 7j/7"
        scrollToExpand="Faites défiler"
        accentClassName="text-foreground italic"
      >
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-3xl md:text-5xl tracking-tight uppercase text-foreground mb-4">
            Porte claquée. Fuite. Vitre cassée.
            <br />
            <span className="text-foreground">On est là.</span>
          </p>
          <p className="font-sans text-base text-foreground/80 mb-8 max-w-xl mx-auto">
            Dépannage urgent toutes spécialités, partout en Île-de-France.
            Intervention rapide selon disponibilité, 7j/7 et 24h/24.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-sans text-base hover:bg-card transition-colors"
            >
              <Phone className="size-5" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-8 py-4 font-sans text-base hover:bg-whatsapp/90 transition-colors"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </ScrollExpandMedia>
    </section>
  );
}
