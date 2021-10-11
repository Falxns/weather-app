import React from "react";
import WeatherInfo from "../WeatherInfo/weatherInfo";
import TemperatureSwitch from "../TemperatureSwitch/temperatureSwitch";

function Header() {
  return (
    <header>
      <img src="" alt="logo" />
      <WeatherInfo />
      <TemperatureSwitch />
    </header>
  );
}

export default Header;
