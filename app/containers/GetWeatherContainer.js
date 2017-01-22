var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var GetWeather = require('../components/GetWeather');
var weatherApiHelpers = require('../utils/weatherApiHelpers');

var GetWeatherContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
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
    weatherApiHelpers.getWeatherForCity(this.state.city);
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