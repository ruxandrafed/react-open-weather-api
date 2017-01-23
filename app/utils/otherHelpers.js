var React = require('react');
var dateFormat = require('dateformat');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function getDateString(timestamp) {
  var date = new Date(timestamp * 1000);
  return dateFormat(date, "dddd, mmm dS").toString();
}

var otherHelpers = {
  puke: puke,
  getDateString: getDateString
};

module.exports = otherHelpers;