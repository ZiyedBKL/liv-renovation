import { Marquee } from "@/components/ui/marquee";

const ITEMS = [
  "Île-de-France",
  "7j/7",
  "Devis gratuit sous 24h",
  "Intervention sous 2h",
  "Artisan polyvalent",
  "10 spécialités",
  "WhatsApp réponse rapide",
  "Travail garanti",
];

export function TrustBarMarquee() {
  return (
    <div className="bg-card border-y border-border py-3">
      <Marquee durationSeconds={40}>
        {ITEMS.map((item) => (
          <span
            key={item}
            className="font-display text-lg tracking-tight uppercase text-primary whitespace-nowrap inline-flex items-center"
          >
            {item}
            <span className="mx-6 text-muted-foreground">·</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
