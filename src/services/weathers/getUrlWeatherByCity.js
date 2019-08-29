import { URL_BASE_WEATHER, API_KEY } from './api_url';

const getUrlWeatherByCity = city => {
    return `${URL_BASE_WEATHER}?q=${city}&appid=${API_KEY}`
};

export default getUrlWeatherByCity;

