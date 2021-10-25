import React from 'react';
import './weatherInfo.scss';

function WeatherInfo({ cityData }) {
  return (
    <table className="weather-info">
      <thead>
        <tr className="weather-info__tr">
          <th className="weather-info__th weather-info__city-label">
            Location
          </th>
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
            {!cityData ? 'undef' : cityData.location.name}
          </td>
          <td className="weather-info__td weather-info__temperature">
            {!cityData ? 'undef' : `${cityData.current.temp_c} °C`}
          </td>
          <td className="weather-info__td weather-info__cloudiness">
            {!cityData ? 'undef' : cityData.current.condition.text}
          </td>
          <td className="weather-info__td weather-info__wind">
            {!cityData
              ? 'undef'
              : `${cityData.current.wind_dir} ${cityData.current.wind_kph} km/h`}
          </td>
          <td className="weather-info__td weather-info__pressure">
            {!cityData ? 'undef' : `${cityData.current.pressure_mb} mb`}
          </td>
          <td className="weather-info__td weather-info__humidity">
            {!cityData ? 'undef' : `${cityData.current.humidity} %`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherInfo;
