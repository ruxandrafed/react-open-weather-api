var React = require('react');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var otherHelpers = {
  puke: puke
};

module.exports = otherHelpers;