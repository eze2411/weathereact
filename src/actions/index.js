import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({type: SET_CITY, payload});

const api_key = "7b3a49f294cacc903d1c244495ac3092";
const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(this.state);
            }
        );
        return;
    };
};
