import React from 'react';

export const PricingSection = () => {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden" id="pricing">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Take advantage in our 1 month free <br /> domain
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gradient-to-b from-blue-900/40 to-black/80 backdrop-blur-md border border-blue-500/30 rounded-3xl p-8 flex flex-col items-center text-center group hover:border-blue-500/60 transition duration-300">
                        <h3 className="text-xl font-medium mb-4">Title</h3>
                        <div className="flex items-baseline justify-center mb-8">
                            <span className="text-sm align-top">$</span>
                            <span className="text-5xl font-bold">50</span>
                            <span className="text-sm text-gray-400 ml-1">/ mo</span>
                        </div>

                        <ul className="space-y-3 mb-8 w-full text-left text-sm text-gray-300 pl-8">
                            {['List item', 'List item', 'List item', 'List item', 'List item'].map((li, i) => (
                                <li key={i} className="list-disc">{li}</li>
                            ))}
                        </ul>

                        <button className="bg-white text-black w-full py-2 rounded-full font-medium text-sm mt-auto hover:bg-gray-200 transition">
                            Button
                        </button>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-12 max-w-2xl mx-auto">
                Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today.
            </p>
        </section>
    );
};
