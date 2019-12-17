import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { signIn } from '../../../../store/actions/authActions';
import { connect } from 'react-redux';
const styles = (theme => ({
  '@global': {
    body: {
      backgroundColor: 'theme.palette.common.white ',
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignInModul extends Component {
state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.signIn(this.state)   
    }
  };

 render(){
    return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={styles.form} noValidate onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.email}
            onChange={this.handleChange}
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
          <TextField
            value={this.state.password}
            onChange={this.handleChange}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={styles.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
 }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(signIn(user)),
  }
}



export default connect(null, mapDispatchToProps)(withStyles(styles)(SignInModul));