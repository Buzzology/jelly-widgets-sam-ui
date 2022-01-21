import React from 'react';

interface IPrimaryButtonProps {
    label: string;
    onClick: () => void;
    additionalClasses?: string;
}


export default function PrimaryButton({
    label,
    onClick,
    additionalClasses,
}: IPrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label={label}
            className={`
                mt-6
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                border-white border
                bg-sky-600
                w-full
                md:w-auto
                ${additionalClasses}
            `}
        >{label}</button>
    )
}