import React from 'react';
import { Link } from 'react-router-dom';
import AustralianBusinessNumberGenerator from '../../components/widgets/AustralianBusinessNumberGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetAbnValidatorLink, GetAcnGeneratorLink, GetAcnValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianBusinessNumberGenerator() {
    useDocTitle("Australian Business Number (ABN) Generator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="ABN Generator"
            headerDescription="The ABN generator can be used to create valid Australian Business Numbers."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Business Number Generator</h2>
                    The Australian Business Number (ABN) is a unique nine digit identifier issued to each business. They
                    often appear on letterheads and emails and other formal documents sent from the business.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the generator</h2>
                    To generate a new ABN simply click the generate button. We'll create a random, valid Australian Business Number
                    and display it on the page for you. These ABNs are free to use to validation and testing purposes.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianBusinessNumberGenerator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample Australian Business Numbers</h3>
                    Here are three test Australian Business Numbers, you can generate more using the tool above:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>78811049217</li>
                        <li>69602105448</li>
                        <li>59137548193</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful Links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetAbnValidatorLink()} className="text-link">Australian Business Number Validator</Link></li>
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