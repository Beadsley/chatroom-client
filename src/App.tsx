import React from 'react';
import LoginForm from './components/Landing';
import { useSelector } from 'react-redux';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { User } from './store/actions/actions.user.types';
import { RootState } from './store/store';
import ChatRoomBAsic from './components/ChatRoomBasic';
import PrimaryAppBar from './components/Appbar';
import UsersList from './components/ChatUserList';
import SendMessage from './components/SendMessage';
import ChatRoom from './components/ChatRoom';

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
  }
}));

function App() {
  const classes = useStyles();
  const user = useSelector((state: RootState): User => state.user.data);
  // return user.loggedIn ? <ChatRoomBAsic /> : <LoginForm title='LoginForm' />;
  if (user.loggedIn) {
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
  } else {
    return (
      <div className={classes.landingContainer} >
        <LoginForm title='LoginForm' />

      </div>
    );
  }
}

export default App;
