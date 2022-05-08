import React, { useCallback, useState } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  withStyles,
  Theme,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { appendMessage, sendMessage } from '../store/actions/actions.messages';
import { Message } from '../store/actions/actions.messages.types';
import { User } from '../store/actions/actions.user.types';
import { currentTimestamp } from '../services/dateHelper';

const useStyles = makeStyles<Theme>((theme) => ({
  root: () => ({
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
    width: '100%',
    maxWidth: '70%',
    bottom: 0,
    right: 0,
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
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

const Input: React.FC = () => {
  const user = useSelector((state: RootState): User => state.user.data);
  const [userInput, setUserInput] = useState<string>('');
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setUserInput(e.target.value);
    },
    [setUserInput]
  );

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      const message: Message = {
        text: userInput,
        sender: user.name,
        timestamp: currentTimestamp(),
      };

      if (userInput.length !== 0) {
        dispatch(sendMessage(message));
        dispatch(appendMessage(message));
      }

      setUserInput('');
    },
    [userInput, setUserInput]
  );

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
          <StyledButton
            variant='contained'
            color='primary'
            type='submit'
            onClick={handleSubmit}
          >
            <SendIcon />
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

export default Input;
