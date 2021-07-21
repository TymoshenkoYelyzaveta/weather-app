import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import SideMenu from "./components/SideMenu";

import "./App.css";

const App = () => {
    const [currentData, setCurrentData] = useState(null);
    const [hourlyData, setHourlyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            getPosition()
                .then((position) => {
                    const lat = position?.coords?.latitude
                    const long = position?.coords?.longitude

                    return Promise.all([
                        getCurrentData(lat, long),
                        getHourlyData(lat, long)
                    ])
                })
                .catch((error) => {
                    console.log(error)
                })
        };

        fetchData();
    }, []);


    /**
     * Get promise with latitude and longitude properties
     * @returns {Promise}
     */
    const getPosition = () => {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        })
    };

    /**
     * Get current weather data from api
     * @returns {Promise}
     */
    const getCurrentData = (lat, long) => {
        const currentDataUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`

        return fetch(currentDataUrl)
            .then(response => response.json())
            .then(json => setCurrentData(json))
    }

    /**
     * Get hourly weather data from api
     * @returns {Promise}
     */
    const getHourlyData = (lat, long) => {
        const hourlyDataUrl = `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

        return fetch(hourlyDataUrl)
            .then(response => response.json())
            .then(json => setHourlyData(json))
    }

    return (
        <div className="app">
            <div className="weather-container">
                <BrowserRouter>
                    <SideMenu />
                    <Switch>
                        <Route exact path="/">
                            <CurrentWeather data={currentData} />
                        </Route>
                        <Route exact path="/hourly-forecast">
                            <HourlyForecast data={hourlyData} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
