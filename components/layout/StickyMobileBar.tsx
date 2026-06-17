"use client";

import { Phone, FileText } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SITE, WHATSAPP_LINK } from "@/lib/schema-org";

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-primary/30">
      <div className="grid grid-cols-3 gap-2 p-3">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-emergency py-2 px-3 text-white"
        >
          <Phone className="size-4" />
          <span className="font-sans text-xs">Appeler</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-whatsapp py-2 px-3 text-white"
        >
          <WhatsAppIcon className="size-4" />
          <span className="font-sans text-xs">WhatsApp</span>
        </a>
        <a
          href="#devis"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-primary py-2 px-3 text-primary-foreground"
        >
          <FileText className="size-4" />
          <span className="font-sans text-xs">Devis</span>
        </a>
      </div>
    </div>
  );
}
