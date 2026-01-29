'use client';

import React from 'react';
import Image from 'next/image';
import { ParallaxSection, FloatingElement } from '@/components/parallax/ParallaxSection';
import { useParallax } from '@/hooks/useParallax';

export const FeaturesSection = () => {
    const { scrollY } = useParallax();

    return (
        <section className="relative bg-transparent text-white py-32 px-4 md:px-8 lg:px-16 overflow-hidden" id="features">
            {/* Section-specific floating elements */}
            <FloatingElement
                className="absolute top-20 right-[5%] opacity-30"
                amplitude={20}
                duration={5}
                delay={0.3}
            >
                <div className="w-32 h-32 border border-blue-500/20 rounded-full" />
            </FloatingElement>

            <FloatingElement
                className="absolute bottom-40 left-[8%] opacity-20"
                amplitude={15}
                duration={6}
                delay={1}
            >
                <div
                    className="w-20 h-20 bg-purple-500/10"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
            </FloatingElement>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <ParallaxSection delay={0} direction="fade">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                            Powerful Tools
                        </span>
                    </ParallaxSection>

                    <ParallaxSection delay={100} direction="up">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Build Your Website With{' '}
                            <br className="hidden md:block" />
                            <span className="gradient-text">Mercato Exclusive Tools</span>
                        </h2>
                    </ParallaxSection>

                    <ParallaxSection delay={200} direction="up">
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                            With Mercato's exclusive tools, you can design, launch, and grow your
                            online store faster and smarter than ever before.
                        </p>
                    </ParallaxSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Drag and Drop Builder */}
                    <ParallaxSection delay={300} direction="up">
                        <div className="glass-card rounded-3xl overflow-hidden p-6 flex flex-col items-center hover-lift h-full">
                            <h3 className="font-display text-xl font-semibold mb-3 w-full text-left">Add elements</h3>
                            <p className="text-gray-500 text-sm mb-6 w-full text-left">
                                Drag and drop elements anywhere on your page
                            </p>
                            {/* Mockup of UI Grid */}
                            <div className="w-full bg-white/95 rounded-xl p-4 shadow-lg">
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { name: 'Text', icon: 'T' },
                                        { name: 'Button', icon: '◻' },
                                        { name: 'Add to bag', icon: '+' },
                                        { name: 'Image', icon: '🖼️' },
                                        { name: 'Gallery', icon: '▤' },
                                        { name: 'Video', icon: '▶' },
                                        { name: 'Shape', icon: '★' },
                                        { name: 'Map', icon: '🗺️' },
                                        { name: 'Feed', icon: '📱' },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center justify-center p-2 border border-dashed border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 aspect-square transition-all duration-200 cursor-pointer group"
                                            style={{
                                                animationDelay: `${i * 50}ms`,
                                            }}
                                        >
                                            <span className="text-xl mb-1 text-gray-400 group-hover:text-blue-500 transition-colors">{item.icon}</span>
                                            <span className="text-gray-500 group-hover:text-blue-600 text-center leading-tight text-[9px] font-medium transition-colors">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ParallaxSection>

                    {/* Feature 2: CMS/Integrations */}
                    <ParallaxSection delay={400} direction="up">
                        <div className="glass-card rounded-3xl overflow-hidden flex flex-col relative h-full min-h-[300px] hover-lift group">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/b3af34c2c26f6abd6e071a9bb63bf0bd30ab8e5f.png"
                                    alt="CMS Integrations"
                                    fill
                                    className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                            <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                                <span className="text-xs text-blue-400 uppercase tracking-widest font-medium">Integrations</span>
                                <h3 className="font-display text-xl font-semibold mt-2">Seamless Connections</h3>
                                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Connect with your favorite tools and services
                                </p>
                            </div>
                        </div>
                    </ParallaxSection>

                    {/* Feature 3: Custom Frontend/Code */}
                    <ParallaxSection delay={500} direction="up">
                        <div className="glass-card rounded-3xl overflow-hidden relative h-full min-h-[300px] hover-lift group">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/53030d137532ba9ebe957e215b9f12359626d73f.png"
                                    alt="Custom Frontend"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 z-10" />
                            <div className="p-6 relative z-20 h-full flex flex-col justify-end">
                                <h3 className="font-display text-xl font-semibold mb-2">Custom frontend</h3>
                                <p className="text-gray-400 text-sm">without custom code</p>
                            </div>
                        </div>
                    </ParallaxSection>
                </div>
            </div>
        </section>
    );
};
