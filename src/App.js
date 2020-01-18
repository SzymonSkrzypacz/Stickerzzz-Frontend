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

class App extends Component {
  
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={MainPage} />
        <Route path='/postList' component={PostList} />
        <Route path='/adminDashboard' component={AdminDashboard} />
        <Route path='/user/:user' component={Profile} />
        <Route path='/post/:id' component={SinglePost} />
        <SimpleSnackBar />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(actions.getPosts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
