import React, { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Theme,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { Chatuser } from '../store/actions/actions.chatusers.types';
import { constants } from '../types';
import { Message } from '../store/actions/actions.messages.types';
import { User } from '../store/actions/actions.user.types';
import { timeFormatter } from '../services/dateHelper';

const useStyles = makeStyles<Theme>((theme) => ({
  root: () => ({
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },

    maxWidth: '30%',
    minWidth: '20%',
    top: 60,
    bottom: 0,
    position: 'fixed',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    backgroundColor: constants.GREY_LIGHT,
  }),
  listItemTextSecondary: {
    fontSize: '0.7em',
  },
  listItemTextPrimary: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  selected: {
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing(3),
  },
}));

const UsersList: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string | undefined>(undefined);
  const messages = useSelector(
    (state: RootState): Message[] => state.messages.data
  );
  const chatusers = useSelector(
    (state: RootState): Chatuser[] => state.chatusers.data
  );
  const user = useSelector((state: RootState): User => state.user.data);
  const classes = useStyles();

  // sets the last active user
  useEffect(() => {
    if (messages.length > 0) {
      setCurrentUser(messages[messages.length - 1].sender);
    }
  }, [messages]);

  return (
    <List className={classes.root}>
      {chatusers.map((chatuser) => (
        <ListItem
          key={chatuser.name}
          className={
            currentUser === chatuser.name ? classes.selected : undefined
          }
          divider={true}
        >
          <ListItemAvatar>
            <Avatar>
              <FaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{
              primary: classes.listItemTextPrimary,
              secondary: classes.listItemTextSecondary,
            }}
            primary={user.name === chatuser.name ? 'You' : chatuser.name}
            secondary={`Joined: ${timeFormatter(chatuser.joined)}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UsersList;
