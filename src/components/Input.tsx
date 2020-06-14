import React, { useState } from 'react';
import { makeStyles, TextField, Button, withStyles, Theme } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { appendMessage, sendMessage } from '../store/actions/actions.messages';
import { Message } from '../store/actions/actions.messages.types';
import { User } from '../store/actions/actions.user.types';
import { currentTimestamp } from '../services/dateHelper';
import { InputProps, InputStyleProps } from '../types';

const useStyles = makeStyles<Theme, InputStyleProps>((theme) => ({
  root: (props) => ({
    maxWidth: props.maxWidth,
    width: '100%',
    bottom: 0,
    right: 0,
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
  }),
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
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    color: theme.palette.background.paper,
  },
}))(Button);

const Input: React.FC<InputProps> = (props) => {
  const user = useSelector((state: RootState): User => state.user.data);
  const [userInput, setUserInput] = useState<string>('');
  const dispatch = useDispatch();
  const styleProps: InputStyleProps = { maxWidth: props.maxWidth };
  const classes = useStyles(styleProps);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const message: Message = {
      text: userInput,
      sender: user.name,
      timestamp: currentTimestamp(),
    };
    userInput.length !== 0 && dispatch(sendMessage(message));
    userInput.length !== 0 && dispatch(appendMessage(message));
    setUserInput('');
  };

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.container}>
          <TextField
            className={classes.textfield}
            value={userInput}
            onChange={handleChange}
            id='message-input'
            label='Type your message...'
            variant='outlined'
            autoComplete='off'
            InputProps={{
              className: classes.input,
            }}
          />
          <StyledButton variant='contained' color='primary' type='submit' onClick={handleSubmit}>
            <SendIcon />
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

export default Input;
