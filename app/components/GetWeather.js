import React, { PropTypes } from 'react';
import styles from '../styles/index';

const Button = (props) =>(
  <button type='button'
          style={styles.formButton}
          className='btn btn-success'
          onClick={props.onSubmitCity}>
    {props.children}
  </button>);

const InputField = (props) =>(
  <input className='form-control'
         onChange={props.onUpdateCity}
         placeholder='St. George, Utah'
         type='text'
         value={props.city}
  />);

const getFormStyle = (direction) => (direction === 'column') ? styles.homeForm: styles.headerForm;

const GetWeather = (props) => (
  <div style={getFormStyle(props.direction)}>
    <InputField
      onUpdateCity={props.onUpdateCity}
      city={props.city} />
    <Button
      onSubmitCity={props.onSubmitCity}>
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