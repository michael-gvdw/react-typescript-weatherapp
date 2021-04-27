// weather object
export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

// alert object
export type Alert = {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
}

// current weather object
export type Current = {
    dt: number;
    sunrize: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
}

// daily weather object
export type Daily = {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    },
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    },
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[]
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}[]

// api return type
export type WeatherData = {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    daily: Daily;
    alerts: Alert[];
}

// units enum
export enum Units {
    STANDARD = "standard",
    METRIC = "metric",
    IMPERIAL = "imperial"
}