import React, { Component } from 'react';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';
import { RAIN, WINDY } from '../../constants/weathers';

const data = {
    temperature: 25,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 85,
    weatherState: WINDY,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = { city: 'Monclova, Coahuila', data };
    }

    handleUpdateClick = () => {
        this.setState({
            city: 'Arteaga, Coahuila',
            data:  data2,
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weather-location">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>            
        );
    }
}

export default WeatherLocation;