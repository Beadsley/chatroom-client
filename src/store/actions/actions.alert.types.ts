export enum EReduxAlertActionTypes {
  USERNAME_TAKEN = 'USERNAME_TAKEN',
  CLOSE_ALERT = 'CLOSE_ALERT',
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
