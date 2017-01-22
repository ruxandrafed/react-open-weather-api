var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var GetWeather = require('../components/GetWeather');

var GetWeatherContainer = React.createClass({
  // pass content (otherwise we'd have to pass router as a props)
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  handleSubmitCity: function(e) {
    e.preventDefault();
    console.log(this.state.city);
    this.context.router.push('/forecast/' + this.state.city);
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