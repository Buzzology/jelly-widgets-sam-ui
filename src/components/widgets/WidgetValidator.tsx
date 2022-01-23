import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { IGenericExecuteBatchRequestItemPayload, WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import PrimaryButton from '../form/PrimaryButton';
import { useWidgetExecutor } from '../widgetExecutions/Hooks';
import WidgetWrapper from './WidgetWrapper';

interface IWidgetValidatorProps {
    widgetId: EnumWidgetId;
    labelText: string;
    getAdditionalInfoNodes: (batchItem?: WidgetExecuteBatchResponseItem) => ReactNode;
    prepareExecutePayload: (inputValue?: string) => IGenericExecuteBatchRequestItemPayload;
}


export default function WidgetValidator({
    widgetId,
    labelText,
    getAdditionalInfoNodes,
    prepareExecutePayload,
 }: IWidgetValidatorProps) {
    const [additionalDisplayInfo, setAdditionalDisplayInfo] = useState<ReactNode>(undefined);
    const { Execute, Loading, BatchItems, CurrentBatchId } = useWidgetExecutor();
    const [currentInputValue, setCurrentInputValue] = useState("");

    const validate = async () => {
        await Execute(
            widgetId,
            prepareExecutePayload(currentInputValue),
        );
    }

    const batchItem = BatchItems?.[0];

    const onValueChangeHandler = async (e: any) => {
        setCurrentInputValue(e.target.value);
    }

    // Invoke the callback to ensure that we show the desired additional info.
    useEffect(() => {
        setAdditionalDisplayInfo(getAdditionalInfoNodes(batchItem));
    }, [CurrentBatchId, batchItem, getAdditionalInfoNodes]);

    return (
        <WidgetWrapper>
            <div>
                <div className="flex items-center border rounded-lg pt-6 px-4 pb-4 border-sky-200 relative">
                    <div className="relative">
                        <input
                            name="txt-validate"
                            type="text"
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pt-2 leading-tight focus:outline-none"
                            placeholder=""
                            onChange={onValueChangeHandler}
                        />
                        <span className={`animate-ping absolute left-0 bottom-1 bg-sky-600 w-1 h-1 rounded-full ${currentInputValue || Loading ? "invisible" : "visible"}`}></span>
                        <label
                            htmlFor="txt-validate"
                            className="absolute left-0 -top-3.5 text-sky-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            {labelText}
                        </label>
                    </div>
                </div>

                <div className="mt-3">
                    <PrimaryButton
                        label="Validate"
                        onClick={validate}
                        loading={Loading}
                    />
                </div>

                <div className="border rounded p-3 mt-6 border-gray-200 text-left h-32 overflow-y-scroll">
                    {
                        additionalDisplayInfo ? (
                            <div className="text-gray-500 text-sm">
                                {additionalDisplayInfo}
                            </div>
                        ) : (
                            <div className="text-gray-400 text-xs text-center">No additional info</div>
                        )
                    }
                </div>
            </div>
        </WidgetWrapper>
    );
}