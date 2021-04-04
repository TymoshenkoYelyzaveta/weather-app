import React from 'react'
const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const AtmosphericData = ({ humidity, windSpeed, pressure, visibility }) => (
    <div className='atmospheric-container'>
        <div className='box'>
            <h3>Humidity</h3>
            <img src={`${ICONS_FOLDER}/humidity.svg`} alt='Humidity' />
            <p>{humidity}%</p>
        </div>
        <div className='box'>
            <h3>Wind</h3>
            <img src={`${ICONS_FOLDER}/wind-speed.svg`} alt='Humidity' />
            <p>{windSpeed} km/h</p>
        </div>
        <div className='box'>
            <h3>Pressure</h3>
            <img src={`${ICONS_FOLDER}/atmospheric.svg`} alt='Humidity' />
            <p>{pressure} mBar</p>
        </div>
        <div className='box'>
            <h3>Visibility</h3>
            <img src={`${ICONS_FOLDER}/eye.svg`} alt='Humidity' />
            <p>{visibility} m</p>
        </div>
    </div>
)

export default AtmosphericData
