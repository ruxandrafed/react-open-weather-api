var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
            style={styles.formButton}
            className='btn btn-success'
            onClick={props.onSubmitCity}>
      {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='St. George, Utah'
      type='text'
      value={props.city} />
  )
}

function getFormStyle (direction) {
  return direction === 'column' ? styles.homeForm: styles.headerForm;
}

function GetWeather (props) {
  return (
    <div style={getFormStyle(props.direction)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  )
}

GetWeather.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = GetWeather;