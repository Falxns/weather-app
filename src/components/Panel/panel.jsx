import React from 'react';
import './panel.scss';
import PropTypes from 'prop-types';
import WeatherInfo from '../WeatherInfo/weatherInfo';

const Panel = ({ cityInfo }) => (
  <div className="main__panel panel">
    <WeatherInfo data={cityInfo} />
  </div>
);

Panel.defaultProps = {
  cityInfo: null,
};

Panel.propTypes = {
  cityInfo: PropTypes.shape({
    id: PropTypes.string,
    city: PropTypes.string,
    temp: PropTypes.string,
    cloudiness: PropTypes.string,
    wind: PropTypes.string,
    pressure: PropTypes.string,
    humidity: PropTypes.string,
  }),
};

export default Panel;
