<script>
	import Editor from './Editor.svelte';
	import { contactCode as value } from '../assets/codeValues';
	import { fade } from 'svelte/transition';
	import emailjs, { init } from 'emailjs-com';

	interface Touched {
		[index: string]: boolean;
		name: boolean;
		email: boolean;
		message: boolean;
	}

	let name = '';
	let email = '';
	let message = '';
	let touched: Touched = {
		name: false,
		email: false,
		message: false,
	};
	let success = false;

	init('user_Iusuy42LIpjSZSX8bT4a5');

	function handleBlur(e: FocusEvent) {
		const input = e.target as HTMLInputElement | HTMLTextAreaElement;
		if (!input) {
			return;
		}
		touched[input.name] = true;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!touched.name || !touched.email || !touched.message) {
			setAllTouched(true);
			return;
		}
		emailjs.send('service_364d88k', 'template_49mrezz', { name, email, message }).then(
			() => {
				name = '';
				email = '';
				message = '';
				success = true;
				setAllTouched(false);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	function handleInput(e: Event) {
		if (success) {
			success = false;
		}
	}

	function setAllTouched(value: boolean) {
		for (const input in touched) {
			touched[input] = value;
		}
	}
</script>

<section id="contact" transition:fade>
	<h2>Get in touch</h2>
	<form on:submit={handleSubmit}>
		<label for="name">
			Name
			<input
				on:blur={handleBlur}
				on:input={handleInput}
				id="name"
				name="name"
				bind:value={name}
				type="text"
				required={touched.name}
			/>
		</label>
		<label for="email">
			Email address
			<input
				on:blur={handleBlur}
				on:input={handleInput}
				id="email"
				name="email"
				bind:value={email}
				type="email"
				required={touched.email}
			/>
		</label>
		<label for="message">
			Message
			<textarea
				on:blur={handleBlur}
				on:input={handleInput}
				id="message"
				name="message"
				bind:value={message}
				rows="5"
				required={touched.message}
			/>
		</label>
		<button type="submit" disabled={success} class:success>{success ? 'Sent' : 'Submit'}</button>
	</form>
	<div class="direct-contact">
		<p>Alternatively, you can email me directly at:</p>
		<address>
			<a href="mailto:me@alexnicholas.dev">me@alexnicholas.dev</a>
		</address>
	</div>
</section>
<Editor {value} />

<style>
	section {
		color: var(--off-white);
		padding: 7rem 10rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			font-size: 4rem;
			align-self: flex-start;
			text-transform: uppercase;
			font-style: italic;
			margin-bottom: 2rem;
		}
	}
	form {
		display: flex;
		width: clamp(300px, 20vw, 600px);
		flex-direction: column;
		justify-content: space-around;
		height: 500px;

		label {
			display: flex;
			flex-direction: column;
			margin-bottom: 4px;
		}

		input,
		textarea {
			padding: 0.6rem 0.3rem 0.3rem;
			font-size: 1.1rem;
			background: none;
			border: none;
			border-bottom: 1px solid var(--off-white);
			color: var(--off-white);
			font-family: var(--raleway);
		}

		button {
			align-self: flex-end;
			padding: 0.8rem 1.8rem;
			font-size: 1.1rem;
			border: 1px solid var(--off-white);
			background: none;
			color: var(--off-white);
			cursor: pointer;
			transition: 0.2s;

			&:not(.success):hover {
				transform: scale(1.03);
			}
		}
	}

	.success {
		color: rgb(20, 201, 20);
		border-color: rgb(20, 201, 20);
	}

	div.direct-contact {
		padding-top: 2rem;
	}
	a {
		color: var(--off-white);
	}
</style>
