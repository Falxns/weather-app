import React, { useContext } from 'react';
import './temperatureSwitch.scss';
import TemperatureContext from '../../context/temperature.context';

function TemperatureSwitch() {
  const { setTemperature } = useContext(TemperatureContext);
  const handleTemperatureChange = (event) => {
    setTemperature(event.target.checked);
  };

  return (
    <div className="temperature-switch">
      <p className="temperature-switch__p">°C</p>
      <label className="temperature-switch__switch switch" htmlFor="switch">
        <input
          className="switch__input"
          type="checkbox"
          id="switch"
          onChange={handleTemperatureChange}
        />
        <span className="switch__slider" />
      </label>
      <p className="temperature-switch__p">℉</p>
    </div>
  );
}

export default TemperatureSwitch;
