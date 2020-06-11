import { combineReducers } from 'redux';
import user from './reducer.user';
import messages from './reducer.messages';

const rootReducer = combineReducers({
  user,
  messages,
});

export default rootReducer;
