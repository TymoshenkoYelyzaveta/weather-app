import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import SideMenu from './components/SideMenu'

import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='weather-container'>
                <BrowserRouter>
                    <SideMenu />
                    <Switch>
                        <Route exact path='/'>
                            <CurrentWeather />
                        </Route>
                        <Route exact path='/hourly-forecast'>
                            <HourlyForecast />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
