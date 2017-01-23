var React = require('react');
var Forecast = require('../components/Forecast');
var weatherApiHelpers = require('../utils/weatherApiHelpers');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function() {
    this.retrieveForecast(this.props.routeParams.city);
  },
  componentWillReceiveProps: function (nextProps) {
    this.retrieveForecast(nextProps.routeParams.city)
  },
  retrieveForecast: function (city) {
    weatherApiHelpers.get5DayForecastForCity(city)
      .then(function(forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      }.bind(this));
  },
  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        handleClick={this.handleClick}
      />
    )
  }
});

module.exports = ForecastContainer;