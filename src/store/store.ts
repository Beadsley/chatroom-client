import { createStore, compose } from 'redux';
import rootReducer from './reducers/reducer.root';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers()
);

export default store;