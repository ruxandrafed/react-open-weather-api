var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = (props) =>
  (<div>
    Hello World!
  </div>);

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);