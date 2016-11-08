var React = require('react');

var NumberGuessing = React.createClass({

	getInitialState: function() {
		return {}
	},
	startGame: function() {
		this.setState({
			gameStatus: 'playing',
			numberToGuess: Math.floor(Math.random()*11),
			guesses: [],
			hint: ""
		});
	},
	componentDidMount: function() {
		this.startGame();
	},
	_handleUserGuess: function(event) {
		var userGuess = parseInt(this.refs.userGuess.value);
		var correctNum = parseInt(this.state.numberToGuess);
		var tries = this.state.guesses.length;
		if(userGuess === correctNum) {
			this.setState({gameStatus: 'win'});
		} else {
			if (tries < 5) {
				if(userGuess < correctNum) {
					this.setState({
						guesses: this.state.guesses.concat(userGuess),
							hint: "too low!"
						});
				}
				if (userGuess > correctNum) {
					this.setState({
						guesses: this.state.guesses.concat(userGuess),
						hint: "too high!"
					});
				}
			} 
			if (tries >= 5) {
				this.setState({gameStatus: 'lose'});
			} 
		}
	},
	render: function() {
		//if !this.state.gameStatus then return null
		if (!this.state.gameStatus) {
			return null;
		} 
		//else if gs is win or lose 
			//then render something different with a new game button
		else if(this.state.gameStatus === 'win' || this.state.gameStatus === 'lose') {
			return (
				<div>
					<p>You {this.state.gameStatus === 'win' ? "won" : "lost"}</p>
					<button onClick={this.startGame}>New Game</button>
				</div>
				);
		} else {
			return (
			<div>
				<p>Guess a number between 1 and 100</p>
				<input ref="userGuess" type="text" value={this.state.value}></input>
				<button ref="guessBtn" onClick={this._handleUserGuess}>Guess</button>
				<div>
					<p>{this.state.hint}</p>
					<p>Your guesses: {this.state.guesses.toString(', ')}</p>
					<p>Remaining tries: {this.state.guesses.length}</p>
				</div>
			</div>
			);
		}
	}
});

module.exports = NumberGuessing;
