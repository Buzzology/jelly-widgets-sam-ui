import React from 'react';
import { Link } from 'react-router-dom';
import NewZealandBusinessNumberValidator from '../../components/widgets/NewZealandBusinessNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetNzbnGeneratorLink } from '../../routes/RouteLinkHelpers';


export default function ViewNewZealandBusinessNumberValidator() {
    useDocTitle("New Zealand Business Number (NZBN) Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="NZBN Validator"
            headerDescription="Validate New Zealand Business Numbers (NZBNs) using the GS1 Mod 10 check digit algorithm."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">New Zealand Business Number (NZBN) Validator</h2>
                    The NZBN is a unique 13-digit identifier assigned to every New Zealand business entity. This validator checks
                    the format, verifies the GS1 Mod 10 check digit, and confirms the NZ country prefix ("94"). Note that this
                    performs mathematical validation only — it does not verify whether the NZBN is actually registered.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    Enter a 13-digit NZBN (with or without spaces/hyphens) and click validate. We'll check the format and
                    verify the check digit.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <NewZealandBusinessNumberValidator />
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetNzbnGeneratorLink()} className="text-link">New Zealand Business Number Generator</Link></li>
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
