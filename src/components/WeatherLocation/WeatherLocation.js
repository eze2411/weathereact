import React from 'react';
import transformWeather from "../../services/transformWeather";
import { api_weather } from "../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData/WeatherData";
import "./styles.css"

class WeatherLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Buenos Aires',
            data: null
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }


    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            console.log("Resultado del handleUpdateClick")
            const newWeather = transformWeather(data);
            console.log(data);
            this.setState({
                data: newWeather
            });
        });
    };

    render() {
        const { city, data } = this.state;
        console.log("render");
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                {data ? <WeatherData data={data} /> : "Cargando..." }
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
}

export default WeatherLocation;
