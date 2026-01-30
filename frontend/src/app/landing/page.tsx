import { CommercePlatform } from './components/commercePlatform';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { MercatoTools } from './components/mercatoTools';
import { Pricing } from './components/pricing';
import { ScrollGate } from './components/ScrollGate';
import { Testimonials } from './components/testimonials';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* First scroll system: CommercePlatform + MercatoTools inside gate */}
      <ScrollGate>
        <CommercePlatform />
        <MercatoTools />
      </ScrollGate>
      {/* Second scroll system: Pricing layer (window scroll, separate from gate) */}
      <div className="relative z-20 -mt-[20vh] overflow-visible rounded-t-3xl bg-[#020205]">
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
