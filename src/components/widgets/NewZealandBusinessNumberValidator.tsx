import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import { CapitalizeFirstCharacter } from '../../utils/Helpers';
import WidgetValidator from './WidgetValidator';


export default function NewZealandBusinessNumberValidator() {
    return (
        <WidgetValidator
            widgetId={EnumWidgetId.NEW_ZEALAND_BUSINESS_NUMBER_VALIDATOR}
            labelText="New Zealand Business Number (NZBN)"
            prepareExecutePayload={(value) => ({ nzbn: value })}
            getAdditionalInfoNodes={getAdditionalInfoNodes}
        />
    )
}

function getAdditionalInfoNodes(batchItem?: WidgetExecuteBatchResponseItem) {
    if (!batchItem) {
        return null;
    }

    if (batchItem?.data?.valid) {
        return (
            <div className="text-gray-500 text-sm">
                <p className="pb-3">
                    <span className="font-bold text-green-500">{batchItem.data?.formattedNzbn || batchItem.data?.nzbn}</span> is a valid New Zealand Business Number.
                </p>
                <p className="pb-3">
                    The last digit ({batchItem.data?.checkDigit}) is the GS1 Mod 10 check digit.
                </p>
            </div>
        );
    }

    return (
        <div className="text-gray-500 text-sm">
            <p className="pb-3">
                <span className="font-bold text-red-500">{batchItem.data?.cleanedInput || "Input"}</span> is not a valid New Zealand Business Number.
            </p>
            {batchItem.messages.map((message, index) => (
                message.message ? (
                    <p className="disc" key={`message-${index}`}>
                        {CapitalizeFirstCharacter(message.message)}
                    </p>
                ) : null
            ))}
        </div>
    )
}
