import React, { useCallback, useState } from 'react';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Main from './components/Main/main';
import TemperatureContext from './context/temperature.context';
import { getWeather } from './api/weatherApi';

function App() {
  const [temperature, setTemperature] = useState(false);
  const [cities, setCities] = useState([]);

  const addNewCity = useCallback(
    async (newCityText) => {
      if (newCityText !== '') {
        const result = await getWeather(newCityText);
        setCities([result, ...cities]);
      }
    },
    [cities]
  );

  return (
    <TemperatureContext.Provider value={{ temperature, setTemperature }}>
      <Header addNewCity={addNewCity} />
      <Main cities={cities} />
      <Footer />
    </TemperatureContext.Provider>
  );
}

export default App;
