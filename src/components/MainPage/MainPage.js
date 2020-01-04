import React, { Component } from 'react';
import Map from '../Map/Map';
import './MainPage.css';

class MainPage extends Component {
  
  render() { 
    const position = [
      [51.204491, 16.159241],
      [51.208903, 16.181259],
      [51.209163, 16.145177],
      [51.220152, 16.161984],
      ]
    return (
      <div className='wrapper'> 
        <h1 className='title'>Stickerzzz!</h1>
        <Map position={position} width='100vw' height='92vh'/>
      </div> 
     );
  }
}
 
export default MainPage;