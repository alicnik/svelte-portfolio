import minesweeper from './images/minesweeper.jpeg';
import pokemon from './images/pokemon.jpeg';
import sentired from './images/sentired.jpeg';
import wilderness from './images/wilderness.jpeg';

interface Project {
	title: string;
	summary: string;
	imgSrc: string;
	imgAltText: string;
	href: string;
	github: string;
}

export const projectList: Project[] = [
	{
		title: 'Minesweeper',
		summary:
			'My first project was a challenge to build a game using Vanilla JS. I chose Minesweeper as it was very much the game of my childhood and also presented a technical challenge in conquering recursion. Having cracked the recursive algorithm early on, I found myself with time to pay tribute to the nostalgia I felt in developing this game and implemented an immersive playing environment to transport users back in time.',
		imgSrc: minesweeper,
		imgAltText: 'minesweeper game on Windows XP desktop screenshot',
		href: 'https://alicnik.github.io/minesweeper/',
		github: 'https://github.com/alicnik/minesweeper',
	},
	{
		title: 'Pokémon 48-Hour Hackathon',
		summary:
			'The goal of this pair-coded hackathon was to create an application using React that consumed a public API. My partner and I chose the Pokémon API as it is well maintained and robust with excellent documentation. On this firm foundation, we built a game which emulated the feel of a Pokémon battle from the original games. The battle logic took me down to the wire but by the end we had a fully functioning game that elegantly consumed the API and provided a convincing, coherent user experience.',
		imgSrc: pokemon,
		imgAltText: 'pokemon game screenshot',
		href: 'https://alicnik.github.io/pokeapi/#/',
		github: 'https://github.com/alicnik/pokeapi',
	},
	{
		title: 'Wilderness',
		summary:
			'In a group of three, we set about creating a full-stack MERN application that consumed a public API. We wanted to create an application centred around a smooth and comprehensive user experience. During development, we prioritised bug fixes over feature improvements, seeking to ensure that we had a solid foundation for an app that could be expanded and built upon over time.',
		imgSrc: wilderness,
		imgAltText: 'wilderness camping app welcome screen screenshot',
		href: 'https://wilderapp.herokuapp.com/#/',
		github: 'https://github.com/alicnik/wilderapp',
	},
	{
		title: 'Sentired',
		summary:
			'A pair project using React, Python, Flask and SQL, we wanted to explore some of the AI APIs available and chose to use the Google Natural Language API to perform sentiment analysis on texts. Expanding upon this, we sought to connect the UI with the content the user was consuming to create an Emotional UI. We created a wrapper for Reddit which tracks the sentiment to which the user is exposed and reflects those positive and negative emotions in the UI.',
		imgSrc: sentired,
		imgAltText: 'in-app screenshot from sentired',
		href: 'https://sentired.herokuapp.com/',
		github: 'https://github.com/alicnik/sentired',
	},
];
