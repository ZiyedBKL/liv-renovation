import { ZoomParallax } from "@/components/ui/zoom-parallax";

const IMAGES = [
  { src: "/portfolio/01-salon-peint.jpg", alt: "Salon entièrement repeint" },
  { src: "/portfolio/02-porte-blindee.jpg", alt: "Porte blindée installée" },
  { src: "/portfolio/03-salle-bain.jpg", alt: "Salle de bain rénovée" },
  { src: "/portfolio/04-cuisine.jpg", alt: "Cuisine rénovée" },
  { src: "/portfolio/05-vitre.jpg", alt: "Remplacement vitre" },
  { src: "/portfolio/06-tableau-electrique.jpg", alt: "Tableau électrique refait" },
  { src: "/portfolio/07-cage-escalier.jpg", alt: "Cage d'escalier repeinte" },
];

export function ZoomParallaxSection() {
  return <ZoomParallax images={IMAGES} />;
}
