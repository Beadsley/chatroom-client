import { EReduxChatuserActionTypes } from './actions.chatusers.types';

export const appendChatuser = (name: string) => {
  return {
    type: EReduxChatuserActionTypes.CHATUSER_CONNECTED,
    payload: {name},
  };
};
