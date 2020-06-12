export enum EReduxUserActionTypes {
  CONNECT_USER = 'CONNECT_USER',
  UPDATE_USER = 'UPDATE_USER',
  NEW_USER = 'NEW_USER',
  LOG_OUT = 'LOG_OUT',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export interface User {
  name: string | undefined;
  loggedIn: boolean;
  connected: boolean;
  error: { type: string; message: string } | null;
}

export interface UserActionType {
  type: string;
  payload: User;
}
