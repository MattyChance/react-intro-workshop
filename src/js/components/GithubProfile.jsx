var $ = require("jquery");

var React = require('react');

var GithubProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {};
	},
	componentDidMount: function() {
		var url = 'https://api.github.com/users/' + this.props.username;
		$.getJSON(url).then(function(res) {
			this.setState({user: res});
		}.bind(this));
	},
	render: function() {
		if(!this.state.user) {
			return (
				<div>
					<p>LOADING</p>
				</div>
				);
		} else {
			return (
				<div className="github-user">
				  	<img className="github-user__avatar" src={this.state.user.avatar_url}/>
				  <div className="github-user__info">
				    <p>{this.state.user.name}</p>
				    <p>{this.state.user.bio}</p>
				  </div>
				</div>
			);
		}
	}

});

module.exports = GithubProfile;