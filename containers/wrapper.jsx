(function() {
  'use strict';
  var Wrapper = React.createClass({
    render: function() {
        return (
          <div>
            <h1>Hello World</h1>
          </div>
        );
    }
  });
  module.exports = Wrapper;
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper />, document.getElementById('app'));
