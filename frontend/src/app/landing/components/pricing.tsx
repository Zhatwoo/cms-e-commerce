'use client';

import { useEffect, useRef, useState } from 'react';

const CARD_FEATURES = [
  'List item',
  'List item',
  'List item',
  'List item',
  'List item',
];

const ENTRANCE_OFFSET_Y = 80;

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [entranceProgress, setEntranceProgress] = useState(0);

  // Pricing is in window scroll (second scroll system); use viewport for entrance
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = entry.intersectionRatio;
          setEntranceProgress((p) => Math.max(p, ratio));
        }
      },
      { root: null, rootMargin: '0px', threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const entranceY = (1 - entranceProgress) * ENTRANCE_OFFSET_Y;
  const opacity = 0.7 + 0.3 * entranceProgress;

  return (
    <section
      ref={sectionRef}
      className="w-full rounded-t-3xl px-6 py-16 md:px-10 md:py-24 transition-all duration-500 ease-out"
      style={{
        backgroundColor: '#020205',
        transform: `translateY(${entranceY}px)`,
        opacity,
        willChange: 'transform, opacity',
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Main title */}
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Take advantage in our   1 month free domain
        </h2>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl bg-gradient-to-b from-white to-black p-[3px]"
            >
              <div
                className="flex flex-col overflow-hidden rounded-[calc(1.5rem-2px)] p-6 md:p-8"
                style={{
                  background: 'linear-gradient(180deg, rgba(30, 58, 138, 0.6) 0%, rgba(15, 23, 42, 0.95) 50%, #000 100%)',
                }}
              >
                <h3 className="text-center text-lg font-semibold text-white md:text-xl">
                  Title
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-0.5">
                  <span className="text-lg font-medium text-white/90">$</span>
                  <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">50</span>
                  <span className="text-lg font-medium text-white/80">/mo</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {CARD_FEATURES.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/90 md:text-base">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full rounded-lg bg-white py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/95"
                >
                  Button
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA text */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-white/90 md:text-lg">
          Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today.
        </p>
      </div>
    </section>
  );
}
