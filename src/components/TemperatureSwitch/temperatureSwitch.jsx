import React from "react";
import "./temperatureSwitch.css";

function TemperatureSwitch() {
  function handleSwitch(e) {
    console.log(e.target.checked);
  }

  return (
    <div className="temperature-switch">
      <p className="temperature-switch__p">°C</p>
      <label className="temperature-switch__switch switch">
        <input
          className="switch__input"
          type="checkbox"
          onClick={handleSwitch}
        />
        <span className="switch__slider"></span>
      </label>
      <p className="temperature-switch__p">℉</p>
    </div>
  );
}

export default TemperatureSwitch;
