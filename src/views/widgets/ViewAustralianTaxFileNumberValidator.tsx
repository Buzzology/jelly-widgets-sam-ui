import React from 'react';
import { Link } from 'react-router-dom';
import AustralianTaxFileNumberValidator from '../../components/widgets/AustralianTaxFileNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetTfnGeneratorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianTaxFileNumberValidator() {
    useDocTitle("Australian Tax File Number (TFN) Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="TFN Validator"
            headerDescription="The TFN validator can be used to check if an Australian Tax File Number is valid."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Tax File Number Validator</h2>
                    The Australian Company Number (TFN) is a unique nine digit personal reference used to identify
                    individuals in the Australian Tax and Super system. Individuals will keep the same TFN when they
                    change jobs, change their name and even if they move overseas.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    To validate a TFN type it into the text box and then click the button. We'll then check the value and display a 
                    message letting you know if it's valid.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianTaxFileNumberValidator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample invalid Australian Tax File Numbers</h3>
                    Here are five invalid Australian Tax  File Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>344655339</li>
                        <li>655339</li>
                        <li>123452367</li>
                        <li>4233452367</li>
                        <li>123456789</li>
                    </ul>
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample valid Australian Tax File Numbers</h3>
                    Here are five valid Australian Tax File Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>709185331</li>
                        <li>523018271</li>
                        <li>425782382</li>
                        <li>903295886</li>
                        <li>559141637</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetTfnGeneratorLink()} className="text-link">Australian Tax Number Generator</Link></li>
                        <li>
                            <a
                                href="https://www.ato.gov.au/Individuals/Tax-file-number"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Australian Taxation Office (ATO) overview of TFNs
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/Tax_file_number"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wikipedia article
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}