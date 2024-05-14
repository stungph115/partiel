import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { env } from '../env';

const SearchBar = ({ getWeather }) => {
    const [city, setCity] = useState('');
    const apiKey = env.api_key
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (city.trim() === '') return
        try {
            const [currentWeatherResponse, forecastResponse] = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`),
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            ]);
            getWeather(currentWeatherResponse.data, forecastResponse.data);
            setCity('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };


    return (
        <Form onSubmit={handleSubmit} className="form" style={{ display: 'flex', justifyContent: 'center' }}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Entrer nom de la ville"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginLeft: 10 }}>
                chercher
            </Button>
        </Form >
    );
};

export default SearchBar;
