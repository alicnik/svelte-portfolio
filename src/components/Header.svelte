<script>
	import { clickOutside } from '../lib/clickOutside';
	import { push } from 'svelte-spa-router';
	import Nav from './Nav.svelte';
	import Social from './Social.svelte';

	let isMobile = window.innerWidth <= 414;
	let mobileMenuOpen = false;

	function handleClick() {
		isMobile ? (mobileMenuOpen = !mobileMenuOpen) : push('#/');
	}

	function handleClickOutside() {
		if (!isMobile) {
			return;
		}
		if (mobileMenuOpen) {
			mobileMenuOpen = false;
		}
	}
</script>

<header class:mobileMenuOpen use:clickOutside on:click_outside={handleClickOutside}>
	<h1 on:click={handleClick}>AN</h1>
	<Nav />
	<Social />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: rgb(240, 239, 233);
		padding: 0.5rem 2rem 1.5rem;
		width: minmax(300px, 15vw);
		transition: 1s ease;

		@media only screen and (max-width: 414px) {
			height: 8vh;
			overflow: hidden;
		}
	}
	.mobileMenuOpen {
		height: 100vh;
		overflow: initial;
	}
	h1 {
		font-family: 'Raleway', sans-serif;
		text-decoration: none;
		color: var(--dark-text);
		font-style: italic;
		font-weight: 900;
		font-size: 8rem;
		width: 100%;
		cursor: pointer;
		text-align: center;

		@media only screen and (max-width: 414px) {
			font-size: 2.2rem;
		}
	}
</style>
