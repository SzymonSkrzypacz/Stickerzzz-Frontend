import React, { Component } from 'react';
import './App.css';
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
