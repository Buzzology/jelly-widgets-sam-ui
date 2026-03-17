import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';


export default function NewZealandBusinessNumberGenerator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.NEW_ZEALAND_BUSINESS_NUMBER_GENERATOR}
            labelText="New Zealand Business Number (NZBN)"
            getGeneratedValue={(batchItem) => batchItem?.data?.formattedNzbn || batchItem?.data?.nzbn}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        The last digit ({batchItem?.data?.checkDigit || '-'}) is the GS1 Mod 10 check digit.
                    </div>
                ) : null
            )}
        />
    );
}
