import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity} % - ${wind} viento`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;