import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import adminDashboard from './components/adminDashboard/adminDashboard.js';
import navbar from './components/navbar/navbar';
import postList from './components/posts/postList/postList.js';
import profile from './components/profile/profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <navbar />
        <Route exact path='/' component={postList} />
        <Route path='/adminDashboard' component={adminDashboard} />
        <Route path='/user/:user' component={profile} />
      </BrowserRouter>
    );
  }
}

export default App;
