"use strict";

var React = require('react');
var FoodOptionsForm = require('./foodOptionsForm');
var Result = require('../result/result');

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
	handleClick: function(){
		if(this.state.value.length < 1){
			return;
		}
		this.state.foodOptionsArr.push(this.state.value);
		this.foodOptionsList();
		this.setState({value: ''});
	},
	handleClickChoose: function(){
		this.props.shuffleOptions(this.state.foodOptionsArr);
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
			<div>
				<FoodOptionsForm
					onChange={this.handleChange}
					onClick={this.handleClick}
					value={this.state.value}
					foodList={this.state.foodList}
					onKeyPress={this.handleKeyPress}
					handleClickChoose={this.handleClickChoose}/>
			</div>
		);
	}
});

module.exports = FoodOptions;