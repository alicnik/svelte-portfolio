<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import TagCloud from 'TagCloud';
	import Editor from './Editor.svelte';
	import { skillsCode as value } from '../assets/codeValues';

	const container = '.cloud';
	const texts = [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React',
		'Svelte',
		'Docker',
		'Azure DevOps',
		'Sass',
		'Node.js',
		'Express',
		'MongoDB',
		'Mongoose',
		'Python',
		'Flask',
		'PostgreSQL',
		'Git',
		'Snowpack',
		'Jest',
		'React Testing Library',
	];
	const options = {
		radius: 300,
		maxSpeed: 'slow',
	};

	onMount(() => {
		const tagCloud = TagCloud(container, texts, options);
		return () => tagCloud.destroy();
	});
</script>

<section id="skills" transition:fade>
	<article>
		<div class="cloud" />
		<p>
			While I am perhaps most at home on the front end, I take a holistic approach to projects,
			understanding the entire architecture and developing confidence in all areas of the codebase.
			Accordingly, I have built a range of skills to ensure that I am well positioned to improve
			upon and debug any part of an application.
		</p>

		<p>
			I am constantly on the lookout for new ways to hone and improve my skills, as well as new
			languages and frameworks to learn. I used this website as an opportunity to learn Svelte; you
			can see the code by clicking on the banner towards the bottom of the page.
		</p>
	</article>
</section>
<Editor {value} />

<style>
	section {
		height: 100%;
		display: flex;
		justify-content: center;
		color: var(--off-white);
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 60%;
		height: 100%;

		p {
			font-size: 1.1rem;
			margin: 1rem;
			text-align: center;
		}
	}

	div.cloud {
		cursor: default;
	}
</style>
