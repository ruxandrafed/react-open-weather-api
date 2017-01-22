var React = require('react');
var styles = require('../styles/index');
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
      <div style={this.props.direction === 'column' ? styles.homeForm: styles.headerForm}>
        <input className="form-control"
               onChange={this.handleUpdateCity}
               placeholder="St. George, Utah"
               type="text"
               value={this.state.city} />
        <button style={this.props.direction === 'column' ? styles.homeBtn: styles.headerBtn} type="button" onClick={this.handleSubmitCity} className="btn btn-success">
          Get Weather
        </button>
      </div>
    )
  }
});

module.exports = GetWeatherContainer;