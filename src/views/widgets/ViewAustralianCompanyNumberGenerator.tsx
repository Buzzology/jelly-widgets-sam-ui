import React from 'react';
import AustralianCompanyNumberGenerator from '../../components/widgets/AustralianCompanyNumberGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';


export default function ViewAustralianCompanyNumberGenerator() {
    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="ACN Generator"
            headerDescription="The ACN generator can be used to create valid Australian Company Numbers."
            buttonText="Learn more"
            buttonLink="https://www.gov.au/business-and-industry/business-registration-and-tax/company-numbers-and-registration/company-numbers-and-registration-overview"
        >
            <div className="grid gap-y-10 md:gap-y-40  md:gap-x-20 grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-3xl">Australian Company Number Generator</h2>
                    The Australian Company Number (ACN) is a unique nine digit identifier issued to each company. They
                    often appear on letterheads and emails and other formal documents sent from the company. 
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl">Using the generator</h2>
                    To generate a new ACN simply click the generate button. We'll create a random, valid Australian Company Number
                    and display it on the page for you. These ACNs are free to use to validation and testing purposes.
                </div>

                <div className="col-span-12 md:col-span-6 md:text-right">
                    <AustralianCompanyNumberGenerator />
                </div>

                <div className="col-span-12  md:col-span-6">
                    <h3 className="text-2xl">Sample Australian Company Numbers</h3>
                    Here are three test Australian Company Numbers, you can generate more using the tool above:
                    <ul className="pl-10">
                        <li>406655338</li>
                        <li>360309968</li>
                        <li>296677524</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl">Useful Links</h3>
                    There are a number of additional resources that may be helpful when using this tool:
                    <ul>
                        <li>TODO: LINK Australian Company Number Validator</li>
                        <li>TODO: ASIC overview of ACNs: https://asic.gov.au/for-business/registering-a-company/steps-to-register-a-company/australian-company-numbers/</li>
                    </ul>
                </div>
            </div>
        </LayoutWidget>
    )
}