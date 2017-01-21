var React = require('react');
var styles = require('../styles/index');

var GetWeatherContainer = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleUpdateCity: function() {
    console.log('change city');
  },
  handleSubmitCity: function() {
    console.log('submit city');
  },
  render: function () {
    return (
      <div style={this.props.direction === 'column' ? styles.homeForm: styles.headerForm}>
        <input className="form-control"
               onChange={this.handleUpdateCity}
               placeholder="St. George, Utah"
               type="text"
               value={this.state.city} />
        <button style={styles.homeBtn} type="button" onClick={this.handleSubmitCity} className="btn btn-success">
          Get Weather
        </button>
      </div>
    )
  }
});

module.exports = GetWeatherContainer;