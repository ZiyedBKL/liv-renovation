import { QuoteForm } from "@/components/forms/QuoteForm";

export function QuoteSection() {
  return (
    <section id="devis" className="bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Devis gratuit
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase text-foreground">
            Décrivez votre projet<span className="text-primary">.</span>
            <br className="hidden md:inline" />
            <span className="text-primary">On revient sous 24h.</span>
          </h2>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
