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
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { Chatuser } from '../store/actions/actions.chatusers.types';
import { constants } from '../types';
import { Message } from '../store/actions/actions.messages.types';
import { User } from '../store/actions/actions.user.types';
import { timeFormatter } from "../services/dateHelper";

const useStyles = makeStyles((theme) => ({
  root: {
    top: 60,
    bottom: 0,
    position: 'fixed',
    width: '100%',
    height: '100%',
    maxWidth: '30%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    backgroundColor: constants.GREY_LIGHT, //TODO make constant
  },
  listItemText: {
    fontSize: '0.7em',
  },
  selected: {
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing(3),
  },
}));

const UsersList: React.FC = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<string | undefined>(undefined);
  const messages = useSelector((state: RootState): Message[] => state.messages.data);
  const chatusers = useSelector((state: RootState): Chatuser[] => state.chatusers.data);
  const user = useSelector((state: RootState): User => state.user.data);

  useEffect(() => {
    messages.length > 0 && setCurrentUser(messages[messages.length - 1].sender);
  }, [messages]);

  return (
    <List className={classes.root}>
      {chatusers.map((chatuser) => (
        <ListItem
          key={chatuser.name}
          className={currentUser === chatuser.name ? classes.selected : undefined}
          divider={true}
        >
          <ListItemAvatar>
            <Avatar>
              <FaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ secondary: classes.listItemText }}
            primary={user.name === chatuser.name ? 'You' : chatuser.name}
            secondary= {`Joined: ${timeFormatter(chatuser.joined)}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UsersList;
