import React, { useState } from 'react';
import { EnumWidgetId } from '../../@types/Widget';
import InlineFormButton from '../form/InlineFormButton';
import PrimaryButton from '../form/PrimaryButton';
import { useWidgetExecutor } from '../widgetExecutions/Hooks';
import WidgetWrapper from './WidgetWrapper';


export default function AustralianCompanyNumberGenerator() {
    const { Execute, Loading, BatchItems, CurrentBatchId } = useWidgetExecutor();

    const generate = async () => {
        await Execute(EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR);
    }

    return (
        <WidgetWrapper>
            <div>
                <div className="flex items-center border-b border-sky-500 py-2">
                    {/* <label
                        htmlFor="txt-generate"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                        Generate ACN
                    </label> */}
                    <input
                        name="txt-generate"
                        type="text"
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pt-3 px-2 leading-tight focus:outline-none"
                        value={BatchItems?.[0]?.data?.acn}
                        placeholder="Generate an ACN"
                    />
                    <InlineFormButton
                        label="Generate"
                        onClick={generate}
                        additionalClasses="flex-shrink-0"
                        loading={Loading}
                    />
                </div>

                <div>Batch ID: {CurrentBatchId}</div>
                <pre>
                    {JSON.stringify(BatchItems, null, 4)}
                </pre>
            </div>
        </WidgetWrapper>
    );
}