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
		display: grid;
		grid-template-columns: minmax(300px, 15vw) auto;
		grid-template-rows: 100vh;
		font-family: var(--raleway);
	}

	main {
		position: relative;
		overflow: hidden;
		height: 97vh;
	}
</style>
