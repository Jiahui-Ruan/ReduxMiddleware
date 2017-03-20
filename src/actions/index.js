import axios from 'axios';
const API_Key = 'd8620cb808512dd142e53dfb74df4916';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}