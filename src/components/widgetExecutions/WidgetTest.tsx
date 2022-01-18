import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WidgetIds } from '../../@types/Widget';
import { useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/root';
import { v4 as uuidv4 } from 'uuid';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    executeBatchAsync, selectResponseItemsByBatchId,
} from './widgetExecutionsSlice';

export function WidgetTest() {
    //   const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [currentBatchId, setCurrentBatchId] = useState("");
    const [batchIdHistory, setBatchIdHistory] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const batchItems = useSelector((state: RootState) => {
        return selectResponseItemsByBatchId(state, currentBatchId);
    });

    // Generates a new value.
    const generate = async () => {
        // Prepare a new batchId
        const batchId = uuidv4();

        setLoading(true);

        await dispatch(executeBatchAsync({
            batchId: batchId,
            requestItems: [
                {
                    itemId: "456",
                    widgetId: WidgetIds.AUSTRALIAN_COMPANY_NUMBER_GENERATOR,
                },
            ],
        }));

        setCurrentBatchId(batchId)
        setBatchIdHistory([...batchIdHistory, batchId]);
        setLoading(false);
    }

    return (
        <div>
            {loading ? "Loading" : (
                <button
                    aria-label="Increment value"
                    onClick={generate}
                >
                    +
                </button>
            )}

            <div>Batch ID: {currentBatchId}</div>
            <pre>
                {JSON.stringify(batchItems, null, 4)}
            </pre>
        </div>
    );
}