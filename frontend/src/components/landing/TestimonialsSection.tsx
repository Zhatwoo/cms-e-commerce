import React from 'react';
import Image from 'next/image';

export const TestimonialsSection = () => {
    return (
        <section className="bg-black text-white py-24 relative overflow-hidden h-[800px] flex items-center justify-center" id="testimonials">

            <div className="absolute inset-0 flex items-center justify-center">
                {/* Globe Gradient */}
                <div className="w-[600px] h-[600px] bg-blue-700 rounded-full blur-[80px] opacity-60"></div>
                {/* Dotted Globe Effect (Simplified) */}
                <div className="absolute w-[500px] h-[500px] border border-blue-500/30 rounded-full opacity-30"></div>
                <div className="absolute w-[700px] h-[700px] border border-blue-500/20 rounded-full opacity-20"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">What they say about us.</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="relative h-[500px] w-full">
                    {/* Testimonial 1 - Top Right */}
                    <div className="absolute top-0 right-[10%] max-w-sm bg-blue-900/40 backdrop-blur-md border border-blue-500/50 p-6 rounded-lg shadow-xl">
                        <h3 className="text-lg font-semibold mb-2">"Quote"</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 relative overflow-hidden">
                                <Image src="/12daa53dadb8e6773c1817d0b2eefe5bb113b979.png" alt="User" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">Title</p>
                                <p className="text-xs text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 - Middle Left */}
                    <div className="absolute top-[30%] left-[5%] max-w-sm bg-blue-900/40 backdrop-blur-md border border-blue-500/50 p-6 rounded-lg shadow-xl">
                        <h3 className="text-lg font-semibold mb-2">"Quote"</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 relative overflow-hidden">
                                <Image src="/271552771aec4da87bb7e8aafd0c5bdf201cdd0a.png" alt="User" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">Title</p>
                                <p className="text-xs text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 - Bottom Right */}
                    <div className="absolute bottom-[20%] right-[15%] max-w-sm bg-blue-900/40 backdrop-blur-md border border-blue-500/50 p-6 rounded-lg shadow-xl">
                        <h3 className="text-lg font-semibold mb-2">"Quote"</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 relative overflow-hidden">
                                <Image src="/cad203cae6b1eb766de84b771c166580a3dad46d.png" alt="User" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">Title</p>
                                <p className="text-xs text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 4 - Bottom Left */}
                    <div className="absolute bottom-0 left-[20%] max-w-sm bg-blue-900/40 backdrop-blur-md border border-blue-500/50 p-6 rounded-lg shadow-xl">
                        <h3 className="text-lg font-semibold mb-2">"Quote"</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 relative overflow-hidden">
                                <Image src="/2e855804e1e2b3a9aaa50e206da49e5cc18564a8.png" alt="User" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">Title</p>
                                <p className="text-xs text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
