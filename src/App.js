import React,
    { useState, useEffect }
from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import SideMenu from './components/SideMenu'

import './App.css'

const App = () => {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [currentData, setCurrentData] = useState([])
    const [hourlyData, setHourlyData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })

            await fetch(
                `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setCurrentData(result)
                })
            await fetch(
                `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setHourlyData(result)
                })
        }
        fetchData()
    }, [lat, long])

    return (
        <div className='app'>
            <div className='weather-container'>
                <BrowserRouter>
                    <SideMenu />
                    <Switch>
                        <Route exact path='/'>
                            <CurrentWeather lat={lat} long={long} data={currentData}/>
                        </Route>
                        <Route exact path='/hourly-forecast'>
                            <HourlyForecast lat={lat} long={long} data={hourlyData}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
