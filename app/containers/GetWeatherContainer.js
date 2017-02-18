import React, { PropTypes, Component } from 'react';
import GetWeather from '../components/GetWeather';

class GetWeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleSubmitCity(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
  }
  render () {
    return (
      <GetWeather
        direction={this.props.direction}
        onSubmitCity={(e) => this.handleSubmitCity(e)}
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        city={this.state.city} />
    )
  }
};

GetWeatherContainer.defaultProps = {
  direction: 'column'
};

GetWeatherContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default GetWeatherContainer;