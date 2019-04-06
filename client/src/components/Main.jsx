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
      <h1>{name}</h1>
      <p><span>{headerDescription}</span></p>

      <div className="cuisineDistrictPrice">
        <div className="d-inline m-1">{cuisine}</div>
        &middot;
        <div className="d-inline m-1">{district}</div>
        &middot;
        <div className="d-inline m-1">{price}</div>
      </div>
      <div className="mainDivider">
        <img src="./images/logo.svg" alt="logo" />
        &nbsp;
      </div>
      <h3 className="theTagazReview">THE TAGAZ REVIEW</h3>
      <div className="foodDecorService border-bottom text-center">
        <div className="d-inline-block border-right">
          <h2>{food}</h2>
          <h6>FOOD</h6>
        </div>
        <div className="d-inline-block border-right">
          <h2>{decor}</h2>
          <h6>DECOR</h6>
        </div>
        <div className="d-inline-block">
          <h2>{service}</h2>
          <h6>SERVICE</h6>
        </div>
      </div>
      <span>{bodyDescription}</span>
    </div>
  );
};

export default Main;

Main.propTypes = {
  details: PropTypes.object.isRequired,
};
