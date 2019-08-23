import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weather-data-cont">
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState}>    
        </WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

export default WeatherData;