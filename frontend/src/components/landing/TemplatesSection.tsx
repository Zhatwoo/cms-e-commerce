import React from 'react';
import Image from 'next/image';

export const TemplatesSection = () => {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16" id="templates">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    The commerce platform <br />
                    behind everything we build
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                    Build, customize, and scale e-commerce websites with total control.
                    A flexible, modern system for building powerful online stores.
                    Everything you need to create, manage, and grow your store.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Template 1 */}
                <div className="rounded-xl overflow-hidden shadow-2xl transition hover:transform hover:scale-[1.02] duration-300">
                    <div className="bg-neutral-800 aspect-[4/3] relative">
                        <Image
                            src="/4bbb146260379cd1fbea5a9afa3f9b66fa9091d4.png"
                            alt="Template 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Template 2 (Center - Hero) */}
                <div className="rounded-xl overflow-hidden shadow-2xl md:-mt-8 relative z-10 transition hover:transform hover:scale-[1.02] duration-300">
                    <div className="bg-neutral-800 aspect-[4/3] relative">
                        <Image
                            src="/0c0effe8ed665936fb95ad380db1b35b2129f967.png"
                            alt="Template 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Template 3 */}
                <div className="rounded-xl overflow-hidden shadow-2xl transition hover:transform hover:scale-[1.02] duration-300">
                    <div className="bg-neutral-800 aspect-[4/3] relative">
                        <Image
                            src="/a6aecac5846f117f3c886e34bccaeac3d4920579.png"
                            alt="Template 3"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition duration-300">
                    Explore Web Templates
                </button>
            </div>
        </section>
    );
};
