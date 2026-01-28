import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TemplatesSection } from "@/components/landing/TemplatesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ContactSection } from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* 
        Note: The designs provided (Features, Templates, Comprehensive) 
        seem to be sections of a landing page. 
        I am stacking them here in logical order. 
      */}

      {/* Features Section (Design A) */}
      <FeaturesSection />

      {/* Templates Section (Design B) */}
      <TemplatesSection />

      {/* Pricing Section (Part of Design C) */}
      <PricingSection />

      {/* Testimonials Section (Part of Design C) */}
      <TestimonialsSection />

      {/* Contact Section (Part of Design C) */}
      <ContactSection />
    </div>
  );
}