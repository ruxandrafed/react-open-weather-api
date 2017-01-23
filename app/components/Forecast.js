var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var puke = require('../utils/otherHelpers').puke;
var getDate = require('../utils/otherHelpers').getDateString;

function DayForecast (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div>
      <div style={styles.dayForecastContainer}>
        <img style={styles.weatherImg} src={'http://openweathermap.org/img/w/' + icon + '.png'} alt='Weather' />
        <h2 style={styles.dayForecastHeader}>{date}</h2>
      </div>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.forecastHeader}>{props.city}</h1>
      <h2 style={styles.forecastSubheader}>Select a day</h2>
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