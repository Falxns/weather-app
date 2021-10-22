import React from 'react';
import './panel.scss';
import WeatherInfo from '../WeatherInfo/weatherInfo';

function Panel() {
  return (
    <div className="main__panel panel">
      <WeatherInfo />
    </div>
  );
}

export default Panel;
