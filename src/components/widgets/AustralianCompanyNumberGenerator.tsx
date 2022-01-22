import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';


export default function AustralianCompanyNumberGenerator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR}
            labelText="Australian Company Number"
            getGeneratedValue={(batchItem) => batchItem?.data?.acn}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        Check Digit: {batchItem?.data?.checkDigit}
                    </div>
                ) : null
            )}
        />
    );
}