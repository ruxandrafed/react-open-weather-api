var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var puke = require('../utils/otherHelpers').puke;


function DayForecast (props) {
  return (
    <div>
      <div style={styles.dayForecastContainer}>
        {puke(props)}
      </div>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.forecastHeader}>{props.city}</h1>
      <div style={styles.forecastContainer}>
        {props.forecastData.list.map(function (listItem) {
          return <DayForecast key={listItem.dt} day={listItem} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  return (props.isLoading === true)
      ? (<h1 style={styles.forecastHeader}> Loading </h1>)
      : (<ForecastUI city={props.city} forecastData={props.forecastData} />)
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;