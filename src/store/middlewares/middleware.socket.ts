import io from 'socket.io-client';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { appendMessage, sendMessage } from '../actions/actions.messages';
import { Message } from '../actions/actions.messages.types';
import { EReduxUserActionTypes } from '../actions/actions.user.types';
import { EReduxMessageActionTypes } from '../actions/actions.messages.types';
import { constants } from '../../types';
export let socket = io(constants.ROOT_URL);

const socketMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action) => {
  const returnValue = next(action);
  console.log('action:', action);

  if (action.type === 'UPDATE_USER') {
    // 'change to loginsuccess or something
    socket.on('chat-message', (message: Message) => {
      console.log('received', message);
      api.dispatch(appendMessage(message));
    });
  } else if (action.type === EReduxUserActionTypes.NEW_USER) {
    socket.emit('new-user', action.payload.name);
  } else if(action.type === EReduxMessageActionTypes.SEND_MESSAGE){
    socket.emit('send-chat-message', action.payload); 
  }

  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default socketMiddleware;
