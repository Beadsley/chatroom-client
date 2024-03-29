export enum EReduxMessageActionTypes {
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  SEND_MESSAGE = 'SEND_MESSAGE',
}

export interface Message {
  text: string;
  sender: string | undefined;
  timestamp: Date;
}

export interface MessageActionType {
  type: string;
  payload: Message;
}
