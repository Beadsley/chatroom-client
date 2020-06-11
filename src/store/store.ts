import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import rootReducer from './reducers/reducer.root';
import { User } from './actions/actions.user.types';
import thunk from 'redux-thunk';
import socketMiddleware from './middlewares/middleware.socket';
import { Message } from './actions/actions.messages.types';

export interface RootState {
  user: { data: User };
  messages: { data: Message[] };
}

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, socketMiddleware))
);
