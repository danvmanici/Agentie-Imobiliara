import React from "react";
import PropTypes from "prop-types";
import "./Locuinta.css";

const Locuinta = ({ image, description }) => {
  return (
    <div className="locuinta">
      <img src={image} alt="garsoniera1" />
      <span>{description}</span>
    </div>
  );
};

Locuinta.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Locuinta;
