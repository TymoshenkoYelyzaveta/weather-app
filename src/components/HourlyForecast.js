import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import {uid} from 'react-uid'
import moment from 'moment'
import { weatherConditions } from './../weather-conditions'
import { formattedDate, getYearFromDate } from './../helpers.js'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const HourlyForecast = ({ data }) => {

    const getWeatherImagePath = id =>
        weatherConditions.find(icon => icon.id === id).icon

    /**
     * Groups hour records by date
     * @param {object} dates
     * @param {string} token
     * @returns {object}
    */
   //TODO - formatting of the function
    const hoursGroupedByDate = (dates, token) => {
        return dates?.reduce((val, obj) => {
            let comp = moment(obj['dt'], 'X').format(token)
            ;(val[comp] = val[comp] || []).push(obj)
            return val
        }, {})
    }

    return (
        <>
            {(data)? (
                <div className='weather-display'>
                    <div className='hourly-weather-display'>
                        {data?.hourly &&
                            Object?.values?.(hoursGroupedByDate(data?.hourly, 'D'))
                                ?.map?.(day => (
                                    <div className='hourly-weather-day-forecast' key={uid(day)}>
                                        <h3 className='hourly-weather-day'>
                                            {formattedDate(day[0].dt)}
                                        </h3>
                                        {day.map((hour) => (
                                                <div className='hourly-weather-box' key={uid(hour)}>
                                                    <div>
                                                        <p>{getYearFromDate(hour.dt)}</p>
                                                    </div>
                                                    <div>
                                                        <p>{Math.round(hour.temp)} °C</p>
                                                    </div>
                                                    <div>
                                                        <img
                                                            className='hourly-icon'
                                                            src={`${ICONS_FOLDER}${getWeatherImagePath(
                                                                hour.weather[0].id
                                                            )}`}
                                                            alt="Weather"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p>{hour.weather[0].description}</p>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )
                            )}
                    </div>
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

export default HourlyForecast
