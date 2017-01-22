var React = require('react');
var styles = require('../styles/index');
var GetWeatherContainer = require('../containers/GetWeatherContainer');
var PropTypes = React.PropTypes;

function Home() {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.homeHeader}>Enter a City and State</h1>
      <GetWeatherContainer />
    </div>
  )
}

module.exports = Home;