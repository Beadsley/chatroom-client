import io from 'socket.io-client';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { appendMessage } from '../actions/actions.messages';
import { EReduxMessageActionTypes, Message } from '../actions/actions.messages.types';
import { updateUser, logOutUser } from '../actions/actions.user';
import { EReduxUserActionTypes, User } from '../actions/actions.user.types';
import {
  usernameTakenAlert,
  connectionErrorAlert,
  userInactiveAlert,
} from '../actions/actions.alert';
import { Alert, EReduxAlertActionTypes } from '../actions/actions.alert.types';
import { appendChatuser, disconnectChatuser, inactiveChatuser } from '../actions/actions.chatusers';
import { currentTimestamp } from '../../services/dateHelper';
import { config } from '../../config';
let socket: SocketIOClient.Socket;

const socketMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (
  action
) => {
  const returnValue = next(action);
  console.log('action:', action, socket);
  switch (action.type) {
    case EReduxUserActionTypes.CONNECT_USER:
      socket = io(config.ROOT_URL);
      socket.on('login_error', (error: { type: string; message: string }) => {
        const alert: Alert = {
          type: EReduxAlertActionTypes.USERNAME_TAKEN,
          activated: true,
          message: error.message,
        };
        api.dispatch(usernameTakenAlert(alert));
      });

      socket.on('login_success', (name: string) => {
        const user: User = {
          name,
          loggedIn: true,
          connected: true,
          awaitingResponse: false,
        };
        api.dispatch(updateUser(user));
      });
      socket.on('chat-message', (message: Message) => {
        api.dispatch(appendMessage(message));
      });

      socket.on('current-users', (currentusers: { name: string; joined: Date }[]) => {
        currentusers.forEach((currentuser) => {
          api.dispatch(appendChatuser({ name: currentuser.name, joined: currentuser.joined }));
        });
      });

      socket.on('user-connected', (newUser: { name: string; joined: Date }) => {
        api.getState().user.data.loggedIn &&
          api.dispatch(appendChatuser({ name: newUser.name, joined: newUser.joined }));
        const message: Message = {
          text: `${newUser.name} has joined the chat`,
          sender: undefined,
          timestamp: currentTimestamp(),
        };
        api.dispatch(appendMessage(message));
      });

      socket.on('connect_error', (error: string) => {
        const alert: Alert = {
          type: EReduxAlertActionTypes.CONNECTION_ERROR,
          activated: true,
          message: 'Server unavailable', //TODO constant
        };
        api.dispatch(connectionErrorAlert(alert));
        socket.disconnect();
      });

      socket.on('user-disconnected', (name: string) => {
        api.dispatch(disconnectChatuser(name));
        const message: Message = {
          text: `${name} has left the chat`,
          sender: undefined,
          timestamp: currentTimestamp(),
        };
        api.dispatch(appendMessage(message));
      });
      socket.on('user-inactive', (name: string) => {
        if (api.getState().user.data.name === name) {
          api.dispatch(logOutUser());
          const alert: Alert = {
            type: EReduxAlertActionTypes.USER_INACTIVE,
            activated: true,
            message: 'Disconnected by the server due to inactivity', //TODO constant
          };
          api.dispatch(userInactiveAlert(alert));
        } else {
          const message: Message = {
            text: `${name} has left the chat`,
            sender: undefined,
            timestamp: currentTimestamp(),
          };
          api.dispatch(appendMessage(message));
        }
        api.dispatch(inactiveChatuser(name));
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
      socket.disconnect();
  }

  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default socketMiddleware;
