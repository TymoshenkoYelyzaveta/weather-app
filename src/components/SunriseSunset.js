import React from 'react'
const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const formatted = (epoch, locale = 'en-IN') => {
    let date = new Date()
    date.setUTCSeconds(epoch)

    return date.toLocaleTimeString(locale)
}

const SunriseSunset = ({ sunrise, sunset }) => {
    return (
        <div className='sun-container'>
            <div className='sun-box'>
                <img src={`${ICONS_FOLDER}/040-sunrise.svg`} alt="Sunrise"/>
                <p>{formatted(sunrise)}</p>
            </div>
            <div className='sun-box'>
                <img src={`${ICONS_FOLDER}/041-sunset.svg`} alt="Sutset"/>
                <p>{formatted(sunset)}</p>
            </div>
        </div>
    )
}

export default SunriseSunset
