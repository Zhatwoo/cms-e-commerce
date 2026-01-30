'use client';

import React, { useEffect, useRef, useState, createContext, useContext } from 'react';

type ScrollGateContextValue = {
  progress: number;
  allowInnerScroll: boolean;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};
const ScrollGateContext = createContext<ScrollGateContextValue>({
  progress: 0,
  allowInnerScroll: false,
  scrollContainerRef: { current: null },
});
export function useScrollGate() {
  return useContext(ScrollGateContext);
}

/**
 * Wrapper that keeps inner overflow hidden until the main page has been
 * scrolled to the threshold (e.g. dark section in view). Then enables
 * internal scrolling so outside scroll must finish first.
 */
export function ScrollGate({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [allowInnerScroll, setAllowInnerScroll] = useState(false);
  const [innerProgress, setInnerProgress] = useState(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const onInnerScroll = () => {
      const st = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, st / max)) : 0;
      setInnerProgress(p);
    };
    el.addEventListener('scroll', onInnerScroll, { passive: true });
    onInnerScroll();
    return () => el.removeEventListener('scroll', onInnerScroll);
  }, [allowInnerScroll]);

  // When at bottom of gate scroll, pass wheel to window so Pricing layer (next scroll system) receives scroll
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!allowInnerScroll) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atBottom = scrollHeight - clientHeight <= scrollTop + 8;
      if (atBottom && e.deltaY > 0) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, left: 0, behavior: 'auto' });
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [allowInnerScroll]);

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
    <ScrollGateContext.Provider value={{ progress: innerProgress, allowInnerScroll, scrollContainerRef: innerRef }}>
      <div
        ref={innerRef}
        className="scrollbar-hide sticky top-20 z-10 -mt-[40vh] h-[calc(100vh-5rem)] w-full rounded-t-3xl bg-[#092727]"
        style={{ overflowY: allowInnerScroll ? 'auto' : 'hidden', ['--scroll-progress' as any]: innerProgress }}
      >
        {children}
      </div>
    </ScrollGateContext.Provider>
  );
}
