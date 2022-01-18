import { WidgetExecuteBatchRequest, WidgetExecuteBatchResponse } from "../../@types/WidgetExecuteBatch";

export async function WidgetRequestsExecuteBatch(request: WidgetExecuteBatchRequest): Promise<WidgetExecuteBatchResponse> {
  const resp = await fetch(`${process.env.REACT_APP_BASE_API_URL}/execute-batch`, {
      method: 'POST',
      // headers: headers,
      body: JSON.stringify(request),
    });

    if(!resp.ok){
        throw new Error(resp.statusText);
    } else {
        return await resp.json() as WidgetExecuteBatchResponse;
    }
  }