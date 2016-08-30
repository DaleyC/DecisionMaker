$ = jQuery = require('jquery');

(function() {

	"use strict";

	var React = require('react');
	var ReactDOM = require('react-dom');
	var FoodOptions = require('./components/foodOptions/foodOptions');
	var Result = require('./components/result/result');
	var App = React.createClass({
		getInitialState: function() {
			return{
				decision: ''
			};
		},
		shuffleOptions: function(array){
			var randomItem = array[Math.floor(Math.random() * array.length)];
			this.setState({decision: randomItem});
    	},
		render: function() {
			var Child;
			switch(this.props.route){
				case 'result': Child = Result; break;
				default: Child = FoodOptions;
			}
			return (
				<div>
					<Child shuffleOptions={this.shuffleOptions} decision={this.state.decision}/>
				</div>
			);
		}
	});
	function render(){
		var route = window.location.hash.substr(1);
		ReactDOM.render(<App route={route} />, document.getElementById('app'));
	}
	window.addEventListener('hashchange', render);
	render();
})();


