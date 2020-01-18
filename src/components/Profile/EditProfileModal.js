import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';




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

class EditProfileModal extends Component {
  state = {
    user: this.props.user
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('dodawanie postów wyłaczone!!!')
    this.props.sendPost();
  }
  
  handleChange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  

  
render(){
  //  const { openModal, switchEditProfileModalModalOpen, switchEditProfileModalModalClose } = this.props;
  const { classes } = this.props;
    return (
      <>
       <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <form
            className={classes.form}
            onSubmit={this.handleSubmit}
        
          >

            <TextField
              value={this.state.title}
              onChange={this.handleChange}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='title'
              label='Tytuł posta'
              name='title'
              autoFocus
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Edytuj profil!
            </Button>
          </form>
        </div>
      </Container>
      </>
  );
}
  
}



const mapStateToProps = state => {
  return {
    user: state.auth.user, 

  }
}


export default connect(mapStateToProps)(withStyles(styles)(EditProfileModal));