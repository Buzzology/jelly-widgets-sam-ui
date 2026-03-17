import React from 'react';
import { Link } from 'react-router-dom';
import IbanValidator from '../../components/widgets/IbanValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetAuBsbValidatorLink, GetNzBankAccountValidatorLink } from '../../routes/RouteLinkHelpers';


export default function ViewIbanValidator() {
    useDocTitle("IBAN Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="IBAN Validator"
            headerDescription="Validate International Bank Account Numbers (IBANs) using the ISO 13616 MOD 97 algorithm. Supports 89+ countries."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">IBAN Validator</h2>
                    The International Bank Account Number (IBAN) is an internationally agreed system of identifying bank accounts
                    across national borders. This validator supports 89+ countries, checking the country code, length, and MOD 97
                    check digits according to ISO 13616. Note that validation confirms the IBAN is mathematically correct — it
                    does not verify whether the account actually exists.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    Enter an IBAN in any format — with or without spaces, hyphens, or lowercase letters. For example:
                    "GB29 NWBK 6016 1331 9268 19" or "gb29nwbk60161331926819". We'll normalise the input and validate it.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <IbanValidator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample valid IBANs</h3>
                    Here are some valid IBANs that can be used for testing:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>GB29 NWBK 6016 1331 9268 19 (United Kingdom)</li>
                        <li>DE89 3704 0044 0532 0130 00 (Germany)</li>
                        <li>FR76 3000 6000 0112 3456 7890 189 (France)</li>
                        <li>NO93 8601 1117 947 (Norway)</li>
                        <li>CH93 0076 2011 6238 5295 7 (Switzerland)</li>
                    </ul>
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample invalid IBANs</h3>
                    Here are some invalid inputs for testing error messages:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>GB94 BARC 2020 1530 0934 59 (wrong check digits)</li>
                        <li>US12 3456 7890 1234 5678 90 (US doesn't use IBAN)</li>
                        <li>GB00 NWBK 6016 1331 9268 19 (check digits "00" impossible)</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetAuBsbValidatorLink()} className="text-link">Australian BSB Validator</Link></li>
                        <li><Link to={GetNzBankAccountValidatorLink()} className="text-link">New Zealand Bank Account Validator</Link></li>
                        <li>
                            <a
                                href="https://www.iban.com/structure"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IBAN.com — Structure &amp; Examples
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/International_Bank_Account_Number"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wikipedia — IBAN
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}
