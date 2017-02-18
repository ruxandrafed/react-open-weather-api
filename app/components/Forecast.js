import React, { PropTypes } from 'react';
import styles from '../styles/index';
import DayForecast from './DayForecast';
import { Link } from 'react-router';

const ForecastUI = (props) => (
  <div>
    <h1 style={styles.forecastHeader}>{props.city}</h1>
    <h2 style={styles.forecastSubheader}>Select a day</h2>
    <div style={styles.forecastContainer}>
      {props.forecastData.list.map(function (listItem) {
        return <DayForecast key={listItem.dt} id={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)}/>
      })}
    </div>
    <div style={styles.startOverBtnContainer}>
      <Link to="/">
        <button type="button" className="btn btn-lg btn-success">Start over</button>
      </Link>
    </div>
  </div>
);

const Forecast = (props) =>
  (props.isLoading === true) ?
    (<h1 style={styles.forecastHeader}> Loading </h1>) :
    (<ForecastUI
        city={props.city}
        forecastData={props.forecastData}
        handleClick={props.handleClick}
      />);

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Forecast;