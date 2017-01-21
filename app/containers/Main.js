var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles/index');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>React Weather App</h2>
          <GetWeatherContainer direction="row" styles={styles.headerForm}/>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;