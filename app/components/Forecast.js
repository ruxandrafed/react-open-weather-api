var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var puke = require('../utils/otherHelpers').puke;
var getDate = require('../utils/otherHelpers').getDateString;
var DayForecast = require('./DayForecast');
var Link = require('react-router').Link;

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.forecastHeader}>{props.city}</h1>
      <h2 style={styles.forecastSubheader}>Select a day</h2>
      <div style={styles.forecastContainer}>
        {props.forecastData.list.map(function (listItem) {
          return <DayForecast key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)}/>
        })}
      </div>
      <div style={styles.startOverBtnContainer}>
        <Link to="/">
          <button type="button" className="btn btn-lg btn-success">Start over</button>
        </Link>
      </div>
    </div>
  )
}

function Forecast (props) {
  return (props.isLoading === true)
      ? (<h1 style={styles.forecastHeader}> Loading </h1>)
      : (<ForecastUI
          city={props.city}
          forecastData={props.forecastData}
          handleClick={props.handleClick}
        />)
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;