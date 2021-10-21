import React from 'react';
import './searchBar.scss';

function SearchBar() {
  return (
    <input
      className="header__search"
      type="search"
      minLength="3"
      placeholder="Enter a city"
    />
  );
}

export default SearchBar;
