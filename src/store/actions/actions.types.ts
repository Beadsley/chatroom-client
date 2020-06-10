export enum EReduxActionTypes {
  // user actions
  // LOG_IN = 'LOG_IN',
  UPDATE_USER = 'UPDATE_USER',
}

export interface User {
  name: string | undefined;
  loggedIn: boolean;
}

export interface UserActionType {
  type: string;
  payload: User;
}

