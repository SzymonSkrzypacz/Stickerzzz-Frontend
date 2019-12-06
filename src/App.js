import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PostList from './components/PostList/PostList';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PostList />
      </>
    );
  }
}

export default App;
