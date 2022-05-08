import React, { useCallback, useEffect } from 'react';
import { makeStyles, Theme, Fade } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { constants } from '../types';
import { User } from '../store/actions/actions.user.types';
import { Message } from '../store/actions/actions.messages.types';
import { timeFormatter } from '../services/dateHelper';

const BUBBLERRADIUS = 15;

const useStyles = makeStyles<Theme>((theme) => ({
  root: () => ({
    [theme.breakpoints.down('xs')]: {
      maxWidth:'100%',
    },
    maxWidth: '70%',
    width: '100%',
    height: 'calc(100% - 56px)',
    paddingBottom: '60px',
  }),

  list: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  listItem: {
    maxWidth: '50%',
    listStyleType: 'none',
  },
  bubble: {
    marginTop: theme.spacing(0.2),
    marginBottom: theme.spacing(0.2),
    padding: theme.spacing(2),
    borderTopRightRadius: BUBBLERRADIUS,
    borderTopLeftRadius: BUBBLERRADIUS,
    display: 'inline-block',
    wordBreak: 'break-word',
  },
  senderBubble: {
    alignSelf: 'flex-start',
    background: constants.GREY_LIGHT,
    borderBottomRightRadius: BUBBLERRADIUS,
  },
  userBubble: {
    alignSelf: 'flex-end',
    background: theme.palette.secondary.main,
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
  const messages = useSelector(
    (state: RootState): Message[] => state.messages.data
  );
  const user = useSelector((state: RootState): User => state.user.data);
  const classes = useStyles();

  const scrollDown = useCallback((): void => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  // scroll messages intoView
  useEffect(() => {
    scrollDown();
  }, [messages]);

  const showName = useCallback((index: number, name: string | undefined): boolean => {
    return (
      ((index > 0 && messages[index - 1].sender !== name) || index === 0) &&
      user.name !== name
    );
  }, [messages]);

  const showTime = useCallback((index: number, name: string | undefined): boolean => {
    return (
      (index < messages.length - 1 && messages[index + 1].sender !== name) ||
      index === messages.length - 1
    );
  }, [messages]);

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {messages.map((message, index) => (
          <Fade in={true} key={`message-${message.sender}-${index}`}>
            <div className={classes.container} key={index.toString()}>
              {message.sender && showName(index, message.sender) && (
                <li className={`${classes.sendername} ${classes.listItem}`}>
                  {message.sender}
                </li>
              )}
              {message.sender && (
                <li
                  className={`${
                    user.name === message.sender
                      ? classes.userBubble
                      : classes.senderBubble
                  } ${classes.listItem} ${classes.bubble}`}
                >
                  {message.text}
                </li>
              )}
              {!message.sender && (
                <li className={`${classes.information} ${classes.listItem}`}>
                  {message.text}
                </li>
              )}
              {message.sender && showTime(index, message.sender) && (
                <li
                  className={`${
                    user.name === message.sender
                      ? classes.usertime
                      : classes.sendername
                  } ${classes.listItem}`}
                >
                  {timeFormatter(message.timestamp)}
                </li>
              )}
            </div>
          </Fade>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoom;
