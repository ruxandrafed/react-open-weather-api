var axios = require('axios');

function getApiUrlForCurrentWeather(cityName) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&type=accurate&APPID=${process.env.API_KEY}`;
}

function getApiUrlFor5DayForecast(cityName) {
  return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${process.env.API_KEY}&cnt=5`;
}

var helpers = {
  getWeatherForCity: function(cityName) {
    return axios.get(getApiUrlForCurrentWeather(cityName));
  },
  get5DayForecastForCity: function(cityName) {
    return axios.get(getApiUrlFor5DayForecast(cityName));
  }
};

module.exports = helpers;