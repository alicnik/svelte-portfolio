<script>
	import { link } from 'svelte-spa-router';

	let current = 0;
</script>

<style>
	nav {
		width: 100%;
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

	a.selected::after {
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		background-color: black;
		opacity: 0.7;
	}
</style>

<nav>
	<ul>
		<li><a href="/about" use:link on:click={() => (current = 0)}>About</a></li>
		<li><a href="/skills" use:link on:click={() => (current = 1)}>Skills</a></li>
	</ul>
</nav>
