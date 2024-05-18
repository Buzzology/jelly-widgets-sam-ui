import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';

export default function AustralianMedicareNumberGenerator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.AUSTRALIAN_MEDICARE_NUMBER_GENERATOR}
            labelText="Australian Medicare Number"
            getGeneratedValue={(batchItem) => batchItem?.data?.medicareNumber}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        The ninth number ({batchItem.data?.checkDigit}) is used as a check digit to ensure that the Medicare number is valid.
                    </div>
                ) : null
            )}
        />
    );
}