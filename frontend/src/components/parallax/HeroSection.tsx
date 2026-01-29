'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { ParallaxSection, FloatingElement } from './ParallaxSection';

export const HeroSection: React.FC = () => {
  const { scrollY } = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Floating geometric accents */}
      <FloatingElement
        className="absolute top-[15%] left-[10%] w-20 h-20 border border-blue-500/30 rounded-lg"
        amplitude={15}
        duration={4}
        delay={0}
      >
        <div
          className="w-full h-full"
          style={{
            transform: `rotate(${45 + scrollY * 0.05}deg)`,
          }}
        />
      </FloatingElement>

      <FloatingElement
        className="absolute top-[25%] right-[15%] w-16 h-16"
        amplitude={20}
        duration={5}
        delay={0.5}
      >
        <div
          className="w-full h-full border-2 border-purple-500/40 rounded-full"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        />
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-[20%] left-[20%] w-24 h-24"
        amplitude={12}
        duration={6}
        delay={1}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            transform: `rotate(${scrollY * 0.08}deg)`,
          }}
        />
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-[30%] right-[10%] w-12 h-12"
        amplitude={18}
        duration={4.5}
        delay={1.5}
      >
        <div className="w-full h-full bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-sm" />
      </FloatingElement>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <ParallaxSection delay={0} direction="fade">
          <div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              E-Commerce Platform
            </span>
          </div>
        </ParallaxSection>

        <ParallaxSection delay={100} direction="up">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Build Your
            <br />
            <span
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dream Store
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 opacity-60"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q75 0 150 6 T300 6"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </ParallaxSection>

        <ParallaxSection delay={200} direction="up">
          <p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
            style={{
              transform: `translateY(${scrollY * -0.08}px)`,
            }}
          >
            Create stunning e-commerce experiences with our powerful, flexible platform.
            No coding required. Launch in minutes.
          </p>
        </ParallaxSection>

        <ParallaxSection delay={300} direction="scale">
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                Get Started Free
              </span>
            </button>

            <button className="px-8 py-4 border border-white/30 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </ParallaxSection>

        {/* Scroll indicator */}
        <ParallaxSection delay={500} direction="fade">
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
            }}
          >
            <span className="text-gray-500 text-sm tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-500/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </div>
        </ParallaxSection>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
