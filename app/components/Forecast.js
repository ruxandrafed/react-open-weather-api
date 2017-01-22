var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var puke = require('../utils/otherHelpers').puke;

function Forecast (props) {
  return (props.isLoading === true)
      ? (<div>Loading {puke(props)}</div>)
      : (<div>Done {puke(props)}</div>)
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;