import React from 'react'

const WeatherImage = ({ iconPath, description }) =>
    <div className="weather-image-container">
        <img src={iconPath} alt='Weather condition' className='weather-image' />
        <p className='weather-description'>
            {description}
        </p>
    </div>

export default WeatherImage