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
import { LinearProgress } from '@material-ui/core';

const App = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [selectedCity, setSelectedCity] = useState(Cities[0].name)
  const [weather, setWeather] = useState<WeatherData>({} as WeatherData)

  useEffect(() => {
    setIsLoading(true)
    fetchWeatherData()
    setIsLoading(false)
  }, [])

  const fetchWeatherData = async () => {
    const newWeather = await fetchWeather(selectedCity, Units.METRIC)
    console.log(newWeather)
    setWeather(newWeather)
  } 

  const handleCityNameChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    setSelectedCity(value)
  }

  if (isLoading) return <LinearProgress />

  return (
    <Wrapper>
      <div className={`app`}>
        <Select value={selectedCity} callback={handleCityNameChange} />
        <div>hey</div>
        <div>hey2</div>
      </div>
    </Wrapper>
  );
}

export default App;
