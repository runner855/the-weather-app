import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";

const App = ({ forecasts, location }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <h1 className="title">Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
};

App.propTypes = {
  forecasts: PropTypes.arrayOf([
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number.toString(),
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    }),
  ]).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
