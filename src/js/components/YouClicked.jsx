var React = require('react');

var YouClicked = React.createClass({
	getInitialState: function() {
		return ({timesClicked: 0, timesReset: 0})
	},
	_handleButtonClick: function() {
		this.setState({timesClicked: this.state.timesClicked + 1});
	},
	_reset: function() {
		this.setState(
			{timesClicked: this.state.timesClicked = 0, 
				timesReset: this.state.timesReset + 1
			});
	},
	render: function() {
		return(
			<div>
				<button onClick={this._handleButtonClick}>Click me!</button>
				<p>You have clicked the button {this.state.timesClicked} times</p>
				<button onClick={this._reset}>Reset</button>
				<p>You have reset {this.state.timesReset} times</p>
			</div>
			)
	}
});

module.exports = YouClicked;