import React, { Component } from 'react';
// index.html is wired up with script for GoogleMaps API

class GoogleMap extends Component {
    componentDidMount() {
        // create new embedded google map, takes element from ref and renders embed
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        // this.refs.map 
        return <div ref="map" /> ;
    }
}

export default GoogleMap;