var React = require('react');
var DayDetail = require('../components/DayDetail');
var puke = require('../utils/otherHelpers').puke;

var DayDetailContainer = React.createClass({
  render: function () {
    return (
      /* <DayDetail /> */
      <div>{puke(this.props.state)}</div>
    )
  }
});

module.exports = DayDetailContainer;