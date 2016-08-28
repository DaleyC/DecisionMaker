$ = jQuery = require('jquery');

(function() {

	"use strict";

	var React = require('react');
	var ReactDOM = require('react-dom');
	var FoodOptions = require('./components/foodOptions/foodOptions');
	var Child = FoodOptions;
	var App = React.createClass({
		render: function() {
			return (
				<div>
					<Child />
				</div>
			);
		}
	});
	ReactDOM.render(<App />, document.getElementById('app'));
})();


