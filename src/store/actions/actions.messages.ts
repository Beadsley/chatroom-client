import { EReduxActionTypes, Message } from './actions.messages.types';

export const appendMessage = (message: Message) => {
  return {
    type: EReduxActionTypes.MESSAGE_RECEIVED,
    payload: message,
  };
};
