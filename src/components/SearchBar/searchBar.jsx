import React from 'react';
import './searchBar.scss';

const SearchBar = () => (
  <input
    className="header__search"
    type="search"
    minLength="3"
    placeholder="Enter a city"
  />
);

export default SearchBar;
