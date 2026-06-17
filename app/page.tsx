import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { HeroScrubSection } from "@/components/sections/HeroScrubSection";
import { TrustBarMarquee } from "@/components/sections/TrustBarMarquee";
import { FlowArtSection } from "@/components/sections/FlowArtSection";
import { EmergencyZone } from "@/components/sections/EmergencyZone";
import { Process4Steps } from "@/components/sections/Process4Steps";
import { ZoomParallaxSection } from "@/components/sections/ZoomParallaxSection";
import { PortfolioByCategory } from "@/components/portfolio/PortfolioByCategory";
import { Guarantees } from "@/components/sections/Guarantees";
import { NumberTicker } from "@/components/sections/NumberTicker";
import { FAQ } from "@/components/sections/FAQ";
import { LocationMap } from "@/components/sections/LocationMap";
import { QuoteSection } from "@/components/sections/QuoteSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <HeroScrubSection />
        <TrustBarMarquee />
        <FlowArtSection />
        <EmergencyZone />
        <Process4Steps />
        <ZoomParallaxSection />
        <PortfolioByCategory />
        <Guarantees />
        <NumberTicker />
        <FAQ />
        <LocationMap />
        <QuoteSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
