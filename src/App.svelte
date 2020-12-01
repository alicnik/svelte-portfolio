<script>
	import Nav from './components/Nav.svelte';
</script>

<style>
	:global(:root) {
		--dark-bg: #1f2124;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(body) {
		min-height: 100vh;
		background-color: var(--dark-bg);
	}
</style>

<header>
	<Nav />
</header>
<main>
	<!-- main -->
</main>
<footer>
	<!-- footer -->
</footer>
