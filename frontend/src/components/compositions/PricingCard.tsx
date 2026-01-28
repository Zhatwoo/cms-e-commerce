import React from 'react';

interface PricingCardProps {
    heading: string;
    action: string;
    actionVariant?: string;
    onAction: () => void;
    listSlot: React.ReactNode;
    interval: string;
    sku: string;
    price: string;
    priceCurrency: string;
    priceLabel: string;
    size?: string;
    variant?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    heading,
    action,
    onAction,
    listSlot,
    price,
    priceLabel
}) => {
    return (
        <div className="bg-gradient-to-b from-blue-900/40 to-black/80 backdrop-blur-md border border-blue-500/30 rounded-3xl p-8 flex flex-col items-center text-center group hover:border-blue-500/60 transition duration-300 w-full max-w-sm">
            <h3 className="text-xl font-medium mb-4">{heading}</h3>
            <div className="flex items-baseline justify-center mb-8">
                <span className="text-sm align-top">$</span>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-sm text-gray-400 ml-1">{priceLabel}</span>
            </div>

            <div className="space-y-3 mb-8 w-full text-left text-sm text-gray-300 pl-8">
                {listSlot}
            </div>

            <button onClick={onAction} className="bg-white text-black w-full py-2 rounded-full font-medium text-sm mt-auto hover:bg-gray-200 transition">
                {action}
            </button>
        </div>
    );
};

export const TextList = ({ children, density }: { children: React.ReactNode, density?: string }) => <ul className={`space-y-3 ${density === 'compact' ? 'space-y-1' : ''}`}>{children}</ul>;
export const TextListItem = ({ children }: { children: React.ReactNode }) => <li className="list-disc">{children}</li>;
