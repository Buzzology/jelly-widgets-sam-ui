import React from 'react';
import { Link } from 'react-router-dom';
import AustralianMedicareNumberGenerator from '../../components/widgets/AustralianMedicareNumberGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetMedicareValidatorLink } from '../../routes/RouteLinkHelpers';

export default function ViewAustralianMedicareNumberGenerator() {
    useDocTitle("Australian Medicare Number Generator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="Medicare Number Generator"
            headerDescription="The Medicare Number generator can be used to create valid Australian Medicare Numbers."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Medicare Number Generator</h2>
                    The Australian Medicare Number is a unique eleven digit identifier issued to each individual. They
                    are used on Medicare cards and is often required when accessing healthcare services.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the generator</h2>
                    To generate a new Medicare Number simply click the generate button. We'll create a random, valid Australian Medicare Number
                    and display it on the page for you. These Medicare Numbers are free to use for validation and testing purposes.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianMedicareNumberGenerator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl pb-4">Sample Australian Medicare Numbers</h3>
                    Here are three test Australian Medicare Numbers, you can generate more using the tool above:
                    <ul className="pl-8 pt-4 list-disc">
                        <li>21234567012</li>
                        <li>31363756402</li>
                        <li>50287034566</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful Links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetMedicareValidatorLink()} className="text-link">Australian Medicare Number Validator</Link></li>
                        <li>
                            <a
                                href="https://www.servicesaustralia.gov.au/individuals/subjects/how-enrol-and-get-started-medicare"
                                className="text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Services Australia overview of Medicare
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}