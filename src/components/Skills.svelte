<script>
    import { fade } from "svelte/transition";
    import Editor from "./Editor.svelte";
    import TagCloud from "./TagCloud.svelte";
</script>

<style>
    section {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>

<section id="skills" in:fade>
    <TagCloud />
</section>
<Editor value="Hello Skills!" />
