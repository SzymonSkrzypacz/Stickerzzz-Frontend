import React, { Component } from 'react';
// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: 'theme.palette.common.white',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#282C34',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  success: {
    backgroundColor: green[600],
  },
});

class AddPost extends Component {
  state = {
    title: '',
    content: '',
    name: '',
    longitude: '',
    latitude: '',
    img: '',
    tagList: [],
  };
  
render(){
  //  const { openModal, switchAddPostModalOpen, switchAddPostModalClose } = this.props;
  const { classes } = this.props;
    return (
      <>
       <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Add Post
          </Typography>
          <form
            className={classes.form}
            // onSubmit={this.handleSubmit}
        
          >

            <TextField
              // value={this.state.email}
              // onChange={this.handleChange}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
      </>
  );
}
  
}



export default withStyles(styles)(AddPost);