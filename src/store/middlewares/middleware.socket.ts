import { socket } from '../../config';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { appendMessage } from "../actions/actions.messages";
import { Message } from "../actions/actions.messages.types";

const socketMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action) => {
  const returnValue = next(action);
  console.log('action:', action);
  if(action.type === 'UPDATE_USER') { // 'change to loginsuccess or something
    socket.on('chat-message', (message: Message) => {
        console.log('received', message);       
        api.dispatch(appendMessage(message));
    });
  }


  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default socketMiddleware;