import { EReduxActionTypes } from './actions.types';

export const userLoggedIn = (loggedIn: boolean) => {
  return { type: EReduxActionTypes.LOG_IN, loggedIn };
};
