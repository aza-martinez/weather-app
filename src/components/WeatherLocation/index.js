import React from 'react';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';
import { RAIN } from '../../constants/weathers';

const data = {
    temperature: 25,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div className="weather-location">
        <Location city={'Saltillo, Coahuila'}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;