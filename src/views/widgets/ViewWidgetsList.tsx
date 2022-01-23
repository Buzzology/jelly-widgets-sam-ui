import React from 'react';
import { Link } from 'react-router-dom';
import AustralianCompanyNumberGenerator from '../../components/widgets/AustralianCompanyNumberGenerator';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import LayoutDefault from '../../layouts/LayoutDefault';
import LayoutHeadingBlock from '../../layouts/layoutWidget/LayoutHeadingBlock';
import { GetAcnGeneratorLink, GetAcnValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewWidgetsList() {
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
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}