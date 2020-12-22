<script>
	import { fade } from 'svelte/transition';
	import Carousel from './Carousel.svelte';
</script>

<style>
	section {
		overflow-y: auto;
		height: 100%;
	}
</style>

<section id="projects" in:fade>
	<h2 hidden>My projects</h2>
	<Carousel />
</section>
