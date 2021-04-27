import axios from 'axios'

// types
import { WeatherData, Units } from './Types'
import { Cities } from './Cities'
 

const EXCLUDE = ['minutely', 'hourly']
const WEATHER_URI = 'http://api.openweathermap.org/data/2.5/onecall'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (name: string, unit: Units): Promise<WeatherData> => {
    const city = Cities.find(city => city.name === name)
    const { data } = await axios.get(`${WEATHER_URI}?lat=${city?.lat}&lon=${city?.lon}&units=${unit}&exclude=${EXCLUDE}&appid=${API_KEY}`)
    return data
}
