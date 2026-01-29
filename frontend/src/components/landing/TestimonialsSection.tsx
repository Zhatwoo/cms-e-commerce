'use client';

import React from 'react';
import Image from 'next/image';
import { ParallaxSection, FloatingElement } from '@/components/parallax/ParallaxSection';
import { useParallax } from '@/hooks/useParallax';

const testimonials = [
    {
        quote: "Mercato transformed our online presence. Sales increased by 200% in just 3 months!",
        name: "Sarah Chen",
        role: "CEO, StyleHub",
        image: "/12daa53dadb8e6773c1817d0b2eefe5bb113b979.png",
        position: { top: '5%', right: '10%' },
    },
    {
        quote: "The easiest e-commerce platform I've ever used. Setup took less than an hour.",
        name: "Marcus Johnson",
        role: "Founder, TechGear",
        image: "/271552771aec4da87bb7e8aafd0c5bdf201cdd0a.png",
        position: { top: '35%', left: '5%' },
    },
    {
        quote: "Customer support is incredible. They helped us scale from 100 to 10,000 orders.",
        name: "Emily Rodriguez",
        role: "COO, FreshMarket",
        image: "/cad203cae6b1eb766de84b771c166580a3dad46d.png",
        position: { bottom: '25%', right: '12%' },
    },
    {
        quote: "The analytics dashboard gives us insights we never had before. Game changer!",
        name: "David Park",
        role: "Marketing Director",
        image: "/2e855804e1e2b3a9aaa50e206da49e5cc18564a8.png",
        position: { bottom: '5%', left: '18%' },
    },
];

export const TestimonialsSection = () => {
    const { scrollY } = useParallax();

    return (
        <section className="relative bg-transparent text-white py-32 overflow-hidden min-h-[900px] flex items-center" id="testimonials">
            {/* Animated globe effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Core glow */}
                <div
                    className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
                        transform: `scale(${1 + scrollY * 0.0002})`,
                        filter: 'blur(40px)',
                    }}
                />

                {/* Orbital rings */}
                <div
                    className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full"
                    style={{
                        transform: `rotate(${scrollY * 0.02}deg)`,
                    }}
                />
                <div
                    className="absolute w-[550px] h-[550px] border border-purple-500/15 rounded-full"
                    style={{
                        transform: `rotate(${-scrollY * 0.015}deg)`,
                    }}
                />
                <div
                    className="absolute w-[700px] h-[700px] border border-cyan-500/10 rounded-full"
                    style={{
                        transform: `rotate(${scrollY * 0.01}deg)`,
                    }}
                />

                {/* Orbital dots */}
                <div
                    className="absolute w-[400px] h-[400px]"
                    style={{
                        transform: `rotate(${scrollY * 0.03}deg)`,
                    }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
                </div>
                <div
                    className="absolute w-[550px] h-[550px]"
                    style={{
                        transform: `rotate(${-scrollY * 0.02}deg)`,
                    }}
                >
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full" />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <ParallaxSection delay={0} direction="fade">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium tracking-wider uppercase mb-6">
                            Testimonials
                        </span>
                    </ParallaxSection>

                    <ParallaxSection delay={100} direction="up">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                            What they say{' '}
                            <span className="gradient-text">about us</span>
                        </h2>
                    </ParallaxSection>

                    <ParallaxSection delay={200} direction="fade">
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full" />
                    </ParallaxSection>
                </div>

                <div className="relative h-[500px] md:h-[550px] w-full">
                    {testimonials.map((testimonial, index) => (
                        <ParallaxSection
                            key={testimonial.name}
                            delay={300 + index * 150}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                        >
                            <div
                                className="absolute max-w-xs md:max-w-sm glass-card-blue p-6 rounded-2xl hover-lift group cursor-pointer"
                                style={{
                                    ...testimonial.position,
                                    transform: `translateY(${scrollY * (0.02 + index * 0.005) * (index % 2 === 0 ? 1 : -1)}px)`,
                                }}
                            >
                                <div className="absolute -top-3 -left-3 text-4xl text-blue-500/30 font-serif">"</div>

                                <p className="text-gray-200 text-sm md:text-base mb-4 relative z-10 leading-relaxed">
                                    {testimonial.quote}
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-0.5">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-white">{testimonial.name}</p>
                                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                                    }}
                                />
                            </div>
                        </ParallaxSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
