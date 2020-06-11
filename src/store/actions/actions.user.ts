import { EReduxActionTypes, User } from './actions.user.types';

export const updateUser = (user: User) => {
  return {
    type: EReduxActionTypes.UPDATE_USER,
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: EReduxActionTypes.LOG_OUT,
  };
};
