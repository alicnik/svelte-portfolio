<script>
    import { onMount } from "svelte";
    import TagCloud from "TagCloud";

    const container = ".content";
    const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Svelte",
        "Docker",
        "Azure DevOps",
        "Sass",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Python",
        "Flask",
        "PostgreSQL",
        "Git",
    ];
    const options = {
        radius: 200,
    };

    onMount(() => {
        const tagCloud = TagCloud(container, texts, options);
        return () => tagCloud.destroy();
    });
</script>

<div class="content" />
