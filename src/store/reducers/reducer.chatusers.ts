import { combineReducers } from 'redux';
import {
  Chatuser,
  ChatuserActionType,
  EReduxChatuserActionTypes,
} from '../actions/actions.chatusers.types';
import { EReduxUserActionTypes } from '../actions/actions.user.types';

const initialState: Chatuser[] = [];

const chatUsersReducer = (state = initialState, action: ChatuserActionType): Chatuser[] => {
  switch (action.type) {
    case EReduxChatuserActionTypes.CHATUSER_CONNECTED:
      return [
        ...state,
        {
          name: action.payload.name,
          joined: action.payload.joined,
          connected: true,
          disconnected: false,
          inactive: false,
        },
      ];
    case EReduxChatuserActionTypes.CHATUSER_DISCONNECTED:
      return [...state.filter((user: Chatuser) => user.name !== action.payload.name)];
    case EReduxChatuserActionTypes.CHATUSER_INACTIVE:
      return [...state.filter((user: Chatuser) => user.name !== action.payload.name)];
    case EReduxUserActionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  data: chatUsersReducer,
});
