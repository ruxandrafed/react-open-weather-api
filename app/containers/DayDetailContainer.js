var React = require('react');
var DayDetail = require('../components/DayDetail');

var DayDetailContainer = React.createClass({
  render: function () {
    return (
      <DayDetail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city}
      />
    )
  }
});

module.exports = DayDetailContainer;