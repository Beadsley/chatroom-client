import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { RootState } from '../store/store';
import { IconButton, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert as AlertType  } from '../store/actions/actions.alert.types';
import { closeAlert  } from '../store/actions/actions.alert';

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
  const alert = useSelector((state: RootState): AlertType => state.alert.data);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(alert.activated);
  }, [alert]);

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
                 dispatch(closeAlert());
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          {alert.message}
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertMessage;
