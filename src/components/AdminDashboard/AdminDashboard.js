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
import { connect } from 'react-redux';
import { banUser, giveAdmin, deleteUser } from '../../store/actions/usersActions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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


function InteractiveList({ users, deleteUser, giveAdmin, banUser }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <div className={classes.demo}>
                
          <List className={classes.width}>
                <Divider />
            {users.map(users => {
              return (
              <>
                <ListItem key={users.userName} className={classes.flex}>
                  <Link to={'user/' + users.userName}>
                    <ListItemAvatar>
                      <Avatar src={users.avatar || 'https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256'} />
                    </ListItemAvatar>
                  </Link>
                  <ListItemText
                    primary={users.userName}
                  />
                  <ListItemText
                    primary={users.email}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => {deleteUser(users.userName)}} aria-label="delete" color={users.isDeleted ? 'secondary' : 'primary'}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => {banUser(users.userName)}} aria-label="block" color={users.isBanned ? 'secondary' : 'primary'}>
                      <BlockIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => {giveAdmin(users.userName)}} aria-label="admin" color={users.isAdmin ? 'secondary' : 'primary'}>
                      <SupervisorAccountIcon />
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

const mapStateToProps = state => {
  return ({
    users: state.users.users,
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    banUser: userName => dispatch(banUser(userName)),
    giveAdmin: userName => dispatch(giveAdmin(userName)),
    deleteUser: userName => dispatch(deleteUser(userName)),
  })
}

export default connect (mapStateToProps, mapDispatchToProps)(InteractiveList)