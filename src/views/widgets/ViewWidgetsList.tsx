import React from 'react';
import { Link } from 'react-router-dom';
import AustralianCompanyNumberGenerator from '../../components/widgets/AustralianCompanyNumberGenerator';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import WidgetSkeletonLoader from '../../components/widgets/WidgetSkeletonLoader';
import LayoutDefault from '../../layouts/LayoutDefault';
import LayoutHeadingBlock from '../../layouts/layoutWidget/LayoutHeadingBlock';
import { useDocTitle } from '../../routes/Hooks';
import { GetAcnGeneratorLink, GetAcnValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewWidgetsList() {
    useDocTitle("Generators and Validators");

    return (
        <LayoutDefault
            loading={false}
        >
            <LayoutHeadingBlock
                headerSlug="Widgets"
                headerTitle="Generators and Validators"
                headerDescription="Create valid test samples and validate your input. Let us know if there's another tool that you'd like us to build!"
                buttonText="Contact"
                buttonLink="/contact"
            />
            <div className="min-h-screen flex justify-center">
                <div className="max-w-md md:max-w-5xl flex-grow pt-10 pb-10">
                    <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Company Number Generator</h2>
                            The Australian Company Number (ACN) is a unique nine digit identifier issued to each company. They
                            often appear on letterheads and emails and other formal documents sent from the company. This tool
                            can be used to create sample ACNs for testing.
                            &nbsp;<Link to={GetAcnGeneratorLink()} className="text-link">Click here to learn more.</Link>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <AustralianCompanyNumberGenerator />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <AustralianCompanyNumberValidator />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Company Number Validator</h2>
                            Use this tool to test whether a provided Australian Company Number (ACN) is valid. This tool
                            will ensure the number is the correct length and that the checksum is correct.
                            &nbsp;<Link to={GetAcnValidatorLink()} className="text-link">Click here to learn more.</Link>
                        </div>

                        {/* HERE */}

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Medicare Number Generator</h2>
                            The next tool on our roadmap is an Australian Medicare Number generator. This will be
                            released on the 31st January 2022.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Business Number Validator</h2>
                            An Australian Business Number (ABN) validator will be built by the 8th February 2022.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Business Number Generator</h2>
                            An Australian Business Number (ABN) generator will be built by the 15th February 2022.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Tax File Number Validator</h2>
                            The Australian Tax File Number (TFN) validator will be ready by the 22nd February 2022.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Tax File Number Generator</h2>
                            The Australian Tax File Number generator we've built on <a className="text-link" href="https://whatibroke.com/2013/07/24/tfn-generator" target="_blank" rel="no-referrer">whatibroke</a>
                            &nbsp;will be ported over at the same time as the TFN validator (22nd February 2022).
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">New Zealand IRD Validator</h2>
                            We've been getting requests for this one for quite some time. We will have it ready by the 1st March.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">New Zealand IRD Generator</h2>
                            The IRD generator will be created at the same time as the validator and be ready to be used on the 1st March.
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Medicare Number Validator</h2>
                            We'll have finished the Australian Medicare Number validator and have it delivered
                            by the 8th March.
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}