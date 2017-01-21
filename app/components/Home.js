var React = require('react');
var styles = require('../styles/index');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

function Home (props) {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.homeHeader}>Enter a City and State</h1>
      <GetWeatherContainer direction="column"/>
    </div>
  )
}

module.exports = Home;