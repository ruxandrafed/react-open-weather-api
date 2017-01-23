var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;
var puke = require('../utils/otherHelpers').puke;

function DayDetail (props) {
  return (
    <div>
      Day Detail
      {puke(props)}
    </div>
  )
}

DayDetail.propTypes = {

};

module.exports = DayDetail;