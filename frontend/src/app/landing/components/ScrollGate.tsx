'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Wrapper that keeps inner overflow hidden until the main page has been
 * scrolled to the threshold (e.g. dark section in view). Then enables
 * internal scrolling so outside scroll must finish first.
 */
export function ScrollGate({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [allowInnerScroll, setAllowInnerScroll] = useState(false);

  useEffect(() => {
    const getThreshold = () => {
      if (typeof window === 'undefined') return 0;
      const vh = window.innerHeight;
      const rem = 16;
      // Activate inside scroll when dark section + pricing overlap is in view (~35vh)
      return vh * 0.35 - 5 * rem;
    };

    const handleScroll = () => {
      const y = typeof window !== 'undefined' ? window.scrollY : 0;
      const threshold = getThreshold();
      setAllowInnerScroll(y >= Math.max(0, threshold - 20));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={innerRef}
      className="scrollbar-hide sticky top-20 z-10 -mt-[40vh] h-[calc(100vh-5rem)] w-full rounded-t-4xl bg-[#092727]"
      style={{ overflowY: allowInnerScroll ? 'auto' : 'hidden' }}
    >
      {children}
    </div>
  );
}
