import { EReduxUserActionTypes, User } from './actions.user.types';

export const connectUser = () => {
  return {
    type: EReduxUserActionTypes.CONNECT_USER,
  };
};

export const newUser = (name: string) => {
  return {
    type: EReduxUserActionTypes.NEW_USER,
    payload: { name },
  };
};

export const updateUser = (user: User) => {
  return {
    type: EReduxUserActionTypes.UPDATE_USER,
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: EReduxUserActionTypes.LOG_OUT,
  };
};
