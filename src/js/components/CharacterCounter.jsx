var React = require('react');

var CharacterCounter = React.createClass({
	PropsType: {
		text: React.PropTypes.string,
		characterCount: React.PropTypes.number
	},
	getInitialState: function() {
		return ({currentInput: ""});
	},
	_handleInput: function(event) {
		var value = event.target.value;
		this.setState({currentInput: value});
		// console.log(value);
	},
	render: function() {
		return (
			<div>
				<input type="text" onInput={this._handleInput}></input>
				<p>Character count: {this.state.currentInput}</p>
			</div>
		);
	}
});

module.exports = CharacterCounter;