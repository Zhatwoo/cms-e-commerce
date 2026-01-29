'use client';

import React, { ReactNode } from 'react';
import { useScrollTriggered } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const { ref, triggered } = useScrollTriggered(150);

  const getTransform = () => {
    if (triggered) return 'translate3d(0, 0, 0) scale(1)';

    switch (direction) {
      case 'up':
        return 'translate3d(0, 60px, 0)';
      case 'down':
        return 'translate3d(0, -60px, 0)';
      case 'left':
        return 'translate3d(60px, 0, 0)';
      case 'right':
        return 'translate3d(-60px, 0, 0)';
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.9)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: triggered ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxTextProps {
  children: string;
  className?: string;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  className = '',
  staggerDelay = 50,
  as: Tag = 'span' as 'span',
}) => {
  const { ref, triggered } = useScrollTriggered(100);
  const words = children.split(' ');

  return (
    <Tag ref={ref} className={`${className} overflow-hidden`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: triggered ? 1 : 0,
            transform: triggered ? 'translateY(0)' : 'translateY(100%)',
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms`,
          }}
        >
          {word}
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  amplitude = 10,
  duration = 3,
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`${className}`}
      style={{
        animation: `parallax-float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        ['--float-amplitude' as string]: `${amplitude}px`,
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const { ref, triggered } = useScrollTriggered(0);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ['--parallax-speed' as string]: speed,
      }}
    >
      {children}
    </div>
  );
};
