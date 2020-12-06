import minesweeper from './images/minesweeper.jpeg';
import pokemon from './images/pokemon.jpeg';
import sentired from './images/sentired.jpeg';
import wilderness from './images/wilderness.jpeg';

interface Project {
	title: string;
	summary: string;
	imgSrc: string;
	imgAltText: string;
}

export const projectList: Project[] = [
	{
		title: 'Minesweeper',
		summary: 'Lorem ipsum dolor sit amet',
		imgSrc: minesweeper,
		imgAltText: 'minesweeper game on Windows XP desktop screenshot',
	},
	{
		title: 'Pokémon 48-Hour Hackathon',
		summary: 'Lorem ipsum dolor sit amet',
		imgSrc: pokemon,
		imgAltText: 'pokemon game screenshot',
	},
	{
		title: 'Wilderness',
		summary: 'Lorem ipsum dolor sit amet',
		imgSrc: wilderness,
		imgAltText: 'wilderness camping app welcome screen screenshot',
	},
	{
		title: 'Sentired',
		summary: 'Lorem ipsum dolor sit amet',
		imgSrc: sentired,
		imgAltText: 'in-app screenshot from sentired',
	},
];
