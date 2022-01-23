import React from 'react';

interface IPrimaryButtonProps {
    label: string;
    onClick: (e?: any) => void;
    additionalClasses?: string;
    loading?: boolean;
}


export default function PrimaryButton({
    label,
    onClick,
    additionalClasses,
    loading,
}: IPrimaryButtonProps) {
    return (
        <div className="relative w-full">
            <div className={`
            absolute
            bg-white
            w-full
            text-center
            h-full
            transition-all
            pt-2
            ${loading ? 'visible' : 'invisible'}
            `}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
                <span className="
            text-sky-600
            material-icons
            text-md
            animate-spin
            "
                >donut_large</span>
            </div>
            <button
                onClick={onClick}
                aria-label={label}
                className={`
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                border-white border
                bg-sky-600
                w-full
                ${additionalClasses}
            `}
            >
                {label}
            </button>
        </div>
    )
}