
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';
import Login from '../Auth/Login/LoginNav/LoginNav';
import Register from '../Auth/Register/RegisterNav/RegisterNav.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddPost from '../Posts/AddPost/AddPost';
import { signOut } from '../../store/actions/authActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const Navbar = ({ user, admin, logOut }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //console.log(user)
  return (
    <div className={classes.root}>

      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.navLinks} to='/'>
              Stickerzzz
            </Link>
          </Typography>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.navLinks} to='/postList'>
              Posty
            </Link>
          </Typography>
          {!user && (
          <>
            <Login />
            <Register />
          </>
          )}

          
          
          {user && (
            <>
              <AddPost />
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
            </>
          )}
           {/* {admin && ( 
            <Button>
              <Link className={classes.navLinks} to='/adminDashboard'>
                Admin Dashboard
                  </Link>
            </Button>
           )} */}
           
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {/* <Link to={`/user/${user.username}`} >
                  Mój profil
                </Link> */}
              </MenuItem>
              <MenuItem onClick={()=>{
                logOut();
                handleClose();
              }}>Log out</MenuItem>
            </Menu>
          

        </Toolbar>
      </AppBar>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    user: state.auth.user,
    admin: state.auth.admin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(signOut()),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
