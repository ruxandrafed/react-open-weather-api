import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const getApiUrlForCurrentWeather = (cityName) => `${BASE_URL}/weather?q=${cityName}&type=accurate&APPID=${process.env.API_KEY}`;
const getApiUrlFor5DayForecast = (cityName)  => `${BASE_URL}/forecast/daily?q=${cityName}&type=accurate&APPID=${process.env.API_KEY}&cnt=5`;

export function getWeatherForCity (cityName) {
  let url = getApiUrlForCurrentWeather(cityName);
  return axios.get(url)
    .then(function(response) {
      return response.data;
    });
};

export async function get5DayForecastForCity (cityName) {
  let url = getApiUrlFor5DayForecast(cityName);
  const response = await axios.get(url);
  return response.data;
};