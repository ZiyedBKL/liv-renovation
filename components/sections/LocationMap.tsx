"use client";

import dynamic from "next/dynamic";
import { SITE } from "@/lib/schema-org";

const AdvancedMap = dynamic(
  () => import("@/components/ui/advanced-map").then((m) => m.AdvancedMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[440px] items-center justify-center bg-card rounded-xl">
        <p className="font-sans text-sm text-muted-foreground">
          Chargement de la carte…
        </p>
      </div>
    ),
  }
);

export function LocationMap() {
  const popupContent = `
    <strong>${SITE.name}</strong><br/>
    Zone d'intervention : ${SITE.region}<br/>
    Rayon ${SITE.radiusKm} km autour de Paris
  `;

  return (
    <section id="zone" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Zone couverte
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase text-foreground">
            Île-de-France<span className="text-primary">. Partout.</span>
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-xl mx-auto">
            8 départements · 48 communes prioritaires · Intervention sous 2h
            en zone parisienne, journée même en grande couronne.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border">
          <AdvancedMap
            center={[SITE.centerLat, SITE.centerLng]}
            zoom={9}
            markers={[
              {
                position: [SITE.centerLat, SITE.centerLng],
                popup: { title: SITE.name, content: popupContent },
              },
            ]}
            circle={{
              center: [SITE.centerLat, SITE.centerLng],
              radius: SITE.radiusKm * 1000,
              color: "#C9A961",
            }}
            style={{ height: "500px", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
