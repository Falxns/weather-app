import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Main from './components/Main/main';
import TemperatureContext from './context/temperature.context';

function App() {
  const [temperature, setTemperature] = useState(false);

  return (
    <TemperatureContext.Provider value={{ temperature, setTemperature }}>
      <Header />
      <Main />
      <Footer />
    </TemperatureContext.Provider>
  );
}

export default App;
