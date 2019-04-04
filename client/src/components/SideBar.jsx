import React from 'react';
import PropTypes from 'prop-types';

const SideBar = (props) => {
  const style1 = {
    textAlign: 'center',
  };
  const { details } = props;
  const { address, phoneNumber, officialWebsite } = details;
  const {
    street, city, zipcode, country,
  } = address;
  return (
    <div style={style1}>
      <div>
        <span>
          {street}
          {city}
          {zipcode}
          {country}
        </span>
      </div>
      <div>
        {phoneNumber}
      </div>
      <div>
        {officialWebsite}
      </div>
      <div>
        <h1>Get Directions</h1>
      </div>
    </div>
  );
};

export default SideBar;

SideBar.propTypes = {
  details: PropTypes.object.isRequired,
};
