<script>
    import Icon from "fa-svelte";

    export let href;
    export let icon;
    export let hoverColour = "#24292e";
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

<a
    style="--hover-color: {hoverColour}"
    {href}
    target="_blank"
    rel="nofollow noopener">
    <Icon {icon} />
</a>
