import React, { useState, useEffect } from 'react';

// Api
import { fetchWeather } from './Api'

// types
import { Cities } from './Cities'
import { WeatherData, Units } from './Types'

// styles 
import { Wrapper } from './App.styles'


// components
import Select from './components/Select/Select'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { LinearProgress, Divider } from '@material-ui/core';

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [selectedCity, setSelectedCity] = useState(Cities[0].name)
  const [weather, setWeather] = useState<WeatherData>({} as WeatherData)

  useEffect(() => {
    fetchWeatherData()
  }, [])

  const fetchWeatherData = async () => {
    const newWeather = await fetchWeather(selectedCity, Units.METRIC)
    setWeather(newWeather)
    setIsLoading(false)
  } 

  const handleCityNameChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setSelectedCity(value)
    fetchWeatherData()
  }

  if (isLoading) return <LinearProgress />

  return (
    <Wrapper>
      <div className={`app`}>
        <Select value={selectedCity} callback={handleCityNameChange} />
        <hr />
        <WeatherCard weather={weather} city={selectedCity}/>
      </div> 
    </Wrapper>    
  );
}

export default App;
