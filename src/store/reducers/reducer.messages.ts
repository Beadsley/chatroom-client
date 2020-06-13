import { combineReducers } from 'redux';
import {
  Message,
  MessageActionType,
  EReduxMessageActionTypes,
} from '../actions/actions.messages.types';
import { EReduxUserActionTypes } from '../actions/actions.user.types';

const initialState: Message[] = [];

const appendMessage = (state = initialState, action: MessageActionType): Message[] => {
  switch (action.type) {
    case EReduxMessageActionTypes.MESSAGE_RECEIVED:
      return [...state, action.payload];
    case EReduxUserActionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  data: appendMessage,
});
