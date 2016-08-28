"use strict";

var React = require('react');
var FoodOptionsForm = require('./foodOptionsForm');

var FoodOptions = React.createClass({
	getInitialState: function() {
		return{
			foodOptionsArr: [],
			value: '',
			foodList: ''
		};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	handleClick: function(foodItem){
		this.state.foodOptionsArr.push(this.state.value);
		this.foodOptionsList();
		this.setState({value: ''});
	},
	handleKeyPress: function (e) {
		if(e.key === 'Enter') {
			e.preventDefault();
			this.handleClick();
		}
	},
	foodOptionsList: function(){
		var key = 0;
		var foodList = this.state.foodOptionsArr.map(function(item) {
			return <li key={key++}>{item}</li>;
		});
		this.setState({foodList: <ul>{foodList}</ul>});
	},
	render: function () {
		return (
			<FoodOptionsForm
				onChange={this.handleChange}
				onClick={this.handleClick}
				value={this.state.value}
				foodList={this.state.foodList}
				onKeyPress={this.handleKeyPress}/>
		);
	}
});

module.exports = FoodOptions;