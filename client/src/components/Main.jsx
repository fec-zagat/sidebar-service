import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const { details } = props;
  const {
    name, headerDescription, bodyDescription, cuisine, price,
  } = details;
  const { food, decor, service } = details.zagatReview;
  const { district } = details.address;

  return (
    <div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{headerDescription}</span>
      </div>
      <div>
        <span>{cuisine}</span>
        <span>{district}</span>
        <span>{price}</span>
      </div>
      <div>
        <h1>THE TAGAZ REVIEW</h1>
      </div>
      <div>
        <span>{food}</span>
        <span>{decor}</span>
        <span>{service}</span>
      </div>
      <div>
        <span>{bodyDescription}</span>
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  details: PropTypes.object.isRequired,
};
