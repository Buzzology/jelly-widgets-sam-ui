import React from 'react';
import AustralianCompanyNumberGenerator from '../../components/widgets/AustralianCompanyNumberGenerator';
import LayoutWidget from '../../layouts/layoutWidget/LayoutWidget';


export default function ViewAustralianCompanyNumberGenerator() {
    return (
        <LayoutWidget
            title="Australian Company Number Generator"
            description="Generate Australian Company Numbers"
            loading={false}
            headerSlug="widgets"
            headerTitle="ACN Generator"
            headerDescription="The ACN generator can be used to create valid Australian Company Numbers."
            buttonText="Learn more"
            buttonLink="https://www.gov.au/business-and-industry/business-registration-and-tax/company-numbers-and-registration/company-numbers-and-registration-overview"
        >
            <AustralianCompanyNumberGenerator />
        </LayoutWidget>
    )
}