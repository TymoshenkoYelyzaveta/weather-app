import React from 'react'
import WeatherImage from './WeatherImage'
import { weatherConditions } from './../weather-conditions'
import SunriseSunset from './SunriseSunset'
import Date from './Date'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const Weather = ({ weatherData }) => {
    const weatherImagePath = weatherConditions.find(
        (icon) => icon.id === weatherData.weather[0].id
    ).icon
    return (
        <div className='weather-container'>
            <Date />
            <p className='city'>{weatherData.name}</p>
            <WeatherImage iconPath={`${ICONS_FOLDER}${weatherImagePath}`} />
            <p className='weather-temperature'>
                {Math.round(weatherData.main.temp)} °C
            </p>
            <p className='weather-description'>
                {weatherData.weather[0].description}
            </p>
            <SunriseSunset
                sunrise={weatherData.sys.sunrise}
                sunset={weatherData.sys.sunset}
            />
            <p>Humidity: {weatherData.main.humidity} %</p>
        </div>
    )
}

export default Weather
