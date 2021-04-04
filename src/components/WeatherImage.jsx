import React from 'react'

const WeatherImage = ({ iconPath, description }) =>
    <div className="weather-image-container">
        <p className='weather-description'>
            {description}
        </p>
        <img src={iconPath} alt='Weather condition' className='weather-image' />
    </div>

export default WeatherImage