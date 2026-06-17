import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SITE, WHATSAPP_LINK } from "@/lib/schema-org";

export function Footer() {
  return (
    <footer className="bg-paper text-paper-foreground py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Image
            src="/logo-liv.png"
            alt="LIV Rénovation"
            width={180}
            height={180}
            className="h-40 w-auto mb-4 object-contain"
          />
          <p className="font-sans text-sm text-muted-foreground max-w-sm leading-relaxed">
            Artisan polyvalent multi-services en Île-de-France. Serrurerie,
            peinture, plomberie, rénovation complète. Dépannage urgent 7j/7.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-foreground/80 hover:text-whatsapp transition-colors"
          >
            <WhatsAppIcon className="size-5" />
            <span className="font-sans text-sm">WhatsApp · {SITE.phoneDisplay}</span>
          </a>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Zone
          </p>
          <p className="font-sans text-sm text-foreground/90 leading-relaxed">
            <MapPin className="inline size-4 mr-1 text-primary" />
            {SITE.region}
            <br />
            <span className="text-muted-foreground">
              7j/7 selon disponibilité
            </span>
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 font-sans text-sm text-foreground/90 hover:text-primary transition-colors mb-2"
          >
            <Phone className="size-4" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 font-sans text-sm text-foreground/90 hover:text-primary transition-colors break-all"
          >
            <Mail className="size-4 shrink-0" />
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
        <p>
          {/* TODO: SIRET + adresse postale + lien mentions légales quand fournis par le client */}
          Mentions légales · CGV · Cookies
        </p>
      </div>
    </footer>
  );
}
