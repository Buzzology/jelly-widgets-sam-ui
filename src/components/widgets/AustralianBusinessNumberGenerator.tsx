import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';


export default function AustralianBusinessNumberGenerator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.AUSTRALIAN_BUSINESS_NUMBER_GENERATOR}
            labelText="Australian Business Number"
            getGeneratedValue={(batchItem) => batchItem?.data?.abn}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        The first two numbers ({batchItem.data?.checkDigit}) are used as check digits to ensure that the ABN is valid.
                    </div>
                ) : null
            )}
        />
    );
}