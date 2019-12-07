import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import Navbar from './components/navbar/Navbar';
import PostList from './components/posts/postList/PostList';
import Profile from './components/profile/Profile';

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
