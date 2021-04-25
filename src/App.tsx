import { type } from 'node:os';
import React, { useState, useEffect } from 'react';

import { fetchWeather } from './Api'

export enum Units {
  STANDARD = "standard",
  METRIC = "metric",
  IMPERIAL = "imperial"
}

export type DailyWeather = {
  name: string;
  main: {
    feels_like: string;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  }
}


function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<DailyWeather>({} as DailyWeather)


  useEffect(() => {
    const val = navigator.geolocation.getCurrentPosition(position => {
      return position
      // const { latitude, longitude } = position.coords;
      // // Show a map centered at latitude / longitude.
    });
    console.log(val)
    fetchCurrentWeather()
  }, [])

  const fetchCurrentWeather = async () => {
    const newWeather = await fetchWeather("Amsterdam", Units.METRIC) as DailyWeather
    setWeather(newWeather)
  }

  return (
    <div>
      weather app
    </div>
  );
}

export default App;
