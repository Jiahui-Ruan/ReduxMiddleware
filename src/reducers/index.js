import { combineReducers } from 'redux';
import WeatherReducer from './reduer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
