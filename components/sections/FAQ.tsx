import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Combien coûte un dépannage urgent en serrurerie ?",
    a: "Le tarif dépend de la nature de la panne, du type de serrure et de l'horaire d'intervention. Un devis clair est communiqué avant toute intervention, sans frais cachés.",
  },
  {
    q: "Intervenez-vous en weekend ?",
    a: "Oui. Nous intervenons les week-ends et jours fériés selon nos disponibilités pour les dépannages urgents.",
  },
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "La plupart de nos devis sont envoyés sous 24 à 48 heures après la visite ou la réception des informations nécessaires.",
  },
  {
    q: "Êtes-vous assuré ?",
    a: "Oui. LIV Rénovation est une entreprise assurée en responsabilité civile professionnelle et garantie décennale pour les travaux concernés.",
  },
  {
    q: "Acceptez-vous les paiements en plusieurs fois ?",
    a: "Oui, un paiement en plusieurs fois peut être proposé selon le montant des travaux et après étude de votre dossier.",
  },
  {
    q: "Quelle zone couvrez-vous exactement ?",
    a: "Nous intervenons principalement à Paris et dans de nombreuses communes d'Île-de-France, notamment dans les Hauts-de-Seine, la Seine-Saint-Denis, le Val-de-Marne et les secteurs limitrophes.",
  },
  {
    q: "Pouvez-vous intervenir après un sinistre (dégât des eaux, vol, incendie) ?",
    a: "Oui. Nous réalisons les interventions d'urgence, les mises en sécurité, les réparations et les remises en état. Nous pouvons également fournir des devis détaillés pour les assurances.",
  },
  {
    q: "Comment se passe une rénovation complète ?",
    a: "Nous commençons par une visite technique afin d'évaluer vos besoins. Un devis détaillé est ensuite établi, suivi d'une planification des travaux. Nous assurons le suivi du chantier jusqu'à la réception finale pour garantir un résultat conforme à vos attentes.",
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
