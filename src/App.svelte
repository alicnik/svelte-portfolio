<script>
	import Router from 'svelte-spa-router';
	import Header from './components/Header.svelte';
	import routes from './routes';
</script>

<Header />
<main>
	<Router {routes} />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;900&display=swap');

	:global(:root) {
		--dark-bg: #1f2124;
		--dark-text: #1f2124;
		--off-white: #eeeeee;
		--raleway: 'Raleway', Arial, sans-serif;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(body) {
		height: 100vh;
		background-color: var(--dark-bg);
		display: flex;
		font-family: var(--raleway);

		@media only screen and (max-width: 414px) {
			flex-direction: column;
		}
	}

	main {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
