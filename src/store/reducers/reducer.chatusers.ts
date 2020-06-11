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
    default:
      return state;
  }
};

export default combineReducers({
  data: appendChatuser,
});
