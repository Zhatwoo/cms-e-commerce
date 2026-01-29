'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// ============================================================================
// PARALLAX LANDING PAGE
// Combines mountain parallax hero with Figma design sections
// Design Direction: "Cosmic E-Commerce" - Dark luxury with depth
// ============================================================================

export const ParallaxLanding: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for scroll-triggered animations
  const getScrollAnimation = (startScroll: number, duration: number = 400) => {
    const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / duration));
    return {
      opacity: progress,
      transform: `translateY(${Math.max(0, 60 * (1 - progress))}px)`,
    };
  };

  if (!mounted) return null;

  return (
    <div className="relative bg-black">
      {/* ==================== HERO SECTION WITH PARALLAX ==================== */}
      <section className="relative h-[200vh] overflow-hidden">
        {/* Sky/Background Layer - Slowest */}
        <div
          className="fixed inset-0 w-full h-screen"
          style={{
            background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 30%, #2d1f4e 60%, #4a2c6a 80%, #6b3a7d 100%)',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Stars Layer */}
        <div
          className="fixed inset-0 w-full h-screen opacity-80"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, white, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, white, transparent),
              radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 160px 120px, white, transparent),
              radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 250px 160px, white, transparent),
              radial-gradient(2px 2px at 300px 100px, rgba(255,255,255,0.5), transparent)
            `,
            backgroundSize: '350px 350px',
          }}
        />

        {/* Distant Mountains - Back Layer */}
        <div
          className="fixed bottom-0 left-0 right-0 h-[60vh]"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            zIndex: 1,
          }}
        >
          <svg viewBox="0 0 1440 600" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0 600 L0 400 Q180 300 360 380 Q540 280 720 350 Q900 250 1080 320 Q1260 280 1440 360 L1440 600 Z" fill="#2d2d4a" opacity="0.6" />
          </svg>
        </div>

        {/* Middle Mountains Layer */}
        <div
          className="fixed bottom-0 left-0 right-0 h-[70vh]"
          style={{
            transform: `translateY(${scrollY * 0.35}px)`,
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 1440 700" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="mountainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d3d5c" />
                <stop offset="100%" stopColor="#1a1a2e" />
              </linearGradient>
            </defs>
            <path d="M0 700 L0 450 Q120 350 240 420 L360 280 Q420 320 480 300 L600 380 Q720 200 840 350 L960 250 Q1080 320 1200 280 L1320 360 Q1380 300 1440 340 L1440 700 Z" fill="url(#mountainGrad1)" />
          </svg>
        </div>

        {/* Front Mountains Layer */}
        <div
          className="fixed bottom-0 left-0 right-0 h-[80vh]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            zIndex: 3,
          }}
        >
          <svg viewBox="0 0 1440 800" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#252538" />
                <stop offset="100%" stopColor="#0f0f1a" />
              </linearGradient>
            </defs>
            <path d="M0 800 L0 500 L180 380 Q240 420 300 350 L480 480 L600 300 Q660 350 720 280 L900 420 L1020 320 Q1140 380 1260 300 L1380 400 L1440 350 L1440 800 Z" fill="url(#mountainGrad2)" />
          </svg>
        </div>

        {/* Foreground Hills - Fastest */}
        <div
          className="fixed bottom-0 left-0 right-0 h-[40vh]"
          style={{
            transform: `translateY(${scrollY * 0.7}px)`,
            zIndex: 4,
          }}
        >
          <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0 400 L0 300 Q60 280 120 320 Q180 260 240 300 Q300 240 360 280 Q420 260 480 300 Q540 220 600 260 Q660 240 720 280 Q780 200 840 260 Q900 240 960 280 Q1020 220 1080 260 Q1140 240 1200 280 Q1260 260 1320 300 Q1380 280 1440 320 L1440 400 Z" fill="#0a0a0f" />
          </svg>
        </div>

        {/* Hero Text */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            zIndex: 5,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <div className="text-center px-4">
            <p className="text-blue-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
              E-Commerce Platform
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif", textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}>
              Build Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Dream Store
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
              Create stunning e-commerce experiences with our powerful platform
            </p>
          </div>
        </div>

        {/* Moon Element */}
        <div
          className="fixed top-[12%] right-[12%] w-20 h-20 md:w-28 md:h-28"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            zIndex: 1,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fff8e7 0%, #ffd699 50%, #ffb347 100%)',
              boxShadow: '0 0 60px rgba(255, 183, 77, 0.5), 0 0 120px rgba(255, 183, 77, 0.2)',
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 10, opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== DESIGN A: FEATURES SECTION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8" style={{ zIndex: 10 }}>
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-[8%] w-32 h-32 border border-blue-500/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-[5%] w-20 h-20 bg-purple-500/5 rotate-45" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20" style={getScrollAnimation(600)}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Build Your Website With
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mercato Exclusive Tools
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              With Mercato's exclusive tools, you can design, launch, and grow your online store faster and smarter than ever before.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Drag & Drop Builder */}
            <div
              className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all duration-500 hover:-translate-y-2"
              style={getScrollAnimation(700)}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Add elements</h3>
              <p className="text-gray-500 text-sm mb-6">Drag and drop elements anywhere on your page</p>

              {/* UI Mockup */}
              <div className="bg-white rounded-xl p-4">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: 'Text', icon: 'T' },
                    { name: 'Button', icon: '▢' },
                    { name: 'Add to bag', icon: '+' },
                    { name: 'Image', icon: '▣' },
                    { name: 'Gallery', icon: '▤' },
                    { name: 'Video', icon: '▶' },
                    { name: 'Shape', icon: '◇' },
                    { name: 'Map', icon: '◎' },
                    { name: 'Feed', icon: '▥' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-2 border border-dashed border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 aspect-square transition-all cursor-pointer"
                    >
                      <span className="text-gray-400 text-lg mb-1">{item.icon}</span>
                      <span className="text-gray-500 text-[10px] font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: CMS Integrations */}
            <div
              className="group relative rounded-3xl border border-neutral-800 overflow-hidden min-h-[320px] hover:border-neutral-700 transition-all duration-500 hover:-translate-y-2"
              style={getScrollAnimation(800)}
            >
              <Image
                src="/b3af34c2c26f6abd6e071a9bb63bf0bd30ab8e5f.png"
                alt="CMS Integrations"
                fill
                className="object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-blue-400 text-xs uppercase tracking-widest">Integrations</span>
                <h3 className="text-xl font-semibold mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>Seamless Connections</h3>
              </div>
            </div>

            {/* Card 3: Custom Frontend */}
            <div
              className="group relative rounded-3xl border border-neutral-800 overflow-hidden min-h-[320px] hover:border-neutral-700 transition-all duration-500 hover:-translate-y-2"
              style={getScrollAnimation(900)}
            >
              <Image
                src="/53030d137532ba9ebe957e215b9f12359626d73f.png"
                alt="Custom Frontend"
                fill
                className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>Custom frontend</h3>
                <p className="text-gray-400 text-sm mt-1">without custom code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DESIGN B: TEMPLATES SECTION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8" style={{ zIndex: 10 }}>
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20" style={getScrollAnimation(1200)}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              The commerce platform
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                behind everything we build
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
              Build, customize, and scale e-commerce websites with total control. A flexible, modern system for building powerful online stores.
              Everything you need to create, manage, and grow your store.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Template 1 */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3"
              style={getScrollAnimation(1400)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/4bbb146260379cd1fbea5a9afa3f9b66fa9091d4.png"
                  alt="Template 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Template 2 - Featured */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl md:-mt-8 hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3"
              style={{
                ...getScrollAnimation(1500),
                boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.15)',
              }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/0c0effe8ed665936fb95ad380db1b35b2129f967.png"
                  alt="Template 2 - Featured"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Template 3 */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-3"
              style={getScrollAnimation(1600)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/a6aecac5846f117f3c886e34bccaeac3d4920579.png"
                  alt="Template 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16" style={getScrollAnimation(1700)}>
            <button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Explore Web Templates
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== DESIGN C: PRICING SECTION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden" style={{ zIndex: 10 }}>
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16" style={getScrollAnimation(2000)}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Take advantage in our 1 month free
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">domain</span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Starter', price: 29, features: ['Up to 100 products', 'Basic analytics', 'Email support', 'Custom domain', 'SSL certificate'], popular: false },
              { name: 'Professional', price: 79, features: ['Unlimited products', 'Advanced analytics', 'Priority support', 'API access', 'Custom integrations'], popular: true },
              { name: 'Enterprise', price: 199, features: ['Everything in Pro', 'Dedicated manager', 'Custom development', 'SLA guarantee', 'White-label options'], popular: false },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 backdrop-blur-md border transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-900/40 to-black/80 border-blue-500/30 hover:border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
                style={getScrollAnimation(2100 + i * 100)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm align-top">$</span>
                    <span className="text-5xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-1">/ mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className={`w-4 h-4 ${plan.popular ? 'text-blue-400' : 'text-green-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto" style={getScrollAnimation(2500)}>
            Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today.
          </p>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" style={{ zIndex: 10 }}>
        {/* Globe Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[500px] h-[500px] rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
              transform: `scale(${1 + (scrollY - 2600) * 0.0002})`,
            }}
          />
          <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full" style={{ transform: `rotate(${scrollY * 0.02}deg)` }} />
          <div className="absolute w-[550px] h-[550px] border border-purple-500/10 rounded-full" style={{ transform: `rotate(${-scrollY * 0.015}deg)` }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16" style={getScrollAnimation(2700)}>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
              What they say <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">about us.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Testimonial Cards */}
          <div className="relative h-[500px] md:h-[450px]">
            {[
              { quote: "Mercato transformed our online presence completely.", name: "Sarah Chen", role: "CEO, StyleHub", img: "/12daa53dadb8e6773c1817d0b2eefe5bb113b979.png", pos: { top: '0%', right: '5%' } },
              { quote: "The easiest platform I've ever used. Incredible!", name: "Marcus Johnson", role: "Founder, TechGear", img: "/271552771aec4da87bb7e8aafd0c5bdf201cdd0a.png", pos: { top: '30%', left: '0%' } },
              { quote: "Customer support helped us scale to 10,000 orders.", name: "Emily Rodriguez", role: "COO, FreshMarket", img: "/cad203cae6b1eb766de84b771c166580a3dad46d.png", pos: { bottom: '15%', right: '10%' } },
              { quote: "Analytics dashboard is a complete game changer!", name: "David Park", role: "Marketing Director", img: "/2e855804e1e2b3a9aaa50e206da49e5cc18564a8.png", pos: { bottom: '5%', left: '15%' } },
            ].map((t, i) => (
              <div
                key={i}
                className="absolute max-w-xs bg-gradient-to-b from-blue-900/30 to-black/50 backdrop-blur-md border border-blue-500/20 p-5 rounded-2xl hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2"
                style={{
                  ...t.pos,
                  ...getScrollAnimation(2800 + i * 100),
                  transform: `translateY(${(scrollY - 2800) * (0.02 + i * 0.005) * (i % 2 === 0 ? 1 : -1)}px)`,
                }}
              >
                <p className="text-gray-200 text-sm mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4" style={{ zIndex: 10 }}>
        <div className="max-w-3xl mx-auto" style={getScrollAnimation(3200)}>
          <div className="border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradients */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px]" />

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
            </h2>

            <form className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">First Name:</label>
                  <input type="text" className="w-full h-12 rounded-lg bg-white text-black px-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Last Name:</label>
                  <input type="text" className="w-full h-12 rounded-lg bg-white text-black px-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Company:</label>
                  <input type="text" className="w-full h-12 rounded-lg bg-white text-black px-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Email:</label>
                  <input type="email" className="w-full h-12 rounded-lg bg-white text-black px-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <button type="submit" className="px-12 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative bg-black text-white py-12 px-4 border-t border-white/10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Built with Mercato CMS Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ParallaxLanding;
