'use client';

import React from 'react';
import Image from 'next/image';
import { ParallaxSection, FloatingElement } from '@/components/parallax/ParallaxSection';
import { useParallax } from '@/hooks/useParallax';

export const TemplatesSection = () => {
    const { scrollY } = useParallax();

    return (
        <section className="relative bg-transparent text-white py-32 px-4 md:px-8 lg:px-16 overflow-hidden section-divider" id="templates">
            {/* Floating accent shapes */}
            <FloatingElement
                className="absolute top-32 left-[3%] opacity-20"
                amplitude={25}
                duration={7}
                delay={0.5}
            >
                <div className="w-40 h-40 border-2 border-cyan-500/20 rounded-full" />
            </FloatingElement>

            <FloatingElement
                className="absolute bottom-20 right-[5%] opacity-15"
                amplitude={18}
                duration={5}
                delay={1.2}
            >
                <div
                    className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/10"
                    style={{
                        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                        transform: `rotate(${scrollY * 0.02}deg)`,
                    }}
                />
            </FloatingElement>

            <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
                <ParallaxSection delay={0} direction="fade">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wider uppercase mb-6">
                        Templates
                    </span>
                </ParallaxSection>

                <ParallaxSection delay={100} direction="up">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                        The commerce platform{' '}
                        <br />
                        <span className="gradient-text">behind everything we build</span>
                    </h2>
                </ParallaxSection>

                <ParallaxSection delay={200} direction="up">
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Build, customize, and scale e-commerce websites with total control.
                        A flexible, modern system for building powerful online stores.
                    </p>
                </ParallaxSection>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Template 1 */}
                    <ParallaxSection delay={300} direction="left">
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl hover-lift hover-glow group"
                            style={{
                                transform: `translateY(${scrollY * 0.02}px)`,
                            }}
                        >
                            <div className="glass-card aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src="/4bbb146260379cd1fbea5a9afa3f9b66fa9091d4.png"
                                    alt="Template 1"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-sm font-medium text-white">Minimal Store</span>
                                </div>
                            </div>
                        </div>
                    </ParallaxSection>

                    {/* Template 2 (Center - Hero) */}
                    <ParallaxSection delay={400} direction="scale">
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl md:-mt-8 relative z-10 hover-lift group"
                            style={{
                                transform: `translateY(${scrollY * -0.03}px)`,
                                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                            }}
                        >
                            <div className="glass-card-blue aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src="/0c0effe8ed665936fb95ad380db1b35b2129f967.png"
                                    alt="Template 2"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-sm font-medium text-white">Featured Template</span>
                                </div>
                            </div>
                        </div>
                    </ParallaxSection>

                    {/* Template 3 */}
                    <ParallaxSection delay={500} direction="right">
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl hover-lift hover-glow group"
                            style={{
                                transform: `translateY(${scrollY * 0.02}px)`,
                            }}
                        >
                            <div className="glass-card aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src="/a6aecac5846f117f3c886e34bccaeac3d4920579.png"
                                    alt="Template 3"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-sm font-medium text-white">Bold Commerce</span>
                                </div>
                            </div>
                        </div>
                    </ParallaxSection>
                </div>
            </div>

            <ParallaxSection delay={600} direction="up">
                <div className="text-center mt-16">
                    <button className="group relative px-8 py-4 bg-transparent border border-white/30 text-white rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                            Explore Web Templates
                        </span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                </div>
            </ParallaxSection>
        </section>
    );
};
