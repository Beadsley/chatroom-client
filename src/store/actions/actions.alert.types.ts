export enum EReduxAlertActionTypes {
  USERNAME_TAKEN = 'USERNAME_TAKEN',
  CONNECTION_ERROR = 'CONNECTION_ERROR',
  CLOSE_ALERT = 'CLOSE_ALERT',
  USER_INACTIVE = 'USER_INACTIVE',
}

export interface Alert {
  type: string | undefined;
  activated: boolean;
  message: string | undefined;
}

export interface AlertActionType {
  type: string;
  payload: Alert;
}
