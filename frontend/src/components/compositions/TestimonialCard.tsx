import React from 'react';

interface TestimonialCardProps {
    heading: string;
    src?: string;
    name: string;
    username: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ heading, src, name, username }) => {
    return (
        <div className="max-w-sm bg-blue-900/40 backdrop-blur-md border border-blue-500/50 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-2">{heading}</h3>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    {src && <img src={src} alt={name} className="w-full h-full object-cover" />}
                </div>
                <div>
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-gray-300">{username}</p>
                </div>
            </div>
        </div>
    );
};
