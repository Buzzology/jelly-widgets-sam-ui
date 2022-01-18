export type WidgetExecuteBatchRequest = {
    batchId: string;
    requestItems: Array<WidgetExecuteBatchRequestItem>;
}

export type WidgetExecuteBatchRequestItem = {
    itemId: string;
    widgetId: string;
    payload?: IWidgetExecuteBatchRequestItemPayload;
}


export interface IWidgetExecuteBatchRequestItemPayload {

}

export type WidgetExecuteBatchResponse = {
    batchId: string;
    responseItems: Array<WidgetExecuteBatchResponseItem>;
}

export type WidgetExecuteBatchResponseItem = {
    itemId: string;
    batchId: string;
    widgetId: string;
    success: boolean;
    data: any
}