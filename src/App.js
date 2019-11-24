import React from 'react';
import './App.css';
//import SignIn from './components/SignIn.js';
import NavBar from './components/NavBar';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <NavBar />
      {/* <SignIn /> */}
      <PostList />
    </>
  );
}

export default App;
