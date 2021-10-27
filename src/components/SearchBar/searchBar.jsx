import React, { useState } from 'react';
import './searchBar.scss';
import PropTypes from 'prop-types';
import plus from '../../assets/icons/plus.svg';

const SearchBar = ({ addNewCity }) => {
  const [text, setText] = useState('');

  const handleBtnCLick = async () => {
    addNewCity(text);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="header__search">
      <input
        className="search__input"
        type="search"
        minLength="3"
        placeholder="Enter a city"
        onChange={handleInputChange}
      />
      <button className="search__btn" type="submit" onClick={handleBtnCLick}>
        <img className="search__img" src={plus} alt="+" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  addNewCity: PropTypes.func.isRequired,
};

export default SearchBar;
