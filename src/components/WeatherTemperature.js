import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weathers';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon) {
        return <WeatherIcons name={icon} size="2x" />
    } else {
        return <WeatherIcons name={"day-sunny"} size="2x" />
    }
};

class WeatherTemperature extends React.Component {
    render() {
        const { temperature, weatherState } = this.props;

        return (
            <div>
                {
                    getWeatherIcon(weatherState)
                }
                <span>{`${temperature} C°`}</span>
            </div>
        );
    }
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
