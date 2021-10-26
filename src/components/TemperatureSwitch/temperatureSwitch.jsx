import React, { useContext } from 'react';
import './temperatureSwitch.scss';
import temperatureContext from '../../context/temperature.context';

function TemperatureSwitch() {
  const { setTemperature } = useContext(temperatureContext);
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
