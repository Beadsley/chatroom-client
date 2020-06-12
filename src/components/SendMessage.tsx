import React, { useEffect, useState } from 'react';
import { makeStyles, TextField, Button, withStyles } from '@material-ui/core';
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
  textfield: {
    display: 'flex',
    flex: 1,
  },
  border: {
    overrides: {
      borderRadius: '5em',
    },
  },
  input: {
    borderRadius: 0,
    borderTopLeftRadius: 5,
  },
}));

const StyledButton = withStyles({
  root: {
    borderRadius: 0,
  },
})(Button);

const SendMessage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TextField
          className={classes.textfield}
          id='message-input'
          label='Type your message...'
          variant='outlined'
          autoComplete='off'
          InputProps={{
            className: classes.input,
          }}
        />
        <StyledButton variant='contained' color='primary'>
          <SendIcon />
        </StyledButton>
      </div>
    </div>
  );
};

export default SendMessage;
