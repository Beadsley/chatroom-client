import React from 'react';
import LoginForm from './components/Form';
import { useSelector } from 'react-redux';
import { User } from './store/actions/actions.user.types';
import { RootState } from './store/store';
import ChatRoomBAsic from './components/ChatRoomBasic';
import ChatRoom from './components/Chatroom';

function App() {
  // const user = useSelector((state: RootState): User => state.user.data);
  // return user.loggedIn ? <ChatRoomBAsic /> : <LoginForm title='LoginForm' />;

  return <ChatRoom />;
}

export default App;
