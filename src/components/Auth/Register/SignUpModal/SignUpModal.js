import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signUp, clearError } from '../../../../store/actions/authActions';
import { errorPassword, correctPassword, errorEmail, correctEmail, errorUserName, correctUserName } from '../../../../store/actions/validateActions';
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

const input_fields = {
  userName: /^[a-z\d]{5,25}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, //eslint-disable-line
  password: /^[#\w@_-]{8,20}$/,
}

class signUpModal extends Component {
  state = {
    email: '',
    password: '',
    reapeatPassword: '',
    userName: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.clearError();
    if(e.target.attributes.name.value !== 'reapeatPassword'){
      if(!(this.validate(e.target.value, input_fields[e.target.attributes.name.value])) && e.target.value !== '' ){ 
          if(e.target.attributes.name.value === 'password') this.props.errorPassword('Hasło niezgodne z polityką haseł!')
          else if(e.target.attributes.name.value === 'email') this.props.errorEmail('Niepoprawny email!')
          else if(e.target.attributes.name.value === 'userName') this.props.errorUserName('Niepoprawna nazwa użytkownika!')
        }
      else {
          if(e.target.attributes.name.value === 'password') this.props.correctPassword();
          else if(e.target.attributes.name.value === 'email') this.props.correctEmail();
          else if(e.target.attributes.name.value === 'userName') this.props.correctUserName();
      }
    }
  };

  validate = (field, regex) => {
    return regex.test(field);
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state)   
    //console.log('wysłano')
  };
  
  
 

  render() {
    const { classes, authError, passwordError, emailError, userNameError } = this.props;
    // console.log(emailError !== '' || userNameError !== '' || passwordError !== '' || this.state.password !== this.state.reapeatPassword)
    //console.log(authError)
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={this.handleSubmit}
        
          >

            <TextField
              value={this.state.email}
              onChange={this.handleChange}
              variant='outlined'
              error = { authError === 'Email' || emailError !== '' ? true : false}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              helperText= {authError === 'Email' || emailError !== '' ? 'Zły email' : null}
            />

            <TextField
              value={this.state.userName}
              onChange={this.handleChange}
              error= {authError === 'Username' || userNameError !== '' ? true : false}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='userName'
              label='User Name'
              name='userName'
              helperText= {authError === 'Username' || userNameError !== '' ? 'Zła nazwa użytkownika' : null}
            />
            <TextField
              value={this.state.password}
              onChange={this.handleChange}
              variant='outlined'
              // error = {(this.state.password.length <= 8 && this.state.password !== '') ? true : false}
              error = { passwordError ? true : false}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              // helperText= {(this.state.password.length <= 8 && this.state.password !== '') ? 'Wpisz przynajmniej 8 znaków!' : null}
              helperText= {passwordError}
            />

            <TextField

              value={this.state.reapeatPassword}
              onChange={this.handleChange}
              variant='outlined'
              margin='normal'
              error = {this.state.password === this.state.reapeatPassword ? false : true}
              required
              fullWidth
              name='reapeatPassword'
              label='Reapeat Password'
              type='password'
              id='reapeatPassword'
              helperText= {(this.state.password === this.state.reapeatPassword) ? null : 'Wpisz takie same hasła'}
            />
            {(authError ? (<Typography color='error' variant='body1'>Wypełnij poprawnie dane</Typography>) : null)}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              disabled = { emailError !== '' || userNameError !== '' || passwordError !== '' || this.state.password !== this.state.reapeatPassword || authError !== null}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
    errorPassword: err => dispatch(errorPassword(err)),
    correctPassword: () => dispatch(correctPassword()),
    errorEmail: (err) => dispatch(errorEmail(err)), 
    correctEmail: () => dispatch(correctEmail()), 
    errorUserName: (err) => dispatch(errorUserName(err)), 
    correctUserName: () => dispatch(correctUserName()),
    clearError: () => dispatch(clearError()),
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    emailError: state.validate.emailError,
    userNameError: state.validate.userNameError,
    passwordError: state.validate.passwordError,
    //reapetedPasswordError: state.validate.reapetedPasswordError,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(signUpModal));
