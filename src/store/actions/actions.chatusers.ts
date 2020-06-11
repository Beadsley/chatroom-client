import { EReduxChatuserActionTypes } from './actions.chatusers.types';

export const appendChatuser = (name: string) => {
  return {
    type: EReduxChatuserActionTypes.CHATUSER_CONNECTED,
    payload: { name },
  };
};

export const disconnectChatuser = (name: string) => {
  return {
    type: EReduxChatuserActionTypes.CHATUSER_DISCONNECTED,
    payload: { name },
  };
};

export const inactiveChatuser = (name: string) => {
  return {
    type: EReduxChatuserActionTypes.CHATUSER_INACTIVE,
    payload: { name },
  };
};
