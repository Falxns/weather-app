import React from 'react';
import './panel.css';
import WeatherInfo from '../WeatherInfo/weatherInfo';

function Panel() {
  return (
    <div className="main__panel panel">
      <WeatherInfo />
    </div>
  );
}

export default Panel;
