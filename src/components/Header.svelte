<script>
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	import Social from './Social.svelte';
</script>

<style>
	header {
		grid-row: 1 / 3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: rgb(240, 239, 233);
		padding: 0.5rem 2rem 1.5rem;
	}
</style>

<header>
	<Logo />
	<Nav />
	<Social />
</header>
