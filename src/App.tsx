import React from 'react';
import LoginForm from './components/Form';
import { useSelector } from 'react-redux';
import { User } from './store/actions/actions.types';
import { RootState } from './store/store';
import ChatRoom from './components/ChatRoom';

function App() {
  const user = useSelector((state: RootState): User => state.user.data);
  return user.loggedIn ? <ChatRoom /> : <LoginForm title='LoginForm' />;
}

export default App;
