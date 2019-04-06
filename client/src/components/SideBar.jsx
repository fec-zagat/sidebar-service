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
    } = details;
    const {
      street, city, zipcode, country,
    } = address;
    return (
      <div>
        <div>
          <Hours openHours={openHours} closeHours={closeHours} />
        </div>
        <div>
          <span>
            { street }
            { city }
            { zipcode }
            { country }
          </span>
        </div>
        <div>
          {phoneNumber}
        </div>
        <div>
          <a href={officialWebsite}>
            {officialWebsite}
          </a>
        </div>
        <div>
          <h1>Get Directions</h1>
          <Map address={address} />
        </div>
      </div>
    );
  }
}

export default SideBar;

SideBar.propTypes = {
  details: PropTypes.object.isRequired,
};
