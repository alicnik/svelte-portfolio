<script>
	import { link } from 'svelte-spa-router';
	import active from 'svelte-spa-router/active.js';

	const routes = ['about', 'skills', 'projects', 'contact'];
</script>

<style>
	nav {
		width: 100%;
		flex: 1;
		padding-top: 5rem;
	}

	li {
		list-style: none;
	}

	a {
		font-family: 'Raleway', sans-serif;
		font-weight: 900;
		text-transform: uppercase;
		list-style: none;
		font-size: 3rem;
		line-height: 4rem;
		cursor: pointer;
		position: relative;
		width: min-content;
		text-decoration: none;
		color: var(--dark-text);
	}

	a::after {
		content: '';
		width: 0;
		height: 7px;
		background-color: var(--dark-text);
		position: absolute;
		left: 0;
		top: 90%;
		transition: 0.3s ease-in;
	}

	a:hover::after {
		width: 100%;
	}

	:global(a.active::after) {
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		background-color: black;
		opacity: 0.7;
	}
</style>

<nav>
	<ul>
		{#each routes as route}
			<li><a href={`/${route}`} use:link use:active>{route}</a></li>
		{/each}
	</ul>
</nav>
