'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface ParallaxState {
  scrollY: number;
  scrollProgress: number;
  viewportHeight: number;
}

export function useParallax() {
  const [state, setState] = useState<ParallaxState>({
    scrollY: 0,
    scrollProgress: 0,
    viewportHeight: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;

      setState({
        scrollY,
        scrollProgress,
        viewportHeight: window.innerHeight,
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return state;
}

export function useElementInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            setProgress(entry.intersectionRatio);
          }
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView, progress };
}

export function useScrollTriggered(offset = 100) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkPosition = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - offset) {
        setTriggered(true);
      }
    };

    checkPosition();
    window.addEventListener('scroll', checkPosition, { passive: true });
    return () => window.removeEventListener('scroll', checkPosition);
  }, [offset]);

  return { ref, triggered };
}
