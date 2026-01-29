'use client';

import { ParallaxBackground } from "@/components/parallax/ParallaxBackground";
import { HeroSection } from "@/components/parallax/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TemplatesSection } from "@/components/landing/TemplatesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ContactSection } from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed parallax background with floating shapes and stars */}
      <ParallaxBackground />

      {/* Main content layer */}
      <main className="relative z-10">
        {/* Hero Section with parallax intro */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Templates Section */}
        <TemplatesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
