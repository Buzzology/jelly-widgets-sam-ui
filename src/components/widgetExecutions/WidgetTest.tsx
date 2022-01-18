import React, { useState } from 'react';
import { WidgetIds } from '../../@types/Widget';
import { useAppDispatch } from '../../store/hooks';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    executeBatchAsync,
} from './widgetExecutionsSlice';

export function WidgetTest() {
    //   const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    //   const [incrementAmount, setIncrementAmount] = useState('2');

    //   const incrementValue = Number(incrementAmount) || 0;

    const test = async () => {
        debugger;
        var test = await dispatch(executeBatchAsync({
            batchId: "12345",
            requestItems: [
                {
                    itemId: "456",
                    widgetId: WidgetIds.AUSTRALIAN_COMPANY_NUMBER_GENERATOR,
                },
            ],
        }));
        debugger;
    }

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={test}
            >
                +
            </button>
        </div>
    );
}