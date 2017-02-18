import React, { Component } from 'react';
import DayDetail  from '../components/DayDetail';

class DayDetailContainer extends Component {
  render () {
    return (
      <DayDetail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city}
      />
    )
  }
};

export default DayDetailContainer;