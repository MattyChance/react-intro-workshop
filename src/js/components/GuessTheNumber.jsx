var React = require('react');

var GuessTheNumber = React.createClass ({
	PropTypes: {
		"numberToGuess": React.PropTypes.number.isRequired
	},
	_handleButtonClick :function() {
		if (this.props.numberToGuess < +this.refs.userGuess.value) {
			alert('Too high!');
		} else if (this.props.numberToGuess > +this.refs.userGuess.value) {
			alert('Too low!');
		} else {
			alert('correct number!');
		}
	},
	render: function() {
		return (
			<div>
			<p>Guess a number between 1 and 100</p>
			<input type="text" ref="userGuess"></input>
			<button type = "button" onClick={this._handleButtonClick}>Guess</button>
			</div>
		);
	}
});

module.exports = GuessTheNumber;
