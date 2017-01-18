var React = require('react');
var ReactRouter = require('react-router');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;