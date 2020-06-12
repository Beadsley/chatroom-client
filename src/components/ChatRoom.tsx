import React from 'react';
import { makeStyles } from '@material-ui/core';
import PrimaryAppBar from './Appbar';
import { mockMessages, mockChatusers, mockUser } from '../mockdata';
import UsersList from './ChatUserList';
import { constants } from '../types';

const BUBBLERRADIUS = 15; // TODO constant

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
    width: '100%',
    height: '100%',
  },
  list: {
    margin: 0,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    background: constants.GREY_LIGHT,
    borderBottomRightRadius: BUBBLERRADIUS,
  },
  userBubble: {
    alignSelf: 'flex-end',
    background: theme.palette.secondary.main,
    color: theme.palette.background.paper,
    borderBottomLeftRadius: BUBBLERRADIUS,
  },
  sendername: {
    alignSelf: 'flex-start',
    color: constants.GREY_PRIMARY,
    marginTop: theme.spacing(0.2),
    marginBottom: theme.spacing(0.2),
    fontSize: '0.8em',
  },
  usertime: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing(0.2),
    color: constants.GREY_PRIMARY,
    fontSize: '0.8em',
  },
  information: {
    alignSelf: 'center',
    fontSize: '0.8em',
    color: constants.GREY_PRIMARY,
  },
}));

const ChatRoom: React.FC = () => {
  const classes = useStyles();

  const showName = (index: number, name: string | undefined) => {
    return (
      ((index > 0 && mockMessages[index - 1].name !== name) || index === 0) &&
      mockUser.name !== name
    );
  };

  const showTime = (index: number, name: string | undefined) => {
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
              {message.name && showName(index, message.name) && (
                <li className={`${classes.sendername} ${classes.listItem}`}>{message.name}</li>
              )}
              {message.name && (
                <li
                  className={`${
                    mockUser.name === message.name ? classes.userBubble : classes.senderBubble
                  } ${classes.listItem} ${classes.bubble}`}
                >
                  {message.message}
                </li>
              )}
              {!message.name && (
                <li className={`${classes.information} ${classes.listItem}`}>{message.message}</li>
              )}
              {message.name && showTime(index, message.name) && (
                <li
                  className={`${
                    mockUser.name === message.name ? classes.usertime : classes.sendername
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
