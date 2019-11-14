import React from 'react';
import './App.css';
//import SignIn from './components/SignIn.js';
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {
  return (
    <>
      <NavBar />
      {/* <SignIn /> */}
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
