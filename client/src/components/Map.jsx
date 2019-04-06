import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);

    this.apiKey = 'AIzaSyAHVxGlmHpg2eeLdURo8ZjJSVLRc_7672k';
    this.mapURL = (latitude, longtitude) => `https://www.google.com/maps/embed/v1/place?q=${latitude},${longtitude}&key=${this.apiKey}`;
  }

  render() {
    const { address } = this.props;
    const { latitude, longtitude } = address;
    return (
      <div>
        <iframe
          title="googleMap"
          height="450"
          frameBorder="0"
          className="mapIframe"
          src={this.mapURL(latitude, longtitude)}
        />
      </div>
    );
  }
}

export default Map;

Map.propTypes = {
  address: PropTypes.object.isRequired,
};
