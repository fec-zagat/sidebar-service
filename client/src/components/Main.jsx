import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';

const Main = (props) => {
  const { details } = props;
  const {
    name, headerDescription, bodyDescription, cuisine, price,
    zagatReview: { food, decor, service }, address: { district },
  } = details;

  return (
    <div className="mainBox">
      <h1>{name}</h1>
      <h6><span>{headerDescription}</span></h6>
      <div className="cuisineDistrictPrice">
        <div className="d-inline m-1">{cuisine}</div>
        &middot;
        <div className="d-inline m-1">{district}</div>
        &middot;
        <div className="d-inline m-1">{price}</div>
      </div>
      <div className="mainDivider">
        <div className="tagazLogo" />
        &nbsp;
      </div>
      <h5 className="theTagazReview mb-3">the tagaz review</h5>
      <div className="foodDecorService text-center mt-2">
        <div className="d-inline-block border-right mt-10">
          <h2>{food}</h2>
          <h6>food</h6>
        </div>
        <div className="d-inline-block border-right">
          <h2>{decor}</h2>
          <h6>decor</h6>
        </div>
        <div className="d-inline-block">
          <h2>{service}</h2>
          <h6>service</h6>
        </div>
      </div>
      <div className="foodDecorServiceLine border-bottom mb-3 mt-3" />
      <div className="bodyDescriptionBox">
        <h4>{bodyDescription}</h4>
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  details: PropTypes.object.isRequired,
};
