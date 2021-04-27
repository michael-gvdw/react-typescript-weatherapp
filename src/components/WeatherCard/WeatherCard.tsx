import React, { useEffect, useState } from 'react';

// types 
import { WeatherData } from '../../Types'

// styles
import { Card } from 'react-bootstrap'
import Collapse from 'react-bootstrap/Collapse'



type Props = {
    weather: WeatherData;
    city: string;
}

const WeatherCard: React.FC<Props> = ({ weather, city }) => {

    const [collapse, setCollapse] = useState(false)

    useEffect(() => {

    }, [])

    const futureWeather = weather.daily.map((data, index) => {
        if (index !== 0) {
            const unixTimeStamp = data.dt // unix time stamp
            const milliseconds = unixTimeStamp * 1000 // unix time stamp in milliseconds
            const dateObj = new Date(milliseconds) // create a date object

            const day = dateObj.toDateString()

            return (<li key={index} className="list-group-item">
                <p className="float-left mr-auto">{day}</p>
                <div className="d-flex justify-content-end">
                    <p className="mr-2">
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="..." />
                    </p>
                    <p>{Math.ceil(data.temp.morn)} / {Math.ceil(data.temp.night)}<span style={{fontWeight: "normal"}} >&#8451;</span></p>
                </div>
            </li>)
        }
        return ''
    })
    
    return (
        <div className={`w-100`}>
            <div className="card border-dark mb-3">
                <div className="card-body">
                    {/*Title*/}
                    <h4 className="card-title font-weight-bold  ">{ city }</h4>
                    {/*Text*/}
                    <p className="card-text text-muted">{`${new Date().toDateString()}, ${weather.current.weather[0].description}`}</p>

                    {/* Currnet Weather */}
                    <div className="d-flex justify-content-between">
                        <p className="display-1">{weather.current.temp}<span style={{fontWeight: "normal"}} className="display-1">&#8451;</span></p>
                        <h1><img width="100"  src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`} alt="..." /></h1>
                    </div>

                
                    <div className="d-flex justify-content-between mb-4">
                        <p>{weather.current.humidity}% Humidity</p>
                        <p>{weather.current.wind_speed}km/h Winds</p>
                    </div>

                    <Collapse in={collapse}>
                        <ul className="list-group list-group-flush">
                            {futureWeather}
                        </ul>
                    </Collapse>

                    <hr />

                    <button className={"btn btn-secondary"}  onClick={() => setCollapse(!collapse)}>{!collapse ? ("Expand"): ("Collapse")}</button>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;