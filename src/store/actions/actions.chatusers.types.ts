export enum EReduxChatuserActionTypes {
  CHATUSER_CONNECTED = 'CHATUSER_CONNECTED',
  CHATUSER_DISCONNECTED = 'CHATUSER_DISCONNECTED',
  CHATUSER_INACTIVE = 'CHATUSER_INACTIVE',
}

export interface Chatuser {
  name: string;
  connected: boolean;
  disconnected: boolean;
  inactive: boolean;
}

export interface ChatuserActionType {
  type: string;
  payload: Chatuser;
}
