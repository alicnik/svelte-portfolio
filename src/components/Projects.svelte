<script>
    import { fade } from "svelte/transition";
    import Editor from "./Editor.svelte";
    import { projectList } from "../assets/project-list";
</script>

<style>
    section {
        overflow-y: auto;
        height: 100%;
        color: var(--off-white);
    }
    .carousel-slide {
        display: flex;
        align-items: center;
    }

    .slide-text {
        width: 20vw;
    }

    .slide-image {
        width: 40vw;
        border-radius: 10px;
        overflow: hidden;
    }
</style>

<section id="projects" transition:fade>
    <h2 hidden>My projects</h2>
    {#each projectList as project}
        <div class="carousel-slide">
            <img
                class="slide-image"
                src={project.imgSrc}
                alt={project.imgAltText} />
            <div class="slide-text">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
            </div>
        </div>
    {/each}
</section>
<Editor value="Hello Projects!" />
