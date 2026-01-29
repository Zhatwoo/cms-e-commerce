'use client';

import React from 'react';
import { ParallaxSection, FloatingElement } from '@/components/parallax/ParallaxSection';
import { useParallax } from '@/hooks/useParallax';

const pricingPlans = [
    {
        name: 'Starter',
        price: 29,
        description: 'Perfect for small businesses',
        features: [
            'Up to 100 products',
            'Basic analytics',
            'Email support',
            'Custom domain',
            'SSL certificate',
        ],
        popular: false,
    },
    {
        name: 'Professional',
        price: 79,
        description: 'Best for growing stores',
        features: [
            'Unlimited products',
            'Advanced analytics',
            'Priority support',
            'API access',
            'Custom integrations',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 199,
        description: 'For large scale operations',
        features: [
            'Everything in Pro',
            'Dedicated account manager',
            'Custom development',
            'SLA guarantee',
            'White-label options',
        ],
        popular: false,
    },
];

export const PricingSection = () => {
    const { scrollY } = useParallax();

    return (
        <section className="relative bg-transparent text-white py-32 px-4 md:px-8 lg:px-16 overflow-hidden" id="pricing">
            {/* Large gradient orb behind pricing */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
                    transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`,
                    filter: 'blur(80px)',
                }}
            />

            {/* Floating elements */}
            <FloatingElement
                className="absolute top-20 left-[10%] opacity-20"
                amplitude={15}
                duration={6}
                delay={0.2}
            >
                <div className="w-16 h-16 border border-blue-400/30 rounded-lg transform rotate-45" />
            </FloatingElement>

            <FloatingElement
                className="absolute bottom-32 right-[8%] opacity-15"
                amplitude={20}
                duration={5}
                delay={0.8}
            >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full" />
            </FloatingElement>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <ParallaxSection delay={0} direction="fade">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium tracking-wider uppercase mb-6">
                            Pricing
                        </span>
                    </ParallaxSection>

                    <ParallaxSection delay={100} direction="up">
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Take advantage of our{' '}
                            <span className="gradient-text">1 month free</span>
                            <br />domain offer
                        </h2>
                    </ParallaxSection>

                    <ParallaxSection delay={200} direction="up">
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Choose the perfect plan for your business. All plans include our core features.
                        </p>
                    </ParallaxSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <ParallaxSection key={plan.name} delay={300 + index * 100} direction="up">
                            <div
                                className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover-lift ${
                                    plan.popular
                                        ? 'glass-card-blue animate-glow'
                                        : 'glass-card'
                                }`}
                                style={{
                                    transform: plan.popular ? `translateY(${scrollY * -0.02}px)` : undefined,
                                }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-sm text-gray-400 align-top">$</span>
                                        <span className="text-5xl font-bold font-display">{plan.price}</span>
                                        <span className="text-sm text-gray-400 ml-1">/ mo</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 ${
                                                    plan.popular ? 'text-blue-400' : 'text-green-400'
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                                        plan.popular
                                            ? 'bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </ParallaxSection>
                    ))}
                </div>

                <ParallaxSection delay={700} direction="fade">
                    <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
                        Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today.
                        No credit card required for the trial.
                    </p>
                </ParallaxSection>
            </div>
        </section>
    );
};
