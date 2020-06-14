import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField, Button, makeStyles, withStyles } from '@material-ui/core';
import { RootState } from '../store/store';
import { newUser, connectUser } from '../store/actions/actions.user';
import { User } from '../store/actions/actions.user.types';
import { Alert } from '../store/actions/actions.alert.types';
import { closeAlert } from '../store/actions/actions.alert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  title: {
    color: theme.palette.primary.dark,
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    color: theme.palette.background.paper,
  },
}))(Button);

const LoginForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState): User => state.user.data);
  const alert = useSelector((state: RootState): Alert => state.alert.data);
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableButton(e.target.value === '');
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert.activated && dispatch(closeAlert());
    e.preventDefault();
    !user.connected && !user.awaitingResponse && dispatch(connectUser());
    !user.awaitingResponse && dispatch(newUser(name));
    setName('');
  };
  return (
    <div className={classes.root}>
      <Typography variant='h3' component='h3' className={classes.title}>
        Welcome
      </Typography>
      <Typography variant='h5' component='h5' className={classes.title}>
        Lets get chatty!
      </Typography>
      <form className={classes.form}>
        <TextField
          required
          type='text'
          id='nickname-textfield'
          label='Nickname'
          autoComplete='off'
          value={name}
          onChange={handleChange}
          inputProps={{
            maxLength: 40,
          }}
        />
        <StyledButton variant='contained' color='primary' onClick={handleSubmit} disabled={disableButton} type='submit'>
          Sign In
        </StyledButton>
      </form>
    </div>
  );
};

export default LoginForm;
