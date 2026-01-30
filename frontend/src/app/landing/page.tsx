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
      <ScrollGate>
        <CommercePlatform />
        <MercatoTools />
        <div className="relative z-20 -mt-[5vh] rounded-t-4xl bg-black">
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </ScrollGate>
    </div>
  );
}
