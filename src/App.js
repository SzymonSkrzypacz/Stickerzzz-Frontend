import React, { Component } from 'react';
import './App.css';
//import SignIn from './components/SignIn.js';
import NavBar from './components/NavBar';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PostList />
      </>
    );
  }
}

export default App;
