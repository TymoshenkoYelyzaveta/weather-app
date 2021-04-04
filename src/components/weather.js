import React from 'react'
import WeatherImage from './WeatherImage'
import { weatherConditions } from './../weather-conditions'
import SunriseSunset from './SunriseSunset'
import Date from './Date'
import City from './City'
import WeatherDescription from './WeatherDescription'
import AtmosphericData from './AtmosphericData'
import SideMenu from './SideMenu'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const Weather = ({ weatherData }) => {
    const weatherImagePath = weatherConditions.find(
        (icon) => icon.id === weatherData.weather[0].id
    ).icon
    return (
        <div className='weather-container'>
            <SideMenu />
            <div className='weather-display'>
                <Date />
                <City cityName={weatherData.name} />
                <WeatherImage
                    iconPath={`${ICONS_FOLDER}${weatherImagePath}`}
                    description={weatherData.weather[0].description}
                />
                <WeatherDescription
                    temperature={weatherData.main.temp}
                    feelsLike={weatherData.main.feels_like}
                />
                <AtmosphericData
                    humidity={weatherData.main.humidity}
                    windSpeed={weatherData.wind.speed}
                    feelsLike={weatherData.main.feels_like}
                    pressure={weatherData.main.pressure}
                    visibility={weatherData.visibility}
                />
                <SunriseSunset
                    sunrise={weatherData.sys.sunrise}
                    sunset={weatherData.sys.sunset}
                />
            </div>
        </div>
    )
}

export default Weather
