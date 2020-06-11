export enum EReduxActionTypes {
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
}

export interface Message {
  message: string;
  name: string | undefined;
}

export interface MessageActionType {
  type: string;
  payload: Message;
}
