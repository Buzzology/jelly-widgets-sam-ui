import React from 'react';
import { Link } from 'react-router-dom';
import AustralianBsbValidator from '../../components/widgets/AustralianBsbValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetIbanValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewAustralianBsbValidator() {
    useDocTitle("Australian BSB Validator + Lookup");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="Australian BSB Validator"
            headerDescription="Validate and look up Australian BSB (Bank State Branch) numbers using the AusPayNet directory."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian BSB Validator + Lookup</h2>
                    The BSB (Bank State Branch) is a six-digit code used to identify individual branches of financial institutions
                    in Australia. This tool validates the format and looks up branch details from the embedded AusPayNet BSB directory,
                    including the institution name, branch address, and supported payment types.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    Enter a 6-digit BSB (e.g. "062-000" or "062000") and click validate. We'll look up the branch details and
                    display the institution, address, and payment flags.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianBsbValidator />
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">What is returned?</h3>
                    <ul className="pl-8 pt-2 list-disc">
                        <li>Financial institution name and mnemonic (e.g. CBA, ANZ, WBC, NAB)</li>
                        <li>Branch name and address</li>
                        <li>Payment flags (Paper, Electronic, High Value)</li>
                        <li>Closed and merged branch detection with redirect BSBs</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetIbanValidatorLink()} className="text-link">IBAN Validator</Link></li>
                        <li>
                            <a
                                href="https://bsb.auspaynet.com.au/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                AusPayNet BSB Directory
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}
