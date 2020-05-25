import transformForecast from "./../services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const api_key = "7b3a49f294cacc903d1c244495ac3092";
const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                // modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};
