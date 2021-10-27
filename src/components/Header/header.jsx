import React, { useEffect, useState } from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import WeatherInfo from '../WeatherInfo/weatherInfo';
import TemperatureSwitch from '../TemperatureSwitch/temperatureSwitch';
import SearchBar from '../SearchBar/searchBar';
import logoIcon from '../../assets/icons/logo.svg';
import { getWeatherByCurrentPosition } from '../../api/weatherApi';

const Header = ({ addNewCity }) => {
  const [currentCityData, setCurrentCityData] = useState(null);

  useEffect(() => {
    getWeatherByCurrentPosition(setCurrentCityData);
  }, []);

  return (
    <header className="header">
      <img className="header__logo" src={logoIcon} alt="logo" />
      <WeatherInfo data={currentCityData} />
      <SearchBar addNewCity={addNewCity} />
      <TemperatureSwitch />
    </header>
  );
};

Header.propTypes = {
  addNewCity: PropTypes.func.isRequired,
};

export default Header;
