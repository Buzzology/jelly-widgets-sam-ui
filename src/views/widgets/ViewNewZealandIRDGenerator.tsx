import React from 'react';
import { Link } from 'react-router-dom';
import NewZealandIRDGenerator from '../../components/widgets/NewZealandIRDGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetIrdValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianTaxFileNumberGenerator() {
    useDocTitle("New Zealand Inland Revenue Department (IRD) Number Generator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="IRD Generator"
            headerDescription="The IRD generator can be used to create valid New Zealand IRD numbers."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">New Zealand IRD Number Generator</h2>
                    The New Zealand Inland Revenue Department (IRD) number is an eight or nine digit identifier used to reference individuals 
                    in tax systems for both residents and non-residents. This tool will allow you to generate a valid test IRD number.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the generator</h2>
                    To generate a new IRD number simply click the generate button. We'll create a random, valid IRD number
                    and display it on the page for you. These IRDs are free to use to validation and testing purposes.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <NewZealandIRDGenerator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample IRD Numbers</h3>
                    Here are three test New Zealand IRD Numbers, you can generate more using the tool above:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>011293593</li>
                        <li>140634255</li>
                        <li>056927379</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful Links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetIrdValidatorLink()} className="text-link">New Zealand IRD Number Validator</Link></li>
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