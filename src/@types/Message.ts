export type Message = {
    type: MessageType;
    message: string;
}

export enum MessageType {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success',
}