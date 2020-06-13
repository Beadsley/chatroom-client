export enum EReduxUserActionTypes {
  CONNECT_USER = 'CONNECT_USER',
  UPDATE_USER = 'UPDATE_USER',
  NEW_USER = 'NEW_USER',
  LOG_OUT = 'LOG_OUT',
}

export interface User {
  name: string | undefined;
  loggedIn: boolean;
  connected: boolean;
  awaitingResponse: boolean;
}

export interface UserActionType {
  type: string;
  payload: User;
}
