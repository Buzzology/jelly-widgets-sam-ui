import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import { CapitalizeFirstCharacter } from '../../utils/Helpers';
import WidgetValidator from './WidgetValidator';


export default function AustralianBusinessNumberValidator() {
    return (
        <WidgetValidator
            widgetId={EnumWidgetId.AUSTRALIAN_BUSINESS_NUMBER_VALIDATOR}
            labelText="Australian Business Number"
            prepareExecutePayload={(value) => ({ acn: value })}
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
                    <span className="font-bold text-green-500">{batchItem.data?.acn}</span> is a valid Australian Business Number.
                </p>
                <p className="pb-3">
                    The last number ({batchItem.data?.checkDigit}) is used as a check digit to ensure that the ABN is valid.
                </p>
            </div>
        );
    }

    return (
        <div className="text-gray-500 text-sm">
            <p className="pb-3">
                <span className="font-bold text-red-500">{batchItem.data?.originalAbn || "''"}</span> is an invalid Australian Business Number.
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