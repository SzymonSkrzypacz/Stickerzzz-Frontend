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
import Geocode from "react-geocode";
// import ReactLeafletSearch from "react-leaflet-search";
import {
  geocodeByAddress,
  getLatLng }
 from 'react-places-autocomplete';
// Geocode.setApiKey("AIzaSyCYCwv6-2J0fM3DQxVQJ_jM8rekqy9Mm8w");

// Geocode.enableDebug();
// const SearchComponent = props => (
//     <ReactLeafletSearch
//       position="topleft"
//       inputPlaceholder="The default text in the search bar"
//       search={[]} // Setting this to [lat, lng] gives initial search input to the component and map flies to that coordinates, its like search from props not from user
//       zoom={7} // Default value is 10
//       showMarker={true}
//       showPopup={false}
//       openSearchOnLoad={false} // By default there's a search icon which opens the input when clicked. Setting this to true opens the search by default.
//       closeResultsOnClick={false} // By default, the search results remain when you click on one, and the map flies to the location of the result. But you might want to save space on your map by closing the results when one is clicked. The results are shown again (without another search) when focus is returned to the search input.
//       providerOptions={{searchBounds: []}} // The BingMap and OpenStreetMap providers both accept bounding coordinates in [se,nw] format. Note that in the case of OpenStreetMap, this only weights the results and doesn't exclude things out of bounds.
//       customProvider={undefined | {search: (searchString)=> {}}} // see examples to usage details until docs are ready
//   />
// )


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
          console.log(data);
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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Add Post
          </Typography>
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



export default withStyles(styles)(AddPost);