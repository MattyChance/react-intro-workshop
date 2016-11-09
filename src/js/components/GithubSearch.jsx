var React = require('react');
var GithubProfile = require('./GithubProfile');
var GithubSearchForm = require('./GithubSearchForm')

var GithubSearch = React.createClass({
	getInitialState: function() {
		return {};
	},
	_handleSearch: function(searchTerm) {
		this.setState({user: searchTerm});
	},
	//add a method to handle the search
	render: function() {
		return (
			<div>
				<GithubSearchForm onSearch={this._handleSearch}/>
				{this.state.user ? <GithubProfile username={this.state.user}/> : null}
			</div>
		);
	}
});


module.exports = GithubSearch;