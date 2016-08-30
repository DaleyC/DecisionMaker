"use strict";

var React = require('react');

var ResultForm = React.createClass({
	render: function(){
		return (
			<div className="container">
				<form className="form-horizontal">
					<div className="row">
						<h1 className="col-md-6 col-md-offset-3 result"><strong>{this.props.decision}</strong></h1>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = ResultForm;