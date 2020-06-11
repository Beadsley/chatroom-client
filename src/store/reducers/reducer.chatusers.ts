import { combineReducers } from 'redux';
import { Chatuser, ChatuserActionType, EReduxChatuserActionTypes } from '../actions/actions.chatusers.types';

const appendChatuser = (state = [], action: ChatuserActionType): Chatuser[] => {
  switch (action.type) {
    case EReduxChatuserActionTypes.CHATUSER_CONNECTED:
      const chatuser = {
        name: action.payload.name,
        connected: true,
        disconnected: false,
        inactive: false,
      };
      return [...state, chatuser];
    case EReduxChatuserActionTypes.CHATUSER_DISCONNECTED:
      return state.map((user: Chatuser) =>
        user.name === action.payload.name ? { ...user, connected: false, disconnected: true } : user
      );
    case EReduxChatuserActionTypes.CHATUSER_INACTIVE:
      return state.map((user: Chatuser) =>
        user.name === action.payload.name ? { ...user, connected: false, inactive: true } : user
      );
    default:
      return state;
  }
};

export default combineReducers({
  data: appendChatuser,
});