import React from 'react';
import LayoutDefault from './LayoutDefault';

type LayoutWigdetProps = {
    children: React.ReactNode;
    loading: boolean;
    title: string,
    description: string,
}

const LayoutWidget = ({
    children,
    loading,
    title,
    description,
}: LayoutWigdetProps) => {
    return (
        <LayoutDefault loading={loading}>
            <div className="grid grid-cols-12">
                <div className="col-span-12 mt-4 pb-4">
                    { title }
                </div>
                <p className="text-sm text-gray-500 font-light">
                    { description }
                </p>
                <div className="col-span-12">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}

export default LayoutWidget;