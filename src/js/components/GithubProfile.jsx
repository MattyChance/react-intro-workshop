var $ = require("jquery");

var React = require('react');

var GithubProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {};
	},
	fetchData: function() {
		var url = 'https://api.github.com/users/' + this.props.username + '?access_token=39a35e270c3ea8369c5ffdfe29b5cae53bf44315';
		$.getJSON(url).then(function(res) {
			this.setState({user: res});
		}.bind(this));
	},
	componentDidMount: function() {
		this.fetchData();
	},
	componentDidUpdate: function(prevProps) {
		if(this.props.username !== prevProps.username) {
			this.fetchData();
		}
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