import React from 'react';
import LoginForm from './components/Landing';
import { useSelector } from 'react-redux';
import { makeStyles, CircularProgress } from '@material-ui/core';
import { User } from './store/actions/actions.user.types';
import { RootState } from './store/store';
import PrimaryAppBar from './components/Appbar';
import UsersList from './components/ChatUserList';
import Input from './components/Input';
import ChatRoom from './components/ChatRoom';
import Alert from './components/Alert';

const useStyles = makeStyles(() => ({
  chatRoomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    top: '60px',
    height: '100%',
  },
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    height: '100%',
    minHeight: '100vh',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  const user = useSelector((state: RootState): User => state.user.data);

  if (user.loggedIn) {
    return (
      <div className={classes.root}>
        <PrimaryAppBar />
        <UsersList />
        <div className={classes.chatRoomContainer}>
          <ChatRoom />
        </div>
        <Input />
      </div >
    );
  } else if (user.awaitingResponse) {
    return (
      <div className={classes.container}>
        <CircularProgress size='10rem' />
      </div>
    );
  } else {
    return (
      <>
        <Alert />
        <div className={classes.container}>
          <LoginForm />
        </div>
      </>
    );
  }
}

export default App;
