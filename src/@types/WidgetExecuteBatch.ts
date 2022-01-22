import { Message } from "./Message"
import { EnumWidgetId } from "./Widget"

export type WidgetExecuteBatchRequest = {
    batchId: string;
    requestItems: Array<WidgetExecuteBatchRequestItem>;
}

export type WidgetExecuteBatchRequestItem = {
    itemId: string;
    widgetId: EnumWidgetId;
    payload?: IWidgetExecuteBatchRequestItemPayload;
}


export interface IWidgetExecuteBatchRequestItemPayload {

}

export interface IGenericExecuteBatchRequestItemPayload extends IWidgetExecuteBatchRequestItemPayload {
    [key: string]: any;
} 

export type WidgetExecuteBatchResponse = {
    batchId: string;
    responseItems: Array<WidgetExecuteBatchResponseItem>;
}

export type WidgetExecuteBatchResponseItem = {
    itemId: string;
    batchId: string;
    widgetId: EnumWidgetId;
    success: boolean;
    messages: Array<Message>;
    data: any;
}