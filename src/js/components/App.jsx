var React = require('react');
var ImageCaption = require('./ImageCaption');
var Layout = require('./Layout');
var GuessTheNumber = require('./GuessTheNumber');
var YouClicked = require('./YouClicked');
var CharacterCounter = require('./CharacterCounter');
var CharacterLimit = require('./CharacterLimit');
var NumberGuessing = require('./NumberGuessing');
var GithubProfile = require('./GithubProfile');
var GithubSearchForm = require('./GithubSearchForm');
var GithubSearch = require('./GithubSearch')

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
	// renderImage:function(object) {
	// 	return <ImageCaption key={object.id} source = {object.source} text= {object.text}/>
	// },
	render: function() {
		return (
		<main>
			<h1>My first React App</h1>
			<hr/>
			<h2>testing ImageCaption</h2>
			<div>
				{imageList.map(item => <ImageCaption key={item.id} source = {item.source} text= {item.text}/>)}
			</div>
			<hr/>
			<h2>Testing layout</h2>
			<Layout children={
				<div>
					<h2>About</h2>
						<p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
				</div>
			}/>
			<hr/>
			<h2>Guess the number!</h2>
			<GuessTheNumber numberToGuess={34}/>
			<hr/>
			<h2>You clicked!</h2>
			<YouClicked/>
			<hr/>
			<h2>Character Counter</h2>
			<CharacterCounter/>
			<hr/>
			<h2>Character Limit</h2>
			<CharacterLimit limit={10}/>
			<hr/>
			<h2>Guess the Number V1.0!</h2>
			<NumberGuessing/>
			<hr/>
			<h2>Components and AJAX</h2>
			<GithubProfile username={'gaearon'}/>
			<hr/>
			<h2>inter-component communication</h2>
			<GithubSearch/>
			<hr/>
		</main>
		)
	}
});

module.exports = App;