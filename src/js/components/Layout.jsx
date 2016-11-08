var React = require('react');

var Layout = React.createClass({
	render: function() {
		return(
			<div>
			  	<nav className="main-nav">
    				<ul>
      					<li><a href="/">Home</a></li>
   					</ul>
  			  	</nav>
  				<main>
  					{this.props.children}
  				</main>
  				<footer>
    			Copywhat 2016 Kittens
  				</footer>
			</div>
		);
	}
});

module.exports = Layout;