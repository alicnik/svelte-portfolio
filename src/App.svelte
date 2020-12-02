<script>
	import Router from 'svelte-spa-router';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import { routes } from './routes';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,900;1,900&display=swap');

	:global(:root) {
		--dark-bg: #1f2124;
		--dark-text: #1f2124;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(body) {
		min-height: 100vh;
		background-color: var(--dark-bg);
		display: grid;
		grid-template-columns: minmax(250px, 15vw) 85vw;
		grid-template-rows: 90vh 10vh;
	}
</style>

<Header />
<main>
	<Router {routes} />
</main>

<Footer />
