'use client';

import React, { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface FloatingShape {
  id: number;
  type: 'circle' | 'ring' | 'diamond' | 'cross' | 'dot';
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const generateShapes = (): FloatingShape[] => {
  const colors = [
    'rgba(59, 130, 246, 0.3)',   // blue
    'rgba(139, 92, 246, 0.25)',  // purple
    'rgba(6, 182, 212, 0.2)',    // cyan
    'rgba(236, 72, 153, 0.15)',  // pink
    'rgba(34, 197, 94, 0.15)',   // green
  ];

  const types: FloatingShape['type'][] = ['circle', 'ring', 'diamond', 'cross', 'dot'];

  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    type: types[Math.floor(Math.random() * types.length)],
    x: Math.random() * 100,
    y: Math.random() * 400,
    size: 20 + Math.random() * 80,
    speed: 0.1 + Math.random() * 0.4,
    opacity: 0.1 + Math.random() * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 0.5,
  }));
};

const ShapeElement: React.FC<{ shape: FloatingShape; scrollY: number }> = ({ shape, scrollY }) => {
  const translateY = scrollY * shape.speed;
  const rotation = shape.rotation + scrollY * shape.rotationSpeed;

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${shape.x}%`,
    top: `${shape.y}%`,
    width: shape.size,
    height: shape.size,
    transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
    opacity: shape.opacity,
    transition: 'transform 0.1s linear',
    pointerEvents: 'none',
  };

  switch (shape.type) {
    case 'circle':
      return (
        <div
          style={{
            ...baseStyle,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
          }}
        />
      );
    case 'ring':
      return (
        <div
          style={{
            ...baseStyle,
            borderRadius: '50%',
            border: `2px solid ${shape.color}`,
            background: 'transparent',
          }}
        />
      );
    case 'diamond':
      return (
        <div
          style={{
            ...baseStyle,
            background: shape.color,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      );
    case 'cross':
      return (
        <div
          style={{
            ...baseStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '3px',
              background: shape.color,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '3px',
              height: '100%',
              background: shape.color,
            }}
          />
        </div>
      );
    case 'dot':
      return (
        <div
          style={{
            ...baseStyle,
            width: shape.size / 3,
            height: shape.size / 3,
            borderRadius: '50%',
            background: shape.color,
            boxShadow: `0 0 ${shape.size}px ${shape.color}`,
          }}
        />
      );
    default:
      return null;
  }
};

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useParallax();
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setShapes(generateShapes());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, #000000 0%, #050510 50%, #0a0a14 100%)
          `,
        }}
      />

      {/* Star field - multiple layers for depth */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 160px 120px, rgba(255,255,255,0.9), transparent)
          `,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Second star layer - slower parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
          backgroundImage: `
            radial-gradient(1px 1px at 80px 20px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 120px 100px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 30px 140px, rgba(255,255,255,0.35), transparent),
            radial-gradient(1px 1px at 170px 50px, rgba(255,255,255,0.25), transparent)
          `,
          backgroundSize: '300px 200px',
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <ShapeElement key={shape.id} shape={shape} scrollY={scrollY} />
      ))}

      {/* Large gradient orbs - very slow parallax for depth */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 60%)',
          transform: `translateY(${scrollY * 0.08}px)`,
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-[40%] -right-[20%] w-[50vw] h-[50vw] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 60%)',
          transform: `translateY(${scrollY * 0.12}px)`,
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-[100%] left-[10%] w-[40vw] h-[40vw] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 60%)',
          transform: `translateY(${scrollY * 0.15}px)`,
          filter: 'blur(70px)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
