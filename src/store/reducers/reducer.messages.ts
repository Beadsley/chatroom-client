import { combineReducers } from 'redux';
import { Message, MessageActionType, EReduxActionTypes } from '../actions/actions.messages.types';

const appendMessage = (state = [], action: MessageActionType): Message[] => {
  switch (action.type) {
    case EReduxActionTypes.MESSAGE_RECEIVED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  data: appendMessage,
});
