export enum EReduxAlertActionTypes {
  USERNAME_TAKEN = 'USERNAME_TAKEN',
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
