<script>
	import { fade } from 'svelte/transition';
</script>

<style>
	section {
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	article {
		width: 50%;
	}
</style>

<section id="about" in:fade>
	<article>
		<h2>About me</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit soluta voluptatum sint
			vero tenetur aut consectetur enim quis consequuntur hic exercitationem iusto voluptate
			laudantium repudiandae ducimus quos necessitatibus nisi eum corporis rem velit illum, eius
			dignissimos. Ullam, impedit.
		</p>
	</article>
</section>
