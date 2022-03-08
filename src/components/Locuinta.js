import React from "react";
import PropTypes from "prop-types";
import "./Locuinta.css";

const Locuinta = ({ id, image, description, selectLocuinta, adresa, pret }) => {
  return (
    <div className="locuinta" onClick={selectLocuinta}>
      <img src={image} alt="garsoniera1" />
      <span>
        <span>{pret}&euro;</span>
        <span>{adresa}</span>
        <span>{description}</span>
      </span>
    </div>
  );
};

Locuinta.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  selectLocuinta: PropTypes.func,
};

export default Locuinta;
