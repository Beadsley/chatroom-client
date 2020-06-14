import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logOutUser } from '../store/actions/actions.user';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 5,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    fontSize: '1.4em',
  },
}));

const PrimaryAppBar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogOut = (): void => {
    dispatch(logOutUser());
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.title} align='center'>
            Lets Get Chatty!
          </Typography>
          <IconButton edge='end' color='inherit' aria-label='log-out' onClick={handleLogOut}>
            <ExitToAppIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PrimaryAppBar;
