import React from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import { CapitalizeFirstCharacter } from '../../utils/Helpers';
import WidgetValidator from './WidgetValidator';


export default function AustralianBsbValidator() {
    return (
        <WidgetValidator
            widgetId={EnumWidgetId.AUSTRALIAN_BSB_VALIDATOR}
            labelText="Australian BSB"
            prepareExecutePayload={(value) => ({ bsb: value })}
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
                    <span className="font-bold text-green-500">{batchItem.data?.formattedBsb}</span> is a valid Australian BSB.
                </p>
                {batchItem.data?.name && (
                    <p className="pb-3">
                        Branch: <span className="font-semibold">{batchItem.data.name}</span>
                        {batchItem.data?.mnemonic && ` (${batchItem.data.mnemonic})`}
                    </p>
                )}
                {batchItem.data?.address && (
                    <p className="pb-3">
                        {batchItem.data.address}{batchItem.data?.suburb ? `, ${batchItem.data.suburb}` : ''}
                        {batchItem.data?.state ? ` ${batchItem.data.state}` : ''}
                        {batchItem.data?.postcode ? ` ${batchItem.data.postcode}` : ''}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="text-gray-500 text-sm">
            <p className="pb-3">
                <span className="font-bold text-red-500">{batchItem.data?.formattedBsb || "Input"}</span> — BSB lookup result.
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
