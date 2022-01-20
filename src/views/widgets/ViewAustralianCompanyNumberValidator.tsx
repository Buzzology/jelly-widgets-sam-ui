import React from 'react';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';


export default function ViewAustralianCompanyNumberValidator() {
    return (
        <LayoutWidget
            title="Australian Company Number Validator"
            description="Validate Australian Company Numbers"
            loading={false}
            headerSlug="widgets"
            headerTitle="Acn Validator"
            headerDescription="Australian Company Number Validator"
            buttonText="Learn more"
            buttonLink="https://www.gov.au/business-and-industry/business-registration-and-tax/company-numbers-and-registration/company-numbers-and-registration-overview"
        >
            <AustralianCompanyNumberValidator />
        </LayoutWidget>
    )
}