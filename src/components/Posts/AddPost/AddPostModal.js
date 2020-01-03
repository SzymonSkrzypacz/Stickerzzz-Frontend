import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { sendPost } from '../../../store/actions/postActions';



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
    img: '',
    tagList: [],
    lat: '',
    lon: '',
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
  
  handleChangeTags = (e) => {
    e.preventDefault();
    this.setState({
      tagList: e.target.value.split(' '),
    })
    //console.log(this.state);
  }
  
  handleChangeAddress = (e) => {
    e.preventDefault();
    
    const url = `https://nominatim.openstreetmap.org/search?q=${e.target.value}&format=json`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.length > 0){
          //console.log(data);
          this.setState({
          lat: data[0].lat,
          lon: data[0].lon,
        })
        }
        
    });

  }
  
  
render(){
  //  const { openModal, switchAddPostModalOpen, switchAddPostModalClose } = this.props;
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
            
            <TextField
              value={this.state.content}
              onChange={this.handleChange}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='content'
              label='Treść posta'
              name='content'
            />
            
            <TextField
              value={this.state.img}
              onChange={this.handleChange}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='img'
              label='Link do wlepy'
              name='img'
            />
            
            <TextField
              value={this.state.tags}
              onChange={this.handleChangeTags}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='tags'
              label='Tagi'
              name='tags'
            />
            
            <TextField
              onChange={this.handleChangeAddress}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='address'
              label='Adres'
              name='address'
            />
            
            
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Dodaj wlepkę!
            </Button>
          </form>
        </div>
      </Container>
      </>
  );
}
  
}

const mapDispatchToProps = dispatch => {
  return {
    sendPost: post => dispatch(sendPost(post))
  }
}

const mapStateToProps = state => {
  return {
    isError: state.posts.isError, 
    data: state.posts.data,
    isSending: state.posts.isSending
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddPost));