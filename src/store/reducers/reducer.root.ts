import { combineReducers } from 'redux';
import user from './reducer.user';
import messages from './reducer.messages';
import chatusers from './reducer.chatusers';

const rootReducer = combineReducers({
  user,
  messages,
  chatusers,
});

export default rootReducer;
