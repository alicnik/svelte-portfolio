<script>
	import { link } from 'svelte-spa-router';
</script>

<style>
	a {
		text-decoration: none;
		color: var(--dark-text);
	}
	h1 {
		font-family: 'Raleway', sans-serif;
		font-style: italic;
		font-weight: 900;
		font-size: 8rem;
		width: 100%;
		cursor: pointer;
	}
</style>

<a href="/" use:link><h1>AN</h1></a>
