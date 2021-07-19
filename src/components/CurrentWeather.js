import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import WeatherImage from './WeatherImage'
import { weatherConditions } from '../weather-conditions'
import SunriseSunset from './SunriseSunset'
import Date from './Date'
import City from './City'
import WeatherDescription from './WeatherDescription'
import AtmosphericData from './AtmosphericData'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const CurrentWeather = ({ lat, long, data }) => {

    const getWeatherImagePath = () =>
        weatherConditions.find((icon) => icon.id === data?.weather[0].id).icon

    return (
        <>
            {(lat && long && typeof data.main !== 'undefined') ? (
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
