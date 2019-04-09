import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hours from './Hours';
import Map from './Map';
import '../styles/sidebar.css';


class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { details } = this.props;
    const {
      openHours, closeHours, address, phoneNumber, officialWebsite,
      address: {
        street, city, zipcode, country,
      },
    } = details;
    return (
      <div className="d-flex flex-column">
        <div>
          <Hours openHours={openHours} closeHours={closeHours} />
        </div>
        <div className="addressBox d-flex justify-content-start">
          <div>
            <i className="fas fa-map-marker-alt" />
          </div>
          <div className="hoverRed">
            <span>
              {street}
              &#44;
              &nbsp;
              {city}
              &#44;
              &nbsp;
              {zipcode}
              &#44;
            </span>
            <div>
              {country}
            </div>
          </div>
        </div>
        <div className="phoneBox hoverRed d-flex justify-content-start">
          <div>
            <i className="fas fa-phone" />
          </div>
          <div>
            {phoneNumber}
          </div>
        </div>
        <div className="officialWebsiteBox d-flex justify-content-start">
          <div>
            <i className="far fa-credit-card" />
          </div>
          <div className="hoverRed">
            <a>
              {officialWebsite}
            </a>
          </div>
        </div>
        <div className="getDirectionsBox hoverRed d-flex justify-content-start">
          <div>
            <i className="fas fa-directions" />
          </div>
          <div>
            <h6>Get Directions</h6>
           
          </div>
        </div>
        <Map address={address} />
      </div>
    );
  }
}

export default SideBar;

SideBar.propTypes = {
  details: PropTypes.object.isRequired,
};
