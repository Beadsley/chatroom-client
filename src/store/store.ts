import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/reducer.root';
import { User } from './actions/actions.user.types';
import thunk from 'redux-thunk';

export interface RootState {
  user: { data: User };
}

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
