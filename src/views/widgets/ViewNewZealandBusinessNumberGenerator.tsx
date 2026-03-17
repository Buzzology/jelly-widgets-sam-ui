import React from 'react';
import { Link } from 'react-router-dom';
import NewZealandBusinessNumberGenerator from '../../components/widgets/NewZealandBusinessNumberGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetNzbnValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewNewZealandBusinessNumberGenerator() {
    useDocTitle("New Zealand Business Number (NZBN) Generator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="NZBN Generator"
            headerDescription="Generate valid test New Zealand Business Numbers (NZBNs) for development and testing."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">New Zealand Business Number (NZBN) Generator</h2>
                    The NZBN is a unique 13-digit identifier assigned to every New Zealand business entity. It uses the GS1 GTIN-13
                    format with a Modulo 10 check digit. This tool generates mathematically valid NZBNs for testing — they are
                    not registered numbers.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Generate a test NZBN</h2>
                    Click the button to generate a random, mathematically valid NZBN. Generated numbers use the "9429" prefix
                    (NZ GS1 country code) and include a valid check digit.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <NewZealandBusinessNumberGenerator />
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetNzbnValidatorLink()} className="text-link">New Zealand Business Number Validator</Link></li>
                        <li>
                            <a
                                href="https://www.nzbn.govt.nz/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                NZBN Register (nzbn.govt.nz)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}
