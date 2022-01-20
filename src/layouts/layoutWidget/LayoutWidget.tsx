import React from 'react';
import LayoutDefault from '../LayoutDefault';
import './layoutWidget.css';

type LayoutWigdetProps = {
    children: React.ReactNode;
    loading: boolean;
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
            <div className="flex justify-center bg-sky-600 text-white p-4 pb-10" style={{ position: 'relative' }}>
                <div id="widget-header-background"></div>
                <div className="max-w-md md:max-w-5xl flex-grow grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6" style={{ zIndex: 2 }}>
                        <h1 className="text-sm uppercase leading-normal mt-8 font-light text-sky-200">
                            {headerSlug}
                        </h1>
                        <h1 className="text-4xl leading-normal font-bold">
                            {headerTitle}
                        </h1>
                        <div className="text mb-10 font-extralight text-sky-200">
                            {headerDescription}
                        </div>
                        <div className="text-left">
                            <a href={buttonLink}>
                                <button className="
                                    font-bold
                                    py-2
                                    px-4
                                    rounded-full
                                    border-white border
                                    text-white  
                                    bg-sky-600
                                    transition
                                    duration-200
                                    ease-in-out
                                    hover:bg-sky-500
                                ">
                                    {buttonText}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex justify-center">
                <div className="max-w-md md:max-w-5xl flex-grow pt-10">
                    {children}
                </div>
            </div>
        </LayoutDefault>
    );
}

export default LayoutWidget;