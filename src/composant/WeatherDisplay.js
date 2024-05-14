import React from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'moment/locale/fr'
import moment from 'moment'
moment.locale('fr')

export const formatDateTime = (dateTimeString) => {
    const formattedDateTime = moment(dateTimeString).format('DD MMM YYYY [à] HH[h]mm')
    return formattedDateTime
}
const WeatherDisplay = ({ weather, forecast }) => {
    return (
        <div className="weather-container">
            {weather ? (
                <div className="weather-card">
                    <h2>{weather.name}</h2>
                    <p><FontAwesomeIcon icon={getWeatherIcon(weather.weather[0].main)} size="3x" /></p>
                    <p>Température: {weather.main.temp} °C</p>
                    <p>Description: {weather.weather[0].description}</p>
                    <p>Humidité: {weather.main.humidity}%</p>
                    <p>Vitesse du vent: {weather.wind.speed} m/s</p>
                </div>
            ) : (
                <Alert variant="danger">Ville n'est pas trouvée !</Alert>
            )}
            {forecast ? (
                <div>
                    <h3>Prévision</h3>
                    {forecast.list.map((item, index) => (
                        <div className="forecast-card" key={index}>
                            <p>Date/Heure: {formatDateTime(item.dt_txt)}</p>
                            <p><FontAwesomeIcon icon={getWeatherIcon(item.weather[0].main)} size="2x" /></p>
                            <p>Température: {item.main.temp} °C</p>
                            <p>Description: {item.weather[0].description}</p>
                            <p>Humidité: {item.main.humidity}%</p>
                            <p>Vitesse du vent: {item.wind.speed} m/s</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

// Function to map weather conditions to Font Awesome icons
const getWeatherIcon = (weather) => {
    switch (weather) {
        case 'Clear':
            return ['fas', 'sun'];
        case 'Clouds':
            return ['fas', 'cloud'];
        case 'Rain':
            return ['fas', 'cloud-rain'];
        case 'Drizzle':
            return ['fas', 'cloud-sun'];
        case 'Thunderstorm':
            return ['fas', 'bolt'];
        default:
            return ['fas', 'wind'];
    }
};

export default WeatherDisplay;
