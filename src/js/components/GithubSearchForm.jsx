var React = require('react');

var GithubSearchForm = React.createClass({
	propTypes: {
		onSearch: React.PropTypes.func
	},
	//pass the method _handleSearch as a prop to here
	_handleSubmit: function(event) {
		event.preventDefault();
		this.props.onSearch(this.refs.userInput.value);
	},
	render: function () {
		return (
			<form onSubmit={this._handleSubmit}>
				<p>Enter a Github username: </p>
				<input ref='userInput' type="text"/>
				<button>Go!</button>
			</form>
		);
	}

});

module.exports = GithubSearchForm;