import React, { PropTypes } from 'react';
import styles from '../styles/index';
import { getDateString } from '../utils/otherHelpers';

const DayForecast = ({day, handleClick}) => {
  var date = getDateString(day.dt);
  var icon = day.weather[0].icon;
  return (
    <div>
      <div style={styles.dayForecastContainer} onClick={handleClick}>
        <img style={styles.weatherImg} src={'http://openweathermap.org/img/w/' + icon + '.png'} alt='Weather' />
        <h2 style={styles.dayForecastHeader}>{date}</h2>
      </div>
    </div>
  )
};

DayForecast.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  handleClick: PropTypes.func
};

export default DayForecast;