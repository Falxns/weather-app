import React from 'react';
import './weatherInfo.scss';

const WeatherInfo = ({ cityData }) => (
  <table className="weather-info">
    <thead>
      <tr className="weather-info__tr">
        <th className="weather-info__th weather-info__city-label">Location</th>
        <th className="weather-info__th weather-info__temperature-label">
          Temperature
        </th>
        <th className="weather-info__th weather-info__cloudiness-label">
          Cloudiness
        </th>
        <th className="weather-info__th weather-info__wind-label">Wind</th>
        <th className="weather-info__th weather-info__pressure-label">
          Pressure
        </th>
        <th className="weather-info__th weather-info__humidity-label">
          Humidity
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="weather-info__tr">
        <td className="weather-info__td weather-info__city">
          {!cityData ? 'N/A' : cityData.location.region}
        </td>
        <td className="weather-info__td weather-info__temperature">
          {!cityData ? 'N/A' : `${cityData.current.temp_c} °C`}
        </td>
        <td className="weather-info__td weather-info__cloudiness">
          {!cityData ? 'N/A' : cityData.current.condition.text}
        </td>
        <td className="weather-info__td weather-info__wind">
          {!cityData
            ? 'N/A'
            : `${cityData.current.wind_dir} ${cityData.current.wind_kph} km/h`}
        </td>
        <td className="weather-info__td weather-info__pressure">
          {!cityData ? 'N/A' : `${cityData.current.pressure_mb} mb`}
        </td>
        <td className="weather-info__td weather-info__humidity">
          {!cityData ? 'N/A' : `${cityData.current.humidity} %`}
        </td>
      </tr>
    </tbody>
  </table>
);

export default WeatherInfo;
