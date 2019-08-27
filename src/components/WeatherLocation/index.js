import React, { Component } from 'react';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';
import { RAIN, SUN } from '../../constants/weathers';
import API from  './../../services/API';
import APIKEY from './../../services/weathers/APIKEY';

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

    getWeatherState = () => { return SUN }

    getData = weather_data => {
        const { humidity, temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState =  SUN;
        const newData = {
            humidity,
            temperature: temp,
            wind: speed,
            weatherState,
        };

        return newData;
        
    }

    handleUpdateClick = () => {
        API.get(`/weather?q=London,uk&appid=${APIKEY}`)
        .then((response) => {
           const newWeather = this.getData(response.data);
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