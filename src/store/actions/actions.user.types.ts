export enum EReduxUserActionTypes {
  UPDATE_USER = 'UPDATE_USER',
  NEW_USER = 'NEW_USER',
  LOG_OUT = 'LOG_OUT',
}

export interface User {
  name: string | undefined;
  loggedIn: boolean;
}

export interface UserActionType {
  type: string;
  payload: User;
}


