import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signUp } from '../../../../store/actions/authActions';
import { errorPassword, correctPassword } from '../../../../store/actions/validateActions';
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
  userName: /^[a-z\d]{5,12}$/i,
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
    
    if(!(this.validate(e.target.value, input_fields[e.target.attributes.name.value]))) this.props.errorPassword('Hasło niezgodne z polityką haseł!')
    else this.props.correctPassword();
  };

  validate = (field, regex) => {
    return regex.test(field);
  }
  
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email && this.state.password && this.state.password > 8 && this.state.password === this.state.reapeatPassword) {
      this.props.signUp(this.state)   
    } 
  };
  
  
 

  render() {
    const { classes, authError,passwordError } = this.props;
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
              error={authError === 'Email' ? true : false}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              helperText= {authError === 'Email' ? 'Podany email jest zajęty' : null}
            />

            <TextField
              value={this.state.userName}
              onChange={this.handleChange}
              error= {authError === 'Username' ? true : false}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='userName'
              label='User Name'
              name='userName'
              helperText= {authError === 'Username' ? 'Podany nazwa użytkownika jest zajęta' : null}
            />
            <TextField
              value={this.state.password}
              onChange={this.handleChange}
              variant='outlined'
              // error = {(this.state.password.length <= 8 && this.state.password !== '') ? true : false}
              error = {  passwordError !== '' ? true : false}
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
              helperText= {this.state.password === this.state.reapeatPassword ? null : 'Wpisz takie same hasła'}
            />
            {(this.props.authError ? (<Typography color='error' variant='body1'>Wypełnij poprawnie dane</Typography>) : null)}
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
    errorPassword: password => dispatch(errorPassword(password)),
    correctPassword: () => dispatch(correctPassword())
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    emailError: state.validate.emailError,
    userNameError: state.validate.userNameError,
    passwordError: state.validate.passwordErrorError,
    reapetedPasswordError: state.validate.reapetedPasswordErrorError,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(signUpModal));
