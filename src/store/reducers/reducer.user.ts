import { combineReducers } from 'redux';
import { UserActionType, EReduxUserActionTypes, User } from '../actions/actions.user.types';

const initialState: User = {
  name: undefined,
  loggedIn: false,
  error: null,
};

const updateUser = (state = initialState, action: UserActionType): User => {
  switch (action.type) {
    case EReduxUserActionTypes.UPDATE_USER:
      return action.payload;
    case EReduxUserActionTypes.LOG_OUT:
      return initialState;
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
