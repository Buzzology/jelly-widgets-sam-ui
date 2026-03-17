import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import WidgetGenerator from './WidgetGenerator';


export default function NewZealandIRDV2Generator() {
    return (
        <WidgetGenerator
            widgetId={EnumWidgetId.NEW_ZEALAND_IRD_V2_GENERATOR}
            labelText="New Zealand IRD (Post April 2026)"
            getGeneratedValue={(batchItem) => batchItem?.data?.ird}
            getAdditionalInfoNodes={(batchItem) => (
                batchItem ? (
                    <div className="text-gray-500 text-sm">
                        The last number of an IRD is used as a check digit ({batchItem?.data?.firstCheckDigit || '-'}).
                    </div>
                ) : null
            )}
        />
    );
}
