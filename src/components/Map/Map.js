import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;



const myIcon = L.icon({
  iconUrl: 'https://image.flaticon.com/icons/svg/447/447031.svg',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

export default class Map extends Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: this.props.position[0],
      zoom: 15,
      zoomControl: false,
      
    });

    L.tileLayer(
      'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      {
        minZoom: 5,
        maxZoom: 17,
        ext: 'png',
      }
    ).addTo(this.map);
    
    this.props.position.map(pos => {
      //console.log(pos)
      return (
        L.marker(pos, { icon: myIcon }).addTo(this.map)
      )
    })
    
    
  }

  render() {
    return <Wrapper width={this.props.width} height={this.props.height} id='map' />;
  }
}
