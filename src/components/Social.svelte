<script>
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
	import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
	import IconLink from './IconLink.svelte';
</script>

<div class="social">
	<IconLink hoverColour="#586069" href="https://github.com/alicnik" icon={faGithub} />
	<IconLink hoverColour="#1da1f2" href="https://twitter.com/alicnik" icon={faTwitter} />
	<IconLink hoverColour="#2867B2" href="https://linkedin.com/in/ajdn" icon={faLinkedinIn} />
</div>

<style>
	.social {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>
