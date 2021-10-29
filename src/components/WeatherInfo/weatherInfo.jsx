import React, { useContext } from 'react';
import './weatherInfo.scss';
import PropTypes from 'prop-types';
import TemperatureContext from '../../context/temperature.context';

const WeatherInfo = ({ data }) => {
  const { temperature } = useContext(TemperatureContext);

  const temp = temperature ? data?.tempF : data?.tempC;

  return (
    <table className="weather-info">
      <thead>
        <tr className="weather-info__tr">
          <th className="weather-info__th weather-info__city-label">Location</th>
          <th className="weather-info__th weather-info__temperature-label">Temperature</th>
          <th className="weather-info__th weather-info__cloudiness-label">Cloudiness</th>
          <th className="weather-info__th weather-info__wind-label">Wind</th>
          <th className="weather-info__th weather-info__pressure-label">Pressure</th>
          <th className="weather-info__th weather-info__humidity-label">Humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr className="weather-info__tr">
          <td className="weather-info__td weather-info__city">{!data ? 'N/A' : data.city}</td>
          <td className="weather-info__td weather-info__temperature">{temp ?? 'N/A'}</td>
          <td className="weather-info__td weather-info__cloudiness">
            {!data ? 'N/A' : data.cloudiness}
          </td>
          <td className="weather-info__td weather-info__wind">{!data ? 'N/A' : data.wind}</td>
          <td className="weather-info__td weather-info__pressure">
            {!data ? 'N/A' : data.pressure}
          </td>
          <td className="weather-info__td weather-info__humidity">
            {!data ? 'N/A' : data.humidity}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

WeatherInfo.defaultProps = {
  data: null,
};

WeatherInfo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    city: PropTypes.string,
    tempC: PropTypes.string,
    tempF: PropTypes.string,
    cloudiness: PropTypes.string,
    wind: PropTypes.string,
    pressure: PropTypes.string,
    humidity: PropTypes.string,
  }),
};

export default WeatherInfo;
