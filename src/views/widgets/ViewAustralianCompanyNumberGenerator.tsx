import React from 'react';
import AustralianCompanyNumberGenerator from '../../components/widgets/AustralianCompanyNumberGenerator';
import LayoutWidget from '../../layouts/LayoutWidget';


export default function ViewAustralianCompanyNumberGenerator() {
    return (
        <LayoutWidget
            title="Australian Company Number Generator"
            description="Generate Australian Company Numbers"
            loading={false}
        >
            <AustralianCompanyNumberGenerator />
        </LayoutWidget>
    )
}