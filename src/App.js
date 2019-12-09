import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminDashboard from './components/adminDashboard/AdminDashboard.js';
import Navbar from './components/navbar/Navbar.js';
import PostList from './components/posts/postList/PostList.js';
import Profile from './components/profile/Profile.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={PostList} />
        <Route path='/adminDashboard' component={AdminDashboard} />
        <Route path='/user/:user' component={Profile} />
      </BrowserRouter>
    );
  }
}

export default App;
