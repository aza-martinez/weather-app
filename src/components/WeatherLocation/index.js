import React from 'react';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';

const WeatherLocation = () => (
    <div className="weather-location">
        <Location city={'Saltillo, Coahuila'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;