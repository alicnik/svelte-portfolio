<script>
	import { projectList } from '../assets/project-list';
</script>

<style>
	.carousel-slide {
		display: flex;
		align-items: center;
	}

	.slide-text {
		width: 20vw;
	}

	.slide-image {
		width: 40vw;
		border-radius: 10px;
		overflow: hidden;
	}
</style>

{#each projectList as project}
	<div class="carousel-slide">
		<img class="slide-image" src={project.imgSrc} alt={project.imgAltText} />
		<div class="slide-text">
			<h3>{project.title}</h3>
			<p>{project.summary}</p>
		</div>
	</div>
{/each}
