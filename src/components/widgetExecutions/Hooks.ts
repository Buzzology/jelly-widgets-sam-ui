import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumWidgetId } from "../../@types/Widget";
import { IGenericExecuteBatchRequestItemPayload } from "../../@types/WidgetExecuteBatch";
import { RootState } from "../../store/root";
import { executeBatchAsync, selectResponseItemsByBatchId } from "./widgetExecutionsSlice";
import { v4 as uuidv4 } from 'uuid';

// useWidgetExecutor exposes the `executeBatchAsync` function and corresponding logic to the component.
export function useWidgetExecutor() {
    const [currentBatchId, setCurrentBatchId] = useState("");
    const [batchIdHistory, setBatchIdHistory] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
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
            batchId,
            requestItems: [
                {
                    itemId: itemId,
                    widgetId: widgetId,
                    payload,
                },
            ],
        }));

        // Update state to reflect the new batch.
        setCurrentBatchId(batchId)
        setBatchIdHistory([...batchIdHistory, batchId]);
        setLoading(false);
    }

    // Expose useful info to the invoking component.
    return {
        Execute: execute,
        Loading: loading,
        BatchItems: batchItems,
        CurrentBatchId: currentBatchId,
    }
}
