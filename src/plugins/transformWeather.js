import convert from 'convert-units';
import { SUN } from '../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
};  

const getWeatherState = () => { return SUN }

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState();
    const temperature = getTemp(temp);
    const newData = {
        humidity,
        temperature,
        wind: `${speed} m/s`,
        weatherState,
    };

    return newData;
    
}

export default transformWeather;