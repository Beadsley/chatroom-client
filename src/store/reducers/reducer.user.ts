import { combineReducers } from 'redux';
import { UserActionType, EReduxUserActionTypes, User } from '../actions/actions.user.types';

const initialState: User = {
  name: undefined,
  loggedIn: false,
  error: null,
  connected: false,
};

const updateUser = (state = initialState, action: UserActionType): User => {
  switch (action.type) {
    case EReduxUserActionTypes.UPDATE_USER:
      return action.payload;
    case EReduxUserActionTypes.LOG_OUT:
      return {
        name: undefined,
        loggedIn: false,
        error: null,
        connected: true,
      };
    case EReduxUserActionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default combineReducers({
  data: updateUser,
});
