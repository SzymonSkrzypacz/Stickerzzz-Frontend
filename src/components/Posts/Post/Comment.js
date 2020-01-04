import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    width: '100%'
  }
}));

export default function Comment({ comments }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    {comments.map(comment => {
      return (
        <>  
          <ListItem key={comment.id}>
            <ListItemAvatar>
              <Avatar src='https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256' />
            </ListItemAvatar>
            <ListItemText primary={comment.text} secondary={comment.author}/>
          </ListItem>
        </>
      )
    
    })}
    <ListItem>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField label='Dodaj komentarz!' variant="outlined" className={classes.form}/>
            </form>
    </ListItem>
    </List>
  )
}