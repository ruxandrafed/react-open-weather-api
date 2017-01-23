var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var getDate = require('../utils/otherHelpers').getDateString;

function DayForecast (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div>
      <div style={styles.dayForecastContainer} onClick={props.handleClick}>
        <img style={styles.weatherImg} src={'http://openweathermap.org/img/w/' + icon + '.png'} alt='Weather' />
        <h2 style={styles.dayForecastHeader}>{date}</h2>
      </div>
    </div>
  )
}

DayForecast.propTypes = {
  key: PropTypes.string,
  day: PropTypes.object.isRequired,
  handleClick: PropTypes.func
};

module.exports = DayForecast;