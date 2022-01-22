import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import { WidgetExecuteBatchResponseItem } from '../../@types/WidgetExecuteBatch';
import PrimaryButton from '../form/PrimaryButton';
import { useWidgetExecutor } from '../widgetExecutions/Hooks';
import WidgetWrapper from './WidgetWrapper';

interface IWidgetGeneratorProps {
    widgetId: EnumWidgetId;
    labelText: string;
    getGeneratedValue: (batchItem?: WidgetExecuteBatchResponseItem) => string;
    getAdditionalInfoNodes: (batchItem?: WidgetExecuteBatchResponseItem) => ReactNode;
}


export default function WidgetGenerator({
    widgetId,
    labelText,
    getGeneratedValue,
    getAdditionalInfoNodes,
 }: IWidgetGeneratorProps) {
    const [currentDisplayValue, setCurrentDisplayValue] = useState<string>("");
    const [additionalDisplayInfo, setAdditionalDisplayInfo] = useState<ReactNode>(undefined);
    const { Execute, Loading, BatchItems, CurrentBatchId } = useWidgetExecutor();

    const generate = async () => {
        await Execute(widgetId);
    }

    // Invoke the callback to ensure that we show the desired generated value.
    useEffect(() => {
        setCurrentDisplayValue(getGeneratedValue(BatchItems?.[0]));
    }, [CurrentBatchId]);

    // Invoke the callback to ensure that we show the desired additional info.
    useEffect(() => {
        setAdditionalDisplayInfo(getAdditionalInfoNodes(BatchItems?.[0]));
    }, [CurrentBatchId]);

    return (
        <WidgetWrapper>
            <div>
                <div className="flex items-center border rounded-lg pt-6 px-4 pb-4 border-sky-200">
                    <div className="relative">
                        <input
                            name="txt-generate"
                            type="text"
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pt-2 leading-tight focus:outline-none"
                            value={currentDisplayValue}
                            placeholder=""
                        />
                        <label
                            htmlFor="txt-generate"
                            className="absolute left-0 -top-3.5 text-sky-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            {labelText}
                        </label>
                    </div>
                </div>

                <div className="mt-3">
                    <PrimaryButton
                        label="Generate"
                        onClick={generate}
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