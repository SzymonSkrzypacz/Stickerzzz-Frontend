import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default class Map extends Component {
  // showLocation(position) {
  //   return [position.coords.latitude, position.coords.longitude];
  // }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log(position.coords.latitude, position.coords.longitude);
    // });
    this.map = L.map('map', {
      center: [51.21006, 16.1619],
      zoom: 15,
      zoomControl: false
    });

    L.tileLayer(
      'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      {
        minZoom: 5,
        maxZoom: 17,
        ext: 'png'
      }
    ).addTo(this.map);
  }

  render() {
    return <Wrapper width='800px' height='300px' id='map' />;
  }
}
