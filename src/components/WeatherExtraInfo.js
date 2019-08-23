import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity} % - ${wind} viento`}</span>
    </div>
);

export default WeatherExtraInfo;