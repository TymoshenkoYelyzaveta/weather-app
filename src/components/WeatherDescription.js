import React from 'react'

const WeatherDescription = ({ temperature, feelsLike }) => (
    <div className='weather-description-container'>
        <p className='weather-temperature'>{Math.round(temperature)} °C</p>
        <p className='feels-like-temperature'>Feels like {Math.round(temperature)} °C</p>
    </div>
)

export default WeatherDescription