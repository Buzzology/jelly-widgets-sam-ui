import React from 'react';
import AustralianCompanyNumberValidator from '../../components/widgets/AustralianCompanyNumberValidator';
import LayoutWidget from '../../layouts/LayoutWidget';


export default function ViewAustralianCompanyNumberValidator() {
    return (
        <LayoutWidget
            title="Australian Company Number Validator"
            description="Validate Australian Company Numbers"
            loading={false}
        >
            <AustralianCompanyNumberValidator />
        </LayoutWidget>
    )
}