import React from 'react';
import './temperatureSwitch.scss';

const TemperatureSwitch = () => (
  <div className="temperature-switch">
    <p className="temperature-switch__p">°C</p>
    <label className="temperature-switch__switch switch" htmlFor="switch">
      <input className="switch__input" type="checkbox" id="switch" />
      <span className="switch__slider" />
    </label>
    <p className="temperature-switch__p">℉</p>
  </div>
);

export default TemperatureSwitch;
