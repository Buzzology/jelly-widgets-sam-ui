import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';


export default function AustralianTaxFileNumberGenerator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_GENERATOR}
            labelText="Australian TFN"
            getGeneratedValue={(batchItem) => batchItem?.data?.tfn}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        The last number ({batchItem.data?.checkDigit}) is used as a check digit to ensure that the TFN is valid.
                    </div>
                ) : null
            )}
        />
    );
}
