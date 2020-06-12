import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { mockMessages, mockChatusers, mockUser } from '../mockdata';
import { constants } from "../types";

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

  useEffect(() => {
    setCurrentUser(mockMessages[mockMessages.length - 1].name);
  }, [mockMessages]);

  return (
    <List className={classes.root}>
      {mockChatusers.map((user) => (
        <ListItem
          key={user.name}
          className={currentUser === user.name ? classes.selected : undefined}
          divider={true}
        >
          <ListItemAvatar>
            <Avatar>
              <SupervisedUserCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ secondary: classes.listItemText }}
            primary={mockUser.name === user.name ? 'You' : user.name}
            secondary='7:34'
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UsersList;
