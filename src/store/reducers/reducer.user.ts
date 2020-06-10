import { combineReducers } from 'redux';
import { UserActionTypes } from '../actions/actions.types';

const loggedIn = (state = false, action: UserActionTypes) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return action.loggedIn;
    default:
      return state;
  }
};

export default combineReducers({
  loggedIn,
});
