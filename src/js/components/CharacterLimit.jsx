var React = require('react');

var CharacterLimit = React.createClass({
	PropsType: {
		text: React.PropTypes.string,
		characterCount: React.PropTypes.number,
		limit: React.PropTypes.number.isRequired
	},
	getInitialState: function() {
		return ({currentInput: ""});
	},
	_handleInput: function(event) {
		var value = event.target.value;
		console.log(value);
		if (value.length < this.props.limit) {
			this.setState({currentInput: value})
		}
	},
	render: function() {
		return (
			<div>
				<input type="text" onInput={this._handleInput} value={this.state.currentInput}></input>
				<p>Character remaining: {this.state.currentInput}</p>
			</div>
		);
	}
});

module.exports = CharacterLimit;