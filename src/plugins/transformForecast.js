import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForeCast = data => (
    data.list.filter(item => (
        moment.utc(moment.unix(item.dt)).hour()     === 6 ||
        moment.utc(moment.unix(item.dt)).hour()     === 12 ||
        moment.utc(moment.unix(item.dt)).hour()     === 18
    )).map(item => (
        {
            weekDay: moment.utc(moment.unix(item.dt)).format('ddd'),
            hour:    moment.utc(moment.unix(item.dt)).hour(),
            data: transformWeather(item),
        }
    ))
);

export default transformForeCast;