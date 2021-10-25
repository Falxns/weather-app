import React, { useEffect, useState } from 'react';
import './header.scss';
import WeatherInfo from '../WeatherInfo/weatherInfo';
import TemperatureSwitch from '../TemperatureSwitch/temperatureSwitch';
import SearchBar from '../SearchBar/searchBar';
import logoIcon from '../../assets/icons/logo.svg';
import { getWeatherByCurrentPosition } from '../../api/weatherApi';

function Header() {
  const [currentCityData, setCurrentCityData] = useState(null);

  useEffect(() => {
    getWeatherByCurrentPosition(setCurrentCityData);
  }, []);

  return (
    <header className="header">
      <img className="header__logo" src={logoIcon} alt="logo" />
      <WeatherInfo data={currentCityData} />
      <SearchBar />
      <TemperatureSwitch />
    </header>
  );
}

export default Header;
