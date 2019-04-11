import React, { Component } from 'react';
import GOOGLEMAP_API_KEY from '../config/googleMap';

class Map extends Component {
  constructor(props) {
    super(props);

    this.apiKey = GOOGLEMAP_API_KEY;
    this.mapUrl = (lat, long) => `https://www.google.com/maps/embed/v1/place?q=${lat},${long}&key=${this.apiKey}`;
  }

  render() {
    const { address } = this.props;
    const { latitude, longtitude } = address;
    return (
      <div>
        <iframe
          title="googleMap"
          width="380"
          height="300"
          frameBorder="0"
          className="mapIframe"
          src={this.mapUrl(37.787570, -122.396632)}
        />
      </div>
    );
  }
}

export default Map;
