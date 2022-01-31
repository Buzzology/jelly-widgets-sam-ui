import React from 'react';
import { Link } from 'react-router-dom';
import AustralianTaxFileNumberGenerator from '../../components/widgets/AustralianTaxFileNumberGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetTfnValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianTaxFileNumberGenerator() {
    useDocTitle("Australian Tax File Number (TFN) Generator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="TFN Generator"
            headerDescription="The TFN generator can be used to create valid Australian Tax File Numbers."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Tax File Number Generator</h2>
                    The Australian Tax File Number (TFN) is a nine digit identifier used to reference individuals 
                    in the tax and super systems. This tool will allow you to generate a valid test TFN.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the generator</h2>
                    To generate a new TFN simply click the generate button. We'll create a random, valid Australian Tax File Number
                    and display it on the page for you. These TFNs are free to use to validation and testing purposes.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianTaxFileNumberGenerator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample Australian Tax File Numbers</h3>
                    Here are three test Australian Tax File Numbers, you can generate more using the tool above:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>378067250</li>
                        <li>711838179</li>
                        <li>226799598</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful Links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetTfnValidatorLink()} className="text-link">Australian Tax File Number Validator</Link></li>
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
                        <li>
                            <a
                                href="https://www.ato.gov.au/Forms/PAYG-payment-summary---individual-non-business/?page=3"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Special TFNs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}