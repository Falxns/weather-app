import React from "react";
import "./weatherInfo.css";

function WeatherInfo() {
  return (
    <table className="weather-info">
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
      <tr className="weather-info__tr">
        <td className="weather-info__td weather-info__city">Minsk</td>
        <td className="weather-info__td weather-info__temperature">27 C</td>
        <td className="weather-info__td weather-info__cloudiness">
          light rain
        </td>
        <td className="weather-info__td weather-info__wind">
          North-East, 4.57 m/s
        </td>
        <td className="weather-info__td weather-info__pressure">1008 hpa</td>
        <td className="weather-info__td weather-info__humidity">80%</td>
      </tr>
    </table>
  );
}

export default WeatherInfo;
