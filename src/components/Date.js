import React from 'react'
import moment from 'moment'

const Date = () => {
    return (
        <div className='date'>
            <p>{moment().format('dddd')}</p>
            <p>{moment().format('LL')}</p>
        </div>
    )
}

export default Date