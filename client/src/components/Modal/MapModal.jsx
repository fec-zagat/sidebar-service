import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import GOOGLEMAP_API_KEY from '../../config/googleMap';
import '../../styles/mapModal.css';

const TagazMarker = ({ text }) => <div>{text}</div>;

class MapModal extends Component {
  static defaultProps = {
    center: {
      lat: 37.7875,
      lng: -122.3966,
    },
    zoom: 15,
  };

  render() {
    const {
      close, center, zoom, details,
    } = this.props;
    const { address: { latitude, longtitude }, name } = details;

    return ReactDOM.createPortal(
      <div className="mapContainerModal flex-column">
        <div className="nameButtonContainer">
          <div className="nameMapModal w-80%">
            <h3>{name}</h3>
          </div>
          <div className="buttonMapModal">
            <a className="round-button" onClick={close}>X</a>
          </div>
        </div>

        <div className="mapModal">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLEMAP_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <TagazMarker
              lat={37.787570}
              lng={-122.396632}
              text={<div className="tagazLogo" />}
            />
          </GoogleMapReact>
        </div>
      </div>,
      document.getElementById('map-modal'),
    );
  }
}

export default MapModal;

MapModal.propTypes = {
  close: PropTypes.func.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number,
  details: PropTypes.object.isRequired,
};

TagazMarker.propTypes = {
  text: PropTypes.object.isRequired,
};
