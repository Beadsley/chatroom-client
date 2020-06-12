import React from 'react';
import { makeStyles } from '@material-ui/core';
import PrimaryAppBar from './Appbar';
import { mockMessages, mockChatusers, mockUser } from '../mockdata';
import UsersList from './ChatUserList';

const BUBBLERRADIUS = 15; // TODO constant

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  list: {
    margin: 0,
    marginTop: theme.spacing(2),
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    display: 'flex',
    flex: 1,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    maxWidth: '50%',
  },
  sender: {
    alignSelf: 'flex-start',
    background: '#eee', // TODO constant
    marginLeft: theme.spacing(1),
    borderTopRightRadius: BUBBLERRADIUS,
    borderTopLeftRadius: BUBBLERRADIUS,
    borderBottomRightRadius: BUBBLERRADIUS,
  },
  user: {
    alignSelf: 'flex-end',
    background: '#0084ff', //TODO constant
    color: theme.palette.background.paper,
    marginRight: theme.spacing(1),
    borderTopLeftRadius: BUBBLERRADIUS,
    borderTopRightRadius: BUBBLERRADIUS,
    borderBottomLeftRadius: BUBBLERRADIUS,
  },
}));

const ChatRoom: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <ul className={classes.list}>
          {mockMessages.map((message) => (
            <li className={`${mockUser.name === message.name ? classes.user : classes.sender} ${classes.listItem}`}>
              {message.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChatRoom;
