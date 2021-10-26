import React from 'react';
import './searchBar.scss';
import plus from '../../assets/icons/plus.svg';

const SearchBar = () => (
  <div className="header__search">
    <input
      className="search__input"
      type="search"
      minLength="3"
      placeholder="Enter a city"
    />
    <button className="search__btn" type="submit">
      <img className="search__img" src={plus} alt="+" />
    </button>
  </div>
);

export default SearchBar;
