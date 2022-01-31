import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import { CapitalizeFirstCharacter } from '../../utils/Helpers';
import WidgetValidator from './WidgetValidator';


export default function AustralianTaxFileNumberValidator() {
    return (
        <WidgetValidator
            widgetId={EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_VALIDATOR}
            labelText="Australian TFN"
            prepareExecutePayload={(value) => ({ tfn: value })}
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
                    <span className="font-bold text-green-500">{batchItem.data?.tfn}</span> is a valid Australian Tax File Number.
                </p>
                <p className="pb-3">
                    The last number ({batchItem?.data?.tfn?.slice(-1)}) is used as a check digit to ensure that the TFN is valid.
                </p>
            </div>
        );
    }

    return (
        <div className="text-gray-500 text-sm">
            <p className="pb-3">
                <span className="font-bold text-red-500">{batchItem.data?.originalTfn || "''"}</span> is an invalid Australian Tax File Number.
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