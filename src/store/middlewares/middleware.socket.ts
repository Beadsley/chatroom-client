import io from 'socket.io-client';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { appendMessage } from '../actions/actions.messages';
import { EReduxMessageActionTypes, Message } from '../actions/actions.messages.types';
import { logginError, updateUser } from '../actions/actions.user';
import { EReduxUserActionTypes, User } from '../actions/actions.user.types';
import { appendChatuser, disconnectChatuser, inactiveChatuser } from '../actions/actions.chatusers';
import { constants } from '../../types';
export const socket = io(constants.ROOT_URL);

const socketMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (
  action
) => {
  const returnValue = next(action);
  console.log('action:', action);
  switch (action.type) {
    case EReduxUserActionTypes.CONNECT_USER:
      socket.on('chat-message', (message: Message) => {
        api.dispatch(appendMessage(message));
      });

      socket.on('login_error', (error: { type: string; message: string }) => {
        api.dispatch(logginError(error));
      });

      socket.on('login_success', (name: string) => {
        const user: User = {
          name,
          loggedIn: true,
          connected: true,
          error: null,
        };
        api.dispatch(updateUser(user));
      });

      socket.on('current-users', (names: string[]) => {
        names.forEach((name) => {
          api.dispatch(appendChatuser(name));
        });
      });

      socket.on('user-connected', (name: string) => {
        api.dispatch(appendChatuser(name));
        const message: Message = {
          text: `${name} has joined the chat`,
          sender: undefined,
        };
        api.dispatch(appendMessage(message));
      });

      socket.on('user-disconnected', (name: string) => {
        api.dispatch(disconnectChatuser(name));
        const message: Message = {
          text: `${name} has left the chat`,
          sender: undefined,
        };
        api.dispatch(appendMessage(message));
      });
      socket.on('user-inactive', (name: string) => {
        api.dispatch(inactiveChatuser(name));
        const message: Message = {
          text: `${name} has left the chat`,
          sender: undefined,
        };
        api.dispatch(appendMessage(message));
      });
      break;
    case EReduxUserActionTypes.NEW_USER:
      socket.emit('new-user', action.payload.name);
      break;
    case EReduxMessageActionTypes.SEND_MESSAGE:
      socket.emit('send-chat-message', action.payload);
      break;
    case EReduxUserActionTypes.LOG_OUT:
      socket.emit('logout');
  }

  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default socketMiddleware;
