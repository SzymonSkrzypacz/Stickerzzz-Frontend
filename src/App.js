import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import PostList from './components/Posts/PostList/PostList.js';
import Profile from './components/Profile/Profile';
import SinglePost from './components/Posts/SinglePost/SinglePost';
import { connect } from 'react-redux'
import * as actions from './store/actions/postActions';
import SimpleSnackBar from './components/Snackbar/Snackbar';
import PrivateProfile from './components/Profile/PrivateProfile';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';



class App extends Component {
  
  // componentDidMount() {
  //   const { getPosts } = this.props;
  //   getPosts();
  // }
  theme = createMuiTheme({
      palette: {
        primary: lightBlue,
        secondary: pink,
      },
      
  });
  
  render() {
    const { admin, user } = this.props;
    return (
      <ThemeProvider theme={this.theme}>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={MainPage} />
        <Route path='/postList' component={PostList} />
        {admin ? <Route path='/adminDashboard' component={AdminDashboard} /> : <Route path='/adminDashboard' component={PostList} />}
        {user ? <Route path='/myProfile' component={PrivateProfile} /> : <Route path='/myProfile' component={PostList} />}
        <Route path='/user/:user' component={Profile} />
        <Route path='/post/:id' component={SinglePost} />
        <SimpleSnackBar />
      </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.auth.admin,
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(actions.getPosts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
