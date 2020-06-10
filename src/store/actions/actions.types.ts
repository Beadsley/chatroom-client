export enum EReduxActionTypes {
  // user actions
  LOG_IN = 'LOG_IN',
}

export interface LoginAction {
  type: string;
  loggedIn: boolean;
}

export type UserActionTypes = LoginAction;