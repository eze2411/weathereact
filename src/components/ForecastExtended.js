import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from "./ForecastItem/ForecastItem";
import transformForecast from "./../services/transformForecast";
import './styles.css';

/*
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
};
 */

const api_key = "7b3a49f294cacc903d1c244495ac3092";
const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends React.Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }


    updateCity = city => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
                console.log(this.state);
            }
        );
    };


    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress = () => {
        return <h3>Loading extended forecast...</h3>;
    };

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">{`ExtendedForecast for: ${city}`}</h2>
                { forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress() }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
