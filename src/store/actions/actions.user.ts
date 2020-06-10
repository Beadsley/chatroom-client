import { EReduxActionTypes, User } from './actions.types';

export const updateUser = (user: User) => {
  return {
    type: EReduxActionTypes.UPDATE_USER,
    payload: user,
  };
};
