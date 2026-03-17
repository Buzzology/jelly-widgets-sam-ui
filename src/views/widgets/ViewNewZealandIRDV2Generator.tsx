import React from 'react';
import { Link } from 'react-router-dom';
import NewZealandIRDV2Generator from '../../components/widgets/NewZealandIRDV2Generator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetIrdV2ValidatorLink, GetIrdGeneratorLink } from '../../routes/RouteLinkHelpers';


export default function ViewNewZealandIRDV2Generator() {
    useDocTitle("New Zealand IRD Number Generator (Post April 2026)");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="IRD Generator (Post April 2026)"
            headerDescription="The updated IRD generator can create valid New Zealand IRD numbers up to 200,000,000, effective from 1 April 2026."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">New Zealand IRD Number Generator (Post April 2026)</h2>
                    The New Zealand Inland Revenue Department (IRD) number is an eight or nine digit identifier used to reference individuals
                    in tax systems for both residents and non-residents. This updated generator can produce valid IRD numbers in the
                    expanded range up to 200,000,000, reflecting the rule change effective from 1 April 2026.
                </div>

                <div className="col-span-12 md:col-span-7">
                    <h3 className="text-2xl pb-4">What changed?</h3>
                    <p className="pb-3">
                        As part of their annual updates, the New Zealand Inland Revenue Department has increased the maximum valid IRD number
                        from 150,000,000 to 200,000,000, effective 1 April 2026. The length of IRD numbers remains unchanged at 8-9 digits,
                        and the check digit algorithm is the same.
                    </p>
                    <p className="pb-3">
                        Most organisations will not need to take action, as the change will be managed by their intermediaries or digital
                        service providers. Only organisations using custom systems, or who perform manual IRD number checks, will need to
                        ensure their validation accepts numbers in the new range.
                    </p>
                    <p>
                        For the original announcement, see:&nbsp;
                        <a
                            href="https://www.ird.govt.nz/updates/news-folder/2026/increase-to-ird-number-validation-upper-limit"
                            className="text-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Increase to IRD number validation upper limit (ird.govt.nz)
                        </a>
                    </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the generator</h2>
                    To generate a new IRD number simply click the generate button. We'll create a random, valid IRD number
                    and display it on the page for you. This version can generate numbers in the expanded range up to 200,000,000.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <NewZealandIRDV2Generator />
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
                        <li><Link to={GetIrdV2ValidatorLink()} className="text-link">New Zealand IRD Number Validator (Post April 2026)</Link></li>
                        <li><Link to={GetIrdGeneratorLink()} className="text-link">New Zealand IRD Number Generator (Pre April 2026)</Link></li>
                        <li>
                            <a
                                href="https://www.ird.govt.nz/updates/news-folder/2026/increase-to-ird-number-validation-upper-limit"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IRD announcement: Increase to IRD number validation upper limit
                            </a>
                        </li>
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
