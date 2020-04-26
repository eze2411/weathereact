import React from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData/WeatherData";
import "./styles.css"

class WeatherLocation extends React.Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={'Barcelona'} />
                <WeatherData />
            </div>
        );
    }
}

export default WeatherLocation;
