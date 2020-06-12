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
    maxWidth: '50%',
  },
  bubble: {
    marginTop: theme.spacing(0.2),
    marginBottom: theme.spacing(0.2),
    padding: theme.spacing(2),
    borderTopRightRadius: BUBBLERRADIUS,
    borderTopLeftRadius: BUBBLERRADIUS,
  },
  senderBubble: {
    alignSelf: 'flex-start',
    background: '#eee', // TODO constant
    marginLeft: theme.spacing(1),
    borderBottomRightRadius: BUBBLERRADIUS,
  },
  userBubble: {
    alignSelf: 'flex-end',
    background: '#0084ff', //TODO constant
    color: theme.palette.background.paper,
    marginRight: theme.spacing(1),
    borderBottomLeftRadius: BUBBLERRADIUS,
  },
  sendername: {
    alignSelf: 'flex-start',
    marginLeft: theme.spacing(2),
  },
  username: {
    alignSelf: 'flex-end',
    marginRight: theme.spacing(2),
  },
}));

const ChatRoom: React.FC = () => {
  const classes = useStyles();

  const showName = (index: number, name: string) => {
    return (
      ((index > 0 && mockMessages[index - 1].name !== name) || index === 0) &&
      mockUser.name !== name
    );
  };

  const showTime = (index: number, name: string) => {
    return (
      (index < mockMessages.length - 1 && mockMessages[index + 1].name !== name) ||
      index === mockMessages.length - 1
    );
  };
  return (
    <>
      <div className={classes.root}>
        <ul className={classes.list}>
          {mockMessages.map((message, index) => (
            <>
              {showName(index, message.name) && (
                <li className={`${classes.sendername} ${classes.listItem}`}>{message.name}</li>
              )}
              <li
                className={`${
                  mockUser.name === message.name ? classes.userBubble : classes.senderBubble
                } ${classes.listItem} ${classes.bubble}`}
              >
                {message.message}
              </li>
              {showTime(index, message.name) && (
                <li
                  className={`${
                    mockUser.name === message.name ? classes.username : classes.sendername
                  } ${classes.listItem}`}
                >
                  {'9:05'}
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChatRoom;
