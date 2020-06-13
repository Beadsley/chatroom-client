import { combineReducers } from 'redux';
import user from './reducer.user';
import messages from './reducer.messages';
import chatusers from './reducer.chatusers';
import alert from './reducer.alert'

const rootReducer = combineReducers({
  user,
  messages,
  chatusers,
  alert
});

export default rootReducer;
