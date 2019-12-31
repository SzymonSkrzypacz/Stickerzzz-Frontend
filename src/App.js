import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';
import Navbar from './components/Navbar/Navbar';
import PostList from './components/Posts/PostList/PostList.js';
import Profile from './components/Profile/Profile';
import SinglePost from './components/Posts/SinglePost/SinglePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={PostList} />
        <Route path='/adminDashboard' component={AdminDashboard} />
        <Route path='/user/:user' component={Profile} />
        <Route path='/post/:id' component={SinglePost} />
      </BrowserRouter>
    );
  }
}

export default App;
