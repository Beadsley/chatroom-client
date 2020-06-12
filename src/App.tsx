import React from 'react';
import LoginForm from './components/Form';
import { useSelector } from 'react-redux';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
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

//TODO move to config

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: 'rgb(23, 105, 170)',
      dark: '#000',
    },
    secondary: {
      main: '#58a5f0',
    },
  },
});

function App() {
  const classes = useStyles();
  // const user = useSelector((state: RootState): User => state.user.data);
  // return user.loggedIn ? <ChatRoomBAsic /> : <LoginForm title='LoginForm' />;

  return (
    <>
    <MuiThemeProvider theme = { theme }>
      <PrimaryAppBar />
      <UsersList />
      <div className={classes.chatRoomContainer}>
        <ChatRoom />
      </div>
      <SendMessage />
      </MuiThemeProvider>
    </>
  );
}

export default App;
