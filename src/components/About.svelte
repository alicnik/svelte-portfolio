<script>
	import { fade } from 'svelte/transition';
	import profilePhoto from '../assets/images/profile-photo.jpg';
	import Editor from './Editor.svelte';
	import { aboutCode as value } from '../assets/codeValues';
</script>

<section id="about" transition:fade>
	<article>
		<figure>
			<img src={profilePhoto} alt="Alex Nicholas headshot" />
			<figcaption>Alex Nicholas</figcaption>
		</figure>
		<div class="content">
			<p>
				I have a natural affinity for solving computing problems with a high degree of both tenacity
				and resourcefulness. Combining a master’s degree in International Business Law with
				experience in client-facing luxury service industries, I am able to deliver logical and
				innovative solutions that prioritise user experience.
			</p>
		</div>
	</article>
</section>
<Editor {value} />

<style>
	section#about {
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: var(--off-white);
		max-width: 1080px;
		margin: 0 auto;
	}

	article {
		width: 85%;
		display: flex;
		justify-content: space-between;

		div.content {
			max-width: 422px;
			padding: 0 0 2rem 2rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			color: var(--off-white);
			font-size: 1.1rem;
			line-height: 1.5rem;
		}
	}

	figure {
		img {
			width: clamp(200px, 30vw, 400px);
			outline: 1px solid var(--off-white);
			outline-offset: 3px;
		}
	}
</style>
