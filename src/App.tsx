import React from 'react';
import LoginForm from './components/Landing';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { User } from './store/actions/actions.user.types';
import { RootState } from './store/store';
import PrimaryAppBar from './components/Appbar';
import UsersList from './components/ChatUserList';
import Input from './components/Input';
import ChatRoom from './components/ChatRoom';
import Alert from './components/Alert';

const useStyles = makeStyles((theme) => ({
  chatRoomContainer: {
    display: 'flex',
    height: '90vh',
    justifyContent: 'flex-end',
  },
  landingContainer: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();
  const user = useSelector((state: RootState): User => state.user.data);

  if (user.loggedIn) {
    return (
      <>
        <PrimaryAppBar />
        <UsersList />
        <div className={classes.chatRoomContainer}>
          <ChatRoom />
        </div>
        <Input />
      </>
    );
  } else {
    return (
      <>
        <Alert />
        <div className={classes.landingContainer}>
          <LoginForm />
        </div>
      </>
    );
  }
}

export default App;
