import { combineReducers } from 'redux';
import {
  UserActionType,
  EReduxActionTypes,
  User,
} from '../actions/actions.types';

const initialState: User = {
  name: undefined,
  loggedIn: false,
};

const updateUser = (state = initialState, action: UserActionType): User => {
  switch (action.type) {
    case EReduxActionTypes.UPDATE_USER:
      return action.payload;
    case EReduxActionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  data: updateUser,
});
