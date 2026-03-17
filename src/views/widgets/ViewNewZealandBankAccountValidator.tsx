import React from 'react';
import { Link } from 'react-router-dom';
import NewZealandBankAccountValidator from '../../components/widgets/NewZealandBankAccountValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetIbanValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewNewZealandBankAccountValidator() {
    useDocTitle("New Zealand Bank Account Number Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="NZ Bank Account Validator"
            headerDescription="Validate New Zealand bank account numbers using the official IRD check digit algorithms."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">New Zealand Bank Account Number Validator</h2>
                    The New Zealand bank account number is an 18-digit identifier in the format BB-bbbb-AAAAAAA-SSS (bank-branch-account-suffix).
                    This validator checks the format, verifies the bank and branch against the official register, and runs the appropriate
                    check digit algorithm (A, B, D, E, F, G, or X) for the specific bank.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    Enter a bank account number in the format "01-0902-0068389-00" (with hyphens or spaces separating the four parts).
                    We'll verify the bank, branch, and check digit for you.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <NewZealandBankAccountValidator />
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">What is validated?</h3>
                    <ul className="pl-8 pt-2 list-disc">
                        <li>Bank ID is a recognised NZ bank (e.g. 01 = ANZ, 02 = BNZ, 03 = Westpac)</li>
                        <li>Branch number is within the valid range for that bank</li>
                        <li>Check digit passes the correct algorithm for the bank</li>
                        <li>Account number format is correct (4 hyphen-separated parts)</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetIbanValidatorLink()} className="text-link">IBAN Validator</Link></li>
                        <li>
                            <a
                                href="https://www.ird.govt.nz/"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                New Zealand Inland Revenue Department
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}
