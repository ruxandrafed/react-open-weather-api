import React, { PropTypes } from 'react';
import styles from '../styles/index';
import { convertTemp } from '../utils/otherHelpers';
import DayForecast from './DayForecast';
import { Link } from 'react-router';

const DayDetail = ({city, weather}) => (
  <div style={styles.dayDetailContainer}>
    <DayForecast day={weather} />
    <h2>{city}</h2>
    <p>{weather.weather[0].description}</p>
    <p>min temp: {convertTemp(weather.temp.min)} &#8451;</p>
    <p>max temp: {convertTemp(weather.temp.max)} &#8451;</p>
    <p>humidity: {weather.humidity}</p>
    <div style={styles.startOverBtnContainer}>
      <Link to="/">
        <button type="button" className="btn btn-lg btn-success">Start over</button>
      </Link>
    </div>
  </div>
);

DayDetail.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.object.isRequired
};

export default DayDetail;