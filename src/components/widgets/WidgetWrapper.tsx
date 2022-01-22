import React from 'react';


export default function WidgetWrapper({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="shadow-2xl rounded-xl p-6 border border-gray-100">
            {children}
        </div>
    )
}