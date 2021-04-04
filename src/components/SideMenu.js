import React from 'react'
import { Link } from 'react-router-dom'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const SideMenu = () => (
    <div className='side-menu'>
        <div className='logo-section'>
            <img src={`${ICONS_FOLDER}/weather-forecast.svg`} alt='' />
            <h3>Weather App</h3>
        </div>
        <div className='links'>
                <Link className='link' to='/'>
                    {/* <img src={`${ICONS_FOLDER}/home.svg`} alt='Home' /> */}
                    <h2>Current Weather</h2>
                </Link>
                <Link className='link' to='/hourly-forecast'>
                    {/* <img src={`${ICONS_FOLDER}/clock.svg`} alt='Hourly' /> */}
                    <h2>Forecast 4 days</h2>
                </Link>
                <Link className='link'>
                    {/* <img src={`${ICONS_FOLDER}/calendar.svg`} alt='Daily' /> */}
                    <h2>Forecast 16 days</h2>
                </Link>
                <Link className='link'>
                    {/* <img src={`${ICONS_FOLDER}/forecast.svg`} alt='Daily' /> */}
                    <h2>Forecast 30 days</h2>
                </Link>
        </div>
    </div>
)

export default SideMenu
