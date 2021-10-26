import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Main from './components/Main/main';
import temperatureContext from './context/temperature.context';

function App() {
  const [temperature, setTemperature] = useState(false);

  return (
    <temperatureContext.Provider value={{ temperature, setTemperature }}>
      <Header />
      <Main />
      <Footer />
    </temperatureContext.Provider>
  );
}

export default App;
