import React from 'react';
import { Link } from 'react-router-dom';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { GetAcnGeneratorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianCompanyNumberValidator() {
    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="ACN Validator"
            headerDescription="The ACN validator can be used to check if an Australian Company Number is valid."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Company Number Validator</h2>
                    The Australian Company Number (ACN) is a unique nine digit identifier issued to each company. They
                    often appear on letterheads and emails and other formal documents sent from the company.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    To validate an ACN type it into the text box and then click the button. We'll then check the value and display a 
                    message letting you know if it's valid.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianCompanyNumberValidator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample invalid Australian Company Numbers</h3>
                    Here are five invalid Australian Company Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>344655339</li>
                        <li>655339</li>
                        <li>123452367</li>
                        <li>4233452367</li>
                        <li>123456789</li>
                    </ul>
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample valid Australian Company Numbers</h3>
                    Here are five valid Australian Company Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>311811711</li>
                        <li>788849847</li>
                        <li>167493610</li>
                        <li>940695796</li>
                        <li>165339800</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetAcnGeneratorLink()} className="text-link">Australian Company Number Generator</Link></li>
                        <li>
                            <a
                                href="https://asic.gov.au/for-business/registering-a-company/steps-to-register-a-company/australian-company-numbers/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ASIC overview of ACNs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}