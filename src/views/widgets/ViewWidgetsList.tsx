import React from 'react';
import { Link } from 'react-router-dom';
import AustralianCompanyNumberGenerator from '../../components/widgets/AustralianCompanyNumberGenerator';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import AustralianTaxFileNumberGenerator from '../../components/widgets/AustralianTaxFileNumberGenerator';
import AustralianTaxFileNumberValidator from '../../components/widgets/AustralianTaxFileNumberValidator';
import NewZealandIRDGenerator from '../../components/widgets/NewZealandIRDGenerator';
import NewZealandIRDValidator from '../../components/widgets/NewZealandIRDValidator';
import WidgetSkeletonLoader from '../../components/widgets/WidgetSkeletonLoader';
import LayoutDefault from '../../layouts/LayoutDefault';
import LayoutHeadingBlock from '../../layouts/layoutWidget/LayoutHeadingBlock';
import { useDocTitle } from '../../routes/Hooks';
import { GetAcnGeneratorLink, GetAcnValidatorLink, GetIrdGeneratorLink, GetIrdValidatorLink, GetTfnGeneratorLink, GetTfnValidatorLink } from '../../routes/RouteLinkHelpers';
import AustralianMedicareNumberValidator from '../../components/widgets/AustralianMedicareNumberValidator';
import AustralianMedicareNumberGenerator from '../../components/widgets/AustralianMedicareNumberGenerator';


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
            <div className="min-h-screen flex justify-center p-6">
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

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Medicare Number Generator</h2>
                            This tool was released on the 18th May 2024. It can be used to generate valid Australian Medicare Numbers.&nbsp;
                            <Link to="/widgets/medicare-number-generator" className="text-link">Click here to generate a Medicare Number.</Link>
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <AustralianMedicareNumberGenerator />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Business Number Validator</h2>
                            An Australian Business Number (ABN) validator will be built soon.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Business Number Generator</h2>
                            An Australian Business Number (ABN) generator will be built soon.
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <WidgetSkeletonLoader />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <AustralianTaxFileNumberValidator />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Tax File Number Validator</h2>
                            The Australian Tax File Number (TFN) validator is now available. <Link to={GetTfnValidatorLink()} className="text-link">Click here to validate your TFN.</Link>
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Tax File Number Generator</h2>
                            The Australian Tax File Number generator we built on <a className="text-link" href="https://whatibroke.com/2013/07/24/tfn-generator" target="_blank" rel="noreferrer">whatibroke</a>
                            &nbsp;was ported over at the same time as the TFN validator. <Link to={GetTfnGeneratorLink()} className="text-link">Click here to generate a TFN.</Link>
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <AustralianTaxFileNumberGenerator />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <NewZealandIRDValidator />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">New Zealand IRD Validator</h2>
                            The New Zealand Internal Revenue Department (IRD) number validator is now available. <Link to={GetIrdValidatorLink()} className="text-link">Click
                            here to validate your IRD number.</Link>
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">New Zealand IRD Generator</h2>
                            The New Zealand Internal Revenue Department (IRD) number generator is now available. <Link to={GetIrdGeneratorLink()} className="text-link">Click
                            here to generate a test IRD number.</Link>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <NewZealandIRDGenerator />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <AustralianMedicareNumberValidator />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h2 className="text-3xl pb-4">Australian Medicare Number Validator</h2>
                            The Australian Medicare Number validator can be used to check if an Australian Medicare Number is valid.&nbsp;
                            <Link to="/widgets/medicare-number-validator" className="text-link">Click here to validate a Medicare Number.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}