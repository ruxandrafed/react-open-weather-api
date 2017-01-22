var axios = require('axios');
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

function getApiUrlForCurrentWeather(cityName) {
  return `${BASE_URL}/weather?q=${cityName}&type=accurate&APPID=${process.env.API_KEY}`;
}

function getApiUrlFor5DayForecast(cityName) {
  return `${BASE_URL}/forecast/daily?q=${cityName}&type=accurate&APPID=${process.env.API_KEY}&cnt=5`;
}

var helpers = {
  getWeatherForCity: function(cityName) {
    let url = getApiUrlForCurrentWeather(cityName);
    return axios.get(url)
      .then(function(response) {
        console.log(response.data);
      });
  },
  get5DayForecastForCity: function(cityName) {
    let url = getApiUrlFor5DayForecast(cityName);
    return axios.get(url)
      .then(function(response) {
        console.log(response.data);
      });
  }
};

module.exports = helpers;