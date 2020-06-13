import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField, Button, makeStyles, withStyles } from '@material-ui/core';
import { RootState } from '../store/store';
import { newUser, connectUser } from '../store/actions/actions.user';
import { User } from '../store/actions/actions.user.types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyledButton = withStyles({
  root: {
    borderRadius: 0,
  },
})(Button);

const LoginForm: React.FC = (props) => {
  const [name, setName] = useState<string>('');
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState): User => state.user.data);
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableButton(e.target.value === '');
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    !user.connected && dispatch(connectUser());
    dispatch(newUser(name));
    setName('');
  };
  return (
    <div className={classes.root}>
      <Typography variant='h3' component='h2'>
        Log in
      </Typography>
      <TextField
        required
        type='text'
        id='nickname-textfield'
        label='Nickname'
        autoComplete='off'
        value={name}
        onChange={handleChange}
      />
      <StyledButton
        variant='contained'
        color='primary'
        onClick={handleSubmit}
        disabled={disableButton}
      >
        Sign In
      </StyledButton>
    </div>
  );
};

export default LoginForm;
