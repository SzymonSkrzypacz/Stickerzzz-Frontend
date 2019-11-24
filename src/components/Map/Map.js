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

    L.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
      {
        minZoom: 0,
        maxZoom: 18,
        ext: 'png'
      }
    ).addTo(this.map);
  }

  render() {
    return <Wrapper width='800px' height='300px' id='map' />;
  }
}
