import React from 'react';

export const ContactSection = () => {
    return (
        <section className="bg-black text-white py-24 px-4" id="contact">
            <div className="max-w-3xl mx-auto border border-white rounded-3xl p-8 md:p-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium pl-1">First Name:</label>
                            <input type="text" id="firstName" className="w-full h-12 rounded-lg bg-white text-black px-4" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium pl-1">Last Name:</label>
                            <input type="text" id="lastName" className="w-full h-12 rounded-lg bg-white text-black px-4" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium pl-1">Company:</label>
                            <input type="text" id="company" className="w-full h-12 rounded-lg bg-white text-black px-4" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium pl-1">Email:</label>
                            <input type="email" id="email" className="w-full h-12 rounded-lg bg-white text-black px-4" />
                        </div>
                    </div>

                    <div className="flex justify-center pt-8">
                        <button type="submit" className="bg-black border-2 border-white text-white px-12 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-black transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
