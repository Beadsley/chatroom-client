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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '90vh',
  },
}));
function App() {
  const classes = useStyles();
  // const user = useSelector((state: RootState): User => state.user.data);
  // return user.loggedIn ? <ChatRoomBAsic /> : <LoginForm title='LoginForm' />;

  return (
    <>
      <PrimaryAppBar />
      <div className={classes.root}>
        <UsersList />
        <ChatRoom />
      </div>
    </>
  );
}

export default App;
