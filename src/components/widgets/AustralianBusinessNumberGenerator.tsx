import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';


export default function AustralianBusinessNumberGenerator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.AUSTRALIAN_BUSINESS_NUMBER_GENERATOR}
            labelText="Australian Business Number"
            getGeneratedValue={(batchItem) => batchItem?.data?.acn}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        The last number ({batchItem.data?.checkDigit}) is used as a check digit to ensure that the ABN is valid.
                    </div>
                ) : null
            )}
        />
    );
}