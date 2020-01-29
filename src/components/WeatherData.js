import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

class WeatherData extends React.Component {
    render() {
        return (
            <div>
                <WeatherTemperature></WeatherTemperature>
                <WeatherExtraInfo humidity={80} wind={'10 m/s'}></WeatherExtraInfo>
            </div>
        );
    }
}

export default WeatherData;
