import React from "react";
import "./header.css";
import WeatherInfo from "../WeatherInfo/weatherInfo";
import TemperatureSwitch from "../TemperatureSwitch/temperatureSwitch";
import logoIcon from "../../assets/icons/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoIcon} alt="logo" />
      <WeatherInfo />
      <TemperatureSwitch />
    </header>
  );
}

export default Header;
