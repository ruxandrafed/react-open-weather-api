var React = require('react');
var dateFormat = require('dateformat');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function getDateString(timestamp) {
  var date = new Date(timestamp * 1000);
  return dateFormat(date, "dddd, mmm dS").toString();
}

function convertTemp (kelvin) {
  return parseFloat(kelvin - 273.15).toFixed(2);
}

var otherHelpers = {
  puke: puke,
  getDateString: getDateString,
  convertTemp: convertTemp
};

module.exports = otherHelpers;