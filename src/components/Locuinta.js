import React from "react";
import PropTypes from "prop-types";
import "./Locuinta.css";

const Locuinta = ({
  id,
  image,
  description,
  selectLocuinta,
  adresa,
  pret,
  role,
  selectAppointments,
  selectCalendar,
  selectGraph,
}) => {
  const isAgent = () => {
    if (role === "agent") {
      return (
        <>
          <button
            className="btn btn-primary btn-lg col-4"
            onClick={selectAppointments}
          >
            Appointments
          </button>
          <button
            className="btn btn-primary btn-lg col-4"
            onClick={selectCalendar}
          >
            Calendar
          </button>
          <button
            className="btn btn-primary btn-lg col-4"
            onClick={selectGraph}
          >
            Graph
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div className="locuinta" onClick={selectLocuinta}>
        <img src={image} alt="garsoniera1" />
        <span>
          <span>{pret}&euro;</span>
          <span>{adresa}</span>
          <span>{description}</span>
        </span>
      </div>
      {isAgent()}
    </>
  );
};

Locuinta.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  selectLocuinta: PropTypes.func,
};

export default Locuinta;
