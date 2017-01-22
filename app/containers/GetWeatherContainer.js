var React = require('react');
var styles = require('../styles/index');
var GetWeather = require('../components/GetWeather');
var weatherApiHelpers = require('../utils/weatherApiHelpers');

var GetWeatherContainer = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitCity: function() {
    console.log('submit city');
    weatherApiHelpers.get5DayForecastForCity(this.state.city)
      .then(function(response) {
        console.log(response.data);
      }.bind(this));
  },
  render: function () {
    return (
      <GetWeather
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetWeatherContainer;