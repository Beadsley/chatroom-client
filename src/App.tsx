import React from 'react';
import LoginForm from './components/Form';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { User } from './store/actions/actions.user.types';
import { RootState } from './store/store';
import ChatRoomBAsic from './components/ChatRoomBasic';
import ChatRoom from './components/Chatroom';
import PrimaryAppBar from './components/Appbar';
import UsersList from './components/ChatUserList';
import SendMessage from './components/SendMessage';

const useStyles = makeStyles((theme) => ({
  chatRoomContainer: {
    display: 'flex',
    height: '90vh',
    justifyContent: 'flex-end',
  },
}));
function App() {
  const classes = useStyles();
  // const user = useSelector((state: RootState): User => state.user.data);
  // return user.loggedIn ? <ChatRoomBAsic /> : <LoginForm title='LoginForm' />;

  return (
    <>
      <PrimaryAppBar />
      <UsersList />
      <div className={classes.chatRoomContainer}>
        <ChatRoom />
      </div>
        <SendMessage />
    </>
  );
}

export default App;
