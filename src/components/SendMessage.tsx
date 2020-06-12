import React, { useEffect, useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { mockMessages, mockChatusers, mockUser } from '../mockdata';
import { constants } from '../types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
    width: '100%',
    bottom: 0,
    right: 0,
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    display: 'flex',
    flex: 1,
  },
}));

const SendMessage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TextField
          className={classes.input}
          id='message-input'
          label='Type your message...'
          variant='outlined'
          autoComplete='off'
        />
        <Button variant='contained' color='primary'>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default SendMessage;
