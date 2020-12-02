<script>
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Icon from 'fa-svelte';

	export let href: string;
	export let icon: IconDefinition;
	export let hoverColour: string = '#24292e';
</script>

<style>
	a {
		color: black;
		font-size: 40px;
		transition: 0.1s ease-in;
	}
	a:hover {
		transform: scale(1.15);
		color: var(--hover-color);
	}
</style>

<a style="--hover-color: {hoverColour}" {href} target="_blank" rel="nofollow noopener"><Icon
		{icon} /></a>
