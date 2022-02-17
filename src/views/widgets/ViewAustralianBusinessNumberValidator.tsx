import React from 'react';
import { Link } from 'react-router-dom';
import AustralianBusinessNumberValidator from '../../components/widgets/AustralianBusinessNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetAbnGeneratorLink, GetAcnGeneratorLink, GetAcnValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianBusinessNumberValidator() {
    useDocTitle("Australian Business Number (ABN) Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="ABN Validator"
            headerDescription="The ABN validator can be used to check if an Australian Business Number is valid."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Business Number Validator</h2>
                    The Australian Business Number (ABN) is a unique nine digit identifier issued to each business. They
                    often appear on letterheads and emails and other formal documents sent from the business.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    To validate an ABN type it into the text box and then click the button. We'll then check the value and display a 
                    message letting you know if it's valid.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianBusinessNumberValidator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample invalid Australian Business Numbers</h3>
                    Here are five invalid Australian Business Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>344655339</li>
                        <li>655339</li>
                        <li>123452367</li>
                        <li>4233452367</li>
                        <li>123456789</li>
                    </ul>
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample valid Australian Business Numbers</h3>
                    Here are five valid Australian Business Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>24627000186</li>
                        <li>84106286328</li>
                        <li>66221143411</li>
                        <li>73669984946</li>
                        <li>54083211670</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetAbnGeneratorLink()} className="text-link">Australian Business Number Generator</Link></li>
                        <li><Link to={GetAcnValidatorLink()} className="text-link">Australian Company Number Validator</Link></li>
                        <li><Link to={GetAcnGeneratorLink()} className="text-link">Australian Company Number Generator</Link></li>
                        <li>
                            <a
                                href="https://register.business.gov.au/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Registering a Business
                            </a>
                            <a
                                href="https://abr.business.gov.au/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ABN Lookup Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}