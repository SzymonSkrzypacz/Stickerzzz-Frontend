import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    margin: '0 auto',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  width: {
    width: '100%'
  }
}));


export default function InteractiveList() {
  const classes = useStyles();
  
  const users = [
    {
      username: 'janek',
      email: 'email@wp.pl',
    },
    {
      username: 'franek',
      email: '123mail@wp.pl',
    },
    {
      username: 'maniek',
      email: 'maniek@gmail.com',
    }
  ]

  return (
    <div className={classes.root}>
      <Grid container>
        <div className={classes.demo}>
                
          <List className={classes.width}>
                <Divider />
            {users.map(user => {
              return (
              <>
                <ListItem className={classes.flex}>
                  <ListItemText
                    primary={user.username}
                  />
                  <ListItemText
                    primary={user.email}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="block">
                      <BlockIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem> 
                <Divider />
              </>
            )
            })}
          </List>
        </div>
      </Grid>
  </div>
  );
}