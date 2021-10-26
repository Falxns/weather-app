import React from 'react';
import './main.scss';
import PropTypes from 'prop-types';
import Panel from '../Panel/panel';

const Main = ({ cities }) => {
  const renderPanels = () => cities.map((city) => <Panel cityInfo={city} key={city.id} />);

  return <div className="main">{renderPanels()}</div>;
};

Main.defaultProps = {
  cities: PropTypes.array,
};

Main.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      city: PropTypes.string,
      temp: PropTypes.string,
      cloudiness: PropTypes.string,
      wind: PropTypes.string,
      pressure: PropTypes.string,
      humidity: PropTypes.string,
    })
  ),
};

export default Main;
