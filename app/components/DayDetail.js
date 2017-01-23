var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var puke = require('../utils/otherHelpers').puke;
var convertTemp = require('../utils/otherHelpers').convertTemp;
var DayForecast = require('./DayForecast');
var Link = require('react-router').Link;

function DayDetail (props) {
  return (
    <div style={styles.dayDetailContainer}>
      <DayForecast day={props.weather} />
      <h2>{props.city}</h2>
      <p>{props.weather.weather[0].description}</p>
      <p>min temp: {convertTemp(props.weather.temp.min)} &#8451;</p>
      <p>max temp: {convertTemp(props.weather.temp.max)} &#8451;</p>
      <p>humidity: {props.weather.humidity}</p>
      <div style={styles.startOverBtnContainer}>
        <Link to="/">
          <button type="button" className="btn btn-lg btn-success">Start over</button>
        </Link>
      </div>
    </div>
  )
}

DayDetail.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.object.isRequired
};

module.exports = DayDetail;