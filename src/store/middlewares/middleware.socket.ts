import { socket } from '../../config';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';

const socketMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action) => {
  const returnValue = next(action);
  
  socket.on('chat-message', (message: string) => {
    console.log(message);

    api.dispatch({
        type : "SOCKET_MESSAGE_RECEIVED",
        payload : message
    });
  });

  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default socketMiddleware;