import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { IconButton, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertMessage: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
  }, []);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity='error'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
                onClick={() => {
                  setOpen(false);
                //   dispatch(hasErrored(false));   
                }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          {'TestTest'}
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertMessage;
