import React, { useState, useEffect } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import WeatherImage from './WeatherImage'
import { weatherConditions } from '../weather-conditions'
import SunriseSunset from './SunriseSunset'
import Date from './Date'
import City from './City'
import WeatherDescription from './WeatherDescription'
import AtmosphericData from './AtmosphericData'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const CurrentWeather = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })

            await fetch(
                `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setData(result)
                })
        }
        fetchData()
    }, [lat, long])

    const getWeatherImagePath = () =>
        weatherConditions.find((icon) => icon.id === data?.weather[0].id).icon

    return (
        <>
            {typeof data.main != 'undefined' ? (
                <div className='weather-display'>
                    <Date />
                    <City cityName={data.name} />
                    <WeatherImage
                        iconPath={`${ICONS_FOLDER}${getWeatherImagePath()}`}
                        description={data.weather[0].description}
                    />
                    <WeatherDescription
                        temperature={data.main.temp}
                        feelsLike={data.main.feels_like}
                    />
                    <AtmosphericData
                        humidity={data.main.humidity}
                        windSpeed={data.wind.speed}
                        feelsLike={data.main.feels_like}
                        pressure={data.main.pressure}
                        visibility={data.visibility}
                    />
                    <SunriseSunset
                        sunrise={data.sys.sunrise}
                        sunset={data.sys.sunset}
                    />
                </div>
            ) : (
                <div>
                    <Dimmer active>
                        <Loader>Loading..</Loader>
                    </Dimmer>
                </div>
            )}
        </>
    )
}

export default CurrentWeather
