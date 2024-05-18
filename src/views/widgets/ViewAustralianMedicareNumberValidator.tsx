import React from 'react';
import { Link } from 'react-router-dom';
import AustralianMedicareNumberValidator from '../../components/widgets/AustralianMedicareNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';
import { useDocTitle } from '../../routes/Hooks';
import { GetMedicareGeneratorLink } from '../../routes/RouteLinkHelpers';

export default function ViewAustralianMedicareNumberValidator() {
    useDocTitle("Australian Medicare Number Validator");

    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="Medicare Number Validator"
            headerDescription="The Medicare Number validator can be used to check if an Australian Medicare Number is valid."
            buttonText="More Widgets"
            buttonLink="/widgets"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl pb-4">Australian Medicare Number Validator</h2>
                    The Australian Medicare Number is a unique eleven digit identifier (including IRN) issued to each individual. They
                    often appear on Medicare cards and other formal documents.
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl pb-4">Using the validator</h2>
                    To validate a Medicare Number, type it into the text box and then click the button. We'll then check the value and display a 
                    message letting you know if it's valid.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianMedicareNumberValidator />
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl pb-4">Useful links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul className="pl-8 pt-4 list-disc">
                        <li><Link to={GetMedicareGeneratorLink()} className="text-link">Australian Medicare Number Generator</Link></li>
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