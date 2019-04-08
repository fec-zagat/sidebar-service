import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
import GOOGLEMAP_API_KEY from '../config/googleMap';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.apiKey = GOOGLEMAP_API_KEY;
    this.mapURL = (latitude, longtitude) => `https://www.google.com/maps/embed/v1/place?q=${latitude},${longtitude}&key=${this.apiKey}`;
  }

  render() {
    const { address, google } = this.props;
    const { latitude, longtitude } = address;
    return (
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: latitude,
          lng: longtitude,
        }}
      />
    );
  }
}

Map.propTypes = {
  address: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAHVxGlmHpg2eeLdURo8ZjJSVLRc_7672k',
})(Map);
