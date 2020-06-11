import { EReduxMessageActionTypes, Message } from './actions.messages.types';

export const appendMessage = (message: Message) => {
  return {
    type: EReduxMessageActionTypes.MESSAGE_RECEIVED,
    payload: message,
  };
};

export const sendMessage = (message: Message) => {
  return {
    type: EReduxMessageActionTypes.SEND_MESSAGE,
    payload: message,
  };
};


