import { combineReducers } from 'redux';
import {
  Chatuser,
  ChatuserActionType,
  EReduxChatuserActionTypes,
} from '../actions/actions.chatusers.types';

const appendChatuser = (state = [], action: ChatuserActionType): Chatuser[] => {
  switch (action.type) {
    case EReduxChatuserActionTypes.CHATUSER_CONNECTED:
      return [
        ...state,
        {
          name: action.payload.name,
          connected: true,
          disconnected: false,
          inactive: false,
        },
      ];
    case EReduxChatuserActionTypes.CHATUSER_DISCONNECTED:
      return state.filter((user: Chatuser) => user.name !== action.payload.name);
    case EReduxChatuserActionTypes.CHATUSER_INACTIVE:
      return state.filter((user: Chatuser) => user.name !== action.payload.name);
    default:
      return state;
  }
};

export default combineReducers({
  data: appendChatuser,
});
