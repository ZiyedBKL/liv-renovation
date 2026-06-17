import { FlowArt, FlowSection } from "@/components/ui/flow-art";

interface SubService {
  title: string;
  description: string;
}

interface Univers {
  number: string;
  label: string;
  title: ReactStringMultiline;
  baseline: string;
  subServices: SubService[];
  bg: string;
  fg: string;
  accentBorder: string;
  accentText: string;
}

type ReactStringMultiline = string[];

const UNIVERS: Univers[] = [
  {
    number: "01",
    label: "Sécurité & Accès",
    title: ["Sécurisez", "Votre", "Espace"],
    baseline:
      "Serrurerie. Vitrerie. Fenêtres & portes. Vos premières lignes de défense — installées, réparées, blindées.",
    subServices: [
      {
        title: "Serrurerie",
        description:
          "Ouverture de porte, remplacement de serrure, cylindre, verrou, porte blindée, sécurisation après effraction.",
      },
      {
        title: "Vitrerie",
        description:
          "Remplacement de vitre cassée, vitrage simple ou double, sécurisation et mise en sécurité d'urgence.",
      },
      {
        title: "Fenêtres & portes",
        description:
          "Réglage, réparation, remplacement de poignées, crémones, portes et fenêtres PVC, bois ou aluminium.",
      },
    ],
    bg: "#0A0908",
    fg: "#F5F1E8",
    accentBorder: "border-primary/30",
    accentText: "text-primary",
  },
  {
    number: "02",
    label: "Confort & Réseaux",
    title: ["Tout", "Fonctionne", "Mieux"],
    baseline:
      "Plomberie, électricité, volets roulants. Les invisibles du quotidien — entretenus, réparés, sans surprise.",
    subServices: [
      {
        title: "Plomberie",
        description:
          "Recherche de fuite, remplacement de robinetterie, mécanisme WC, siphon, débouchage, petites réparations.",
      },
      {
        title: "Électricité",
        description:
          "Remplacement d'interrupteurs, prises, luminaires, radiateurs électriques et petits dépannages.",
      },
      {
        title: "Volets roulants",
        description:
          "Réparation moteur, remplacement d'attaches, tablier, réglage et dépannage.",
      },
    ],
    bg: "#1A1816",
    fg: "#F5F1E8",
    accentBorder: "border-primary/30",
    accentText: "text-primary",
  },
  {
    number: "03",
    label: "Esthétique",
    title: ["Du", "Beau", "Au Mur"],
    baseline:
      "Peinture, revêtements, finitions. Ce que vos invités voient en premier — soigné jusqu'au moindre détail.",
    subServices: [
      {
        title: "Peinture",
        description:
          "Remise en peinture appartement, cage d'escalier, murs, plafonds, boiseries, traitement anti-humidité.",
      },
      {
        title: "Revêtements & finitions",
        description:
          "Pose de plinthes, reprises après dégâts, enduits, ponçage et finitions.",
      },
    ],
    bg: "#C9A961",
    fg: "#1A1816",
    accentBorder: "border-black/30",
    accentText: "text-foreground",
  },
  {
    number: "04",
    label: "Rénovation globale",
    title: ["On", "Refait", "Tout"],
    baseline:
      "Rénovation intérieure complète. Remise en état après sinistre. Entretien de parties communes. Du devis à la livraison clé en main.",
    subServices: [],
    bg: "#0A0908",
    fg: "#F5F1E8",
    accentBorder: "border-primary/30",
    accentText: "text-primary",
  },
  {
    number: "05",
    label: "Urgences 7j/7",
    title: ["Sous", "2", "Heures"],
    baseline:
      "Serrurerie, plomberie, sécurisation. Intervention rapide 7j/7 selon disponibilité, partout en Île-de-France.",
    subServices: [],
    bg: "linear-gradient(135deg, #0A0908 0%, #1A1816 40%, #C9A961 100%)",
    fg: "#F5F1E8",
    accentBorder: "border-primary/40",
    accentText: "text-primary",
  },
];

export function FlowArtSection() {
  return (
    <section id="services">
      <FlowArt aria-label="Toutes nos interventions">
        {UNIVERS.map((u) => (
          <FlowSection
            key={u.number}
            style={{ background: u.bg, color: u.fg }}
            aria-label={u.label}
          >
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${u.accentText}`}>
              {u.number} — {u.label}
            </p>
            <hr className={`my-[2vw] border-none border-t ${u.accentBorder}`} />
            <h2 className="font-display text-[clamp(3.5rem,12vw,14rem)] font-normal leading-[0.85] uppercase tracking-tight">
              {u.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <hr className={`my-[2vw] border-none border-t ${u.accentBorder}`} />
            <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] leading-relaxed">
              {u.baseline}
            </p>
            {u.subServices.length > 0 && (
              <>
                <hr className={`my-[2vw] border-none border-t ${u.accentBorder}`} />
                <div className="flex flex-wrap gap-8 md:gap-12">
                  {u.subServices.map((s) => (
                    <div key={s.title} className="min-w-[200px] flex-1 max-w-md">
                      <p className={`mb-2 text-sm font-bold uppercase tracking-wider ${u.accentText}`}>
                        {s.title}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed opacity-80">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {u.number === "05" && (
              <>
                <hr className={`my-[2vw] border-none border-t ${u.accentBorder}`} />
                <a
                  href="tel:+33781007428"
                  className="inline-block bg-primary text-primary-foreground font-display text-2xl px-8 py-4 rounded-full hover:bg-primary/90 transition-colors tracking-tight uppercase shadow-lg"
                >
                  📞 07 81 00 74 28
                </a>
              </>
            )}
          </FlowSection>
        ))}
      </FlowArt>
    </section>
  );
}
