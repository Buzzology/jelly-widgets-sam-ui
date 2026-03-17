import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import { CapitalizeFirstCharacter } from '../../utils/Helpers';
import WidgetValidator from './WidgetValidator';


export default function NewZealandBankAccountValidator() {
    return (
        <WidgetValidator
            widgetId={EnumWidgetId.NEW_ZEALAND_BANK_ACCOUNT_VALIDATOR}
            labelText="NZ Bank Account Number"
            prepareExecutePayload={(value) => ({ accountNumber: value })}
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
                    <span className="font-bold text-green-500">{batchItem.data?.formattedAccount}</span> is a valid New Zealand bank account number.
                </p>
                {batchItem.data?.bankName && (
                    <p className="pb-3">
                        Bank: <span className="font-semibold">{batchItem.data.bankName}</span>
                    </p>
                )}
                {batchItem.data?.algorithm && (
                    <p className="pb-3">
                        Validated using Algorithm {batchItem.data.algorithm}.
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="text-gray-500 text-sm">
            <p className="pb-3">
                <span className="font-bold text-red-500">{batchItem.data?.formattedAccount || "Input"}</span> is not a valid New Zealand bank account number.
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
