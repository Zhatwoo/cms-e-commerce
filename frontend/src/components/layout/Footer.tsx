import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-4 md:px-8 lg:px-16 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="space-y-6">
                    {/* Logo Placeholder */}
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-xl border-2 border-white rounded-lg">B</div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {[
                            { name: 'X', label: 'Twitter/X' },
                            { name: 'Ig', label: 'Instagram' },
                            { name: 'Yt', label: 'YouTube' },
                            { name: 'In', label: 'LinkedIn' },
                        ].map((icon, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={icon.label}
                                className="w-6 h-6 flex items-center justify-center border border-white/50 rounded text-[10px] hover:border-white transition cursor-pointer"
                            >
                                {icon.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Use cases */}
                <div>
                    <h4 className="font-bold mb-6">Use cases</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['UI design', 'UX design', 'Wireframing', 'Diagramming', 'Brainstorming', 'Online whiteboard', 'Team collaboration'].map(item => (
                            <li key={item}>
                                <button
                                    type="button"
                                    className="hover:text-white transition text-left"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="font-bold mb-6">Explore</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['Design', 'Prototyping', 'Development features', 'Design systems', 'Collaboration features', 'Design process', 'FigJam'].map(item => (
                            <li key={item}>
                                <button
                                    type="button"
                                    className="hover:text-white transition text-left"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-bold mb-6">Resources</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['Blog', 'Best practices', 'Colors', 'Color wheel', 'Support', 'Developers', 'Resource library'].map(item => (
                            <li key={item}>
                                <button
                                    type="button"
                                    className="hover:text-white transition text-left"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
