import React from 'react';
import Image from 'next/image';

export const FeaturesSection = () => {
    return (
        <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16" id="features">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Build Your Website With <br className="hidden md:block" />
                        Mercato Exclusive Tools
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        With Mercato's exclusive tools, you can design, launch, and grow your
                        online store faster and smarter than ever before.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Drag and Drop Builder */}
                    <div className="bg-neutral-900/50 rounded-3xl overflow-hidden border border-neutral-800 p-6 flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-4 w-full text-left">Add elements</h3>
                        <p className="text-gray-500 text-sm mb-6 w-full text-left">
                            Drag and drop elements anywhere on your page
                        </p>
                        {/* Mockup of UI Grid */}
                        <div className="w-full bg-white rounded-lg p-4 shadow-inner">
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { name: 'Text', icon: 'T' }, { name: 'Button', icon: '◻' }, { name: 'Add to bag', icon: '+' },
                                    { name: 'Image', icon: '🖼️' }, { name: 'Gallery', icon: '▤' }, { name: 'Video', icon: '▶' },
                                    { name: 'Shape', icon: '★' }, { name: 'Map', icon: '🗺️' }, { name: 'Feed', icon: '📱' },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center p-2 border border-dashed border-gray-300 rounded hover:bg-gray-50 aspect-square">
                                        <span className="text-xl mb-1 text-gray-400">{item.icon}</span>
                                        <span className="text-xl text-gray-500 text-center leading-tight text-[9px]">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: CMS/Integrations */}
                    <div className="bg-neutral-900/50 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col relative">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/b3af34c2c26f6abd6e071a9bb63bf0bd30ab8e5f.png"
                                alt="CMS Integrations"
                                fill
                                className="object-cover opacity-50"
                            />
                        </div>
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end bg-gradient-to-t from-neutral-900 via-transparent to-transparent">
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Integrations</span>
                            <h3 className="text-lg font-semibold mt-1">Seamless Connections</h3>
                        </div>
                    </div>

                    {/* Feature 3: Custom Frontend/Code */}
                    <div className="bg-neutral-900/50 rounded-3xl overflow-hidden border border-neutral-800 relative group">
                        <div className="absolute inset-0 bg-neutral-800 z-0">
                            <Image
                                src="/53030d137532ba9ebe957e215b9f12359626d73f.png"
                                alt="Custom Frontend"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                        <div className="p-6 relative z-20 h-full flex flex-col justify-end">
                            <h3 className="text-xl font-semibold mb-2">Custom frontend</h3>
                            <p className="text-gray-400 text-sm">without custom code</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
