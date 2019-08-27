import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';
import API from  './../../services/API';
import APIKEY from './../../services/weathers/APIKEY';
import transformWeather from './../../plugins/transformWeather';

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = { city: 'Monclova, Coahuila', data: null};
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

    componentDidMount() {
        this.handleUpdateClick();
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weather-location">
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress></CircularProgress>
                }
            </div>            
        );
    }
}

export default WeatherLocation;