import React from 'react';
import { Link } from 'react-router-dom';
import NewZealandIRDValidator from '../../components/widgets/NewZealandIRDValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetIrdGeneratorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianTaxFileNumberValidator() {
    useDocTitle("New Zealand Inland Revenue Department (IRD) Number Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="IRD Number Validator"
            headerDescription="The IRD number validator can be used to check if a New Zealand IRD number is valid."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">New Zealand IRD Number Validator</h2>
                    The New Zealand Inland Revenue Department (IRD) number is an eight or nine digit identifier used to reference individuals 
                    in tax systems. This tool will allow you to validate a provided IRD number to ensure that it is valid.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    To validate an IRD number type it into the text box and then press the button. We'll check the value and display a 
                    message letting you know if it's valid.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <NewZealandIRDValidator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample invalid New Zealand IRD Numbers</h3>
                    Here are five invalid IRD Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>356141332</li>
                        <li>655339</li>
                        <li>124141332</li>
                        <li>4233452367</li>
                        <li>137141332</li>
                    </ul>
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample valid Australian Tax File Numbers</h3>
                    Here are five valid Australian Tax File Numbers that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>092791947</li>
                        <li>117120082</li>
                        <li>038542052</li>
                        <li>092385779</li>
                        <li>110173148</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetIrdGeneratorLink()} className="text-link">New Zealand IRD Number Generator</Link></li>
                        <li>
                            <a
                                href="https://www.govt.nz/browse/tax-benefits-and-finance/ird-numbers/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                New Zealand Government's overview of IRD numbers
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.ird.govt.nz/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                New Zealand Internal Revenue Department
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}