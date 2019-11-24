import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default class Map extends Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [58, 16],
      zoom: 6,
      zoomControl: false
    });

    L.titleLayer(
      'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={AIzaSyAMdups_1NnJ9aJMgPEeKfwF_2Alpg42ck}',
      {
        maxZoom: 18
      }
    ).addTo(this.map);
  }

  render() {
    return <Wrapper width='1280px' height='720px' id='map' />;
  }
}
