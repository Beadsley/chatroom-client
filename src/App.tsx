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
import { isBrowser } from 'react-device-detect';

const useStyles = makeStyles(() => ({
  chatRoomContainer: {
    display: 'flex',
    height: '90vh',
    justifyContent: 'flex-end',
  },
  container: {
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
        {isBrowser && <UsersList maxWidth={'20%'} />}
        <div className={classes.chatRoomContainer}>
          <ChatRoom maxWidth={isBrowser ? '80%' : '100%'} />
        </div>
        <Input maxWidth={isBrowser ? '80%' : '100%'} />
      </>
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
