'use client';

import React from 'react';
import { ParallaxSection, FloatingElement } from '@/components/parallax/ParallaxSection';

export const ContactSection = () => {

    return (
        <section className="relative bg-transparent text-white py-32 px-4 overflow-hidden" id="contact">
            {/* Floating decorative elements */}
            <FloatingElement
                className="absolute top-20 right-[15%] opacity-15"
                amplitude={12}
                duration={5}
                delay={0.3}
            >
                <div className="w-32 h-32 border border-cyan-500/20 rounded-full" />
            </FloatingElement>

            <FloatingElement
                className="absolute bottom-32 left-[10%] opacity-10"
                amplitude={18}
                duration={7}
                delay={1}
            >
                <div
                    className="w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/5"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
            </FloatingElement>

            <div className="max-w-3xl mx-auto relative">
                <ParallaxSection delay={0} direction="scale">
                    <div
                        className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        style={{
                            boxShadow: '0 0 80px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                        }}
                    >
                        {/* Decorative gradient corner */}
                        <div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                            }}
                        />
                        <div
                            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                            }}
                        />

                        <ParallaxSection delay={100} direction="up">
                            <div className="text-center mb-10">
                                <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
                                    Get In Touch
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl font-bold">
                                    Contact <span className="gradient-text">Us</span>
                                </h2>
                            </div>
                        </ParallaxSection>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ParallaxSection delay={200} direction="left">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-300 pl-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-4 placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                            placeholder="John"
                                        />
                                    </div>
                                </ParallaxSection>

                                <ParallaxSection delay={250} direction="right">
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-300 pl-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-4 placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </ParallaxSection>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ParallaxSection delay={300} direction="left">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-gray-300 pl-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-4 placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </ParallaxSection>

                                <ParallaxSection delay={350} direction="right">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300 pl-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-4 placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </ParallaxSection>
                            </div>

                            <ParallaxSection delay={400} direction="up">
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300 pl-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                            </ParallaxSection>

                            <ParallaxSection delay={450} direction="scale">
                                <div className="flex justify-center pt-4">
                                    <button
                                        type="submit"
                                        className="group relative px-12 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                                    >
                                        {/* Button background gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient" />

                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                        </div>

                                        <span className="relative z-10 text-white">Send Message</span>
                                    </button>
                                </div>
                            </ParallaxSection>
                        </form>
                    </div>
                </ParallaxSection>
            </div>

            {/* Bottom decorative line */}
            <ParallaxSection delay={500} direction="fade">
                <div className="mt-20 flex justify-center">
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                </div>
            </ParallaxSection>
        </section>
    );
};
