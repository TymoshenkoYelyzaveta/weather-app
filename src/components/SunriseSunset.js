import React from 'react'
import Emoji from './emoji'

const SunriseSunset = ({ sunrise, sunset }) => {
    return (
        <div className='container'>
            <div className='box'>
                <Emoji symbol='🌅' classNames='emoji-secondary' />
                <p>
                    {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                </p>
            </div>
            <div className='box'>
                <Emoji symbol='🌇' classNames='emoji-secondary' />
                <p>
                    {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                </p>
            </div>
        </div>
    )
}

export default SunriseSunset
