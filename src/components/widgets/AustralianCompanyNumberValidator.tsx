import React, { useState } from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { useWidgetExecutor } from '../widgetExecutions/Hooks';


export default function AustralianCompanyNumberValidator() {
    const { Execute, Loading, BatchItems, CurrentBatchId } = useWidgetExecutor();
    const [currentInputValue, setCurrentInputValue] = useState("");

    // Validate
    const validate = async () => {
        const payload = {
            acn: currentInputValue,
        };

        await Execute(EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_VALIDATOR, payload);
    }

    const onValueChangeHandler = async (e: any) => {
        setCurrentInputValue(e.target.value);
    }

    return (
        <div>
            {Loading ? "Loading" : (
                <>
                    <input type="text" onChange={onValueChangeHandler} />
                    <button
                        aria-label="Increment value"
                        onClick={validate}
                    >
                        Validate
                    </button>
                </>
            )}

            <div>Batch ID: {CurrentBatchId}</div>
            <div>Current Value: {currentInputValue}</div>
            <pre>
                {JSON.stringify(BatchItems, null, 4)}
            </pre>
        </div>
    );
}