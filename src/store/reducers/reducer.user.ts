import { combineReducers } from 'redux';
import { UserActionType, EReduxUserActionTypes, User } from '../actions/actions.user.types';

const initialState: User = {
  name: undefined,
  loggedIn: false,
  connected: false,
};

const userReducer = (state = initialState, action: UserActionType): User => {
  switch (action.type) {
    case EReduxUserActionTypes.UPDATE_USER:
      return action.payload;
    case EReduxUserActionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  data: userReducer,
});
