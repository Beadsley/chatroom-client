import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
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
}));

const PrimaryAppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.title} align='center'>
            Lets Get Chatty!
          </Typography>
          <IconButton edge='end' color='inherit' aria-label='log-out'>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PrimaryAppBar;
