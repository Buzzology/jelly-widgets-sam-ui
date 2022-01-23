import React from 'react';
import LayoutDefault from '../LayoutDefault';
import LayoutHeadingBlock from './LayoutHeadingBlock';
import './layoutWidget.css';

type LayoutWigdetProps = {
    children: React.ReactNode,
    loading: boolean,
    headerSlug: string,
    headerTitle: string,
    headerDescription: string,
    buttonText: string,
    buttonLink: string,
}

const LayoutWidget = ({
    children,
    loading,
    headerSlug,
    headerTitle,
    headerDescription,
    buttonText,
    buttonLink,
}: LayoutWigdetProps) => {
    return (
        <LayoutDefault loading={loading}>
            <LayoutHeadingBlock
                headerSlug={headerSlug}
                headerTitle={headerTitle}
                headerDescription={headerDescription}
                buttonText={buttonText}
                buttonLink={buttonLink}
            />
            <div className="min-h-screen flex justify-center">
                <div className="max-w-md md:max-w-5xl flex-grow pt-10 pb-10">
                    {children}
                </div>
            </div>
        </LayoutDefault>
    );
}

export default LayoutWidget;