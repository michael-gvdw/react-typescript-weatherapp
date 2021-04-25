import axios from 'axios'

// types
import { CityNames } from './Cities'
import { DailyWeather, Units } from './App'



const WEATHER_URI = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (cityName: string, unit: Units) => {
    const { data } = await axios.get(`${WEATHER_URI}?q=${cityName}&units=${unit}&appid=${API_KEY}`)
    return data
}