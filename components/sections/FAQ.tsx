import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Combien coûte un dépannage urgent en serrurerie ?",
    a: "Une ouverture de porte sans dégât est facturée entre 80 € et 180 € en journée. Le tarif est majoré la nuit, les dimanches et jours fériés. Devis transparent annoncé avant intervention.",
  },
  {
    q: "Intervenez-vous en weekend ?",
    a: "Oui, 7j/7 selon disponibilité pour les urgences (serrurerie, plomberie, sécurisation). Pour les chantiers planifiés, du lundi au samedi.",
  },
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "Maximum 24h après votre demande. Plus vous nous envoyez de photos du problème, plus le devis est précis dès le premier échange.",
  },
  {
    q: "Êtes-vous assuré ?",
    a: "LIV Rénovation est couvert par une assurance professionnelle. Les attestations sont fournies sur demande avant tout chantier.",
  },
  {
    q: "Acceptez-vous les paiements en plusieurs fois ?",
    a: "Pour les chantiers > 1 500 €, paiement en 3 fois sans frais possible sur demande (30 % acompte, 35 % à mi-chantier, 35 % à la livraison).",
  },
  {
    q: "Quelle zone couvrez-vous exactement ?",
    a: "Toute l'Île-de-France. Pour les communes hors zone prioritaire, contactez-nous, nous étudions chaque demande au cas par cas.",
  },
  {
    q: "Pouvez-vous intervenir après un sinistre (dégât des eaux, vol, incendie) ?",
    a: "Oui, nous intervenons en remise en état après sinistre. Nous travaillons aussi en lien avec votre assurance si besoin (devis conforme, factures détaillées).",
  },
  {
    q: "Comment se passe une rénovation complète ?",
    a: "1) Visite gratuite sur place pour relevé exact · 2) Devis détaillé sous 48h · 3) Validation et planning · 4) Réalisation · 5) Livraison et garantie. Pour une pièce de 15 m², comptez 1 à 3 semaines.",
  },
];

export function FAQ() {
  return (
    <section className="section-light py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Questions fréquentes
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase text-foreground">
            On répond.<span className="text-primary"> Avant que vous ne demandiez.</span>
          </h2>
        </div>

        <Accordion className="w-full">
          {ITEMS.map((item, i) => (
            <AccordionItem key={i}>
              <AccordionTrigger className="font-display text-lg tracking-tight uppercase text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
