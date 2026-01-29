'use client';

import React, { useEffect, useState, useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed: number;
  className?: string;
  zIndex?: number;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed,
  className = '',
  zIndex = 0
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        transform: `translateY(${offset * speed}px)`,
        zIndex,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export const ParallaxLanding: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
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
          <svg
            viewBox="0 0 1440 600"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0 600 L0 400 Q180 300 360 380 Q540 280 720 350 Q900 250 1080 320 Q1260 280 1440 360 L1440 600 Z"
              fill="#2d2d4a"
              opacity="0.6"
            />
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
          <svg
            viewBox="0 0 1440 700"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <linearGradient id="mountainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d3d5c" />
                <stop offset="100%" stopColor="#1a1a2e" />
              </linearGradient>
            </defs>
            <path
              d="M0 700 L0 450 Q120 350 240 420 L360 280 Q420 320 480 300 L600 380 Q720 200 840 350 L960 250 Q1080 320 1200 280 L1320 360 Q1380 300 1440 340 L1440 700 Z"
              fill="url(#mountainGrad1)"
            />
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
          <svg
            viewBox="0 0 1440 800"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#252538" />
                <stop offset="100%" stopColor="#0f0f1a" />
              </linearGradient>
            </defs>
            <path
              d="M0 800 L0 500 L180 380 Q240 420 300 350 L480 480 L600 300 Q660 350 720 280 L900 420 L1020 320 Q1140 380 1260 300 L1380 400 L1440 350 L1440 800 Z"
              fill="url(#mountainGrad2)"
            />
          </svg>
        </div>

        {/* Foreground Trees/Hills - Fastest */}
        <div
          className="fixed bottom-0 left-0 right-0 h-[40vh]"
          style={{
            transform: `translateY(${scrollY * 0.7}px)`,
            zIndex: 4,
          }}
        >
          <svg
            viewBox="0 0 1440 400"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0 400 L0 300 Q60 280 120 320 Q180 260 240 300 Q300 240 360 280 Q420 260 480 300 Q540 220 600 260 Q660 240 720 280 Q780 200 840 260 Q900 240 960 280 Q1020 220 1080 260 Q1140 240 1200 280 Q1260 260 1320 300 Q1380 280 1440 320 L1440 400 Z"
              fill="#0a0a12"
            />
          </svg>
        </div>

        {/* Hero Text - Moves slower than foreground */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            zIndex: 5,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <div className="text-center px-4">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter"
              style={{
                fontFamily: "'Syne', sans-serif",
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              EXPLORE
            </h1>
            <p
              className="text-xl md:text-2xl text-white/70 mt-4 tracking-widest uppercase"
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
              }}
            >
              Scroll to discover
            </p>
          </div>
        </div>

        {/* Moon/Sun Element */}
        <div
          className="fixed top-[15%] right-[15%] w-24 h-24 md:w-32 md:h-32"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            zIndex: 1,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fff8e7 0%, #ffd699 50%, #ffb347 100%)',
              boxShadow: '0 0 60px rgba(255, 183, 77, 0.6), 0 0 120px rgba(255, 183, 77, 0.3)',
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <div
          className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            zIndex: 10,
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
          <span className="text-white/50 text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== CONTENT SECTIONS ==================== */}
      <section
        className="relative bg-[#0a0a12] text-white py-32 px-4"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="mb-20"
            style={{
              opacity: Math.min(1, Math.max(0, (scrollY - 400) / 400)),
              transform: `translateY(${Math.max(0, 100 - (scrollY - 400) / 4)}px)`,
            }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              The Journey Begins
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl">
              Experience the depth of parallax scrolling. Each layer moves at its own pace,
              creating an immersive sense of depth and dimension as you explore.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Layered Depth', desc: 'Multiple layers moving at different speeds create realistic depth perception.' },
              { title: 'Smooth Motion', desc: 'Hardware-accelerated transforms ensure buttery smooth scrolling experience.' },
              { title: 'Immersive Feel', desc: 'The parallax effect draws users in and encourages exploration.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{
                  opacity: Math.min(1, Math.max(0, (scrollY - 600 - i * 100) / 300)),
                  transform: `translateY(${Math.max(0, 50 - (scrollY - 600 - i * 100) / 6)}px)`,
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Parallax Section */}
      <section className="relative h-[150vh] overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0a0a12 0%, #1a0a2e 50%, #2a1a4e 100%)',
          }}
        />

        {/* Floating Elements */}
        <div
          className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            transform: `translateY(${(scrollY - 1000) * 0.2}px)`,
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-[40%] right-[15%] w-48 h-48 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            transform: `translateY(${(scrollY - 1000) * 0.3}px)`,
            filter: 'blur(30px)',
          }}
        />
        <div
          className="absolute top-[60%] left-[20%] w-32 h-32 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            transform: `translateY(${(scrollY - 1000) * 0.15}px)`,
            filter: 'blur(20px)',
          }}
        />

        {/* Center Text */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: Math.min(1, Math.max(0, (scrollY - 1200) / 400)),
          }}
        >
          <div className="text-center px-4">
            <h2
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                transform: `translateY(${Math.max(0, 100 - (scrollY - 1200) / 5)}px)`,
              }}
            >
              Endless Possibilities
            </h2>
            <p
              className="text-xl text-white/60 max-w-xl mx-auto"
              style={{
                transform: `translateY(${Math.max(0, 80 - (scrollY - 1300) / 5)}px)`,
              }}
            >
              Create stunning visual experiences that captivate your audience and
              leave a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative bg-[#0a0a12] text-white py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Ready to Build?
          </h2>
          <p className="text-lg text-white/60 mb-12">
            Transform your landing page with immersive parallax effects.
          </p>
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default ParallaxLanding;
