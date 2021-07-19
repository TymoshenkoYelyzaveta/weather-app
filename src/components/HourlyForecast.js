import React, { useState, useEffect } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import {uid} from 'react-uid'
import moment from 'moment'
import { weatherConditions } from './../weather-conditions'
import { formattedDate, getYearFromDate } from './../helpers.js'

const ICONS_FOLDER = `${process.env.PUBLIC_URL}/icons`

const HourlyForecast = () => {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })

            await fetch(
                `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setData(result)
                })
        }
        fetchData()
    }, [lat, long])

    const getWeatherImagePath = (id) =>
        weatherConditions.find((icon) => icon.id === id).icon

    const datesGroupByComponent = (dates, token) => {
        return dates?.reduce((val, obj) => {
            let comp = moment(obj['dt'], 'X').format(token)
            ;(val[comp] = val[comp] || []).push(obj)
            return val
        }, {})
    }

    return (
        <>
            {(lat && long && data.main !== 'undefined' )? (
                <div className='weather-display'>
                    <div className='hourly-weather-display'>
                        {data?.hourly &&
                            Object?.values?.(
                                datesGroupByComponent(data?.hourly, 'D')
                            )?.map?.((day) => (
                                <div className='hourly-weather-day-forecast' key={uid(day)}>
                                    <h3 className='hourly-weather-day'>
                                        {formattedDate(day[0].dt)}
                                    </h3>
                                    {day.map((hour) => (
                                            <div className='hourly-weather-box' key={uid(hour)}>
                                                <div>
                                                    <p>
                                                        {getYearFromDate(
                                                            hour.dt
                                                        )}
                                                    </p>
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
                                                    <p>
                                                        {hour.weather[0].description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
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
