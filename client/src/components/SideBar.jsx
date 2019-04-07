import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hours from './Hours';
import Map from './Map';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
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
      <div>
        <div>
          <Hours openHours={openHours} closeHours={closeHours} />
        </div>
        <div className="d-flex justify-content-start">
          <div>
            <i className="fas fa-map-marker-alt" />
          </div>
          <div>
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
        <div className="d-flex justify-content-start">
          <div>
            <i className="fas fa-phone" />
          </div>
          <div>
            {phoneNumber}
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <div>
            <i className="far fa-credit-card" />
          </div>
          <div>
            <a href={officialWebsite}>
              {officialWebsite}
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <div>
            <i className="fas fa-directions" />
          </div>
          <div>
            <h6>Get Directions</h6>
            <Map address={address} />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;

SideBar.propTypes = {
  details: PropTypes.object.isRequired,
};
