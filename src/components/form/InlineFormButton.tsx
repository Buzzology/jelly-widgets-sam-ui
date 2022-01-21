import React from 'react';

interface IInlineFormButtonProps {
    label: string;
    onClick: () => void;
    additionalClasses?: string;
    loading?: boolean;
}


export default function InlineFormButton({
    label,
    onClick,
    additionalClasses,
    loading,
}: IInlineFormButtonProps) {
    return (
        <div style={{ position: 'relative' }}>
            <div className={`
            absolute
            bg-white
            w-full
            text-center
            h-full
            transition-all
            ${loading ? 'visible' : 'invisible'}
            `}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
                <span className="
            text-sky-600
            material-icons
            px-5
            text-md
            animate-spin
            py-2
            px-4
            "
                >donut_large</span>
            </div>
            <button
                onClick={onClick}
                aria-label={label}
                disabled={loading}
                className={`
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                border-white border
                bg-sky-600
                w-full
                md:w-auto
                hover:bg-sky-500
                transition-colors
                ${additionalClasses}
            `}
            >
                {label}
            </button>
        </div>
    )
}