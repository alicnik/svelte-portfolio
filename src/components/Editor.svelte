<script>
	import { faCode } from '@fortawesome/free-solid-svg-icons';
	import Icon from 'fa-svelte';
	import { onMount } from 'svelte';
	import CodeMirror from '../lib/codeMirror';
	import '../lib/material-palenight.css';

	let expanded = false;
	let editor: HTMLTextAreaElement;
	export let value: string;

	onMount(() => {
		CodeMirror.fromTextArea(editor, {
			mode: 'htmlmixed',
			theme: 'material-palenight',
			value: '',
			lineNumbers: true,
			indentWithTabs: true,
			lineWrapping: true,
			readOnly: true,
		});
	});
</script>

<aside class:expanded>
	<header on:click={() => (expanded = !expanded)}>
		Click here to
		{expanded ? 'hide' : 'see'}
		this page's code &#8594;
		<Icon class="icon" icon={faCode} />
	</header>
	<textarea bind:this={editor} bind:value />
</aside>

<style>
	aside {
		position: absolute;
		top: 97.5vh;
		background: var(--dark-bg);
		right: 0;
		left: 0;
		bottom: 0;
		transition: 1.1s cubic-bezier(0.5, 0, 0.5, 1);
		padding: 7px 2rem;
		box-shadow: 0 -10px 10px 2px var(--dark-bg);
	}

	.expanded {
		top: 3vh;
		padding: 2rem;
	}

	header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-bottom: 2rem;
		cursor: pointer;
		color: var(--off-white);
	}

	:global(.icon) {
		font-size: 1.5rem;
		transition: 0.2s ease;
		margin-left: 0.5rem;

		&:hover {
			transform: scale(1.2);
			cursor: pointer;
		}
	}
</style>
