"use strict";

var React = require('react');
var ResultForm = require('./resultForm');

var Result = React.createClass({
	render: function(){
		return <ResultForm decision={this.props.decision}/>;
	}
});

module.exports = Result;