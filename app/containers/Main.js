var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles/index');

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.mainContainer}>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;