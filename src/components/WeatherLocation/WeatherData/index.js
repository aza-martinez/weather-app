import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { RAIN } from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="weather-data-cont">
        <WeatherTemperature
            temperature={20}
            weatherState={RAIN}>    
        </WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10 m/s'}></WeatherExtraInfo>
    </div>
);

export default WeatherData;