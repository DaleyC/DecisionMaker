"use strict";

var React = require('react');

var FoodOptionsForm = React.createClass({
	render: function () {
		return (
			<div className="container">
				<form className="form-horizontal">
					<fieldset>
						<div className="form-group">
							<h1 className="col-sm-6 col-sm-offset-2">What should we eat?</h1>
						</div>
						<div className="form-group">
							<div className="col-sm-6 col-sm-offset-2">
								<input type="text" className="form-control" placeholder="Enter food option here" onChange={this.props.onChange} value={this.props.value} onKeyPress={this.props.onKeyPress}/>
							</div>
							<div className="col-sm-1 col-xs-12">
								<button type="button" className="btn btn-primary col-xs-12" onClick={this.props.onClick}>Add</button>
							</div>
						</div>
						<div className="form-group">
							<h3 className="strong col-sm-6 col-sm-offset-2">
								{this.props.foodList}
							</h3>
						</div>
						<div className="form-group">
							<div className="col-sm-2 col-sm-offset-4 col-xs-12">
								<a href="/#result">
									<button type="button" className="btn btn-primary btn-lg col-xs-12" onClick={this.props.handleClickChoose}>Choose</button>
								</a>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
});

module.exports = FoodOptionsForm;