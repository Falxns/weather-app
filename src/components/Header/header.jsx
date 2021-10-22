import React from 'react';
import './header.scss';
import WeatherInfo from '../WeatherInfo/weatherInfo';
import TemperatureSwitch from '../TemperatureSwitch/temperatureSwitch';
import SearchBar from '../SearchBar/searchBar';
import logoIcon from '../../assets/icons/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoIcon} alt="logo" />
      <WeatherInfo />
      <SearchBar />
      <TemperatureSwitch />
    </header>
  );
}

export default Header;
