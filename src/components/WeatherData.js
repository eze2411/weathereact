import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

class WeatherData extends React.Component {
    render() {
        return (
            <div>
                <WeatherTemperature></WeatherTemperature>
                <WeatherExtraInfo></WeatherExtraInfo>
            </div>
        );
    }
}

export default WeatherData;
