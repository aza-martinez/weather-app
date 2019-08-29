import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/weathers/getUrlWeatherByCity';
import Location from './Location'; 
import WeatherData from './WeatherData'; 
import './styles.css';
import API from  './../../services/API';
import transformWeather from './../../plugins/transformWeather';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = { city , data: null};
    }

    handleUpdateClick = () => {
        const url_weather = getUrlWeatherByCity(this.state.city);
        API.get(url_weather)
        .then((response) => {
           const newWeather = transformWeather(response.data);
           this.setState({ data: newWeather }); 
        }).catch((error) => {
            console.log(error);
        }); 
    }

    componentDidMount() { this.handleUpdateClick(); }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weather-location" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress></CircularProgress>
                }
            </div>            
        );
    }
}

WeatherLocation.propsTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}


export default WeatherLocation;