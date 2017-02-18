import React, { Component, PropTypes } from 'react';
import Forecast from '../components/Forecast';
import { get5DayForecastForCity } from '../utils/weatherApiHelpers';

class ForecastContainer extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }
  componentDidMount () {
    this.retrieveForecast(this.props.routeParams.city);
  }
  componentWillReceiveProps (nextProps) {
    this.retrieveForecast(nextProps.routeParams.city)
  }
  async retrieveForecast (city) {
    const forecastData = await get5DayForecastForCity(city);
    this.setState({
      isLoading: false,
      forecastData: forecastData
    });
  }
  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather
      }
    })
  }
  render () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        handleClick={(weather) => this.handleClick(weather)}
      />
    )
  }
};

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ForecastContainer;