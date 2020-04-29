const location = "Buenos Aires,ar";
const api_key = "7b3a49f294cacc903d1c244495ac3092";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
