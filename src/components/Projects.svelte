<script>
	import { fade } from 'svelte/transition';
	import Editor from './Editor.svelte';
	import { projectList } from '../assets/project-list';
	import { projectCode } from '../assets/codeValues';
</script>

<section id="projects" transition:fade>
	<h2 hidden>My projects</h2>
	{#each projectList as project}
		<div class="carousel-slide">
			<a href={project.href}>
				<img class="slide-image" src={project.imgSrc} alt={project.imgAltText} />
			</a>
			<div class="slide-text">
				<h3>{project.title}</h3>
				<p>{project.summary}</p>
				<a href={project.github}>View the README on GitHub</a>
			</div>
		</div>
	{/each}
</section>
<Editor value={projectCode} />

<style>
	section {
		overflow-y: auto;
		height: 100%;
		color: var(--off-white);
		padding: 4rem 0;
	}
	.carousel-slide {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 2rem;
	}

	.slide-text {
		width: 20vw;

		h3 {
			text-transform: uppercase;
			margin-bottom: 1rem;
		}

		a {
			margin-top: 1rem;
			display: inline-block;
			color: var(--off-white);
		}
	}

	.slide-image {
		width: 40vw;
		border-radius: 10px;
		overflow: hidden;
	}
</style>
