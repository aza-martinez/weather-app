import React, { Component } from 'react';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';
import API from  './../../services/API';
import APIKEY from './../../services/weathers/APIKEY';
import { RAIN } from '../../constants/weathers';
import transformWeather from './../../plugins/transformWeather';

const data = {
    temperature: 25,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = { city: 'Monclova, Coahuila', data };
    }

    handleUpdateClick = () => {
        API.get(`/weather?q=London,uk&appid=${APIKEY}`)
        .then((response) => {
           const newWeather = transformWeather(response.data);
           this.setState({ data: newWeather }); 
        }).catch((error) => {
            console.log(error);
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