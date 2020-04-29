import React from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData/WeatherData";
import "./styles.css"
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "7b3a49f294cacc903d1c244495ac3092";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
};

const data2 = {
    temperature: 17,
    weatherState: WINDY,
    humidity: 19,
    wind: '25 m/s'
};

class WeatherLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Buenos Aires',
            data: data
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            console.log(data);
            debugger;
        });


        console.log("updated");
        this.setState({
                city: 'Buenos Aires!',
                data: data2
        });
    };

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
}

export default WeatherLocation;
