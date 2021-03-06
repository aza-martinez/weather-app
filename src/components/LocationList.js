import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }

    const strToComponents = cities => (
        cities.map( city => (
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            ></WeatherLocation>
        ) )
    );
    
    return (
        <div className="location-list">
            { strToComponents(cities) }
        </div>
    )
};

LocationList.prototype = {
    cities:  PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;