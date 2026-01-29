'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// ============================================================================
// ENHANCED PARALLAX LANDING PAGE
// Design Direction: "Cosmic Website Builder" - Immersive tech meets space
// A living, breathing showcase of website creation in a parallax universe
// ============================================================================

export const ParallaxLanding: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getScrollAnimation = (startScroll: number, duration: number = 400) => {
    const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / duration));
    return {
      opacity: progress,
      transform: `translateY(${Math.max(0, 60 * (1 - progress))}px)`,
    };
  };

  if (!mounted) return null;

  const mouseX = (mousePos.x / window.innerWidth - 0.5) * 20;
  const mouseY = (mousePos.y / window.innerHeight - 0.5) * 20;

  return (
    <div className="relative bg-black overflow-x-hidden">
      {/* ==================== ENHANCED HERO WITH FLOATING UI ELEMENTS ==================== */}
      <section className="relative h-[200vh] overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="fixed inset-0 w-full h-screen opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px) translateZ(0)`,
          }}
        />

        {/* Sky/Background Layer */}
        <div
          className="fixed inset-0 w-full h-screen"
          style={{
            background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 30%, #2d1f4e 60%, #4a2c6a 80%, #6b3a7d 100%)',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Enhanced Stars with Depth */}
        <div
          className="fixed inset-0 w-full h-screen"
          style={{
            transform: `translateY(${scrollY * 0.05}px) translateX(${mouseX * 0.5}px)`,
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, white, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, white, transparent),
              radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 160px 120px, white, transparent),
              radial-gradient(3px 3px at 200px 50px, rgba(59, 130, 246, 0.8), transparent),
              radial-gradient(1px 1px at 250px 160px, white, transparent),
              radial-gradient(2px 2px at 300px 100px, rgba(139, 92, 246, 0.7), transparent)
            `,
            backgroundSize: '350px 350px',
            opacity: 0.8,
          }}
        />

        {/* Floating Browser Window 1 - Top Left */}
        <div
          className="fixed top-[10%] left-[5%] w-64 opacity-30 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.15}px) translateX(${mouseX}px) rotate(${scrollY * 0.02}deg)`,
            zIndex: 2,
          }}
        >
          <div className="bg-neutral-900/80 backdrop-blur-md rounded-lg border border-blue-500/20 overflow-hidden shadow-2xl">
            <div className="h-6 bg-neutral-800/90 flex items-center gap-1.5 px-2">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="p-3 space-y-1">
              <div className="h-2 bg-blue-500/30 rounded w-3/4" />
              <div className="h-2 bg-purple-500/20 rounded w-1/2" />
              <div className="h-2 bg-cyan-500/20 rounded w-2/3" />
            </div>
          </div>
        </div>

        {/* Floating Code Block - Top Right */}
        <div
          className="fixed top-[20%] right-[8%] w-72 opacity-25 pointer-events-none font-mono text-xs"
          style={{
            transform: `translateY(${scrollY * 0.25}px) translateX(${-mouseX}px) rotate(${-scrollY * 0.01}deg)`,
            zIndex: 2,
          }}
        >
          <div className="bg-neutral-900/90 backdrop-blur-md rounded-lg border border-purple-500/20 p-4 shadow-2xl">
            <div className="text-green-400">{`<div className="hero">`}</div>
            <div className="text-blue-400 ml-4">{`<h1>Build Amazing</h1>`}</div>
            <div className="text-cyan-400 ml-4">{`<p>Websites</p>`}</div>
            <div className="text-green-400">{`</div>`}</div>
          </div>
        </div>

        {/* Floating Component Block - Left Side */}
        <div
          className="fixed top-[50%] left-[3%] w-48 opacity-20 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${mouseX * 0.8}px) scale(${1 - scrollY * 0.0002})`,
            zIndex: 1,
          }}
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/10 backdrop-blur-sm rounded-xl border border-blue-400/30 p-4">
            <div className="space-y-2">
              <div className="h-8 bg-white/10 rounded" />
              <div className="h-4 bg-white/5 rounded w-3/4" />
              <div className="h-4 bg-white/5 rounded w-1/2" />
            </div>
          </div>
        </div>

        {/* Floating UI Elements - Right Side */}
        <div
          className="fixed top-[60%] right-[5%] opacity-30 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.2}px) translateX(${-mouseX * 0.6}px)`,
            zIndex: 2,
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="w-32 h-10 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/40 flex items-center justify-center text-white/60 text-xs font-semibold">
              Button
            </div>
            <div className="w-32 h-10 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/40 flex items-center justify-center text-white/60 text-xs font-semibold">
              Input
            </div>
          </div>
        </div>

        {/* Particle Layer */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 3 }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${(i * 13 + 10) % 100}%`,
                top: `${(i * 17 + 20) % 100}%`,
                transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
                boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)',
                opacity: 0.3 + (i % 3) * 0.2,
              }}
            />
          ))}
        </div>

        {/* Mountains Parallax */}
        <div
          className="fixed bottom-0 left-0 right-0 h-[60vh]"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, zIndex: 1 }}
        >
          <svg viewBox="0 0 1440 600" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0 600 L0 400 Q180 300 360 380 Q540 280 720 350 Q900 250 1080 320 Q1260 280 1440 360 L1440 600 Z" fill="#2d2d4a" opacity="0.6" />
          </svg>
        </div>

        <div
          className="fixed bottom-0 left-0 right-0 h-[70vh]"
          style={{ transform: `translateY(${scrollY * 0.35}px)`, zIndex: 2 }}
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

        <div
          className="fixed bottom-0 left-0 right-0 h-[80vh]"
          style={{ transform: `translateY(${scrollY * 0.5}px)`, zIndex: 3 }}
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

        <div
          className="fixed bottom-0 left-0 right-0 h-[40vh]"
          style={{ transform: `translateY(${scrollY * 0.7}px)`, zIndex: 4 }}
        >
          <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0 400 L0 300 Q60 280 120 320 Q180 260 240 300 Q300 240 360 280 Q420 260 480 300 Q540 220 600 260 Q660 240 720 280 Q780 200 840 260 Q900 240 960 280 Q1020 220 1080 260 Q1140 240 1200 280 Q1260 260 1320 300 Q1380 280 1440 320 L1440 400 Z" fill="#0a0a0f" />
          </svg>
        </div>

        {/* Enhanced Hero Text */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            zIndex: 5,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <div className="text-center px-4 relative">
            {/* Glowing Orb Behind Text */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"
              style={{
                transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`,
              }}
            />

            <p className="text-blue-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 relative" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
              Website Builder Platform
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight mb-6 relative"
              style={{
                fontFamily: "'Syne', sans-serif",
                textShadow: '0 4px 60px rgba(0,0,0,0.5), 0 0 80px rgba(59, 130, 246, 0.3)',
              }}
            >
              Build Your
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Dream Store
                </span>
                {/* Animated Underline */}
                <svg className="absolute -bottom-4 left-0 w-full h-4 opacity-60" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path
                    d="M0 6 Q75 0 150 6 T300 6"
                    fill="none"
                    stroke="url(#heroGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M0 6 Q75 0 150 6 T300 6; M0 6 Q75 12 150 6 T300 6; M0 6 Q75 0 150 6 T300 6" />
                  </path>
                  <defs>
                    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto relative" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
              Create stunning e-commerce experiences with drag-and-drop simplicity
            </p>

            {/* Floating Builder Indicators */}
            <div className="absolute -left-12 top-0 opacity-40">
              <div className="w-8 h-8 border-2 border-dashed border-blue-400 rounded animate-pulse" />
            </div>
            <div className="absolute -right-12 bottom-0 opacity-40">
              <div className="w-6 h-6 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Moon with Glow */}
        <div
          className="fixed top-[12%] right-[12%] w-20 h-20 md:w-28 md:h-28"
          style={{
            transform: `translateY(${scrollY * 0.15}px) translateX(${-mouseX * 0.3}px)`,
            zIndex: 1,
          }}
        >
          <div
            className="w-full h-full rounded-full relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fff8e7 0%, #ffd699 50%, #ffb347 100%)',
              boxShadow: '0 0 60px rgba(255, 183, 77, 0.6), 0 0 120px rgba(255, 183, 77, 0.3)',
            }}
          >
            {/* Craters */}
            <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-yellow-900/30 rounded-full" />
            <div className="absolute bottom-[35%] left-[30%] w-3 h-3 bg-yellow-900/20 rounded-full" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 10, opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll to Explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5 relative overflow-hidden">
            <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION WITH BUILDER DEMO ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden" style={{ zIndex: 10 }}>
        {/* Animated Mesh Gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
            transform: `translateY(${(scrollY - 600) * 0.1}px)`,
          }}
        />

        {/* Floating Component Blocks */}
        <div
          className="absolute top-[10%] right-[5%] w-32 h-32 opacity-20 pointer-events-none"
          style={{
            transform: `translateY(${(scrollY - 600) * 0.15}px) rotate(${(scrollY - 600) * 0.05}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/10 rounded-xl border border-blue-400/40 backdrop-blur-sm" />
        </div>

        <div
          className="absolute bottom-[20%] left-[8%] opacity-15 pointer-events-none"
          style={{
            transform: `translateY(${(scrollY - 600) * 0.2}px) rotate(${-(scrollY - 600) * 0.03}deg)`,
          }}
        >
          <div className="space-y-2">
            <div className="w-24 h-16 bg-cyan-500/20 rounded-lg border border-cyan-400/30" />
            <div className="w-20 h-12 bg-purple-500/20 rounded-lg border border-purple-400/30" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20" style={getScrollAnimation(600)}>
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase">
              Powerful Features
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Build Your Website With
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mercato Exclusive Tools
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Drag, drop, and deploy. Our visual builder makes website creation as simple as moving blocks on a canvas.
            </p>
          </div>

          {/* Feature Cards with Enhanced Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 0 }}>
              <line x1="33%" y1="50%" x2="66%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
              </line>
              <defs>
                <linearGradient id="lineGrad">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Card 1 */}
            <div
              className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 hover:border-blue-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ ...getScrollAnimation(700), zIndex: 1 }}
            >
              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/20 rotate-45 transform origin-top-right group-hover:scale-150 transition-transform duration-500" />
              </div>

              <h3 className="text-xl font-semibold mb-2 relative z-10" style={{ fontFamily: "'Syne', sans-serif" }}>
                Add elements
              </h3>
              <p className="text-gray-500 text-sm mb-6 relative z-10">
                Drag and drop elements anywhere on your page
              </p>

              <div className="bg-white rounded-xl p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="grid grid-cols-3 gap-2 relative z-10">
                  {[
                    { name: 'Text', icon: 'T', color: 'blue' },
                    { name: 'Button', icon: '▢', color: 'purple' },
                    { name: 'Add to bag', icon: '+', color: 'cyan' },
                    { name: 'Image', icon: '▣', color: 'green' },
                    { name: 'Gallery', icon: '▤', color: 'blue' },
                    { name: 'Video', icon: '▶', color: 'purple' },
                    { name: 'Shape', icon: '◇', color: 'pink' },
                    { name: 'Map', icon: '◎', color: 'cyan' },
                    { name: 'Feed', icon: '▥', color: 'blue' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-2 border border-dashed border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:scale-110 aspect-square transition-all duration-300 cursor-pointer group/item"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      <span className={`text-gray-400 text-lg mb-1 group-hover/item:text-${item.color}-500 transition-colors`}>
                        {item.icon}
                      </span>
                      <span className="text-gray-500 text-[10px] font-medium group-hover/item:text-gray-700 transition-colors">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative rounded-3xl border border-neutral-800 overflow-hidden min-h-[320px] hover:border-purple-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ ...getScrollAnimation(800), zIndex: 1 }}
            >
              <Image
                src="/b3af34c2c26f6abd6e071a9bb63bf0bd30ab8e5f.png"
                alt="CMS Integrations"
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Animated Scan Line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-24 animate-scan" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-blue-400 text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Integrations
                </span>
                <h3 className="text-xl font-semibold mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Seamless Connections
                </h3>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  Connect with 100+ tools instantly
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative rounded-3xl border border-neutral-800 overflow-hidden min-h-[320px] hover:border-cyan-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ ...getScrollAnimation(900), zIndex: 1 }}
            >
              <Image
                src="/53030d137532ba9ebe957e215b9f12359626d73f.png"
                alt="Custom Frontend"
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Code Editor Mockup Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-neutral-900/80 backdrop-blur-md rounded-lg p-3 text-xs font-mono border border-cyan-500/30">
                  <div className="text-green-400">&lt;div className=</div>
                  <div className="text-blue-400 ml-2">"custom-component"</div>
                  <div className="text-green-400">&gt;</div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Custom frontend
                </h3>
                <p className="text-gray-400 text-sm mt-1">without custom code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEMPLATES SECTION WITH 3D PREVIEW ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden" style={{ zIndex: 10 }}>
        {/* Dynamic Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + Math.sin((scrollY - 1200) * 0.001) * 0.2})`,
          }}
        />

        {/* Floating Browser Mockups */}
        <div
          className="absolute top-[15%] left-[3%] w-40 opacity-15 pointer-events-none"
          style={{
            transform: `translateY(${(scrollY - 1200) * 0.12}px) rotate(${(scrollY - 1200) * -0.02}deg)`,
          }}
        >
          <div className="aspect-[4/3] bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-white/10 p-2">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 md:mb-20" style={getScrollAnimation(1200)}>
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold tracking-wider uppercase">
              Pre-built Templates
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              The commerce platform
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                behind everything we build
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
              Start with pixel-perfect templates designed by experts. Customize everything to match your brand in seconds.
            </p>
          </div>

          {/* Templates Grid with 3D Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center perspective-1000">
            {/* Template 1 */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-700"
              style={{
                ...getScrollAnimation(1400),
                transform: `${getScrollAnimation(1400).transform} rotateY(${Math.min(10, (scrollY - 1400) * 0.01)}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/4bbb146260379cd1fbea5a9afa3f9b66fa9091d4.png"
                  alt="Template 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Preview Label */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Preview
                </div>
              </div>
            </div>

            {/* Template 2 - Featured with Extra Effects */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl md:-mt-8 transition-all duration-700"
              style={{
                ...getScrollAnimation(1500),
                boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.3)',
                transform: `${getScrollAnimation(1500).transform} scale(${1.05 + Math.sin((scrollY - 1500) * 0.002) * 0.02})`,
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/0c0effe8ed665936fb95ad380db1b35b2129f967.png"
                  alt="Template 2 - Featured"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-bold">
                  ⭐ Featured
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 border-2 border-purple-500/50 rounded-2xl animate-pulse" />
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700"
              style={{
                ...getScrollAnimation(1600),
                transform: `${getScrollAnimation(1600).transform} rotateY(${Math.max(-10, -(scrollY - 1600) * 0.01)}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/a6aecac5846f117f3c886e34bccaeac3d4920579.png"
                  alt="Template 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Preview Label */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Preview
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center mt-16" style={getScrollAnimation(1700)}>
            <button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium overflow-hidden transition-all duration-500 hover:border-white/60 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Explore 50+ Templates
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Arrow Icon */}
              <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== PRICING WITH ANIMATED CARDS ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden" style={{ zIndex: 10 }}>
        {/* Radial Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"
          style={{
            transform: `translate(-50%, 0) scale(${1 + Math.sin((scrollY - 2000) * 0.0015) * 0.15})`,
          }}
        />

        {/* Floating Price Tags */}
        <div
          className="absolute top-[20%] right-[10%] opacity-10 pointer-events-none"
          style={{
            transform: `translateY(${(scrollY - 2000) * 0.08}px) rotate(${(scrollY - 2000) * 0.03}deg)`,
          }}
        >
          <div className="text-6xl font-bold text-blue-400">$</div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16" style={getScrollAnimation(2000)}>
            <div className="inline-block mb-4 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold tracking-wider uppercase">
              Simple Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Take advantage of our 1 month free
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">domain</span> offer
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Start building today. No credit card required for the first month.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Starter', price: 29, features: ['Up to 100 products', 'Basic analytics', 'Email support', 'Custom domain', 'SSL certificate'], popular: false, color: 'blue' },
              { name: 'Professional', price: 79, features: ['Unlimited products', 'Advanced analytics', 'Priority support', 'API access', 'Custom integrations'], popular: true, color: 'purple' },
              { name: 'Enterprise', price: 199, features: ['Everything in Pro', 'Dedicated manager', 'Custom development', 'SLA guarantee', 'White-label options'], popular: false, color: 'cyan' },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={`group relative rounded-3xl p-8 backdrop-blur-md border transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-purple-900/50 to-black/80 border-purple-500/40 hover:border-purple-400 shadow-2xl shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
                style={{
                  ...getScrollAnimation(2100 + i * 100),
                  transform: `${getScrollAnimation(2100 + i * 100).transform} ${plan.popular ? `scale(1.05) translateY(${Math.sin((scrollY - 2200) * 0.003) * 5}px)` : ''}`,
                }}
              >
                {/* Animated Glow */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                      ⚡ Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-xl font-medium mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm align-top">$</span>
                    <span className={`text-5xl font-bold transition-all duration-300 ${plan.popular ? 'text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text' : ''}`} style={{ fontFamily: "'Syne', sans-serif" }}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-400 ml-1">/ mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 relative z-10">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-gray-300 opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${j * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <svg className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-purple-400' : 'text-green-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`relative z-10 w-full py-3 rounded-full font-medium text-sm transition-all duration-500 overflow-hidden group/btn ${
                  plan.popular
                    ? 'bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}>
                  <span className="relative z-10">Get Started</span>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto" style={getScrollAnimation(2500)}>
            All plans include 99.9% uptime SLA, automatic backups, and free SSL certificates. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ==================== TESTIMONIALS WITH ORBITAL ANIMATION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" style={{ zIndex: 10 }}>
        {/* Animated Orbital System */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div
            className="w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
              filter: 'blur(60px)',
              transform: `scale(${1 + Math.sin((scrollY - 2600) * 0.002) * 0.2})`,
            }}
          />

          {/* Rotating Rings */}
          {[400, 550, 700].map((size, i) => (
            <div
              key={i}
              className="absolute border rounded-full"
              style={{
                width: size,
                height: size,
                borderColor: i === 0 ? 'rgba(59, 130, 246, 0.2)' : i === 1 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.1)',
                transform: `rotate(${(scrollY - 2600) * (0.02 - i * 0.005)}deg)`,
                transition: 'transform 0.1s linear',
              }}
            >
              {/* Orbital Dots */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full`}
                style={{
                  background: i === 0 ? '#3b82f6' : i === 1 ? '#8b5cf6' : '#06b6d4',
                  boxShadow: `0 0 10px ${i === 0 ? '#3b82f6' : i === 1 ? '#8b5cf6' : '#06b6d4'}`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16" style={getScrollAnimation(2700)}>
            <div className="inline-block mb-4 px-4 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-xs font-semibold tracking-wider uppercase">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
              What they say{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                about us.
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Testimonial Cards with Enhanced Positioning */}
          <div className="relative h-[550px] md:h-[500px]">
            {[
              { quote: "Mercato transformed our online presence completely.", name: "Sarah Chen", role: "CEO, StyleHub", img: "/12daa53dadb8e6773c1817d0b2eefe5bb113b979.png", pos: { top: '0%', right: '5%' } },
              { quote: "The easiest platform I've ever used. Incredible!", name: "Marcus Johnson", role: "Founder, TechGear", img: "/271552771aec4da87bb7e8aafd0c5bdf201cdd0a.png", pos: { top: '30%', left: '0%' } },
              { quote: "Customer support helped us scale to 10,000 orders.", name: "Emily Rodriguez", role: "COO, FreshMarket", img: "/cad203cae6b1eb766de84b771c166580a3dad46d.png", pos: { bottom: '15%', right: '8%' } },
              { quote: "Analytics dashboard is a complete game changer!", name: "David Park", role: "Marketing Director", img: "/2e855804e1e2b3a9aaa50e206da49e5cc18564a8.png", pos: { bottom: '5%', left: '12%' } },
            ].map((t, i) => (
              <div
                key={i}
                className="absolute max-w-xs bg-gradient-to-br from-blue-900/40 to-purple-900/20 backdrop-blur-md border border-blue-500/30 p-5 rounded-2xl hover:border-blue-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 cursor-pointer group"
                style={{
                  ...t.pos,
                  ...getScrollAnimation(2800 + i * 100),
                  transform: `translateY(${(scrollY - 2800) * (0.015 + i * 0.003) * (i % 2 === 0 ? 1 : -1)}px)`,
                }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 text-4xl text-blue-500/20 font-serif">"</div>

                <p className="text-gray-200 text-sm mb-4 relative z-10 leading-relaxed">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-white">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENHANCED CONTACT SECTION ==================== */}
      <section className="relative bg-black text-white py-24 md:py-32 px-4" style={{ zIndex: 10 }}>
        <div className="max-w-3xl mx-auto" style={getScrollAnimation(3200)}>
          <div className="border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm bg-white/5 hover:border-white/40 transition-all duration-500 group">
            {/* Decorative animated gradients */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]"
              style={{
                transform: `scale(${1 + Math.sin((scrollY - 3200) * 0.003) * 0.3})`,
              }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]"
              style={{
                transform: `scale(${1 + Math.cos((scrollY - 3200) * 0.003) * 0.3})`,
              }}
            />

            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            <div className="text-center mb-10 relative">
              <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                Contact{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h2>
            </div>

            <form className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['First Name', 'Last Name'].map((label, i) => (
                  <div key={label}>
                    <label className="text-sm text-gray-300 mb-2 block font-medium">{label}:</label>
                    <input
                      type="text"
                      className="w-full h-12 rounded-lg bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[{ label: 'Company', type: 'text' }, { label: 'Email', type: 'email' }].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm text-gray-300 mb-2 block font-medium">{field.label}:</label>
                    <input
                      type={field.type}
                      className="w-full h-12 rounded-lg bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="group/submit relative px-12 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>

                  {/* Animated shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/submit:translate-x-full transition-transform duration-1000" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative bg-black text-white py-12 px-4 border-t border-white/10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Mercato
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            Built with Mercato CMS Platform
          </p>
          <p className="text-gray-600 text-xs">
            © 2024 Mercato. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Custom Cursor Trail Effect */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default ParallaxLanding;
