"use strict";

var React = require('react');

var FoodOptionsForm = React.createClass({
	render: function () {
		return (
			<div className="container">
				<form className="form-horizontal">
					<fieldset>
						<div className="form-group">
							<h1 className="col-sm-6 col-sm-offset-3">What should we eat?</h1>
						</div>
						<div className="form-group">
							<div className="col-sm-6 col-sm-offset-3">
								<input type="text" className="form-control" placeholder="Enter food option here" onChange={this.props.onChange} value={this.props.value} onKeyPress={this.props.onKeyPress}/>
							</div>
							<div className="col-md-1 col-sm-2 col-xs-12">
								<button type="button" className="btn btn-default col-xs-12" onClick={this.props.onClick} disabled={this.props.value.length === 0}>Add</button>
							</div>
						</div>
						<div className="form-group">
							<h3 className="col-sm-4 col-sm-offset-4">
								{this.props.foodList}
							</h3>
						</div>
						<div className="form-group">
							<div className="col-sm-2 col-sm-offset-5 col-xs-12">
								<a href="/#result">
									<button type="button" className="btn btn-primary btn-lg col-xs-12" id="chooseButton" onClick={this.props.handleClickChoose} disabled={this.props.foodList.length === 0}>Choose</button>
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