import React, { useState } from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { useWidgetExecutor } from '../widgetExecutions/Hooks';


export default function AustralianCompanyNumberGenerator() {
    const { Execute, Loading, BatchItems, CurrentBatchId } = useWidgetExecutor();

    const generate = async () => {
        await Execute(EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR);
    }

    return (
        <div>
            {Loading ? "Loading" : (
                <>
                    <button
                        aria-label="Increment value"
                        onClick={generate}
                    >
                        Generate
                    </button>
                </>
            )}

            <div>Batch ID: {CurrentBatchId}</div>
            <pre>
                {JSON.stringify(BatchItems, null, 4)}
            </pre>
        </div>
    );
}