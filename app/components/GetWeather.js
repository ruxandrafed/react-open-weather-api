import React, { PropTypes } from 'react';
import styles from '../styles/index';

const Button = ({ onSubmitCity, children }) =>(
  <button type='button'
          style={styles.formButton}
          className='btn btn-success'
          onClick={onSubmitCity}>
    {children}
  </button>);

const InputField = ({ onUpdateCity, city }) =>(
  <input className='form-control'
         onChange={onUpdateCity}
         placeholder='St. George, Utah'
         type='text'
         value={city}
  />);

const getFormStyle = (direction) => (direction === 'column') ? styles.homeForm: styles.headerForm;

const GetWeather = ({ direction, onUpdateCity, city, onSubmitCity}) => (
  <div style={getFormStyle(direction)}>
    <InputField
      onUpdateCity={onUpdateCity}
      city={city} />
    <Button
      onSubmitCity={onSubmitCity}>
      Get Weather
    </Button>
  </div>
);

GetWeather.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export default GetWeather;