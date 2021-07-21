import React from 'react'
import { Link } from 'react-router-dom'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const SideMenu = () => (
    <div className='side-menu'>
        <div className='logo-section'>
            <img src={`${ICONS_FOLDER}/weather-forecast.svg`} alt='Weather App Icon' />
            <h3>Weather App</h3>
        </div>
        <div className='links'>
                <Link className='link' to='/'>
                    <h2>Current Weather</h2>
                </Link>
                <Link className='link' to='/hourly-forecast'>
                    <h2>Hourly forecast</h2>
                </Link>
        </div>
    </div>
)

export default SideMenu
