import { EReduxAlertActionTypes, Alert } from './actions.alert.types';

export const usernameTakenAlert = (alert: Alert) => {
  return {
    type: EReduxAlertActionTypes.USERNAME_TAKEN,
    payload: alert,
  };
};

export const closeAlert = () => {
    return {
        type: EReduxAlertActionTypes.CLOSE_ALERT,
      };
}
