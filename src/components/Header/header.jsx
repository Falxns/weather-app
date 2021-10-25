import React, { useEffect, useState } from 'react';
import './header.scss';
import WeatherInfo from '../WeatherInfo/weatherInfo';
import TemperatureSwitch from '../TemperatureSwitch/temperatureSwitch';
import SearchBar from '../SearchBar/searchBar';
import logoIcon from '../../assets/icons/logo.svg';

function Header() {
  const KEY = '88f3ecccd19141f3a0680416212510';
  const [currentCityData, setCurrentCityData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${position.coords.latitude},${position.coords.longitude}`
      )
        .then((res) => res.json())
        .then((res) => setCurrentCityData(res));
    });
  }, []);
  return (
    <header className="header">
      <img className="header__logo" src={logoIcon} alt="logo" />
      <WeatherInfo
        cityData={currentCityData !== null ? currentCityData : null}
      />
      <SearchBar />
      <TemperatureSwitch />
    </header>
  );
}

export default Header;
