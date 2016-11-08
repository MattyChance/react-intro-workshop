var React = require('react');

var LearningLifecycle = React.createClass({
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			homeMounted: true,
			homeLink: props.initialLinkName
		}
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	onChnageHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted;
		});
	}
	componentWillMount() {
		console.log("Component will mount");
	}
	componentDidMount() {
		console.log("Component did mount");
	}
	componentWillReceiveProps(nextProps) {
		console.log("Component will receive props", nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should COmponent update", nextProps, nextState);
		return true;
	}
	copmonentWillUpdate(nextProps, nextState) {
		console.log("component will update", nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Component did update", prevProps, prevState);
	}
	componentWillUnmount() {
		console.log("component will Unmount")
	}

	render() {
		let homeCmp = "";
		if (this.state.homeMounted) {
			homeCmp = (
				<Home
				name = {"Matty"}
				initialAge={27}
				greet={this.onGreet}
				changeLink={this.onChangeLinkName.bind(this)}
				initialLinkName={this.state.homeLink}
				/>
			);
		}
		return (
			<div homelink={this.state.homeLink}>
				<p>{homeCmp}</p>
				<button onClick={this.onChnageHomeMounted.bind(this)}></button>
			</div>

			)
	}

});

module.exports = LearningLifecycle;
