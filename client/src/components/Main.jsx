import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';

const Main = (props) => {
  const { details } = props;
  const {
    name, headerDescription, bodyDescription, cuisine, price,
  } = details;
  const { food, decor, service } = details.zagatReview;
  const { district } = details.address;

  return (
    <div className="mainBox">
      <div className="nameBox">
        <span>{name}</span>
      </div>
      <div className="headerDescriptionBox">
        <span>{headerDescription}</span>
      </div>
      <div className="cuisineDistrictPriceBox">
        <span>{cuisine}</span>
        <span>{district}</span>
        <span>{price}</span>
      </div>
      <div>
        <h1>THE TAGAZ REVIEW</h1>
      </div>
      <div>
        <div className="foodBox">{food}</div>
        <div className="decorBox">{decor}</div>
        <div className="serviceBox">{service}</div>
      </div>
      <div className="bodyDescriptionBox">
        <span>{bodyDescription}</span>
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  details: PropTypes.object.isRequired,
};
