import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../plugins/transformForecast';
import API from './../services/API';
import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ];

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// };
const API_KEY = 'b1c8d169a9557c15259286a05f7b900d';
const URL_BASE_WEATHER = 'https://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
        
    constructor() {
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() { this.updateCity(this.props.city); }

    componentDidUpdate(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city)
        }
    }
    
    updateCity = city => {
        const url_forecast = `${URL_BASE_WEATHER}?q=${city}&appid=${API_KEY}`;
        API.get(url_forecast)
        .then( ({ data }) => {
            const forecastData = transformForecast(data);
            this.setState({ forecastData });
        })
        .catch((err) => { console.log(err); })        
    }

    renderForecastItemDays(forecastData) {
              return forecastData.map( forecast => 
                <ForecastItem
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay}
                    hour={forecast.hour}
                    data={forecast.data}>
                </ForecastItem>
              )
    }

    renderProgress = () => {
        return 'Cargando pronostico extendido...'
    }
    
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
                {forecastData ? 
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = { city: PropTypes.string.isRequired }


export default ForecastExtended;