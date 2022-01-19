import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { EnumWidgetId } from '../../@types/Widget';
import { useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/root';
import { v4 as uuidv4 } from 'uuid';

import {
    executeBatchAsync, selectResponseItemsByBatchId,
} from './widgetExecutionsSlice';
import { IGenericExecuteBatchRequestItemPayload } from '../../@types/WidgetExecuteBatch';

export function WidgetTest() {
    const dispatch = useAppDispatch();
    const [currentBatchId, setCurrentBatchId] = useState("");
    const [batchIdHistory, setBatchIdHistory] = useState<string[]>([]);
    const [currentInputValue, setCurrentInputValue] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const batchItems = useSelector((state: RootState) => {
        return selectResponseItemsByBatchId(state, currentBatchId);
    });

    // Sends the payload and prepares the relevant response.
    const execute = async (widgetId: EnumWidgetId, payload?: IGenericExecuteBatchRequestItemPayload) => {
        // Prepare a new batchId
        const batchId = uuidv4();
        const itemId = uuidv4();

        setLoading(true);

        await dispatch(executeBatchAsync({
            batchId: batchId,
            requestItems: [
                {
                    itemId: itemId,
                    widgetId: widgetId,
                    payload,
                },
            ],
        }));

        setCurrentBatchId(batchId)
        setBatchIdHistory([...batchIdHistory, batchId]);
        setLoading(false);
    }

    // Generate
    const generate = async () => {
        await execute(EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR);
    }

    // Validate
    const validate = async () => {
        const payload = {
            acn: currentInputValue,
        };

        await execute(EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_VALIDATOR, payload);
    }

    const onValueChangeHandler = async (e: any) => {
        setCurrentInputValue(e.target.value);
    }

    return (
        <div>
            {loading ? "Loading" : (
                <>
                    <button
                        aria-label="Increment value"
                        onClick={generate}
                    >
                        Generate
                    </button>
                    <input type="text" onChange={onValueChangeHandler} />
                    <button
                        aria-label="Increment value"
                        onClick={validate}
                    >
                        Validate
                    </button>
                </>
            )}

            <div>Batch ID: {currentBatchId}</div>
            <div>Current Value: {currentInputValue}</div>
            <pre>
                {JSON.stringify(batchItems, null, 4)}
            </pre>
        </div>
    );
}