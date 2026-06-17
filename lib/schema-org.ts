export const SITE = {
  name: "LIV Rénovation",
  url: "https://liv-renovation.fr",
  description:
    "Artisan polyvalent multi-services en Île-de-France. Serrurerie, vitrerie, peinture, plomberie, rénovation complète. Dépannage urgent 7j/7. Devis gratuit sous 24h.",
  phone: "+33781007428",
  phoneDisplay: "07 81 00 74 28",
  phoneRaw: "0781007428",
  whatsapp: "https://wa.me/33781007428",
  whatsappText:
    "Bonjour LIV Rénovation, je souhaite un devis pour…",
  email: "liv.renovation2@gmail.com",
  region: "Île-de-France",
  country: "FR",
  centerLat: 48.8566,
  centerLng: 2.3522,
  radiusKm: 60,
} as const;

export const WHATSAPP_LINK = `${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}`;

export function constructionBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    image: `${SITE.url}/og-image.jpg`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.region,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "Dépannage urgent 7j/7 selon disponibilité",
      },
    ],
    priceRange: "€€",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE.centerLat,
        longitude: SITE.centerLng,
      },
      geoRadius: SITE.radiusKm * 1000,
    },
    sameAs: [],
  };
}
