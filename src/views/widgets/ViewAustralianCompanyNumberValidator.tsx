import React from 'react';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';


export default function ViewAustralianCompanyNumberValidator() {
    return (
        <LayoutWidget
            loading={false}
            headerSlug="widgets"
            headerTitle="Acn Validator"
            headerDescription="The ACN validator can be used to check if an Australian Company Number is valid."
            buttonText="Learn more"
            buttonLink="https://www.gov.au/business-and-industry/business-registration-and-tax/company-numbers-and-registration/company-numbers-and-registration-overview"
        >
            <AustralianCompanyNumberValidator />
        </LayoutWidget>
    )
}