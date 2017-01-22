var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var weatherApiHelpers = require('../utils/weatherApiHelpers');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    weatherApiHelpers.get5DayForecastForCity(query.city)
      .then(function(forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
        console.log(forecastData);
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast isLoading={this.state.isLoading}/>
    )
  }
});

module.exports = ForecastContainer;