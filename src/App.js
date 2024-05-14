import React, { useState } from 'react';
import SearchBar from './composant/SearchBar';
import WeatherDisplay from './composant/WeatherDisplay';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faCloud, faCloudRain, faCloudSun, faWind, faTint } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faCloud, faCloudRain, faCloudSun, faWind, faTint);

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getWeather = (currentWeatherData, forecastData) => {
    setWeather(currentWeatherData);
    setForecast(forecastData);
  };

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <SearchBar getWeather={getWeather} />
      <WeatherDisplay weather={weather} forecast={forecast} />
    </div>
  );
};

export default App;