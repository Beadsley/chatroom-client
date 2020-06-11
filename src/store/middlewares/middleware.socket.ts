import io from 'socket.io-client';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { appendMessage, sendMessage } from '../actions/actions.messages';
import { EReduxMessageActionTypes, Message } from '../actions/actions.messages.types';
import { logginError, updateUser } from '../actions/actions.user';
import { EReduxUserActionTypes, User } from '../actions/actions.user.types';
import { appendChatuser } from '../actions/actions.chatusers';
import { constants } from '../../types';
export let socket = io(constants.ROOT_URL);

const socketMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action) => {
  const returnValue = next(action);
  console.log('action:', action);

  if (action.type === EReduxUserActionTypes.CONNECT_USER) {
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
        error: null,
      };
      api.dispatch(updateUser(user));
    });

    socket.on('user-connected', (name:string) => {
      api.dispatch(appendChatuser(name))
    })
  } else if (action.type === EReduxUserActionTypes.NEW_USER) {
    socket.emit('new-user', action.payload.name);
  } else if (action.type === EReduxMessageActionTypes.SEND_MESSAGE) {
    socket.emit('send-chat-message', action.payload);
  }

  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default socketMiddleware;
