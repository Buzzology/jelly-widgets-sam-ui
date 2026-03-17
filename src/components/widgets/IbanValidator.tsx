import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import { CapitalizeFirstCharacter } from '../../utils/Helpers';
import WidgetValidator from './WidgetValidator';


export default function IbanValidator() {
    return (
        <WidgetValidator
            widgetId={EnumWidgetId.IBAN_VALIDATOR}
            labelText="IBAN"
            prepareExecutePayload={(value) => ({ iban: value })}
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
                    <span className="font-bold text-green-500">{batchItem.data?.formattedIban}</span> is a valid IBAN.
                </p>
                {batchItem.data?.countryName && (
                    <p className="pb-3">
                        Country: <span className="font-semibold">{batchItem.data.countryName}</span> ({batchItem.data?.countryCode})
                    </p>
                )}
                {batchItem.data?.bban && (
                    <p className="pb-3">
                        BBAN: {batchItem.data.bban} &nbsp;|&nbsp; Check digits: {batchItem.data?.checkDigits}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="text-gray-500 text-sm">
            <p className="pb-3">
                <span className="font-bold text-red-500">{batchItem.data?.formattedIban || batchItem.data?.iban || "Input"}</span> is not a valid IBAN.
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
